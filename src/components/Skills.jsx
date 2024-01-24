import React from "react";
import { Buttons } from "./Buttons";
import { skillsIcon } from "@/utils/dummyDataIcons";

export const Skills = () => {
  return (
    <div className="flex px-4 py-16 flex-col justify-center items-center self-stretch bg-[#FFF]">
      <div className="flex flex-col items-start gap-6 self-stretch">
        <div className="flex flex-col items-start gap-4 self-stretch">
          <div className="flex flex-col justify-center items-center self-stretch">
            <Buttons buttonName={"Skills"} />
          </div>
          <div className="max-w-[576px] self-stretch">
            <p className="text-gray-600 text-center font-sans text-[18px] not-italic font-normal leading-7">
              The skills, tools and technologies I am really good at:
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-start gap-4 self-stretch">
          {skillsIcon.map((icon) => (
            <div className="flex flex-col justify-center items-center gap-2 self-stretch">
              <div>{icon.icon}</div>
              <p>{icon.iconName}</p>
            </div>
          ))}
        </div>  
      </div>
    </div>
  );
};
