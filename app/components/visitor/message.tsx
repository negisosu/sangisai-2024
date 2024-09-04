import { MyH2 } from "../myH2";
import messageH2Image from "@/app/image/visitor/messageH2.png"
import { PageContentsComingSoon } from "../pageContentsComingSoon";


export function Message() {
    return(
        <div>
            <MyH2 small="" large="寄せ書きエリアについてのお知らせ" image={messageH2Image} image2={""}/>
            <div className="bg-white w-full">
            <PageContentsComingSoon/>
            </div>
        </div>
    )
}