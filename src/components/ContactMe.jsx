import React from "react";
import { Buttons } from "./Buttons";
import { CopyIcon } from "./icons";
import { MessageIcon } from "./icons";
import { PhoneIcon } from "./icons";
import { GitIcon } from "./icons";
import { TwitterIcon } from "./icons";
import { FigIcon } from "./icons";
import { useTheme } from "@/context/ThemeContex";
import { useState } from "react";

export const ContactMe = () => {
  const [dropDown, setDropDown] = useState(false);
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const spanColor = theme == "light" ? "text-gray-600" : "text-[#D1D5DB]";
  const pTagClassName = theme == "light" ? "text-gray-600" : "text-[#D1D5DB]";
  const hTagClassName = theme == "light" ? "text-gray-900" : "text-[#F9FAFB]";
  const divBgClassName = theme == "light" ? "bg-[#FFF]" : "bg-[#030712]";
  const borderColor = theme == "light" ? "border-[#FFF]" : "border-[#030712]";
  const shadowColor = theme == "light" ? "bg-gray-200" : "bg-[#374151]";

  return (
    <div
      className={`flex px-[16px] py-[64px] flex-col justify-center items-center self-stretch ${divBgClassName}`}
      id="contact"
    >
      <div className="flex flex-col justify-center items-center gap-6 self-stretch sm:gap-12">
        <div className="flex flex-col items-start gap-4 self-stretch sm:justify-center sm:items-center">
          <div className="flex flex-col justify-center items-center self-stretch">
            <Buttons buttonName={"Get in touch"} />
          </div>
          <div className="flex flex-col justify-center items-center self-stretchs">
            <div className="max-w-[576px] self-stretch">
              <p className="text-gray-600 text-center font-sans text-[18px] not-italic font-normal leading-7">
                What’s next? Feel free to reach out to me if you're looking for
                a developer, have a query, or simply want to connect.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center sm:gap-4">
          <div className="flex justify-center items-center gap-4">
            <div>
              <MessageIcon />
            </div>
            <span className="text-[#111827] text-center font-sans text-[18px] not-italic font-semibold leading-7 tracking-[-0.36px] sm:text-[36px] sm:leading-10 sm:tracking-[-0.72px]">
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
            <span className="text-[#111827] text-center font-sans text-[18px] not-italic font-semibold leading-7 tracking-[-0.36px] sm:text-[36px] sm:leading-10 sm:tracking-[-0.72px]">
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
