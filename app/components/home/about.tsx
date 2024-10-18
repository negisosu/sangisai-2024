import Image from "next/image";
import { MyH3 } from "../myH3";
import aboutImage from "@/app/image/home/aboutImage.png"
import { abouts } from "@/consts/const";
import { zen_kurenaido } from "@/fonts/fonts";
import { ScrollAnimation } from "../scrollAnimation";

export function About() {
    return(
        <ScrollAnimation>
        <div className="bg-white w-full">
            <AboutImage/>
            <MyH3 small="アバウト" large="about"/>
            <AboutBody/>
        </div>
        </ScrollAnimation>
    )
}

function AboutImage() {
    return(
        <div className=" absolute">
        <Image
        className="md:block hidden"
        src={aboutImage}
        width={230}
        height={230}
        alt=""
        unoptimized
        />
        <Image
        className="md:hidden block"
        src={aboutImage}
        width={100}
        height={100}
        alt=""
        unoptimized
        />
    </div>
    )
}

function AboutBody() {
    return(
        <div className="flex items-center justify-center md:my-20 my-10 md:mx-10 mx-5">
        <div className={`${zen_kurenaido.className} flex flex-col md:gap-14 gap-7 md:mb-16 mb-8`}>
            {
                abouts.map((about) => {
                    return(
                        <div key={abouts.indexOf(about)} className="flex md:text-3xl text-xl md:gap-20 gap-5">
                            <div className="w-32">{about.title}</div>
                            <div>{about.body}</div>
                        </div>
                    )
                })
            }
        <div className="md:text-3xl text-xl">入場料無料/予約不要</div>
        <div className="md:text-2xl text-lg">※ 駐車場はありません。公共交通機関を使ってご来場ください。</div>
        </div>
    </div>
    )
}