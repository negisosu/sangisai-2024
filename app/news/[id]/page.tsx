import { Header } from "@/app/components/header"
import { changeDate } from "@/app/components/home/news"
import { HomeButton } from "@/app/components/homeButton"
import { SPHeader } from "@/app/components/spHeader"
import { m_plus_rounded_1c_300, m_plus_rounded_1c_500, m_plus_rounded_1c_700, zen_kurenaido } from "@/fonts/fonts"
import { getNewsOne } from "@/lib/action"
import clsx from "clsx"
import Link from "next/link"

export default async function Page( { params }: { params: { id: string }}) {

    const news = await getNewsOne(params.id)
    console.log(news.body)

    return(
        <div>
            <div>
                <HomeButton/>
            </div>
            <Header/>
            <div className={`${m_plus_rounded_1c_300.className} md:mx-20 mx-10 md:my-8 my-4 md:text-6xl text-2xl`}>{news.title}</div>
            <div className="md:mx-20 mx-10 md:my-4 my-2 md:text-xl text-sm">{changeDate(news.createdAt)}</div>
            <div className="bg-white md:mx-20 mx-6 md:mt-4 md:mb-16 mb-8">
                <div
                className={
                    clsx(
                    "md:block hidden",
                    "py-10 px-12",
                    "text-xl [&_h5]:text-sm [&_h4]:text-lg [&_h3]:text-2xl [&_h2]:text-3xl [&_h1]:text-4xl",
                    "leading-10 [&_h5]:my-1 [&_h4]:my-3 [&_h3]:my-5 [&_h2]:my-7 [&_h1]:my-9",
                    "[&_a]:text-purple-500 [&_a]:underline"
                )
                }
                dangerouslySetInnerHTML={{
                    __html: news.body
                }}/>
                <div
                className={
                    clsx(
                    `${zen_kurenaido.className}`,
                    "md:hidden block",
                    "py-5 px-6",
                    "text-sm [&_h5]:text-xs [&_h4]:text-sm [&_h3]:text-lg [&_h2]:text-xl [&_h1]:text-2xl",
                    "[&_h5]:font-extrabold [&_h4]:font-extrabold [&_h3]:font-extrabold [&_h2]:font-extrabold [&_h1]:font-extrabold",
                    "leading-8 [&_h5]:my-1 [&_h4]:my-1 [&_h3]:my-3 [&_h2]:my-5 [&_h1]:my-7",
                    "[&_a]:text-purple-500 [&_a]:underline"
                )
                }
                dangerouslySetInnerHTML={{
                    __html: news.body
                }}/>
            </div>
        </div>
    )
}