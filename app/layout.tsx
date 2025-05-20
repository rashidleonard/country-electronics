import Image from "next/image";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Country Electronics",
  description: "Website under construction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <header className="hidden container py-4 md:flex items-center justify-between bg-white sticky top-0">
          <div className="h-12 w-28 bg-black/50"></div>

          <div className="font-medium flex gap-8">
            <p>Products</p>
            <p>Brands</p>
            <p>Categories</p>
            <p>Contact</p>
          </div>

          <div className="flex items-center gap-6">
            <Image src="/search.svg" height="24" width="24" alt="" />
            <Image src="/cart.svg" height="24" width="24" alt="" />
          </div>
        </header>

        <div className="hidden lg:block">{children}</div>
        <div className="lg:hidden h-[100vh] grid place-content-center">
          <p>Who shops on mobile?</p>
        </div>

        <footer className="hidden md:grid grid-cols-4">
          <div className="border-r-1 border-black/10 px-[1.5rem] pt-[1.5rem] pb-[8rem]">
            <h2 className="font-medium">
              © 2025 <br /> Country Electronics. <br /> All rights reserved.
            </h2>
          </div>

          <div className="border-r-1 border-black/10 text-(length:--text-size-small) font-medium px-[1.5rem] pt-[1.5rem] pb-[8rem]">
            <p className="text-black/50">Customer Service</p>

            <nav className="mt-4 grid gap-2">
              <p>Returns and Refunds</p>
              <p>Orders and Delivery</p>
              <p>Country Electronics Customer Promise</p>
            </nav>
          </div>

          <div className="border-r-1 border-black/10 text-(length:--text-size-small) font-medium px-[1.5rem] pt-[1.5rem] pb-[8rem]">
            <p className="text-black/50">Legal</p>

            <nav className="mt-4 grid gap-2">
              <p>Privacy Policy</p>
              <p>Terms and Conditions</p>
            </nav>
          </div>

          <div className="text-(length:--text-size-small) font-medium px-[1.5rem] pt-[1.5rem] pb-[8rem]">
            <p className="text-black/50">Follow Us</p>

            <nav className="mt-4 flex items-center gap-4">
              <Image
                src="/instagram.svg"
                height={24}
                width={24}
                alt="Instagram logo"
              />
              <Image
                src="/facebook.svg"
                height={24}
                width={24}
                alt="Facebook logo"
              />
              <Image src="/x.svg" height={24} width={24} alt="X logo" />
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
