import Image from "next/image";
import Button from "./button";
import Link from "next/link";

export default function Widgets()
{
    return(
        <div className="fixed bottom-10 border-2 border-amber-500 p-2 flex flex-col rounded-full gap-4  z-10 bg-white right-10">
            <Link  href={`https://www.facebook.com/uptechsolutionnepal`} target="_blank" aria-label="Visit our Facebook" className="bg-amber-500 flex items-center justify-center rounded-full h-6 w-6"><i className="fa-brands fa-facebook-f   text-sm text-white"/></Link>
            <Link  href={`https://wa.me/9779714571302`} target="_blank" aria-label="Chat us on Whatsapp" className="bg-amber-500 flex items-center justify-center rounded-full h-6 w-6"><i className="fa-brands fa-whatsapp   text-sm text-white"/></Link>
            <Link  href={"https://www.instagram.com/uptechsolution_official?igsh=bWRpdWEwbHE4MWI2"} aria-label="Visit Our Instagram" target="_blank" className="bg-amber-500 flex items-center justify-center rounded-full h-6 w-6"><i className="fa-brands fa-instagram   text-sm text-white"/></Link>
            <Link  href={`https://www.youtube.com/@uptsol`} target="_blank" aria-label="Visit Our Youtube Channel"  className="bg-amber-500 flex items-center justify-center rounded-full h-6 w-6"><i className="fa-brands fa-youtube   text-sm text-white"/></Link>            
        </div>
    )
}