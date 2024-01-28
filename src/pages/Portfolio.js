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
    <div className="flex flex-col sm:max-w-[1440px] mx-auto ">
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
