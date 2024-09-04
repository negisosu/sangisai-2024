import newsH2Image from "@/app/image/home/newsH2.png"
import { MyH2 } from "../myH2"
import { PageContentsComingSoon } from "../pageContentsComingSoon"
import { getHomeNews } from "@/lib/action"
import Link from "next/link"

export async function News() {

    const data = await getHomeNews()

    return(
        <div>
            <MyH2 small="ニュース＆トピックス" large="news&topics" image={newsH2Image} image2={""}/>
            <div className="bg-white w-full">
                <Newss data={data}/>
                <NewsButton/>
            </div>
        </div>
    )
}

export function Newss({ data }: { data: any}) {
    return(
        <div className="flex flex-col items-center justify-center md:py-20 py-10">
        {
            data?.contents?.map((news: any) => {
                return <NewsOne key={news.id} news={news}/>
            })
        }
        </div>
    )
}

function NewsOne({ news } : { news: any}) {
    return(
        <Link
        className="flex md:h-16 h-12 w-[80%]  border-b-2 md:text-lg text-xs bg-white hover:bg-gray-100"
        href={`/news/${news.id}`}
        >
            <div className="w-1/3 flex items-center justify-center">{changeDate(news.createdAt)}</div>
            <div className="w-2/3 flex items-center">{news.title}</div>
        </Link>
    )
}

export const changeDate = ( date: string) => {
    const newDate = `${date.slice(0,4)}.${date.slice(5,7)}.${date.slice(8,10)}`
    return newDate
}

function NewsButton() {
    return(
        <Link href={"/news"} className="flex items-center justify-center md:pb-10 pb-5">
            <div className="flex items-center justify-center bg-orange-500 rounded-full md:w-40 w-24 md:h-16 h-8">
                <div className="md:text-sm text-[10px] text-white">
                    お知らせ一覧へ→
                </div>
            </div>
        </Link>
    )
}