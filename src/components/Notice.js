export default function Notice() {
  const addedDate = new Date("2025-08-04");
  const now = new Date();
  const threeMonthsAgo = new Date();
  threeMonthsAgo.setMonth(now.getMonth() - 3);

  if (addedDate > threeMonthsAgo) {
    return (
      <a
        href="https://geniuslhs.com/solutions/stein-complex-analysis.pdf"
        target="_blank"
        rel="noreferrer"
        className="!mt-5 block bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-md p-4 hover:shadow-md transition-all duration-200"
        onClick={() =>
          window.gtag &&
          window.gtag("event", "solution_link_click", {
            solution_label: "ANLY_stein.complex",
            solution_name: "스테인 복소해석학 풀이집",
          })
        }
      >
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-red-500 text-white text-xs font-semibold px-1 py-0.5 rounded-md">NEW</span>
            <span className="text-gray-800 font-medium">Stein 복소해석학 풀이집이 추가되었습니다.</span>
          </div>
          <div className="flex items-center gap-2 text-base text-red-600 font-semibold">
            Stein 복소해석학 풀이집 바로가기
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                clipRule="evenodd"
              />
              <path fillRule="evenodd" d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </a>
    );
  }

  return null;
}
