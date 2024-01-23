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
} from "@/components/Index";

const inter = Inter({ subsets: ["latin"] });

const Portfolio = () => {
  return (
    <div className=" font-[`${inter}`]">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Portfolio;
