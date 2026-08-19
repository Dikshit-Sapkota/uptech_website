// import Link from "next/link";

// export default async function Services() {

//     const service = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/service?_fields=acf`,
//         {
//             next:
//             {
//                 revalidate:3600,
//             }
//         });
//     const data = await service.json();
//     const servicesData = data[0].acf;

//     const services = [
//         {
//             title: "Web Design & Development",
//             description: "We design and develop high-performance websites that are fast, SEO-friendly, and optimized for conversions.",
//             icon: "fa-solid fa-laptop-code",
//             link: "#"
//         },
//         {
//             title: "Digital Marketing",
//             description: "Our data-driven marketing campaigns help businesses increase their online visibility and generate more leads.",
//             icon: "fa-solid fa-bullhorn",
//             link: "#"
//         },
//         {
//             title: "SEO Optimization",
//             description: "We provide comprehensive SEO services to improve your website's search engine rankings and drive organic traffic.",
//             icon: "fa-solid fa-search",
//             link: "#"
//         },
//         {
//             title: "E-commerce Solutions",
//             description: "We create robust e-commerce platforms that provide seamless shopping experiences and drive sales.",
//             icon: "fa-solid fa-cart-shopping",
//             link: "#"
//         },
//         {
//             title: "Web Hosting & Maintenance",
//             description: "We offer reliable web hosting and maintenance services to ensure your website runs smoothly and securely.",
//             icon: "fa-solid fa-server",
//             link: "#"

//         },
//         {
//             title: "Analytics & Reporting",
//             description: "We provide detailed analytics and reporting to help you understand your website's performance and make informed decisions.",
//             icon: "fa-solid fa-chart-line",
//             link: "#"
//         }
//     ];
//     return (
//         <main className="flex flex-col gap-4  rounded-2xl md:pt-20! pt-10! pb-10! md:pb-20! items-center">
//             <div className="flex flex-col gap-4 w-full rounded-2xl md:items-center items-start  md:text-center md:p-4">
//                 <p className="small_heading">Our Services</p>
//                 <h2 className="md:w-[60%]">Customized Digital Solutions To Grow Your Business Online.</h2>
//                 <p className="md:w-[70%] md:text-lg! ">Every service below links to its own detailed page so visitors and search engines can find exactly what they need.</p>
//             </div>
//             <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 w-full ">
//                 {services.map((service, index) => (
//                     <div key={index} className="flex flex-col items-start gap-4 p-10 border-l border-l-amber-300 border-r border-r-blue-200 border-gray-200 hover:transform hover:-translate-y-2 transition duration-300 ease-in-out shadow-lg rounded-2xl">
//                         <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center text-white text-2xl justify-center">
//                             <i className={service.icon}></i>
//                         </div>
//                         <h3 className="font-bold text-lg!">{service.title}</h3>
//                         <p className="text-gray-500 md:text-sm!">{service.description}</p>
//                         <Link href={service.link} className="text-amber-600 font-bold p-1 rounded hover:bg-amber-600 hover:text-white">Learn More <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i> </Link>
//                     </div>
//                 ))}


//             </div>
//         </main>
//     );
// }

import Link from "next/link";
type servicesProps = {
    service_heading: string;
    short_description: string;
    icon_class: string;
}

export default async function Services() {

    const service = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/service?_fields=acf`,
        {
            next:
            {
                revalidate:3,
            }
        });
    const data = await service.json();
    const servicesData = data[0].acf;

    return (
        <main className="flex flex-col gap-4  rounded-2xl md:pt-20! pt-10! pb-10! md:pb-20! items-center">
            <div className="flex flex-col gap-4 w-full rounded-2xl md:items-center items-start  md:text-center md:p-4">
                <p className="small_heading">{servicesData.short_heading}</p>
                <h2 className="md:w-[60%]">{servicesData.heading}</h2>
                <p className="md:w-[70%] md:text-lg! ">{servicesData.description}</p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 w-full ">
                {servicesData.services.map((service : servicesProps) => (
                    <div key={service.service_heading} className="flex flex-col items-start gap-4 p-10 border-l border-l-amber-300 border-r border-r-blue-200 border-gray-200 hover:transform hover:-translate-y-2 transition duration-300 ease-in-out shadow-lg rounded-2xl">
                        <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center text-white text-2xl justify-center">
                            <i className={service.icon_class}></i>
                        </div>
                        <h3 className="font-bold text-lg!">{service.service_heading}</h3>
                        <p className="text-gray-500 md:text-sm!">{service.short_description}</p>
                        {/* <Link href="#" className="text-amber-600 font-bold p-1 rounded hover:bg-amber-600 hover:text-white">Learn More <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i> </Link> */}
                    </div>
                ))}


            </div>
        </main>
    );
}
