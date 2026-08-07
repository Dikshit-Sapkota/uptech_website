import PricingTable from "../usefullcomponents'/PricingTable";

export default function Pricing() {

    return (
        <main className="flex flex-col items-start! gap-10 pt-20! pb-20!">
            <div className="flex flex-col gap-4 items-start w-[60%]">
                <p className="small_heading">Pricing</p>
                <h2 className="">Affordable Pricing Plans for Every Business</h2>
                <p className="text-md! ">Choose the plan that best fits your needs and budget. Our transparent pricing ensures you get the best value for your investment.</p>
            </div>

            <div className="w-full" >
                <PricingTable />
            </div>
        </main>
    );
}