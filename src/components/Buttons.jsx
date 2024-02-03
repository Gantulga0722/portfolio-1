import { useTheme } from "@/context/ThemeContex";

export function Buttons({ buttonName }) {
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const divBgClassName = theme == "light" ? "bg-gray-200" : "bg-[#374151]";
  const buttonColor = theme == "light" ? "text-gray-600" : "text-[#D1D5DB]";

  return (
    <div
      className={`flex px-5 py-1 justify-center items-center rounded-[12px] ${divBgClassName}`}
    >
      <button
        className={`${buttonColor} font-sans text-[14px] not-italic font-medium leading-5`}
      >
        {buttonName}
      </button>
    </div>
  );
}
