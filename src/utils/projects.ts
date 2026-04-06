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
  // ==========================================
  // [ FEATURED PROJECTS: 1-6 ]
  // ==========================================
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
      '모바일 반응형 전환과 자체 CMS 구축을 통해 예약 접근성과 운영 자율성을 개선한 병원 웹 리뉴얼',
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
    longDescription: [
      '기존 웹사이트는 모바일 반응형을 지원하지 않아 사용자 이탈이 발생했고, 팝업 등록이나 비급여 항목, 진료 시간표 변경 등의 업데이트조차 내부에서 불가능해 외부 유지보수 비용이 과도하게 지출되는 상황이었습니다. 소아과 특유의 친근한 브랜드 컨셉을 살리면서도, 환자들이 가장 많이 찾는 의료진과 진료 시간표 정보를 가독성 있게 재배치하는 것이 핵심 과제였습니다.',
      '레이아웃 구조를 컴포넌트 단위로 모듈화하여 클리닉별 정보를 일관성 있게 관리할 수 있도록 퍼블리싱 구조를 정비했습니다. 메인 페이지에는 AOS 스크롤 애니메이션과 의료진 슬라이더 등 인터랙션을 적용해 UX를 개선하고, 병원 공지사항과 외부 예약 시스템을 연동했습니다. 관리자 페이지(CMS)는 병원 스태프가 팝업, 비급여 영역, 의료진 정보를 직접 수정할 수 있도록 커스텀 구축했으며, SEO 최적화와 예약 시스템 연계 작업도 함께 진행했습니다.',
      '결과물에 만족한 원장님이 타 병원에 자사를 추천하여 신규 수주 계약으로 이어졌으며, 리뉴얼 이후 서버 오류 없이 안정적으로 유지보수를 진행했습니다.'
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
    longDescription: [
      '기존 웹 빌더 시스템의 높은 유지보수 비용 문제와 방대한 의료 데이터 이관을 해결하기 위한 전면 리뉴얼 프로젝트를 수행했습니다. 복잡하게 혼재된 의료 정보를 사용자 중심으로 재구성하여 신뢰도 높은 정보 구조(IA)를 설계하고, 수많은 서브 페이지를 효율적으로 관리할 수 있는 기술적 기반을 마련하는 것이 핵심 목표였습니다.',
      '정보 구조를 설계 단계부터 다시 정립하여 사용자 편의성을 극대화하였으며, 대규모 페이지를 일관성 있게 관리하기 위해 체계적인 스타일 가이드를 수립했습니다. 컴포넌트 단위의 모듈화 퍼블리싱을 통해 유지보수 효율을 높였고, 다양한 디바이스 환경에서 최적의 인터페이스가 출력되도록 상세한 미디어 쿼리 제어를 진행했습니다.',
      '리뉴얼 완료 후 과도하게 지출되던 유지보수 비용을 획기적으로 절감하였으며, 체계화된 시스템 덕분에 서비스 안정성이 비약적으로 향상되었습니다. 결과물에 대한 높은 만족도로 인해 프로젝트 종료 이후에도 1년 이상의 추가 수주 및 유지보수 연장을 이끌어냈으며, 병원과의 장기적인 기술 파트너십을 구축하는 성과를 거두었습니다.'
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
      '브랜드 아이덴티티 시각화와 인터랙션 구현 중심의 여성 전문 의원 신규 웹사이트 구축',
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
    longDescription: [
      '여성 전문 의원으로서의 신뢰감 확보와 고유한 브랜드 정체성을 웹상에 구현하기 위한 신규 런칭 프로젝트입니다. 병원이 추구하는 우아하고 편안한 이미지를 시각적 요소로 정밀하게 녹여내고, 모바일 환경에서도 프리미엄한 사용자 경험을 동일하게 제공해야 하는 기술적 과제를 STAR 기법을 기반으로 해결하고자 했습니다.',
      '병원의 브랜드 가치를 감각적인 시각화와 섬세한 인터랙션으로 구현하는 데 집중했습니다. AOS 스크롤 애니메이션과 같은 동적 요소를 적재적소에 배치하여 생동감을 더했으며, 완성도 높은 반응형 퍼블리싱 기술을 적용해 모바일 사용자들에게도 최적화된 UI를 제공했습니다. 또한 내부 CMS를 통해 정보 수정이 용이하도록 구조화했습니다.',
      '고품격 디자인과 안정적인 기술력이 결합된 결과물을 통해 병원의 초기 브랜드 포지셔닝에 성공했습니다. 런칭 이후 마케팅 활동과 연계하여 사용자 유입이 원활하게 이루어졌으며, 지속적인 사이트 업데이트와 장기적인 유지보수 계약을 통해 현재까지도 병원의 온라인 브랜드 신뢰도를 높이는 데 적극적으로 기여하고 있습니다.'
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
    tools: ['HTML', 'PHP', 'jQuery', 'JS', 'SCSS', 'Gnuboard', 'Figma'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/damwooent/main.png',
    detailImages: [
      '/images/projects/damwooent/pc-01.jpg',
      '/images/projects/damwooent/mo-01.jpg',
    ],
    longDescription: [
      '개원 준비 단계에서 진료 항목과 기획 내용이 수시로 변경되는 유동적인 환경 속에서 단기간에 완성도 높은 런칭 사이트를 구축해야 했습니다. 촉박한 일정에도 불구하고 병원의 핵심 진료 가치를 명확하게 전달하고, 신규 환자들이 예약과 위치 정보를 직관적으로 파악할 수 있는 고품질 반응형 랜딩페이지 제작이 시급한 상황이었습니다.',
      '기획 및 디자인 담당자와 실시간 소통 채널을 가동하여 수정 요구사항을 즉각적으로 반영하는 애자일한 작업 프로세스를 유지했습니다. 유동적인 레이아웃 변경에 유연하게 대응할 수 있도록 효율적인 스타일 구조를 설계하였으며, 원페이지 구성의 장점을 살린 부드러운 스크롤링과 직관적인 탭 UI를 구현하여 사용자 정보 접근성을 극대화했습니다.',
      '여러 차례의 급박한 기획 변경에도 불구하고 정해진 개원 일정에 맞춰 안정적으로 사이트를 오픈했습니다. 직관적으로 구성된 랜딩페이지를 통해 개원 초기 환자들의 온라인 문의와 예약 시스템 접근이 원활하게 이루어졌으며, 짧은 기간 동안 집중도 높은 작업을 수행하여 병원의 첫 디지털 브랜드 이미지를 성공적으로 안착시켰습니다.'
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
    longDescription: [
      '환자의 방문진료 예약 편의성을 개선하고 병원 내부 행정 시스템의 효율성을 극대화하기 위해 웹사이트 전반을 리뉴얼하고 CMS를 고도화하는 작업을 수행했습니다. 기존 시스템의 노후화로 인한 정보 관리의 어려움을 해결하고, 사용자가 복잡한 상담 신청 과정을 논리적으로 이해하며 쉽게 접근할 수 있는 환경 구축이 필요했습니다.',
      '방문진료 상담 예약 프로세스를 심층 분석하여 사용자 입력 항목을 논리적인 단계로 재구성하고 UI를 직관적으로 설계했습니다. 관리자 페이지에서 신청 데이터를 한눈에 파악하고 효율적으로 처리할 수 있도록 CMS 기능을 강화했으며, 메인 페이지에 생동감 있는 인터랙션을 추가했습니다. 클리닉별 의료 정보도 체계적으로 정리하여 정보 전달력을 높였습니다.',
      '시스템 리뉴얼 이후 예약 관리의 업무 효율성이 크게 향상되었으며, 환자들의 상담 신청 성공률 또한 대폭 증가했습니다. 기술적 완성도와 운영 편의성에 만족한 결과로 1년 이상의 유지보수 계약을 연장하였으며, 이후 타 업체로 디자인이 변경된 상황에서도 마케팅 협업을 다시 요청받을 만큼 확고한 기술적 신뢰 관계를 형성했습니다.'
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
    longDescription: [
      '의료진 프로필 및 진료 시간표 등 업데이트가 빈번한 대형 병원 특성상, 서비스 중단 없는 안정적인 운영과 진료 과목 확장에 따른 신규 상세페이지 제작이 지속적으로 요구되는 상황이었습니다. 방대한 의료 데이터의 안정성을 유지하면서도 신속한 정보 업데이트가 가능한 환경을 조성하고 장기적인 유지보수 체계를 확고히 구축해야 했습니다.',
      '병원의 요구사항에 맞춘 다수의 상세페이지를 신규 제작하면서도 전체 사이트의 통일성과 안정성을 잃지 않도록 탄탄한 구조 설계를 진행했습니다. 기존 관리자 페이지에 의료진 추가, 비급여 데이터 연동, 온라인 예약 처리 시스템 등 유동적인 데이터를 스태프가 직접 즉시 관리할 수 있는 핵심 기능들을 추가하고 개선하여 운영 편의성을 높였습니다.',
      '약 4년간의 장기 유지보수 기간 동안 단 한 차례의 큰 장애 없이 사이트를 안정적으로 운영하며 병원의 디지털 신뢰도를 확보했습니다. 지속적인 기능 고도화와 상세페이지 확장을 통해 대형 병원에 적합한 풍부한 의료 정보를 성공적으로 관리했으며, 체계화된 유지보수 프로세스를 안착시켜 운영 비용의 효율적인 관리와 서비스 개선을 달성했습니다.'
    ],
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
    contribution:
      '반응형 퍼블리싱 100% 담당. SEO 최적화, 특화 레이아웃 활용으로 제작 공정 단축',
    period: { project: ['2025.10 - 2025.10'] },
    shortDescription: '비수술 치료 전문성과 신뢰도 시각화에 집중한 신규 반응형 웹사이트 구축',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Gnuboard', 'Figma'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/mokdongseoul/main.png',
    detailImages: [
      '/images/projects/mokdongseoul/pc-01.jpg',
      '/images/projects/mokdongseoul/mo-01.jpg',
    ],
    logo: '/images/projects/mokdongseoul/logo.png',
    longDescription: [
      '정형외과 신규 런칭 평면에서 비수술 치료와 줄기세포 클리닉의 전문성을 효과적으로 시각화하고, 온 가족이 안심하고 방문할 수 있는 믿음직한 병원 이미지를 구축하는 것이 핵심 과제였습니다. 브랜드 정체성을 웹상에 정밀하게 구현하면서 모든 사용자 환경에서 최적화된 접근성을 보장하는 반응형 랜딩 웹사이트 제작이 필요했습니다.',
      '신뢰감 있는 분위기 조성을 위해 감각적인 색상과 레이아웃을 사용한 시각 요소를 배치했습니다. 비수술 치료 등 핵심 정보를 사용자가 직관적으로 인식하도록 시각적 계층 구조를 설계하고, 정교한 반응형 퍼블리싱을 통해 다양한 모바일 기기에서도 PC와 동일한 고품질 사용자 경험을 제공했습니다. 병원의 니즈를 반영한 커스텀 레이아웃 제작에 주력했습니다.',
      '병원측의 요구사항이 완벽하게 반영된 전문적인 시각 결과물을 완성하여 성공적인 웹사이트 런칭을 지원했습니다. 안정적인 기술 기반 위에 구축된 사이트는 개원 초기 브랜드 인지도 상승에 크게 기여했으며, 명확한 정보 전달 구조를 통해 환자들의 비수술 치료에 대한 이해도와 신뢰도를 높여 실제 내원으로 이어지는 긍정적인 성과를 도출했습니다.'
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
      '탭 인터랙션과 자동 슬라이드로 정보 접근성을 높인 반응형 랜딩페이지',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Gnuboard', 'Figma'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/samsungdongjakclinic/main.png',
    detailImages: [
      '/images/projects/samsungdongjakclinic/pc-01.jpg',
      '/images/projects/samsungdongjakclinic/mo-01.jpg',
    ],
    logo: '/images/projects/samsungdongjakclinic/logo.jpg',
    longDescription: [
      '환자 중심의 진료와 최고의 전문성을 시각화한 신규 런칭 프로젝트입니다. 병원이 추구하는 최첨단 인공투석 시스템과 신뢰도 높은 내과 이미지를 웹의 시각적 요소로 정밀하게 구현하는 데 집중했습니다. 개원 초기 브랜드 포지셔닝을 위해 병원의 고유한 정체성을 디자인에 녹여내어 방문자들에게 전문성을 효과적으로 전달합니다.',
      '반응형 퍼블리싱 기술을 적용하여 상시 변화하는 모바일 환경에서도 PC와 동일한 고품질 사용자 경험(UX)을 유지하도록 설계했습니다. 모든 디바이스에서 최적의 인터페이스가 출력되도록 상세한 미디어 쿼리 제어를 진행했으며, 폰트 크기와 레이아웃 배치를 기기별로 최적화하여 정보 접근성을 극대화하고 사용자 이탈을 방지하는 유연한 웹 환경을 구축했습니다.',
      '주요 치료 안내 영역에는 탭 구조와 슬라이드 기능을 도입하여 방대한 치료 정보를 가독성 좋게 정리했습니다. 병원의 니즈를 정확히 반영한 커스텀 레이아웃을 통해 사용자가 원하는 정보를 직관적으로 탐색할 수 있도록 구현했으며, 핵심 의료 콘텐츠를 시각적으로 계층화하여 정보 전달력을 높이고 실제 내원으로 이어질 수 있는 신뢰도를 확보했습니다.'
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
      '템플릿 최적화와 인터랙션으로 제작 효율과 몰입감을 높인 랜딩페이지',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Gnuboard', 'Figma'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/dr-woo/main.png',
    detailImages: [
      '/images/projects/dr-woo/pc-01.jpg',
      '/images/projects/dr-woo/mo-01.png',
    ],
    logo: '/images/projects/dr-woo/logo.png',
    longDescription: [
      '예방 중심의 맞춤형 건강관리 서비스를 시각화한 신규 런칭 프로젝트입니다. 병원이 보유한 AI 위·대장내시경 진단 시스템의 기술력을 강조하고, 지역을 대표하는 내과로서의 신뢰감 있는 분위기를 웹 공간에 정밀하게 구현했습니다. 사용자가 병원의 전문 시스템을 한눈에 인지할 수 있도록 직관적인 비주얼 요소와 세련된 디자인 톤을 적용했습니다.',
      '반응형 퍼블리싱을 통해 다양한 모바일 기기에서도 PC와 동일한 수준의 몰입감 있는 사용자 경험을 제공합니다. 기기별 해상도에 맞춰 유동적으로 변화하는 레이아웃을 설계하여 어떤 환경에서도 정보 손실 없이 깔끔한 인터페이스를 유지하도록 했습니다. 특히 모바일 사용자의 편의성을 고려한 터치 인터랙션과 속도 최적화 작업을 병행하여 편리한 이용 환경을 구축했습니다.',
      '진료과목 영역에는 마우스 호버(Hover) 인터랙션을 적용하여 방대한 치료 정보를 깔끔하고 가독성 좋게 정리했습니다. 사용자의 인터랙션에 따라 정보를 단계적으로 노출함으로써 시각적 피로도를 줄이고 정보 전달의 효율성을 높였습니다. 병원의 개성과 운영 니즈를 완벽히 반영한 맞춤형 레이아웃을 통해 전문 의료 정보를 효과적으로 전달하는 성과를 거두었습니다.'
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
      '카드형 레이아웃과 직관적인 호버 인터랙션으로 정보 전달력을 높인 반응형 웹사이트',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Gnuboard', 'Figma'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/seouleveryday365/main.png',
    detailImages: [
      '/images/projects/seouleveryday365/pc-01.jpg',
      '/images/projects/seouleveryday365/mo-01.jpg',
    ],
    logo: '/images/projects/seouleveryday365/logo.png',
    longDescription: [
      '365일 연중무휴 진료를 제공하는 병원의 특징을 시각화한 신규 런칭 프로젝트입니다. 사용자의 시선을 끄는 섹션별 테마와 역동적인 인터렉티브 UI를 구현하여 방문자들에게 강렬한 첫인상을 전달하는 데 집중했습니다. 언제 어디서나 신속하게 진료 정보를 확인해야 하는 사용자의 특성을 반영하여 직관적이고 반응이 빠른 웹 환경을 구축하는 것을 핵심 목표로 진행했습니다.',
      '영양수액 및 진료 안내 영역에는 세련된 카드 형식의 레이아웃을 채택하여 정보의 가독성을 획기적으로 높였습니다. PC 환경에서는 각 카드에 호버 인터랙션을 적용해 상세 정보를 동적으로 노출하며, 모바일에서는 Slick Slide를 활용해 스와이프로 정보를 쉽고 빠르게 탐색할 수 있도록 설계했습니다. 이처럼 디바이스별 특성에 맞춘 UI 최적화로 최상의 UX를 구현했습니다.',
      '병원의 프리미엄 이미지를 구축하기 위해 모든 레이아웃을 전면 신규 제작하였으며, AOS 스크롤 애니메이션을 통해 정보 도달율을 극대화했습니다. 365일 진료라는 핵심 가치를 부각하기 위해 메타 데이터를 전략적으로 최적화하여 기술적 완성도를 높였고, 환자들이 야간이나 공휴일에도 정체된 느낌 없이 최신 진료 정보를 접할 수 있도록 원활한 운영 기반을 마련했습니다.'
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
    longDescription: [
      '성남 지역의 신뢰받는 안과로서의 브랜드 가치를 재정립하기 위한 메인 페이지 전면 리뉴얼 프로젝트입니다. 기존의 노후화된 느낌을 탈피하고, 현대적이고 세련된 디자인 아이덴티티를 수립하여 방문자들에게 최첨단 의료 서비스를 제공하는 병원의 이미지를 시각적으로 전달하는 데 주력했습니다.',
      '사용자의 스크롤에 따라 반응하는 AOS 애니메이션과 역동적인 인터랙티브 요소를 곳곳에 배치하여 사이트에 생동감을 더했습니다. 단순한 정보 나열이 아닌, 시각적 흐름에 따라 자연스럽게 병원의 강점이 노출되도록 설계하였으며, 반응형 퍼블리싱 기술을 통해 모든 스마트 기기에서 최적화된 화면 구성을 일관되게 유지하도록 구현했습니다.',
      '안과 진료의 핵심 정보를 담은 상세페이지를 사용자 경험(UX) 관점에서 새롭게 설계했습니다. 환자들이 질환 정보와 치료 과정을 한눈에 파악할 수 있도록 정보 구조(IA)를 개선하였으며, 가독성 높은 레이아웃과 직관적인 네비게이션을 통해 정보 전달력을 극대화했습니다. 4년 이상의 장기 유지보수를 통해 사이트의 품질과 안정성을 지속적으로 관리해왔습니다.'
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
      '교수 출신 원장의 신뢰도와 수술·비수술 치료를 직관적으로 대비시킨 정형외과 랜딩페이지',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Gnuboard', 'Figma'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/miasamsung/main.png',
    detailImages: [
      '/images/projects/miasamsung/pc-01.jpg',
      '/images/projects/miasamsung/mo-01.jpg',
    ],
    logo: '/images/projects/miasamsung/logo.jpg',
    longDescription: [
      '"대학교수 출신, 삼성서울병원의 노하우"라는 대표원장의 독보적인 전문성과 신뢰도를 시각적으로 강조한 정형외과 신규 런칭 프로젝트입니다. 병원 진입의 핵심 동력인 의료진의 권위와 풍부한 임상 경험을 메인 히어로 영역에 전략적으로 배치하여, 방문자가 사이트 접속과 동시에 강력한 신뢰감을 형성할 수 있도록 페이지를 구성했습니다.',
      '수술 및 비수술 치료 등 방대한 진료 카테고리를 아이콘 중심의 카드 UI로 구조화하여 정보 접근성을 획기적으로 개선했습니다. 사용자가 자신의 증상에 맞는 진료 정보를 직관적으로 찾아낼 수 있도록 설계하였으며, AOS 스크롤 애니메이션을 적용해 핵심 의료 콘텐츠가 시각적 흐름에 따라 순차적으로 노출되도록 하여 정보에 대한 집중도와 몰입감을 극대화했습니다.',
      'Slick 슬라이더 라이브러리를 활용해 첨단 의료 장비와 쾌적한 병원 시설을 생생하게 소개하며, Sticky 네비게이션 시스템을 도입하여 어떤 페이지 위치에서도 주요 메뉴와 예약 시스템에 즉각 접근할 수 있도록 구현했습니다. 정밀한 반응형 퍼블리싱을 통해 모바일 환경에서도 PC 수준의 고품질 UX를 선사하며 병원의 디지털 브랜드 가치를 완성했습니다.'
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
    longDescription: [
      '올바른마디튼튼 프랜차이즈의 표준 디자인 시스템을 기반으로, 지점만의 차별화된 의료 서비스인 척추·관절 비수술 통증 치료를 효과적으로 부각한 신규 런칭 프로젝트입니다. 브랜드의 일관성을 유지하면서도 지역 거점 병원으로서의 신뢰감을 전달하기 위해, 직관적인 비주얼 요소와 정교한 레이아웃 설계를 통해 병원의 전문적인 이미지를 시각화하는 데 집중했습니다.',
      '의료진 소개부터 세분화된 클리닉 정보까지 방대한 데이터를 사용자가 쉽고 빠르게 탐색할 수 있도록 체계적인 네비게이션 구조를 구현했습니다. 특히 바쁜 현대인들을 위한 야간 진료 정보를 전략적으로 배치하여 편의성을 강조했으며, 각 섹션별로 최적화된 인터랙션을 적용하여 정보 전달의 효율성을 높이면서도 사용자에게 지루함 없는 브라우징 경험을 제공합니다.',
      '100% 단독으로 수행한 이번 프로젝트는 컴포넌트 단위의 모듈화 퍼블리싱을 통해 지점별 특화 정보를 유연하게 커스터마이징할 수 있도록 구축되었습니다. 모든 디바이스 환경에서 완벽하게 작동하는 반응형 웹 기술을 적용하고 검색 엔진 최적화(SEO) 작업을 병행하여, 개원 초기 온라인 브랜드 노출과 실제 환자 유입을 극대화하는 성과를 거두었습니다.'
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
    longDescription: [
      '프리미엄 피부 클리닉의 이미지를 시각적으로 완성하기 위해 고급스러운 감성과 정교한 인터랙션을 적용한 리뉴얼 프로젝트입니다. 병원이 추구하는 심미적 가치를 웹상에 고스란히 담아내기 위해 톤 앤 매너를 세심하게 조정하였으며, 방문자들이 사이트 접속 시 세련되고 신뢰감 있는 브랜드 분위기를 즉각적으로 느낄 수 있도록 각 요소의 배치를 최적화했습니다.',
      '기술적으로는 제한적인 서버 환경을 극복하기 위해 유튜브 링크 연동 방식을 활용하여 Hero 영역에 고해상도 백드롭 영상을 구현했습니다. 이를 통해 페이지 로딩 속도를 유지하면서도 시각적인 몰입감을 극대화하는 성과를 거두었으며, 스크롤에 반응하는 섬세한 애니메이션 효과를 더해 사용자가 사이트를 탐색하는 과정에서 프리미엄한 브랜드 가치를 경험하도록 했습니다.',
      '메인 페이지와 의료진 소개 등 핵심 영역에 대한 퍼블리싱을 전담하며, 검색 엔진 최적화(SEO) 작업을 병행하여 온라인 마케팅 효율을 대폭 향상시켰습니다. 리뉴얼 이후 장기적인 유지보수 계약을 통해 병원의 최신 소식과 이벤트를 실시간으로 반영하며 기술적 파트너로서 신뢰를 쌓아왔으며, 현재까지도 안정적인 운영과 트래픽 관리를 지원하고 있습니다.'
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
    longDescription: [
      '정신건강의학과 특유의 편안하고 따뜻한 브랜드 이미지를 웹 공간에 구현하는 데 주력한 신규 랜딩페이지 구축 프로젝트입니다. 마음의 안정을 찾는 환자들이 사이트 접속 시 거부감을 느끼지 않도록 부드러운 색조와 여유로운 레이아웃을 채택하였으며, 병원의 친절하고 전문적인 진료 철학이 시각적 요소와 조화롭게 어우러지도록 설계하는 데 집중했습니다.',
      '기술적으로는 background-attachment: fixed 속성을 활용해 페이지 섹션 간의 깊이감 있는 스크롤 전환 효과를 구현했습니다. 이러한 정적인 시각적 풍성함은 모바일 환경에서는 부드러운 슬라이드 인터랙션으로 최적화하여 전환되도록 설계하여, 디바이스에 관계없이 일관된 감성적 사용자 경험(UX)을 제공하며 사이트의 전반적인 완성도를 높였습니다.',
      'AOS 애니메이션 라이브러리를 통해 주요 정보가 자연스럽게 노출되도록 구성하였으며, 철저한 SEO 작업을 통해 지역 내 잠재 환자들이 병원을 쉽게 발견할 수 있는 기술적 토대를 마련했습니다. 가독성 높은 텍스트 배치와 직관적인 네비게이션을 통해 사용자가 필요한 정보를 스트레스 없이 얻도록 지원하며 병원의 신뢰도 상승에 기여했습니다.'
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
    longDescription: [
      '정형외과 특유의 전문성과 신뢰감 있는 이미지를 방문자에게 전달하기 위해 7페이지 규모의 고품질 반응형 웹사이트를 구축했습니다. 안양 지역의 대표적인 정형외과로서 병원이 추구하는 환자 중심의 진료 가치를 시각적으로 정교하게 구현하였으며, 깔끔하고 정돈된 디자인 톤을 통해 의료진의 전문 역량이 돋보이도록 페이지의 전반적인 분위기를 조성했습니다.',
      '다년간의 풍부한 임상 경험과 치료 성과를 수치적으로 강조하기 위해 Count 애니메이션 효과를 주요 섹션에 도입했습니다. 또한 Hero 영역에는 역동적인 백드롭 영상을 배치하여 사이트 접속 초기부터 사용자들의 시선을 강력하게 사로잡았으며, AOS 스크롤 애니메이션을 통해 방대한 진료 정보가 시각적 흐름에 따라 자연스럽고 흥미롭게 노출되도록 설계했습니다.',
      '복잡한 진료 과목 정보를 사용자가 스트레스 없이 탐색할 수 있도록 정보 구조(IA)를 체계화하여 가독성을 극대화했습니다. 모든 디바이스에서 최적의 인터페이스를 제공하는 반응형 퍼블리싱 기술을 적용하고, 전략적인 검색 엔진 최적화(SEO) 작업을 병행하여 실제 환자 유입과 예약 전환율을 높였습니다. 수년간의 장기 유지보수를 통해 병원의 디지털 경쟁력을 안정적으로 관리하고 있습니다.'
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
    longDescription: [
      '전문적이고 프리미엄한 브랜드 이미지를 전달하는 데 주력한 산부인과 맞춤형 랜딩페이지 신규 구축 프로젝트입니다. 서울아름 브랜드만의 고유한 정체성을 시각화하기 위해 우아하고 안정감 있는 색조를 채택하였으며, 환자들이 병원의 최신 시설과 전문 의료 서비스를 신뢰하고 선택할 수 있도록 상세한 정보를 직관적으로 배치했습니다.',
      '산부인과 운영 특성상 빈번하게 발생하는 이벤트와 공지사항 팝업 수요에 효과적으로 대응하기 위해, 그누보드 기반의 팝업 시스템을 슬라이드 롤링 형태로 커스텀 개발했습니다. 이 기능은 사용자에게 시각적 피로도를 주지 않으면서도 다수의 프로모션 정보를 효율적으로 전달할 수 있도록 설계되었으며, 향후 다른 메디컬 프로젝트에도 표준 기능으로 채택될 만큼 뛰어난 실무적 효과를 거두었습니다.',
      '반응형 퍼블리싱 기술을 통해 모바일에서도 PC와 동일한 수준의 고품질 UI/UX를 구현하여 여성 환자들의 모바일 접근성을 극대화했습니다. 체계적인 SEO 최적화 작업을 통해 검색 엔진 노출 순위를 개선하는 성과를 도출하였으며, 리뉴얼 이후 장기적인 유지보수 계약을 체결하여 병원의 온라인 브랜드 신뢰도를 지속적으로 관리하고 발전시키는 데 핵심적인 역할을 수행하고 있습니다.'
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
    longDescription: [
      '올바른정형외과 프랜차이즈의 디지털 기준점을 수립하고 전국적인 지점 확장의 기반이 된 핵심 웹사이트 구축 프로젝트입니다. 전문 의료진의 아이덴티티와 풍부한 치료 경험을 시각적으로 부각하는 데 집중하였으며, 병원 고유의 신뢰감 있는 브랜드 톤을 정립하여 환자들이 사이트 접속만으로도 비수술 치료의 전문성을 실시간으로 느낄 수 있도록 전반적인 레이아웃을 설계했습니다.',
      '기술적으로는 비수술 치료 실적과 같은 핵심 성과를 동적인 Count 애니메이션 효과로 강조하여 신뢰도를 높였습니다. 체계적인 정보 구조(IA) 설계와 완성도 높은 반응형 퍼블리싱 기술을 적용하여 방대한 의료 콘텐츠를 직관적으로 전달하는 데 성공했습니다. 이 프로젝트에서 구축된 레이아웃은 이후 다른 지점 확장 시 표준 모델로 채용될 만큼 구조적인 안정성과 효율성을 인정받았습니다.',
      '100% 단독 퍼블리싱으로 진행된 이번 작업은 기기별 최적화된 인터페이스를 제공하며 사용자 이탈을 최소화했습니다. 검색 엔진 최적화(SEO) 전략을 통해 지역 내 주요 키워드 노출을 극대화하였고, 결과적으로 개원 초기부터 안정적인 환자 유입을 이끌어내는 마케팅적 성과를 거두었습니다. 기술적 완성도와 운영 편의성을 동시에 확보하며 병원의 성공적인 디지털 안착에 크게 기여했습니다.'
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
    longDescription: [
      '여성을 주요 타겟으로 하는 피부 클리닉의 브랜드 컨셉에 맞춰, 방문자의 시각적 만족도와 감성적 몰입감을 극대화한 맞춤형 비주얼 웹사이트 구축 프로젝트입니다. 각 클리닉 페이지마다 해당 진료의 특징을 살린 개별 레이아웃을 적용하여 단조로움을 피하고, 세련된 디자인 톤을 통해 \'예쁨의정석\'이라는 브랜드 네임에 걸맞은 프리미엄한 가치를 시각적으로 정밀하게 구현했습니다.',
      '복잡한 의료 장비 정보와 진료 안내 콘텐츠를 사용자가 쉽게 이해할 수 있도록 유려한 슬라이드 인터랙션과 탭 구조를 활용해 정리했습니다. 특히 자체 개발한 그누보드 기반의 슬라이드 롤링 팝업 기능을 이식하여, 병원 관리자가 다양한 이벤트와 혜택을 시각적 방해 없이 효과적으로 홍보할 수 있는 운영 환경을 구축했습니다. 모바일 환경에서도 이러한 감성적 요소가 온전히 전달되도록 반응형 기술을 최적화했습니다.',
      '퍼블리싱부터 SEO 최적화까지 전 과정을 전담하며 사이트의 대외적인 가시성을 높이는 성과를 창출했습니다. 구축 완료 후 현재까지도 장기 유지보수 파트너로서 병원과 긴밀한 신뢰 관계를 유지하며, 실시간 업데이트와 트래픽 관리를 안정적으로 지원하고 있습니다. 이러한 기술적 기반은 병원이 피부 미용 의료 시장에서 확고한 브랜드 인지도를 구축하고 고객 유입을 지속하는 데 중요한 토대가 되었습니다.'
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
    longDescription: [
      '병원의 신뢰감 있는 이미지와 전문적인 진료 시스템을 환자들에게 효과적으로 전달하기 위해 설계된 반응형 웹사이트 구축 프로젝트입니다. 삼성탑정형외과의 전문성과 섬세한 진료 철학을 시각화하기 위해 직관적인 레이아웃을 채택하였으며, 방문자들이 병원의 핵심 강점과 의료진의 역량을 사이트 접속 초기부터 명확하게 인지할 수 있도록 정보의 계층 구조를 정밀하게 설계하는 데 주력했습니다.',
      '환자들이 특히 궁금해하는 진료 과목과 첨단 장비 정보의 가독성을 높이기 위해 유려한 슬라이드 인터랙션을 적재적소에 배치했습니다. 여러 명의 의료진 정보를 한눈에 파악할 수 있도록 탭 구조를 활용해 레이아웃을 최적화하였으며, PC뿐만 아니라 모바일에서도 동일한 수준의 고품질 사용자 경험(UX)을 제공할 수 있도록 정교한 미디어 쿼리 제어와 퍼블리싱 작업을 수행했습니다.',
      '기술적 완성도와 함께 검색 엔진 최적화(SEO) 작업을 철저히 진행하여 실제 잠재 환자들의 접근성을 강화했습니다. 구축 이후 4년 이상의 장기 유지보수를 전담하며 병원의 진료 환경 변화에 기민하게 대응해왔으며, 현재까지도 장애 없는 안정적인 운영을 통해 온라인 브랜드 신뢰도를 공고히 하고 있습니다. 병원의 성장을 디지털 기술력으로 뒷받침하며 지속적인 기술 파트너십을 유지하고 있습니다.'
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
    longDescription: [
      '다량하고 세분화된 재활의학과의 진료 정보를 사용자들이 직관적으로 인지하고 탐색할 수 있도록 설계된 맞춤형 반응형 랜딩페이지 프로젝트입니다. 신규 런칭 병원의 신선하고 전문적인 이미지를 웹상에 구현하기 위해 밝고 단정한 톤을 사용하였으며, 거점 병원으로서 지역 환자들에게 신뢰감을 줄 수 있는 브랜드 아이덴티티를 확립하는 데 시각적 연출의 초점을 맞추었습니다.',
      '특히 정보량이 많은 비수술 치료 영역에는 직관적인 카드 형태의 레이아웃과 부드러운 슬라이드 인터랙션을 도입하여 가독성을 획기적으로 개선했습니다. 사용자가 마우스나 터치로 정보를 쉽게 넘겨보며 필요한 내용을 빠르게 찾을 수 있도록 UI를 최적화하였으며, 스크롤에 반응하는 AOS 애니메이션을 적용해 전체적인 사이트의 생동감을 높이고 정보 전달의 피로도를 효과적으로 낮추었습니다.',
      '반응형 퍼블리싱 기술을 적용해 모든 스마트 디바이스에서 최상의 사용성을 보장하며, 체계적인 SEO 최적화 작업을 통해 검색 엔진 노출 빈도를 높이는 성과를 창출했습니다. 각 진료부위별 맞춤형 섹션 구성으로 환자들의 내원 결정에 필요한 핵심 정보를 전략적으로 노출하였으며, 안정적인 기술 기반 위에 구축된 사이트는 병원의 초기 브랜드 포지셔닝과 환자 유입 확대에 유의미한 기여를 했습니다.'
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
    longDescription: [
      '병원의 핵심 경쟁력인 맞춤형 줄기세포 치료 기술의 전문성을 시각적으로 극대화하고, 환자들에게 첨단 의료 서비스의 신뢰를 전달하기 위해 구축된 반응형 웹사이트입니다. 정형외과 진료의 정점을 추구하는 브랜드 가치를 웹 공간에 고품질 비주얼로 담아냈으며, 사용자가 페이지를 탐색하는 과정에서 병원만의 차별화된 의료 기술력과 치료 철학을 자연스럽게 인지할 수 있도록 유도하는 IA를 설계했습니다.',
      '특히 비수술 치료 안내 페이지에는 풀페이지(Full-Page) 스크롤 디자인 기법을 적용하여, 정보의 깊이감과 몰입도를 대폭 향상시키는 기술적 시도를 진행했습니다. 섹션별로 웅장한 시각 요소와 정교한 애니메이션을 배치하여 방문자의 시선을 압도하는 연출을 수행했으며, 일반 진료 및 장비 소개 영역은 슬라이드 시스템과 결합해 전체 7페이지 규모의 완성도 높은 반응형 인터페이스를 100% 단독 구축했습니다.',
      '모바일 기기에서도 이러한 웅장한 인터랙트 기능이 에러 없이 원활하게 작동하도록 상세한 최적화 작업을 병행했습니다. 검색 엔진 최적화(SEO)를 통해 상위 노출 전략을 수립하였으며, 리뉴얼 이후 실제 환자들의 문의가 크게 증가하는 실질적인 마케팅 성과로 이어졌습니다. 탁월한 디자인 완성도와 안정적인 기술력이 결합된 결과물로 병원의 디지털 브랜드 위상을 한 단계 높이는 계기가 되었습니다.'
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
    longDescription: [
      '의료진의 오랜 임상 경험과 소화기내과의 전문성을 전면에 내세워 환자들에게 깊은 신뢰감을 전달하고자 기획된 내과 맞춤형 웹사이트 구축 프로젝트입니다. 내과 특성상 주치의의 전문 이력이 핵심적인 선택 지표가 되므로, 메인 페이지 히어로 영역에 의료진 프로필을 비중 있게 강조하는 레이아웃을 채택하여 방문 즉시 사이트의 신뢰 로직이 완성되도록 전략적으로 설계했습니다.',
      '건강검진 중심의 메뉴 구조를 체계화하여 사용자가 자신의 연령이나 상태에 맞는 검진 프로그램을 한눈에 파악할 수 있도록 UI를 개선했습니다. 7페이지에 달하는 전체 사이트를 다양한 해상도의 모바일 디바이스에 완벽하게 대응하도록 정밀하게 퍼블리싱하였으며, 섬세한 AOS 애니메이션 효과를 도입해 자칫 딱딱할 수 있는 의료 정보 나열에 시각적 리듬감과 생동감을 부여하여 사용자 체류 시간을 높였습니다.',
      '철저한 SEO 최적화 작업을 병행하여 지역 내 \'내과\', \'검진\' 키워드 검색 시 사이트의 가시성을 극대화하는 기술적 기반을 마련했습니다. 안정적인 그누보드 CMS 환경을 구축하여 병원 관리자가 공지사항이나 의료 정보를 직접 신속하게 업데이트할 수 있도록 운영 편의성 또한 확보했습니다. 결과적으로 내실 있는 디지털 홍보 채널로서 병원의 브랜드 이미지 강화와 실제 예약 문의 증대에 성공적으로 기여했습니다.'
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
    longDescription: [
      '공간감이 돋보이는 와이드 프레임 디자인을 채택하여 전문적이고 선진적인 병원 이미지를 웹 공간에 구현한 신규 랜딩페이지 프로젝트입니다. 개방감 있는 레이아웃을 통해 방문자에게 쾌적한 첫인상을 전달하며, 태전 지역을 대표하는 정형외과로서 비수술 치료의 권위와 풍부한 치료 경험을 시각적으로 정밀하게 시각화하여 환자들에게 사이트의 안정감과 신뢰도를 효과적으로 전달하는 데 주력했습니다.',
      '진료 과목은 깔끔한 카드형 인터페이스로 정리하여 정보 접근성을 높였으며, 특히 병원의 강점인 비수술 치료 영역은 별도의 슬라이드 섹션으로 구성해 차별성을 부여했습니다. 시술 누적 건수와 같은 주요 성과 지표를 Count Up 애니메이션 효과를 통해 동적으로 강조함으로써 병원의 전문성을 데이터로 증명하는 구조를 완성했습니다. AOS 효과를 활용해 주요 정보가 시각적 흐름에 따라 순차적으로 노출되도록 구현했습니다.',
      '네이버 예약 시스템과의 유기적인 연동을 통해 사용자의 편의성을 극대화하고 실제 내원으로 이어지는 전환율을 높이는 기술적 작업을 수행했습니다. 모든 디바이스에서 최적화된 화면이 출력되는 반응형 웹 구조를 100% 단독 구축하였으며, 검색 엔진 최적화(SEO) 전략을 수립하여 온라인 홍보 시너지를 창출했습니다. 개원 초기 병원의 디지털 브랜드 이미지를 안착시키고 환자 기반을 확보하는 데 중추적 역할을 수행했습니다.'
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
    longDescription: [
      '기존 병원 메인 웹사이트와는 별개로 교통사고 클리닉 마케팅에 특화된 프로모션 전용 랜딩페이지를 신규 구축한 프로젝트입니다. 한방병원의 전문적인 교통사고 치료 시스템을 효과적으로 알리고, 잠재 고객들이 쉽고 빠르게 상담 신청을 할 수 있도록 유도하는 레이아웃을 설계했습니다. 특정 진료 과목의 마케팅 전략을 지원하기 위해 시각적으로 강점이 돋보이는 독립적인 디자인 톤 앤 매너를 적용했습니다.',
      '단순히 정보를 전달하는 것을 넘어 실제 상담 예약으로 이어지는 전환율을 극대화하기 위해, 직관적인 진료 상담 문의 폼을 직접 개발했습니다. 유입된 사용자 데이터를 백엔드 관리자 DB와 실시간으로 연동시켜 병원 운영진이 언제 어디서든 상담 신청 내역을 즉각 확인하고 응대할 수 있는 효율적인 운영 처리 환경을 구축했습니다. 모바일 사용자 비중이 높은 분야임을 고려해 모바일 터치 UI 최적화에 주력했습니다.',
      '검색 엔진 최적화(SEO) 작업을 통해 특정 프로모션 키워드로 유입되는 사용자를 정밀 타겟팅하였으며, 기술적으로 빠른 페이지 로딩 속도를 유지하여 사용자 이탈을 최소화했습니다. 이 프로젝트는 병원의 전문 클리닉 홍보를 기술적으로 뒷받침하며 온라인 마케팅의 실질적인 도구로서 기능하도록 제작되었습니다. 병원의 디지털 마케팅 성과를 높이는 유연하고 강력한 플랫폼으로서 현재까지도 안정적으로 운영되고 있습니다.'
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
    longDescription: [
      '처음으로 100% 모바일 반응형 구조를 단독으로 설계하고 적용한 14페이지 규모의 대형 구축 프로젝트입니다. 정신건강의학과 특유의 전문성과 신뢰를 시각적으로 강조하면서도, 방문자들이 복잡한 마음을 편안하게 가다듬을 수 있도록 부드러운 블루 톤과 정갈한 레이아웃을 채택하여 브랜드 고유의 가치를 웹 공간에 세밀하게 정립하는 데 집중했습니다.',
      '정보 접근성을 높이기 위해 방대한 진료 카테고리를 직관적인 단계별 UI로 세분화하여 정돈했습니다. 특히 의료진 프로필 섹션에 유연한 슬라이드 효과를 적용하여 많은 수의 전문의 정보를 사용자가 피로감 없이 탐색할 수 있도록 구현했으며, AOS 스크롤 애니메이션을 통해 주요 치료 프로그램이 시각적 흐름에 따라 자연스럽게 노출되도록 설계하여 사용자 경험(UX)을 극대화했습니다.',
      '정교한 반응형 퍼블리싱 기술을 통해 모든 스마트 기기에서 PC와 동일한 수준의 기능과 정보를 끊김 없이 제공합니다. 검색 엔진 최적화(SEO)를 통해 지역 내 잠재 환자 유입을 유의미하게 성장시켰으며, 3년 이상의 장기 유지보수를 통해 병원의 진료 환경 변화와 최신 소식을 실시간으로 반영하며 안정적인 운영을 지원해왔습니다. 병원의 디지털 성장을 이끄는 든든한 기술 파트너 역할을 수행했습니다.'
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
    longDescription: [
      '청담더유외과 고유의 프리미엄 브랜드 아이덴티티와 신뢰감 있는 분위기를 그대로 보존하면서, 현대적인 웹 트렌드에 맞춰 사용자 편의성을 대폭 개선한 리뉴얼 프로젝트입니다. 기존 방문자들에게 익숙함을 주는 동시에 한층 세련된 시각적 경험을 제공하기 위해 톤 앤 매너를 정교하게 다듬었으며, 유방 및 갑상선 진료의 전문성이 돋보일 수 있는 레이아웃 재배치에 주력했습니다.',
      '스크롤에 동적으로 반응하는 AOS 애니메이션을 적용하여 사이트 탐색 과정에 생동감을 부여하고 핵심 콘텐츠에 대한 주목도를 높였습니다. 다양한 접속 환경을 고려한 미디어 쿼리 제어를 통해 디바이스별 최적화된 반응형 인터페이스를 완성하였으며, 특히 모바일 사용자들의 가독성을 높이기 위해 텍스트와 이미지의 배치를 정밀하게 조정하여 정보 전달의 효율성을 극대화했습니다.',
      '검색 엔진 최적화(SEO) 작업을 철저히 병행하여 온라인 가시성을 확보하고, 실제 예약 문의로 이어지는 전환 경로를 최적화했습니다. 메인 페이지 퍼블리싱을 100% 전담하며 병원이 추구하는 고품격 의료 서비스의 가치를 디지털 환경에 성공적으로 안착시켰습니다. 익숙함 속에서도 기능적인 진보를 이뤄낸 결과물로 병원의 장기적인 디지털 브랜드 관리에 중요한 토대를 마련했습니다.'
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
    longDescription: [
      '입사 후 첫 프로젝트로서 병원의 메인 페이지 및 전체 서브페이지 퍼블리싱을 전담한 70% 기여도의 대규모 신규 런칭 프로젝트입니다. 대형 병원에 적합한 무게감 있고 신뢰도 높은 디자인 아이덴티티를 확립하기 위해 레이아웃 구조를 체계적으로 설계하였으며, 환자들이 방대한 의료 정보를 혼선 없이 직관적으로 습득할 수 있도록 사용자 중심의 정보 구조(IA)를 구축하는 데 주력했습니다.',
      '사내 기획, 디자인 팀은 물론 외부 개발자와의 긴밀한 협업 체계 안에서 능동적으로 소통하며 프로젝트의 전 과정을 조율했습니다. 대형 프로젝트 특유의 복잡한 일정 관리와 다과 진료 정보를 효율적으로 처리하는 프로세스를 깊이 있게 이해하게 되었으며, 모든 페이지에 걸쳐 일관성 있는 반응형 퍼블리싱 기술을 적용하여 어떤 기기에서도 끊김 없는 사용자 경험(UX)을 구현하는 데 성공했습니다.',
      '런칭 이후에도 약 1년 3개월간 상시 유지보수를 전담하며 사이트 품질을 안정적으로 관리하고 병원의 요구사항에 기민하게 대응했습니다. 검색 엔진 최적화(SEO)와 트래픽 관리를 지속적으로 지원하며 대형 병원 웹사이트가 갖추어야 할 기술적 완성도를 증명했습니다. 실무 전반의 탄탄한 기초를 닦은 의미 있는 성과물로 병원의 온라인 브랜드 경쟁력을 장기적으로 뒷받침하는 계기가 되었습니다.'
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
    longDescription: [
      '이건희 회장 주치의 경력의 대표 원장 이력과 "30년 경력의 토탈케어"라는 핵심 신뢰 지표를 시각적으로 강조한 동탄 지역의 프리미엄 치과 리뉴얼 프로젝트입니다. 서울대학교 치과대학 및 삼성서울병원 출신 의료진의 권위를 방문자들에게 즉각 전달하기 위해 메인 히어로 영역을 전략적으로 설계하였으며, 병원 고유의 정교하고 세련된 진료 철학을 웹 공간에 정밀하게 투영했습니다.',
      '임플란트, 심미치료, 소아치과 등 세분화된 진료 과목 섹션을 현대적인 카드형 레이아웃으로 구성하여 정보 탐색의 편의성을 극대화했습니다. 당일 예약 진료 서비스와 첨단 장비 안내 등 병원만의 차별화 포인트를 직관적인 아이콘 섹션으로 시각화하였으며, 스크롤 인터랙션과 반응형 퍼블리싱 기술을 결합하여 모바일에서도 PC와 동일한 수준의 고품질 사용자 경험(UX)을 제공하도록 구현했습니다.',
      '기획 및 디자인 팀과의 협업 프로세스를 심도 있게 경험하며 프로젝트 완성도를 높이는 데 기여했습니다. 철저한 SEO 최적화 작업을 통해 검색 엔진 노출 순위를 개선하여 신규 환자 유입을 활성화하는 성과를 거두었습니다. 이 프로젝트는 이후 대규모 의료 웹사이트를 독립적으로 수행할 수 있는 전문적인 퍼블리싱 역량을 확립하는 데 중요한 발판이 된 의미 있는 시작점이었습니다.'
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
      '10년 이상 누적된 방대한 병원 데이터를 안정적으로 이관 및 최적화한 대규모 인프라 개선',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Photoshop'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/tntnhospital/main_v2.png',
    detailImages: [
      '/images/projects/tntnhospital/pc-01.png',
      '/images/projects/tntnhospital/pc-02.png',
      '/images/projects/tntnhospital/pc-03.png',
    ],
    logo: '/images/projects/tntnhospital/logo.png',
    longDescription: [
      '2010년부터 축적된 10년 이상의 방대한 병원 데이터를 최적화하고 서버 인프라를 대폭 개선한 대규모 리뉴얼 프로젝트입니다. 지점별로 혼재되어 있던 시스템을 완전히 분리하여 독립적인 운영이 가능하도록 구조를 재설계하였으며, 데이터 이관 기록이 전무한 상태에서 수만 건의 DB를 수작업으로 검증하고 경량화하는 고난이도 작업을 철저하게 수행하여 시스템의 안정성을 확보하는 데 성공했습니다.',
      '기술적으로는 관리자 페이지(CMS)의 불필요한 기능을 전면 정리하고 UI를 고도화하여 병원 스태프의 업무 효율을 극대화했습니다. 특히 AI 디자인 툴을 적극적으로 활용하여 관리자 레이아웃을 현대적으로 직접 디자인하고 퍼블리싱을 100% 수행했습니다. 이를 통해 복잡한 데이터 관리 프로세스를 직관적으로 개선하였으며, 대형 병원 시스템이 갖추어야 할 보안성과 확장성을 동시에 충족하는 성과를 거두었습니다.',
      '퍼블리싱 전 과정과 데이터 검수까지 단독으로 완수하며 병원의 디지털 자산을 성공적으로 보존하고 발전시켰습니다. 4년 이상의 장기 유지보수 기간 동안 단 한 차례의 큰 장애 없이 시스템을 운영해왔으며, 현재까지도 실시간 트래픽 관리와 기능 업데이트를 지원하며 기술 파트너로서 확고한 신뢰를 형성하고 있습니다. 병원의 장기 운영에 필수적인 안정적인 IT 인프라를 구축한 핵심 프로젝트입니다.'
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
    longDescription: [
      '청담 본원의 디지털 얼굴인 메인 랜딩 페이지를 성공적으로 구축하고, 무려 4년이라는 긴 기간 동안 유지보수를 전담하며 병원의 성장을 함께해온 핵심 프로젝트입니다. 본원다운 무게감과 세련미를 동시에 전달하기 위해 고품격 비주얼 레이아웃을 적용하였으며, 수많은 환자들이 접속하는 환경에서도 최상의 성능과 속도를 유지할 수 있도록 프론트엔드 최적화 작업에 각별한 노력을 기울였습니다.',
      '주기적인 의료진 정보 업데이트와 진료 시간표 변경, 그리고 실시간 이벤트 프로모션에 기민하게 대응하며 무결점 서비스 운영을 지속해왔습니다. AOS 인터랙션과 섬세한 슬라이드 기능을 활용해 방대한 의료 콘텐츠를 가독성 좋게 배치하였으며, 상세한 미디어 쿼리 제어를 통한 반응형 퍼블리싱으로 어떤 기기를 사용하더라도 청담튼튼병원의 전문성이 온전히 전달되도록 사용자 경험(UX)을 완성했습니다.',
      '철저한 검색 엔진 최적화(SEO) 전략을 수립하고 실행하여 \'청담 정형외과\' 등 주요 키워드 점유율을 높이는 데 기여했습니다. 장기 운영 기간 동안 축적된 데이터를 바탕으로 지속적인 UI/UX 개선을 진행하며 병원의 디지털 브랜드 신뢰도를 최상으로 유지했습니다. 신뢰와 안정성을 바탕으로 한 4년의 성과는 병원과 기술 파트너 간의 확고한 협력 관계를 입증하는 중요한 지표가 되었습니다.'
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
      '국내 최다 수술 이력을 전면에 내세워 환자 신뢰를 이끄는 전문 센터 런칭',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Photoshop'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/spltntn/main.png',
    detailImages: [
      '/images/projects/spltntn/pc-01.jpg',
      '/images/projects/spltntn/mo-01.jpg',
    ],
    logo: '/images/projects/spltntn/logo.jpg',
    longDescription: [
      '해당 분야 국내 최다 수술 이력이라는 강력한 신뢰 지표를 메인 비주얼에 전략적으로 배치하여, 전문 센터로서의 권위를 확립한 리뉴얼 프로젝트입니다. 환자들이 수술에 대한 두려움을 극복하고 병원의 전문성을 즉각 인지할 수 있도록 신뢰 중심의 로직을 레이아웃에 반영하였으며, 깔끔하고 기능적인 디자인 톤 앤 매너를 통해 \'단일공복강경\'이라는 고난도 시술의 정교함을 시각화하는 데 집중했습니다.',
      '웹과 모바일 접속 환경이 각기 다른 사용자의 특성을 분석하여 기기별 분리 최적화 퍼블리싱을 수행했습니다. 각 디바이스에 최적화된 시각 요소와 터치 인터랙션을 개별적으로 적용함으로써 최상의 사용자 경험(UX)을 확보하였으며, AOS 애니메이션을 통해 센터의 주요 성과와 치료 과정을 드라마틱하게 연출했습니다. 4년 이상의 장기 유지보수를 통해 사이트의 품질과 보안을 안정적으로 관리해왔습니다.',
      '체계적인 검색 엔진 최적화(SEO) 작업을 통해 특정 시술 키워드 유입량을 유의미하게 성장시키며 센터의 디지털 영향력을 강화했습니다. 정교한 기술적 기반 위에 구축된 사이트는 잠재적 환자들에게 수술에 대한 정확한 정보를 제공하고 예약으로 이어지는 가교 역할을 충실히 수행하고 있습니다. 기술적 완성도와 마케팅적 효율을 동시에 달성하며 병원 전문 센터 운영의 성공적인 모범 사례를 구축했습니다.'
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
      '생생한 치료 후기를 전면에 연동하여 브랜드 신뢰감을 부여한 웹사이트',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Photoshop'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/veinjointtntn/main.png',
    detailImages: [
      '/images/projects/veinjointtntn/pc-01.jpg',
      '/images/projects/veinjointtntn/mo-01.jpg',
    ],
    logo: '/images/projects/veinjointtntn/logo.png',
    longDescription: [
      '정맥 및 관절 질환 특성상 환자들의 실제 사례와 공감이 중요하다는 점에 착안하여, 실제 치료 후기를 메인 페이지에 직접 연동하는 전략적 UI를 구현한 웹사이트입니다. 방문자가 치료의 효용성을 시각적으로 즉각 체함할 수 있도록 신뢰도 높은 데이터를 전면에 배치하였으며, 부드럽고 안정적인 디자인 톤을 통해 환자들이 자신의 질환에 대해 상담받고 싶은 마음이 자연스럽게 들도록 유도했습니다.',
      '모바일 반응형 구조를 완벽하게 설계하기 위해 상세한 미디어 쿼리 제어와 유연한 레이아웃 시스템을 도입했습니다. AOS 애니메이션 라이브러리를 활용해 자칫 복잡할 수 있는 의료 정보를 시각적 흐름에 따라 부드럽게 노출하도록 연출하였으며, 치료 후기 게시판과 메인 인터페이스를 기술적으로 견고하게 연결하여 병원의 실질적인 치료 성과를 역동적으로 증명하는 인터랙티브 환경을 완성했습니다.',
      '4년에 걸친 장기 유지보수 기간 동안 지속적인 콘텐츠 업데이트와 보안 관리를 전담하며 병원의 디지털 신뢰도를 구축해왔습니다. 검색 엔진 최적화(SEO)를 통해 정맥·관절 질환 치료에 대한 정보 도달율을 극대화하였으며, 이를 통해 실제 신규 환자 유입이 활성화되는 긍정적인 선순환 구조를 마련했습니다. 기술력과 기획력이 조화롭게 결합된 결과물로 병원의 장기적인 디지털 마케팅 경쟁력을 확보했습니다.'
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
      '밝고 친근한 분위기를 가득 담아 아이와 부모를 함께 배려한 웹 클리닉',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Photoshop'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/hightntn/main_v2.png',
    detailImages: [
      '/images/projects/hightntn/pc-01.jpg',
      '/images/projects/hightntn/mo-01.jpg',
    ],
    logo: '/images/projects/hightntn/logo.png',
    longDescription: [
      '성장기 아이들과 부모라는 주 이용 타겟의 성향을 세심하게 고려하여, 단정하면서도 따뜻하고 밝은 분위기로 전체 디자인 톤 앤 매너를 리뉴얼한 웹사이트입니다. 아이들의 성장에 대한 부모의 걱정을 덜어주고 병원의 전문성을 신뢰할 수 있도록 편안한 색채와 친근한 비주얼 요소를 채택하였으며, 성장 클리닉만의 독창적인 아이덴티티를 디지털 공간에 성공적으로 구현하는 데 시각적 초점을 맞추었습니다.',
      '매체별 사용성을 극대화하기 위해 웹과 모바일 환경을 각각 별도로 정밀 타겟팅하여 작업하는 분리 퍼블리싱 기법을 적용했습니다. 각 기기 특유의 사용자 행동 패턴에 맞춘 UI 구성을 통해 최적화된 사용자 경험(UX)을 선사하며, 복잡한 검사 항목과 치료 과정 정보를 가독성 높은 탭과 슬라이드 인터랙션으로 깔끔하게 정리했습니다. 4년간의 유지보수를 통해 클리닉의 신뢰도를 안정적으로 유지해왔습니다.',
      '철저한 SEO 최적화 작업을 병행하여 \'성장 클리닉\' 관련 주요 검색어 점유율을 높이고, 잠재 고객들이 병원의 전문 정보를 쉽게 접할 수 있도록 지원했습니다. 리뉴얼 이후 높아진 사용자 체류 시간과 낮은 이탈률은 기술적 완성도와 디자인적 감성이 잘 어우러졌음을 증명하는 성과입니다. 병원의 최신 소식과 이벤트를 실시간으로 관리하며 부모들이 언제든 신뢰하고 방문할 수 있는 디지털 환경을 구축했습니다.'
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
    longDescription: [
      '디스크, 인공관절, 하지정맥류 등 전문 치료부터 성장클리닉까지 아우르는 대형 병원의 메인 리뉴얼 및 3년 장기 운영 유지보수 프로젝트입니다. 병원이 보유한 다과 진료 시스템과 첨단 의료 장비의 강점을 시각적으로 강조하기 위해 레이아웃을 전면 개편하였으며, 방문자들이 자신의 증상에 맞는 전문 센터로 가장 빠르고 정확하게 접근할 수 있도록 사용자 중심의 정보 구조(IA)를 재정립하는 데 주력했습니다.',
      '도수/운동치료, 물리/특수치료 등 분야별 서브 섹션을 독립적인 컴포넌트로 구성하여 방대한 치료 정보를 체계적으로 관리할 수 있는 퍼블리싱 시스템을 구축했습니다. 아이콘과 카드 UI를 적극 활용해 복잡한 의료 텍스트의 가독성을 높였으며, 반응형 기술을 통해 모든 디바이스에서 동일한 수준의 고품질 정보를 끊김 없이 제공하도록 구현했습니다. 3년간 실시간 콘텐츠 업데이트를 전담하며 안정성을 확보했습니다.',
      '치료후기, 뉴스레터, 영상 콘텐츠 등 병원의 마케팅 자산을 전략적으로 배치하여 환자들과의 디지털 소통을 강화했습니다. 검색 엔진 최적화(SEO)와 트래픽 분석을 지속적으로 수행하며 동대문 지역 대표 병원으로서의 온라인 영향력을 공고히 했습니다. 장기적인 기술 파트너십을 통해 병원의 진료 환경 변화에 유연하게 대응해왔으며, 현재까지도 장애 없는 안정적인 디지털 운영을 성공적으로 뒷받침하고 있습니다.'
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
    longDescription: [
      '의정부 지역 환자들에게 척추, 관절, 뇌신경 센터의 원스톱 진료 시스템의 신뢰를 전달하기 위해 기획된 리뉴얼 및 4년 장기 운영 유지보수 프로젝트입니다. 병원이 보유한 다과 진료의 전문성을 체계적으로 시각화하기 위해 각 센터별 정보를 독립적이면서도 유기적으로 연결하였으며, 지역 거점 병원으로서의 권위와 안정을 웹의 시각적 요소로 정밀하게 구현하는 데 집중했습니다.',
      '6개 주요 진료 과목을 직관적인 아이콘 카드 UI로 안내하여 환자가 당일 검사부터 치료까지의 과정을 한눈에 파악할 수 있도록 설계했습니다. AOS 스크롤 애니메이션과 반응형 퍼블리싱 기술을 적용해 모든 스마트 기기에서 PC와 동일한 고품질 사용자 경험(UX)을 제공하며, 의료 정보의 가독성을 높이기 위해 텍스트 계층 구조를 정밀하게 다듬었습니다. 4년간 장애 없이 사이트를 안정적으로 운영해왔습니다.',
      '의정부 지역 환자들을 타겟으로 한 지역 코드 중심의 검색 엔진 최적화(SEO) 강화 작업을 지속적으로 수행하여 실제 내원 환자 유입을 극대화하는 성과를 도출했습니다. 언론보도, 치료후기 등 병원의 최신 콘텐츠를 실시간으로 업데이트하며 디지털 소통 창구로서의 기능을 충실히 수행했습니다. 기술적 완성도와 정교한 운영 관리를 통해 병원의 온라인 브랜드 경쟁력을 장기적으로 확립했습니다.'
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
      '4년 운영 유지보수 후 2026년 2월 휴원까지 전 수명 주기를 담당한 노원 참튼튼병원 담당 프로젝트',
    tools: ['HTML', 'jQuery', 'JS', 'CSS', 'PHP', 'MySQL', 'Photoshop'], // HTML, CSS, SCSS, Tailwind, JS, jQuery, Gnuboard, PHP, MySQL, Figma, Photoshop
    image: '/images/projects/nowontntn/main.png',
    detailImages: [
      '/images/projects/nowontntn/pc-01.jpg',
      '/images/projects/nowontntn/mo-01.jpg',
    ],
    logo: '/images/projects/nowontntn/logo.jpg',
    longDescription: [
      '4년간 운영 유지보수를 전담하며 병원의 개원부터 휴원까지 디지털 운영의 전 수명 주기를 함께한 노원 참튼튼병원 담당 프로젝트입니다. 진료시간, 의료진 프로필, 상시 이벤트 변경 등 빈번한 요구사항에 100% 신속 대응하며 사이트의 신뢰도를 관리해왔으며, 지역 기반의 정형외과로서 환자들이 언제 어디서나 정확한 진료 정보를 접할 수 있도록 웹 환경의 안정성을 최우선으로 고려해 운영했습니다.',
      '2026년 2월 휴원 결정에 따라 휴원 안내 페이지를 즉각 구축하고, 의무기록 사본 발급 안내 등 환자들에게 필수적인 정보 접근성을 높이기 위한 UI를 신속하게 반영했습니다. 반응형 기술을 통해 모바일에서도 안내 사항이 누락 없이 명학하게 전달되도록 최적화하였으며, 웹사이트 운영 종료 시점까지 콘텐츠를 실시간으로 관리하며 유종의 미를 거둘 수 있도록 기술적으로 뒷받침했습니다.',
      '장기 유지보수 기간 동안 검색 엔진 최적화(SEO)와 트래픽 관리를 통해 높은 온라인 노출도를 유지했으며, 병원의 운영 상황 변화에 따른 유연한 웹 대응 역량을 증명했습니다. 기술 파트너로서 병원의 시작과 끝을 함께하며 축적된 운영 데이터와 노하우는 대형 병원 웹사이트의 전 수명 주기를 관리하는 전문 퍼블리싱 실무의 귀중한 토대가 되었습니다.'
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
    longDescription: [
      '척추·관절(본관)부터 건강검진·특수검진(신관)까지 아우르는 구로 참튼튼병원의 신규 런칭부터 4년 장기 유지보수까지 전 과정을 담당한 핵심 프로젝트입니다. "지역사회의료발전과 건강증진에 기여"하는 병원의 철학을 시각적으로 강조하면서도, 방대한 다과 진료 정보를 사용자가 혼선 없이 탐색할 수 있도록 체계적인 정보 구조(IA)와 세련된 클린 디자인 레이아웃을 구축하는 데 주력했습니다.',
      '신관 증설 및 진료 과목 확장에 맞춰 신규 서브페이지들을 기민하게 추가 구축하고, 본관과 신관의 정보를 논리적으로 분리하여 사용자 편의성을 높였습니다. AOS 애니메이션과 아이콘 중심의 UI를 활용해 복잡한 의료 콘텐츠의 가독성을 극대화하였으며, 100% 단독 반응형 퍼블리싱을 통해 모든 스마트 기기에서 PC 수준의 고품질 UX를 제공했습니다. 4년간 실시간 업데이트를 통해 무결점 운영을 지속해왔습니다.',
      '검색 엔진 최적화(SEO)를 통해 구로 및 인근 지역의 잠재 환자 유입을 유의미하게 성장시키는 성과를 창출했습니다. 치료후기와 비수술 치료 콘텐츠를 정기적으로 최신화하여 병원의 브랜드 가치 상승에 기여하였으며, 견고한 기술력을 바탕으로 한 디지털 파트너로서 병원의 장기적인 성장을 지원해왔습니다. 수년간 쌓아온 신뢰와 기술적 안정성은 병원의 온라인 브랜드 경쟁력을 강화하는 핵심 동력이 되었습니다.'
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
    longDescription: [
      '대구 지역 대표 의료진의 권위와 "당일 검사부터 치료까지"의 원스톱 진료 전문성을 시각적으로 구현한 리뉴얼 및 2년 장기 운영 유지보수 프로젝트입니다. 원장의 학수적 배경과 풍부한 임상 경험을 신뢰 로직 중심으로 메인 히어로 영역에 전략적으로 배치하여, 방문자들이 접속 즉시 병원의 전문적인 역량을 명확하게 인지하고 신뢰를 형성할 수 있도록 페이지 전반의 톤 앤 매너를 설계했습니다.',
      '척추, 관절, 내과, 검진 등 6개 주요 진료 분야를 직관적인 번호 카드 UI로 정렬하여 환자가 진료 흐름을 한눈에 파악할 수 있도록 퍼블리싱했습니다. 스크롤 인터랙션과 반응형 기술을 결합하여 모든 디바이스에서 최적의 인터페이스가 출력되도록 상세한 미디어 쿼리 제어를 수행하였으며, 비수술 치료 우선 명제를 콘텐츠에 일관되게 반영하여 병원의 진료 철학이 시각적으로 명확히 전달되도록 유도했습니다.',
      '대구 지역 환자들을 타겟으로 한 지역 키워드 중심의 검색 엔진 최적화(SEO)를 강화하여 온라인 접근성을 비약적으로 향상시켰습니다. 2년의 운영 기간 동안 의료진 변경 및 최신 진료 정보를 실시간으로 반영하며 디지털 소통 채널로서의 품질을 유지했습니다. 이러한 적극적인 기술 지원은 실제 예약률 상승과 환자 만족도 개선으로 이어졌으며, 병원의 디지털 브랜드 가치를 지역 내에 안착시키는 성과를 거두었습니다.'
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
    longDescription: [
      '20년 개원 컨설팅 노하우를 보유한 병원 전문 기업의 브랜드 아이덴티티와 마케팅 플랫폼 서비스를 체계적으로 시각화한 리뉴얼 프로젝트입니다. 개원 입지 선정부터 경영 관리까지 아우르는 기업의 방대한 서비스를 전략적으로 구조화하여 방문자들이 원하는 솔루션으로 쉽고 빠르게 접근할 수 있도록 IA를 개선하였으며, 신선하고 전문적인 비즈니스 톤 앤 매너를 웹 공간에 정밀하게 구현했습니다.',
      '서비스 영역별 섹션 구조를 새롭게 설계하고, 바이럴, SNS, 언론보도 등 다양한 마케팅 채널의 특징을 직관적인 비주얼 요소와 슬라이드 인터랙션으로 정리했습니다. 특히 관리자 기능과 연동되는 실시간 문의 상담 시스템을 구축하여 병원 고객들이 기기 종류와 상관없이 편리하게 컨설팅 신청을 할 수 있도록 UI를 최적화했습니다. 100% 단독 반응형 퍼블리싱을 통해 전문 B2B 플랫폼의 완성도를 높였습니다.',
      '4년간 유지보수를 전담하며 기업의 최신 포트폴리오와 서비스 개편 소식을 실시간으로 업데이트했습니다. 철저한 검색 엔진 최적화(SEO) 작업을 통해 기업의 온라인 가시성을 확보하고 비즈니스 전환 기회를 확대하는 성과를 도출했습니다. 기술적 안정성과 기민한 운영 관리를 통해 기업의 장기적인 디지털 신뢰도를 구축하였으며, 현재까지도 긴밀한 기술 파트너십을 유지하며 성장을 뒷받침하고 있습니다.'
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
    longDescription: [
      '300회 이상의 병원 마케팅 진행 실적과 94%의 높은 재계약률이라는 독보적인 수치를 동적으로 강조한 병원 전문 마케팅 기업의 리뉴얼 프로젝트입니다. 기업의 핵심 성과를 메인 페이지 상단에 CountUp 애니메이션으로 배치하여 방문 즉시 비즈니스 신뢰도를 전달하도록 설계하였으며, 대형 병원들의 성공적인 마케팅 사례를 전략적으로 노출하여 잠재 고객들의 전환을 이끌어내는 데 시각적 초점을 맞추었습니다.',
      '바이럴, 검색광고, SNS 등 5가지 주요 마케팅 프로그램을 현대적인 탭형 카드 UI로 구조화하여 사용자가 전체 서비스 범위를 한눈에 파악하고 비교할 수 있도록 설계했습니다. 실제 클라이언트의 정량적 성공 사례들을 슬라이드 인터랙션으로 부각하여 정보의 실체감을 높였으며, 반응형 퍼블리싱 기술을 적용해 어떤 스마트 기기에서도 기업의 포트폴리오가 고품질로 출력되도록 100% 단독 구축을 완수했습니다.',
      '철저한 SEO 최적화 작업을 통해 기업명 및 병원 마케팅 관련 키워드 검색 시 사이트 가시성을 극대화했습니다. 약 4년간 유지보수를 전담하며 기업의 브랜딩 강화와 실무적인 마케팅 성과를 디지털 기술력으로 뒷받침해왔으며, 현재까지도 장애 없는 안정운영과 기능 고도화를 지속하고 있습니다. B2B 영업 전용 플랫폼으로서 최상의 퍼포먼스를 발휘하도록 기술적으로 정교하게 관리된 결과물입니다.'
    ],
    featured: false,
    websiteUrl: 'http://www.terramedi.co.kr/page/index.php',
  },
];
