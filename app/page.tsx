"use client"
import { promises as fs } from 'fs';
import { data } from './data';
import path from 'path';
import { useRouter } from 'next/navigation';


export default function Page() {
    const router = useRouter();

    router.push('/mercury');
    return (
        <div>
            <img src="assets/geology-earth.png" alt="" />
        </div>
    );
}