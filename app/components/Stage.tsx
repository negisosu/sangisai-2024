import { getStages } from "@/lib/action";
import { MyH2 } from "./myH2";
import { ScrollAnimation } from "./scrollAnimation";
import Link from "next/link";
import { zen_kurenaido } from "@/fonts/fonts";

export async function Stage() {

    const dataDayOne = await getStages(1);
    const dataDayTwo = await getStages(2);

    return(
        <div className="w-full">
            <MyH2 small="" large="ステージ企画" image={""} image2={""}/>
            <ScrollAnimation>
                <div className="w-full bg-white">
                    <div className={`${zen_kurenaido.className} md:flex`}>
                    <Timetable data={dataDayOne}/>
                    <Timetable data={dataDayTwo}/>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    )
}

function Timetable ({data}: { data: any}) {
    return(
        <div className="md:w-1/2 w-full pb-10 pt-6">
            <div className="text-4xl text-center my-6">
                {`${data.contents[0].date}日目`}
            </div>
            <div className="text-2xl text-center my-3">
                {`10月${data.contents[0].date + 25}日`}
            </div>
            <div>
                {
                    data.contents.map((content: any) => {

                        return(
                            <div key={content.id} className=" flex my-4 text-lg">
                                <div className="md:mx-14 mx-4">
                                    {`${content.start}~${content.end}`}
                                </div>
                                <div className=" underline  text-center">
                                    {
                                        content.content ?
                                        <Link href={`/exhibition/${content.content.id}`} className="text-blue-500">
                                            {content.title}
                                        </Link>
                                        :
                                        <div>
                                            {content.title}
                                        </div>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}