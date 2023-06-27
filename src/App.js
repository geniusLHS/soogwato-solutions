// import logo from './logo.svg';
// import './App.css';
import SolutionItem from './components/SolutionItem';
import SubjectItem from './components/SubjectItem';

let SubjectItems = [
  {
    subject: '미적분학',
    solutions: [
      { name: '김홍종 미적분학 솔루션 (by 하승우)', link: 'http://goo.gl/kkX9m9' },
      { name: '수1 기출 풀이 및 유형별 자료', link: 'https://bit.ly/3TpwsMG' },
      { name: '수2 기출 풀이 및 유형별 자료', link: 'https://bit.ly/41art5z' },
      // { name: '김홍종 미적분학 탐구문제', link: '' },
    ],
  },
  {
    subject: '선형대수학',
    solutions: [
      { name: '프리드버그 풀이집', link: 'https://math.berkeley.edu/~nadler/110fall2012' },
      { name: '선대군 풀이집', link: 'https://rudmath.tistory.com/48' },
    ],
  },
  {
    subject: '해석학',
    solutions: [
      { name: '김김계 풀이집', link: 'https://jsch89.tistory.com/5' },
      { name: '베이비루딘 풀이집 1', link: 'https://rudmath.tistory.com/46' },
      { name: '베이비루딘 풀이집 2', link: 'https://www.csie.ntu.edu.tw/~b89089/old/math/pma/index.html' },
    ],
  },
];

function App() {
  return (
    <div className="py-8 sm:py-12 font-sans px-4 bg-[#fbfbfb]">
      <div className="max-w-xl mx-auto w-full space-y-10">
        <header className="space-y-3">
          <h1 className="text-[2.5rem] font-extrabold">
            <img alt="soogwato-logo" src="logo.png" className="h-12 inline mx-1 pb-2"></img> 수과토 솔루션 모음집
          </h1>
          <p className="text-lg">솔루션 및 기출 문제 풀이를 분야 별로 모았습니다.</p>
        </header>
        {SubjectItems.map((item, idx) => (
          <SubjectItem key={idx} name={item.subject} item={item.solutions}></SubjectItem>
        ))}
        <footer className="mt-10 w-full border-t border-t-[#898ea4] pt-10 text-center text-sm text-gray-500">© 2023 geniusLHS</footer>
      </div>
    </div>
  );
}

export default App;
