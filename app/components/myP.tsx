

export function MyP({ body } : { body: string}){
    return(
        <div className="flex items-center justify-center md:text-3xl text-base text-center">
            <p>
                {body}
            </p>
        </div>
    )
}