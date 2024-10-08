import { zen_kurenaido } from "@/fonts/fonts"
import Image from "next/image"
import Link from "next/link"
import exhibitionTitleImage from "@/app/image/exhibition/exhibitionTitleImage.png"
import { Search } from "./search"
import { Tags } from "./tags"
import { getExhibitions } from "@/lib/action"

export async function Exhibitions({ query, tag  }: { query: string, tag: string }) {



        //企画・出展の全取得、query,tagがあるときは検索や絞り込みされる
        const data = await getExhibitions(query, tag) || "None";

        //console
        // console.log(data)
        // console.log("----------------------------------------------------")
        // console.log("query:",query)
        // console.log("tag:",tag)
        // data?.contents?.map((content:any) => {
        //     console.log(content.title,"tag:",content.tag)
        // })
        // console.log("----------------------------------------------------")
        // if(data == "None"){
        //     console.log("None")
        // }
        //console
    

    if(data == "None"){
        return(
            <div className="w-full h-52 flex items-center justify-center text-center">
                データが読み込めませんでした。<br/>時間をおいて再度お試しください。
            </div>
        )
    }

    return(
        <div className="md:m-12 m-6 bg-white">
            <div className={`${zen_kurenaido.className} md:text-4xl md:p-8 text-xl p-4 flex`}>
                <div>
                    企画一覧
                </div>
                <Image
                src={exhibitionTitleImage}
                alt=""
                className="md:w-20 md:h-20 md:-mt-5 w-10 h-10 -mt-2"
                />
            </div>
            <div className="w-full">
                <Search/>
                <Tags/>
            </div>
            <div
            className="grid md:grid-cols-3 grid-cols-2 md:mx-10 mx-4"
            >
                {data?.contents?.map((content: any) => {
                return <div
                key={content.title}
                className="md:m-4 m-2 border md:hover:scale-105 md:transition-all"
                >
                    <Link href={`/exhibition/${content.id}`} className="w-full">
                    <Exhibition content={content}/>
                    </Link>
                </div>
                })}
            </div>
        </div>
    )
}

export function Exhibition({content} : { content: any }) {
    
    console.log("content: ",content)
    return(
        <div className="">
            <Image
            src={`${content.image.url}?width=250&height=250`}
            width={500}
            height={500}
            alt=""
            className="object-cover md:h-48 h-28"
            unoptimized={true}//繰り返し表示なので最適化オフ
            />
            <div className={`${zen_kurenaido.className} bg-white md:h-60 h-44 w-full`}>
                <div className="md:text-lg text-xs md:m-2 md:block hidden">{`${content.floor}F-${content.place} | ${content.exhibitionName}`}</div>
                <div className="md:text-xl text-sm md:mx-4 md:my-2 mx-2 my-1 underline text-center text-blue-500 hover:text-blue-700">{content.title}</div>
                <div className={`${zen_kurenaido.className} md:text-[1.6vw] md:leading-6 text-xs md:p-2 p-1`}>{content.shortBody}</div>
                <div className="md:hidden text-right block text-xs text-blue-500 m-2">もっと見る→</div>
            </div>
        </div>
    )
}

export function LoadingExhibitions() {
    return(
        <div className="flex items-center justify-center w-full h-96 text-2xl">
            企画を読み込み中
        </div>
    )
}