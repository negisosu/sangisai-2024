'use client'

import clsx from "clsx"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export function Plus() {

    const searchparams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()
    const params = new URLSearchParams(searchparams)

    const plusPage = () => {
        params.set("page", `${Number(params.get("page")) + 1}`)
        router.push(`${pathname}?${params.toString()}`, { scroll: false})
    }

    return(
        <button
        className=" absolute right-0 h-full px-4 text-6xl"
        onClick={() => plusPage()}
        >
            {">"}
        </button>
    )
}

export function Minus() {

    const searchparams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()
    const params = new URLSearchParams(searchparams)

    const minusPage = () => {
        params.set("page", `${Number(params.get("page")) - 1}`)
        router.push(`${pathname}?${params.toString()}`, { scroll: false})
    }

    return(
        <button
        className=" absolute left-0 h-full px-4 text-6xl"
        onClick={() => minusPage()}
        >
            {"<"}
        </button>
    )
}

// absolute right-0 h-full px-4 md:block hidden