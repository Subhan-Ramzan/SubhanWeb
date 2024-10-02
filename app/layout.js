//app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ProductProvider } from "@/context/ProductContext";
import ClientSessionProvider from "@/components/ClientSessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Subhan Ramzan | Web Developer Portfolio",
  description: "Explore Subhan Ramzan's portfolio, showcasing expertise in web development, front-end design, and modern web technologies like Next.js, React, and JavaScript. Discover projects, skills, and professional services in building scalable, efficient websites.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientSessionProvider>
          <ProductProvider>
            <div className="min-h-[80vh] inset-0 -z-10 items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_30%,#63e_70%)]">
              {children}
            </div>
          </ProductProvider>
        </ClientSessionProvider>
      </body>
    </html>
  );
}
