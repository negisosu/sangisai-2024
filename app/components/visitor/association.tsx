import { MyH2 } from "../myH2";
import { PageContentsComingSoon } from "../pageContentsComingSoon";


export function Association() {
    return(
        <div>
            <MyH2 small="" large="学校説明会のご案内" image={""} image2={""}/>
            <div className="bg-white w-full">
                <PageContentsComingSoon/>
            </div>
        </div>
    )
}