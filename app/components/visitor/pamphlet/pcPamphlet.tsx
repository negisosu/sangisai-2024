import { pcPamphletImages } from "@/consts/const"
import Image from "next/image"

export function PcPamphlet({ page } : { page: string}) {

    console.log(page)

    return(
        <div className="md:block hidden w-full">
            <Image
            src={pcPamphletImages[Number(page) - 1]}
            alt=""
            width={1000}
            height={1000}
            className="w-full h-auto"
            />
        </div>
    )
}