import { getNews } from "@/lib/action";
import { Header } from "../components/header";
import { MyH2 } from "../components/myH2";
import { PageContents } from "../components/pageContents";
import { PageMain } from "../components/pageMain";
import { Newss, NewssPage } from "../components/home/news";
import { HomeButton } from "../components/homeButton";
import { Suspense } from "react";
import { NewsSkeletonPage } from "../components/skeletons/newsSkeleton";
import { ScrollAnimation } from "../components/scrollAnimation";

export default async function Page() {

    return(
        <div>
            <HomeButton/>
            <Header/>
                <MyH2 small="" large="NEWS" image={""} image2={""}/>
                <ScrollAnimation>
                <div className="bg-white md:mx-20 mx-6 md:mb-16 md:mt-8 my-8">
                    <Suspense fallback={<NewsSkeletonPage/>}>
                        <NewssPage/>
                    </Suspense>
                </div>
                </ScrollAnimation>
        </div>
    )
}