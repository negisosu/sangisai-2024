'use client'

/*
このコンポーネントは、それぞれのタグのボタンが押された時にタグの値をURLのパラメーターにtag=にして追加しているだけ
やってることは↑これのとおりのため、詳しく見る必要なし
 */

import { usePathname, useRouter, useSearchParams } from "next/navigation";
//tagをCMSから引っ張ってくるのができなかったから定数ファイルにある。あんまり定数をプログラム内に書きたくないから
import { tags } from "@/consts/const";
import clsx from "clsx";
import { useEffect } from "react";

export function Tags() {

    return(
        <div className="flex items-center justify-center">
            <div className="flex md:gap-5" >
                {tags.map((tag) => {
                    return <div key={tag}>
                        <TagButton tag={tag}/>
                    </div>
                })}
            </div>
        </div>
    )
}

function TagButton({ tag }: { tag: string }) {

    const searchparams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()
    const params = new URLSearchParams(searchparams)

    const handleTag = (term: string) => {
        if(term){
            params.set('tag', term)
        }else{
            params.set('tag', term)
            params.delete('tag')
        }
        router.push(`${pathname}?${params.toString()}`, { scroll: false })
    }

    useEffect(() => {
        if(params.get("tag") == null){
            params.set("tag", "全て")
            router.push(`${pathname}?${params.toString()}`, { scroll: false})
        }
    })

    return(
        <button
        className={clsx(
            "md:p-5 md:m-2 md:text-lg p-2 m-1 text-xs rounded-xl",
            params.get("tag") == tag ? " border-blue-300 border-2" : ""
        )}
        onClick={() => {
            handleTag(tag)
        }}>
            {tag}
        </button>
    )
}