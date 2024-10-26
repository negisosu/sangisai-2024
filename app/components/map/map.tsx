import { getExhibitionsFloor } from "@/lib/action"
import { Floors } from "./floors"
import { MapImages } from "./mapImages"
import { MapExhibitions } from "./mapExhibitions"

export async function Map({ floor}: { floor: string}) {

    const data = await getExhibitionsFloor(floor)

    const sortData = data.contents.sort((a: any, b: any) => {
        return a.mapNumber - b.mapNumber
    })

    return(
        <div className="w-full bg-white">
            <Floors/>
            <MapImages floor={floor}/>
            <MapExhibitions data={sortData}/>
        </div>
    )
}