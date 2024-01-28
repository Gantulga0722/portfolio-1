import { CloseIcon } from "./icons";
import { ThemeIcon } from "./icons";
import { useTheme } from "@/context/ThemeContex";
import { DarkThemeIcon } from "./icons";

export function DropDownMenu({ onClose }) {
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const divClassName = theme == "light" ? "bg-gray-900" : "bg-[#F9FAFB]";
  const buttonClassName = theme == "light" ? "text-gray-50" : "text-[#111827]";
  const aTagClassName = theme == "light" ? "text-gray-600" : "text-[#D1D5DB]";
  const hTagClassName = theme == "light" ? "text-[#111827]" : "text-[#F9FAFB]";
  const divBgClassName = theme == "light" ? "bg-[#FFF]" : "bg-[#030712]";
  const borderColor = theme == "light" ? "border-gray-100" : "border-[#1F2937]";

  return (
    <div className="flex w-[375px] h-[720px] flex-col items-end shrink-0 bg-[rgba(17_24_39_0.10)] backdrop-blur-sm absolute right-0 top-0 z-[2]">
      <div
        className={`flex w-[320px] h-[667px] flex-col items-start ${divBgClassName} shadow-[0px_25px_25px_0px_rgba(0,0,0,0.15)] sm:flex-row`}
      >
        <div
          className={`flex p-[16px] justify-between items-start self-stretch border-b ${borderColor} sm:hidden`}
        >
          <div>
            <h1
              className={`${hTagClassName} text-center font-sans text-[30px] not-italic font-bold leading-9 tracking-[-0.48px]`}
            >
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
        <div
          className={`flex p-[16px] flex-col items-start gap-4 self-stretch border-b ${borderColor}`}
        >
          <ul className="flex flex-col items-start gap-4 self-stretch">
            <li className="flex justify-center items-center">
              <a
                href="#about"
                className={`${aTagClassName} font-sans text-[16px] not-italic font-medium leading-6`}
              >
                About
              </a>
            </li>
            <li className="flex justify-center items-center">
              <a
                href="#work"
                className={`${aTagClassName} font-sans text-[16px] not-italic font-medium leading-6`}
              >
                Work
              </a>
            </li>
            <li className="flex justify-center items-center">
              <a
                href="#experience"
                className={`${aTagClassName} font-sans text-[16px] not-italic font-medium leading-6`}
              >
                Testimonials
              </a>
            </li>
            <li className="flex justify-center items-center">
              <a
                href="#contact"
                className={`${aTagClassName} font-sans text-[16px] not-italic font-medium leading-6`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex p-4 flex-col items-start gap-4 self-stretch">
          <div
            className="flex justify-between items-center self-stretch"
            onClick={changeThemeHandler}
          >
            <div className=" flex justify-between items-center self-stretch">
              <span
                className={`${aTagClassName} font-sans text-[16px] not-italic font-normal leading-6`}
              >
                Switch Theme
              </span>
            </div>
            <div className="flex p-[6px] justify-center items-center rounded-[8px]">
              {theme == "light" ? <ThemeIcon /> : <DarkThemeIcon />}
            </div>
          </div>
          <div
            className={`flex px-[16px] py-[6px] justify-center items-center gap-2 self-stretch rounded-[12px] ${divClassName}`}
          >
            <button
              className={`font-sans text-[16px] not-italic font-medium leading-6 ${buttonClassName}`}
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
