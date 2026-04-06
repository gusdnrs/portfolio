export interface Project {
  id: string;
  title: string;
  category: string[];
  contribution: string;
  period: {
    project?: string[];
    maintenance?: string;
  };
  shortDescription: string;
  tools: string[];
  image: string;
  logo?: string;
  detailImages: string[];
  longDescription: string[];
  featured?: boolean;
  websiteUrl?: string;
}

export const projects: Project[] = [
  // ------------------------------------------
  // [ FEATURED PROJECTS: 1-6 ]
  // ------------------------------------------
  {
    id: '1',
    title: '두정이진병원',
    category: ['renewal', 'maintenance'],
    contribution:
      '반응형 퍼블리싱 100% 담당. 인터랙션 구현, CMS 전용 커스텀 구축, 유지보수 퍼블리싱, SEO최적화',
    period: {
      project: ['2024.07 - 2024.08'],
      maintenance: '2021.11 - 2025.11',
    },
    shortDescription:
      '컴포넌트 모듈화와 맞춤형 CMS 구축을 통해 운영 자율성과 예약 전환율을 극대화한 소아과 웹 리뉴얼',
    tools: [
      'HTML',
      'PHP',
      'jQuery',
      'JS',
      'MySQL',
      'SCSS',
      'Gnuboard',
      'Photoshop',
    ],
    image: '/images/projects/2jin2/main.png',
    detailImages: [
      '/images/projects/2jin2/pc-01.jpg',
      '/images/projects/2jin2/pc-02.jpg',
      '/images/projects/2jin2/pc-03.jpg',
      '/images/projects/2jin2/pc-04.jpg',
      '/images/projects/2jin2/mo-01.jpg',
      '/images/projects/2jin2/mo-02.jpg',
      '/images/projects/2jin2/mo-03.jpg',
    ],
    longDescription: [
      '기존 사이트의 모바일 미지원으로 인한 이탈과 과도한 외부 유지보수 비용 지출 문제를 해결해야 했습니다. 소아과 특유의 친근한 브랜드 컨셉을 유지하며, 환자들이 자주 찾는 의료진 및 진료 시간표 정보를 가독성 있게 재배치하는 것이 핵심 과제였습니다.',
      '레이아웃을 컴포넌트 단위로 모듈화하여 퍼블리싱 생산성을 높였습니다. 메인 페이지에는 AOS 애니메이션과 슬라이더를 적용해 생동감을 더하고, 병원 스태프가 직접 정보를 수정할 수 있도록 관리자 페이지(CMS)를 전면 커스텀 구축하여 운영 자율성을 확보했습니다.',
      '체계적인 SEO 최적화로 검색 노출량과 실제 예약 전환율을 크게 개선했습니다. 높은 만족도를 바탕으로 원장님의 타 병원 추천을 받아 신규 수주 계약을 달성하는 성과를 냈으며, 리뉴얼 이후 현재까지 무장애 유지보수를 전담하고 있습니다.',
    ],
    featured: true,
    websiteUrl: 'http://www.2jin2.com/',
  },
  {
    id: '2',
    title: '기운찬한방병원',
    category: ['renewal', 'maintenance'],
    contribution:
      '반응형 퍼블리싱 100% 담당. 6종 UI 컴포넌트 모듈화, IA 재설계 기반 정보 구조 최적화, SEO최적화',
    period: {
      project: ['2023.08 - 2023.10', '2023.04 - 2023.04'],
      maintenance: '2022.09 - 2023.11',
    },
    shortDescription:
      '웹 빌더 시스템을 탈피하고 IA 재설계와 스타일 가이드 수립으로 유지보수 효율을 개선한 반응형 리뉴얼',
    tools: [
      'HTML',
      'PHP',
      'jQuery',
      'JS',
      'MySQL',
      'SCSS',
      'Gnuboard',
      'Photoshop',
    ],
    image: '/images/projects/giunchanhospital/main.png',
    detailImages: [
      '/images/projects/giunchanhospital/pc-01_v2.jpg',
      '/images/projects/giunchanhospital/pc-02_v2.jpg',
      '/images/projects/giunchanhospital/pc-03_v2.jpg',
      '/images/projects/giunchanhospital/mo-01_v2.jpg',
      '/images/projects/giunchanhospital/mo-02_v2.jpg',
      '/images/projects/giunchanhospital/mo-03_v2.jpg',
    ],
    longDescription: [
      '기존 웹 빌더 시스템의 높은 유지보수 비용 문제와 방대한 의료 데이터 이관을 해결하기 위한 전면 리뉴얼 프로젝트를 수행했습니다. 복잡하게 혼재된 의료 정보를 사용자 중심으로 재구성하여 신뢰도 높은 정보 구조(IA)를 설계하고, 수많은 서브 페이지를 효율적으로 관리할 수 있는 기술적 기반을 마련하는 것이 핵심 목표였습니다.',
      '정보 구조를 설계 단계부터 다시 정립하여 사용자 편의성을 극대화하였으며, 대규모 페이지를 일관성 있게 관리하기 위해 체계적인 스타일 가이드를 수립했습니다. 컴포넌트 단위의 모듈화 퍼블리싱을 통해 유지보수 효율을 높였고, 다양한 디바이스 환경에서 최적의 인터페이스가 출력되도록 상세한 미디어 쿼리 제어를 진행했습니다.',
      '리뉴얼 완료 후 과도하게 지출되던 유지보수 비용을 획기적으로 절감하였으며, 체계화된 시스템 덕분에 서비스 안정성이 비약적으로 향상되었습니다. 결과물에 대한 높은 만족도로 인해 프로젝트 종료 이후에도 추가 수주 및 유지보수 연장을 이끌어내는 성과를 거두었습니다.',
    ],
    featured: true,
    websiteUrl: 'http://www.giunchanhospital.co.kr/',
  },
  {
    id: '3',
    title: '주연여성의원',
    category: ['new', 'maintenance'],
    contribution:
      '반응형 퍼블리싱 100% 담당. 섬세한 인터랙션 구현, 모바일 프리미엄 UX 최적화 및 브랜드 UI 구축, SEO최적화',
    period: {
      project: ['2023.12 - 2024.01'],
      maintenance: '2023.12 - 2025.11',
    },
    shortDescription:
      '섬세한 인터랙션과 이벤트 슬라이드 팝업을 구축하여 프리미엄 브랜드 이미지를 시각화한 여성 의원 웹사이트',
    tools: ['HTML', 'PHP', 'jQuery', 'JS', 'SCSS', 'Gnuboard', 'Photoshop'],
    image: '/images/projects/juyeonclinic/main.png',
    detailImages: [
      '/images/projects/juyeonclinic/pc-01.jpg',
      '/images/projects/juyeonclinic/pc-02.jpg',
      '/images/projects/juyeonclinic/pc-03.jpg',
      '/images/projects/juyeonclinic/mo-01.jpg',
      '/images/projects/juyeonclinic/mo-02.jpg',
      '/images/projects/juyeonclinic/mo-03.jpg',
    ],
    longDescription: [
      '여성 전문 의원으로서의 신뢰감을 확보하고 고유한 브랜드 정체성을 웹상에 구현해야 하는 신규 구축 프로젝트였습니다. 환자들이 병원에 기대하는 우아하고 편안한 이미지를 시각적으로 정밀하게 녹여내어, 초기 브랜드 포지셔닝을 확고히 하는 것이 핵심 과제였습니다.',
      '병원의 브랜드 가치를 감각적인 시각화와 섬세한 동적 인터랙션으로 구현하는 데 집중했습니다. 특히 마케팅 효율을 높일 수 있도록 이벤트 슬라이드 팝업 기능을 커스텀 구축하여, 관리자가 다양한 프로모션 정보를 시각적 방해 없이 쉽게 업데이트하도록 설계했습니다.',
      '고품격 디자인과 기술력이 결합된 결과물로 런칭 이후 마케팅 활동과 연계해 사용자 유입이 원활하게 이루어졌습니다. 높은 만족도를 바탕으로 장기 유지보수 계약을 체결하였으며, 지속적인 사이트 업데이트를 전담하며 브랜드 신뢰도를 안정적으로 관리했습니다.',
    ],
    featured: true,
    websiteUrl: 'http://www.juyeonclinic.com/',
  },
  {
    id: '4',
    title: '이스트폴담우이비인후과의원',
    category: ['new'],
    contribution:
      '반응형 퍼블리싱 100% 담당. 고품질 UI 및 인터랙션 구현, SEO최적화',
    period: {
      project: ['2025.07 - 2025.07'],
    },
    shortDescription:
      '빈번한 요구사항 변경에 대응하며 단기간에 완성한 1페이지 반응형 랜딩페이지',
    tools: ['HTML', 'PHP', 'jQuery', 'JS', 'SCSS', 'Gnuboard', 'Figma'],
    image: '/images/projects/damwooent/main.png',
    detailImages: [
      '/images/projects/damwooent/pc-01.jpg',
      '/images/projects/damwooent/mo-01.jpg',
    ],
    longDescription: [
      '개원 준비 단계에서 진료 항목과 기획 내용이 수시로 변경되는 유동적인 환경 속에서 단기간에 완성도 높은 런칭 사이트를 구축해야 했습니다. 촉박한 일정에도 불구하고 병원의 핵심 진료 가치를 명확하게 전달하고, 신규 환자들이 예약과 위치 정보를 직관적으로 파악할 수 있는 고품질 반응형 랜딩페이지 제작이 시급한 상황이었습니다.',
      '기획 및 디자인 담당자와 실시간 소통 채널을 가동하여 수정 요구사항을 즉각적으로 반영하는 애자일한 작업 프로세스를 유지했습니다. 유동적인 레이아웃 변경에 유연하게 대응할 수 있도록 효율적인 스타일 구조를 설계하였으며, 원페이지 구성의 장점을 살린 부드러운 스크롤링과 직관적인 탭 UI를 구현하여 사용자 정보 접근성을 극대화했습니다.',
      '여러 차례의 급박한 기획 변경에도 불구하고 정해진 개원 일정에 맞춰 안정적으로 사이트를 오픈했습니다. 직관적으로 구성된 랜딩페이지를 통해 개원 초기 환자들의 온라인 문의와 예약 시스템 접근이 원활하게 이루어졌으며, 짧은 기간 동안 집중도 높은 작업을 수행하여 병원의 첫 디지털 브랜드 이미지를 성공적으로 안착시켰습니다.',
    ],
    featured: true,
    websiteUrl: 'http://www.damwooent.co.kr/',
  },
  {
    id: '5',
    title: '베스트연합의원',
    category: ['renewal', 'maintenance'],
    contribution:
      '반응형 퍼블리싱 100% 담당. 방문진료 예약 시스템 설계, CMS 고도화 기반 관리 효율성 개선, SEO최적화',
    period: {
      project: ['2024.02 - 2024.05'],
      maintenance: '2021.11 - 2024.10',
    },
    shortDescription:
      '방문진료 상담 신청 시스템 신규 구축과 CMS 고도화를 중심으로 한 홈페이지 전면 리뉴얼',
    tools: [
      'HTML',
      'PHP',
      'jQuery',
      'JS',
      'MySQL',
      'SCSS',
      'Gnuboard',
      'Photoshop',
    ],
    image: '/images/projects/bestunitedclinic/main_v2.png',
    detailImages: [
      '/images/projects/bestunitedclinic/pc-01_v2.jpg',
      '/images/projects/bestunitedclinic/pc-02_v2.jpg',
      '/images/projects/bestunitedclinic/pc-03_v2.jpg',
      '/images/projects/bestunitedclinic/mo-01_v2.jpg',
      '/images/projects/bestunitedclinic/mo-02_v2.jpg',
      '/images/projects/bestunitedclinic/mo-03_v2.jpg',
    ],
    longDescription: [
      '환자의 방문진료 예약 편의성을 개선하고 병원 내부 행정 시스템의 효율성을 극대화하기 위해 웹사이트 전반을 리뉴얼하고 CMS를 고도화하는 작업을 수행했습니다. 기존 시스템의 노후화로 인한 정보 관리의 어려움을 해결하고, 사용자가 복잡한 상담 신청 과정을 논리적으로 이해하며 쉽게 접근할 수 있는 환경 구축이 필요했습니다.',
      '방문진료 상담 예약 프로세스를 심층 분석하여 사용자 입력 항목을 논리적인 단계로 재구성하고 UI를 직관적으로 설계했습니다. 관리자 페이지에서 신청 데이터를 한눈에 파악하고 효율적으로 처리할 수 있도록 CMS 기능을 강화했으며, 메인 페이지에 생동감 있는 인터랙션을 추가했습니다. 클리닉별 의료 정보도 체계적으로 정리하여 정보 전달력을 높였습니다.',
      '시스템 리뉴얼 이후 예약 관리의 업무 효율성이 크게 향상되었으며, 환자들의 상담 신청 성공률 또한 대폭 증가했습니다. 기술적 완성도와 운영 편의성에 만족한 결과로 1년 이상의 유지보수 계약을 연장하였으며, 이후 타 업체로 디자인이 변경된 상황에서도 마케팅 협업을 다시 요청받을 만큼 확고한 기술적 신뢰 관계를 형성했습니다.',
    ],
    featured: true,
    websiteUrl: 'http://www.bestunitedclinic.co.kr/',
  },
  {
    id: '6',
    title: '서울에이스병원',
    category: ['maintenance'],
    contribution:
      '반응형 퍼블리싱 100% 담당. 4년 장기 운영 및 안정성 확보 전담, SEO최적화',
    period: {
      maintenance: '2021.11 - 2025.11',
    },
    shortDescription:
      '신규 상세페이지 구축과 관리자 페이지 기능 추가를 통한 대형 병원 장기 유지보수',
    tools: ['HTML', 'PHP', 'MySQL', 'jQuery', 'JS', 'CSS', 'Photoshop'],
    image: '/images/projects/ace-hospital/main.png',
    detailImages: [
      '/images/projects/ace-hospital/pc-01.jpg',
      '/images/projects/ace-hospital/pc-02.jpg',
      '/images/projects/ace-hospital/pc-03.jpg',
      '/images/projects/ace-hospital/mo-01.jpg',
      '/images/projects/ace-hospital/mo-02.jpg',
      '/images/projects/ace-hospital/mo-03.jpg',
    ],
    longDescription: [
      '의료진 프로필 및 진료 시간표 등 업데이트가 빈번한 대형 병원 특성상, 서비스 중단 없는 안정적인 운영과 진료 과목 확장에 따른 신규 상세페이지 제작이 지속적으로 요구되는 상황이었습니다. 방대한 의료 데이터의 안정성을 유지하면서도 신속한 정보 업데이트가 가능한 환경을 조성하고 장기적인 유지보수 체계를 확고히 구축해야 했습니다.',
      '병원의 요구사항에 맞춘 다수의 상세페이지를 신규 제작하면서도 전체 사이트의 통일성과 안정성을 잃지 않도록 탄탄한 구조 설계를 진행했습니다. 기존 관리자 페이지에 의료진 추가, 비급여 데이터 연동, 온라인 예약 처리 시스템 등 유동적인 데이터를 스태프가 직접 즉시 관리할 수 있는 핵심 기능들을 추가하고 개선하여 운영 편의성을 높였습니다.',
      '약 4년간의 장기 유지보수 기간 동안 단 한 차례의 큰 장애 없이 사이트를 안정적으로 운영하며 병원의 디지털 신뢰도를 확보했습니다. 지속적인 기능 고도화와 상세페이지 확장을 통해 대형 병원에 적합한 풍부한 의료 정보를 성공적으로 관리했으며, 체계화된 유지보수 프로세스를 안착시켜 운영 비용의 효율적인 관리와 서비스 개선을 달성했습니다.',
    ],
    featured: true,
    websiteUrl: 'http://ace-hospital.co.kr/',
  },
  // ------------------------------------------
  // [ SUB PROJECTS & MAINTENANCE: 7-41 ]
  // ------------------------------------------
  {
    id: '7',
    title: '목동서울정형외과의원',
    category: ['new'],
    contribution:
      '반응형 퍼블리싱 100% 담당. SEO 최적화, 특화 레이아웃 활용으로 제작 공정 단축',
    period: { project: ['2025.10 - 2025.10'] },
    shortDescription:
      '비수술 치료 전문성을 시각화하고 정보 계층 구조를 최적화한 신규 랜딩 웹사이트',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Gnuboard', 'Figma'],
    image: '/images/projects/mokdongseoul/main.png',
    detailImages: [
      '/images/projects/mokdongseoul/pc-01.jpg',
      '/images/projects/mokdongseoul/mo-01.jpg',
    ],
    logo: '/images/projects/mokdongseoul/logo.png',
    longDescription: [
      '개원을 앞두고 목동서울정형외과만의 비수술 치료 전문성을 시각화하고, 환자들에게 믿음직한 브랜드 이미지를 주며 신뢰감을 형성할 수 있는 신규 디지털 접점을 구축해야 했습니다.',
      '부드러운 슬라이드 및 동적 스크립트를 활용하여 생동감 있는 인터랙션을 구현하고, 와이드 레이아웃과 감각적 색상 배치로 방대한 의료 정보를 사용자가 직관적으로 탐색하도록 구조화했습니다.',
      '안정적인 반응형 웹 환경 구축으로 개원 초기 브랜드 인지도 안착에 기여했으며, 체계적인 검색 엔진 최적화(SEO) 전략을 통해 실질적인 환자 유입 경로를 안정적으로 확보했습니다.',
    ],
    featured: false,
    websiteUrl: 'http://www.xn--vb0b43kq8fz6g97g7kan5fh18b.com/',
  },
  {
    id: '8',
    title: '삼성동작내과의원',
    category: ['new'],
    contribution: '반응형 퍼블리싱 100% 담당. 탭 구조 인터랙션 구현, SEO최적화',
    period: { project: ['2025.10 - 2025.10'] },
    shortDescription:
      '탭 구조 레이아웃과 자동 슬라이드를 적용해 의료 콘텐츠 접근성을 높인 랜딩페이지 구축',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Gnuboard', 'Figma'],
    image: '/images/projects/samsungdongjakclinic/main.png',
    detailImages: [
      '/images/projects/samsungdongjakclinic/pc-01.jpg',
      '/images/projects/samsungdongjakclinic/mo-01.jpg',
    ],
    logo: '/images/projects/samsungdongjakclinic/logo.jpg',
    longDescription: [
      '개원을 앞두고 삼성동작내과만의 첨단 인공투석 시스템 전문성을 시각화하고, 지역 환자들에게 최고의 전문성과 신뢰감을 줄 수 있는 최적화된 디지털 접점을 구축해야 했습니다.',
      '자동 슬라이드 및 동적 스크립트를 활용하여 생동감 있는 인터랙션을 구현하고, 탭 구조의 레이아웃으로 방대한 치료 정보와 의료 콘텐츠를 사용자가 읽기 쉽도록 체계적으로 구조화했습니다.',
      '완벽한 기기별 최적화 반응형 환경 구축으로 개원 초기 브랜드 안착에 기여했으며, 철저한 메타 데이터 설계 및 검색 최적화(SEO)를 통해 실제 환자의 원활한 유입 경로를 확보했습니다.',
    ],
    featured: false,
    websiteUrl: 'https://www.samsungdongjakclinic.co.kr/',
  },
  {
    id: '9',
    title: '우리의내과의원',
    category: ['new'],
    contribution:
      '반응형 퍼블리싱 100% 담당. 디바이스 최적화 인터렉션 구현, SEO최적화',
    period: { project: ['2025.09 - 2025.09'] },
    shortDescription:
      '터치 최적화 및 Hover 인터랙션을 통해 정보 전달 효율을 극대화한 신규 웹사이트 구축',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Gnuboard', 'Figma'],
    image: '/images/projects/dr-woo/main.png',
    detailImages: [
      '/images/projects/dr-woo/pc-01.jpg',
      '/images/projects/dr-woo/mo-01.png',
    ],
    logo: '/images/projects/dr-woo/logo.png',
    longDescription: [
      '개원을 앞두고 우리의내과만의 AI 내시경 등 첨단 진단 시스템 전문성을 시각화하고, 환자들에게 지역 대표 병원으로서의 굳건한 신뢰감을 줄 수 있는 디지털 접점을 구축해야 했습니다.',
      '터치 최적화 및 Hover 동적 스크립트를 활용하여 생동감 있는 인터랙션을 구현하고, 단계적으로 노출되는 맞춤형 레이아웃으로 방대한 진료 정보를 사용자가 편안하게 탐색하도록 구조화했습니다.',
      '유동적인 반응형 웹 환경 구축으로 개원 초기 브랜드 가치 안착에 기여했으며, 사용성 중심의 최적화와 검색 최적화(SEO)를 병행하여 실제 예약 환자 유입 경로를 탄탄히 확보했습니다.',
    ],
    featured: false,
    websiteUrl: 'https://www.dr-woo.kr/',
  },
  {
    id: '10',
    title: '서울매일365의원',
    category: ['new'],
    contribution:
      '반응형 퍼블리싱 100% 담당. 카드 UI 구현, 디바이스별 최적화된 인터랙션 구현, SEO최적화',
    period: { project: ['2025.03 - 2025.03'] },
    shortDescription:
      '카드형 레이아웃과 AOS 애니메이션을 적용해 정보의 가독성을 높인 반응형 랜딩페이지 구축',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Gnuboard', 'Figma'],
    image: '/images/projects/seouleveryday365/main.png',
    detailImages: [
      '/images/projects/seouleveryday365/pc-01.jpg',
      '/images/projects/seouleveryday365/mo-01.jpg',
    ],
    logo: '/images/projects/seouleveryday365/logo.png',
    longDescription: [
      '개원을 앞두고 서울매일365의원만의 연중무휴 진료라는 전문성을 강렬하게 시각화하고, 야간이나 공휴일 방문 환자들에게 신뢰감과 편의를 줄 수 있는 디지털 접점을 신속히 구축해야 했습니다.',
      'AOS 애니메이션 및 Slick 슬라이드를 활용하여 생동감 있는 모바일 인터랙션을 구현하고, 세련된 카드형 레이아웃으로 방대한 진료 및 영양수액 정보를 사용자가 직관적으로 파악하게 구조화했습니다.',
      '디바이스별 최적화된 웹 환경 구축으로 개원 초기 프리미엄 브랜드 안착에 기여했으며, 전략적인 메타태그 및 검색 최적화(SEO)를 통해 긴급한 환자들의 실질적인 유입 경로를 확보했습니다.',
    ],
    featured: false,
    websiteUrl: 'http://www.seouleveryday365.co.kr/',
  },
  {
    id: '11',
    title: '성남센트럴안과의원',
    category: ['renewal', 'maintenance'],
    contribution:
      '반응형 퍼블리싱 100% 담당. 메인 리뉴얼, 시각적 인터랙티브 요소 활용 UX 강화, SEO최적화',
    period: {
      project: ['2025.02 - 2025.02', '2024.03 - 2024.03'],
      maintenance: '2021.11 - 2025.11',
    },
    shortDescription:
      '레거시 코드 리팩토링과 반응형 퍼블리싱을 통해 페이지 성능을 개선한 메인 페이지 리뉴얼',
    tools: ['HTML', 'PHP', 'jQuery', 'JS', 'CSS', 'Gnuboard', 'Photoshop'],
    image: '/images/projects/snceye/main_v2.png',
    detailImages: [
      '/images/projects/snceye/pc-01_v2.jpg',
      '/images/projects/snceye/pc-02.jpg',
      '/images/projects/snceye/pc-03.jpg',
      '/images/projects/snceye/mo-01_v2.jpg',
      '/images/projects/snceye/mo-02.jpg',
      '/images/projects/snceye/mo-03.jpg',
    ],
    logo: '/images/projects/snceye/logo.png',
    longDescription: [
      '기존 웹사이트의 노후화된 디자인과 복잡한 정보 구조를 개선하고, 사용자에게 최첨단 안과 의료 서비스의 신뢰감을 전달하기 위한 메인 페이지 전면 리뉴얼을 진행했습니다.',
      '비효율적인 레거시 코드를 리팩토링하고 미디어 쿼리를 활용한 반응형 웹을 구현했습니다. AOS 애니메이션을 도입해 시각적 생동감을 더하고, 정보 구조(IA)를 직관적으로 개선했습니다.',
      '로딩 속도 최적화 및 모바일 접근성 향상을 통해 사용자 체류 시간을 늘렸습니다. 2021년 11월부터 4년간 장기 유지보수를 수행하며 무장애 운영을 통해 클라이언트의 신뢰를 확보했습니다.',
    ],
    featured: false,
    websiteUrl: 'http://snceye.co.kr/',
  },
  {
    id: '12',
    title: '미아삼성정형외과의원',
    category: ['new'],
    contribution:
      '반응형 퍼블리싱 100% 담당. 카드 UI 구현, 시각적 인터랙티브 요소 활용 UX 강화, SEO최적화',
    period: { project: ['2025.02 - 2025.02'] },
    shortDescription:
      '대학교수 출신 의료진의 전문성을 부각하고 진료 카테고리를 카드형 UI로 구조화한 신규 구축',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Gnuboard', 'Figma'],
    image: '/images/projects/miasamsung/main.png',
    detailImages: [
      '/images/projects/miasamsung/pc-01.jpg',
      '/images/projects/miasamsung/mo-01.jpg',
    ],
    logo: '/images/projects/miasamsung/logo.jpg',
    longDescription: [
      '개원을 앞두고 미아삼성정형외과만의 대학교수 출신 의료진 전문성을 시각화하고, 환자들에게 강력한 신뢰감을 줄 수 있는 신규 디지털 접점을 구축해야 했습니다.',
      'Slick 슬라이더와 AOS를 활용하여 동적인 인터랙션을 구현하고, 수술 및 비수술 등 방대한 진료 카테고리를 카드형 UI로 구조화하여 사용자 정보 접근성을 획기적으로 개선했습니다.',
      '안정적인 반응형 웹 환경 구축으로 개원 초기 브랜드 안착에 기여했으며, 철저한 검색 엔진 최적화(SEO)를 통해 실제 환자 유입 경로를 안정적으로 확보하는 비즈니스 성과를 냈습니다.',
    ],
    featured: false,
    websiteUrl: 'http://www.miasamsung.co.kr/',
  },
  {
    id: '13',
    title: '올바른마디튼튼의원',
    category: ['new'],
    contribution:
      '반응형 퍼블리싱 100% 담당. 지점 특화 컴포넌트 커스터마이징, 프랜차이즈 표준 레이아웃 적용, SEO최적화',
    period: { project: ['2024.12 - 2024.12'] },
    shortDescription:
      '프랜차이즈 표준 디자인을 기반으로 지역 지점의 특화 정보를 모듈화한 반응형 웹사이트 구축',
    tools: [
      'HTML',
      'jQuery',
      'JS',
      'CSS',
      'PHP',
      'MySQL',
      'Gnuboard',
      'Photoshop',
    ],
    image: '/images/projects/allrightmadi/main.png',
    detailImages: [
      '/images/projects/allrightmadi/pc-01.jpg',
      '/images/projects/allrightmadi/pc-02.jpg',
      '/images/projects/allrightmadi/pc-03.jpg',
      '/images/projects/allrightmadi/mo-01.jpg',
      '/images/projects/allrightmadi/mo-02.jpg',
      '/images/projects/allrightmadi/mo-03.jpg',
    ],
    logo: '/images/projects/allrightmadi/logo.png',
    longDescription: [
      '프랜차이즈의 브랜드 아이덴티티를 유지하면서, 지역 거점 병원으로서 야간 진료 및 비수술 통증 치료의 전문성을 부각할 수 있는 신뢰도 높은 웹사이트를 신규 구축해야 했습니다.',
      '컴포넌트 단위의 모듈화 퍼블리싱을 활용하여 지점 특화 정보를 유연하게 커스터마이징했습니다. 방대한 의료 데이터를 직관적인 네비게이션과 카드형 레이아웃으로 체계적으로 구조화했습니다.',
      '모든 디바이스에서 완벽하게 작동하는 반응형 웹을 구축하여 사용자 편의를 높였으며, 개원 초기에 맞춘 SEO 작업을 통해 온라인 노출과 신규 환자 유입을 극대화하는 성과를 거두었습니다.',
    ],
    featured: false,
    websiteUrl: 'http://www.allrightmadi.co.kr/',
  },
  {
    id: '14',
    title: '리얼유의원',
    category: ['renewal', 'maintenance'],
    contribution:
      'index·의료진 페이지 퍼블리싱 100%. 백드롭 영상 인터랙션 구축, SEO최적화',
    period: {
      project: ['2024.06 - 2024.06'],
      maintenance: '2023.07 - 2025.11',
    },
    shortDescription:
      '백드롭 영상과 애니메이션을 활용해 피부 클리닉의 프리미엄 이미지를 강화한 웹사이트 리뉴얼',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'Photoshop'],
    image: '/images/projects/realyou/main.png',
    detailImages: [
      '/images/projects/realyou/pc-01.jpg',
      '/images/projects/realyou/pc-02.jpg',
      '/images/projects/realyou/mo-01.jpg',
      '/images/projects/realyou/mo-02.jpg',
    ],
    logo: '/images/projects/realyou/logo.png',
    longDescription: [
      '기존 사이트의 단조로움을 탈피하고, 프리미엄 피부 클리닉에 걸맞은 고급스럽고 세련된 브랜드 톤 앤 매너로 웹사이트의 시각적 체질을 개선해야 하는 리뉴얼 과제였습니다.',
      '제한적인 서버 환경을 극복하고자 유튜브 연동 방식의 고해상도 백드롭 영상을 구현하여 시각적 몰입감을 높였습니다. 섬세한 스크롤 애니메이션과 반응형 레이아웃으로 프리미엄 UX를 완성했습니다.',
      '메인 및 의료진 페이지 퍼블리싱을 전담하며 SEO 작업을 병행해 마케팅 효율을 높였습니다. 2023년 7월부터 2년 이상 유지보수를 진행하며 트래픽 관리를 안정적으로 지원하고 있습니다.',
    ],
    featured: false,
    websiteUrl: 'http://www.realyou.co.kr/',
  },
  {
    id: '15',
    title: '다정해정신건강의학과의원',
    category: ['new'],
    contribution:
      '반응형 퍼블리싱 100% 담당. 시각적 인터랙티브 요소 활용 UX 강화, SEO최적화',
    period: { project: ['2024.04 - 2024.04'] },
    shortDescription:
      '부드러운 색조와 스크롤 전환 효과를 적용하여 환자에게 편안함을 제공하는 신규 랜딩페이지 구축',
    tools: [
      'HTML',
      'jQuery',
      'JS',
      'CSS',
      'PHP',
      'MySQL',
      'Gnuboard',
      'Photoshop',
    ],
    image: '/images/projects/dajungmentalclinic/main_v2.png',
    detailImages: [
      '/images/projects/dajungmentalclinic/pc-01.jpg',
      '/images/projects/dajungmentalclinic/mo-01.jpg',
    ],
    logo: '/images/projects/dajungmentalclinic/logo.png',
    longDescription: [
      '정신건강의학과 특유의 편안하고 따뜻한 브랜드 이미지를 시각화하고, 마음의 안정을 찾는 환자들이 거부감 없이 접근할 수 있는 부드러운 디지털 랜딩페이지를 신규 구축해야 했습니다.',
      'CSS background-attachment 속성을 활용한 스크롤 전환 효과로 시각적 깊이감을 구현했습니다. 모바일 환경에 맞춘 슬라이드 인터랙션과 직관적인 네비게이션으로 정보 가독성을 높였습니다.',
      '완성도 높은 반응형 웹 구축으로 초기 브랜드 안착에 기여했습니다. 지역 내 잠재 환자를 타겟으로 한 체계적인 검색 엔진 최적화(SEO) 작업을 통해 병원 발견율을 높여 마케팅을 지원했습니다.',
    ],
    featured: false,
    websiteUrl: 'http://www.dajungmentalclinic.co.kr/',
  },
  {
    id: '16',
    title: '안양바르다정형외과의원',
    category: ['new'],
    contribution:
      '반응형 퍼블리싱 100% 담당. 시각적 인터랙티브 요소 활용 UX 강화, 방대한 의료 정보 IA 체계화, SEO최적화',
    period: { project: ['2023.11 - 2023.12'] },
    shortDescription:
      '치료 성과를 수치화된 애니메이션으로 시각화하고 정보 구조를 체계화한 반응형 웹사이트 구축',
    tools: [
      'HTML',
      'jQuery',
      'JS',
      'CSS',
      'PHP',
      'MySQL',
      'Gnuboard',
      'Photoshop',
    ],
    image: '/images/projects/bardaos/main.png',
    detailImages: [
      '/images/projects/bardaos/pc-01.jpg',
      '/images/projects/bardaos/pc-02.jpg',
      '/images/projects/bardaos/pc-03.jpg',
      '/images/projects/bardaos/mo-01.jpg',
      '/images/projects/bardaos/mo-02.jpg',
      '/images/projects/bardaos/mo-03.jpg',
    ],
    logo: '/images/projects/bardaos/logo.png',
    longDescription: [
      '안양 지역 거점 정형외과로서 다년간의 임상 경험과 치료 성과를 시각적으로 전달하고, 방문 환자들에게 높은 전문성과 신뢰감을 심어줄 수 있는 고품질 신규 웹사이트를 구축해야 했습니다.',
      'Count 애니메이션과 역동적인 백드롭 영상을 배치하여 시선을 사로잡는 인터랙션을 구현했습니다. 복잡한 진료 정보를 체계적인 정보 구조(IA)와 반응형 레이아웃으로 깔끔하게 정돈했습니다.',
      '안정적인 반응형 웹 환경을 구축하여 브랜드 인지도를 높였습니다. 또한, 전략적인 검색 엔진 최적화(SEO) 작업을 병행하여 실제 환자 유입 및 예약 문의 전환율을 크게 향상시켰습니다.',
    ],
    featured: false,
    websiteUrl: 'http://www.bardaos.co.kr/',
  },
  {
    id: '17',
    title: '서울아름산부인과의원',
    category: ['new', 'maintenance'],
    contribution:
      '반응형 퍼블리싱 100% 담당. 시각적 인터랙티브 요소 활용 UX 강화, SEO최적화',
    period: {
      project: ['2023.11 - 2023.12'],
      maintenance: '2023.11 - 2025.11',
    },
    shortDescription:
      '팝업 시스템 커스터마이징 및 모바일 최적화를 통해 운영 편의성을 강화한 신규 랜딩페이지 구축',
    tools: [
      'HTML',
      'jQuery',
      'JS',
      'CSS',
      'PHP',
      'MySQL',
      'Gnuboard',
      'Photoshop',
    ],
    image: '/images/projects/snuareum/main.png',
    detailImages: [
      '/images/projects/snuareum/pc-01.jpg',
      '/images/projects/snuareum/mo-01.jpg',
    ],
    logo: '/images/projects/snuareum/logo.png',
    longDescription: [
      '산부인과 특유의 전문적이고 프리미엄한 브랜드 정체성을 시각화하고, 환자들이 병원의 최신 시설과 의료 서비스를 신뢰할 수 있도록 세련된 디지털 접점을 신규 구축해야 했습니다.',
      '그누보드 기반의 커스텀 슬라이드 롤링 팝업 시스템을 직접 개발하여 이벤트 공지 관리의 효율성을 높였습니다. 모바일에 최적화된 유연한 반응형 레이아웃과 동적 인터랙션을 안정적으로 구현했습니다.',
      '개원 초기 온라인 가시성을 성공적으로 확보했으며, 철저한 SEO 작업으로 노출 순위를 개선했습니다. 2023년 11월부터 2년간 장기 유지보수를 담당하며 온라인 브랜드 신뢰도를 관리 중입니다.',
    ],
    featured: false,
    websiteUrl: 'http://www.snuareum.com/',
  },
  {
    id: '18',
    title: '올바른정형외과의원',
    category: ['new'],
    contribution:
      '반응형 퍼블리싱 100% 담당. 지점 특화 컴포넌트 커스터마이징, 프랜차이즈 표준 레이아웃 적용, SEO최적화',
    period: { project: ['2023.07 - 2023.07'] },
    shortDescription:
      '모듈화된 반응형 레이아웃을 통해 프랜차이즈 확장의 표준 디자인 모델을 제시한 웹사이트 구축',
    tools: [
      'HTML',
      'jQuery',
      'JS',
      'CSS',
      'PHP',
      'MySQL',
      'Gnuboard',
      'Photoshop',
    ],
    image: '/images/projects/allrightclinic/main.png',
    detailImages: [
      '/images/projects/allrightclinic/pc-01.jpg',
      '/images/projects/allrightclinic/pc-02.jpg',
      '/images/projects/allrightclinic/pc-03.jpg',
      '/images/projects/allrightclinic/mo-01.jpg',
      '/images/projects/allrightclinic/mo-02.jpg',
      '/images/projects/allrightclinic/mo-03.jpg',
    ],
    logo: '/images/projects/allrightclinic/logo.png',
    longDescription: [
      '올바른정형외과 프랜차이즈의 전국 지점 확장의 기반이 될 표준 디자인 시스템을 수립하고, 비수술 치료의 전문성을 강조하는 신뢰감 있는 디지털 접점을 신규 구축해야 했습니다.',
      '핵심 치료 성과를 동적인 Count 애니메이션으로 강조했습니다. 방대한 의료 콘텐츠를 모듈화된 반응형 레이아웃으로 구조화하여, 향후 다른 지점 확장 시 표준 모델로 채용될 수 있도록 설계했습니다.',
      '단독 퍼블리싱을 통해 완성도 높은 반응형 웹을 구축하여 환자 유입을 이끌어냈습니다. 최적화된 지역 키워드 SEO 전략으로 프랜차이즈 디지털 마케팅과 지점 확장의 성공적인 토대를 마련했습니다.',
    ],
    featured: false,
    websiteUrl: 'http://www.allrightclinic.co.kr/',
  },
  {
    id: '19',
    title: '예쁨의정석의원',
    category: ['new'],
    contribution:
      '반응형 퍼블리싱 100% 담당. 시각적 인터랙티브 요소 활용 UX 강화, SEO최적화',
    period: {
      project: ['2023.06 - 2023.06'],
      maintenance: '2023.06 - 2025.11',
    },
    shortDescription:
      '슬라이드 인터랙션과 자체 개발 롤링 팝업 기능을 적용해 운영 효율을 높인 비주얼 웹사이트 구축',
    tools: [
      'HTML',
      'jQuery',
      'JS',
      'CSS',
      'PHP',
      'MySQL',
      'Gnuboard',
      'Photoshop',
    ],
    image: '/images/projects/beautyjungsuk/main.png',
    detailImages: [
      '/images/projects/beautyjungsuk/pc-01.jpg',
      '/images/projects/beautyjungsuk/pc-02.jpg',
      '/images/projects/beautyjungsuk/pc-03.jpg',
      '/images/projects/beautyjungsuk/mo-01.jpg',
      '/images/projects/beautyjungsuk/mo-02.png',
      '/images/projects/beautyjungsuk/mo-03.jpg',
    ],
    logo: '/images/projects/beautyjungsuk/logo.png',
    longDescription: [
      '여성 타겟 피부 클리닉의 브랜드 네임에 걸맞은 프리미엄한 감성 가치를 시각화하고, 방문자의 시각적 만족도와 몰입감을 극대화할 수 있는 맞춤형 비주얼 사이트를 새롭게 구축해야 했습니다.',
      '유려한 슬라이드 인터랙션과 탭 구조를 활용해 복잡한 의료 장비 정보를 직관적으로 정리했습니다. 자체 개발한 그누보드 기반 롤링 팝업 기능으로 운영진의 이벤트 관리 편의성을 획기적으로 높였습니다.',
      '런칭 초기 검색 엔진 최적화(SEO) 전략으로 온라인 노출을 극대화했습니다. 2023년 6월부터 약 2년 5개월간 유지보수를 전담하며 트래픽 관리를 지원하고 안정적인 신뢰 관계를 이어가고 있습니다.',
    ],
    featured: false,
    websiteUrl: 'http://www.beautyjungsuk.co.kr/',
  },
  {
    id: '20',
    title: '삼성탑정형외과의원',
    category: ['new'],
    contribution:
      '반응형 퍼블리싱 100% 담당. 시각적 인터랙티브 요소 활용 UX 강화, SEO최적화',
    period: {
      project: ['2023.05 - 2023.05'],
      maintenance: '2023.05 - 2025.11',
    },
    shortDescription:
      '체계적인 탭 구조와 미디어 쿼리 최적화를 통해 정보 접근성을 개선한 반응형 웹사이트 구축',
    tools: [
      'HTML',
      'jQuery',
      'JS',
      'CSS',
      'PHP',
      'MySQL',
      'Gnuboard',
      'Photoshop',
    ],
    image: '/images/projects/dasantop/main.png',
    detailImages: [
      '/images/projects/dasantop/pc-01.jpg',
      '/images/projects/dasantop/mo-01.jpg',
    ],
    logo: '/images/projects/dasantop/logo.jpg',
    longDescription: [
      '삼성탑정형외과만의 전문적인 진료 철학과 핵심 강점을 시각화하고, 방문자들이 사이트 접속 초기부터 굳건한 신뢰감을 가질 수 있도록 체계적인 정보 계층 구조를 새롭게 설계해야 했습니다.',
      '환자들이 주로 찾는 첨단 장비와 다수의 의료진 정보를 유려한 슬라이드 및 탭 구조로 가독성 있게 정리했습니다. 정교한 미디어 쿼리 제어를 통해 모든 기기에서 고품질의 반응형 UX를 구현했습니다.',
      '완성도 높은 웹 구축과 철저한 검색 엔진 최적화(SEO)로 잠재 환자의 접근성을 대폭 강화했습니다. 2023년 5월부터 2년 6개월간 유지보수를 전담하며 장애 없는 안정적인 운영을 돕고 있습니다.',
    ],
    featured: false,
    websiteUrl: 'http://www.dasantop.co.kr/',
  },
  {
    id: '21',
    title: '올바른재활의학과의원',
    category: ['new'],
    contribution:
      '반응형 퍼블리싱 100% 담당. 시각적 인터랙티브 요소 활용 UX 강화, SEO최적화',
    period: { project: ['2023.03 - 2023.04'] },
    shortDescription:
      '카드형 레이아웃과 AOS 애니메이션을 도입해 방대한 진료 정보를 직관화한 랜딩페이지 구축',
    tools: [
      'HTML',
      'jQuery',
      'JS',
      'CSS',
      'PHP',
      'MySQL',
      'Gnuboard',
      'Photoshop',
    ],
    image: '/images/projects/allbarun365/main.png',
    detailImages: [
      '/images/projects/allbarun365/pc-01.jpg',
      '/images/projects/allbarun365/mo-01.jpg',
    ],
    logo: '/images/projects/allbarun365/logo.png',
    longDescription: [
      '지역 거점 병원으로서 다량하고 세분화된 재활의학과의 진료 정보를 직관적으로 탐색할 수 있도록 설계하고, 환자들에게 밝고 신뢰감 주는 신규 디지털 접점을 구축해야 했습니다.',
      '비수술 치료 영역에 카드형 레이아웃과 부드러운 슬라이드 인터랙션을 도입해 가독성을 개선했습니다. 스크롤에 반응하는 AOS 애니메이션을 적용해 방대한 텍스트의 시각적 피로도를 효과적으로 낮췄습니다.',
      '최상의 모바일 사용성을 보장하는 반응형 구축으로 환자 유입 확대에 기여했습니다. 각 진료 부위별 맞춤형 섹션 구성 및 체계적인 SEO 최적화 작업으로 검색 엔진 노출 빈도를 높이는 성과를 냈습니다.',
    ],
    featured: false,
    websiteUrl: 'http://www.allbarun365.co.kr/',
  },
  {
    id: '22',
    title: '탑정형외과의원',
    category: ['new'],
    contribution:
      '반응형 퍼블리싱 100% 담당. 카드 UI 구현, 시각적 인터랙티브 요소 활용 UX 강화, SEO최적화',
    period: { project: ['2022.12 - 2022.12'] },
    shortDescription:
      '풀페이지 스크롤 디자인과 동적 시각 요소를 결합해 첨단 치료 기술력을 강조한 웹사이트 구축',
    tools: [
      'HTML',
      'jQuery',
      'JS',
      'CSS',
      'PHP',
      'MySQL',
      'Gnuboard',
      'Photoshop',
    ],
    image: '/images/projects/top-orthopedic/main.png',
    detailImages: [
      '/images/projects/top-orthopedic/pc-01.jpg',
      '/images/projects/top-orthopedic/pc-02.jpg',
      '/images/projects/top-orthopedic/pc-03.jpg',
      '/images/projects/top-orthopedic/mo-01.jpg',
      '/images/projects/top-orthopedic/mo-02.jpg',
      '/images/projects/top-orthopedic/mo-03.jpg',
    ],
    logo: '/images/projects/top-orthopedic/logo.png',
    longDescription: [
      '병원의 핵심 경쟁력인 맞춤형 줄기세포 치료의 첨단 기술력을 극대화하고, 환자들에게 고품질 비주얼로 프리미엄 의료 서비스의 전문성과 신뢰감을 명확히 전달해야 하는 신규 구축 과제였습니다.',
      '비수술 치료 안내에 풀페이지(Full-Page) 스크롤 디자인 기법을 적용하여 정보의 몰입도를 대폭 향상시켰습니다. 웅장한 시각 요소와 정교한 슬라이드 시스템을 100% 단독으로 완벽히 구현했습니다.',
      '모든 디바이스에서 풀페이지 인터랙션이 에러 없이 작동하도록 세밀하게 반응형 최적화를 진행했습니다. 철저한 SEO 전략 덕분에 오픈 이후 실제 환자들의 예약 문의가 크게 증가하는 성과를 창출했습니다.',
    ],
    featured: false,
    websiteUrl: 'http://top-orthopedic.clinic/',
  },
  {
    id: '23',
    title: '성모김내과의원',
    category: ['new'],
    contribution:
      '반응형 퍼블리싱 100% 담당. 건강검진 중심 메뉴 구조화 및 소화기내과 전문성 부각 UI 구축, SEO최적화',
    period: { project: ['2022.08 - 2022.08'] },
    shortDescription:
      '건강검진 메뉴를 연령 및 상태에 맞게 체계화하고 의료진 프로필을 전면에 배치한 사이트 구축',
    tools: [
      'HTML',
      'jQuery',
      'JS',
      'CSS',
      'PHP',
      'MySQL',
      'Gnuboard',
      'Photoshop',
    ],
    image: '/images/projects/endo5575/main.png',
    detailImages: [
      '/images/projects/endo5575/pc-01.jpg',
      '/images/projects/endo5575/pc-02.jpg',
      '/images/projects/endo5575/pc-03.jpg',
      '/images/projects/endo5575/mo-01.jpg',
      '/images/projects/endo5575/mo-02.png',
      '/images/projects/endo5575/mo-03.png',
    ],
    logo: '/images/projects/endo5575/logo.png',
    longDescription: [
      '의료진의 풍부한 임상 경험과 소화기내과의 전문성을 전면에 내세워, 환자들에게 깊은 신뢰감을 주고 건강검진 정보를 쉽게 확인할 수 있는 내과 맞춤형 신규 웹사이트를 구축해야 했습니다.',
      '주치의 이력을 메인 히어로 영역에 배치해 신뢰도를 높이고, 건강검진 프로그램을 연령 및 상태에 맞게 탭 구조로 체계화했습니다. 섬세한 AOS 애니메이션 효과로 의료 정보의 시각적 리듬감을 살렸습니다.',
      "정밀한 반응형 퍼블리싱 구현으로 브랜드 이미지 강화에 기여했습니다. '내과', '검진' 키워드 중심의 SEO 최적화 작업을 병행하여 실제 예약 문의 증대와 병원의 마케팅적 성장을 이끌어냈습니다.",
    ],
    featured: false,
    websiteUrl: 'http://www.endo5575.com/',
  },
  {
    id: '24',
    title: '태전튼튼정형외과의원',
    category: ['new'],
    contribution:
      '반응형 퍼블리싱 100% 담당. 카드 UI 구현, 시각적 인터랙티브 요소 활용 UX 강화, 네이버예약 연동, SEO최적화',
    period: { project: ['2022.07 - 2022.07'] },
    shortDescription:
      '와이드 프레임과 CountUp 애니메이션으로 치료 성과를 수치화한 정형외과 랜딩페이지 구축',
    tools: [
      'HTML',
      'jQuery',
      'JS',
      'CSS',
      'PHP',
      'MySQL',
      'Gnuboard',
      'Photoshop',
    ],
    image: '/images/projects/tjtt/main.png',
    detailImages: [
      '/images/projects/tjtt/pc-01.jpg',
      '/images/projects/tjtt/mo-01.jpg',
    ],
    logo: '/images/projects/tjtt/logo.jpg',
    longDescription: [
      '태전 지역 거점 정형외과로서 비수술 치료의 권위와 누적 치료 경험을 시각적으로 증명하고, 개방감 있는 디자인으로 방문 환자에게 쾌적한 첫인상을 줄 수 있는 디지털 랜딩페이지를 구축해야 했습니다.',
      '와이드 프레임과 직관적인 카드형 UI로 진료 과목을 정리했습니다. 시술 누적 건수 등 핵심 성과 지표를 CountUp 애니메이션으로 동적 강조하여 병원의 전문성을 명확한 데이터로 증명하도록 구조화했습니다.',
      '네이버 예약 시스템 연동을 통한 환자 접근성 극대화로 실질적인 방문 전환율을 높였습니다. 최적화된 반응형 웹과 철저한 검색 엔진 최적화(SEO) 전략으로 개원 초기 안정적인 환자 기반 확보에 기여했습니다.',
    ],
    featured: false,
    websiteUrl: 'http://www.tjtt.co.kr/',
  },
  {
    id: '25',
    title: '강동모커리한방병원',
    category: ['new'],
    contribution:
      '반응형 퍼블리싱 100% 담당. 단기 프로모션 전용 레이아웃 구축, SEO최적화',
    period: { project: ['2022.07 - 2022.07'] },
    shortDescription:
      '실시간 DB 연동 상담 폼과 모바일 터치 최적화를 적용한 교통사고 클리닉 프로모션 페이지 구축',
    tools: [
      'HTML',
      'jQuery',
      'JS',
      'CSS',
      'PHP',
      'MySQL',
      'Gnuboard',
      'Photoshop',
    ],
    image: '/images/projects/mokhuri/main.png',
    detailImages: [
      '/images/projects/mokhuri/pc-01.jpg',
      '/images/projects/mokhuri/mo-01.jpg',
    ],
    logo: '/images/projects/mokhuri/logo.jpg',
    longDescription: [
      '기존 메인 사이트와 분리하여 교통사고 클리닉 마케팅에 특화된 프로모션 페이지를 구축하고, 잠재 고객들이 쉽고 빠르게 치료 시스템을 이해하며 상담을 신청할 수 있도록 유도해야 했습니다.',
      '모바일 사용자 비중을 고려해 터치 UI 최적화에 주력했습니다. 유입된 사용자 데이터를 백엔드 관리자 DB와 실시간 연동하는 직관적인 진료 상담 문의 폼을 직접 개발해 병원 운영진의 편의성을 높였습니다.',
      '빠른 페이지 로딩 속도 유지 및 프로모션 타겟 키워드 SEO 최적화를 통해 사용자 이탈을 최소화했습니다. 런칭 이후 상담 예약 전환율을 극대화하며 비즈니스 목표를 달성하는 실질적인 마케팅 성과를 창출했습니다.',
    ],
    featured: false,
    websiteUrl: '',
  },
  {
    id: '26',
    title: '서울청정신건강의학과의원',
    category: ['new'],
    contribution:
      '반응형 퍼블리싱 100% 담당. 멀티 브랜치 네비게이션 구현 및 지점별 카테고리 구조화, SEO최적화',
    period: {
      project: ['2022.07 - 2022.08'],
      maintenance: '2022.07 - 2025.11',
    },
    shortDescription:
      '진료 카테고리 세분화와 유연한 슬라이드 효과를 통해 방대한 정보를 정돈한 대형 웹사이트 구축',
    tools: [
      'HTML',
      'jQuery',
      'JS',
      'CSS',
      'PHP',
      'MySQL',
      'Gnuboard',
      'Photoshop',
    ],
    image: '/images/projects/bluementalclinic/main.png',
    detailImages: [
      '/images/projects/bluementalclinic/pc-01.jpg',
      '/images/projects/bluementalclinic/pc-02.jpg',
      '/images/projects/bluementalclinic/pc-03.jpg',
      '/images/projects/bluementalclinic/mo-01.jpg',
      '/images/projects/bluementalclinic/mo-02.png',
      '/images/projects/bluementalclinic/mo-03.png',
    ],
    logo: '/images/projects/bluementalclinic/logo.png',
    longDescription: [
      '정신건강의학과 특유의 편안함을 주는 부드러운 디자인 톤을 확립하고, 방문자들이 방대한 진료 정보를 혼선 없이 쉽게 탐색할 수 있는 14페이지 규모의 대형 웹사이트를 신규 구축해야 했습니다.',
      '복잡한 진료 카테고리를 직관적인 단계별 UI로 세분화하고, 다수의 전문의 프로필을 유연한 슬라이드 효과로 정리했습니다. AOS 스크롤 애니메이션을 통해 시각적 피로도 없이 핵심 정보만을 노출했습니다.',
      '최초의 100% 모바일 반응형 구축을 단독 완수하여 잠재 환자 유입을 유의미하게 성장시켰습니다. 2022년 7월부터 3년 4개월간 유지보수 계약을 이어가며 병원의 디지털 성장을 이끄는 파트너로 활약했습니다.',
    ],
    featured: false,
    websiteUrl: 'http://www.bluementalclinic.co.kr/',
  },
  {
    id: '27',
    title: '청담더유외과의원',
    category: ['maintenance'],
    contribution: '메인 퍼블리싱 100%, SEO최적화',
    period: { project: ['2022.05 - 2022.05'] },
    shortDescription:
      '애니메이션 효과와 모바일 가독성 개선을 중심으로 진행한 프리미엄 외과 웹사이트 메인 리뉴얼',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'Photoshop'],
    image: '/images/projects/theubreast/main.png',
    detailImages: [
      '/images/projects/theubreast/pc-01.jpg',
      '/images/projects/theubreast/pc-02.jpg',
      '/images/projects/theubreast/pc-03.jpg',
      '/images/projects/theubreast/mo-01.jpg',
      '/images/projects/theubreast/mo-02.png',
      '/images/projects/theubreast/mo-03.png',
    ],
    logo: '/images/projects/theubreast/logo.png',
    longDescription: [
      '기존 브랜드의 프리미엄 아이덴티티를 유지하면서, 현대 웹 트렌드에 맞춰 노후화된 메인 UI를 개선하고 모바일 환경에서 사용자의 가독성과 편의성을 대폭 끌어올려야 하는 과제가 있었습니다.',
      '메인 페이지 퍼블리싱을 전담하며 AOS 스크롤 애니메이션을 적용해 시각적 생동감을 부여했습니다. 텍스트와 이미지 배치를 모바일에 맞춰 정밀하게 조정하고 지속적인 크로스 브라우징 테스트를 거쳤습니다.',
      '꾸준한 검색 엔진 최적화(SEO) 관리를 통해 온라인 가시성을 방어하고 예약 문의 전환 경로를 성공적으로 개선했습니다. 안정적인 운영 지원을 통해 프리미엄 의료 서비스의 브랜드 가치를 지속적으로 지켜냈습니다.',
    ],
    featured: false,
    websiteUrl: 'https://www.theubreast.co.kr/',
  },
  {
    id: '28',
    title: '나이스병원',
    category: ['new', 'maintenance'],
    contribution:
      '메인 및 전 서브페이지 퍼블리싱 70%, 타 팀과의 능동적 소통 기반 대규모 리뉴얼 완수, SEO최적화',
    period: {
      project: ['2022.01 - 2022.06'],
      maintenance: '2022.01 - 2023.04',
    },
    shortDescription:
      '전체 서브페이지 반응형 퍼블리싱과 체계적 정보 구조 설계로 완성한 대형 병원 신규 웹사이트',
    tools: [
      'HTML',
      'PHP',
      'jQuery',
      'JS',
      'MySQL',
      'SCSS',
      'Gnuboard',
      'Photoshop',
    ],
    image: '/images/projects/nicehospital/main.png',
    detailImages: [
      '/images/projects/nicehospital/pc-01.png',
      '/images/projects/nicehospital/pc-02.jpg',
      '/images/projects/nicehospital/pc-03.jpg',
      '/images/projects/nicehospital/mo-01.png',
      '/images/projects/nicehospital/mo-02.jpg',
      '/images/projects/nicehospital/mo-03.jpg',
    ],
    logo: '/images/projects/nicehospital/logo_v2.png',
    longDescription: [
      '대형 병원에 적합한 무게감 있고 신뢰도 높은 디자인 아이덴티티를 확립하며, 방대한 다과 진료 정보를 직관적으로 습득할 수 있는 사용자 중심의 디지털 접점을 신규 구축해야 했습니다.',
      '70% 기여도로 전체 서브페이지 반응형 퍼블리싱을 전담했습니다. 사내외 기획, 디자인 팀과 능동적으로 소통하며, 정보 구조(IA)를 체계적으로 재설계해 끊김 없는 사용자 경험(UX)을 성공적으로 구현했습니다.',
      '대규모 웹사이트 런칭 후 약 1년 3개월간 유지보수를 전담하며 트래픽을 안정적으로 관리했습니다. 체계적인 SEO 지원으로 대형 병원에 걸맞은 초기 브랜드 안착 및 온라인 가시성 확보에 크게 기여했습니다.',
    ],
    featured: false,
    websiteUrl: 'https://www.nice-hospital.com/',
  },
  {
    id: '29',
    title: '캠프나인치과의원',
    category: ['renewal'],
    contribution: '퍼블리싱 100%, SEO최적화',
    period: { project: ['2021.11 - 2021.12'] },
    shortDescription:
      '진료 과목을 카드형 레이아웃으로 개편하고 당일 예약 기능을 직관화한 치과 웹사이트 리뉴얼',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'Photoshop'],
    image: '/images/projects/camp9dental/main.png',
    detailImages: [
      '/images/projects/camp9dental/pc-01.jpg',
      '/images/projects/camp9dental/pc-02.jpg',
      '/images/projects/camp9dental/pc-03.jpg',
      '/images/projects/camp9dental/mo-01.jpg',
      '/images/projects/camp9dental/mo-02.jpg',
      '/images/projects/camp9dental/mo-03.jpg',
    ],
    logo: '/images/projects/camp9dental/logo.png',
    longDescription: [
      "삼성서울병원 출신 원장의 전문성과 '30년 경력의 토탈케어'라는 핵심 신뢰 지표를 부각하지 못하는 기존 노후화된 사이트의 문제를 해결하고, 프리미엄 치과 이미지로의 체질 개선이 시급했습니다.",
      '세분화된 진료 과목을 현대적인 카드형 레이아웃으로 개편하고, 당일 예약 및 첨단 장비 안내를 직관적인 아이콘으로 시각화했습니다. 스크롤 인터랙션과 반응형 퍼블리싱 기술을 완벽하게 결합했습니다.',
      '정보 가독성 향상과 모바일 접근성 개선을 통해 사이트 내 사용자 체류 시간을 늘렸습니다. 리뉴얼 이후 철저한 SEO 최적화로 검색 엔진 노출 순위를 개선하여 신규 환자 유입을 활성화하는 성과를 거두었습니다.',
    ],
    featured: false,
    websiteUrl: 'http://camp9dental.co.kr/',
  },
  {
    id: '30',
    title: '튼튼병원',
    category: ['renewal', 'maintenance'],
    contribution:
      '서버 이전 총괄 및 데이터 검수, AI 디자인 활용 관리자 페이지 리뉴얼 퍼블리싱 100%',
    period: {
      project: ['2025.06 - 2025.06', '2024.10 - 2024.12'],
      maintenance: '2021.11 - 2025.11',
    },
    shortDescription:
      '방대한 데이터 이관 및 AI 툴 기반의 관리자 페이지(CMS) 고도화를 완수한 대규모 시스템 리뉴얼',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Photoshop'],
    image: '/images/projects/tntnhospital/main_v2.png',
    detailImages: [
      '/images/projects/tntnhospital/pc-01.png',
      '/images/projects/tntnhospital/pc-02.png',
      '/images/projects/tntnhospital/pc-03.png',
    ],
    logo: '/images/projects/tntnhospital/logo.png',
    longDescription: [
      '10년 이상 누적되어 지점별로 혼재된 방대한 병원 데이터의 구조적 한계를 해결하고, 시스템의 완전한 분리 및 최신 웹 트렌드에 맞는 인프라 개선과 관리자 페이지 고도화가 시급했습니다.',
      '수만 건의 DB를 수작업 검증으로 경량화하고 레거시를 리팩토링했습니다. AI 디자인 툴을 활용해 관리자 페이지(CMS) UI를 현대적으로 직접 디자인하고 100% 퍼블리싱하여 병원 스태프의 업무 효율을 높였습니다.',
      '데이터 유실 없이 대규모 리뉴얼을 완수하여 웹 보안성과 확장성을 동시에 확보했습니다. 2021년 11월부터 4년간 단 한 차례의 큰 장애 없이 유지보수를 운영하며 기술 파트너로서 확고한 신뢰를 구축했습니다.',
    ],
    featured: false,
    websiteUrl: 'http://www.tntnhospital.co.kr/',
  },
  {
    id: '31',
    title: '청담튼튼병원',
    category: ['renewal', 'maintenance'],
    contribution:
      '메인 페이지 퍼블리싱 100%. 4년 장기 유지보수 전담, 진료 일정 및 이벤트 실시간 대응, SEO최적화',
    period: {
      project: ['2025.06 - 2025.06', '2023.10 - 2023.10'],
      maintenance: '2021.11 - 2025.11',
    },
    shortDescription:
      '코드 리팩토링과 반응형 UI 개편으로 페이지 속도와 모바일 편의성을 높인 본원 메인 웹사이트 리뉴얼',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Photoshop'],
    image: '/images/projects/chamtntn/main.png',
    detailImages: [
      '/images/projects/chamtntn/pc-01.jpg',
      '/images/projects/chamtntn/pc-02.jpg',
      '/images/projects/chamtntn/pc-03.jpg',
      '/images/projects/chamtntn/mo-01.jpg',
      '/images/projects/chamtntn/mo-02.jpg',
      '/images/projects/chamtntn/mo-03.jpg',
    ],
    logo: '/images/projects/chamtntn/logo.jpg',
    longDescription: [
      '청담 본원다운 무게감과 세련미를 확보하지 못한 기존 사이트의 UI를 개선하고, 대규모 트래픽 환경에서도 최상의 성능과 속도를 안정적으로 유지할 수 있도록 프론트엔드 최적화 작업이 필요했습니다.',
      '비효율적인 레거시 코드를 리팩토링하고 AOS 인터랙션과 슬라이드 기능을 활용해 방대한 의료 콘텐츠를 가독성 좋게 재배치했습니다. 정교한 미디어 쿼리 제어로 완벽한 모바일 반응형 UX를 구현했습니다.',
      '로딩 속도 최적화 및 지속적인 SEO 전략 수행으로 주요 키워드 점유율을 대폭 높였습니다. 4년간 실시간 이벤트 및 진료 일정 업데이트를 무결점으로 유지보수하며 본원의 디지털 브랜드 신뢰도를 지켰습니다.',
    ],
    featured: false,
    websiteUrl: 'http://www.chamtntn.co.kr/',
  },
  {
    id: '32',
    title: '청담튼튼병원 단일공복강경센터',
    category: ['renewal', 'maintenance'],
    contribution:
      '메인 및 게시판 전체 리뉴얼 퍼블리싱 100%, 웹·모바일 별도 최적화, 4년 장기 유지보수 전담, SEO최적화',
    period: {
      project: ['2024.02 - 2024.02'],
      maintenance: '2021.11 - 2025.11',
    },
    shortDescription:
      '기기별 분리 퍼블리싱을 통해 모바일 접근성과 고난도 시술의 신뢰도를 강화한 센터 웹사이트 리뉴얼',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Photoshop'],
    image: '/images/projects/spltntn/main.png',
    detailImages: [
      '/images/projects/spltntn/pc-01.jpg',
      '/images/projects/spltntn/mo-01.jpg',
    ],
    logo: '/images/projects/spltntn/logo.jpg',
    longDescription: [
      '국내 최다 수술 이력이라는 강력한 신뢰 지표를 효과적으로 전달하지 못하는 기존 UI를 개편하고, 고난도 시술의 정교함과 전문성을 직관적으로 시각화하는 디자인 체질 개선이 시급히 요구되었습니다.',
      '웹과 모바일 환경을 각각 타겟팅한 분리 퍼블리싱 기법을 적용해 기기별 최적화된 터치 인터랙션을 구현했습니다. AOS 애니메이션을 도입해 센터의 주요 성과와 치료 과정을 드라마틱하게 연출했습니다.',
      '디바이스별 사용성 개선으로 사이트 이탈률을 낮췄습니다. 철저한 타겟 시술 키워드 SEO 작업과 4년간의 유지보수 지원을 통해 검색 유입량을 지속 성장시키며 예약 문의가 증가하는 마케팅 성과를 거두었습니다.',
    ],
    featured: false,
    websiteUrl: 'http://www.spltntn.co.kr/',
  },
  {
    id: '33',
    title: '청담튼튼병원 정맥관절이야기',
    category: ['renewal', 'maintenance'],
    contribution:
      '반응형 퍼블리싱 100% 담당. 시각적 인터랙티브 요소 활용 UX 강화, SEO최적화, 치료후기 게시판 연동, 4년 장기 유지보수 전담',
    period: {
      project: ['2023.05 - 2023.05'],
      maintenance: '2021.11 - 2025.11',
    },
    shortDescription:
      '실제 치료 후기 게시판을 메인에 연동하여 환자의 공감과 신뢰를 이끌어낸 인터랙티브 웹사이트 리뉴얼',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Photoshop'],
    image: '/images/projects/veinjointtntn/main.png',
    detailImages: [
      '/images/projects/veinjointtntn/pc-01.jpg',
      '/images/projects/veinjointtntn/mo-01.jpg',
    ],
    logo: '/images/projects/veinjointtntn/logo.png',
    longDescription: [
      '치료의 효용성을 시각적으로 체감하기 어려운 기존 사이트를 개선하여, 환자들의 생생한 실제 치료 후기를 전면에 부각하고 공감과 신뢰를 이끌어낼 수 있는 인터랙티브한 UI 개편이 시급했습니다.',
      '기존 레거시를 걷어내고 치료 후기 게시판과 메인 인터페이스를 기술적으로 견고하게 연동했습니다. AOS 애니메이션과 유연한 반응형 레이아웃을 도입해 방대한 의료 정보를 시각적 피로 없이 노출했습니다.',
      '공감형 UI 개편으로 체류 시간을 증대시켰습니다. 4년간 안정적인 콘텐츠 업데이트와 보안 관리를 전담해 신뢰도를 구축했으며, 철저한 SEO 최적화를 통해 신규 환자 유입이 활성화되는 선순환 구조를 완성했습니다.',
    ],
    featured: false,
    websiteUrl: 'http://www.veinjointtntn.co.kr/',
  },
  {
    id: '34',
    title: '청담튼튼병원 키우리성장클리닉',
    category: ['renewal', 'maintenance'],
    contribution:
      '메인 리뉴얼 퍼블리싱 100%, 웹·모바일 별도 최적화, SEO최적화, 4년 장기 유지보수 전담',
    period: {
      project: ['2023.04 - 2023.04'],
      maintenance: '2021.11 - 2025.11',
    },
    shortDescription:
      '친근한 디자인 톤 앤 매너와 모바일 탭 인터랙션을 적용해 부모 타겟 사용성을 개선한 웹사이트 리뉴얼',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Photoshop'],
    image: '/images/projects/hightntn/main_v2.png',
    detailImages: [
      '/images/projects/hightntn/pc-01.jpg',
      '/images/projects/hightntn/mo-01.jpg',
    ],
    logo: '/images/projects/hightntn/logo.png',
    longDescription: [
      '성장기 아이들과 부모 타겟의 성향을 고려하지 않은 딱딱한 기존 사이트를 탈피하고, 따뜻하고 친근한 분위기로 클리닉만의 독창적인 브랜드 톤 앤 매너를 재정립하는 맞춤형 리뉴얼이 필요했습니다.',
      '웹과 모바일 사용자 행동 패턴에 맞춘 분리 퍼블리싱을 적용했습니다. 복잡한 검사 항목과 치료 과정 정보를 가독성 높은 탭과 슬라이드 인터랙션으로 깔끔하게 정리해 모바일 사용자 경험(UX)을 대폭 높였습니다.',
      '모바일 접근성 향상으로 이탈률을 크게 낮췄으며, 관련 키워드 SEO 작업을 통해 주요 검색어 점유율을 높였습니다. 4년간 실시간 이벤트 관리를 완벽히 수행하며 부모들이 신뢰하는 웹 환경을 유지해 왔습니다.',
    ],
    featured: false,
    websiteUrl: 'http://www.hightntn.co.kr/',
  },
  {
    id: '35',
    title: '동대문참튼튼병원',
    category: ['maintenance'],
    contribution:
      '메인 페이지 퍼블리싱 100%. 3년 장기 유지보수 전담, 성장클리닉·도수·건강검진 신규 섹션 구축, SEO최적화',
    period: {
      project: ['2024.12 - 2024.12', '2022.04 - 2022.04'],
      maintenance: '2021.11 - 2024.12',
    },
    shortDescription:
      '성장클리닉 등 신규 센터 섹션을 모듈화 구축하고 안정적인 트래픽 방어를 수행한 장기 유지보수 프로젝트',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Photoshop'],
    image: '/images/projects/jangantntn/main.png',
    detailImages: [
      '/images/projects/jangantntn/pc-01.jpg',
      '/images/projects/jangantntn/pc-02.jpg',
      '/images/projects/jangantntn/pc-03.jpg',
      '/images/projects/jangantntn/mo-01.jpg',
      '/images/projects/jangantntn/mo-02.jpg',
      '/images/projects/jangantntn/mo-03.jpg',
    ],
    logo: '/images/projects/jangantntn/logo.png',
    longDescription: [
      '다년간 운영하며 지속적으로 확장되는 다과 진료 센터(성장클리닉, 도수 등)의 신규 섹션을 적시에 구축하고, 대형 병원에 걸맞은 무결점 서비스 안정성과 사이트 트래픽 방어를 상시 유지해야 했습니다.',
      '빈번한 페이지 추가 요청에 대응하여 분야별 서브 섹션을 독립적인 컴포넌트로 구조화해 퍼블리싱 시스템을 효율화했습니다. 아이콘과 카드 UI를 적극 활용해 텍스트 가독성을 높이고 크로스 브라우징을 확보했습니다.',
      '약 3년 1개월간 무장애 운영을 달성하며 굳건한 신뢰 관계를 구축하였습니다. 체계화된 SEO 분석과 마케팅 자산 연동을 통해 동대문 지역 대표 병원으로서의 디지털 경쟁력과 예약 전환율을 안정적으로 지켜냈습니다.',
    ],
    featured: false,
    websiteUrl: 'https://www.jangantntn.co.kr/',
  },
  {
    id: '36',
    title: '의정부참튼튼병원',
    category: ['renewal', 'maintenance'],
    contribution:
      '퍼블리싱 100%, 웹/모바일 별도 최적화, SEO최적화, 4년 장기 유지보수 전담',
    period: { maintenance: '2021.11 - 2025.11' },
    shortDescription:
      '주요 진료 과목을 직관적인 아이콘 카드 UI로 재배치하여 원스톱 진료 시스템을 강조한 웹사이트 리뉴얼',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Photoshop'],
    image: '/images/projects/uijeongbutntn/main.png',
    detailImages: [
      '/images/projects/uijeongbutntn/pc-01.jpg',
      '/images/projects/uijeongbutntn/pc-02.jpg',
      '/images/projects/uijeongbutntn/pc-03.jpg',
      '/images/projects/uijeongbutntn/mo-01.jpg',
      '/images/projects/uijeongbutntn/mo-02.jpg',
      '/images/projects/uijeongbutntn/mo-03.jpg',
    ],
    logo: '/images/projects/uijeongbutntn/logo.png',
    longDescription: [
      '여러 센터의 원스톱 진료 시스템이 직관적으로 보이지 않는 기존 UI를 개선하고, 의정부 지역 거점 병원으로서의 권위와 신뢰를 강조하는 현대적이고 세련된 디지털 이미지로의 체질 개선이 시급했습니다.',
      '6개 주요 진료 과목을 직관적인 아이콘 카드 UI로 재배치하여 당일 검사부터 치료까지의 프로세스를 명확히 했습니다. AOS 애니메이션과 반응형 퍼블리싱으로 텍스트 계층 구조를 다듬고 가독성을 획기적으로 높였습니다.',
      '원활한 모바일 접근성 최적화를 통해 사이트 체류 시간을 크게 늘렸으며, 의정부 지역 키워드 중심의 SEO 강화로 실질적 내원 유입을 극대화했습니다. 4년간 장애 없이 무결점 운영을 전담하며 역량을 증명했습니다.',
    ],
    featured: false,
    websiteUrl: 'http://www.uijeongbutntn.co.kr/',
  },
  {
    id: '37',
    title: '노원참튼튼병원',
    category: ['maintenance'],
    contribution:
      '퍼블리싱 100%, 웹/모바일 별도 최적화, SEO최적화, 4년 장기 유지보수 전담',
    period: {
      project: ['2023.05 - 2023.05'],
      maintenance: '2021.11 - 2025.11',
    },
    shortDescription:
      '빈번한 진료 일정 변경과 휴원 안내 팝업까지 신속 대응하며 전 수명 주기를 관리한 웹사이트 유지보수',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Photoshop'],
    image: '/images/projects/nowontntn/main.png',
    detailImages: [
      '/images/projects/nowontntn/pc-01.jpg',
      '/images/projects/nowontntn/mo-01.jpg',
    ],
    logo: '/images/projects/nowontntn/logo.jpg',
    longDescription: [
      '장기간 운영하며 진료시간 및 이벤트 변경 등 빈번한 운영진 요청에 즉각 대응하고, 2026년 2월 최종 휴원 결정 시점까지 서비스 중단 없는 안정성과 정확한 환자 정보 전달을 완벽하게 보장해야 했습니다.',
      '상시 업데이트 요구사항을 체계화하여 우선 처리하고, 정교한 반응형 기술로 모바일 가독성을 방어했습니다. 특히 휴원 안내 및 의무기록 발급 팝업 등 필수 정보를 누락 없이 신속하게 UI에 반영하여 환자 혼선을 최소화했습니다.',
      '4년에 걸쳐 사이트 오픈부터 휴원까지 전 수명 주기를 무결점 보안으로 철저히 관리했습니다. 축적된 운영 대응 노하우를 통해 대형 병원 유지보수 관리에 특화된 전문 퍼블리싱 및 위기 대응 역량을 입증했습니다.',
    ],
    featured: false,
    websiteUrl: 'http://www.nowontntn.co.kr/nowon_new/index.php',
  },
  {
    id: '38',
    title: '구로참튼튼병원',
    category: ['new', 'maintenance'],
    contribution:
      '퍼블리싱 100%, 웹/모바일 별도 최적화, SEO최적화, 4년 장기 유지보수 전담',
    period: {
      project: ['2025.01 - 2025.02', '2024.09 - 2024.09', '2023.08 - 2023.08'],
      maintenance: '2021.11 - 2025.11',
    },
    shortDescription:
      '본관과 신관의 방대한 의료 콘텐츠를 반응형 컴포넌트로 구조화하고 장기 운영을 완수한 웹사이트 구축',
    tools: [
      'HTML',
      'jQuery',
      'JS',
      'CSS',
      'PHP',
      'MySQL',
      'Gnuboard',
      'Photoshop',
    ],
    image: '/images/projects/gurotntn/main.png',
    detailImages: [
      '/images/projects/gurotntn/pc-01.jpg',
      '/images/projects/gurotntn/pc-02.jpg',
      '/images/projects/gurotntn/pc-03.jpg',
      '/images/projects/gurotntn/mo-01.jpg',
      '/images/projects/gurotntn/mo-02.jpg',
      '/images/projects/gurotntn/mo-03.jpg',
    ],
    logo: '/images/projects/gurotntn/logo.jpg',
    longDescription: [
      '개원을 앞두고 척추·관절 본관과 건강검진 중심 신관의 방대한 다과 진료 정보를 사용자가 혼선 없이 탐색할 수 있도록, 세련된 디자인과 신뢰도를 갖춘 대규모 디지털 접점을 체계적으로 신규 구축해야 했습니다.',
      '본관과 신관의 정보를 논리적으로 분리하고, 직관적인 아이콘과 AOS 애니메이션 중심의 반응형 UI로 복잡한 의료 콘텐츠를 구조화했습니다. 진료 과목 확장에 맞춰 신규 컴포넌트를 기민하게 추가 개발했습니다.',
      '안정적인 반응형 웹 환경 구축으로 런칭 초기 구로 지역 기반의 브랜드 안착에 크게 기여했습니다. 철저한 SEO 전략과 4년간의 무결점 유지보수 운영을 통해 잠재 환자 유입을 지속적으로 성장시키는 성과를 냈습니다.',
    ],
    featured: false,
    websiteUrl: 'http://www.gurotntn.co.kr/',
  },
  {
    id: '39',
    title: '대구참튼튼병원',
    category: ['renewal', 'maintenance'],
    contribution:
      '퍼블리싱 100%, 웹/모바일 별도 최적화, SEO최적화, 유지보수 전담',
    period: {
      project: ['2023.10 - 2023.10'],
      maintenance: '2021.11 - 2023.10',
    },
    shortDescription:
      '의료진 프로필과 비수술 치료 원칙을 전면에 내세워 모바일 정보 탐색 편의성을 높인 반응형 리뉴얼',
    tools: [
      'HTML',
      'jQuery',
      'JS',
      'CSS',
      'PHP',
      'MySQL',
      'Gnuboard',
      'Photoshop',
    ],
    image: '/images/projects/daegutntn/main.png',
    detailImages: [
      '/images/projects/daegutntn/pc-01.jpg',
      '/images/projects/daegutntn/pc-02.jpg',
      '/images/projects/daegutntn/pc-03.jpg',
      '/images/projects/daegutntn/mo-01.jpg',
      '/images/projects/daegutntn/mo-02.png',
      '/images/projects/daegutntn/mo-03.png',
    ],
    logo: '/images/projects/daegutntn/logo.jpg',
    longDescription: [
      '원스톱 진료 전문성과 의료진의 권위가 돋보이지 않는 기존 사이트를 전면 개편하고, 비수술 치료 우선이라는 확고한 진료 철학을 환자들에게 직관적으로 전달할 수 있는 디자인 체질 개선이 시급했습니다.',
      '원장 이력을 메인 히어로 영역에 전략적으로 배치하고, 6개 주요 진료 분야를 직관적인 번호 카드 UI로 리팩토링했습니다. 스크롤 인터랙션과 상세한 미디어 쿼리 제어로 모든 디바이스에서 최적의 해상도를 대응했습니다.',
      '정보 탐색 구조 최적화로 모바일 이탈률을 낮췄으며, 대구 지역 타겟의 집중적인 SEO 강화로 온라인 접근성을 비약적으로 향상시켰습니다. 약 2년간 유지보수를 통해 환자 만족도 개선이라는 긍정적 피드백을 받았습니다.',
    ],
    featured: false,
    websiteUrl: 'https://daegutntn.co.kr/',
  },
  {
    id: '40',
    title: '위즈닥터스',
    category: ['renewal', 'maintenance'],
    contribution:
      '퍼블리싱 100%, 웹/모바일 별도 최적화, SEO최적화, 관리자 연동 문의 시스템 구축',
    period: {
      project: ['2022.05 - 2022.05'],
      maintenance: '2021.11 - 2025.11',
    },
    shortDescription:
      '25년 개원 노하우와 상권 분석, 컨설팅 실적을 직관적으로 구조화한 B2B 플랫폼 리뉴얼',
    tools: [
      'HTML',
      'jQuery',
      'JS',
      'CSS',
      'PHP',
      'MySQL',
      'Gnuboard',
      'Photoshop',
    ],
    image: '/images/projects/withsdoctors/main.png',
    detailImages: [
      '/images/projects/withsdoctors/pc-01.jpg',
      '/images/projects/withsdoctors/pc-02.jpg',
      '/images/projects/withsdoctors/pc-03.jpg',
      '/images/projects/withsdoctors/mo-01.jpg',
      '/images/projects/withsdoctors/mo-02.jpg',
      '/images/projects/withsdoctors/mo-03.jpg',
    ],
    logo: '/images/projects/withsdoctors/logo.png',
    longDescription: [
      "25년 이상의 병원 개원 노하우를 지닌 '위즈닥터스'의 전문성을 시각화하고, 개원 입지부터 상권 분석, 준비 대행에 이르는 방대한 B2B 서비스를 예비 개원의들이 쉽게 탐색할 수 있도록 직관적인 플랫폼 구조 개선이 필요했습니다.",
      '추천 개원지 및 상권 분석 정보를 슬라이드 인터랙션으로 정리하고, 다수의 병원 개원 실적을 카드형 UI로 구조화했습니다. 특히 관리자 기능과 연동되는 실시간 문의 상담 시스템을 커스텀 구축하여 기업의 영업 편의성을 대폭 높였습니다.',
      '최적화된 반응형 웹 환경을 구축하여 파트너사들의 사이트 체류 시간을 늘렸습니다. 4년간 철저한 SEO 관리 및 안정적인 트래픽 방어를 지원하며, 비즈니스 전환 기회를 확대하는 디지털 기반을 확고히 다졌습니다.',
    ],
    featured: false,
    websiteUrl: 'http://www.withsdoctors.com/',
  },
  {
    id: '41',
    title: '테라기획',
    category: ['renewal'],
    contribution:
      '반응형 퍼블리싱 100% 담당. 카드 UI 구현, 시각적 인터랙티브 요소 활용 UX 강화, SEO최적화',
    period: {
      project: ['2025.08 - 2025.08', '2024.05 - 2024.05', '2022.09 - 2022.09'],
      maintenance: '2021.11 - 2025.11',
    },
    shortDescription:
      '300+ 진행 실적과 5대 마케팅 프로그램을 직관적인 UI로 재편한 B2B 웹사이트 리뉴얼',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'Photoshop'],
    image: '/images/projects/terramedi/main_v2.png',
    detailImages: [
      '/images/projects/terramedi/pc-01_v2.jpg',
      '/images/projects/terramedi/pc-02_v2.jpg',
      '/images/projects/terramedi/pc-03_v2.jpg',
      '/images/projects/terramedi/mo-01_v2.jpg',
      '/images/projects/terramedi/mo-02_v2.jpg',
      '/images/projects/terramedi/mo-03_v2.jpg',
    ],
    logo: '/images/projects/terramedi/logo.png',
    longDescription: [
      '300건 이상의 병원 마케팅 실적과 94%의 재계약률이라는 객관적 수치를 전면에 노출하고, 바이럴 및 검색 광고 등 5가지 주요 마케팅 프로그램을 잠재 고객이 쉽게 비교할 수 있도록 영업용 플랫폼을 효율적으로 개편해야 했습니다.',
      '메인 화면의 핵심 성과 지표를 CountUp 애니메이션으로 구현해 신뢰도를 동적으로 부각했습니다. 마케팅 프로그램과 실제 통합 마케팅 성공 사례(일평균 내원 환자 등)를 탭과 슬라이드 UI로 구조화해 모바일 정보 탐색을 도왔습니다.',
      '모바일 최적화와 빠른 페이지 로딩을 통해 잠재 고객의 이탈률을 최소화했습니다. 기업명 및 병원 마케팅 키워드 중심의 SEO 최적화를 거쳐, 실제 B2B 영업 과정에서 상담 문의 전환율을 높이는 실질적인 마케팅 성과를 지원했습니다.',
    ],
    featured: false,
    websiteUrl: 'http://www.terramedi.co.kr/page/index.php',
  },
];
