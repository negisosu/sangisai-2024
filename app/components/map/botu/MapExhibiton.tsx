"use client"

import { zen_kurenaido } from "@/fonts/fonts"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export function MapExhibition({content}: { content: any}) {

    const searchparams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()
    const params = new URLSearchParams(searchparams)

    const handleClick = () => {

        params.set("floor", content.floor)
        params.set("id", content.id)
        router.push(`${pathname}?${params.toString()}`, {scroll: false})

        window.scrollTo({
            top: document.getElementById("map")?.offsetHeight,
            behavior: "smooth"
        })
    }

    return(
        <div onClick={() => handleClick()} className=" md:my-6 my-3 md:mx-4  mx-2 border md:hover:scale-105 transition-all">
            <Image
            src={content.image.url}
            alt=""
            width={500}
            height={500}
            unoptimized
            className="w-full md:h-48 h-28 object-cover"
            />
            <div className={`${zen_kurenaido.className} bg-white md:h-72 h-52 w-full`}>
                <div className="md:text-lg text-xs md:m-2 md:block hidden">{`${content.floor}F-${content.place} | ${content.exhibitionName}`}</div>
                <div className="md:text-xl text-sm md:mx-4 md:my-2 mx-2 my-1 underline text-center text-blue-500 hover:text-blue-700">{content.title}</div>
                <div className={`${zen_kurenaido.className} md:text-[1.6vw] md:leading-6 text-xs md:p-2 p-1`}>{`${content.shortBody.slice(0,70)}${content.shortBody.length > 70 ? "......" : ""}`}</div>
                <div className="md:hidden text-right block text-xs text-blue-500 m-2">もっと見る→</div>
            </div>
        </div>
    )
}