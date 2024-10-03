import { getExhibitionsFloor } from "@/lib/action"
import { Floors } from "../components/map/floors"
import { Exhibitions } from "../components/exhibition/exhibitions"
import { SNSIcons } from "../components/snsIcons"
import { PageMain } from "../components/pageMain"
import { Header } from "../components/header"
import { PageComingSoon } from "../components/PageComingSoon"
import { Areas } from "../components/map/Areas"

export default async function Page({searchParams}: {
    searchParams : {
        floor: string
    }
}) {
    const floor = searchParams.floor || "1"

    const data = await getExhibitionsFloor(floor)//階層ごとに分割したデータ、パラメーターの依存

    if(!data){
        return (
            <div>
                <SNSIcons/>
                <PageMain title="会場マップ"/>
                <Header/>
                <div className="w-full h-52 flex items-center justify-center text-center">
                    データが読み込めませんでした。<br/>時間をおいて再度お試しください。
                </div>
            </div>
        )
    }

    //この階層で存在するエリアの一覧
    const floorAreas = data.contents.map((content:any) => {
        return content.area
    })

    //console
    console.log("---------floor---------")
    console.log(floor)
    console.log("---------floorAreas---------")
    console.log(floorAreas)
    console.log("---------data---------")
    console.log(data)
    //console

    return(
        <div>
            <SNSIcons/>
            <PageMain title="会場マップ"/>
            <Header/>
            <Floors/>
            <Areas floorAreas={floorAreas}/>
        </div>
    )
}