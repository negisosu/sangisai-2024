
import accessImage from "@/app/image/access/accessImage.png"
import Image from "next/image"

export function Access() {
    return(
        <div>
            <div className="md:flex w-full">
                <AccessMap/>
                <Guide/>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103803.40694776972!2d139.61678226249998!3d35.60660699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188a75945ef685%3A0xfa6c51618d6f5d49!2z5p2x5Lqs6YO956uL55Sj5qWt5oqA6KGT6auY562J5bCC6ZaA5a2m5qChIOWTgeW3neOCreODo-ODs-ODkeOCuS1Ub2t5byBNZXRyb3BvbGl0YW4gQ29sbGVnZSBvZiBJbmR1c3RyaWFsIFRlY2hub2xvZ3kgU2hpbmFnYXdhIGNhbXB1cy0!5e0!3m2!1sja!2sjp!4v1726805481368!5m2!1sja!2sjp" className="w-full h-[600px]" loading="lazy"></iframe>
        </div>
    )
}

function AccessMap() {
    return(
        <div className="md:w-1/2 w-full md:my-10">
            <Image
            src={accessImage}
            alt=""
            className="w-[90%] h-auto"
            />
            <div className="md:text-lg text-xs md:m-4 m-2">
            140-0011<br/>
            東京都品川区東大井1-10-40<br/>
            TEL: 03-3471-6331（代表）<br/>
            FAX: 03-3471-6338
            </div>
        </div>
    )
}

function Guide () {
    return(
        <div className="flex-col md:w-1/2 w-full md:text-2xl text-lg md:px-10 px-2">
            <div className="md:my-10 my-4">
                <p className=" underline">＜京浜急行電鉄＞</p>
                <p>
                鮫洲駅　徒歩 9分<br/>
                青物横丁駅　徒歩10分
                </p>
            </div>
            <div className="md:my-10 my-4">
                <p className=" underline">＜りんかい線＞</p>
                <p>
                品川シーサイド駅　B出口から徒歩3分
                </p>
            </div>
            <div className="md:my-10 my-4">
                <p className=" underline">＜都営バス＞</p>
                <p>
                都立産業技術高専品川キャンパス前下車<br/>
                徒歩2分<br/>
                ・品川駅東口⇔八潮パークタウン<br/>
                （品91系統）<br/>
                ・品川駅西口⇔大井競馬場<br/>
                （品93系統）<br/>
                ・大井町駅東口⇔八潮パークタウン<br/>
                （井92系統）
                </p>
            </div>
        </div>
    )
}