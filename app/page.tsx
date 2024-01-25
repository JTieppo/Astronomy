"use client"
import { useRouter } from "next/navigation";
export default function Home(){
    var route = useRouter();
    route.push('/mercury')
    return(
        <div></div>
    );
}