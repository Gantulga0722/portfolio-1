export function Buttons({ buttonName }) {
  return (
    <div className="flex px-5 py-1 justify-center items-center rounded-[12px] bg-gray-200">
      <button className="text-gray-600 font-sans text-[14px] not-italic font-medium leading-5">
        {buttonName}
      </button>
    </div>
  );
}
