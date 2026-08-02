import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '@/styles/globals.css';

// Pretendard 로컬 폰트 (개별 Weight)
const pretendard = localFont({
  src: [
    {
      path: '../fonts/Pretendard-Regular.subset.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Pretendard-Medium.subset.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Pretendard-Bold.subset.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: '임현욱 | 웹 퍼블리셔 & 프론트엔드 개발자 포트폴리오',
  description:
    '5년 경력의 웹 퍼블리셔 / 프론트엔드 개발자 임현욱의 포트폴리오입니다. 37개 이상의 반응형 웹사이트 프로젝트를 수행했습니다.',
  keywords: [
    '웹 퍼블리셔',
    '프론트엔드 개발자',
    '포트폴리오',
    '임현욱',
    'React',
    'Next.js',
    '반응형 웹',
  ],
  openGraph: {
    title: '임현욱 | 웹 퍼블리셔 & 프론트엔드 개발자',
    description: '5년 경력, 37개+ 프로젝트의 웹 퍼블리셔 포트폴리오',
    type: 'website',
    locale: 'ko_KR',
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={pretendard.variable}
      suppressHydrationWarning
    >
      <head>
        {/* 다크 모드 깜빡임 방지 인라인 스크립트 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('theme');
                  if (t) document.documentElement.setAttribute('data-theme', t);
                  else document.documentElement.setAttribute('data-theme', 'dark');
                } catch(e) {}
              })();
            `,
          }}
        />
        <link rel="icon" href="/images/favicon.png" />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
