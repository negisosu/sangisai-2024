import { SNSIcons } from "./components/snsIcons";
import { MainTitle } from "./components/home/mainTitle";
import { Header } from "./components/header";
import { About } from "./components/home/about";
import { PageContents } from "./components/pageContents";
import { News } from "./components/home/news";
import { Greetings } from "./components/home/greetings";
import { MyH2 } from "./components/myH2";


export default async function Home() {

  return (
    <main>
      <SNSIcons/>
      <MainTitle/>
      <Header/>
      <PageContents>
        <About/>
        <News/>
        <Greetings/>
      </PageContents>
    </main>
  );
}
