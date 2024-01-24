import React from "react";
import { LocationIcon } from "./icons";
import { GitIcon } from "./icons";
import { TwitterIcon } from "./icons";
import { FigIcon } from "./icons";

export const Hero = () => {
  return (
    <div className="flex px-[16px] py-[64px] justify-between items-start self-stretch bg-[#FFF] sm:px-[80px] sm:py-[96px]">
      <div className="flex flex-col items-start gap-12 flex-[1_0_0] sm:flex-row sm:px-[32px] sm:justify-between">
        <div className="flex flex-col justify-center items-center self-stretch relative sm:order-last sm:justify-start sm:items-end sm:min-w-[384px]">
          <div className="w-[240px] h-[280px] shrink-0 border-[8px] border-[#FFF] bg-[url(/images/hero-image.jpg)] bg-cover z-[1] absolute sm:w-[280px] sm:h-[320px] sm:mr-[40px]"></div>
          <div className="w-[280px] h-[280px] shrink-0 border-[8px] border-[#FFF] bg-gray-200 mt-[40px]  sm:h-[320px] sm:mt-[40px]"></div>
        </div>
        <div className="flex flex-col justify-center items-start gap-12 self-stretch sm:max-w-[768px]">
          <div className="flex flex-col justify-center items-start gap-2 self-stretch">
            <h2 className="text-gray-900 font-sans text-[36px] not-italic font-semibold leading-[40px]">
              Hi, I’m Sagar 👋
            </h2>
            <p className="self-stretch text-gray-600 font-sans text-[16px] not-italic font-normal leading-6">
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </p>
          </div>
          <div className="flex flex-col justify-center items-start gap-2 self-stretch">
            <div className="flex items-center gap-2 self-stretch">
              <div>
                <LocationIcon />
              </div>
              <span>Ahmedabad, India</span>
            </div>
            <div className="flex items-center gap-2 self-stretch">
              <div className="flex w-6 h-6 flex-col justify-center items-center">
                <div className="w-[8px] h-[8px] shrink-0 rounded-[50%] bg-[#10B981]"></div>
              </div>
              <span>Available for new projects</span>
            </div>
          </div>
          <div className="flex items-start self-stretch">
            <div className="flex p-[6px] justify-center items-center rounded-[8px]">
              <GitIcon />
            </div>
            <div className="flex p-[6px] justify-center items-center rounded-[8px]">
              <TwitterIcon />
            </div>
            <div className="flex p-[6px] justify-center items-center rounded-[8px]">
              <FigIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
