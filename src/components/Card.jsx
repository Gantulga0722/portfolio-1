import React from "react";
import Image from "next/image";
import { experienceData } from "@/utils/dummyDataCards";
import { workData } from "@/utils/dummyDataCards";
import { UpworkIcon } from "./icons/UpworkIcon";
import { useTheme } from "@/context/ThemeContex";

export const ExperienceCard = () => {
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const divColor = theme == "light" ? "bg-gray-50" : "bg-[#111827]";
  const liColor = theme == "light" ? "text-[#4B5563]" : "text-[#D1D5DB]";
  const pTagClassName = theme == "light" ? "text-[#374151]" : "text-[#E5E7EB]";
  const hTagClassName = theme == "light" ? "ext-[#111827]" : "text-[#F9FAFB]";
  const divBgClassName = theme == "light" ? "bg-[#FFF]" : "bg-[#1F2937]";
  const borderColor = theme == "light" ? "border-[#FFF]" : "border-[#030712]";
  const shadowColor = theme == "light" ? "bg-gray-200" : "bg-[#374151]";
  return (
    <div className="flex flex-col justify-center items-center gap-[24px] sm:gap-[48px]">
      {experienceData.map((element) => (
        <div
          className={`flex sm:w-[896px] flex-col p-[32px] items-start justify-center rounded-[12px] ${divBgClassName} shadow-[0px_2px_2px_0px rgba(0,0,0,0.06), 0px_4px_3px_0px rgba(0,0,0,0.07)]`}
        >
          <div className="flex w-[100%] flex-col gap-4 self-stretch sm:gap-12 sm:flex-row sm:justify-between">
            <div className="flex items-start flex-[1 0 0] w-[190px]">
              <UpworkIcon />
            </div>
            <div className="sm:order-last">
              <p
                className={`${pTagClassName} font-sans text-[16px] not-italic font-normal leading-6`}
              >
                {element.posDate}
              </p>
            </div>
            <div className="flex max-w-[384px] flex-col items-start gap-4">
              <h2
                className={`${hTagClassName} font-sans text-[20px] not-italic font-semibold leading-7`}
              >
                {element.position}
              </h2>
              <ul className="list-disc pl-[25px]">
                {element.responsible.map((rep) => (
                  <li
                    className={`${liColor} font-sans text-[16px] not-italic font-normal leading-6`}
                  >
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
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const divColor = theme == "light" ? "bg-gray-50" : "bg-[#374151]";
  const buttonColor = theme == "light" ? "text-[#4B5563]" : "text-[#D1D5DB]";
  const pTagClassName = theme == "light" ? "text-[#4B5563]" : "text-[#E5E7EB]";
  const hTagClassName = theme == "light" ? "ext-[#111827]" : "text-[#F9FAFB]";
  const divBgClassName = theme == "light" ? "bg-gray-50" : "bg-[#1F2937]";
  const borderColor = theme == "light" ? "border-gray-100" : "border-[#374151]";
  const buttonClass = theme == "light" ? "bg-[#E5E7EB]" : "bg-[#374151]";
  return (
    <div className="flex flex-col gap-[48px]">
      {workData.map((work) =>
        work.id == "reverse" ? (
          <div className="flex flex-col sm:flex-row max-w-[1152px] rounded-[12px] shadow-md justify-center">
            <div
              className={`flex p-[32px] justify-center items-center sefl-stretch rounded-[12px_12px_0_0] border-b ${borderColor} ${divColor} sm:p-[48px] sm:w-[576px] sm:h-[480px] sm:rounded-[0_12px_12px_0]  sm:order-last`}
            >
              <div
                className="flex w-[279px] h-[192px] rounded-[12px] sm:w-[480px] sm:h-[384px]"
                style={{
                  backgroundImage: `url(${work.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
            <div
              className={`flex p-[32px] flex-col items-center gap-[24px] self-stretch rounded-[0_0_12px_12px] sm:p-[48px] sm:w-[576px] ${divBgClassName} sm:h-[480px] sm:rounded-[12px_0_0_12px]`}
            >
              <div className="flex w-[100%] justify-start items-start">
                <h2
                  className={`${hTagClassName} font-sans text-[20px] not-italic font-semibold leading-7`}
                >
                  {work.workTitle}
                </h2>
              </div>
              <p
                className={`${pTagClassName} font-sans text-[16px] not-italic font-normal leading-6`}
              >
                {work.workDescription}
              </p>
              <div className="flex items-center content-center gap-2 self-stretch flex-wrap">
                {work.workSkills.map((skills) => (
                  <button
                    className={`flex px-[20px] py-1 justify-center items-center rounded-xl ${buttonClass} ${buttonColor} font-sans text-[14px] not-italic font-medium leading-5`}
                  >
                    {skills}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3 self-stretch">
                {work.workIcon}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row max-w-[1152px] rounded-[12px] shadow-md justify-center">
            <div
              className={`flex p-[32px] justify-center items-center sefl-stretch rounded-[12px_12px_0_0] border-b ${borderColor} ${divColor} sm:p-[48px] sm:w-[576px] sm:h-[480px] sm:rounded-[12px_0_0_12px]`}
            >
              <div
                className="flex w-[279px] h-[192px] rounded-[12px] sm:w-[480px] sm:h-[384px]"
                style={{
                  backgroundImage: `url(${work.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
            <div
              className={`flex p-[32px] flex-col items-center gap-[24px] self-stretch rounded-[0_0_12px_12px] sm:p-[48px] sm:w-[576px] sm:h-[480px] ${divBgClassName} sm:rounded-[0_12px_12px_0]`}
            >
              <div className="flex w-[100%] justify-start items-start">
                <h2
                  className={`${hTagClassName} font-sans text-[20px] not-italic font-semibold leading-7`}
                >
                  {work.workTitle}
                </h2>
              </div>
              <p
                className={`${pTagClassName} font-sans text-[16px] not-italic font-normal leading-6`}
              >
                {work.workDescription}
              </p>
              <div className="flex items-center content-center gap-2 self-stretch flex-wrap">
                {work.workSkills.map((skills) => (
                  <button
                    className={`flex px-[20px] py-1 justify-center items-center rounded-xl ${buttonClass} ${buttonColor} font-sans text-[14px] not-italic font-medium leading-5`}
                  >
                    {skills}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3 self-stretch">
                {work.workIcon}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};
