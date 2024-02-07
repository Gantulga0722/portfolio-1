import React from "react";
import { Inter } from "next/font/google";
import {
  Header,
  Hero,
  About,
  Skills,
  Experience,
  Work,
  ContactMe,
  Footer,
} from "@/components";
import { useTheme } from "@/context/ThemeContex";

const inter = Inter({ subsets: ["latin"] });

const Portfolio = () => {
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const divBgClassName = theme == "light" ? "bg-[#FFF]" : "bg-[#030712]";
  return (
    <div
      className={`flex flex-col sm:max-w-[1440px] mx-auto ${divBgClassName}`}
    >
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
      <ContactMe />
    </div>
  );
};

export default Portfolio;
