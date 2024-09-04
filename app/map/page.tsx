import { getExhibitionsFloor } from "@/lib/action"
import { Floors } from "../components/map/floors"
import { Exhibitions } from "../components/exhibition/exhibitions"
import { SNSIcons } from "../components/snsIcons"
import { PageMain } from "../components/pageMain"
import { Header } from "../components/header"
import { PageComingSoon } from "../components/PageComingSoon"

export default async function Page({searchParams}: {
    searchParams : {
        floor: string
    }
}) {
    
    const floor = searchParams.floor || "1"

    const data = await getExhibitionsFloor(floor)//階層ごとに分割したデータを渡したい

    //console
    console.log(data)
    console.log("----------------------------------------------------")
    //console

    return(
        <div>
            <SNSIcons/>
            <PageMain title="会場マップ"/>
            <Header/>
            <PageComingSoon/>
            {/* <Floors/>
            <Exhibitions data={data}/> */}
        </div>
    )
}