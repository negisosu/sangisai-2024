import Image from "next/image";
import { MyH2 } from "../myH2";
import { MyP } from "../myP";
import pamphletH2Image from "@/app/image/visitor/pamphlet.png"
import MainImage from "@/app/image/産技祭メインビジュアル.jpg"
import { ScrollAnimation } from "../scrollAnimation";
import PamhletImage from "@/app/image/visitor/スクリーンショット 2024-10-25 9.56.01.png"
import Link from "next/link";



export function Pamphlet(){
    return(
        <div>
            <MyH2 small="" large="パンフレット" image={pamphletH2Image} image2={""}/>
            <ScrollAnimation>
            <MyP body="以下の表紙をクリックすると電子版パンフレットをご覧いただけます。"/>
            <PamphletComingSoon/>
            {/* <div className="flex items-center justify-center md:p-20 py-10">
                <Image
                src={MainImage}
                alt=""
                width={1000}
                height={1000}
                className=" md:w-[80%] w-full h-auto"
                />
            </div> */}
            </ScrollAnimation>
        </div>
    )
}

function PamphletComingSoon () {
    return(
        <div className="bg-white w-full md:my-10 my-5">
            <Link href={"/visitor/pamphlet"} className=" flex items-center justify-center hover:opacity-90">
            <Image
            src={PamhletImage}
            alt=""
            width={1000}
            height={1000}
            className="h-auto md:w-[70%] w-[80%] md:my-20 my-10"
            />
            </Link>
        </div>
    )
}