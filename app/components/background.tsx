import Image from "next/image";
import MainImage from "@/app/image/産技祭メインビジュアル.jpg"
import MainImagePc from '@/app/image/産技祭メインビジュアルpc.jpg'

export function Background() {
    return(
        <div className=" fixed top-0 left-0  w-full h-full -z-50 flex">
        <Image
        src={MainImage}
        alt=""
        width={430}
        height={900}
        className=" object-cover w-full h-full opacity-50 md:hidden"
        />
        <Image
        src={MainImage}
        alt=""
        width={1200}
        height={1400}
        className=" object-top object-cover w-full h-full opacity-50 md:block hidden"
        />
      </div>
    )
}