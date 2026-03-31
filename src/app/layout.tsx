import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
import '../styles/globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import ConnectingLine from '../components/common/ConnectingLine';
import GSAPProvider from '../components/common/GSAPProvider';

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
  variable: '--font-pretendard',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-montserrat',
  display: 'swap',
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
