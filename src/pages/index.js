import Image from "next/image";
import { Inter } from "next/font/google";
import Portfolio from "./Portfolio";
import { useTheme } from "@/context/ThemeContex";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [dropDown, setDropDown] = useState(false);
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const divBgClassName = theme == "light" ? "bg-[#FFF]" : "bg-[#030712]";
  return (
    <div className={divBgClassName}>
      <Portfolio />
    </div>
  );
}
