module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#38b24c',    // 연두(새싹)
        'accent-yellow': '#ffd700',    // 포인트 옐로/골드
        'bg-light': '#f7ffee',         // 연한 배경
        'deep-gray': '#23272a',        // 깊은 회색 텍스트
        // 필요시 추가 컬러도 자유롭게!
      },
      fontFamily: {
        pretendard: ['Pretendard', 'Noto Sans KR', 'Arial', 'sans-serif'],
        noto: ['Noto Sans KR', 'Pretendard', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
