import { greetings } from "@/consts/const";
import { MyH2 } from "../myH2";
import { zen_kurenaido } from "@/fonts/fonts";
import Image, { StaticImageData } from "next/image";
import { ScrollAnimation } from "../scrollAnimation";


export function Greetings() {
    return(
        <div className="relative z-0">
            <div className=" absolute w-full">
                <MyH2 small="" large="ご挨拶" image={""} image2={""}/>
            </div>
            <div className="flex flex-col gap-10">
                {greetings.map((greeting) => {

                    return <ScrollAnimation  key={greetings.indexOf(greeting)}>
                        <div>
                            <GreetingImage image={greeting.image}/>
                            <Greeting greeting={greeting}/>
                        </div>
                    </ScrollAnimation>
                })}
            </div>
        </div>
    )
}

function Greeting ( { greeting }: {
    greeting: {
        title: string,
        body: string[],
        name: string,
        image: StaticImageData
}}){
    return(
        <div className="bg-white w-full">
            <div className="flex items-center justify-center md:p-14 p-3">
                <div className={`${zen_kurenaido.className} flex flex-col gap-10 md:text-3xl text-base`}>
                    <div>{greeting.title}</div>
                    {greeting.body.map((p) => {
                        return(
                            <p key={greeting.body.indexOf(p)}>
                                {p}
                            </p>
                        )
                    })}
                    <div className="text-sm md:text-3xl text-right">{greeting.name}</div>
                </div>
            </div>
        </div>
    )
}

function GreetingImage ({image} : {image: StaticImageData}) {
    return(
        <div className=" relative">
            <Image
            className="md:block hidden"
            src={image}
            width={200}
            height={200}
            alt=""/>
            <Image
            className="md:hidden block"
            src={image}
            width={100}
            height={100}
            alt=""
            />
        </div>
    )
}
