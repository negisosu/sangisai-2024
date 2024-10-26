import { zen_kurenaido } from "@/fonts/fonts"
import Link from "next/link"

export function MapExhibitions({ data }: { data: any}) {

    console.log("--------------------------------------")
    console.log(data)
    console.log(data.contents)
    console.log("--------------------------------------")

    return(
        <div className={`${zen_kurenaido.className} grid md:grid-cols-2 grid-cols-1`}>
            {
                data.map((content: any) => {
                    return(
                        <Link
                        key={content.id}
                        href={`/exhibition/${content.id}`}
                        className="flex md:h-20 h-16"
                        >
                            <div
                            className="bg-white border border-black text-lg md:m-2 m-1 md:w-11 md:h-11 w-8 h-8 flex items-center justify-center rounded-full"
                            >
                                {content.mapNumber || data.indexOf(content) + 1}
                                </div>
                            <div>
                                <div className="text-xl text-blue-500 hover:text-blue-700 underline">{content.title}</div>
                                <div className="text-sm">{content.exhibitionName}</div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}