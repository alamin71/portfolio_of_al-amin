"use client";
import React, { useState } from 'react';
import { Description } from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { } from "@/components/ui/tooltip";
import Link from 'next/link';
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';

const projects = [
    {
        num: "01",
        category: "frontend",
        title: "project-1",
        Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magni facilis!",
        stack: [
            { name: "Html 5" }, { name: "CSS 3" }, { name: "JavaScript" }
        ],
        image: '/public/Assets/modern-technology.jpg',
        live: "",
        github: "",
    },
    {
        num: "02",
        category: "frontend",
        title: "project-2",
        Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magni facilis!",
        stack: [
            { name: "Html 5" }, { name: "Tailwind CSS" }, { name: "JavaScript" }
        ],
        image: '/public/Assets/communication-connection.jpg',
        live: "",
        github: "",
    },
    {
        num: "03",
        category: "frontend",
        title: "project-3",
        Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magni facilis!",
        stack: [
            { name: "Html 5" }, { name: "CSS 3" }, { name: "JavaScript" }
        ],
        image: '/public/Assets/modern-technology.jpg',
        live: "",
        github: "",
    },
]

const Work = () => {
    const [project, setProject] = useState(projects[0]);
    return <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='min-h[88vh] flex flex-col justify-center py-12 xl:px-0'>
        <div className="container mx-auto">
            <div className='flex flex-col lg:flex-row lg:gap-[30px] xl:flex-row xl:gap-[30px]'>
                <div className='w-full xl:w-[50%] xl:h[460px] flex flex-col xl:justify-between'>
                    <div className='flex flex-col gap-[30px] h-[50%]'>
                        {/* outline number */}
                        <div className="text-6xl leading-none font-extrabold
                         text-outline">
                            {project.num}
                        </div>
                        {/* project category */}
                        <div>
                            <h2 className='text-[42px] font-bold leading-none text-white
                           group-hover:text-accent-hover transition-all duration-500 capitalize
                           '>{project.category} project</h2>
                            {/* project description */}
                            <p className='text-white/60'>{project.Description}</p>
                            {/* stack */}
                            <ul className='flex gap-4'>
                                {project.stack.map((item, index) => {
                                    return <li key={index} className='text-xl text-accent'>
                                        {item.name}
                                        {/* remove the last coma of stack */}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>;
                                })}
                            </ul>
                            {/* border */}
                            <div className='border border-white/20 mb-4'></div>
                            {/* Button */}
                            <div className='flex items-center gap-4'>
                                {/* project live btn */}
                                <Link href="project.github">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[60px] h-[60px] rounded-full
                                         bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className='text-white text-3xl
                                             group-hover:text-accent'/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* live github btn */}
                                <Link href="project.github">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[60px] h-[60px] rounded-full
                                         bg-white/5 flex justify-center items-center group">
                                                <BsGithub className='text-white text-3xl
                                             group-hover:text-accent'/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github link</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                            </div>
                        </div>

                    </div>
                </div>
                <div className='w-full xl:w-[50%]'>
                    <Swiper>
                        {projects.map((project, index){
                            return <SwiperSlide key={index}>slide</SwiperSlide>
                        })}
                    </Swiper>;

                </div>
            </div>
        </div>
    </motion.section>;
};

export default Work;