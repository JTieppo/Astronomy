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
    const planetName = path.slice(1);

    const [activePlanet, setActivePlanet] = useState("");

    
    useEffect(() => {
        setActivePlanet(planetName);
    }, [planetName]);

    const getPlanetClass = (planet) => {
        return planet === activePlanet ? `${planet} active` : planet;
    };
    return (
        <html lang="en">
            <body className={inter.className}>
                <header className="flex flex-row justify-between m-6 mx-10 align-baseline">
                    <Link href="/"><h2 className="text-4xl">THE PLANETS</h2></Link>
                    <div className="flex flex-row items-center">
                        <Link className="ml-8" id="navlink" href={"http://127.0.0.1:3000/mercury"}><h5 className={getPlanetClass(planetName)}>MERCURY</h5></Link>
                        <Link className="ml-8" id="navlink" href={"http://127.0.0.1:3000/venus"}><h5 className={getPlanetClass(planetName)}>VENUS</h5></Link>
                        <Link className="ml-8" id="navlink" href={"http://127.0.0.1:3000/earth"}><h5 className={getPlanetClass(planetName)}>EARTH</h5></Link>
                        <Link className="ml-8" id="navlink" href={"http://127.0.0.1:3000/mars"}><h5 className={getPlanetClass(planetName)}>MARS</h5></Link>
                        <Link className="ml-8" id="navlink" href={"http://127.0.0.1:3000/jupiter"}><h5 className={getPlanetClass(planetName)}>JUPITER</h5></Link>
                        <Link className="ml-8" id="navlink" href={"http://127.0.0.1:3000/saturn"}><h5 className={getPlanetClass(planetName)}>SATURN</h5></Link>
                        <Link className="ml-8" id="navlink" href={"http://127.0.0.1:3000/uranus"}><h5 className={getPlanetClass(planetName)}>URANUS</h5></Link>
                        <Link className="ml-8" id="navlink" href={"http://127.0.0.1:3000/neptune"}><h5 className={getPlanetClass(planetName)}>NEPTUNE</h5></Link>
                    </div>
                </header>
                {children}
            </body>
        </html>
    );
}
