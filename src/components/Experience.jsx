import React from "react";
import { Buttons } from "./Buttons";
import { ExperienceCard } from "./Card";

export const Experience = () => {
  return (
    <div className="flex px-[16px] py-[64px] flex-col justify-center items-center self-stretch bg-gray-50 sm:px-[80px] sm:py-[96px]">
      <div className="flex flex-col justify-center items-center gap-6 self-stretch sm:px-[32px]">
        <div className="flex flex-col items-start gap-4 self-stretch sm:justify-center  sm:gap-12 sm:items-center">
          <div className="flex flex-col items-start gap-4 self-stretch sm:justify-center sm:items-center">
            <div className="flex flex-col justify-center items-center self-stretch">
              <Buttons buttonName={"Experience"} />
            </div>
            <div className="flex sm:text-center sm:justify-center sm:items-center">
              <div className="flex max-w-[576px] self-stretch">
                <p className="text-gray-600 text-center font-sans text-[18px] not-italic font-normal leading-7">
                  Here is a quick summary of my most recent experiences:
                </p>
              </div>
            </div>
          </div>
          <div>
            <ExperienceCard />
          </div>
        </div>
      </div>
    </div>
  );
};
