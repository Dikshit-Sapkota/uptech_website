import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Poppins,Syne } from "next/font/google";
import { ToastContainer } from "react-toastify";
const poppins = Poppins({

  subsets: ["latin"],

  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins"

});

const syne = Syne(
  {
    weight: ["400", "500", "600", "700"],
    variable: "--font-syne"
    
  }
);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title :
  {
    default:"Uptech Solution",
    template:"%s | Uptech Solution"

  } ,
  description: "Uptech Web Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header/>
        {children}
        <ToastContainer/>
        <Footer/>
        </body>
    </html>
  );
}
