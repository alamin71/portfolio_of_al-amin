"use client";
import React, { useState } from "react";
import { Description } from "@radix-ui/react-dialog";
import { easeIn, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import WorksliderBtn from "@/components/WorksliderBtn";

const projects = [
  {
    num: "01",
    category: "MERN Stack",
    title: "Book-store-website",
    Description:
      "Online bookstore with diverse genres, easy navigation, cash on delivery, and fast shipping.",
    stack: [
      { name: "Html5" },
      { name: "Tailwind" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Redux" },
      { name: "ExpressJS" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/bookstore-web.png",
    live: "https://book-store-two-lime.vercel.app/",
    githubFrontend: "https://github.com/alamin71/book-store",
    githubBackend: "https://github.com/alamin71/book-app-backend",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Software-company-website",
    Description:
      "Enhancing Collaborative relationships between world of Education and Business.",
    stack: [
      { name: "Html 5" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Daisyui" },
    ],
    image: "/assets/work/mediusware.png",
    live: "https://late-water.surge.sh/",
    githubFrontend: "https://github.com/alaminwbsoft/zilaschool",
    githubBackend: "https://github.com/alamin71/book-store",
  },
];

const FullStackProject = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currenIndex = swiper.activeIndex;
    //update project state based on current slide index
    setProject(projects[currenIndex]);
  };
  return (
    <div>
      <div className="text-center">
        <p>Some of My Recent MERN Stack Project</p>
        <h1 className="text-4xl text-accent underline underline-offset-8">
          MERN Stack Projects
        </h1>
      </div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h[88vh] flex flex-col justify-center py-12 xl:px-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:gap-[30px] xl:flex-row xl:gap-[30px]">
            <div className="w-full lg:w-[50%] lg:h-[460px] xl:w-[50%] xl:h[460px] flex flex-col xl:justify-between order-2 xl:order-none lg:justify-between lg:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                {/* outline number */}
                <div
                  className="text-6xl leading-none font-extrabold
                         text-outline"
                >
                  {project.num}
                </div>
                {/* project category */}
                <div>
                  <h2
                    className="text-[42px] font-bold leading-none text-white
                           group-hover:text-accent-hover transition-all duration-500 capitalize
                           "
                  >
                    {project.category} project
                  </h2>
                  {/* project title */}
                  <p className="text-white/60 text-3xl">{project.title}</p>
                  {/* project description */}
                  <p className="text-white/60">{project.Description}</p>
                  {/* stack */}
                  <ul className="flex gap-4">
                    {project.stack.map((item, index) => {
                      return (
                        <li key={index} className="text-xl text-accent">
                          {item.name}
                          {/* remove the last coma of stack */}
                          {index !== project.stack.length - 1 && ","}
                        </li>
                      );
                    })}
                  </ul>
                  {/* border */}
                  <div className="border border-white/20 mb-4"></div>
                  {/* Button */}
                  <div className="flex items-center gap-4">
                    {/* project live btn */}
                    <Link href={project.live} passHref>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger
                            className="w-[60px] h-[60px] rounded-full
                                         bg-white/5 flex justify-center items-center group"
                          >
                            <BsArrowUpRight
                              className="text-white text-3xl
                                             group-hover:text-accent"
                            />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="bg-green-800 text-sm border p-1 rounded-md text-white">
                              Live project
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                    {/* live github btn */}
                    {/* Github Frontend btn */}
                    <Link href={project.githubFrontend} passHref>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger
                            className="w-[60px] h-[60px] rounded-full
                  bg-white/5 flex justify-center items-center group"
                          >
                            <BsGithub className="text-white text-3xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="bg-green-800 text-sm border rounded-lg p-1 text-white">
                              Github Frontend
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>

                    {/* Github Backend btn */}
                    <Link href={project.githubBackend} passHref>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger
                            className="w-[60px] h-[60px] rounded-full
                  bg-white/5 flex justify-center items-center group"
                          >
                            <BsGithub className="text-white text-3xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="bg-green-800 text-sm border p-1 rounded-lg text-white">
                              Github Backend
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%] lg:w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="lg:h-[520px] mb-2"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[260px] relative group flex justify-center items-center bg-pink-50/20">
                        {/* overlay */}
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                        {/* image */}
                        <div className="relative w-full h-full">
                          <Image
                            src={project.image}
                            fill
                            className="w-full h-full"
                            alt=""
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                {/* WorksliderBtn */}
                <WorksliderBtn
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-40 z-20 w-full justify-between lg:w-max
                        lg:justify-none"
                  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transtion-all"
                />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default FullStackProject;
