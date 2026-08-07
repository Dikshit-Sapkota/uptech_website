import InnerHeroBanner from "../components/usefullcomponents'/innerpage_hero";
import PricingTable from "../components/usefullcomponents'/PricingTable";

export const metadata =
{
    title: "Pricing"
};

export default function Pricing()
{
    return(
        <main>
            <InnerHeroBanner title="Pricing" />
            <PricingTable/>
        </main>
    );
}