import { MyH2 } from "../myH2"
import attentionH2Image from "@/app/image/visitor/attentionH2.png"
import { PageContentsComingSoon } from "../pageContentsComingSoon"

export function Attention() {
    return(
        <div>
            <MyH2 small="" large="お願い" image={""} image2={""}/>
            <div className="bg-white w-full">
            <PageContentsComingSoon/>
            </div>
        </div>
    )
}