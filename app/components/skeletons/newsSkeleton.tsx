

export function NewsSkeleton() {
    return(
        <div className="flex flex-col items-center justify-center md:py-20 py-10">
            {
                [...Array(6)].map((i) => {
                    return(
                        <div key={i} className="flex md:h-16 h-12 w-[80%] border-b-2 bg-gray-50">
                            <div className="w-1/3 h-full md:py-4 py-3 md:px-10 px-2">
                                <div className="w-full h-full bg-gray-200 rounded-sm"></div>
                            </div>
                            <div className="w-2/3 h-full md:py-4 py-3 md:px-2 px-1">
                                <div className="w-full h-full bg-gray-200 rounded-sm"></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export function NewsSkeletonPage() {
    return(
        <div className="flex flex-col items-center justify-center md:py-20 py-10">
            {
                [...Array(10)].map((i) => {
                    return(
                        <div key={i} className="flex md:h-16 h-12 w-[80%] border-b-2 bg-gray-50">
                            <div className="w-1/3 h-full md:py-4 py-3 md:px-10 px-2">
                                <div className="w-full h-full bg-gray-200 rounded-sm"></div>
                            </div>
                            <div className="w-2/3 h-full md:py-4 py-3 md:px-2 px-1">
                                <div className="w-full h-full bg-gray-200 rounded-sm"></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}