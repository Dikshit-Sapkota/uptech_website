import Getimageurl from "@/app/Getimageurl";
import Button from "../usefullcomponents'/button";
import Image from "next/image";

export default async function HeroBanner()
{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/home?_fields=acf.hero`,
        {
            next:
            {
                revalidate:3600,
            }
        }

    );
    const data = await res.json();
    const hero = data[0].acf.hero;
    const imageUrl = await Getimageurl({ id: hero.image });
    return(
        <main className="flex md:flex-row flex-col gap-3 justify-between md:pt-20! md:pb-20! bg-linear-to-r from-[#f59f0b17] to-white rounded-2xl items-center ">
            <div className="md:w-[50%]  flex flex-col items-start gap-3 ">
                <p className="small_heading">{hero.small_title}</p>
                <h1 >{hero.hero_heading}</h1>
                <p >{hero.hero_description}</p>
                <div className="flex gap-2 items-center">
                    <Button name={hero.services_button} link="/services"/>
                    <Button name={hero.portfolio_button} link="/portfolio"/>

                </div>
            </div>

            <div className="md:w-[50%] w-full md:h-120 h-80 bg-contain bg-center bg-no-repeat "
              style={{ backgroundImage: `url(${imageUrl})` }}>
                {/* <Image className="w-full object-cover" height={400} width={400} src={imageUrl} alt=""/> */}
                 </div>
        </main>
    );
}