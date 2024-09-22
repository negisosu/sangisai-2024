import { getExhibitions } from "@/lib/action";
import { Exhibitions } from "../components/exhibition/exhibitions";
import { SNSIcons } from "../components/snsIcons";
import { PageMain } from "../components/pageMain";
import { Header } from "../components/header";
import { PageComingSoon } from "../components/PageComingSoon";

export default async function Page(
    { searchParams } : {//URLのパラメーターを読める固定の名前（searchParams）
        searchParams : {
            query : string,
            tag : string
        }
    }
    ){

    //パラメーターのqueryとtag（ないときは勝手に空文字列にする）
    const query = searchParams.query || ""
    const tag = searchParams.tag || ""

    //企画・出展の全取得、query,tagがあるときは検索や絞り込みされる
    const data = await getExhibitions(query, tag) || "None";

    //console
    console.log(data)
    console.log("----------------------------------------------------")
    console.log("query:",query)
    console.log("tag:",tag)
    data?.contents?.map((content:any) => {
        console.log(content.title,"tag:",content.tag)
    })
    console.log("----------------------------------------------------")
    if(data == "None"){
        console.log("None")
    }
    //console

    return(
        <div>
            <SNSIcons/>
            <PageMain title="企画紹介"/>
            <Header/>
            <Exhibitions data={data}/>
        </div>
    )
}