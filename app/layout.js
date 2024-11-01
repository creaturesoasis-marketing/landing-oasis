import {Outfit} from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

const outfit = Outfit({ subsets: ["latin"], weight:["400","500","600"] });

export const metadata = {
  title:"Creatures oasis",
  description:"Creatures oasis"
};

export default function RootLayout({children}){
  return(
    <html lang="en">
      <body className={outfit.className}>
        <Header />
        {children}
        <Footer/>
        
        </body>
    </html>
  )
}