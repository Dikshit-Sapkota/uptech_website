import { ChevronRight, Home, ToggleRight } from "lucide-react"

type heading = {
    title: string,
}
export default function InnerHeroBanner({ title }: heading) {
    return (
        <div className="w-full bg-[#f59f0b17]  rounded-2xl flex flex-col justify-start  items-center md:p-20 p-10 gap-5 shadow-xs ">
            <span className="flex gap-2 justify-center items-center text-white p-2 bg-amber-500 rounded-2xl"> 
                <ToggleRight size={50} className="" /> <h1 className="md:text-4xl! text-2xl! text-white!">{title}</h1>
                </span>
            <div  className="flex  w-full gap-10 justify-center">
                <span className="flex gap-2 justify-center items-center text-amber-600 p-2 md:pl-10 md:pr-10 border border-white bg-[#f59f0b17] rounded-xl">
                    <Home size={30} className="" />
                    <p className="md:text-2xl! text-xl! text-amber-500!">Home</p>
                    <ChevronRight size={20}/>
                    <p className="md:text-2xl! text-xl! text-amber-500!">{title}</p>
                </span>
            </div>
        </div>
    )
}