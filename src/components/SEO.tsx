import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "현욱 - 프론트엔드 개발자 | React, TypeScript 전문",
  description = "병원 관리 시스템 및 웹 애플리케이션 개발 전문 프론트엔드 개발자 현욱의 포트폴리오입니다.",
  keywords = "프론트엔드 개발자, React 개발자, TypeScript, 웹 개발, 포트폴리오, 현욱",
  image = "/images/og-image.png",
  url = "https://hyeonwook-portfolio.netlify.app"
}) => {
  useEffect(() => {
    // 제목 설정
    document.title = title;
    
    // 메타 태그 설정
    const setMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // 기본 메타 태그
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    
    // Open Graph 태그
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:image', image, true);
    setMetaTag('og:url', url, true);
    setMetaTag('og:type', 'website', true);
    
    // Twitter Card 태그
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', image);
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
    
  }, [title, description, keywords, image, url]);

  return null; // 이 컴포넌트는 DOM을 렌더링하지 않음
};

export default SEO;
