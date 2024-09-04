import { MyH2 } from "../myH2";
import specialH2Image from "@/app/image/visitor/specialH2.png"
import { PageContentsComingSoon } from "../pageContentsComingSoon";

export function Special(){
    return(
        <div>
            <MyH2 small="" large="ご来場特典" image={""} image2={""}/>
            <div className="bg-white w-full">
            <PageContentsComingSoon/>
            </div>
        </div>
    )
}