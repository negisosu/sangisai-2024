import { Header } from "../components/header";
import { PageContents } from "../components/pageContents";
import { PageMain } from "../components/pageMain";
import { Stage } from "../components/Stage";
import { Tour } from "../components/tour/tour";

export default function Page() {
    return(
        <div>
            <PageMain title="企画・ツアー"/>
            <Header/>
            <PageContents>
                <Stage/>
                <Tour/>
            </PageContents>
        </div>
    )
}