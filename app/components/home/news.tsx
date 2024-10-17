import newsH2Image from "@/app/image/home/newsH2.png"
import { MyH2 } from "../myH2"
import { PageContentsComingSoon } from "../pageContentsComingSoon"
import { getHomeNews, getNews } from "@/lib/action"
import Link from "next/link"
import { Suspense } from "react"
import { NewsSkeleton } from "../skeletons/newsSkeleton"
import { ScrollAnimation } from "../scrollAnimation"

export function News() {

    return(
        <div>
            <MyH2 small="ニュース＆トピックス" large="news&topics" image={newsH2Image} image2={""}/>
            <ScrollAnimation>
            <div className="bg-white w-full">
                <Suspense fallback={<NewsSkeleton/>}>
                <Newss/>
                </Suspense>
                    <NewsButton/>
            </div>
            </ScrollAnimation>
        </div>
    )
}

export async function Newss() {

    // console.log('Fetching revenue data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    //データフェッチを確かめる遅延関数

    const data = await getHomeNews()

    if(!data){
        return (
            <div className="w-full h-52 flex items-center justify-center text-center">
                データが読み込めませんでした。<br/>時間をおいて再度お試しください。
            </div>
        )
    }

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

export async function NewssPage() {

    // console.log('Fetching revenue data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await getNews()

    if(!data){
        return (
            <div className="w-full h-52 flex items-center justify-center text-center">
                データが読み込めませんでした。<br/>時間をおいて再度お試しください。
            </div>
        )
    }

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
        className="flex md:h-16 h-12 w-[80%] md:border-b-2 border-b-2 md:text-lg text-xs bg-white hover:bg-gray-100"
        href={`/news/${news.id}`}
        prefetch={false}
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
        <Link href={"/news"} className="flex items-center justify-center md:pb-10 pb-5" prefetch={false}>
            <div className="flex items-center justify-center bg-orange-500 rounded-full md:w-40 w-24 md:h-16 h-8">
                <div className="md:text-sm text-[10px] text-white">
                    お知らせ一覧へ→
                </div>
            </div>
        </Link>
    )
}