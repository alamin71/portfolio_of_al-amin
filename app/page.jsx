import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import TypingAnimation from "@/components/TypingAnimation/TypingAnimation";
// import Work from "./work/FullStackProject";
import Services from "./services/page";
import FrontendProject from "../components/WorkPages/FrontendProject";
import FullStackProject from "../components/WorkPages/FullStackProject";

// components

const Home = () => {
  return (
    <div>
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col lg:flex-row xl:flex-row items-center justify-between lg:pt-8 lg:pb-24 xl:pt-8 xl:pb-24 ">
            {/* Text */}
            <div className="text-center lg:text-left xl:text-left order-2 lg:order-none xl:order-none">
              <span className="text-xl">Software Developer</span>
              <h1 className="h1 mb-6">
                Hello I am <br />
                <span className="text-accent">Al-amin</span>
              </h1>
              <TypingAnimation />
              <p className="max-w-[500px] mb-9 text-white">
                I am exel at crafting elegant digital experiences and i am
                proficient in various programming language and technologies.
              </p>
              {/* button Social */}
              <div className="flex flex-col lg:flex-row xl:flex-row  items-center gap-8 ">
                <a
                  rel="noopener noreferrer"
                  href="Resume_Al-Amin.pdf"
                  download="Resume_Al-Amin.pdf"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="uppercase rounded-full hover:bg-accent-hover flex items-center gap-2"
                  >
                    <span>Download cv</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </a>
                <div className="mb-8 lg:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            {/* photo */}
            <div className="order-1 lg:order-none mb-8 lg:mb-0 xl:order-none xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        <FullStackProject />
        <FrontendProject />
      </section>
    </div>
  );
};

export default Home;
