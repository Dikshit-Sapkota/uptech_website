"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Getimageurl from "@/app/Getimageurl";
import Imagegallery from "../logogallery";
type props=
{
    logo:string [];
}
export default  function TrustedSlider({logo}:props) {
    return (
        <main className="flex  justify-between items-center! bg-white border border-[#f59f0b17] rounded-2xl mt-10">
            <div className="md:w-[18%] w-[50%] flex items-center!   md:p-5 p-2">
                <p className="text-sm!">Trusted by Many Businesses Across Nepal , Uk , Usa & Australia</p>
            </div>
            <div className="w-[50%] md:w-[80%] flex ">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                        },
                        480: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 6,
                        },
                        1024: {
                            slidesPerView: 7,
                        },
                    }}
                >
                    {logo.map((img, index) => (
                        <SwiperSlide key={index}>
                            <Image src={img} alt={img} width={100} height={100} className="object-contain shadow  md:h-20 h-10  md:w-40 bg-[#f59f0b17] p-2 rounded"/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </main>
    );
}