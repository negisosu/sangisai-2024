import { PCHeader } from "./pcHeader"
import { SPHeader } from "./spHeader"

export function Header() {
    return(
        <div>
            <div className="md:block hidden">
                <PCHeader/>
            </div>
            <div className="md:hidden block">
                <SPHeader/>
            </div>
        </div>
    )
}

