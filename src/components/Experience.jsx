import React from "react";
import { Buttons } from "./Buttons";
import { ExperienceCard } from "./Card";
import { useTheme } from "@/context/ThemeContex";
import { useState } from "react";

export const Experience = () => {
  const [dropDown, setDropDown] = useState(false);
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const divColor = theme == "light" ? "bg-gray-50" : "bg-[#111827]";
  const spanColor = theme == "light" ? "text-gray-600" : "text-[#D1D5DB]";
  const pTagClassName = theme == "light" ? "text-gray-600" : "text-[#D1D5DB]";
  const hTagClassName = theme == "light" ? "text-gray-900" : "text-[#F9FAFB]";
  const divBgClassName = theme == "light" ? "bg-[#FFF]" : "bg-[#030712]";
  const borderColor = theme == "light" ? "border-[#FFF]" : "border-[#030712]";
  const shadowColor = theme == "light" ? "bg-gray-200" : "bg-[#374151]";

  return (
    <div
      className={`flex px-[16px] py-[64px] flex-col justify-center items-center self-stretch ${divColor} sm:px-[80px] sm:py-[96px]`}
      id="experience"
    >
      <div className="flex flex-col justify-center items-center gap-6 self-stretch sm:px-[32px]">
        <div className="flex flex-col items-start gap-4 self-stretch sm:justify-center  sm:gap-12 sm:items-center">
          <div className="flex flex-col items-start justify-center gap-4 self-stretch sm:justify-center sm:items-center">
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
