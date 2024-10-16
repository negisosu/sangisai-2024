import { getExhibitionsFloor } from "@/lib/action"
import { MapExhibition } from "./MapExhibiton"

export async function MapExhibitions({ floor }: { floor: string}) {

    const data = await getExhibitionsFloor(floor)

    console.log("-----------------getExhibitionFloorData----------------------------")
    console.log(data)

    return(
        <div className="grid md:grid-cols-3 grid-cols-2 md:py-10 py-5 md:mx-10 mx-4">
            {
                data.contents.map((content: any) => {
                    return(
                        <MapExhibition content={content} key={data.contents.indexOf(content)}/>
                    )
                })
            }
        </div>
    )
}

