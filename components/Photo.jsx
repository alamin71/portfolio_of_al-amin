"use client";

import { motion } from "framer-motion";
import Image from "next/image";
const Photo = () => {
    return <div className="w-full h-full relative">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2, duration: 0.2, ease: "easeIn" },
            }}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2.4, duration: 0.2, ease: "easeInOut" },
                }}


                className="w-[298px] h-[298px] lg:w-[398px] lg:h-[398px] mix-blend-lighten">
                <Image src="/Al-Amin__web_.png" priority quality={100} fill alt="" className="object-contain"></Image>
            </motion.div>
        </motion.div>

    </div>;

};

export default Photo;