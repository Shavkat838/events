import type { Metadata } from "next";
import {Playfair_Display,Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair=Playfair_Display({
  subsets:["latin"],
  variable:"--font-playfair",
  display:"swap"
})


const jakarta=Plus_Jakarta_Sans({
  subsets:["latin"],
  variable:"--font-jakarta",
  display:"swap"
})


export const metadata:Metadata={
  title:"Tadbirlar-Intellektual tadbirlar va seminarlat platformasi",
  description:"Eng sara ilmiy, biznes va IT seminarlariga chiptalar xarid qiling va joy band qiling",
  icons:{
    icon:"https://www.istockphoto.com/illustrations/event-icon"
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="h-full w-full bg-soft-cream ">
        <div className="container  px-4 md:px-8 lg:px-20  min-h-screen mx-auto">{children}</div>
      </body>
    </html>
  );
}
