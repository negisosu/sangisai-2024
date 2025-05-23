import { zen_kurenaido } from "@/fonts/fonts";
import { Background } from "./components/background";

export default function Loading() {
    return(
        <div>
            <Background/>
            <div className={`${zen_kurenaido.className} w-full h-screen md:text-6xl text-3xl flex items-center justify-center`}>
                Now Loading...
            </div>
        </div>
    )
}