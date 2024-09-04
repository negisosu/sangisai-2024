import { zen_kurenaido } from "@/fonts/fonts";

export function MyH3({ small, large } : { small: string, large: string }) {
    return(
        <div className="flex items-center justify-center md:my-8 my-4">
            <div className="text-center flex flex-col gap-1 ">
                <div className={`${zen_kurenaido.className} md:text-lg text-sm`}>{small}</div>
                <div className="md:text-5xl text-3xl">{large}</div>
                <div className="w-[60%] md:h-[3px] h-[1px] bg-black mx-auto"/>
            </div>
        </div>
    )
}