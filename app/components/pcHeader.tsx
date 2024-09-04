import { header } from "@/consts/const"
import Link from "next/link"


export function PCHeader() {
    return(
        <div className="bg-white w-full h-28">
            <div className="flex w-[90%] mx-[5%] h-full">
                {header.map((url) => {
                    return(
                        <Link
                        key={url.title}
                        href={url.url}
                        className="flex items-center justify-center w-1/5 h-full">
                            <div className="text-[2.2vw]">
                                {url.title}
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

