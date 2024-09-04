import { m_plus_rounded_1c_500 } from "@/fonts/fonts";


export function PageMain({ title } : { title: string}) {
    return(
        <div className="flex items-center justify-center md:h-[540px] h-64">
            <div>
                <div className={`${m_plus_rounded_1c_500.className} md:text-8xl text-5xl underline`}>{title}</div>
            </div>
        </div>
    )
}