import { m_plus_rounded_1c_500, m_plus_rounded_1c_300 } from "@/fonts/fonts";

export function MainTitle() {
    //メイン文字？のheightはmd:580pxのh-80で固定
    return(
        <div className="flex items-center justify-center md:h-[540px] h-80">
            <div
            className="text-center flex flex-col md:gap-16 gap-8"
            >
                <h2 className={`${m_plus_rounded_1c_300.className} md:text-4xl text-3xl`}>SanGi FEsT .</h2>
                <h1 className={`${m_plus_rounded_1c_500.className} md:text-9xl text-5xl`}>産技祭 2024</h1>
                <h2 className={`${m_plus_rounded_1c_300.className} md:text-4xl text-xl text-white underline`}>2024/10/28(Sat)-2024/10/29(Sun)</h2>
            </div>
        </div>
    )
}