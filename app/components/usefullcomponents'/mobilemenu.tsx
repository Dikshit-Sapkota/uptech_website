import { CloseButton } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

type linkitem ={
    name:string,
    href:string
}
type props ={
    onClose: ()=>void;
   links:linkitem[];  
}
export default function MobileMenu({onClose,links}:props)
{
    return(
        <div className="fixed w-full transition-all duration-1000 ease-in-out flex  overflow-hidden justify-between  md:hidden inset-0  bg-[#7a7672f3] z-20 ">
            <div className="w-[70%] pt-2 pl-5 pr-5 gap-3 flex flex-col text-black bg-white">
                <Image className="w-full pb-5" height={100} width={200} src='/uptechlogo.png' alt="uptech logo"/>
                {links.map((link,index)=>(
                <Link key={index} className="w-full p-2 rounded-2xl  border border-amber-500" href={link.href} onClick={onClose} >{link.name}</Link>
                ))}

            </div>
            <span className=" border flex justify-center items-center w-10 h-10 absolute right-5! top-5 bg-amber-600 rounded-full text-white " onClick={onClose}>
                <i className="fa-solid fa-xmark"></i>
            </span>

        </div>
    )
}