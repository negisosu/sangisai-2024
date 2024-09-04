import { MyH2 } from "../myH2";
import { PageContentsComingSoon } from "../pageContentsComingSoon";

export function Samezu() {
    return(
        <div>
            <MyH2 small="" large="ラウンジSamezu" image={""} image2={""}/>
            <div className="bg-white w-full">
            <PageContentsComingSoon/>
            </div>
        </div>
    )
}