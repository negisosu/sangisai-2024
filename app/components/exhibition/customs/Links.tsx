import { zen_kurenaido } from "@/fonts/fonts"
import Link from "next/link"

export function Links({ content } : {
    content: {
        fieldId: string,
        urls: {
            fieldId: string,
            title: string,
            url: string,
            detail: string
        }[]
    }
}) {

    return(
        <div>
            <div className={`${zen_kurenaido.className} md:text-4xl text-2xl md:m-6 m-3`}>
                関連リンク
            </div>
            <div className="md:mx-16 mx-8">
                {
                    content.urls.map((url) => {
                        return (
                            <div
                            key={content.urls.indexOf(url)}
                            className="md:py-8 py-4"
                            >
                                <Link
                                href={url.url}
                                className="md:text-2xl text-lg text-blue-500 hover:text-blue-700 hover:underline break-all">
                                    <div>
                                        {url.title}
                                    </div>
                                </Link>
                                <div className="md:text-lg text-xs my-1">
                                    {url.detail}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}