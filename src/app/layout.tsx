import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google'; // 영문, 숫자 전용 폰트
import '../styles/globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import ConnectingLine from '../components/common/ConnectingLine';
import GSAPProvider from '../components/common/GSAPProvider';

// 영문, 숫자 전용 폰트
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
});

// 한글 전용 폰트는 globals.css에서 CDN Subset(약 200KB)으로 로드함
// const pretendard = localFont({ ... }); // 제거됨

// 메타데이터
export const metadata: Metadata = {
  title: '임현욱 | 기획을 코드로 번역하는 퍼블리셔',
  description: '41+ 프로젝트 경험을 보유한 4년차 웹퍼블리셔 포트폴리오입니다.',
  keywords: ['임현욱', '웹퍼블리셔', '포트폴리오'],
  openGraph: {
    title: '임현욱 | 기획을 코드로 번역하는 퍼블리셔',
    description:
      '41+ 프로젝트 경험을 보유한 4년차 웹퍼블리셔 포트폴리오입니다.',
    type: 'website',
    locale: 'ko_KR',
    siteName: '임현욱 | 기획을 코드로 번역하는 퍼블리셔',
    url: 'https://hyunwook-portfolio.vercel.app/',
  },
  icons: {
    icon: '/images/logo.svg', // 643KB PNG 대신 9KB SVG 사용
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={montserrat.variable}>
      <body className="relative">
        <GSAPProvider>
          <ConnectingLine />
          <Header></Header>
          <main>{children}</main>
          <ScrollToTop />
          <Footer></Footer>
        </GSAPProvider>
      </body>
    </html>
  );
}
