"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function Area({content, index} : { content: any, index: number}) {

    const searchparams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()
    const params = new URLSearchParams(searchparams)

    const handleClick = (id: string) => {
        if(params.get("id") == id){//すでに同じidがついてたらidパラメーターを消す
            params.delete("id")
        }else{
            params.set("id", id)
        }
        router.push(`${pathname}?${params.toString()}`, { scroll: false})
    }

    return(
        <button
        className="bg-white text-black flex justify-center items-center rounded-full md:w-[2.4vw] md:h-[2.4vw] w-[5vw] h-[5vw] md:text-[1.2vw] text-[2.5vw] border-2 border-black"
        onClick={() => {
            handleClick(content.id)
        }}>
            {index}
        </button>
    )
}