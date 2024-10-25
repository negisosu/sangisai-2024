import { spPamphletImages } from "@/consts/const";
import Image from "next/image";

export function SpPamphlet({ page }: { page: string}) {
    return(
        <div className="md:hidden block">
        <Image
        src={spPamphletImages[Number(page) - 1]}
        alt=""
        width={1000}
        height={1000}
        className="w-full"
        />
    </div>
    )
}