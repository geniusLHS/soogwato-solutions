// import logo from './logo.svg';
// import './App.css';
import SubjectItem from "./components/SubjectItem";
import UnimeItem from "./components/UnimeItem";

let SubjectItems = [
  {
    subject: "미적분학",
    solutions: [
      { name: "김홍종 미적분학 (2판) 풀이집", link: "http://goo.gl/kkX9m9", label: "CALC_khj.2" },
      { name: "김홍종 미적분학 (3판) 탐구문제 풀이집", link: "https://bit.ly/3NVqf9V", label: "CALC_khj.3.adv" },
      { name: "수1 기출 풀이 및 유형별 자료", link: "https://bit.ly/3TpwsMG", label: "CALC_calc.1.prev" },
      { name: "수2 기출 풀이 및 유형별 자료", link: "https://bit.ly/41art5z", label: "CALC_calc.2.prev" },
    ],
  },
  {
    subject: "선형대수학",
    solutions: [
      { name: "프리드버그 풀이집", link: "https://math.berkeley.edu/~nadler/110fall2012", label: "LINE_friedberg" },
      { name: "선대군 풀이집", link: "https://rudmath.tistory.com/48", label: "LINE_line.and.group" },
    ],
  },
  {
    subject: "해석학",
    solutions: [
      { name: "김김계 풀이집", link: "https://jsch89.tistory.com/5", label: "ANLY_kkk" },
      { name: "베이비루딘 풀이집 1", link: "https://rudmath.tistory.com/46", label: "ANLY_rudin.PMA(1)" },
      { name: "베이비루딘 풀이집 2", link: "https://www.csie.ntu.edu.tw/~b89089/old/math/pma/index.html", label: "ANLY_rudin.PMA(2)" },
    ],
  },
];

function App() {
  return (
    <div className="py-8 sm:py-12 font-sans px-4 bg-[#fbfbfb]">
      <div className="max-w-xl mx-auto w-full space-y-10">
        <header className="space-y-3">
          <h1 className="text-3xl md:text-[2.5rem] font-extrabold">
            <img alt="soogwato-logo" src="logo.png" className="h-12 inline mx-1 pb-2"></img> 수과토 Solution
          </h1>
          <p className="text-base md:text-lg">솔루션 및 기출 문제 풀이를 분야별로 모았습니다.</p>
        </header>
        {/* <UnimeItem></UnimeItem> */}
        {SubjectItems.map((item, idx) => (
          <SubjectItem key={idx} name={item.subject} item={item.solutions}></SubjectItem>
        ))}
        <footer className="mt-10 w-full border-t border-t-[#898ea4] pt-10 text-center text-sm text-gray-500">© 2023 geniusLHS</footer>
      </div>
    </div>
  );
}

export default App;
