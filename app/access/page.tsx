import { Header } from "../components/header";
import { SNSIcons } from "../components/snsIcons";
import { PageContents } from "../components/pageContents";
import { PageMain } from "../components/pageMain";
import { PageComingSoon } from "../components/PageComingSoon";
import { Access } from "../components/access/access";

export default function Page() {
    return(
        <div>
            <SNSIcons/>
            <PageMain title="アクセス"/>
            <Header/>
            <PageContents>
                <Access/>
            </PageContents>
        </div>
    )
}