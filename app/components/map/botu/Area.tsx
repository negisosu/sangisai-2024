"use client";

import { noto_serif, roboto } from "@/fonts/fonts";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function Area({content, index, id} : { content: any, index: number, id: string}) {

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
        <div className="z-30">
            <AreaDetail id={id} content={content}/>
            <button
            className={` bg-black text-white flex justify-center items-center rounded-full md:w-[3vw] md:h-[3vw] w-[5vw] h-[5vw] md:text-[2vw] text-[3vw] z-30`}
            onClick={() => {
                handleClick(content.id)
            }}>
                {index}
            </button>
        </div>
    )
}

export function AreaDetail({ id, content}: { id: string, content: any}) {

    console.log(content)

    return(
        <div className={clsx(
            "absolute bg-white border rounded-lg w-[35vw] h-[35vw] z-20 md:hidden flex justify-center scale-50 -mt-[28vw] -ml-[15vw]",
            id == content.id ? "" : "hidden"
        )}>
            <div className="text-center">
                <div className="text-[4vw] my-[1vw]">{content.title}</div>
                <div className="text-[3vw] my-[1vw]">{content.exhibitionName}</div>
                <div>
                    <div className="text-[3vw]">場所</div>
                    <div className="text-[3vw]">{`${content.floor}F-${content.place}`}</div>
                </div>
                <Link className="text-[4vw] underline text-blue-500" href={`/exhibition/${content.id}`}>詳細を見る→</Link>
            </div>
        </div>
    )
}