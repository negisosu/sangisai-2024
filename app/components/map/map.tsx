import Image from "next/image"
import Map1FImage from "@/app/image/map/1F.png"
import Map2FImage from "@/app/image/map/2F.png"
import Map3FImage from "@/app/image/map/3F.png"
import Map46FImage from "@/app/image/map/4~6F.png"
import Map7FImage from "@/app/image/map/7F.png"



export function Map({ floor }: { floor: string}) {

    switch(floor){
        case "1":
            return(
                <Image
                src={Map1FImage}
                width={1500}
                height={1500}
                alt=""
                />
            )
        case "2":
            return(
                <Image
                src={Map2FImage}
                width={1500}
                height={1500}
                alt=""
                />
            )
        case "3":
            return(
                <Image
                src={Map3FImage}
                width={1500}
                height={1500}
                alt=""
                />
            )

        case "4":
            return(
                <Image
                src={Map46FImage}
                width={1500}
                height={1500}
                alt=""
                />
            )
        case "5":
            return(
                <Image
                src={Map46FImage}
                width={1500}
                height={1500}
                alt=""
                />
            )
        case "6":
            return(
                <Image
                src={Map46FImage}
                width={1500}
                height={1500}
                alt=""
                />
            )
        case "7":
            return(
                <Image
                src={Map7FImage}
                width={1500}
                height={1500}
                alt=""
                />
            )
    }
}