'use client'

/*
このコンポーネントは、それぞれのタグのボタンが押された時にタグの値をURLのパラメーターにtag=にして追加しているだけ
やってることは↑これのとおりのため、詳しく見る必要なし
 */

import { usePathname, useRouter, useSearchParams } from "next/navigation";
//tagをCMSから引っ張ってくるのができなかったから定数ファイルにある。あんまり定数をプログラム内に書きたくないから
import { tags } from "@/consts/const";

export function Tags() {

    return(
        <div className="flex" >
            <TagButton tag={""}/>
            {tags.map((tag) => {
                return <div key={tag}>
                    <TagButton tag={tag}/>
                </div>
            })}
        </div>
    )
}

function TagButton({ tag }: { tag: string }) {

    const searchparams = useSearchParams()
    const pathname = usePathname()
    const { replace} = useRouter()

    const handleTag = (term: string) => {
        const params = new URLSearchParams(searchparams)
        if(term){
            params.set('tag', term)
        }else{
            params.set('tag', term)
            params.delete('tag')
        }
        replace(`${pathname}?${params.toString()}`)
    }

    return(
        <button
        className="bg-gray-50 h-10 w-10"
        onClick={() => {
            handleTag(tag)
        }}>
            {tag}
        </button>
    )
}