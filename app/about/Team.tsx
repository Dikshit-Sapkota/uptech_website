import Image from "next/image";

type Detail = {
    name: string;
    image: number;
    level: string;
};

type Team = {
    designation: string;
    details: Detail[];
};

type TeamGroup = {
    team: Team[];
};

type TeamResponse = {
    acf?: {
        member?: {
            teams?: TeamGroup[];
        };
    };
};

type ImageResponse = {
    source_url?: string;
};

export default async function Team() {

    // Get team data from WordPress
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/about?_fields=acf.member`,
        {
            next: {
                revalidate: Number(process.env.NEXT_PUBLIC_CACHE_TIME),
            },
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch team data");
    }

    const data: TeamResponse[] = await res.json();

    const teams = data[0]?.acf?.member?.teams ?? [];

    /*
     * Convert:
     *
     * teams[]
     *   -> team[]
     *       -> details[]
     *
     * into one simple array of team groups.
     */
    const teamGroups: Team[] = teams.flatMap(
        (group) => group.team ?? []
    );


    /*
     * Get WordPress image URL
     */
    async function getImageUrl(id: number) {

        if (!id) {
            return "/team/user.avif";
        }

        try {

            const imageRes = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/media/${id}?_fields=source_url`,
                {
                    next: {
                        revalidate: Number(process.env.NEXT_PUBLIC_CACHE_TIME),
                    },
                }
            );

            if (!imageRes.ok) {
                return "/team/user.avif";
            }

            const imageData: ImageResponse = await imageRes.json();

            return imageData.source_url ?? "/team/user.avif";

        } catch {
            return "/team/user.avif";
        }
    }


    /*
     * Get all image URLs in parallel
     */
    const teamsWithImages = await Promise.all(

        teamGroups.map(async (group) => ({

            ...group,

            details: await Promise.all(

                group.details.map(async (detail) => ({

                    ...detail,

                    image_url: await getImageUrl(detail.image),

                }))

            ),

        }))

    );


    return (
        <main className="flex flex-col items-start gap-10 pb-20 pt-10">

            {/* ================================
          HEADER
      ================================= */}

            <div className="flex w-full flex-col items-center gap-5 rounded-2xl bg-[#f59f0b17] p-5 pb-10 pt-10">

                <p className="small_heading">
                    Team
                </p>

                <h2 className="text-center md:w-[50%]">
                    People Behind The Uptech Solution Success
                </h2>

            </div>


            {/* ================================
          TEAM
      ================================= */}

            {teamsWithImages.map((person, index) => (

                <div
                    key={`${person.designation}-${index}`}
                    className="flex w-full flex-col pb-5 items-start gap-3 px-4"
                >

                    {/* Designation */}

                    <h3 className="m-2 rounded-2xl border-l-10 border-amber-500 bg-[#f59f0b17] px-4 pl-2 text-2xl font-medium capitalize">
                        {person.designation}
                    </h3>


                    {/* Members */}

                    <div className="grid w-full gap-5 md:grid-cols-4">

                        {person.details.map((detail, sn) => (

                            //   <div
                            //     key={`${detail.name}-${sn}`}
                            //     className="flex w-full flex-col items-center justify-center gap-3 rounded-2xl p-2 shadow-xs shadow-amber-500"
                            //   >

                            //     {/* Image */}

                            //     <Image
                            //       height={100}
                            //       width={200}
                            //       src={detail.image_url}
                            //       alt={detail.name}
                            //       className="h-80 w-full rounded-2xl border border-[#f59f0b17] bg-cover bg-center object-cover"
                            //     />


                            //     {/* Name / Level */}

                            //     <div className="-mt-12 mb-5 flex w-[88%] flex-col items-center rounded-2xl border border-[#f59f0b17] bg-white p-2">

                            //       <p className="text-xl font-medium">
                            //         {detail.name}
                            //       </p>

                            //       <p className="text-sm">
                            //         {detail.level}
                            //       </p>

                            //     </div>

                            //   </div>
                            <div key={sn} className="shadow-xs p-2 flex flex-col gap-3 justify-center items-center rounded-2xl shadow-amber-500 w-full">
                                <Image height={100} width={200} src={detail.image_url} alt={detail.name} className="w-full! bg-cover bg-center h-80 border-[#f59f0bc5] border  rounded-2xl " />
                                <div className="bg-white -mt-12 p-2 w-[88%] rounded-2xl flex flex-col items-center border  border-[#f59f0bb2] mb-5">
                                    <p className="font-medium! header_items text-xl! text-shadow-sm">{detail.name}</p>
                                    <p className="text-sm!">{detail.level}</p>
                                </div>
                            </div>

                        ))}

                    </div>

                </div>

            ))}

        </main>
    );
}