"use client"
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "./usefullcomponents'/button";
import Widgets from "./usefullcomponents'/widgets";
import MobileMenu from "./usefullcomponents'/mobilemenu";


export default function Header()
{
    const Links = [
    {name:"Home" ,href:"/"},
    {name:"About Us",href:"/about"},
    {name:"Services",href:"/services"},
    {name:"Portfolio",href:"/portfolio"},
    {name:"Blog",href:"/blog"},
    {name:"Career",href:"/career"},
    {name:"Contact Us",href:"/contact"}
];
    const pathname = usePathname();
    const [openmenu, setopenmenu] = useState(false);
//     useEffect(() => {

//   if (openmenu) {

//     document.body.style.overflow = "hidden";

//   } else {

//     document.body.style.overflow = "auto";

//   }

//   return () => {

//     document.body.style.overflow = "auto";

//   };

// }, [openmenu]);

    return(
        <main className=" p-4 rounded-b-lg flex flex-row justify-between header_items text-black mt-0.5 ">
            <div>
               <Link href={'/'}><Image src={'/uptechlogo.png'} alt="logo" width={400} height={400}  className="h-20 object-contain md:w-50 w-30 "/></Link>
            </div>
            <div className="hidden md:flex ">
                <nav className="flex gap-x-10" >
                    {Links.map((link)=>
                    (
                        <Link
                        key={link.href}
                        href={link.href}
                        className={
                            pathname=== link.href ?'text-green-400 font-bold':'hover:text-red-400'
                        }
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
            <div className="flex gap-2 p-2">
                <Button name="Get Free Consultation" link="/booking"/>
            </div>
            <div className="md:hidden flex ">
                 <nav >
                    <Menu size={24} onClick={()=>setopenmenu(true)}/>
                </nav>
            </div>

            <Widgets/>
            {openmenu === true && <MobileMenu onClose={()=> setopenmenu(false)} links={Links}/>}
        </main>
    );
}