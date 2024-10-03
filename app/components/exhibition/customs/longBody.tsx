import { zen_kurenaido } from "@/fonts/fonts";
import clsx from "clsx";

export function LongBody({ content }: { content : any}) {
    return(
        <div>
        <div
        className={
            clsx(
            `${zen_kurenaido.className}`,
            "md:block hidden",
            "py-10 px-12",
            "text-xl [&_h5]:text-sm [&_h4]:text-lg [&_h3]:text-2xl [&_h2]:text-3xl [&_h1]:text-4xl",
            "leading-10 [&_h5]:my-1 [&_h4]:my-3 [&_h3]:my-5 [&_h2]:my-7 [&_h1]:my-9",
            "[&_a]:text-purple-500 [&_a]:underline",
            "[&_img]:w-[90%] [&_img]:h-auto [&_img]:md:my-6 [&_img]:my-3 [&_img]:mx-[5%]"
        )
        }
        dangerouslySetInnerHTML={{
            __html: content.body
        }}/>
        <div
        className={
            clsx(
            `${zen_kurenaido.className}`,
            "md:hidden block",
            "py-5 px-6",
            "text-sm [&_h5]:text-xs [&_h4]:text-sm [&_h3]:text-lg [&_h2]:text-xl [&_h1]:text-2xl",
            "[&_h5]:font-extrabold [&_h4]:font-extrabold [&_h3]:font-extrabold [&_h2]:font-extrabold [&_h1]:font-extrabold",
            "leading-8 [&_h5]:my-1 [&_h4]:my-1 [&_h3]:my-3 [&_h2]:my-5 [&_h1]:my-7",
            "[&_a]:text-purple-500 [&_a]:underline"
        )
        }
        dangerouslySetInnerHTML={{
            __html: content.body
        }}/>
    </div>
    )
}