"use client"
import Link from "next/link";

export default function Home(){
    return(
        <div className="flex flex-col mt-32 w-screen h-screen mx-auto my-auto">
            <div className="mx-auto my-auto items-center text-center">
                <h1 className="mb-8 text-2xl">Ready to learn a little about the Milky Way?</h1>
                <Link className="border rounded-lg p-3 w-20" href={"/mercury"}>Launch</Link>
            </div>
        </div>
    );
}