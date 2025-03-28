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
    category: "Frontend",
    title: "Blogs-website",
    Description:
      "Stay updated with the latest blogs on Bangladesh, International news, Sports, and Entertainment. Explore insightful articles on trending topics, expert opinions, and in-depth analyses—all in one place!",
    stack: [
      { name: "Html 5" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
      { name: "React" },
    ],
    image: "/assets/work/exclusive-blogImg.png",
    live: "https://exclusive-blog-site.vercel.app/",
    github: "https://github.com/alamin71/exclusive-blog-site",
  },
  {
    num: "02",
    category: "Frontend",
    title: "School-management-website",
    Description:
      "Comprehensive platform streamlining school operations, academic management, communication, and real-time collaboration.",
    stack: [
      { name: "Html 5" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Daisyui" },
    ],
    image: "/assets/work/schoolWeb.png",
    live: "https://tested-comb.surge.sh/",
    github: "https://github.com/alaminwbsoft/zilaschool",
  },
  {
    num: "03",
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
    github: "https://github.com/alamin71/Mediusware",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Creative-website",
    Description:
      "Enhancing Collaborative relationships between world of Education and Business.",
    stack: [
      { name: "Html 5" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Daisyui" },
    ],
    image: "/assets/work/Creative_Image.png.png",
    live: "https://spectacular-degree.surge.sh/",
    github: "https://github.com/alamin71/Creative-web_with-react",
  },
  {
    num: "05",
    category: "Frontend",
    title: "Gymnesium-website",
    Description:
      "A Gymnasium web platform is a digital solution that allows users to access gym services, class schedules, membership management, from any device.",
    stack: [
      { name: "Html 5" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
      { name: "React" },
    ],
    image: "/assets/work/Gymnesium.png",
    live: "https://goofy-middle.surge.sh/",
    github: "https://github.com/alamin71/client-project-with-react",
  },
  {
    num: "06",
    category: "Frontend",
    title: "donation-campaign",
    Description:
      "In this Donation Campaign website, an user can search by category name and can see and donate different category.",
    stack: [
      { name: "Html 5" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
      { name: "React" },
    ],
    image: "/assets/work/donation_camp.png",
    live: "https://quizzical-drug.surge.sh/",
    github: "https://github.com/alamin71/donation-campaign-website",
  },

  {
    num: "07",
    category: "frontend",
    title: "Daily New Portal",
    Description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magni facilis!",
    stack: [
      { name: "Html 5" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
      { name: "DaisyUI" },
      { name: "Firebase" },
    ],
    image: "/assets/work/dailynews.png",
    live: "https://daily-news-today-3d5a7.web.app/home",
    github: "https://github.com/alamin71/daily-news-today",
  },
];

const FrontendProject = () => {
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
        <p>Some of My Recent Frontend Project</p>
        <h1 className="text-4xl text-accent underline underline-offset-8">
          Frontend Project
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
                    <Link href={project.github} passHref>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger
                            className="w-[60px] h-[60px] rounded-full
                                         bg-white/5 flex justify-center items-center group"
                          >
                            <BsGithub
                              className="text-white text-3xl
                                             group-hover:text-accent"
                            />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="bg-green-800 text-sm border p-1 rounded-lg text-white">
                              Github Repository
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
                            className="w-full h-full "
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

export default FrontendProject;
