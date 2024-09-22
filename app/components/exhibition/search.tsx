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
    const router = useRouter()


    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchparams)
        if(term){
            params.set('query',term);
        }else{
            params.set('query', term);
            params.delete('query')
        }
        router.push(`${pathname}?${params.toString()}`, { scroll : false })
    },300)


    return(
        <div className="flex justify-center items-center">
            <div className="w-full md:mx-5 mx-2">
                <input
                className="w-full border md:p-2 p-1 rounded-[0.5vw]"
                placeholder="企画を検索"
                onChange={(e) => {
                    handleSearch(e.target.value)
                }}
                defaultValue={searchparams.get('query')?.toString()}
                />
            </div>
        </div>

    );
}