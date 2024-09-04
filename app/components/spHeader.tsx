"use client"

import { header } from "@/consts/const"
import clsx from "clsx"
import { useState } from "react"
import spHeaderButtonImage from "@/app/image/header/spHeaderButton.png"
import spHeaderMenuButtonImage from "@/app/image/header/spHeaderMenuButton.png"
import Image from "next/image"
import Link from "next/link"

export function SPHeader() {

    const [ isOpen, setIsOpen ] = useState(false)

    return(
        <div
        className=" fixed top-2 right-2 z-40"
        >
            <div className={clsx(
                " fixed top-0 right-0 z-40",
                isOpen ? "block" : "hidden"
            )}>
                <SPHeaderMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>
            <div
            onClick={() => {
                setIsOpen(!isOpen)
            }}
            className="z-50"
            >
                <SPHeaderButton/>
            </div>
        </div>
    )
}

function SPHeaderButton () {
    return(
        <div>
            <Image
            className=" rounded-full"
            src={spHeaderButtonImage}
            width={50}
            height={50}
            alt=""
            />
        </div>
    )
}

function SPHeaderMenu({ isOpen, setIsOpen}: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
    return(
        <div className="w-screen h-screen fixed top-0 left-0">
            <div className="flex">
                <div
                className="bg-gray-500 h-screen w-[40%] opacity-30"
                onClick={() => {
                    setIsOpen(!isOpen)
                }}
                ></div>
                <div className=" bg-white h-screen w-[60%]">
                    <div className="flex flex-col">
                    {
                        header.map((url) => {
                            return <Link
                            href={url.url}
                            key={url.title}
                            className="flex items-center justify-center h-20"
                            >
                                <div>
                                    <div>{url.title}</div>
                                </div>
                            </Link>
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}