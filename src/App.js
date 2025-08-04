// import logo from './logo.svg';
// import './App.css';
import SubjectItem from "./components/SubjectItem";
import UnimeItem from "./components/UnimeItem";
import Notice from "./components/Notice";

let SubjectItems = [
  {
    subject: "미적분학",
    solutions: [
      { name: "김홍종 미적분학 (2판) 풀이집", link: "http://goo.gl/kkX9m9", label: "CALC_khj.2" },
      { name: "김홍종 미적분학 (3판) 탐구문제 풀이집", link: "https://bit.ly/3NVqf9V", label: "CALC_khj.3.adv" },
      { name: "수1 기출 풀이 및 유형별 자료", link: "https://bit.ly/3TpwsMG", label: "CALC_calc.1.prev" },
      { name: "수2 기출 풀이 및 유형별 자료", link: "https://bit.ly/41art5z", label: "CALC_calc.2.prev" },
      { name: "수연도우미 유튜브 채널: 개념 설명 및 기출 문제 풀이", link: "https://www.youtube.com/@snu7244", label: "CALC_yt.snu7244" },
    ],
  },
  {
    subject: "선형대수학",
    solutions: [
      // { name: "프리드버그 풀이집", link: "https://math.berkeley.edu/~nadler/110fall2012", label: "LINE_friedberg" },
      { name: "프리드버그 4판 풀이집", link: "https://jlch3554.files.wordpress.com/2012/11/la-solution-2011-7.pdf", label: "LINE_friedberg.4" },
      { name: "선대군 풀이집", link: "https://rudmath.tistory.com/48", label: "LINE_line.and.group" },
    ],
  },
  {
    subject: "해석학",
    solutions: [
      { name: "김김계 풀이집", link: "https://jsch89.tistory.com/5", label: "ANLY_kkk" },
      // { name: "베이비루딘 풀이집 1", link: "https://rudmath.tistory.com/46", label: "ANLY_rudin.PMA(1)" },
      // { name: "베이비루딘 풀이집 2", link: "https://www.csie.ntu.edu.tw/~b89089/old/math/pma/index.html", label: "ANLY_rudin.PMA(2)" },
      { name: "루딘 PMA 풀이집", link: "https://pages.cs.wisc.edu/~wentaowu/other-docs/POMA_Solution_Sheet.pdf", label: "ANLY_rudin.PMA(3)" },
      { name: "STEIN 복소해석학 풀이집", link: "https://geniuslhs.com/solutions/stein-complex-analysis.pdf", label: "ANLY_stein.complex", new: true },
    ],
  },
];

function App() {
  return (
    <div className="min-h-screen py-8 sm:py-12 font-sans px-4 bg-white">
      <div className="max-w-2xl mx-auto w-full space-y-12">
        <header className="space-y-3">
          <h1 className="text-3xl md:text-[2.5rem] font-semibold">
            <img alt="soogwato-logo" src="logo.png" className="h-12 inline mr-1 pb-2"></img> 수과토 Solution
          </h1>
          <p className="text-base md:text-lg text-gray-600">솔루션 및 기출 문제 풀이를 분야별로 모았습니다.</p>
          <Notice />
        </header>
        {/* <UnimeItem></UnimeItem> */}
        <div className="space-y-8">
          {SubjectItems.map((item, idx) => (
            <SubjectItem key={idx} name={item.subject} item={item.solutions}></SubjectItem>
          ))}
        </div>
        <footer className="mt-12 w-full border-t border-gray-200 pt-8 text-center text-sm text-gray-500">© {new Date().getFullYear()} geniusLHS</footer>
      </div>
    </div>
  );
}

export default App;
