"use client"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { data } from "@/app/data";
import Link from "next/link";

export default function Surface() {
    var path = usePathname();
    console.log("path", path);
    var pathParts = path.split('/geology');
    console.log("parts", pathParts[0]);
    var planetName = pathParts[0].slice(1);
    console.log("considere esse", planetName);

    const planetData = data.find(planet => planet.name.toLowerCase() == planetName);
    var srcImageTratado = planetData?.images.planet.slice(1);
    var srcImageTratadoPlanet = planetData?.images.geology.slice(1);
    console.log(planetData);
    

    var [cor_botoes, setColor] = useState("");
    useEffect(() => {
        switch (planetName) {
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
                setColor("#fff")
                break;
        }
    }, [planetName]);

    console.log(planetData);

    return(
        <div>
            
            <div className="border"></div>

            <div className="flex flex-col justify-around h-screen ml-20 mr-14">
                <div className="flex flex-row justify-between mr-16">
                    <div className="mx-auto my-auto w-4/12 relative">
                        <img className="mx-auto " src={srcImageTratado} alt="" />
                        <img className="mx-auto absolute w-4/12" id="surface" src={srcImageTratadoPlanet} alt="" style={{ top: '90%', left: '50%', transform: 'translate(-50%, -50%)' }}/>
                    </div>
                    <div className="w-96">
                        <div className="mb-5">
                            <h1 className="text-7xl">{planetData?.name}</h1>
                        </div>
                        <div className="mb-4">
                            <h4>{planetData?.geology.content}</h4>
                        </div>
                        <div className="flex flex-row mb-8">
                            <h4>Source:</h4>
                            <Link className="flex flex-row ml-3" href={planetData.geology.source} id="wikipedia">Wikipedia <img className="ml-3" src="../assets/icon-source.svg" alt="" /></Link>

                        </div>
                        <div>
                            <Link id="linkHover" href={`http://127.0.0.1:3000/${planetName}`} className="flex flex-row border border-[#838391] p-3 w-96 mb-5">
                                <h3 className="mr-6" style={{ color: "#fff", opacity: "0.5" }}>01</h3>
                                <h3 className="">OVERVIEW</h3>
                            </Link>
                            <Link id="linkHover" href={`http://127.0.0.1:3000/${planetName}/internal`} className="flex flex-row border border-[#838391] p-3 w-96 mb-5">
                                <h3 className="mr-6" style={{ color: "#fff", opacity: "0.5" }}>02</h3>
                                <h3>INTERNAL STRUCTURE</h3>
                            </Link>
                            <Link id="linkHover" href={`http://127.0.0.1:3000/${planetName}/geology`} className="flex flex-row border border-[#838391] p-3 w-96 mb-5" style={{ backgroundColor: cor_botoes }}>
                                <h3 className="mr-6 gray-700" style={{ color: "#fff", opacity: "0.5" }}>03</h3>
                                <h3>SURFACE GEOLOGY</h3>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row mr-16 ml-16">
                    <div className="border p-3 w-full mr-6 border-[#838391]">
                        <p>ROTATION TIME</p>
                        <h1 className="text-4xl">{planetData?.rotation}</h1>
                    </div>
                    <div className="border p-3 w-full mr-6 border-[#838391]">
                        <p>REVOLUTION TIME</p>
                        <h1 className="text-4xl">{planetData?.revolution}</h1>
                    </div>
                    <div className="border p-3 w-full mr-6 border-[#838391]">
                        <p>RADIUS</p>
                        <h1 className="text-4xl">{planetData?.radius}</h1>
                    </div>
                    <div className="border p-3 w-full border-[#838391]">
                        <p>AVERAGE TEMP.</p>
                        <h1 className="text-4xl">{planetData?.temperature}</h1>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}