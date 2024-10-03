import Image from "next/image";
import { MyH2 } from "../../myH2";

export function Menu({ content } : { content: any}) {
    return(
        <div>
            <MyH2 small="" large="MENU" image={""} image2={""}/>
            <div className="flex items-center justify-center md:p-10 p-4">
                <Image
                src={`${content.image.url}?width=${content.image.width}&height=${content.image.height}`}
                width={content.image.width}
                height={content.image.height}
                alt=""
                className=""
                />
            </div>
    </div>
    )
}