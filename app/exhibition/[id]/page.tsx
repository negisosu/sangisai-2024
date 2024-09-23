import { Header } from "@/app/components/header"
import { HomeButton } from "@/app/components/homeButton"
import { getOne } from "@/lib/action"
import clsx from "clsx"
import Image from "next/image"

export default async function Page(
    //dynamic routingの説明はだるいからちょっとパス
    //強いていうならexhibition/[id]のidの部分に入ってるやつを取り出す固有の名前がparams
    //そっからとったやつを使ってexhibitionのエンドポイントから要素を取得してる
    { params } : {
        params : {
            id : string
        }
    }
){

    const data = await getOne('exhibition', params.id) || "None"

    if(data == "None"){
        return(
            <div className="w-full h-52 flex items-center justify-center text-center">
                データが読み込めませんでした。<br/>時間をおいて再度お試しください。
            </div>
        )
    }


    //console
    console.log(data)
    //console

    return(
        //ここで紹介の内容のjsonバラしてUIどうにかする場所だから、一旦放置
        <div>
            <HomeButton/>
            <Header/>
            <div className="flex items-center justify-center">
                <div className="bg-white md:w-[80%] w-[90%] md:my-10 my-5">
                    {data.option.map((content: any) => {
                        return(
                            <LoopOptions content={content} key={content}/>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

function LoopOptions({content}: {content: any}) {
    switch(content.fieldId){
        case "longBody":
            return(
                <div
                key={content}
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
                    __html: content.body
                }}/>
            )
        case "OtherImage":
            return(
                <div>
                    {
                        content.images.map((image: any) => {
                            return(
                                <Image
                                key={image}
                                src={image.url}
                                alt=""
                                height={300}
                                width={300}/>
                            )
                        })
                    }
                </div>
            )
    }
}