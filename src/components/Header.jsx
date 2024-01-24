import React, { useState } from "react";
import { HanburgerIcon } from "./icons";
import { CloseIcon } from "./icons";
import { ThemeIcon } from "./icons";
import { DropDownMenu } from "./DropDownMenu";
import { DesktopMenu } from "./DesktopMenu";

export const Header = () => {
  const [dropDown, setDropDown] = useState(false);

  const [hideIcon, setHideIcon] = useState("flex");
  const [hideDrop, setHideDrop] = useState("flex");

  function flexDropDownMenu() {
    setDropDown(dropDown == "hidden" ? "flex" : "hidden");
  }

  return (
    <div className="flex p-[16px] self-stretch justify-between items-center border-b border-[rgba(255_255_255_0.00)] bg-[#FFF] sm:px-[80px] sm:border-none">
      <div className="flex justify-between items-center flex-[1_0_0] sm:px-[32px]">
        <div>
          <h1 className="text-[#111827] text-center font-sans text-[30px] not-italic font-bold leading-9 tracking-[-0.6px]">
            &lt;SS /&gt;
          </h1>
        </div>
        <div
          className="flex sm:hidden p-[6px] justify-center items-center rounded-[8px] relative"
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
  );
};
