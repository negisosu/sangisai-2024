import { floorPlace } from "@/consts/const";
import { FloorPlace } from "./floorPlace";

export function FloorPlaces({ floor }: { floor : string}) {
    return(
        <div className="flex items-center justify-center">
            <div className="flex">
                {
                    floorPlace.map((place) => {
                        if(place.slice(0,1) == floor){
                            return(
                                <FloorPlace place={place} key={floorPlace.indexOf(place)}/>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}