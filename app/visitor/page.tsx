import { Header } from "../components/header";
import { SNSIcons } from "../components/snsIcons";
import { PageContents } from "../components/pageContents";
import { PageMain } from "../components/pageMain";
import { Attention } from "../components/visitor/attention";
import { LostItem } from "../components/visitor/lostitem";
import { Pamphlet } from "../components/visitor/pamphlet";
import { Special } from "../components/visitor/special";
import { Association } from "../components/visitor/association";
import { Samezu } from "../components/visitor/samezu";
import { Message } from "../components/visitor/message";
import { Stage } from "../components/Stage";


export default function Page(){
    return(
        <div>
            <SNSIcons/>
            <PageMain title="ご来場の皆様へ"/>
            <Header/>
            <PageContents>
                <Attention/>
                {/* <Stage/> */}
                <Pamphlet/>
                {/* <LostItem/>
                <Special/>
                <Association/>
                <Samezu/>
                <Message/> */}
            </PageContents>
        </div>
    )
}