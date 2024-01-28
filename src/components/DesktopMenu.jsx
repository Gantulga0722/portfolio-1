import { ThemeIcon } from "./icons";
import { useTheme } from "@/context/ThemeContex";
import { DarkThemeIcon } from "./icons";

export function DesktopMenu() {
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const divClassName = theme == "light" ? "bg-gray-900" : "bg-[#F9FAFB]";
  const buttonClassName = theme == "light" ? "text-gray-50" : "text-[#111827]";
  const aTagClassName = theme == "light" ? "text-gray-600" : "text-[#D1D5DB]";

  return (
    <div className="hidden justify-center items-center gap-6 sm:flex">
      <div className="flex justify-center items-center gap-6">
        <ul className="flex items-start gap-4 self-stretch">
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
      <div className="flex items-center justify-center gap-4">
        <div className="flex justify-between items-center self-stretch">
          <div
            className="flex p-[6px] justify-center items-center rounded-[8px]"
            onClick={changeThemeHandler}
          >
            {theme == "light" ? <ThemeIcon /> : <DarkThemeIcon />}
          </div>
        </div>
        <div
          className={`flex px-[16px] py-[6px] justify-center items-center gap-2 self-stretch rounded-[12px] ${divClassName}`}
        >
          <button
            className={`font-sans text-[16px] not-italic font-medium leading-6 ${buttonClassName} `}
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
