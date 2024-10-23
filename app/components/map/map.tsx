import { getExhibitionsFloor } from "@/lib/action"
import { Floors } from "./floors"
import { FloorPlaces } from "./floorPlaces"

export async function Map({ floor, id}: { floor: string, id: string}) {

    const data = await getExhibitionsFloor(floor)
    console.log(data)

    return(
        <div className="w-full bg-white">
            <Floors/>
            <FloorPlaces floor={floor}/>
        </div>
    )
}