"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

export function FloorPlace({ place }: { place: string}) {

    const searchparams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()
    const params = new URLSearchParams(searchparams)

    const handleClick = (pla: string) => {
        params.set("fp", pla)
        router.push(`${pathname}?${params.toString()}`)
    }

    return(
        <div onClick={() => handleClick(place)}>
            {place}
        </div>
    )
}