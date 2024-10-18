import { areas } from "@/consts/areas"
import clsx from "clsx"
import { Area, AreaDetail } from "./Area"
import { Map } from "./map"
import { Exhibition } from "../../exhibition/exhibitions"
import { getExhibitionsFloor, getOne } from "@/lib/action"
import Link from "next/link"
import Image from "next/image"

export async function Areas({ id , floor}: { id: string, floor: string }) {

    const data = await getExhibitionsFloor(floor)//階層ごとに分割したデータ、パラメーターの依存

    if(!data){
        return (
            <div>
                <div className="w-full h-52 flex items-center justify-center text-center">
                    データが読み込めませんでした。<br/>時間をおいて再度お試しください。
                </div>
            </div>
        )
    }


    return(

        
        <div className="flex py-10  bg-white">
            <div className={clsx(
                "transition-all  relative md:w-[74%] md:h-[74%] mx-[1%] w-[98%] h-[98%]",
                id == "999" ? "md:mx-[13%]" : ""
            )}>
                <div className=" border shadow-xl" id="map">
                    <div/>
                    <Map floor={floor}/>
                </div>
                {data.contents.map((content: any) => {

                    const x = areas[content.area].x.toString()
                    const y = areas[content.area].y.toString()

                    console.log(x, y)

                    return <div
                    key={content.id}
                    className={clsx(
                        "absolute transition-all",
                        id == content.id ? " scale-[180%] z-50" : " scale-100"
                    )}
                    style={{ top: `${y}%`, left: `${x}%`}}>
                        <Area content={content} index={data.contents.indexOf(content) + 1} id={id}/>
                    </div>
                })}
                {/* {areas.map((area) => {
                    const x = area.x.toString()
                    const y = area.y.toString()

                    return <div
                    key={areas.indexOf(area)}
                    className="absolute"
                    style={{ top: `${y}%`, left: `${x}%`}}
                    >
                        <Area content={{}} index={areas.indexOf(area)} id=""/>
                    </div>
                })} */}
            </div>
            <div className={clsx(
                id == "999" ? "w-0 mx-0 md:opacity-0" : "md:w-[24%]  md:px-[1%] hover:bg-gray-100 md:opacity-100 opacity-0 md:block hidden",
                "bg-white transition-all ",
            )}>
                {data.contents.map((content: any) => {
                    if(content.id == id){
                        return(
                            <Link href={`/exhibition/${id}`} className="shadow-[-14px_15px_8px_-7px_#ababab] relative h-full" key={content.id}>
                                <Image
                                src={content.image.url}
                                alt=""
                                width={500}
                                height={500}
                                unoptimized={true}
                                className="w-[96%] m-[2%]"
                                />
                                <div>
                                    {`${content.floor}F-${content.place} | ${content.exhibitionName}`}
                                </div>
                                <div>
                                    {content.title}
                                </div>
                                <div>
                                    {content.shortBody}
                                </div>
                            </Link>
                        )
                    }else{
                        return(
                            <div key={content.id}></div>
                        )
                    }
                } )}
            </div>
        </div>
    )
}
