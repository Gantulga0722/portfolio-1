import { ThemeIcon } from "./icons";

export function DesktopMenu() {
  return (
    <div className="hidden justify-center items-center gap-6 sm:flex">
      <div className="flex justify-center items-center gap-6">
        <ul className="flex items-start gap-4 self-stretch">
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
      <div className="flex items-center justify-center gap-4">
        <div className="flex justify-between items-center self-stretch">
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
  );
}
