"use client";
import React from "react";
import Social from "../Social";

const Footer = () => {
  return (
    <footer className="py-6 bg-primary text-white">
      <div className="container px-6 mx-auto">
        <div className="">
          <div className="flex flex-row self-center text-lg text-center mb-5 md:block lg:col-start-1 md:space-x-6">
            <span>Copyright © 2025, Al-Amin - All rights reserved</span>
          </div>
          <div className="flex justify-center">
            <Social
              containerStyles="flex gap-6"
              iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
