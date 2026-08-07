import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

export default function Technology()
{
    const tech= [
        {
            src:"/next.svg",
            alt:"Next Js"
        },
        {
            src:"/docker.png",
            alt:"Node Js"
        },
        {
            src:"/WordPress.webp",
            alt:"Wordpress"
        },
        {
            src:"/mysql.png",
            alt:'Mysql'
        },
        {
            src:'/php.png',
            alt:'Php'
        },
        {
            src:'/nodejs.webp',
            alt:'Node Js'
        },
        {
            src:'/github.svg',
            alt:"Github"
        },
        {
            src:'/nginx.jpg',
            alt:"Github"
        },
        {
            src:'/litespeed.png',
            alt:"Github"
        }
    ]
    return(
        <main className="  flex  items-center gap-10 pt-20! pb-20! flex-wrap justify-between">
            <div className="flex flex-col bg-[#f59f0b17] p-5 md:w-[40%] w-full rounded-2xl items-start">
                <p className="small_heading">Tech Stack</p>
                <h2>Building Future-Ready Websites with the Right Technology</h2>
                <p className="text-sm!"> The technology behind your website matters. We leverage the latest tools and frameworks to deliver exceptional user experiences, lightning-fast performance, and scalable solutions that grow alongside your business.</p>

            </div>
            <div className="md:w-[55%] w-full grid grid-cols-3 gap-5">
                {/* <Swiper className="w-full" modules={[Navigation, Pagination, Autoplay]} spaceBetween={2} slidesPerView={4} loop={true} autoplay={{ delay: 1000}}>
                    {tech.map((image,index)=>(
                        <SwiperSlide>
                        <Image src={image.src} width={200} height={100} alt={image.alt} className="h-20 p-2 w-60 border border-gray-50 object-contain" />
                    </SwiperSlide>
                    ))}
                    
                </Swiper> */}
                {
                    tech.map((image,index)=>(
                        <div key={index}>
                             <Image src={image.src} width={200} height={100} alt={image.alt} className="h-20 p-2 w-60 border border-[#f59f0b17] object-contain" />
                        </div>
                    ))
                }
            </div>
        </main>

    );
}