// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/main.tsx" // main.tsx 명시적으로 추가!
  ],
  theme: {
    extend: {
      colors: {
        // 브랜드 컬러 추가
        brand: {
          primary: '#1e3a8a',    // 딥 블루
          secondary: '#06b6d4',   // 브라이트 시아니
          accent: '#0284c7',      // 중간 톤 (필요시)
        },
        // 또는 기존 blue 컬러를 오버라이드
        primary: '#1e3a8a',
        secondary: '#06b6d4',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #1e3a8a 0%, #06b6d4 100%)',
      },
    },
  },
  plugins: [],
};
