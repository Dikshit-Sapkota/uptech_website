import Image from "next/image";
import HeroBanner from "./components/HomePage/herobanner";
import Testimonials from "./components/HomePage/Testimonials";
import Services from "./components/HomePage/Services";
import ChooseUs from "./components/HomePage/chooseus";
import Pricing from "./components/HomePage/pricing";
import Process from "./components/HomePage/Process";
import TrustedSlider from "./components/HomePage/TrustedSlider";
import Technology from "./components/HomePage/Technology";
import Portfolio from "./components/HomePage/portfolio";
import Faq from "./components/HomePage/Faq";
import Imagegallery from "./components/logogallery";

export default async function Home() {
  const logos = await Imagegallery();


  return (
    
    <div className="w-full md:max-w-[1400] pl-2 flex flex-col overflow-hidden items-center pr-2">
    <HeroBanner/>
    <TrustedSlider logo = {logos}/>
    <Services/>
    <ChooseUs/>
    <Process/>
    <Technology/>
    <Portfolio/>
    <Faq/>
    
    </div>
  );
}
