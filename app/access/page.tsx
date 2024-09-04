import { Header } from "../components/header";
import { SNSIcons } from "../components/snsIcons";
import { PageContents } from "../components/pageContents";
import { PageMain } from "../components/pageMain";
import { PageComingSoon } from "../components/PageComingSoon";


export default function Page() {
    return(
        <div>
            <SNSIcons/>
            <PageMain title="交通アクセス"/>
            <Header/>
            <PageComingSoon/>
            {/* <PageContents>

            </PageContents> */}
        </div>
    )
}