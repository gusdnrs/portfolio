export default function Footer() {
  return (
    <footer className="py-20 px-5 md:px-10 border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-left">
          <p className="font-en text-xl font-black text-brand-blue-dark mb-2 tracking-tighter">IM HYUNWOOK</p>
          <p className="text-gray-400 text-sm">기획의 진심을 기술의 가치로 번역합니다.</p>
        </div>
        <div className="text-center md:text-right">
          <p className="text-sm text-gray-400 mb-1 font-en font-bold uppercase tracking-widest">Connect</p>
          <p className="text-lg font-bold text-brand-blue-dark">gusdnrs@naver.com</p>
        </div>
      </div>
      <div className="mt-12 text-center text-xs font-en text-gray-300">
        <p>© 2026 IM HYUNWOOK. All rights reserved.</p>
      </div>
    </footer>
  );
}
