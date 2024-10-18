import { SNSIcons } from "./components/snsIcons";
import { MainTitle } from "./components/home/mainTitle";
import { Header } from "./components/header";
import { About } from "./components/home/about";
import { PageContents } from "./components/pageContents";
import { News } from "./components/home/news";
import { Greetings } from "./components/home/greetings";
import { MyH2 } from "./components/myH2";
import { Suspense } from "react";
import { Stage } from "./components/Stage";
import { SponsorShip } from "./components/home/sponsorShip";


export default async function Home() {

  return (
    <main>
      <SNSIcons/>
      <MainTitle/>
      <Header/>
      <Suspense>
        <PageContents>
          <About/>
          <News/>
          <Greetings/>
          <SponsorShip/>
        </PageContents>
      </Suspense>
    </main>
  );
}
