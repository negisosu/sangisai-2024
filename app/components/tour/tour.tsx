import { tourLaboratory1, tourLaboratory2, tourScheduleAM, tourSchedulePM } from "@/consts/const";
import { MyH2 } from "../myH2";
import { PageContentsComingSoon } from "../pageContentsComingSoon";
import { ScrollAnimation } from "../scrollAnimation";
import { zen_kurenaido } from "@/fonts/fonts";
import { MyH3 } from "../myH3";

export function Tour() {
    return(
        <div className="mb-96">
            <MyH2 small="" large="ツアースケジュール" image={""} image2={""}/>
            <ScrollAnimation>
            <div className="bg-white w-full">
                <div>
                    <div className="text-lg md:text-xl text-center p-10">
                        中学生向けの校内ツアーです。午前の会は11：40、午後の会は13：40分に3F西棟の情報センター講義室にお越しください。
                    </div>
                    <div className="md:grid md:grid-cols-2 w-full">
                        <div  className="md:p-8 p-4">
                            <div className="w-full text-center md:text-4xl text-3xl md:py-8 py-4">AM</div>
                            <TourTimeSchedule Schedule={tourScheduleAM}/>
                        </div>
                        <div  className="md:p-8 p-4">
                            <div  className="w-full text-center md:text-4xl text-3xl md:py-8 py-4">PM</div>
                            <TourTimeSchedule Schedule={tourSchedulePM}/>
                        </div>
                    </div>
                </div>
                <div>
                    <MyH3 small="" large="研究室ツアー"/>
                    <div className="md:grid md:grid-cols-2 w-full">
                        <div className="md:p-8 p-4">
                            <div className="text-4xl text-center my-6">
                                1日目
                            </div>
                            <div className="text-2xl text-center my-3">
                                10月26日
                            </div>
                            <TourLaboratory Laboratory={tourLaboratory1}/>
                        </div>
                        <div className="md:p-8 p-4">
                            <div className="text-4xl text-center my-6">
                                2日目
                            </div>
                            <div className="text-2xl text-center my-3">
                                10月27日
                            </div>
                            <TourLaboratory Laboratory={tourLaboratory2}/>
                        </div>
                    </div>
                </div>
            </div>
            </ScrollAnimation>
        </div>
    )
}

function TourTimeSchedule({ Schedule }: { Schedule : { time: string, title: string}[]}) {
    return(
        <div>
            {Schedule.map((Sche) => {
                return(
                    <div key={Schedule.indexOf(Sche)} className={`${zen_kurenaido.className} flex md:text-xl text-lg py-2`}>
                        <div className="w-2/5 px-2">{Sche.time}</div>
                        <div className="w-3/5">{Sche.title}</div>
                    </div>
                )
            })}
        </div>
    )
}

function TourLaboratory({Laboratory}: { Laboratory : { course: string, professor: string}[]}){
    return(
        <div>
            {Laboratory.map((Lab) => {
                return(
                    <div key={Laboratory.indexOf(Lab)}  className={`${zen_kurenaido.className} flex md:text-xl text-lg py-2`}>
                        <div className="w-3/5">{Lab.course}</div>
                        <div className="w-2/5">{Lab.professor}</div>
                    </div>
                )
            })}
        </div>
    )
}