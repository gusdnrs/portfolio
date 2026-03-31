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
  longDescription: string;
  featured?: boolean;
  websiteUrl?: string;
}

export const projects: Project[] = [
  // ==========================================
  // [ FEATURED PROJECTS: 1-6 ]
  // ==========================================
  {
    id: '1',
    title: '두정이진병원',
    category: ['renewal', 'maintenance'],
    contribution: '반응형 퍼블리싱 100% 담당. 인터랙션 구현, CMS 전용 커스텀 구축, 유지보수 퍼블리싱, SEO최적화',
    period: {
      project: ['2024.07 - 2024.08'],
      maintenance: '2021.11 - 2025.11',
    },
    shortDescription:
      '환자 접근성과 관리 편의성을 높인 병원 웹사이트 리뉴얼 및 유지보수',
    tools: [
      'HTML',
      'PHP',
      'jQuery',
      'JS',
      'MySQL',
      'SCSS',
      'Gnuboard',
      'Photoshop',
    ], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
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
    longDescription:
      '기존 웹사이트의 시스템 노후화로 인해 의료진 관리, 실시간 예약, 비급여 항목 안내 등 병원 운영에 필수적인 기능 구현이 불가능한 상황이었습니다. 이를 해결하기 위해 그누보드 기반의 관리자 페이지를 직접 커스텀하여 병원 맞춤형 예약 및 콘텐츠 관리 시스템을 성공적으로 구축했습니다. 그 결과, 내부 운영진의 관리 편의성이 획기적으로 향상되었을 뿐만 아니라 환자들의 정보 접근성을 개선하여 서비스 만족도를 동시에 높이는 성과를 거두었습니다.',
    featured: true,
    websiteUrl: 'http://www.2jin2.com/',
  },
  {
    id: '2',
    title: '기운찬한방병원',
    category: ['renewal', 'maintenance'],
    contribution: '반응형 퍼블리싱 100% 담당. 6종 UI 컴포넌트 모듈화, IA 재설계 기반 정보 구조 최적화, SEO최적화',
    period: {
      project: ['2023.08 - 2023.10', '2023.04 - 2023.04'],
      maintenance: '2022.09 - 2023.11',
    },
    shortDescription: '의료 정보를 체계적으로 재설계한 반응형 리뉴얼',
    tools: [
      'HTML',
      'PHP',
      'jQuery',
      'JS',
      'MySQL',
      'SCSS',
      'Gnuboard',
      'Photoshop',
    ], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/giunchanhospital/main.png',
    detailImages: [
      '/images/projects/giunchanhospital/pc-01_v2.jpg',
      '/images/projects/giunchanhospital/pc-02_v2.jpg',
      '/images/projects/giunchanhospital/pc-03_v2.jpg',
      '/images/projects/giunchanhospital/mo-01_v2.jpg',
      '/images/projects/giunchanhospital/mo-02_v2.jpg',
      '/images/projects/giunchanhospital/mo-03_v2.jpg',
    ],
    longDescription:
      '기존 웹 빌더 시스템의 높은 유지보수 비용 문제를 해결하고, 방대한 의료 데이터를 안정적으로 이관하기 위한 전면 리뉴얼 프로젝트였습니다. 여러 진료 과목이 복잡하게 혼재되어 있던 정보를 사용자 중심으로 재구성하기 위해 정보 구조(IA)를 설계 단계부터 다시 정립하였으며, 수많은 서브 페이지를 효율적으로 관리할 수 있도록 체계적인 스타일 가이드를 수립했습니다. 작업 범위가 넓고 데이터가 방대했으나, 철저한 코드 관리와 반응형 퍼블리싱 기술을 적용해 프로젝트를 성공적으로 완수했습니다. 결과적으로 환자들이 방대한 정보 속에서도 원하는 진료 내용을 쉽고 빠르게 찾을 수 있는 최적화된 디지털 환경을 구축했습니다.',
    featured: true,
    websiteUrl: 'http://www.giunchanhospital.co.kr/',
  },
  {
    id: '3',
    title: '주연여성의원',
    category: ['new', 'maintenance'],
    contribution: '반응형 퍼블리싱 100% 담당. 섬세한 인터랙션 구현, 모바일 프리미엄 UX 최적화 및 브랜드 UI 구축, SEO최적화',
    period: {
      project: ['2023.12 - 2024.01'],
      maintenance: '2023.12 - 2025.11',
    },
    shortDescription:
      '우아하고 섬세한 브랜드 감성을 담아낸 프리미엄 반응형 웹사이트 런칭',
    tools: ['HTML', 'PHP', 'jQuery', 'JS', 'SCSS', 'Gnuboard', 'Photoshop'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/juyeonclinic/main.png',
    detailImages: [
      '/images/projects/juyeonclinic/pc-01.jpg',
      '/images/projects/juyeonclinic/pc-02.jpg',
      '/images/projects/juyeonclinic/pc-03.jpg',
      '/images/projects/juyeonclinic/mo-01.jpg',
      '/images/projects/juyeonclinic/mo-02.jpg',
      '/images/projects/juyeonclinic/mo-03.jpg',
    ],
    longDescription:
      '여성 전문 의원으로서의 신뢰감과 고유한 브랜드 정체성을 확보하기 위해 감각적인 시각화와 섬세한 인터랙션이 강조된 신규 런칭 프로젝트입니다. 병원이 추구하는 우아하고 편안한 분위기를 웹의 시각적 요소로 정밀하게 구현하는 데 집중하였으며, 완성도 높은 반응형 퍼블리싱을 통해 모바일 환경에서도 PC와 동일한 프리미엄 사용자 경험을 유지하도록 설계했습니다. 그 결과, 병원의 브랜드 이미지를 온라인상에 성공적으로 안착시켰으며 UI 구현의 완성도와 사용 편의성 측면에서 클라이언트로부터 매우 높은 만족도를 이끌어냈습니다.',
    featured: true,
    websiteUrl: 'http://www.juyeonclinic.com/',
  },
  {
    id: '4',
    title: '이스트폴담우이비인후과의원',
    category: ['new'],
    contribution: '반응형 퍼블리싱 100% 담당. 고품질 UI 및 인터랙션 구현, SEO최적화',
    period: {
      project: ['2025.07 - 2025.07'],
    },
    shortDescription:
      '브랜드 가치를 집약적으로 전달하는 1페이지 랜딩페이지 구축',
    tools: ['HTML', 'PHP', 'jQuery', 'JS', 'SCSS', 'Gnuboard', 'Figma'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/damwooent/main.png',
    detailImages: [
      '/images/projects/damwooent/pc-01.jpg',
      '/images/projects/damwooent/mo-01.jpg',
    ],
    longDescription:
      '개원 준비 단계에서 발생하는 빈번한 요구사항 변경에 유연하게 대응하며, 병원의 핵심 가치를 집약적으로 전달하는 1페이지 랜딩페이지를 구축했습니다. 기획 및 디자인 담당자와 실시간으로 소통하며 수정 사항을 즉각적으로 반영하였고, 효율적인 스타일 제어 기술을 활용해 촉박한 일정 속에서도 높은 완성도의 레이아웃을 구현했습니다. 최종적으로 병원이 의도한 브랜드 컨셉이 정밀하게 반영되어, 런칭 초기 환자들에게 신뢰감을 주는 안정적인 홍보 채널로 성공적으로 활용되었습니다.',
    featured: true,
    websiteUrl: 'http://www.damwooent.co.kr/',
  },
  {
    id: '5',
    title: '베스트연합의원',
    category: ['renewal', 'maintenance'],
    contribution: '반응형 퍼블리싱 100% 담당. 방문진료 예약 시스템 설계, CMS 고도화 기반 관리 효율성 개선, SEO최적화',
    period: {
      project: ['2024.02 - 2024.05'],
      maintenance: '2021.11 - 2024.10',
    },
    shortDescription:
      '사용자 예약 편의성과 관리 효율을 동시에 극대화한 방문진료 맞춤형 리뉴얼',
    tools: [
      'HTML',
      'PHP',
      'jQuery',
      'JS',
      'MySQL',
      'SCSS',
      'Gnuboard',
      'Photoshop',
    ], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/bestunitedclinic/main_v2.png',
    detailImages: [
      '/images/projects/bestunitedclinic/pc-01_v2.jpg',
      '/images/projects/bestunitedclinic/pc-02_v2.jpg',
      '/images/projects/bestunitedclinic/pc-03_v2.jpg',
      '/images/projects/bestunitedclinic/mo-01_v2.jpg',
      '/images/projects/bestunitedclinic/mo-02_v2.jpg',
      '/images/projects/bestunitedclinic/mo-03_v2.jpg',
    ],
    longDescription:
      '환자의 예약 편의성과 병원 행정의 효율성을 동시에 높이기 위해 방문진료 상담 신청 시스템을 새롭게 구축한 리뉴얼 프로젝트입니다. 실제 진료 예약 프로세스를 심층 분석하여 사용자 입력 항목을 논리적으로 재구성하였고, 관리자가 신청 데이터를 한눈에 파악하고 즉각 대응할 수 있도록 관리자 페이지(CMS)를 고도화했습니다. 이를 통해 온라인 예약 전환율을 유의미하게 높이는 한편, 병원 측의 행정 업무 공수를 대폭 절감시키는 실질적인 운영 개선 성과를 거두었습니다.',
    featured: true,
    websiteUrl: 'http://www.bestunitedclinic.co.kr/',
  },
  {
    id: '6',
    title: '서울에이스병원',
    category: ['maintenance'],
    contribution: '반응형 퍼블리싱 100% 담당. 4년 장기 운영 및 안정성 확보 전담, SEO최적화',
    period: {
      maintenance: '2021.11 - 2025.11',
    },
    shortDescription:
      '대규모 의료 정보의 체계화와 다수의 신규 상세페이지 구축 및 유지보수',
    tools: ['HTML', 'PHP', 'MySQL', 'jQuery', 'JS', 'CSS', 'Photoshop'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/ace-hospital/main.png',
    detailImages: [
      '/images/projects/ace-hospital/pc-01.jpg',
      '/images/projects/ace-hospital/pc-02.jpg',
      '/images/projects/ace-hospital/pc-03.jpg',
      '/images/projects/ace-hospital/mo-01.jpg',
      '/images/projects/ace-hospital/mo-02.jpg',
      '/images/projects/ace-hospital/mo-03.jpg',
    ],
    longDescription:
      '의료진 프로필과 진료 시간표 등 업데이트가 잦은 대형 병원 웹사이트의 특성을 고려하여, 운영 안정성과 확장성에 집중한 프로젝트입니다. 병원의 규모 확장과 진료 항목 고도화에 맞춰 다수의 신규 상세페이지를 체계적으로 구축하였으며, 모든 유동적인 데이터를 관리자가 직접 제어할 수 있도록 시스템을 고도화했습니다. 전담 퍼블리셔로서 장기간 서비스 중단 없는 안정적인 운영 환경을 보장하는 한편, 상시적인 콘텐츠 최적화와 신속한 기술 지원을 통해 웹사이트가 병원의 신뢰도 높은 홍보 채널로 기능하도록 기여했습니다.',
    featured: true,
    websiteUrl: 'http://ace-hospital.co.kr/',
  },
  // ==========================================
  // [ SUB PROJECTS & MAINTENANCE: 7-41 ]
  // ==========================================
  {
    id: '7',
    title: '목동서울정형외과의원',
    category: ['new'],
    contribution: '반응형 퍼블리싱 100% 담당. SEO 최적화, 특화 레이아웃 활용으로 제작 공정 단축',
    period: { project: ['2025.10 - 2025.10'] },
    shortDescription:
      '비수술 치료의 전문성과 신뢰도를 시각화한 반응형 랜딩페이지',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Gnuboard', 'Figma'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/mokdongseoul/main.png',
    detailImages: [
      '/images/projects/mokdongseoul/pc-01.jpg',
      '/images/projects/mokdongseoul/mo-01.jpg',
    ],
    logo: '/images/projects/mokdongseoul/logo.png',
    longDescription:
      '사용자가 다양한 기기에서 쾌적하게 탐색할 수 있도록 미디어 쿼리를 정교하게 제어한 반응형 랜딩페이지 프로젝트입니다. 실무의 효율성을 극대화하기 위해 병원 마케팅 특화 레이아웃을 전략적으로 활용하여 전체 제작 공정을 약 25% 단축하였으며, Slick/AOS 등 라이브러리를 적재적소에 배치해 정보의 전달력과 시각적 완성도를 높였습니다. 또한, 이미지 경량화와 핵심 키워드 중심의 SEO 작업을 병행하여 런칭 초기 검색 노출 및 사용자 유입에 최적화된 기술적 기반을 마련했습니다.',
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
      '탭 인터랙션과 자동 슬라이드로 정보 접근성을 높인 반응형 랜딩페이지',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Gnuboard', 'Figma'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/samsungdongjakclinic/main.png',
    detailImages: [
      '/images/projects/samsungdongjakclinic/pc-01.jpg',
      '/images/projects/samsungdongjakclinic/mo-01.jpg',
    ],
    logo: '/images/projects/samsungdongjakclinic/logo.jpg',
    longDescription:
      "방대한 의료 콘텐츠를 사용자가 직관적으로 탐색할 수 있도록 탭 구조의 인터랙션과 자동 슬라이딩 기능을 적용한 신규 구축 프로젝트입니다. 특히 '주요 치료 안내' 섹션에 버튼형 탭을 도입하여 정보의 위계를 효율적으로 정리하였으며, Slick Slide와 AOS를 활용해 진료 특징 및 병원 시설 정보를 시각적으로 생동감 있게 전달했습니다. 기획·디자인 담당자와의 긴밀한 협업을 통해 반응형 환경에서의 배치를 최적화하여 텍스트 중심 콘텐츠의 가독성을 극대화하였고, 병원 인수에 따른 브랜드 인지도 제고를 위해 핵심 키워드 중심의 정교한 SEO 작업을 수행하며 기술적 완성도를 높였습니다.",
    featured: false,
    websiteUrl: 'https://www.samsungdongjakclinic.co.kr/',
  },
  {
    id: '9',
    title: '우리의내과의원',
    category: ['new'],
    contribution: '반응형 퍼블리싱 100% 담당. 디바이스 최적화 인터렉션 구현, SEO최적화',
    period: { project: ['2025.09 - 2025.09'] },
    shortDescription:
      '템플릿 최적화와 인터랙션으로 제작 효율과 몰입감을 높인 랜딩페이지',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Gnuboard', 'Figma'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/dr-woo/main.png',
    detailImages: [
      '/images/projects/dr-woo/pc-01.jpg',
      '/images/projects/dr-woo/mo-01.png',
    ],
    logo: '/images/projects/dr-woo/logo.png',
    longDescription:
      '기존 템플릿의 효율성과 고도화된 커스텀 기능을 결합하여 제작 공정이 약 25% 단축된 효율 중심의 프로젝트입니다. 히어로 영역에 CountUp 라이브러리를 적용해 실적을 수치화하여 신뢰도를 강조하였으며, 진료 과목별 hover 인터랙션을 도입해 방대한 텍스트 정보를 깔끔하게 정리하며 가독성을 높였습니다. 또한, Slick Slide와 AOS 효과를 적재적소에 배치해 시각적 몰입감을 더했으며, 그누보드 CMS를 활용해 관리자가 팝업 메뉴를 상시 제어할 수 있는 운영 환경을 구축했습니다. 특히 사이트 전체의 메타 데이터를 전략적으로 최적화하여 검색 엔진 노출을 위한 기술적 기반을 마련했습니다.',
    featured: false,
    websiteUrl: 'https://www.dr-woo.kr/',
  },
  {
    id: '10',
    title: '서울매일365의원',
    category: ['new'],
    contribution: '반응형 퍼블리싱 100% 담당. 카드 UI 구현, 디바이스별 최적화된 인터랙션 구현, SEO최적화',
    period: { project: ['2025.03 - 2025.03'] },
    shortDescription:
      '카드형 레이아웃과 직관적인 호버 인터랙션으로 정보 전달력을 높인 반응형 웹사이트',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Gnuboard', 'Figma'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/seouleveryday365/main.png',
    detailImages: [
      '/images/projects/seouleveryday365/pc-01.jpg',
      '/images/projects/seouleveryday365/mo-01.jpg',
    ],
    logo: '/images/projects/seouleveryday365/logo.png',
    longDescription:
      '사용자의 시선을 끄는 섹션별 테마와 인터랙티브 UI를 구현하는 데 집중한 신규 구축 프로젝트입니다. 영양수액 및 진료 안내 영역에 카드 형식의 레이아웃을 채택하여 정보의 가독성을 높였으며, PC에서는 호버 인터랙션을, 모바일에서는 Slick Slide를 적용하여 디바이스별 최적화된 사용자 경험을 제공했습니다. 특히 모든 레이아웃을 전면 신규 제작하며 병원의 프리미엄 이미지를 구축하는 데 주력하였고, AOS 효과와 직관적인 인터페이스 설계를 통해 정보 도달율을 극대화했습니다. 또한, 상세 진료 정보를 효율적으로 노출하기 위해 메타 데이터를 전략적으로 최적화하여 기술적 완성도를 높였습니다.',
    featured: false,
    websiteUrl: 'http://www.seouleveryday365.co.kr/',
  },
  {
    id: '11',
    title: '성남센트럴안과의원',
    category: ['renewal', 'maintenance'],
    contribution: '반응형 퍼블리싱 100% 담당. 메인 리뉴얼, 시각적 인터랙티브 요소 활용 UX 강화, SEO최적화',
    period: {
      project: ['2025.02 - 2025.02', '2024.03 - 2024.03'],
      maintenance: '2021.11 - 2025.11',
    },
    shortDescription:
      '역동적인 인터랙션과 세련된 레이아웃 구현으로 브랜드 생동감을 높인 반응형 리뉴얼',
    tools: ['HTML', 'PHP', 'jQuery', 'JS', 'CSS', 'Gnuboard', 'Photoshop'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
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
    longDescription:
      '기존 메인 페이지를 보다 역동적이고 세련되게 개선한 index 리뉴얼 프로젝트로, 스크롤 애니메이션과 시각적 인터랙티브 요소를 활용해 생동감 넘치는 브랜드 이미지를 구축했습니다. 또한, 진료 상세페이지를 새롭게 설계하여 환자들이 핵심 의료 정보를 명확하게 인지할 수 있도록 사용자 경험(UX)을 대폭 강화했습니다.',
    featured: false,
    websiteUrl: 'http://snceye.co.kr/',
  },
  {
    id: '12',
    title: '미아삼성정형외과의원',
    category: ['new'],
    contribution: '반응형 퍼블리싱 100% 담당. 카드 UI 구현, 시각적 인터랙티브 요소 활용 UX 강화, SEO최적화',
    period: { project: ['2025.02 - 2025.02'] },
    shortDescription:
      '교수 출신 원장의 신뢰도와 수술·비수술 치료를 직관적으로 대비시킨 정형외과 랜딩페이지',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Gnuboard', 'Figma'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/miasamsung/main.png',
    detailImages: [
      '/images/projects/miasamsung/pc-01.jpg',
      '/images/projects/miasamsung/mo-01.jpg',
    ],
    logo: '/images/projects/miasamsung/logo.jpg',
    longDescription:
      '"의사를 가르치는 대학교수 출신, 삼성서울병원의 노하우"라는 대표원장의 차별화된 이력을 시각적으로 최우선 배치하여 사이트 진입 즉시 신뢰감을 형성하도록 설계한 정형외과 랜딩페이지입니다. 수술클리닉·비수술치료 등 진료 카테고리를 아이콘형 카드 UI로 구조화하여 환자가 자신의 증상에 맞는 정보를 빠르게 탐색할 수 있도록 했으며, 각 섹션에 AOS 스크롤 애니메이션을 적용해 핵심 정보를 순차적으로 노출하며 몰입감을 높였습니다. Slick 슬라이더로 병원 장비 및 시설을 효과적으로 소개하였고, Sticky 네비게이션으로 디바이스 어디서든 주요 메뉴에 즉각 접근할 수 있도록 구현했습니다.',
    featured: false,
    websiteUrl: 'http://www.miasamsung.co.kr/',
  },
  {
    id: '13',
    title: '올바른마디튼튼의원',
    category: ['new'],
    contribution: '반응형 퍼블리싱 100% 담당. 지점 특화 컴포넌트 커스터마이징, 프랜차이즈 표준 레이아웃 적용, SEO최적화',
    period: { project: ['2024.12 - 2024.12'] },
    shortDescription:
      '프랜차이즈 브랜드 아이덴티티를 유지하면서 야간 진료와 비수술 치료를 부각한 지역 맞춤형 정형외과 웹사이트',
    tools: [
      'HTML',
      'jQuery',
      'JS',
      'CSS',
      'PHP',
      'MySQL',
      'Gnuboard',
      'Photoshop',
    ], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
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
    longDescription:
      '올바른마디튼튼 프랜차이즈의 표준 레이아웃을 기반으로, 지점만의 차별화 포인트인 척추·관절 비수술 통증 치료와 야간 진료(평일 오후 7시)를 전략적으로 강조한 신규 런칭 프로젝트입니다. 의료진 소개부터 척추·관절·수족부 클리닉, 비수술 치료, 장비 안내까지 세분화된 네비게이션 구조를 퍼블리싱하여 방대한 의료 정보를 환자가 빠르게 탐색할 수 있도록 구현했습니다. 브랜드 일관성을 유지하면서도 지점별 정보를 세부 컴포넌트 단위로 정교하게 커스터마이징하여 100% 단독으로 완성도 높은 반응형 사이트를 구축했습니다.',
    featured: false,
    websiteUrl: 'http://www.allrightmadi.co.kr/',
  },
  {
    id: '14',
    title: '리얼유의원',
    category: ['renewal', 'maintenance'],
    contribution: 'index·의료진 페이지 퍼블리싱 100%. 백드롭 영상 인터랙션 구축, SEO최적화',
    period: {
      project: ['2024.06 - 2024.06'],
      maintenance: '2023.07 - 2025.11',
    },
    shortDescription: '피부과의 고급스러운 감성을 시각화한 프리미엄 리뉴얼',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'Photoshop'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/realyou/main.png',
    detailImages: [
      '/images/projects/realyou/pc-01.jpg',
      '/images/projects/realyou/pc-02.jpg',
      '/images/projects/realyou/mo-01.jpg',
      '/images/projects/realyou/mo-02.jpg',
    ],
    logo: '/images/projects/realyou/logo.png',
    longDescription:
      '피부 클리닉 고유의 고급스러운 브랜드 감성에 맞춰 퍼블리싱 효과를 정밀하게 적용한 리뉴얼 프로젝트입니다. 제한적인 서버 환경을 극복하기 위해 유튜브 링크를 활용하여 Hero 영역에 자동 재생 백드롭 영상을 구현하였으며, 시각적 몰입감을 높이는 동시에 체계적인 SEO 최적화 작업을 병행하여 홍보 효과를 극대화했습니다.',
    featured: false,
    websiteUrl: 'http://www.realyou.co.kr/',
  },
  {
    id: '15',
    title: '다정해정신건강의학과의원',
    category: ['new'],
    contribution: '반응형 퍼블리싱 100% 담당. 시각적 인터랙티브 요소 활용 UX 강화, SEO최적화',
    period: { project: ['2024.04 - 2024.04'] },
    shortDescription:
      '환자에게 편안함과 부드러운 인상을 전달하는 반응형 랜딩페이지',
    tools: [
      'HTML',
      'jQuery',
      'JS',
      'CSS',
      'PHP',
      'MySQL',
      'Gnuboard',
      'Photoshop',
    ], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/dajungmentalclinic/main_v2.png',
    detailImages: [
      '/images/projects/dajungmentalclinic/pc-01.jpg',
      '/images/projects/dajungmentalclinic/mo-01.jpg',
    ],
    logo: '/images/projects/dajungmentalclinic/logo.png',
    longDescription:
      '병원이 희망하는 부드럽고 편안한 느낌의 정신건강의학과 이미지를 구현하는 데 집중한 신규 랜딩페이지입니다. 클리닉 영역에 background-attachment: fixed 속성을 활용해 깊이감 있는 스크롤 효과를 적용하였고, 모바일 환경에서는 이를 부드러운 슬라이드로 전환해 디바이스별 최적화된 인터랙션을 제공합니다. 또한, AOS 애니메이션과 SEO 최적화를 통해 사이트의 완성도와 정보 접근성을 동시에 높였습니다.',
    featured: false,
    websiteUrl: 'http://www.dajungmentalclinic.co.kr/',
  },
  {
    id: '16',
    title: '안양바르다정형외과의원',
    category: ['new'],
    contribution: '반응형 퍼블리싱 100% 담당. 시각적 인터랙티브 요소 활용 UX 강화, 방대한 의료 정보 IA 체계화, SEO최적화',
    period: { project: ['2023.11 - 2023.12'] },
    shortDescription:
      '클리닉 정보를 체계적으로 정돈하고 신뢰도를 시각화한 정형외과 웹사이트',
    tools: [
      'HTML',
      'jQuery',
      'JS',
      'CSS',
      'PHP',
      'MySQL',
      'Gnuboard',
      'Photoshop',
    ], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
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
    longDescription:
      '정형외과 특유의 전문성과 신뢰감 있는 이미지를 강조하기 위해 7페이지 규모의 반응형 웹사이트를 퍼블리싱했습니다. 다년간의 임상 경험과 성과를 직관적으로 보여주기 위해 Count 애니메이션 효과를 적용하였고, Hero 영역에는 백드롭 영상을 배치해 시선을 사로잡았습니다. 방대한 진료 과목 정보를 사용자가 편안하게 읽을 수 있도록 가독성을 최우선으로 고려해 레이아웃을 정돈했습니다.',
    featured: false,
    websiteUrl: 'http://www.bardaos.co.kr/',
  },
  {
    id: '17',
    title: '서울아름산부인과의원',
    category: ['new', 'maintenance'],
    contribution: '반응형 퍼블리싱 100% 담당. 시각적 인터랙티브 요소 활용 UX 강화, SEO최적화',
    period: {
      project: ['2023.11 - 2023.12'],
      maintenance: '2023.11 - 2025.11',
    },
    shortDescription:
      '전문성과 프리미엄 이미지를 강조한 산부인과 맞춤형 랜딩페이지',
    tools: [
      'HTML',
      'jQuery',
      'JS',
      'CSS',
      'PHP',
      'MySQL',
      'Gnuboard',
      'Photoshop',
    ], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/snuareum/main.png',
    detailImages: [
      '/images/projects/snuareum/pc-01.jpg',
      '/images/projects/snuareum/mo-01.jpg',
    ],
    logo: '/images/projects/snuareum/logo.png',
    longDescription:
      '전문적이고 프리미엄한 브랜드 이미지를 전달하는 데 주력한 산부인과 랜딩페이지 신규 구축 프로젝트입니다. 산부인과의 특성상 다수의 이벤트 팝업이 필요하다는 요구사항을 반영하여, 그누보드의 기본 팝업 기능을 슬라이드 롤링 형태로 직접 커스텀 개발했습니다. 이 팝업 기능은 편의성을 크게 높여 향후 다른 프로젝트에도 표준 기능으로 도입될 만큼 성공적인 성과를 거두었습니다.',
    featured: false,
    websiteUrl: 'http://www.snuareum.com/',
  },
  {
    id: '18',
    title: '올바른정형외과의원',
    category: ['new'],
    contribution: '반응형 퍼블리싱 100% 담당. 지점 특화 컴포넌트 커스터마이징, 프랜차이즈 표준 레이아웃 적용, SEO최적화',
    period: { project: ['2023.07 - 2023.07'] },
    shortDescription:
      '프랜차이즈 지점 확장의 기반이 된 정형외과 표준 웹사이트 구축',
    tools: [
      'HTML',
      'jQuery',
      'JS',
      'CSS',
      'PHP',
      'MySQL',
      'Gnuboard',
      'Photoshop',
    ], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
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
    longDescription:
      '올바른정형외과 프랜차이즈의 디지털 기준점을 세우는 핵심 기반 프로젝트였습니다. 전문 의료진의 아이덴티티를 부각하면서도 비수술 치료 실적을 Count 효과로 강조했습니다. 성공적인 IA 및 레이아웃 설계를 통해 최초 제작된 페이지 구조가 이후 다른 프랜차이즈 지점 구축 시 로고와 데이터만 교체하여 그대로 사용될 만큼 높고 안정적인 완성도를 인정받았습니다.',
    featured: false,
    websiteUrl: 'http://www.allrightclinic.co.kr/',
  },
  {
    id: '19',
    title: '예쁨의정석의원',
    category: ['new'],
    contribution: '반응형 퍼블리싱 100% 담당. 시각적 인터랙티브 요소 활용 UX 강화, SEO최적화',
    period: {
      project: ['2023.06 - 2023.06'],
      maintenance: '2023.06 - 2025.11',
    },
    shortDescription:
      '여성 타겟의 피부과 컨셉을 극대화한 맞춤형 비주얼 웹사이트',
    tools: [
      'HTML',
      'jQuery',
      'JS',
      'CSS',
      'PHP',
      'MySQL',
      'Gnuboard',
      'Photoshop',
    ], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
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
    longDescription:
      '여성을 주요 타겟으로 하는 피부과 컨셉에 맞춰 방문자의 시각적 만족도를 높이도록 각 클리닉 페이지마다 개별 맞춤형 레이아웃을 적용했습니다. 복잡한 장비와 진료 안내는 유려한 슬라이드 인터랙션으로 정리하였고, 자체 개발한 그누보드 슬라이드 롤링 팝업 기능을 이식하여 병원 관리자의 이벤트 운영 편의성을 한층 업그레이드했습니다.',
    featured: false,
    websiteUrl: 'http://www.beautyjungsuk.co.kr/',
  },
  {
    id: '20',
    title: '삼성탑정형외과의원',
    category: ['new'],
    contribution: '반응형 퍼블리싱 100% 담당. 시각적 인터랙티브 요소 활용 UX 강화, SEO최적화',
    period: {
      project: ['2023.05 - 2023.05'],
      maintenance: '2023.05 - 2025.11',
    },
    shortDescription:
      '신뢰감 있는 병원 이미지와 체계적인 정보 전달에 집중한 웹사이트',
    tools: [
      'HTML',
      'jQuery',
      'JS',
      'CSS',
      'PHP',
      'MySQL',
      'Gnuboard',
      'Photoshop',
    ], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/dasantop/main.png',
    detailImages: [
      '/images/projects/dasantop/pc-01.jpg',
      '/images/projects/dasantop/mo-01.jpg',
    ],
    logo: '/images/projects/dasantop/logo.jpg',
    longDescription:
      '환자들에게 진료과목과 첨단 장비 정보를 직관적으로 전달하기 위해 유려한 슬라이드 인터랙션을 적용했습니다. 여러 명의 의료진 정보를 한눈에 파악할 수 있도록 탭 구조를 활용해 레이아웃을 최적화하였으며, 병원 고유의 전문성과 신뢰감을 강조하는 디자인을 웹으로 구현하는 데 주력했습니다.',
    featured: false,
    websiteUrl: 'http://www.dasantop.co.kr/',
  },
  {
    id: '21',
    title: '올바른재활의학과의원',
    category: ['new'],
    contribution: '반응형 퍼블리싱 100% 담당. 시각적 인터랙티브 요소 활용 UX 강화, SEO최적화',
    period: { project: ['2023.03 - 2023.04'] },
    shortDescription:
      '다양한 진료 정보를 직관적인 인터페이스로 정리한 맞춤형 랜딩페이지',
    tools: [
      'HTML',
      'jQuery',
      'JS',
      'CSS',
      'PHP',
      'MySQL',
      'Gnuboard',
      'Photoshop',
    ], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/allbarun365/main.png',
    detailImages: [
      '/images/projects/allbarun365/pc-01.jpg',
      '/images/projects/allbarun365/mo-01.jpg',
    ],
    logo: '/images/projects/allbarun365/logo.png',
    longDescription:
      '다양하고 세분화된 재활의학과 진료과목을 방문자가 쉽게 인지할 수 있도록 직관적인 카드 형태의 레이아웃을 도입했습니다. 핵심 진료 분야인 비수술 치료 영역은 정보량이 많아 부드러운 슬라이드 형식으로 재구성하여 가독성을 높였으며, 전반적인 AOS 애니메이션과 SEO 최적화로 사용성 및 검색 노출을 개선했습니다.',
    featured: false,
    websiteUrl: 'http://www.allbarun365.co.kr/',
  },
  {
    id: '22',
    title: '탑정형외과의원',
    category: ['new'],
    contribution: '반응형 퍼블리싱 100% 담당. 카드 UI 구현, 시각적 인터랙티브 요소 활용 UX 강화, SEO최적화',
    period: { project: ['2022.12 - 2022.12'] },
    shortDescription:
      '줄기세포 전문성을 강조하고 풀페이지 레이아웃을 적용한 반응형 웹사이트',
    tools: [
      'HTML',
      'jQuery',
      'JS',
      'CSS',
      'PHP',
      'MySQL',
      'Gnuboard',
      'Photoshop',
    ], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
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
    longDescription:
      '병원의 핵심 경쟁력인 맞춤형 줄기세포 치료 기술을 시각적으로 극대화하는 데 초점을 맞추었습니다. 특히 비수술 치료 안내 페이지에는 풀페이지(Full-Page) 스크롤 디자인을 적용해 정보의 깊이감과 몰입도를 대폭 향상시켰으며, 장비 및 일반 진료 영역은 슬라이드와 결합하여 전체 7페이지 규모의 완성도 높은 반응형 웹을 구축했습니다.',
    featured: false,
    websiteUrl: 'http://top-orthopedic.clinic/',
  },
  {
    id: '23',
    title: '성모김내과의원',
    category: ['new'],
    contribution: '반응형 퍼블리싱 100% 담당. 건강검진 중심 메뉴 구조화 및 소화기내과 전문성 부각 UI 구축, SEO최적화',
    period: { project: ['2022.08 - 2022.08'] },
    shortDescription:
      '의료진의 전문성과 신뢰도를 전면에 내세운 내과 맞춤형 웹사이트',
    tools: [
      'HTML',
      'jQuery',
      'JS',
      'CSS',
      'PHP',
      'MySQL',
      'Gnuboard',
      'Photoshop',
    ], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
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
    longDescription:
      '내과의 특성상 진료를 담당하는 주치의에 대한 신뢰가 중요하므로, 메인 페이지 내에 의료진 프로필을 직관적이고 비중 있게 강조하는 방향으로 레이아웃을 설계했습니다. 7페이지 전체를 다양한 모바일 디바이스에 완벽하게 대응하도록 퍼블리싱하였고, 섬세한 AOS 애니메이션과 체계적인 SEO 최적화를 거쳐 내실 있는 디지털 홍보 채널을 완성했습니다.',
    featured: false,
    websiteUrl: 'http://www.endo5575.com/',
  },
  {
    id: '24',
    title: '태전튼튼정형외과의원',
    category: ['new'],
    contribution: '반응형 퍼블리싱 100% 담당. 카드 UI 구현, 시각적 인터랙티브 요소 활용 UX 강화, 네이버예약 연동, SEO최적화',
    period: { project: ['2022.07 - 2022.07'] },
    shortDescription:
      '와이드 레이아웃과 수치화된 데이터로 비수술 치료의 권위를 표현한 랜딩페이지',
    tools: [
      'HTML',
      'jQuery',
      'JS',
      'CSS',
      'PHP',
      'MySQL',
      'Gnuboard',
      'Photoshop',
    ], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/tjtt/main.png',
    detailImages: [
      '/images/projects/tjtt/pc-01.jpg',
      '/images/projects/tjtt/mo-01.jpg',
    ],
    logo: '/images/projects/tjtt/logo.jpg',
    longDescription:
      '공간감이 돋보이는 와이드 프레임 디자인을 채택하여 전문적인 병원 이미지를 구축했습니다. 진료 과목은 깔끔한 카드형 디자인으로 정리하고 비수술 치료 영역은 슬라이드로 차별성을 부여했습니다. 특히, 시술 누적 건수 등 핵심 성과를 Count Up 효과를 통해 동적으로 강조함으로써 환자에게 깊은 신뢰감을 주는 구조를 완성했습니다.',
    featured: false,
    websiteUrl: 'http://www.tjtt.co.kr/',
  },
  {
    id: '25',
    title: '강동모커리한방병원',
    category: ['new'],
    contribution: '반응형 퍼블리싱 100% 담당. 단기 프로모션 전용 레이아웃 구축, SEO최적화',
    period: { project: ['2022.07 - 2022.07'] },
    shortDescription:
      '교통사고 클리닉 특화 프로모션 및 효율적인 상담 DB 연동 랜딩페이지',
    tools: [
      'HTML',
      'jQuery',
      'JS',
      'CSS',
      'PHP',
      'MySQL',
      'Gnuboard',
      'Photoshop',
    ], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/mokhuri/main.png',
    detailImages: [
      '/images/projects/mokhuri/pc-01.jpg',
      '/images/projects/mokhuri/mo-01.jpg',
    ],
    logo: '/images/projects/mokhuri/logo.jpg',
    longDescription:
      '기존 병원 메인 웹사이트와 독립적으로 운영되는 교통사고 특화 홍보용 랜딩페이지를 신규 구축했습니다. 단순한 정보 전달을 넘어 실질적인 예약 전환을 이끌어내기 위해, 진료 상담 문의 폼을 직접 개발하고 이를 백엔드 관리자 DB와 연동시켰습니다. 관리자가 유입된 상담을 즉각적으로 확인하고 응대할 수 있는 효율적인 운영 환경을 제공했습니다.',
    featured: false,
    websiteUrl: '',
  },
  {
    id: '26',
    title: '서울청정신건강의학과의원',
    category: ['new'],
    contribution: '반응형 퍼블리싱 100% 담당. 멀티 브랜치 네비게이션 구현 및 지점별 카테고리 구조화, SEO최적화',
    period: {
      project: ['2022.07 - 2022.08'],
      maintenance: '2022.07 - 2025.11',
    },
    shortDescription:
      '정신과 정보를 체계화하고 신뢰를 강조한 최초의 100% 반응형 웹사이트',
    tools: [
      'HTML',
      'jQuery',
      'JS',
      'CSS',
      'PHP',
      'MySQL',
      'Gnuboard',
      'Photoshop',
    ], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
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
    longDescription:
      '처음으로 100% 모바일 반응형 구조를 단독으로 설계하고 적용한 14페이지 규모의 구축 프로젝트입니다. 정신건강의학과 특유의 전문성과 신뢰를 시각적으로 강조하면서도, 정보 접근성을 높이기 위해 복잡한 진료 카테고리를 세분화하여 정돈했습니다. 의료진 프로필에 슬라이드 효과를 적용하여 가독성을 극대화하는 등 섬세한 UI/UX 개선에 집중했습니다.',
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
      '기존 브랜드 아이덴티티를 유지하며 최적화된 레이아웃으로 개선한 리뉴얼',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'Photoshop'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
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
    longDescription:
      '기존 병원의 고유한 분위기와 브랜드 아이덴티티는 그대로 보존하면서, 사용자 편의를 위한 레이아웃 재배치와 신규 콘텐츠 추가에 집중한 리뉴얼 프로젝트입니다. AOS 애니메이션과 세밀한 환경별 반응형 최적화는 물론 SEO 작업까지 적용하여, 익숙함 속에서도 세련된 디지털 환경을 환자들에게 제공했습니다.',
    featured: false,
    websiteUrl: 'https://www.theubreast.co.kr/',
  },
  {
    id: '28',
    title: '나이스병원',
    category: ['new', 'maintenance'],
    contribution: '메인 및 전 서브페이지 퍼블리싱 70%, 타 팀과의 능동적 소통 기반 대규모 리뉴얼 완수, SEO최적화',
    period: {
      project: ['2022.01 - 2022.06'],
      maintenance: '2022.01 - 2023.04',
    },
    shortDescription:
      '실무 협업 프로세스를 익히고 프로젝트의 완성도를 높인 리뉴얼 및 유지보수',
    tools: [
      'HTML',
      'PHP',
      'jQuery',
      'JS',
      'MySQL',
      'SCSS',
      'Gnuboard',
      'Photoshop',
    ], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
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
    longDescription:
      '입사 후 첫 프로젝트로서 메인 및 전체 서브페이지의 퍼블리싱을 전담한 대규모 신규 런칭 프로젝트입니다. 외주 개발자와의 협업 체계 안에서 기획, 디자인, 개발 담당자와 능동적으로 소통하며 대규모 프로젝트의 전체 프로세스와 일정 관리의 중요성을 깊이 있게 이해했습니다. 런칭 이후에도 약 1년 3개월간 상시 유지보수를 전담하며 사이트 품질 안정성을 성공적으로 유지하는 실무 전반의 탄탄한 기초를 닦았습니다.',
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
      '서울대 치과대·삼성서울병원 출신 30년 경력 원장과 토탈케어를 강조한 동탄 치과 리뉴얼 웹사이트',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'Photoshop'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
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
    longDescription:
      '서울대학교 치과대학·대학원 졸업, 삼성서울병원 전문의, 이건희 회장 주치의 경력의 대표 원장 이력과 "30년 경력의 토탈케어 서비스"를 핵심 신뢰 지표로 배치한 동탄 치과 리뉴얼 프로젝트입니다. 임플란트·심미치료·소아치과·틀니·잇몸치료 등 진료과목 섹션을 카드형 레이아웃으로 구성하고, 당일 예약 진료·편안한 인테리어·끊임없는 치료 연구 등 차별화 포인트를 아이콘형 섹션으로 시각화했습니다. 기획·디자인 팀과의 협업 프로세스를 처음 경험한 프로젝트이자, 이후 대규모 의료 프로젝트를 독립 수행하는 역량의 발판이 된 의미 있는 시작점입니다.',
    featured: false,
    websiteUrl: 'http://camp9dental.co.kr/',
  },
  {
    id: '30',
    title: '튼튼병원',
    category: ['renewal', 'maintenance'],
    contribution: '서버 이전 총괄 및 데이터 검수, AI 디자인 활용 관리자 페이지 리뉴얼 퍼블리싱 100%',
    period: {
      project: ['2025.06 - 2025.06', '2024.10 - 2024.12'],
      maintenance: '2021.11 - 2025.11',
    },
    shortDescription:
      '10년 이상 누적된 방대한 병원 데이터를 안정적으로 이관 및 최적화한 대규모 인프라 개선',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Photoshop'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/tntnhospital/main_v2.png',
    detailImages: [
      '/images/projects/tntnhospital/pc-01.png',
      '/images/projects/tntnhospital/pc-02.png',
      '/images/projects/tntnhospital/pc-03.png',
    ],
    logo: '/images/projects/tntnhospital/logo.png',
    longDescription:
      '2010년부터 장기 사용되어 온 기존 서버 호스팅을 업그레이드하고 지점별로 시스템을 완전 분리한 대규모 프로젝트입니다. 데이터 이관 기록이 없는 상태에서 모든 DB를 수작업으로 검증 및 복제, 경량화하는 고난이도 작업을 철저하게 수행하며 전 과정을 성공적으로 안정화시켰습니다. 관리자 페이지는 미사용 기능을 전면 정리하여 고도화하였고, AI 툴을 적극 활용해 관리자 레이아웃 디자인까지 단독으로 리뉴얼을 완수했습니다.',
    featured: false,
    websiteUrl: 'http://www.tntnhospital.co.kr/',
  },
  {
    id: '31',
    title: '청담튼튼병원',
    category: ['renewal', 'maintenance'],
    contribution: '메인 페이지 퍼블리싱 100%. 4년 장기 유지보수 전담, 진료 일정 및 이벤트 실시간 대응, SEO최적화',
    period: {
      project: ['2025.06 - 2025.06', '2023.10 - 2023.10'],
      maintenance: '2021.11 - 2025.11',
    },
    shortDescription:
      '최상의 페이지 성능과 안정감을 선사하는 청담 본원의 반응형 메인 사이트',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Photoshop'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
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
    longDescription:
      '청담 본원의 메인 랜딩 페이지 퍼블리싱을 성공적으로 구축하고, 이후 무려 4년이라는 긴 기간 동안 유지보수를 전담 운영한 핵심 프로젝트입니다. 주기적인 콘텐츠 최신화 및 웹 환경 변화에 민첩하게 대응하며, 사용자의 신뢰도를 최상으로 유지하는 한편 에러 없는 무결점 서비스 제공에 이바지했습니다.',
    featured: false,
    websiteUrl: 'http://www.chamtntn.co.kr/',
  },
  {
    id: '32',
    title: '청담튼튼병원 단일공복강경센터',
    category: ['renewal', 'maintenance'],
    contribution: '메인 및 게시판 전체 리뉴얼 퍼블리싱 100%, 웹·모바일 별도 최적화, 4년 장기 유지보수 전담, SEO최적화',
    period: {
      project: ['2024.02 - 2024.02'],
      maintenance: '2021.11 - 2025.11',
    },
    shortDescription:
      '국내 최다 수술 이력을 전면에 내세워 환자 신뢰를 이끄는 전문 센터 런칭',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Photoshop'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/spltntn/main.png',
    detailImages: [
      '/images/projects/spltntn/pc-01.jpg',
      '/images/projects/spltntn/mo-01.jpg',
    ],
    logo: '/images/projects/spltntn/logo.jpg',
    longDescription:
      '해당 분야 국내 최다 수술 경력이라는 강력한 신뢰 지표를 메인 비주얼에 배치하여 전문성을 강조한 리뉴얼 프로젝트입니다. 웹과 모바일 환경을 개별로 정밀 타겟팅하여 작업함으로써 각 디바이스에 최적화된 사용자 경험(UX)을 확보하였고, 체계화된 SEO 적용으로 잠재적 환자 유입을 유의미하게 성장시키는 튼튼한 구조를 확립했습니다.',
    featured: false,
    websiteUrl: 'http://www.spltntn.co.kr/',
  },
  {
    id: '33',
    title: '청담튼튼병원 정맥관절이야기',
    category: ['renewal', 'maintenance'],
    contribution: '반응형 퍼블리싱 100% 담당. 시각적 인터랙티브 요소 활용 UX 강화, SEO최적화, 치료후기 게시판 연동, 4년 장기 유지보수 전담',
    period: {
      project: ['2023.05 - 2023.05'],
      maintenance: '2021.11 - 2025.11',
    },
    shortDescription:
      '생생한 치료 후기를 전면에 연동하여 브랜드 신뢰감을 부여한 웹사이트',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Photoshop'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/veinjointtntn/main.png',
    detailImages: [
      '/images/projects/veinjointtntn/pc-01.jpg',
      '/images/projects/veinjointtntn/mo-01.jpg',
    ],
    logo: '/images/projects/veinjointtntn/logo.png',
    longDescription:
      '정맥과 관절 질환 특성상 내원 환자들의 공감이 중요하다는 점을 고려하여, 병원의 실제 치료 후기 게시판을 메인에 직접 연동하는 전략을 구현했습니다. 모바일 반응형 구조를 완벽하게 설계하고 시각적으로 부드러운 AOS 인터랙션을 배치하여, 페이지 방문자에게 안정감과 의료 서비스에 대한 강한 신뢰를 형성하는 결과물을 제작했습니다.',
    featured: false,
    websiteUrl: 'http://www.veinjointtntn.co.kr/',
  },
  {
    id: '34',
    title: '청담튼튼병원 키우리성장클리닉',
    category: ['renewal', 'maintenance'],
    contribution: '메인 리뉴얼 퍼블리싱 100%, 웹·모바일 별도 최적화, SEO최적화, 4년 장기 유지보수 전담',
    period: {
      project: ['2023.04 - 2023.04'],
      maintenance: '2021.11 - 2025.11',
    },
    shortDescription:
      '밝고 친근한 분위기를 가득 담아 아이와 부모를 함께 배려한 웹 클리닉',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Photoshop'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/hightntn/main_v2.png',
    detailImages: [
      '/images/projects/hightntn/pc-01.jpg',
      '/images/projects/hightntn/mo-01.jpg',
    ],
    logo: '/images/projects/hightntn/logo.png',
    longDescription:
      '소아과와 성장 클리닉이라는 주 이용 타겟의 성향에 알맞게 단정하면서도 따뜻하고 밝은 느낌으로 전체 디자인 톤 앤 매너를 리뉴얼했습니다. 부모와 아이 모두에게 친근함과 병원의 온전한 신뢰감이 전해질 수 있도록 세심하게 레이아웃을 다듬었으며, 각 환경별(웹, 모바일) 사용성을 극대화하기 위해 매체별 분리 퍼블리싱을 섬세하게 구현했습니다.',
    featured: false,
    websiteUrl: 'http://www.hightntn.co.kr/',
  },
  {
    id: '35',
    title: '동대문참튼튼병원',
    category: ['maintenance'],
    contribution: '메인 페이지 퍼블리싱 100%. 3년 장기 유지보수 전담, 성장클리닉·도수·건강검진 신규 섹션 구축, SEO최적화',
    period: {
      project: ['2024.12 - 2024.12', '2022.04 - 2022.04'],
      maintenance: '2021.11 - 2024.12',
    },
    shortDescription:
      '디스크·인공관절·하지정맥류와 성장클리닉을 보유한 동대문 다미뷰 첨단 병원 리뉴얼·유지보수',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Photoshop'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
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
    longDescription:
      '디스크·인공관절·하지정맥류와 성장클리닉(저신장·성조숙증·교정운동치료)을 보유한 동대문 참튼튼병원의 메인 리뉴얼 및 3년 운영 유지보수 프로젝트입니다. 도수/운동치료·물리/특수치료·수술 후 재활치료를 별도 서브 섹션으로 구성하고 재활치료 콘텐츠를 업데이트했습니다. 성장클리닉 도입에 따른 신규 서브페이지를 추가 구축하고, 치료후기·뉴스레터·영상 콘텐츠를 3년간 지속적으로 업데이트하며 병원 디지털 커뮤니케이션을 안정적으로 운영했습니다.',
    featured: false,
    websiteUrl: 'https://www.jangantntn.co.kr/',
  },
  {
    id: '36',
    title: '의정부참튼튼병원',
    category: ['renewal', 'maintenance'],
    contribution: '퍼블리싱 100%, 웹/모바일 별도 최적화, SEO최적화, 4년 장기 유지보수 전담',
    period: { maintenance: '2021.11 - 2025.11' },
    shortDescription:
      '척추·관절·뇌신경·도수·비수술·수술 센터의 원스톱 진료 시스템을 아이콘 카드 UI로 안내하는 의정부 참튼튼병원 리뉴얼·유지보수',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Photoshop'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
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
    longDescription:
      '의정부 참튼튼병원의 리뉴얼 및 4년 장기 운영 유지보수 프로젝트입니다. 척추센터·관절센터·뇌신경센터·도수/물리치료·비수술센터·수술센터 등 6개 진료과목을 스트레이트한 아이콘 카드 UI로 안내하는 원스톱 진료 시스템을 퍼블리싱했습니다. 언론보도·치료후기 콘텐츠를 지속 업데이트하고, 의정부 지역 환자 대상 지역 코드 SEO 강화 등을 지속적으로 지원하며 퍼포먼스를 개선했습니다.',
    featured: false,
    websiteUrl: 'http://www.uijeongbutntn.co.kr/',
  },
  {
    id: '37',
    title: '노원참튼튼병원',
    category: ['maintenance'],
    contribution: '퍼블리싱 100%, 웹/모바일 별도 최적화, SEO최적화, 4년 장기 유지보수 전담',
    period: {
      project: ['2023.05 - 2023.05'],
      maintenance: '2021.11 - 2025.11',
    },
    shortDescription:
      '4년 운영 유지보수 후 2026년 2월 휴원까지 전 수명 주기를 담당한 노원 참튼튼병원 담당 프로젝트',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Photoshop'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/nowontntn/main.png',
    detailImages: [
      '/images/projects/nowontntn/pc-01.jpg',
      '/images/projects/nowontntn/mo-01.jpg',
    ],
    logo: '/images/projects/nowontntn/logo.jpg',
    longDescription:
      '4년간 운영 유지보수를 전담하며 진료시간·의료진·이벤트 변경에 100% 신속 대응한 노원 참튼튼병원 담당 프로젝트입니다. 2026년 2월 27일 휴원 결정에 따라 휴원 안내 페이지를 신속하게 구축하고 의무기록 사본 발급(2026년 3월 31일까지 평일 오전) 안내 UI를 즉각 반영하였으며, 웹사이트 운영 종료까지 콘텐츠를 실시간으로 관리했습니다. 병원의 개원부터 휴원까지 디지털 운영의 전 수명 주기를 담당한 경험을 쌓은 프로젝트입니다.',
    featured: false,
    websiteUrl: 'http://www.nowontntn.co.kr/nowon_new/index.php',
  },
  {
    id: '38',
    title: '구로참튼튼병원',
    category: ['new', 'maintenance'],
    contribution: '퍼블리싱 100%, 웹/모바일 별도 최적화, SEO최적화, 4년 장기 유지보수 전담',
    period: {
      project: ['2025.01 - 2025.02', '2024.09 - 2024.09', '2023.08 - 2023.08'],
      maintenance: '2021.11 - 2025.11',
    },
    shortDescription:
      '척추·관절·신경과(본관)와 건강검진·유방갑상선·소화기내과·부인과(신관)를 보유한 구로 참튼튼병원 런칭·유지보수',
    tools: [
      'HTML',
      'jQuery',
      'JS',
      'CSS',
      'PHP',
      'MySQL',
      'Gnuboard',
      'Photoshop',
    ], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
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
    longDescription:
      '"지역사회의료발전과 노동자의 건강증진에 이바지"하는 구로 참튼튼병원의 신규 런칭부터 4년 장기 유지보수까지 전 과정을 담당한 프로젝트입니다. 척추·관절·신경과(본관)와 건강검진센터·특수건강검진·유방갑상선센터·소화기내과·부인과·일반내과(신관)의 다과 진료 정보를 분리해 콘텐츠를 관리하였으며, 신관 증설에 따른 신규 서브페이지를 추가 구축했습니다. 치료후기·비수술치료 콘텐츠를 지속 업데이트하며 4년간 브랜드 가치 상승에 기여하는 디지털 파트너 역할을 충실히 수행했습니다.',
    featured: false,
    websiteUrl: 'http://www.gurotntn.co.kr/',
  },
  {
    id: '39',
    title: '대구참튼튼병원',
    category: ['renewal', 'maintenance'],
    contribution: '퍼블리싱 100%, 웹/모바일 별도 최적화, SEO최적화, 유지보수 전담',
    period: {
      project: ['2023.10 - 2023.10'],
      maintenance: '2021.11 - 2023.10',
    },
    shortDescription:
      '척추·관절·내과·도수 4개 진료와 계명대 출신 원장의 전문성을 중심으로 재구성한 대구 참튼튼병원 리뉴얼·유지보수',
    tools: [
      'HTML',
      'jQuery',
      'JS',
      'CSS',
      'PHP',
      'MySQL',
      'Gnuboard',
      'Photoshop',
    ], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
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
    longDescription:
      '계명대학교 동산의료원 정형외과 임상조교수이자 현 동산의료원 외래 부교수인 원장의 학수적 배경을 신뢰 로직 중심으로 배치한 대구 참튼튼병원 리뉴얼 및 2년 운영 유지보수 프로젝트입니다. 척추클리닉·관절클리닉·내과/건강검진·도수/물리치료·비수술치료·수술치료 6개 진료 분야를 번호 카드 UI로 정렬하여 환자가 당일 검사부터 진단·치료까지 원스톱 진료 흐름을 직관적으로 파악할 수 있도록 설계했습니다. 대구 지역 환자 대상 지역 키워드 SEO 강화와 비수술치료 우선 명제를 콘텐츠에 일관되게 반영하며, 2년간 안정적인 디지털 운영을 지원했습니다.',
    featured: false,
    websiteUrl: 'https://daegutntn.co.kr/',
  },
  {
    id: '40',
    title: '위즈닥터스',
    category: ['renewal', 'maintenance'],
    contribution: '퍼블리싱 100%, 웹/모바일 별도 최적화, SEO최적화, 관리자 연동 문의 시스템 구축',
    period: {
      project: ['2022.05 - 2022.05'],
      maintenance: '2021.11 - 2025.11',
    },
    shortDescription:
      '20년 개원 컨설팅 노하우와 성공적인 마케팅 플랫폼을 강조한 병원 개원 전문 기업 리뉴얼·유지보수',
    tools: [
      'HTML',
      'jQuery',
      'JS',
      'CSS',
      'PHP',
      'MySQL',
      'Gnuboard',
      'Photoshop',
    ], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
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
    longDescription:
      '"개원 입지선정부터 준비대행, 경영관리까지 20년 노하우"를 핵심 헤드카피로 배치하고, 바이럴·검색광고·SNS·디스플레이 등 마케팅 플랫폼 서비스를 시각적으로 체계화한 병원 개원 컨설팅 전문 기업 리뉴얼 프로젝트입니다. 서비스 영역별 섹션 구조를 재설계하여 잠재 고객이 원하는 서비스로 빠르게 접근할 수 있도록 IA를 개선하고, 관리자 기능과 연동되는 문의 시스템을 연동했습니다. 4년간 장기 유지보수를 전담하며 콘텐츠 업데이트와 기능 고도화를 지속적으로 지원했습니다.',
    featured: false,
    websiteUrl: 'http://www.withsdoctors.com/',
  },
  {
    id: '41',
    title: '테라기획',
    category: ['renewal'],
    contribution: '반응형 퍼블리싱 100% 담당. 카드 UI 구현, 시각적 인터랙티브 요소 활용 UX 강화, SEO최적화',
    period: {
      project: ['2025.08 - 2025.08', '2024.05 - 2024.05', '2022.09 - 2022.09'],
      maintenance: '2021.11 - 2025.11',
    },
    shortDescription:
      '300+ 진행 프로젝트·94% 재계약률을 강조하고 5가지 마케팅 프로그램을 체계화한 병원 마케팅 기업 리뉴얼',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'Photoshop', 'Photoshop'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
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
    longDescription:
      '"300+ 진행 프로젝트, 94% 재계약률"이라는 실적 수치를 CountUp 애니메이션 형식으로 메인에 배치하여 신뢰도를 즉각 전달하는 병원 마케팅 기업 리뉴얼 프로젝트입니다. 바이럴·검색광고·언론보도·SNS·디스플레이 광고 등 5가지 마케팅 프로그램을 탭형 카드 UI로 구조화하여 서비스 범위를 한눈에 파악할 수 있도록 설계했습니다. 실제 클라이언트 사례(남양주 A병원 일 250~300명 내원, 봉담 N병원 등)를 슬라이더로 노출하여 B2B 영업 전환에 최적화된 반응형 홈페이지를 100% 단독 퍼블리싱으로 완성했습니다.',
    featured: false,
    websiteUrl: 'http://www.terramedi.co.kr/page/index.php',
  },
];
