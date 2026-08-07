
type props ={
    heading:string;
    description:string;
}
export default async function Process() {
    const data = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/home?_fields=acf.process`,
        {
            next:{
                revalidate:3,
            }
        }
    )
    const recdata = await data.json();
    const newdata = recdata[0].acf.process;
    // const process = [
    //     {
    //         title: "Discovery",
    //         text: "We learn your business, goals, and who you're trying to reach."
    //     },
    //     {
    //         title: "Design",
    //         text: "Wireframes and visual design, reviewed with you before we build."
    //     },
    //     {
    //         title: "Develop",
    //         text: "Clean, fast code built for mobile, search engines, and growth."
    //     },
    //     {
    //         title: "launch",
    //         text: "Final QA, then a smooth go-live with zero downtime."
    //     },
    //     {
    //         title: "Grow",
    //         text: "Ongoing SEO and marketing, backed by monthly reporting."
    //     }

    // ]
    return (
        <main className="pl-4!">
            <div className="flex flex-col gap-4 justify-center items-center  mt-10 pt-10! pb-10! rounded-2xl ">
                <p className="small_heading">{newdata.short_heading}</p>
                <h2 className="text-center w-[70%]">{newdata.heading}</h2>
                <p className="text-center text-sm! text-gray-600">{newdata.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">


                {
                    newdata.steps.map((process:props,index: number) => (
                        <div key={index} className="flex flex-col rounded-4xl shadow-sm relative border group border-amber-400 p-10 gap-4">
                            <div className="flex absolute -top-5 -left-5  transition-translate duration-1000 md:group-hover:left-[calc(100%-64px)] bg-white group-hover:bg-amber-400    h-16 w-16 justify-center items-center border border-gray-100 rounded-full overflow-hidden">
                                <span className="text-4xl font-extrabold text-amber-400 transition-transform duration-2000 md:group-hover:rotate-360 group-hover:text-white  ">0{index+1}</span>
                            </div>
                            <div className="flex flex-col gap-4 ">
                                <h3 className="font-bold text-md!">{process.heading}</h3>
                                <p className="text-gray-600 text-sm!">{process.description}</p>
                            </div>
                        </div>
                    ))
                }
                

            </div>



        </main>
    );
}