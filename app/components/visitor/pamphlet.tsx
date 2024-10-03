import Image from "next/image";
import { MyH2 } from "../myH2";
import { MyP } from "../myP";
import pamphletH2Image from "@/app/image/visitor/pamphlet.png"
import MainImage from "@/app/image/産技祭メインビジュアル.jpg"
import { ScrollAnimation } from "../scrollAnimation";



export function Pamphlet(){
    return(
        <div>
            <MyH2 small="" large="パンフレット" image={pamphletH2Image} image2={""}/>
            <ScrollAnimation>
            <MyP body="以下の表紙をクリックすると電子版パンフレットをご覧いただけます。"/>
            {/* <PamphletComingSoon/> */}
            <div className="flex items-center justify-center md:p-20 py-10">
                <Image
                src={MainImage}
                alt=""
                width={1000}
                height={1000}
                className=" md:w-[80%] w-full h-auto"
                />
            </div>
            </ScrollAnimation>
        </div>
    )
}

function PamphletComingSoon () {
    return(
        <div className="flex items-center justify-center">
            <div className="bg-white md:w-[60%] w-[80%] md:h-[800px] h-[350px] md:m-20 m-10 flex items-center justify-center">
                <div className="md:text-3xl text-xl">
                    Coming Soon...
                </div>
            </div>
        </div>
    )
}