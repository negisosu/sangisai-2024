import { getExhibitionsFloor } from "@/lib/action"
import { Floors } from "../components/map/floors"
import { Exhibitions } from "../components/exhibition/exhibitions"
import { SNSIcons } from "../components/snsIcons"
import { PageMain } from "../components/pageMain"
import { Header } from "../components/header"
import { PageComingSoon } from "../components/PageComingSoon"
import { Areas } from "../components/map/Areas"
import { ExhibitionFloor } from "../components/map/ExhibitionFloor"
import { Suspense } from "react"
import { AreasSkeleton } from "../components/skeletons/areasSkeleton"

export default async function Page({searchParams}: {
    searchParams : {
        floor: string,
        id: string
    }
}) {
    const floor = searchParams.floor || "1"
    const id = searchParams.id || "999"

    //console
    console.log("---------floor---------")
    console.log(floor)
    //console

    return(
        <div>
            <SNSIcons/>
            <PageMain title="会場マップ"/>
            <Header/>
            <div className="bg-white w-[90%] m-[5%]">
                <Floors/>
                <Suspense fallback={<AreasSkeleton/>}>
                    <Areas id={id} floor={floor}/>
                </Suspense>
            </div>
        </div>
    )
}