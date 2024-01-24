import React from "react";
import { CopyRightIcon } from "./icons";

export const Footer = () => {
  return (
    <div className="flex px-[0] py-[24px] flex-col justify-center items-center self-stretch bg-gray-50">
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
