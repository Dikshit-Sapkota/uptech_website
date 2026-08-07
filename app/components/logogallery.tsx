
import Getimageurl from "../Getimageurl";

export default async function Imagegallery() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/home?_fields=acf.logos_gallery`,
        {
            next:
            {
                revalidate: Number(process.env.NEXT_PUBLIC_CACHE_TIME)
            }
        });
    const data = await res.json();

    const logos: number[] = data[0]?.acf?.logos_gallery ??[];

    const imageUrls = await Promise.all(

        logos.map(async (logoId) => {

            return await Getimageurl({

                id: logoId,

            });

        })

    );
    return (imageUrls);
}