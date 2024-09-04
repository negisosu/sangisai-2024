import { MyH2 } from "../myH2";
import { MyP } from "../myP";
import pamphletH2Image from "@/app/image/visitor/pamphlet.png"



export function Pamphlet(){
    return(
        <div>
            <MyH2 small="" large="パンフレット" image={pamphletH2Image} image2={""}/>
            <MyP body="以下の表紙をクリックすると電子版パンフレットをご覧いただけます。"/>
            <PamphletComingSoon/>
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