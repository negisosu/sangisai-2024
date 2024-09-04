'use client'

/*
このコンポーネントは、検索バーに入力された値をURLのパラメーターにquery=にして追加しているだけ
やってることは↑これのとおりのため、詳しく見る必要なし
 */

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';

export function Search() {

    const searchparams = useSearchParams()
    const pathname = usePathname()
    const { replace} = useRouter()


    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchparams)
        if(term){
            params.set('query',term);
        }else{
            params.set('query', term);
            params.delete('query')
        }
        replace(`${pathname}?${params.toString()}`)
    },300)


    return(
        <div className="w-[80%]">
            <input
            className="w-full border p-[1.6vw] m-[2%] md:p-[0.6vw] md:m-[1%] rounded-[0.5vw]"
            placeholder="検索"
            onChange={(e) => {
                handleSearch(e.target.value)
            }}
            defaultValue={searchparams.get('query')?.toString()}
            />
        </div>
    );
}