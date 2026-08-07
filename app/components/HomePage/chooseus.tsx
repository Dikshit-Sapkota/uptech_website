export default async function ChooseUs() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/home?_fields=acf.why_choose_us`,
        {
            next:
            {
                revalidate: Number(process.env.NEXT_PUBLIC_CACHE_TIME)
            }
        }
    );
    const data = await res.json();
    const chooseus = data[0]?.acf.why_choose_us;
        
    return (
        <main className="md:pt-20! pt-10! md:pb-20! pb-10! bg-[#f59f0b17] rounded-2xl flex flex-col gap-4 items-start!">
            <div className="flex flex-col gap-2 items-start md:w-[50%]">
                <p className="small_heading">{chooseus?.short_heading}</p>
                <h2>{chooseus?.heading}</h2>
                <p className="md:text-lg!">{chooseus?.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">

                {chooseus?.steps.map((service:{heading:string,description:string}, index:number) => (
                    <div className="flex flex-col gap-2 p-6 border border-white items-start shadow-md bg-white rounded-2xl" key={index}>
                        <p className="  bg-amber-500 p-2 h-8 w-8 text-white! shadow-md items-center justify-center rounded-full text-sm!">0{index + 1}</p>
                        <h3 className="font-bold">{service.heading}</h3>
                        <p className="text-sm!">{service.description}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}
    
