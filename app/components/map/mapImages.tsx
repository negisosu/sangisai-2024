import { mapImages } from "@/consts/const";
import Image from "next/image";

export function MapImages({ floor } : { floor : string}) {
    return(
        <div className="w-full flex items-center justify-center md:my-10 my-6">
            <Image
            src={mapImages[Number(floor) - 1]}
            alt=""
            width={1000}
            height={1000}
            className="md:w-[80%] w-[94%] border md:shadow-xl shadow-lg  rounded-lg"
            />
        </div>
    )
}