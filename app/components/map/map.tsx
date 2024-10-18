import { getExhibitionsFloor } from "@/lib/action"
import { Floors } from "./floors"

export async function Map({ floor, id}: { floor: string, id: string}) {

    const data = await getExhibitionsFloor(floor)
    console.log(data)

    return(
        <div className="w-full bg-white">
            <Floors/>
            <div>
                
            </div>
        </div>
    )
}