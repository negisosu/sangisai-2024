'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const floors = [...Array(7)].map((v, i) => i + 1)//[1~7]の配列

export function Floors() {

    return(
        <div className="flex">
            {floors.map((floor) => {
                return <div key={floor}>
                    <Floor floor={floor}/>
                </div>
            })}
        </div>
    )
}

function Floor({ floor } : { floor : number }) {

    const searchparams = useSearchParams()
    const pathname = usePathname()
    const { replace} = useRouter()

    const handleFloor = (term: string) => {
        const params = new URLSearchParams(searchparams)
        if(term){
            params.set('floor', term)
        }else{
            params.set('floor', term)
            params.delete('floor')
        }
        replace(`${pathname}?${params.toString()}`)
    }

    return(
        <button
        className="bg-gray-50 h-10 w-10"
        onClick={() => {
            handleFloor(`${floor}`)
        }}
        >
            {`${floor}F`}
        </button>
    )
}