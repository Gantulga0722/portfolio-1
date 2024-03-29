import React from "react";
import { Buttons } from "./Buttons";
import { useTheme } from "@/context/ThemeContex";

export const About = () => {
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const divColor = theme == "light" ? "bg-gray-50" : "bg-[#111827]";
  const spanColor = theme == "light" ? "text-gray-600" : "text-[#D1D5DB]";
  const pTagClassName = theme == "light" ? "text-gray-600" : "text-[#D1D5DB]";
  const borderColor = theme == "light" ? "border-gray-50" : "border-[#111827]";
  const shadowColor = theme == "light" ? "bg-gray-200" : "bg-[#374151]";

  return (
    <div
      className={`flex px-[16px] py-[64px] justify-between items-start self-stretch ${divColor} sm:px-[80px] sm:py-[96px]`}
      id="about"
    >
      <div className="flex flex-col items-center gap-6 flex-[1_0_0] sm:px-[32px] sm:gap-12">
        <div className="flex flex-col justify-center items-center self-stretch">
          <Buttons buttonName={"About me"} />
        </div>
        <div className="flex flex-col items-start gap-12 self-stretch sm:flex-row">
          <div className="flex flex-col items-center self-stretch relative sm:w-[584px] sm:items-start sm:flex-[1_0_0] sm:min-w-[444px]">
            <div
              className={`w-[280px] h-[360px] shrink-0 border-[8px] ${borderColor} bg-[url(/images/about-image.jpg)] bg-cover z-[1] absolute sm:w-[400px] sm:h-[480px] sm:ml-[40px]`}
            ></div>
            <div
              className={`w-[320px] h-[360px] shrink-0 border-[8px] ${borderColor} ${shadowColor} mt-[20px] sm:w-[400px] sm:h-[480px] sm:mt-[40px]`}
            ></div>
          </div>
          <div className="flex flex-col items-start gap-6 self-stretch sm:w-[584px] sm:min-w-[444px]">
            <h2 className="self-stretch text-gray-900 font-sans text-[24px] not-italic font-semibold leading-8 tracking-[-0.48px]">
              Curious about me? Here you have it:
            </h2>
            <div className="flex flex-col items-start gap-4 self-stretch">
              <p
                className={`self-stretch font-sans text-[16px] not-italic font-normal leading-6 ${pTagClassName}`}
              >
                I'm a passionate,{" "}
                <span className="font-sans text-[16px] not-italic font-normal leading-6 underline">
                  self-proclaimed
                </span>{" "}
                designer who specializes in full stack development (React.js &
                Node.js). I am very enthusiastic about bringing the technical
                and visual aspects of digital products to life. User experience,
                pixel perfect design, and writing clear, readable, highly
                performant code matters to me.
              </p>
              <p
                className={`self-stretch font-sans text-[16px] not-italic font-normal leading-6 ${pTagClassName}`}
              >
                I began my journey as a web developer in 2015, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, 7 years after starting my web
                development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, Nestjs,
                Tailwindcss, Supabase and much more.
              </p>
              <p
                className={`self-stretch font-sans text-[16px] not-italic font-normal leading-6 ${pTagClassName}`}
              >
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </p>
              <p
                className={`self-stretch font-sans text-[16px] not-italic font-normal leading-6 ${pTagClassName}`}
              >
                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on{" "}
                <span
                  className={`font-sans text-[16px] not-italic font-normal leading-6 underline ${spanColor}`}
                >
                  Twitter
                </span>{" "}
                where I share tech-related bites and build in public, or you can
                follow me on{" "}
                <span
                  className={`font-sans text-[16px] not-italic font-normal leading-6 underline ${spanColor}`}
                >
                  GitHub
                </span>
                .
              </p>
              <p
                className={`self-stretch font-sans text-[16px] not-italic font-normal leading-6 ${pTagClassName}`}
              >
                Finally, some quick bits about me.
              </p>
              <div className="flex items-start gap-[10px] self-stretch">
                <ul className="flex flex-wrap gap-[10px] list-disc pl-[20px] justify-around">
                  <li
                    className={`self-stretch font-sans text-[16px] not-italic font-normal leading-6 ${spanColor} w-[267px] h-[24px]`}
                  >
                    B.E. in Computer Engineering
                  </li>
                  <li
                    className={`self-stretch font-sans text-[16px] not-italic font-normal leading-6 ${spanColor} w-[267px] h-[24px]`}
                  >
                    Avid learner
                  </li>
                  <li
                    className={`self-stretch font-sans text-[16px] not-italic font-normal leading-6 ${spanColor} w-[267px] h-[24px]`}
                  >
                    Full time freelancer
                  </li>
                  <li
                    className={`self-stretch font-sans text-[16px] not-italic font-normal leading-6 ${spanColor} w-[267px] h-[24px]`}
                  >
                    Aspiring indie hacker
                  </li>
                </ul>
              </div>
              <p
                className={`self-stretch font-sans text-[16px] not-italic font-normal leading-6 ${pTagClassName}`}
              >
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
