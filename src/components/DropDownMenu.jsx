import { CloseIcon } from "./icons";
import { ThemeIcon } from "./icons";
import { useTheme } from "@/context/ThemeContex";

export function DropDownMenu({ onClose }) {
  // const { theme, setTheme } = useTheme();

  // const changeThemeHandler = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // };

  return (
    <div className="flex w-[375px] h-[720px] flex-col items-end shrink-0 bg-[rgba(17_24_39_0.10)] backdrop-blur-sm absolute right-0 top-0 z-[2]">
      <div className="flex w-[320px] h-[667px] flex-col items-start bg-[#FFF] shadow-[0px_25px_25px_0px_rgba(0,0,0,0.15)] sm:flex-row">
        <div className="flex p-[16px] justify-between items-start self-stretch border-b border-gray-100 sm:hidden">
          <div>
            <h1 className="text-[#111827] text-center font-sans text-[30px] not-italic font-bold leading-9 tracking-[-0.48px]">
              &lt;SS /&gt;
            </h1>
          </div>
          <div
            className="flex p-[6px] justify-center items-center rounded-[8px]"
            onClick={onClose}
          >
            <CloseIcon />
          </div>
        </div>
        <div className="flex p-[16px] flex-col items-start gap-4 self-stretch border-b border-gray-100">
          <ul className="flex flex-col items-start gap-4 self-stretch">
            <li className="flex justify-center items-center">
              <a
                href=""
                className="text-gray-600 font-sans text-[16px] not-italic font-medium leading-6"
              >
                About
              </a>
            </li>
            <li className="flex justify-center items-center">
              <a
                href=""
                className="text-gray-600 font-sans text-[16px] not-italic font-medium leading-6"
              >
                Work
              </a>
            </li>
            <li className="flex justify-center items-center">
              <a
                href=""
                className="text-gray-600 font-sans text-[16px] not-italic font-medium leading-6"
              >
                Testimonials
              </a>
            </li>
            <li className="flex justify-center items-center">
              <a
                href=""
                className="text-gray-600 font-sans text-[16px] not-italic font-medium leading-6"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex p-4 flex-col items-start gap-4 self-stretch">
          <div className="flex justify-between items-center self-stretch">
            <div className=" flex justify-between items-center self-stretch">
              <span className="text-gray-600 font-sans text-[16px] not-italic font-normal leading-6">
                Switch Theme
              </span>
            </div>
            <div className="flex p-[6px] justify-center items-center rounded-[8px]">
              <ThemeIcon />
            </div>
          </div>
          <div className="flex px-[16px] py-[6px] justify-center items-center gap-2 self-stretch rounded-[12px] bg-gray-900">
            <button className="text-gray-50 font-sans text-[16px] not-italic font-medium leading-6">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
