import React from "react";
import Image from "next/image";
import { experienceData } from "@/utils/dummyDataCards";
import { workData } from "@/utils/dummyDataCards";
import { UpworkIcon } from "./icons/UpworkIcon";

export const ExperienceCard = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[24px] sm:gap-[48px]">
      {experienceData.map((element) => (
        <div className="flex sm:w-[896px] flex-col p-[32px] items-start rounded-[12px] bg-[#FFF] shadow-[0px_2px_2px_0px rgba(0,0,0,0.06), 0px_4px_3px_0px rgba(0,0,0,0.07)]">
          <div className="flex w-[100%] flex-col gap-4 self-stretch sm:gap-12 sm:flex-row sm:justify-between">
            <div className="flex items-start flex-[1 0 0] w-[190px]">
              <UpworkIcon />
            </div>
            <div className="sm:order-last">
              <p className="text-[#374151] font-sans text-[16px] not-italic font-normal leading-6">
                {element.posDate}
              </p>
            </div>
            <div className="flex max-w-[384px] flex-col items-start gap-4">
              <h2 className="text-[#111827] font-sans text-[20px] not-italic font-semibold leading-7">
                {element.position}
              </h2>
              <ul className="list-disc pl-[25px]">
                {element.responsible.map((rep) => (
                  <li className="text-[#4B5563] font-sans text-[16px] not-italic font-normal leading-6">
                    {rep}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const WorkCard = () => {
  console.log();
  return (
    <div className="flex flex-col gap-[48px]">
      {workData.map((work) => (
        <div className="flex flex-col sm:flex-row max-w-[1152px] rounded-[12px] shadow-md justify-center">
          <div className="flex p-[32px] justify-center items-center sefl-stretch rounded-[12px_12px_0_0] border-b border-gray-100 bg-gray-50 sm:p-[48px] sm:w-[576px] sm:h-[480px] sm:rounded-[12px_0_0_12px]">
            {work.image}
          </div>
          <div className="flex p-[32px] flex-col items-center gap-[24px] self-stretch rounded-[12px_0_0_12px] sm:p-[48px] sm:w-[576px] sm:h-[480px] sm:rounded-[0_12px_12px_0]">
            <div className="flex w-[100%] justify-start items-start">
              <h2 className="text-[#111827] font-sans text-[20px] not-italic font-semibold leading-7">
                {work.workTitle}
              </h2>
            </div>
            <p className="text-[#4B5563] font-sans text-[16px] not-italic font-normal leading-6">
              {work.workDescription}
            </p>
            <div className="flex items-center content-center gap-2 self-stretch flex-wrap">
              {work.workSkills.map((skills) => (
                <button className="flex px-[20px] py-1 justify-center items-center rounded-xl bg-[#E5E7EB] text-[#4B5563] font-sans text-[14px] not-italic font-medium leading-5">
                  {skills}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 self-stretch">
              {work.workIcon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
