import { Exhibitions, LoadingExhibitions } from "../components/exhibition/exhibitions";
import { SNSIcons } from "../components/snsIcons";
import { PageMain } from "../components/pageMain";
import { Header } from "../components/header";
import { Suspense } from "react";

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

    return(
        <div>
            <SNSIcons/>
            <PageMain title="出店情報"/>
            <Header/>
            <Suspense fallback={<LoadingExhibitions/>}>
            <Exhibitions query={query} tag={tag}/>
            </Suspense>
        </div>
    )
}