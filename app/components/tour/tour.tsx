import { MyH2 } from "../myH2";
import { PageContentsComingSoon } from "../pageContentsComingSoon";
import { ScrollAnimation } from "../scrollAnimation";

export function Tour() {
    return(
        <div className="mb-96">
            <MyH2 small="" large="ツアースケジュール" image={""} image2={""}/>
            <ScrollAnimation>
            <div className="bg-white">
                <PageContentsComingSoon/>
            </div>
            </ScrollAnimation>
        </div>
    )
}