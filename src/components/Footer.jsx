import React from "react";
import { CopyRightIcon } from "./icons";
import { useTheme } from "@/context/ThemeContex";
import { useState } from "react";

export const Footer = () => {
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
      className={`flex px-[0] py-[24px] flex-col justify-center items-center self-stretch ${divColor}`}
    >
      <div className="flex justify-center items-center self-stretch gap-2">
        <CopyRightIcon />
        <p className="text-[#4B5563] font-sans text-[14px] not-italic font-normal leading-5">
          2023 |{" "}
          <span className="text-[#4B5563] font-sans text-[14px] not-italic font-normal leading-5 underline">
            Designed
          </span>{" "}
          and{" "}
          <span className="text-[#4B5563] font-sans text-[14px] not-italic font-normal leading-5 underline">
            coded
          </span>{" "}
          with ❤️️ by Sagar Shah
        </p>
      </div>
    </div>
  );
};
