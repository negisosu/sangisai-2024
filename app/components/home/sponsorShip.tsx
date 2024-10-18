import { sponsor } from "@/consts/const";
import { MyH2 } from "../myH2";
import Image from "next/image";
import { m_plus_rounded_1c_500, m_plus_rounded_1c_700, zen_kurenaido } from "@/fonts/fonts";
import { ScrollAnimation } from "../scrollAnimation";

export function SponsorShip() {
    return(
        <div className="w-full">
            <MyH2 small="" large="協賛" image={""} image2={""}/>
            <ScrollAnimation>
            <div className="bg-white w-full ">
                {
                    sponsor.map((company) => {
                        return(
                            <div key={sponsor.indexOf(company)} className={`${m_plus_rounded_1c_500.className} flex md:p-4 p-1`}>
                                <div className="w-1/2 flex items-center justify-center md:text-2xl text-xs">{company.title}</div>
                                <Image
                                className="w-1/2"
                                src={company.image}
                                alt=""
                                width={1000}
                                height={1000}
                                />
                            </div>
                        )
                    })
                }
            </div>
            </ScrollAnimation>
        </div>
    )
}