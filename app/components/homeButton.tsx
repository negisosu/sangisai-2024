import { m_plus_rounded_1c_300, m_plus_rounded_1c_500 } from "@/fonts/fonts";
import Link from "next/link";

export function HomeButton () {
    return(
        <div
        className="flex items-center justify-center md:h-32 h-16 w-full"
        >
            <Link href={"/"}>
                <div className={`${m_plus_rounded_1c_300.className} md:text-lg text-xs w-full flex items-center justify-center`}>SanGi FEsT.</div>
                <div className={`${m_plus_rounded_1c_500.className} md:text-3xl text-lg`}>産技祭 2024</div>
            </Link>
        </div>
    )
}