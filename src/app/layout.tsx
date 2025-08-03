import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// font variable 옵션 사용 시(권장)
const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"], // 또는 ["latin", "korean"]
  variable: "--font-noto-sans-kr", // 원하는 CSS 변수명
  weight: ["300", "400", "500", "600", "700", "900"], // 필요하다면 굵기 목록 지정
});

export const metadata: Metadata = {
  title: "임현욱 포트폴리오",
  description: "끈기로 완성하는 실무형 개발자 임현욱의 포트폴리오입니다. CMS 커스터마이즈, 그누보드5, 실전 프로젝트 경험을 담았습니다.",
  keywords: [
    "임현욱",
    "포트폴리오",
    "실무 개발자",
    "그누보드5",
    "커스터마이즈"
  ],
  openGraph: {
    title: "임현욱 포트폴리오",
    description: "끈기로 완성하는 실무형 개발자 임현욱의 포트폴리오입니다. CMS 커스터마이즈, 그누보드5, 실전 프로젝트 경험을 담았습니다.",
    url: "https://portfolio-pi-six-25b2jpx2kn.vercel.app/", // 실제 배포 도메인으로 수정
    type: "website",
    images: [
      {
        url: "/logo.png", // public 폴더 내 대표 이미지
        width: 1200,
        height: 630,
        alt: "임현욱 포트폴리오 대표 이미지"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "임현욱 포트폴리오",
    description: "끈기로 완성하는 실무형 개발자 임현욱의 포트폴리오입니다. CMS 커스터마이즈, 그누보드5, 실전 프로젝트 경험을 담았습니다.",
    images: ["/logo.png"]
  },
  icons: [
    { rel: "icon", url: "/favicon.ico" }
  ]
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKr.variable} font-pretendard`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
