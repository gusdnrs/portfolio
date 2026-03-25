import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google'; // 영문, 숫자 전용 폰트
import localFont from 'next/font/local'; // 한글 전용 폰트
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

// 한글 전용 폰트 - Subset 버전 사용 권장 (용량 최적화)
const pretendard = localFont({
  src: '../../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2',
  display: 'swap',
  weight: '450 920', // 필요한 weight 범위만 지정하여 최적화 시도
  variable: '--font-pretendard',
  preload: true,
});

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
    <html lang="ko" className={`${pretendard.variable} ${montserrat.variable}`}>
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
