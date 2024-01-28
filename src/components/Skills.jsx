import React from "react";
import { Buttons } from "./Buttons";
import { skillsIcon } from "@/utils/dummyDataIcons";
import { useTheme } from "@/context/ThemeContex";
import { useState } from "react";

export const Skills = () => {
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
      className={`flex px-4 py-16 flex-col justify-center items-center self-stretch ${divBgClassName} sm:px-[80px] sm:py-[96px]`}
    >
      <div className="flex flex-col items-start gap-6 self-stretch sm:px-[32px] sm:gap-12">
        <div className="flex flex-col items-start gap-4 self-stretch sm:justify-center sm:items-center">
          <div className="flex flex-col justify-center items-center self-stretch">
            <Buttons buttonName={"Skills"} />
          </div>
          <div className="flex sm:text-center sm:justify-center sm:items-center">
            <div className="flex max-w-[576px] self-stretch">
              <p className="text-gray-600 text-center font-sans text-[18px] not-italic font-normal leading-7">
                The skills, tools and technologies I am really good at:
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 self-stretch sm:flex-row sm:flex-wrap justify-between">
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
