import { MyH2 } from "../myH2"
import attentionH2Image from "@/app/image/visitor/attentionH2.png"
import { PageContentsComingSoon } from "../pageContentsComingSoon"
import { zen_kurenaido } from "@/fonts/fonts"
import Image from "next/image"
import StaffFront from "@/app/image/visitor/staffFront.png"
import StaffBack from "@/app/image/visitor/staffBack.png"
import { ScrollAnimation } from "../scrollAnimation"

export function Attention() {
    return(
        <div>
            <MyH2 small="" large="お願い" image={""} image2={""}/>
            <ScrollAnimation>
            <div className="bg-white w-full">
            <div className={`${zen_kurenaido.className} md:p-10 p-5 md:text-xl text-sm`}>
                <p className="">来校の皆様に快適にお過ごしいただけるように、以下の点にご協力いただきますようお願いいたします。</p>
                <ul className="md:my-5 my-3">
                    <li>・学校に駐車場はございません。路上駐車などもお控えください。</li>
                    <li>・学校や敷地内での飲酒・喫煙は固くお断りいたします。</li>
                    <li>・校内や敷地内での飲食は周囲にお気遣いください。</li>
                    <li>・危険物の持ち込みは禁止です。</li>
                    <li>・ペットなどの動物や、植物の持ち込みはご遠慮ください。<br/>
                    （ただし、盲導犬をはじめとする介助犬などを伴ってのご来校は可能とさせていただきます。）
                    </li>
                </ul>
                <div className="md:flex">
                    <p className="md:w-1/2 my-4 p-4 text-center">何かわからないことがございましたら、運営用Tシャツを着ている産技祭実行委員会　運営スタッフにお尋ねください。</p>
                    <div className="flex md:w-1/2 my-4 items-center justify-center gap-4">
                        <Image
                        src={StaffFront}
                        width={140}
                        height={140}
                        alt=""
                        unoptimized={true}
                        />
                        <Image
                        src={StaffBack}
                        width={140}
                        height={140}
                        alt=""
                        unoptimized={true}
                        />
                    </div>
                </div>
            </div>
            </div>
            </ScrollAnimation>
        </div>
    )
}