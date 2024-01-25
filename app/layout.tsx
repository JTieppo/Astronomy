"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const path = usePathname();
    var pathParts = path.split('/');
    var planetName = pathParts[1];

    const [activePlanet, setActivePlanet] = useState("");

    
    useEffect(() => {
        setActivePlanet(planetName);
    }, [planetName]);

    const getPlanetClass = (planet: string) => {
        return planet === activePlanet ? `${planet} active` : planet;
    };
    return (
        <html lang="en">
            <body className={inter.className}>
                <header className="flex flex-row justify-between  mx-10 align-baseline">
                    <Link href="/"><h2 className="text-4xl m-4">THE PLANETS</h2></Link>
                    <div className="flex flex-row items-center h-full jus">
                        <div className="m-10"></div>
                        <div className={`p-6 h-full border-t-2 border-hidden ${getPlanetClass(planetName)}`}><Link className="" style={{backgroundColor:"blue"}} id="navlink" href={"/mercury"}><h5 className={getPlanetClass(planetName)}>MERCURY</h5></Link></div>
                        <div className={`p-6 h-full border-t-2 border-hidden ${getPlanetClass(planetName)}`}><Link className="" id="navlink" href={"/venus"}><h5 className={getPlanetClass(planetName)}>VENUS</h5></Link></div>
                        <div className={`p-6 h-full border-t-2 border-hidden ${getPlanetClass(planetName)}`}><Link className="" id="navlink" href={"/earth"}><h5 className={getPlanetClass(planetName)}>EARTH</h5></Link></div>
                        <div className={`p-6 h-full border-t-2 border-hidden ${getPlanetClass(planetName)}`}><Link className="" id="navlink" href={"/mars"}><h5 className={getPlanetClass(planetName)}>MARS</h5></Link></div>
                        <div className={`p-6 h-full border-t-2 border-hidden ${getPlanetClass(planetName)}`}><Link className="" id="navlink" href={"/jupiter"}><h5 className={getPlanetClass(planetName)}>JUPITER</h5></Link></div>
                        <div className={`p-6 h-full border-t-2 border-hidden ${getPlanetClass(planetName)}`}><Link className="" id="navlink" href={"/saturn"}><h5 className={getPlanetClass(planetName)}>SATURN</h5></Link></div>
                        <div className={`p-6 h-full border-t-2 border-hidden ${getPlanetClass(planetName)}`}><Link className="" id="navlink" href={"/uranus"}><h5 className={getPlanetClass(planetName)}>URANUS</h5></Link></div>
                        <div className={`p-6 h-full border-t-2 border-hidden ${getPlanetClass(planetName)}`}><Link className="" id="navlink" href={"/neptune"}><h5 className={getPlanetClass(planetName)}>NEPTUNE</h5></Link></div>
                    </div>
                </header>
                {children}
            </body>
        </html>
    );
}
