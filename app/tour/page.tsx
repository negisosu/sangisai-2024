import { Header } from "../components/header";
import { PageContents } from "../components/pageContents";
import { PageMain } from "../components/pageMain";
import { SNSIcons } from "../components/snsIcons";
import { Stage } from "../components/Stage";
import { Tour } from "../components/tour/tour";

export default function Page() {
    return(
        <div>
            <SNSIcons/>
            <PageMain title="企画・ツアー"/>
            <Header/>
            <PageContents>
                <Stage/>
                <Tour/>
            </PageContents>
        </div>
    )
}