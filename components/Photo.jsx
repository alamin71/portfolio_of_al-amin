"use client";

import { motion } from "framer-motion";
import Image from "next/image";
const Photo = () => {
    return <div className="w-full h-full relative">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 1, duration: 0.1, ease: "easeIn" },
            }}
        >
            {/*image  */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2, duration: 0.2, ease: "easeInOut" },
                }}

                className="w-[415px] h-[415px] xl:w-[510px] xl:h-[510px] mix-blend-lighten absolute">
                <Image src="/Al-Amin__web_.png" priority quality={100} fill alt="" className="object-contain"></Image>
            </motion.div>
            {/* circle */}
            <motion.svg className="w-[415px] xl:w-[500px] h-[415px] xl:h-[500px]"
             fill="transparent"
             viewBox="0 0 412 412"
             xmlns="http://www.w3.org/2000/svg"
             >
                <motion.circle
                cx="202"
                cy="210"
                r="200"
                stroke="#00ff99"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{strokeDasharray: "24 10 0 0"}}
                animate={{
                    strokeDasharray:["15 120 25 25","16 25 72 92","4 250 22 22"],
                    rotate:[120, 360],
                }}
                    transition={{
                        duration:20,
                        repeat: Infinity,
                        repeatTime:"reverse"

                    }}

                />

            </motion.svg>
        </motion.div>

    </div>;

};

export default Photo;