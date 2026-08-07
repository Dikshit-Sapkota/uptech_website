import InnerHeroBanner from "../components/usefullcomponents'/innerpage_hero";
import Contact from "./contact";

export const metadata =
{
    title: "Contact Us"
};

export default function ContactPage() {
    return (
        <main>
            <InnerHeroBanner title="Contact Us" />
            <Contact />
        </main>
    );
}