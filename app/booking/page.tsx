import InnerHeroBanner from "../components/usefullcomponents'/innerpage_hero";
import Book from "./book";

export const metadata =
{
    title: "Booking"
};

export default function Booking()
{
    return(
        <main>
            <InnerHeroBanner title="Booking"/>
            <Book/>
        </main>
    )
}