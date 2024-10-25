import { Header } from "@/app/components/header";
import { HomeButton } from "@/app/components/homeButton";
import { Minus, Plus } from "@/app/components/visitor/pamphlet/panphletButton";
import { PcPamphlet } from "@/app/components/visitor/pamphlet/pcPamphlet";
import { SpPamphlet } from "@/app/components/visitor/pamphlet/spPamphlet";
import clsx from "clsx";

export default function Page({ searchParams }: {
    searchParams: {
        page: string
    }
}) {

    const page = searchParams.page || "1"
    
    return(
        <div>
            <HomeButton/>
            <Header/>
            <div className="flex relative md:m-0">
                <div className={clsx(
                    Number(page) <= 1 ? "hidden" : ""
                )}>
                    <Minus/>
                </div>
                <PcPamphlet page={page}/>
                <SpPamphlet page={page}/>
                <div className={clsx(
                    Number(page) >= 6 ? "md:hidden" : "",
                    Number(page) >= 12 ? "hidden" : ""
                )}>
                    <Plus/>
                </div>
            </div>
        </div>
    )
}