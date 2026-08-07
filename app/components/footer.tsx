import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-gray-800 w-full pl-4 pr-4 pt-15 pb-5 flex justify-center items-center">
            <main className="flex flex-col gap-5 ">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-white">
                    <div className="flex flex-col gap-4">
                        <p className="font-bold text-lg text-white!">Uptech Solution</p>
                        <p className="text-sm! text-white!">We are a team of passionate professionals dedicated to delivering exceptional results for our clients.</p>
                        <div className="flex gap-2 items-center text-2xl text-white!">
                            <Link href={`https://www.facebook.com/uptechsolutionnepal`}><i className="fa-brands fa-facebook text-white! hover:text-green-400"></i></Link>
                            <Link href={`https://www.youtube.com/@uptsol`}>
                                    <i className="fa-brands fa-youtube text-white! hover:text-green-400 ml-2"></i>
                            </Link>
                            <Link href={`https://www.google.com/search?q=uptech+solution+USA+LLC&sca_esv=74c740cd3a771c52&sca_upv=1&rlz=1C1CHBF_en-GBNP1102NP1102&sxsrf=ADLYWILmDaz01urjSU-5YH-KkLw2IA1U8w%3A1715189194064&ei=yrU7ZsC4A-2_juMP9eeHwAk&ved=0ahUKEwjAxYnVyf6FAxXtn2MGHfXzAZgQ4dUDCBA&oq=uptech+solution+USA+LLC&gs_lp=Egxnd3Mtd2l6LXNlcnAiF3VwdGVjaCBzb2x1dGlvbiBVU0EgTExDSABQAFgAcAB4AJABAJgBAKABAKoBALgBDMgBAJgCAKACAJgDAJIHAKAHAA&sclient=gws-wiz-serp`}>
                                 <i className="fa-brands fa-google text-white! hover:text-green-400 ml-2"></i>
                            </Link>
                            <Link href={`https://wa.me/9779714571302`}>
                            <i className="fa-brands fa-whatsapp text-white! hover:text-green-400 ml-2"></i>
                            </Link>
                            
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="font-bold text-white! text-lg">Quick Links</p>
                        <ul className="text-sm! flex flex-col gap-2">
                            <Link href="/" className="hover:text-green-400">Home</Link>
                            <Link href="/about" className="hover:text-green-400">About Us</Link>
                            <Link href="/services" className="hover:text-green-400">Services</Link>
                            <Link href="/portfolio" className="hover:text-green-400">Portfolio</Link>
                             <Link href="/pricing" className="hover:text-green-400">Pricing</Link>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="font-bold  text-white! text-lg">Services</p>
                        <ul className="text-sm! flex flex-col gap-2">
                            <li className="hover:text-green-400">Web Development</li>
                            <li className="hover:text-green-400">Web Hosting</li>
                            <li className="hover:text-green-400">UI/UX Design</li>
                            <li className="hover:text-green-400">Digital Marketing</li>
                            <li className="hover:text-green-400">Seo & Content</li>

                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="font-bold text-white! text-lg">Contact Us</p>
                        <ul className="text-sm! flex flex-col gap-2">
                            <li className="hover:text-green-400">Uptown Building, 4th Floor,Koteshwor, Kathmandu, Nepal
                            </li>
                            <li className="hover:text-green-400">Phone: +977 9714571302</li>
                            <li className="hover:text-green-400">Phone: +977 970-0753000</li>
                            <li className="hover:text-green-400">Email: info@uptechsolution.com.np</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col w-full md:flex-row gap-4 justify-between items-center border-t border-gray-600 pt-4">
                    <p className="text-sm! text-white!">&copy; 2014-2026 Uptech Solution. All rights reserved.</p>
                    <p className="text-sm! text-white!">Registered & based in Koteshwor, Kathmandu, Nepal</p>
                </div>

            </main>

        </div>
    );
}