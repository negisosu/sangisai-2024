"use client"

import { ReactNode } from "react";
import { easeOut, motion } from "framer-motion"

export function ScrollAnimation({ children }: { children: ReactNode}){
    return(
        <motion.div
        initial={{opacity: 0, y: 200}}
        whileInView={{opacity: 1, y:0}}
        viewport={{ once: true , margin: "-120px"}}
        transition={{ ease: easeOut ,duration: 0.3}}
        >
            {children}
        </motion.div>
    )
}