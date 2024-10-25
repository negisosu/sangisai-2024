import { getExhibitionsFloor } from "@/lib/action"
import { Floors } from "./floors"
import { FloorPlaces } from "./botu/floorPlaces"
import { MapImages } from "./mapImages"
import { MapExhibitions } from "./mapExhibitions"

export async function Map({ floor}: { floor: string}) {

    const data = await getExhibitionsFloor(floor)
    console.log(data)
    // console.log(data.contents.length)
    // data.contents.map((content: any) => {
    //     console.log(content.title)
    // })


    return(
        <div className="w-full bg-white">
            <Floors/>
            <MapImages floor={floor}/>
            <MapExhibitions data={data}/>
        </div>
    )
}