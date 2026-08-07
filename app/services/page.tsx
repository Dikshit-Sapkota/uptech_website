import Services from "../components/HomePage/Services";
import InnerHeroBanner from "../components/usefullcomponents'/innerpage_hero";

export const metadata =
{
    title: "Services"
};

export default function Service_Page()
{
    return(
        <main>
            <InnerHeroBanner title="Services"/>
            <Services/>
        </main>
    );
}