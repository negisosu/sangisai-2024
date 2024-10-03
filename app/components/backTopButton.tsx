'use client'

import clsx from "clsx"
import { useEffect, useState } from "react"
import backTopButtonImage from "@/app/image/backTopButton.png"
import Image from "next/image"

export function BackTopButton() {

    const [isHide, setIsHide] = useState(false)

    const catchScroll = () => {
        window.scrollY > 200 ? setIsHide(true) : setIsHide(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", catchScroll)
        return () => window.removeEventListener("scroll", catchScroll)
    })

    const handleClick = () => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
    }

//bg-[#7bbdbc]


    return(
        <div
        onClick={() => {
            handleClick()
        }}
        className={clsx(
            "fixed bottom-0 right-0 z-40",
            isHide ? "" : "hidden"

        )}>
            <div className=" bg-[#ffb444] rounded-full border border-black md:p-4 md:m-6 p-2 m-2">
                <Image
                src={backTopButtonImage}
                alt=""
                width={30}
                height={30}/>
            </div>
        </div>
    )
}
