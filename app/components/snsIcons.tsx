import { snsIcons } from "@/consts/const";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export function SNSIcons() {
    return(
        <div className="flex">
            {
                snsIcons.map((snsicon) => {
                    return <div key={snsicon.url}>
                        <Link
                        href={snsicon.url}
                        >
                            <Image
                            src={snsicon.icon}
                            alt=""
                            width={60}
                            height={60}
                            />
                        </Link>
                        </div>
                })
            }
        </div>
    )
}
