import React from "react";
import { Buttons } from "./Buttons";
import { WorkCard } from "./Card";
import { useTheme } from "@/context/ThemeContex";
import { useState } from "react";

export const Work = () => {
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
      className={`flex px-[16px] py-[64px] flex-col justify-center items-center self-stretch ${divBgClassName} sm:px-[80px] sm:py-[96px]`}
      id="work"
    >
      <div className="flex flex-col justify-center items-center gap-6 self-stretch sm:gap-12 sm:px-[32px]">
        <div className="flex flex-col items-start gap-4 self-stretch sm:justify-center">
          <div className="flex flex-col justify-center items-center self-stretch">
            <Buttons buttonName={"Work"} />
          </div>
          <div className="flex flex-col justify-center items-center self-stretch">
            <div className="max-w-[576px] self-stretch">
              <p className="text-gray-600 text-center font-sans text-[18px] not-italic font-normal leading-7">
                Some of the noteworthy projects I have built:
              </p>
            </div>
          </div>
        </div>
        <WorkCard />
      </div>
    </div>
  );
};
