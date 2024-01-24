import React from "react";
import { Buttons } from "./Buttons";
import { CopyIcon } from "./icons";
import { MessageIcon } from "./icons";
import { PhoneIcon } from "./icons";
import { GitIcon } from "./icons";
import { TwitterIcon } from "./icons";
import { FigIcon } from "./icons";

export const ContactMe = () => {
  return (
    <div className="flex px-[16px] py-[64px] flex-col justify-center items-center self-stretch bg-[#FFF]">
      <div className="flex flex-col justify-center items-center gap-6 self-stretch">
        <div className="flex flex-col items-start gap-4 self-stretch">
          <div className="flex flex-col justify-center items-center self-stretch">
            <Buttons buttonName={"Get in touch"} />
          </div>
          <div className="max-w-[576px] self-stretch">
            <p className="text-gray-600 text-center font-sans text-[18px] not-italic font-normal leading-7">
              What’s next? Feel free to reach out to me if you're looking for a
              developer, have a query, or simply want to connect.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center gap-4">
            <div>
              <MessageIcon />
            </div>
            <span className="text-[#111827] text-center font-sans text-[18px] not-italic font-semibold leading-7 tracking-[-0.36px]">
              reachsagarshah@gmail.com
            </span>
            <div>
              <CopyIcon />
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div>
              <PhoneIcon />
            </div>
            <span className="text-[#111827] text-center font-sans text-[18px] not-italic font-semibold leading-7 tracking-[-0.36px]">
              +91 8980500565
            </span>
            <div>
              <CopyIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center self-stretch gap-4">
          <p className="text-[#4B5563] font-sans text-[16px] not-italic leading-6">
            You may also find me on these platforms!
          </p>
          <div className="flex justify-center items-center self-stretch">
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
