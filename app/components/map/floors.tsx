'use client'

import { zen_kurenaido } from "@/fonts/fonts";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const floors = [...Array(7)].map((v, i) => i + 1)//[1~7]の配列

export function Floors() {

    const searchparams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()
    const params = new URLSearchParams(searchparams)

    useEffect(() => {
        if(params.get("floor") == null){
            params.set("floor", "1")
            router.push(`${pathname}?${params.toString()}`, { scroll: false})
        }
    })

    const handleFloor = (term: string) => {
        if(term){
            params.set('floor', term)
        }else{
            params.set('floor', term)
            params.delete('floor')
        }
        params.delete("id")
        router.push(`${pathname}?${params.toString()}`, { scroll: false})
    }

    return(
        <div className="w-full h-[20vw] flex items-center justify-center md:text-xl text-sm">
            {floors.map((floor) => {
                return <button
                key={floor}
                className={clsx(
                    " md:p-[4vw] p-[3vw] rounded-lg",
                    `${floor}` == params.get("floor") ? " md:border-4 border-2 border-blue-300" : ""
                )}
                onClick={() => {
                    handleFloor(`${floor}`)
                }}
                >
                    <div
                    className={`${zen_kurenaido.className}`}
                    >
                        {`${floor}F`}
                    </div>
                </button>
            })}
        </div>
    )
}
