export interface Project {
  id: string;
  title: string;
  category: string;
  contribution: string;
  period: string;
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
  // [ FEATURED PROJECTS: 1-8 ]
  // ==========================================
  {
    id: '1',
    title: '두정이진병원',
    category: 'renewal',
    contribution: '퍼블리싱 100%',
    period: '2024.07 - 2024.08',
    shortDescription: '두정이진병원 리뉴얼',
    tools: ['HTML', 'PHP', 'jQuery', 'JS', 'MySQL', 'SCSS', 'Gnuboard'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
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
      '노후화된 기존 시스템을 개선하기 위한 리뉴얼 프로젝트입니다. 특히 이번 프로젝트는 그누보드 기반의 관리자 페이지를 직접 커스텀하여 구축한 첫 번째 사례로, 초기 설계 단계에서의 기술적 어려움을 해결해나가며 관리 편의성을 대폭 향상시킨 의미 있는 프로젝트입니다. 서비스 전체 흐름을 고려한 기능 구현과 최적화된 반응형 퍼블리싱으로 사용자 체감 성능과 운영 효율을 동시에 잡았습니다.',
    featured: true,
    websiteUrl: 'http://www.2jin2.com/',
  },
  {
    id: '2',
    title: '기운찬한방병원',
    category: 'renewal',
    contribution: '퍼블리싱 100%',
    period: '2023.08 - 2023.10',
    shortDescription: '기운찬한방병원 리뉴얼',
    tools: ['HTML', 'PHP', 'jQuery', 'JS', 'MySQL', 'SCSS', 'Gnuboard'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/giunchanhospital/main.png',
    detailImages: [
      '/images/projects/giunchanhospital/pc-01.jpg',
      '/images/projects/giunchanhospital/pc-02.jpg',
      '/images/projects/giunchanhospital/pc-04.jpg',
      '/images/projects/giunchanhospital/mo-01.jpg',
      '/images/projects/giunchanhospital/mo-02.jpg',
      '/images/projects/giunchanhospital/mo-04.jpg',
    ],
    longDescription:
      '기존 웹사이트를 병원급 규모에 맞춰 전면 리뉴얼한 프로젝트입니다. 방대한 의료 정보를 사용자가 쉽게 찾을 수 있도록 IA를 재정립하는 데 많은 시간을 할애하였으며, 작업 범위가 넓고 구현 난이도가 높았던 프로젝트입니다. 수많은 페이지의 스타일을 체계적으로 관리하고 반응형 퍼블리싱을 적용하여, 모바일에서도 최적화된 화면을 제공합니다.',
    featured: true,
    websiteUrl: 'http://www.giunchanhospital.co.kr/',
  },
  {
    id: '3',
    title: '주연여성의원',
    category: 'new',
    contribution: '퍼블리싱 100%',
    period: '2023.12 - 2024.01',
    shortDescription: '주연여성의원 신규 런칭',
    tools: ['HTML', 'PHP', 'jQuery', 'JS', 'SCSS', 'Gnuboard'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
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
      '여성 전문 의원의 브랜드 정체성을 담아내기 위해 기획된 신규 런칭 프로젝트입니다. 병원 특유의 전문성과 편안함을 전달하기 위해 우아하고 감각적인 디자인을 정밀하게 구현하는 데 집중했습니다. 세밀한 스타일링과 완성도 높은 반응형 퍼블리싱을 통해 병원 측으로부터 큰 만족을 얻었던 프로젝트입니다.',
    featured: true,
    websiteUrl: 'http://www.juyeonclinic.com/',
  },
  {
    id: '4',
    title: '이스트폴담우이비인후과의원',
    category: 'new',
    contribution: '퍼블리싱 100%',
    period: '2025.07 - 2025.07',
    shortDescription: '이스트폴담우이비인후과의원 신규 런칭',
    tools: ['HTML', 'PHP', 'jQuery', 'JS', 'SCSS', 'Gnuboard'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/damwooent/main.png',
    detailImages: [
      '/images/projects/damwooent/pc-01.jpg',
      '/images/projects/damwooent/mo-01.jpg',
    ],
    longDescription:
      '병원의 핵심 가치가 잘 드러나도록 기획된 신규 런칭 프로젝트입니다. 제작 과정에서 병원의 요구 사항을 적극 반영하기 위해 긴밀하게 소통하며 디자인 및 레이아웃을 여러 차례 수정하는 과정을 거쳤습니다. 잦은 수정에도 불구하고 효율적으로 스타일을 제어하며 프로젝트를 완수하였으며, 소통을 바탕으로 병원이 의도했던 디자인이 최종적으로 잘 구현되어 만족도가 매우 높았던 사례입니다.',
    featured: true,
    websiteUrl: 'http://www.damwooent.co.kr/',
  },
  {
    id: '5',
    title: '베스트연합의원',
    category: 'renewal',
    contribution: '퍼블리싱 100%',
    period: '2024.02 - 2024.05',
    shortDescription: '베스트연합의원 리뉴얼',
    tools: ['HTML', 'PHP', 'jQuery', 'JS', 'MySQL', 'SCSS', 'Gnuboard'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
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
      '환자의 예약 시스템 구축을 핵심으로 한 리뉴얼 프로젝트입니다. 병원 측과의 면밀한 협의를 통해 실제 진료 예약에 꼭 필요한 정보들로 입력 항목을 구성하였으며, 관리자가 해당 데이터를 한눈에 파악하고 효율적으로 처리할 수 있도록 관리자 페이지 고도화에 초점을 맞추었습니다. 사용자와 관리자 양측의 니즈를 모두 충족하는 환경을 성공적으로 구현하며 프로젝트를 완수하였습니다.',
    featured: true,
    websiteUrl: 'http://www.bestunitedclinic.co.kr/',
  },
  {
    id: '6',
    title: '성남센트럴안과의원',
    category: 'renewal',
    contribution: '퍼블리싱 100%',
    period: '2025.02 - 2025.02',
    shortDescription: '성남센트럴안과의원 index 페이지 리뉴얼',
    tools: ['HTML', 'PHP', 'jQuery', 'JS', 'CSS', 'Gnuboard'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/snceye/main_v2.png',
    detailImages: [
      '/images/projects/snceye/pc-01_v2.jpg',
      '/images/projects/snceye/mo-01_v2.jpg',
    ],
    longDescription:
      '기존 메인 페이지를 보다 역동적이고 세련되게 개선한 리뉴얼 프로젝트입니다. 인터랙티브한 요소를 강화하고 싶어하는 병원의 니즈에 맞춰, 스크롤 애니메이션 및 다양한 시각적 인터랙션을 적재적소에 배치하여 생동감 넘치는 브랜드 이미지를 전달하고자 했습니다. 기술적 완성도와 미적 요소를 조화롭게 결합해 성공적인 결과물을 도출하며 프로젝트를 완료하였습니다.',
    featured: true,
    websiteUrl: 'http://snceye.co.kr/',
  },
  {
    id: '7',
    title: '서울에이스병원',
    category: 'maintenance',
    contribution: '퍼블리싱 및 유지보수 100%',
    period: '2021.11 - 2025.11',
    shortDescription: '서울에이스병원 서브페이지 구축 및 유지보수',
    tools: ['HTML', 'PHP', 'MySQL', 'jQuery', 'JS', 'CSS'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
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
      '입사 후 서울에이스병원의 전담 퍼블리셔로서 장기간 웹사이트 유지보수 및 주요 서브페이지 구축을 담당하였습니다. 특히 병원의 의료진 정보, 진료 시간표, 온라인 예약, 비급여 항목 등 유동적인 데이터들을 관리자 페이지를 통해 손쉽게 관리할 수 있도록 시스템을 고도화하는 데 주력했습니다. 병원 측과 지속적으로 소통하며 새로운 의료 기술 홍보와 정보 전달 목적의 페이지들을 성공적으로 구축해왔으며, 장기적인 파트너십을 바탕으로 안정적인 운영 서비스를 제공하였습니다.',
    featured: true,
    websiteUrl: 'http://ace-hospital.co.kr/',
  },
  {
    id: '8',
    title: '테라기획',
    category: 'renewal',
    contribution: '퍼블리싱 100%',
    period: '2025.02 - 2025.02',
    shortDescription: '테라기획 리뉴얼',
    tools: ['HTML', 'jQuery', 'JS', 'CSS'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/terramedi/main_v2.png',
    detailImages: [
      '/images/projects/terramedi/pc-01_v2.jpg',
      '/images/projects/terramedi/pc-02_v2.jpg',
      '/images/projects/terramedi/pc-03_v2.jpg',
      '/images/projects/terramedi/mo-01_v2.jpg',
      '/images/projects/terramedi/mo-02_v2.jpg',
      '/images/projects/terramedi/mo-03_v2.jpg',
    ],
    longDescription:
      '병원 마케팅 전문 기업의 브랜드 가치를 전달하기 위한 홈페이지 리뉴얼 프로젝트입니다. 회사가 제공하는 다양한 서비스와 전문적인 정보들을 체계적으로 담아낼 수 있도록 레이아웃을 설계하였으며, 방대한 정보를 효과적으로 전달할 수 있는 직관적인 UI를 구현하는 데 주력했습니다. 기획 의도에 맞는 완성도 높은 결과물을 선보이며 프로젝트를 마무리하였습니다.',
    featured: true,
    websiteUrl: 'http://www.terramedi.co.kr/page/index.php',
  },

  // ==========================================
  // [ SUB PROJECTS & MAINTENANCE: 9-41 ]
  // ==========================================
  {
    id: '9',
    title: '나이스병원',
    category: 'new',
    contribution: '퍼블리싱 50%',
    period: '2022.01 - 2022.06',
    shortDescription: '나이스병원 신규 런칭',
    tools: ['HTML', 'PHP', 'jQuery', 'JS', 'MySQL', 'SCSS', 'Gnuboard'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
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
      '입사 후 첫 프로젝트로 진행한 나이스병원 웹사이트 리뉴얼 작업입니다. 기초 IA 정의와 관리자 페이지는 외주 협업으로 진행되었으며, 저는 메인 및 모든 서브페이지의 핵심 콘텐츠 영역 퍼블리싱을 전담하였습니다. 기획자, 디자이너, 개발자와 처음으로 실무에서 호흡을 맞추며 원활한 커뮤니케이션의 기술과 프로젝트 일정 관리의 중요성을 깊이 배울 수 있었던 뜻깊은 경험이었습니다.',
    featured: false,
    websiteUrl: 'https://www.nice-hospital.com/',
  },
  {
    id: '39',
    title: '동대문참튼튼병원',
    category: 'maintenance',
    contribution: '퍼블리싱 및 유지보수',
    period: '2021.11 - 2025.11',
    shortDescription:
      '동대문참튼튼병원 index 리뉴얼, 서브페이지 구축 및 유지보수',
    tools: ['HTML', 'jQuery', 'JS', 'CSS'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
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
    longDescription: '',
    featured: false,
    websiteUrl: 'https://www.jangantntn.co.kr/',
  },
  {
    id: '40',
    title: '의정부참튼튼병원',
    category: 'maintenance',
    contribution: '퍼블리싱 및 유지보수',
    period: '2021.11 - 2025.11',
    shortDescription:
      '의정부참튼튼병원 index 리뉴얼, 서브페이지 구축 및 유지보수',
    tools: ['HTML', 'jQuery', 'JS', 'CSS'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
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
    longDescription: '',
    featured: false,
    websiteUrl: 'http://www.uijeongbutntn.co.kr/',
  },
  {
    id: '41',
    title: '캠프나인치과의원',
    category: 'renewal',
    contribution: '퍼블리싱 100%',
    period: '2021.11 - 2021.12',
    shortDescription: '캠프나인치과의원 리뉴얼',
    tools: ['HTML', 'jQuery', 'JS', 'CSS'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
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
    longDescription: '',
    featured: false,
    websiteUrl: 'http://camp9dental.co.kr/',
  },
];
