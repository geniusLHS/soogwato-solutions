import React from 'react';

const SolutionItem = ({ item }) => {
  return (
    <a
      target="_blank"
      href={item.link}
      onClick={() =>
        window.gtag('event', 'solution_link_click', {
          label: item.label,
          solution_name: item.name,
        })
      }
      className="w-full border border-gray-300 rounded-lg py-3 px-4 flex items-center gap-4 bg-white"
      rel="noreferrer"
    >
      <div className="">
        <p className="text-lg pb-1">{item.name}</p>
        <p className="max-w-xs sm:max-w-[32rem] text-sm text-gray-400 truncate">{item.link}</p>
      </div>
    </a>
  );
};

export default SolutionItem;
