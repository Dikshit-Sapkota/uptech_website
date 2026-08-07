import { ArrowUpRightFromCircleIcon, ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link"
import Getimageurl from "../Getimageurl";
type portfolio = {
    business_name:string;
    short_description:string;
    country:string;
    site_url:string;
    image:number ;
    features:{
        nature_of_service:string;
    }[];
}

export default async function Portfolio_List({end,items}:{end:number; items:portfolio[]}) {
    
    const portfolioItems = await Promise.all(

        items.slice(0, end).map(async (portfolio) => ({

            ...portfolio,

            imageUrl: await Getimageurl({id:portfolio.image }),

        }))

    );
    return (
        <div className="grid md:grid-cols-3 gap-2">
            {
                portfolioItems.slice(0,end).map((portfolio, index) => (
                    <div key={index} className="border relative flex flex-col justify-between gap-3 border-gray-100 shadow-lg group  rounded-2xl p-4">
                        {/* <Image className="w-full h-70 object-cover border border-gray-100 object-top  hover:object-bottom rounded-2xl" width={300} height={300} src={portfolio.image_url} alt="" /> */}
                        <div className="overflow-hidden rounded-2xl border border-gray-100 h-70">
                            <Image
                                className="w-full h-full object-cover object-top transition-all duration-7000 ease-in-out hover:object-bottom"
                                width={200}
                                height={200}
                                priority={index === 0}
                                src={portfolio.imageUrl || "/portfolio/aye.png"}
                                alt={portfolio.business_name}
                            />
                            <p className="absolute top-5 pl-6 pr-6 pt-2 pb-2 rounded-xl bg-white text-sm! border border-amber-600 text-black! right-5 ">{portfolio.country}</p>
                        </div>
                        <h3 className="header_items text-2xl! ">{portfolio.business_name}</h3>
                        <p className="text-sm!  pr-5 ">{portfolio.short_description}</p>
                        <div className="border-t border-gray-300 pt-3 flex  justify-between items-center">

                            <div className="w-[70%] flex gap-2 flex-wrap">

                               {portfolio.features.map(
                                (service,index)=>(

                                    <span key={index} className="border border-gray-100 text-sm text-amber-600 p-2 font-semibold rounded-2xl">{service.nature_of_service}</span>
                                )
                               )}


                            </div>
                            <div className="flex gap-1 border  text-sm!  bg-amber-600 text-white rounded-2xl group-hover:-translate-y-1 p-2 ">
                                <Link target="_blank" href={portfolio.site_url || "#"} >Visit Site</Link>
                                <ArrowUpRightIcon height={20} />
                            </div>
                        </div>
                    </div>


                ))
            }

        </div>
    );

}