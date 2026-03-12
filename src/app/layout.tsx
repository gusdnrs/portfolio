import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google'; // 영문, 숫자 전용 폰트
import localFont from 'next/font/local'; // 한글 전용 폰트
import '../styles/globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// 영문, 숫자 전용 폰트
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
});

// 한글 전용 폰트
const pretendard = localFont({
  src: '../../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2',
  display: 'swap',
  weight: '400 920',
  variable: '--font-pretendard',
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
    icon: '/images/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} ${montserrat.variable}`}>
      <body>
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
