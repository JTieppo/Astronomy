"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PlanetPage() {
    var path = usePathname();
    const data = require("../data/data.json");
    var planetName = path.slice(1);

    const planetData = data.find(planet => planet.name.toLowerCase() == planetName);

    var [cor_botoes, setColor] = useState("");
    useEffect(() => {
        switch(planetName){
            case "mercury":
                setColor("#419EBB");
                break;
            case "venus":
                setColor("#EDA249");
                break;
            case "earth":
                setColor("#6D2ED5");
                break;
            case "mars":
                setColor("#D14C32");
                break;
            case "jupiter":
                setColor("#D83A34");
                break;
            case "saturn":
                setColor("#CD5120");
                break;
            case "uranus":
                setColor("#1EC1A2");
                break;
            case "neptune":
                setColor("#2D68F0");
                break;
            default:
                break;
        }
    }, [planetName]);


    return (
        <div className="flex flex-col justify-around h-screen ml-16 mr-16">
            <div className="flex flex-row justify-between mr-16">
                <div className="mx-auto my-auto w-4/12">
                    <img className="mx-auto" src={planetData.images.planet} alt=""/>
                </div>
                <div className="w-96">
                    <div className="mb-5">
                        <h1 className="text-7xl">{planetData.name}</h1>
                    </div>
                    <div className="mb-4">
                       <h4 style={{textAlign: "justify"}}>{planetData.overview.content}</h4>
                    </div>
                    <div className="flex flex-row mb-8">
                        <h4>Source:</h4>
                        <Link className="flex flex-row ml-3" href={planetData.overview.source}>Wikipedia <img className="ml-3" src="./assets/icon-source.svg" alt="" /></Link>
                        
                    </div>
                    <div>
                        <button className="flex flex-row border border-[#838391] p-3 w-96 mb-5" style={{backgroundColor: cor_botoes}}>
                            <h3 className="mr-6" style={{color:"#fff", opacity:"0.5"}}>01</h3>
                            <h3>OVERVIEW</h3>
                        </button>
                        <button className="flex flex-row border border-[#838391] p-3 w-96 mb-5">
                            <h3 className="mr-6" style={{color:"#fff", opacity:"0.5"}}>02</h3>
                            <h3>INTERNAL STRUCTURE</h3>
                        </button>
                        <button className="flex flex-row border border-[#838391] p-3 w-96 mb-5">
                            <h3 className="mr-6 gray-700" style={{color:"#fff", opacity:"0.5"}}>03</h3>
                            <h3>SURFACE GEOLOGY</h3>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row mr-16 ml-16">
                <div className="border p-3 w-full mr-6 border-[#838391]">
                    <p>ROTATION TIME</p>
                    <h1 className="text-4xl">{planetData.rotation}</h1>
                </div>
                <div className="border p-3 w-full mr-6 border-[#838391]">
                    <p>REVOLUTION TIME</p>
                    <h1 className="text-4xl">{planetData.revolution}</h1>
                </div>
                <div className="border p-3 w-full mr-6 border-[#838391]">
                    <p>RADIUS</p>
                    <h1 className="text-4xl">{planetData.radius}</h1>
                </div>
                <div className="border p-3 w-full border-[#838391]">
                    <p>AVERAGE TEMP.</p>
                    <h1 className="text-4xl">{planetData.temperature}</h1>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}
