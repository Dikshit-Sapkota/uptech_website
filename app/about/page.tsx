import Image from "next/image";
import InnerHeroBanner from "../components/usefullcomponents'/innerpage_hero";
import Team from "./Team";
export const metadata =
{
    title: "About Us"
};

export default function About() {
    const stats = [
        {
            number: "2014",
            text: "Founded"
        },
        {
            number: "98%",
            text: "Customer Satisfaction"
        },
        {
            number: "800+",
            text: "project Completed"
        }

    ]

    const country = [
       
        {
            photo_url: "/opera.png",
            cou_name: "Aus",
            Full_name: "Australia"
        },
        {
            photo_url: "/mount.webp",
            cou_name: "Nepal",
            Full_name: "Nepal"
        },
         {
            photo_url: "/uk.jpg",
            cou_name: "UK",
            Full_name: "United Kingdom"

        },
        {
            photo_url: "/statueliberty.avif",
            cou_name: "USA",
            Full_name: "United State of America"

        },
    ]
    return (
        <main className="">
            <InnerHeroBanner title="About Us" />
            <div className="flex flex-wrap flex-col-reverse md:flex-row items-center pt-5 pb-5 md:pt-20 md:pb-20 ">
                <div className="md:w-[48%] w-full h-100 md:h-120  flex items-end bg-contain bg-center bg-no-repeat  bg-[url('/world.png')]">
                    <div className="grid  gap-2 grid-cols-2">
                        {country.map((item, index) => (
                            <div key={index} className="flex justify-start shadow-xs! bg-white shadow-amber-500 rounded-2xl p-1 items-center gap-2">
                                <Image height={100} width={100} src={item.photo_url} alt={item.Full_name} className="border rounded-full bg-white  h-15 w-15 border-amber-500" />
                                <span>
                                    <p className="text-sm! font-semibold">{item.cou_name}</p>
                                    <p className="text-xs!">{item.Full_name}</p>
                                </span>
                            </div>
                        ))}

                    </div>
                </div>
                <div className="md:w-[48%] w-full  flex flex-col gap-5 p-2 items-start">
                    <p className="small_heading">Know more about Us</p>
                    <h2>Building digital growth for businesses since 2014</h2>
                    <p className="text-sm!">Since our establishment in 2014, Uptech Solution has been at the forefront of the internet industry — offering web hosting, SEO, BPO services, and web design and
                        development to businesses across Nepal and around the world. Our passion for technology and years of hands-on experience shape everything we build. With offices in the
                        USA, Australia, and Nepal, we've helped growing companies build a stronger online presence, boost search visibility, and optimize the way they work. Our team of
                        specialists collaborates closely with every client to design solutions that actually fit their business, not a template.</p>
                    <div className="grid grid-cols-3 md:gap-10 gap-5">
                        {stats.map((stat, index) => (
                            <span key={index} className=" flex flex-col items-center justify-center p-4  shadow-sm shadow-amber-500 rounded-2xl">
                                <p className="text-2xl! text-amber-500! font-semibold">{stat.number}</p>
                                <p className="text-sm!">{stat.text}</p>
                            </span>
                        ))}

                    </div>
                </div>
            </div>
            <Team/>
        </main>
    );
}