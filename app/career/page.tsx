import InnerHeroBanner from "../components/usefullcomponents'/innerpage_hero";
import CareerPage from "./CareerPage";
export const metadata =
{
    title: "Career"
};

export default function Career()
{
    return(
        <main>
            <InnerHeroBanner title="Career"/>
            <CareerPage/>
        </main>

    )
}