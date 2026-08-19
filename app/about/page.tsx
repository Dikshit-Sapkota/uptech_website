import Image from "next/image";
import InnerHeroBanner from "../components/usefullcomponents'/innerpage_hero";
import Team from "./Team";
import Getimageurl from "../Getimageurl";

interface AboutDetail {
    number: string;
    information: string;
}

interface Country {
    country_short_name: string;
    country_name: string;
    country_image: number;
}

interface About {
    short_heading: string;
    heading: string;
    description: string;
    details: AboutDetail[];
    image: number;
    country: Country[];
}

interface AboutResponse {
    acf: {
        about: About;
    };
}

export const metadata = {
    title: "About Us"
};

export default async function About() {

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/about?_fields=acf.about`,
        {
            next: {
                revalidate: Number(process.env.NEXT_PUBLIC_CACHE_TIME),
            },
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch about data");
    }

    const data: AboutResponse[] = await res.json();

    const about = data[0]?.acf?.about;

    const countries = await Promise.all(
        about?.country?.map(async (item) => ({
            ...item,
            imageUrl: await Getimageurl({
                id: item.country_image
            }),
        })) ?? []
    );

    return (
        <main className="">

            <InnerHeroBanner title="About Us" />

            <div className="flex flex-wrap flex-col-reverse md:flex-row items-center pt-5 pb-5 md:pt-20 md:pb-20">

                <div className="md:w-[48%] w-full h-100 md:h-120 flex items-end bg-contain bg-center bg-no-repeat bg-[url('/world.png')]">

                    <div className="grid gap-2 grid-cols-2">

                        {countries.map((item, index) => (
                            <div
                                key={index}
                                className="flex justify-start shadow-xs! bg-white shadow-amber-500 rounded-2xl p-1 items-center gap-2"
                            >

                                <Image
                                    height={100}
                                    width={100}
                                    src={item.imageUrl}
                                    alt={item.country_name}
                                    className="border rounded-full bg-white h-15 w-15 border-amber-500"
                                />

                                <span>
                                    <p className="text-sm! font-semibold">
                                        {item.country_short_name}
                                    </p>

                                    <p className="text-xs!">
                                        {item.country_name}
                                    </p>
                                </span>

                            </div>
                        ))}

                    </div>
                </div>

                <div className="md:w-[48%] w-full flex flex-col gap-5 p-2 items-start">

                    <p className="small_heading">
                        {about?.short_heading}
                    </p>

                    <h2>
                        {about?.heading}
                    </h2>

                    <p className="text-sm!">
                        {about?.description}
                    </p>

                    <div className="grid grid-cols-3 md:gap-10 gap-5">

                        {about?.details?.map((stat, index) => (
                            <span
                                key={index}
                                className="flex flex-col items-center justify-center p-4 shadow-sm shadow-amber-500 rounded-2xl"
                            >

                                <p className="text-2xl! text-amber-500! font-semibold">
                                    {stat.number}
                                </p>

                                <p className="text-sm!">
                                    {stat.information}
                                </p>

                            </span>
                        ))}

                    </div>
                </div>
            </div>

            <Team />

        </main>
    );
}