import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <header className="flex flex-row justify-between m-6 mx-10 align-baseline">
                    <h2 className="text-4xl">THE PLANETS</h2>
                    <div className="flex flex-row">
                        <Link className="ml-8" href={"http://127.0.0.1:3000/mercury"}>MERCURY</Link>
                        <Link className="ml-8" href={"http://127.0.0.1:3000/venus"}>VENUS</Link>
                        <Link className="ml-8" href={"http://127.0.0.1:3000/earth"}>EARTH</Link>
                        <Link className="ml-8" href={"http://127.0.0.1:3000/mars"}>MARS</Link>
                        <Link className="ml-8" href={"http://127.0.0.1:3000/jupiter"}>JUPITER</Link>
                        <Link className="ml-8" href={"http://127.0.0.1:3000/saturn"}>SATURN</Link>
                        <Link className="ml-8" href={"http://127.0.0.1:3000/uranus"}>URANUS</Link>
                        <Link className="ml-8" href={"http://127.0.0.1:3000/neptune"}>NEPTUNE</Link>
                    </div>
                </header>
                <div className="border"></div>
                {children}
            </body>
        </html>
    );
}
