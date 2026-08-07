import Link from "next/link";
type buttonprops={
    name:string;
    link:string

}

export default function Button({name,link}:buttonprops)
{
    return(
        <Link href={link}
         className="bg-amber-500 header_items text-white rounded-2xl p-2 hover:cursor-pointer md:text-[18px]! text-[13px]!" 
         >
            {name}
            </Link>
    );
}