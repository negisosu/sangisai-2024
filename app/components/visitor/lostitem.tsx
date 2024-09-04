import { MyH2 } from "../myH2";
import { PageContentsComingSoon } from "../pageContentsComingSoon";


export function LostItem() {
    return(
        <div>
            <MyH2 small="" large="落とし物情報" image={""} image2={""}/>
            <div className="bg-white w-full">
            <PageContentsComingSoon/>
            </div>
        </div>
    )
}