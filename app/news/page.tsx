import { getNews } from "@/lib/action";
import { Header } from "../components/header";
import { MyH2 } from "../components/myH2";
import { PageContents } from "../components/pageContents";
import { PageMain } from "../components/pageMain";
import { Newss } from "../components/home/news";
import { HomeButton } from "../components/homeButton";

export default async function Page() {

    const data = await getNews()

    return(
        <div>
            <HomeButton/>
            <Header/>
                <MyH2 small="" large="NEWS" image={""} image2={""}/>
                <div className="bg-white md:mx-20 mx-6 md:mb-16 md:mt-8 my-8">
                    <Newss data={data}/>
                </div>
        </div>
    )
}