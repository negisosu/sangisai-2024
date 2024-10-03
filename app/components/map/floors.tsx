'use client'

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
        router.push(`${pathname}?${params.toString()}`, { scroll: false})
    }

    return(
        <div className="flex">
            {floors.map((floor) => {
                return <div key={floor}>
                    <button
                    className="bg-gray-50 h-10 w-10"
                    onClick={() => {
                        handleFloor(`${floor}`)
                    }}>
                        {`${floor}F`}
                    </button>
                </div>
            })}
        </div>
    )
}
