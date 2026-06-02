import type { Metadata } from "next";
import { Inter, Teko } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import StructuredData from "@/components/structured-data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const teko = Teko({ subsets: ["latin"], variable: "--font-teko", weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Altered Combat | Mobile Tactical Laser Tag & Party Games | Arizona",
  description: "Arizona's mobile gaming experts. Tactical laser tag, Nerf Wars, Water Wars & VR delivered to you. Veteran-owned, serving all of Arizona.",
  keywords: [
    "laser tag Arizona",
    "mobile laser tag Phoenix",
    "laser tag party Arizona",
    "Nerf Wars rental Arizona",
    "tactical laser tag Phoenix",
    "VR party Arizona",
    "kids birthday party Arizona",
    "mobile party games Phoenix",
    "laser tag Scottsdale",
    "laser tag Gilbert",
    "laser tag Chandler",
    "laser tag Mesa",
    "laser tag Buckeye",
    "laser tag Goodyear",
    "birthday party ideas Arizona",
    "corporate team building Phoenix",
    "school event games Arizona",
    "water party games Arizona"
  ],
  openGraph: {
    title: "Altered Combat | Mobile Tactical Laser Tag & Party Games",
    description: "Arizona's mobile gaming experts. Tactical laser tag, Nerf Wars, Water Wars & VR delivered to you. Veteran-owned, serving Arizona & beyond.",
    type: "website",
    locale: "en_US",
    siteName: "Altered Combat",
    url: "https://www.alteredcombat.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Altered Combat | Mobile Tactical Laser Tag & Party Games",
    description: "Arizona's mobile gaming experts. Tactical laser tag, Nerf Wars, Water Wars & VR delivered to you.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.alteredcombat.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} ${teko.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
