import { LucideLocationEdit, MailCheck, MailOpen, MessageCircleHeart, PhoneCall, PhoneIcon } from "lucide-react";
import Link from "next/link";

export default function Book()
{
    return(

         <main className="flex flex-wrap justify-center md:gap-20 gap-10 items-center pt-20! pb-20!">
            <div className="flex  flex-col p-2 shadow-sm rounded-2xl gap-5 md:w-[30%] ">
                <div className="w-full p-2 flex  items-center gap-5 justify-start">
                    <span className="text-white p-2 bg-amber-500 rounded-full shadow-xs shadow-amber-500"><PhoneIcon size={30} /></span>
                    <span>
                        <p className="font-semibold text-md! ">Contact Information</p>
                        <p className="text-sm! "> Choose the best way to reach us.</p>
                    </span>
                </div>
                <div className=" p-2 flex  items-center gap-5 justify-start w-full">
                    <span className="text-amber-500 p-2  rounded-full shadow-xs shadow-amber-500"><PhoneCall size={30} /></span>
                    <span className="">
                        <p className="font-semibold text-md! ">Call Us</p>
                        <Link href={`tel:+9779714571302 `} className="text-md! font-semibold text-amber-500">9714571302, </Link>
                        <Link href={`tel:+977970-0753000 `} className="text-md! font-semibold text-amber-500">970-0753000</Link>
                        <p className="text-sm! "> We're available 24/7</p>
                    </span>
                </div>
                <div className=" p-2 flex  items-center gap-5 justify-start w-full">
                    <span className="text-amber-500 p-2  rounded-full shadow-xs shadow-amber-500"><MessageCircleHeart size={30} /></span>
                    <span>
                        <p className="font-semibold text-md! ">Text Us</p>
                        <Link href={`tel:+9779714571302 `} className="text-md! font-semibold text-amber-500">9714571302</Link>
                        <p className="text-sm! "> Send us a text anytime.</p>
                    </span>
                </div>
                <div className=" p-2 flex  items-center gap-5 justify-start w-full">
                    <span className="text-amber-500 p-2  rounded-full shadow-xs shadow-amber-500"><MailCheck size={30} /></span>
                    <span>
                        <p className="font-semibold text-md! ">Email Us</p>
                        <Link href={`mailto:info@uptechsolution.com `} className="text-md! font-semibold text-amber-500">info@uptechsolution.com</Link>
                        <p className="text-sm! "> We'll reply as soon as possible</p>
                    </span>
                </div>
                <div className=" p-2 flex  items-center gap-5 justify-start w-full">
                    <span className="text-amber-500 p-2  rounded-full shadow-xs shadow-amber-500"><LucideLocationEdit size={30} /></span>
                    <span>
                        <p className="font-semibold text-md! ">Our Location</p>
                        <p className="text-sm! ">UpTown Building Koteshwor Kathmandu Nepal.</p>
                    </span>
                </div>
            </div>
            <div className=" flex flex-col p-2 shadow-sm rounded-2xl gap-5 md:w-[50%] ">
                <div className="w-full p-2 flex  items-center gap-5 justify-start">
                    <span className="text-white p-2 bg-amber-500 rounded-full shadow-xs shadow-amber-500"><MailOpen size={30} /></span>
                    <span>
                        <p className="font-semibold text-md! ">Get Free Consultation</p>
                        <p className="text-sm! ">Fill out the form below and we'll get back to you as soon as possible.</p>
                    </span>
                </div>
                <form action="" method="post" className="flex flex-col gap-10">
                    <div className="flex flex-wrap justify-between  gap-5" >
                        <input type="text" name="name" placeholder="Your Name" required className="shadow shadow-amber-500 p-4 pl-4  rounded-2xl md:w-[48%] w-full"/>
                        <input type="email" name="email" placeholder="Your Email" required  className="shadow shadow-amber-500 p-4 pl-4  rounded-2xl md:w-[48%] w-full"/>  
                    </div>
                     <div className="flex flex-wrap justify-between gap-5" >
                        <input type="tel" name="Number" placeholder="Phone Number" required  className="shadow shadow-amber-500 p-4 pl-4  rounded-2xl md:w-[48%] w-full"/>
                        <input type="text" name="address" placeholder=" Your Address"  className="shadow shadow-amber-500 p-4 pl-4  rounded-2xl md:w-[48%] w-full"/>  
                    </div>
                     <div className="flex justify-between gap-5" >
                        <select name="" id="" required className="shadow p-4 pl-4 shadow-amber-500 rounded-2xl w-full">
                            <option >Select Service</option>
                            <option value="web_design_development">Web Design & Development</option>
                            <option value="digital_marketing">Digital Marketing</option>
                            <option value="seo_optimization">SEO Optimization</option>
                            <option value="e-Commerce">E-commerce Solutions</option>
                            <option value="web_hosting_maintenance">Web Hosting & Maintenance</option>
                            <option value="analytics_reporting">Analytics & Reporting</option>
                            </select>  
                    </div>
                     <div className="flex justify-between gap-5" >
                        <textarea rows={5} name="message" id="" required placeholder="Any message here.." className="shadow shadow-amber-500 p-2 pl-4  rounded-2xl w-full"></textarea>  
                    </div>
                    <div className="flex justify-center gap-5" >
                        <input type="submit" value="Get A Free Consultation" className="shadow p-4 pl-4 font-semibold bg-amber-500 rounded-2xl w-[80%]" />
                    </div>
                </form>
            </div>

        </main>
    )
}