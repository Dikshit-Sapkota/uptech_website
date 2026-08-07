import Portfolio_List from "../Portfolio_List";

export default async function Portfolio()
{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/portfolio?_fields=acf.portfolio`,
        {
            next:
            {
                revalidate:3,
        }
    }
);
    const data = await res.json();
    const portfolio = data[0].acf.portfolio;


    return(
        <main className="  pt-3! pb-3! flex flex-col  rounded-2xl items-center  gap-10!">
            <div className="bg-[#f59f0b17] pt-15 pb-15 w-full flex flex-col items-center p-2 rounded-2xl">
                <p className="small_heading">{portfolio.short_heading}</p>
                <h2>{portfolio.heading}</h2>
                <p className="text-sm!">{portfolio.description}</p>
            </div>
            <div className=" w-full bg-white p-2 shadow-lg rounded-2xl">
                <Portfolio_List end={3} items={portfolio.portfolio_list}/>
            </div>
        </main>
    );
}