import { zen_kurenaido } from "@/fonts/fonts";
import Image, { StaticImageData } from "next/image";


export function MyH2({ small, large, image, image2 } : { small: string, large: string, image: StaticImageData | string, image2: StaticImageData | string }) {

    return(
        <div className="flex items-center justify-center my-10">
            <div className="flex">
                
                <MyH2Image image={image}/>
                <div className="text-center">
                    <div className={`${zen_kurenaido.className} md:text-lg text-sm`}>{small}</div>
                    <div className="md:text-5xl text-2xl">{large}</div>
                </div>
                <MyH2Image image={image2}/>
            </div>
        </div>
    )
}

function MyH2Image ({ image }: { image: StaticImageData | string }) {

    if(typeof image == "string"){
        return(
            <div>
                
            </div>
        )
    }

    return(
        <div>
            <Image
            className="md:block hidden"
            src={image}
            width={160}
            height={160}
            alt=""/>
            <Image
            className="md:hidden block"
            src={image}
            width={80}
            height={80}
            alt=""/>
        </div>
    )
}