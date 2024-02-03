import React from "react";
import { Buttons } from "./Buttons";
import { WorkCard } from "./Card";
import { useTheme } from "@/context/ThemeContex";

export const Work = () => {
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const pTagClassName = theme == "light" ? "text-gray-600" : "text-[#D1D5DB]";
  const divBgClassName = theme == "light" ? "bg-[#FFF]" : "bg-[#030712]";
  return (
    <div
      className={`flex px-[16px] py-[64px] flex-col justify-center items-center self-stretch ${divBgClassName} sm:px-[80px] sm:py-[96px]`}
      id="work"
    >
      <div className="flex flex-col justify-center items-center gap-6 self-stretch sm:gap-12 sm:px-[32px]">
        <div className="flex flex-col items-start gap-4 self-stretch sm:justify-center text-center">
          <div className="flex flex-col justify-center items-center self-stretch">
            <Buttons buttonName={"Work"} />
          </div>
          <div className="flex flex-col justify-center items-center self-stretch">
            <p
              className={`${pTagClassName} text-center font-sans text-[18px] not-italic font-normal leading-7`}
            >
              Some of the noteworthy projects I have built:
            </p>
          </div>
        </div>
        <WorkCard />
      </div>
    </div>
  );
};
