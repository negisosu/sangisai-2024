
import { SNSIcons } from "../components/snsIcons"
import { PageMain } from "../components/pageMain"
import { Header } from "../components/header"
import { Map } from "../components/map/map"
import { PageContents } from "../components/pageContents"
import { Suspense } from "react"
import { PageComingSoon } from "../components/PageComingSoon"

export default async function Page({searchParams}: {
    searchParams : {
        floor: string,
        id: string
    }
}) {

    const floor = searchParams.floor || "1"
    const id = searchParams.id || "999"

    //console
    // console.log("---------floor---------")
    // console.log(floor)
    //console



    return(
        <div>
            <SNSIcons/>
            <PageMain title="マップ"/>
            <Header/>
            <PageContents>
            {/* <div className="flex items-center justify-center h-[580px] w-full">
            <div className=" md:text-7xl text-3xl ">
                メンテナンス中...
            </div>
        </div> */}
                <Suspense>
                    <Map floor={floor}/>
                </Suspense>
            </PageContents>
        </div>
    )
}



            {/* <div className="bg-white w-[90%] m-[5%]">
                <Floors/>
                <Suspense fallback={<AreasSkeleton/>}>
                    <Areas id={id} floor={floor}/>
                </Suspense>
                <Suspense>
                    <MapExhibitions floor={floor}/>
                </Suspense>
            </div> */}