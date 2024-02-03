import React, { useState } from "react";
import { HanburgerIcon } from "./icons";
import { DropDownMenu } from "./DropDownMenu";
import { DesktopMenu } from "./DesktopMenu";
import { useTheme } from "@/context/ThemeContex";

export const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const hTagClassName = theme == "light" ? "text-[#111827]" : "text-[#F9FAFB]";
  const divBgClassName = theme == "light" ? "bg-[#FFF]" : "bg-[#030712]";

  return (
    <div className="flex z-20 mx-auto max-w-[1440px] w-[100%]">
      <div
        className={`flex p-[16px] self-stretch justify-between items-center sm:border-b sm:border-[rgba(255_255_255_0.00)] ${divBgClassName} sm:px-[80px] sm:border-none max-w-[1440px] w-[100%] fixed`}
      >
        <div className="flex justify-between items-center flex-[1_0_0] sm:px-[32px]">
          <div>
            <a href="#hero">
              <h1
                className={`${hTagClassName} text-center font-sans text-[30px] not-italic font-bold leading-9 tracking-[-0.6px]`}
              >
                &lt;SS /&gt;
              </h1>
            </a>
          </div>

          <div
            className="flex sm:hidden p-[6px] justify-center items-center rounded-[8px] relative ml-[200px]"
            onClick={() => setDropDown(true)}
          >
            <HanburgerIcon />
          </div>
          {dropDown ? (
            <DropDownMenu onClose={() => setDropDown(false)} />
          ) : (
            <DesktopMenu />
          )}
        </div>
      </div>
    </div>
  );
};
