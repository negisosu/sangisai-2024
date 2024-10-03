import { areas } from "@/consts/areas"
import clsx from "clsx"

export function Areas({ floorAreas } : { floorAreas : number[]}) {

    return(
        <div className=" relative bg-white md:w-[90vw] md:h-[90vw] md:m-[5vw] m-[2vw] w-[96vw] h-[96vw]">
            {floorAreas.map((floorArea: number) => {

                const x = areas[floorArea].x.toString()
                const y = areas[floorArea].y.toString()

                console.log(x, y)

                return <div
                key={floorArea}
                className={` absolute`}
                style={{ top: `${y}%`, left: `${x}%`}}>
                    {floorArea}
                </div>
            })}
        </div>
    )
}
