import React from "react";

const SolutionItem = ({ item }) => {
  return (
    <a
      target="_blank"
      href={item.link}
      onClick={() =>
        window.gtag("event", "solution_link_click", {
          solution_label: item.label,
          solution_name: item.name,
        })
      }
      className="group w-full bg-white rounded-md p-3.5 flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-200 hover:border-blue-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50"
      rel="noreferrer"
    >
      <div className="flex-1">
        <p className="text-lg text-gray-800 pb-1 group-hover:text-blue-600 transition-colors duration-200">{item.name}</p>
        <p className="max-w-xs sm:max-w-[32rem] text-sm text-gray-400 truncate">{item.link}</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path fillRule="evenodd" d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" clipRule="evenodd" />
      </svg>
    </a>
  );
};

export default SolutionItem;
