import { Header } from "@/app/components/header"
import { HomeButton } from "@/app/components/homeButton"
import { MyH2 } from "@/app/components/myH2"
import { zen_kurenaido } from "@/fonts/fonts"
import { getOne } from "@/lib/action"
import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import ExhibitionMenuImage from "@/app/image/exhibition/exhibitionMenuImage.png"
import { LongBody } from "@/app/components/exhibition/customs/longBody"
import { OtherImage } from "@/app/components/exhibition/customs/OtherImage"
import { Menu } from "@/app/components/exhibition/customs/Menu"
import { Links } from "@/app/components/exhibition/customs/Links"

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
                    <div className="md:text-5xl text-3xl md:my-8 my-4 text-center">{data.title}</div>
                    <div className="md:flex md:my-10 my-4">
                        <div className="md:w-1/2 md:text-xl text-sm text-center md:m-8 m-2">
                            {data.shortBody}
                        </div>
                        <div className="md:w-1/2">
                            <div className="flex items-center justify-center md:hidden">
                                <Image
                                src={`${data.image.url}?width=${data.image.width}&height=${data.image.height}`}
                                width={300}
                                height={300}
                                alt=""
                                />
                            </div>
                            <div className="md:flex items-center justify-center">
                                <Image
                                src={`${data.image.url}?width=${data.image.width}&height=${data.image.height}`}
                                width={600}
                                height={600}
                                alt=""
                                className="w-[80%] h-auto md:block hidden"
                                />
                            </div>
                        </div>
                    </div>
                    {
                        //その他のコンテンツの繰り返しフィールドの部分
                        data.option.map((content: any) => {
                            return(
                                <LoopOptions content={content} key={content}/>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

function LoopOptions({content}: {content: any}) {
    switch(content?.fieldId){
        case "longBody":
            return <LongBody content={content}/>
        case "OtherImage":
            return <OtherImage content={content}/>
        case "links":
            return <Links content={content}/>
    }
}