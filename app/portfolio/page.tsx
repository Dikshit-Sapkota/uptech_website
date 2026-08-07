import InnerHeroBanner from "../components/usefullcomponents'/innerpage_hero";
import Portfolio from "../components/HomePage/portfolio";
import Portfolio_List from "../components/Portfolio_List";

export const metadata =
{
    title: "Portfolio"
};
type portfolio = {
    business_name: string;
    short_description: string;
    country: string;
    site_url: string;
    image: string;
    features: {
        nature_of_service: string[];
    }
}
export default async function portfolio() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/portfolio?_fields=acf.portfolio.portfolio_list`,
        {
            next: {
                revalidate: 3,
            }
        });
    const data = await res.json();
    const portfolio = data[0].acf.portfolio.portfolio_list;

    return (
        <main className=" flex flex-col pb-20! gap-10!" >
            <InnerHeroBanner title="Our Portfolio" />
            <Portfolio_List end={11} items={portfolio} />
        </main>
    )
}