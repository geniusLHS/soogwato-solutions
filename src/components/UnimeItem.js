import React from "react";

const UnimeItem = ({}) => {
  return (
    <a
      target="_blank"
      href="https://snu.unime.or.kr/main/main.do"
      onClick={() =>
        window.gtag("event", "solution_link_click", {
          solution_label: "UNIME",
          solution_name: "유니미",
        })
      }
      className="w-full shadow-md hover:bg-gray-100 transition rounded-lg py-3 px-4 flex items-center gap-4 bg-white"
      rel="noreferrer"
    >
      <div className="">
        <p className="text-lg pb-1">유니미</p>
        <p className="max-w-xs sm:max-w-[32rem] text-sm text-gray-400 truncate">https://snu.unime.or.kr/main/main.do</p>
      </div>
    </a>
  );
};

export default UnimeItem;
