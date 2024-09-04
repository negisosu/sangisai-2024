import Link from "next/link"

export function Exhibitions({ data }: { data: any }) {
    return(
        <div>
            {data?.contents.map((content: any) => {
            return <div key={content.title}>
                <Link href={`/exhibition/${content.id}`}>
                {content.title}
                </Link>
            </div>
            })}
        </div>
    )
}