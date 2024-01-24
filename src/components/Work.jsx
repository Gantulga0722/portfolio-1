import React from "react";
import { Buttons } from "./Buttons";
import { WorkCard } from "./Card";

export const Work = () => {
  return (
    <div className="flex px-[16px] py-[64px] flex-col justify-center items-center self-stretch bg-[#FFF]">
      <div className="flex flex-col justify-center items-center gap-6 self-stretch">
        <div className="flex flex-col items-start gap-4 self-stretch">
          <div className="flex flex-col justify-center items-center self-stretch">
            <Buttons buttonName={"Work"} />
          </div>
          <div className="max-w-[576px] self-stretch">
            <p className="text-gray-600 text-center font-sans text-[18px] not-italic font-normal leading-7">
              Some of the noteworthy projects I have built:
            </p>
          </div>
        </div>
        <WorkCard />
      </div>
    </div>
  );
};
