/* ============================================================
   전수현웨딩 공통 메뉴 · menu.js
   ------------------------------------------------------------
   [사용법] 메뉴가 들어갈 자리(아임웹 코드 위젯)에 아래 두 줄을 넣습니다.

   ① 메인처럼 사진 위에 투명하게 뜨는 페이지 (히어로 안에 넣기)
      <div id="jsh-menu" data-theme="transparent"></div>
      <script src="https://cdn.jsdelivr.net/gh/ysgon27-debug/jsh@main/menu.js"></script>

   ② 일반 서브 페이지 (처음부터 흰색 헤더)
      <div id="jsh-menu" data-theme="solid" data-hide-imweb-header="true"></div>
      <script src="https://cdn.jsdelivr.net/gh/ysgon27-debug/jsh@main/menu.js"></script>

   옵션
   - data-theme="transparent" | "solid"
   - data-hide-imweb-header="true"  → 아임웹 기본 헤더(#doz_header_wrap)를 숨김
   - data-active="dress"            → 현재 페이지 메뉴에 밑줄 고정 (아래 key 값)
   - data-sticky="true" | "false"   → 스크롤 시 상단 고정 (transparent는 기본 고정, solid는 기본 고정 안 함)

   [메뉴 수정] 아래 MENU 목록만 고치고 깃허브에 올리면 모든 페이지에 반영됩니다.
   jsDelivr 캐시 때문에 바로 안 바뀌면 이 주소에 한 번 접속하세요:
   https://purge.jsdelivr.net/gh/ysgon27-debug/jsh@main/menu.js
============================================================ */
(function () {
  if (window.__jshMenu) { window.__jshMenu.mountAll(); return; }

  /* ═══════════════ ✏️ 여기만 고치면 됩니다 ═══════════════ */
  var IMG = 'https://cdn.jsdelivr.net/gh/ysgon27-debug/jsh@main/';
  var SITE = {
    logoEn: 'JEONSOOHYUN',
    logoKo: 'WEDDING',
    /* 로고를 이미지로 쓰려면 주소를 넣으세요 (흰색/검정 두 장). 비워두면 글자 로고 */
    logoImgWhite: IMG + 'logo_wh.png',
    logoImgBlack: IMG + 'logo_bk.png',
    home: 'https://jshwedding.com/',
    reservation: 'https://jshwedding.com/reservation',
    tel: '063-231-7722',
    telLabel: '063.231.7722',
    instagram: 'https://www.instagram.com/jsh_wedding_official/',
    blog: 'https://blog.naver.com/jeonju_wedding',
    cafe: 'https://cafe.daum.net/jshwedding'
  };

  /* key: 영문 소문자 고유값 / label: 메뉴 이름 / href: 클릭 시 이동
     band: 회색 띠 설명 / cols: 하위 메뉴 칸 / cards: 오른쪽 이미지 카드(0~2장)
     cols, cards가 없으면 메가 메뉴 없이 링크만 동작합니다.
     mobileOpenAll: true → 모바일 메뉴에서 하위 칸을 전부 펼쳐서 보여줌 (없으면 첫 칸만 펼침)
     mobileCols: 2 → 제목 없는 칸('')을 모바일에서도 PC처럼 옆에 나란히 보여줌
     cards의 imgMobile → 모바일 메뉴에서만 쓰는 사진 (없으면 img를 그대로 씀)
     cards의 sub → 카드 제목 위에 들어가는 작은 문구 (선택) */
  var MENU = [
    {
      key: 'about', label: 'About', href: 'https://jshwedding.com/company',
      band: '전주 · 전북 웨딩 토탈 하우스',
      cols: [
        { title: 'ABOUT', links: [
          ['The Brand', 'https://jshwedding.com/thebrand'],
          ['Location', 'https://jshwedding.com/location']
        ]},
        { title: 'VISIT', text: [
          '전북특별자치도 전주시 완산구 천잠로 369',
          '수–월 9:30 – 18:30 · 화요일 정기휴일'
        ], links: [['063.231.7722', 'tel:063-231-7722']] }
      ],
      cards: [
        { img: IMG + 'menu_about.webp', title: 'The Brand', label: 'DISCOVER', href: 'https://jshwedding.com/thebrand' },
        { img: IMG + 'menu_book_now.webp', title: 'Private Appointment', label: 'BOOK NOW', href: 'https://jshwedding.com/reservation' }
      ]
    },
    {
      key: 'dress', label: 'Dress', href: 'https://jshwedding.com/dress_new',
      mobileOpenAll: true, /* 모바일에서 하위 칸을 모두 펼친 채로 보여줌 */
      band: '13개 글로벌 하이엔드 드레스 하우스',
      cols: [
        { title: 'EXPLORE', links: [
          ['Dress Preview', 'https://jshwedding.com/dress_preview'],
          ['Trunk Show', 'https://jshwedding.com/magazine/?q=YToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9&bmode=view&idx=169872357&t=board']
        ]},
        { title: 'HOUSES', links: [
          ['Bridal Kong', 'https://jshwedding.com/bridalkong'],
          ['Kayla Bennet', 'https://jshwedding.com/kaylabennet_new'],
          ['Bennette', 'https://jshwedding.com/bennette'],
          ['Mark Ingram', 'https://jshwedding.com/markingram'],
          ['Roserosa', 'https://jshwedding.com/roserosa_new'],
          ['Rivini', 'https://jshwedding.com/rivini'],
          ['Ses Rêves Bridal', 'https://jshwedding.com/sesrvebridal_new']
        ]},
        { title: '', links: [
          ['Yolancris', 'https://jshwedding.com/yolancris_new'],
          ['Reem Acra', 'https://jshwedding.com/reemacra_new'],
          ['Monique Lhuillier', 'https://jshwedding.com/moniquelhuilier_new'],
          ['Eisen Stein', 'https://jshwedding.com/eisenstein_new'],
          ['Viktor&Rolf', 'https://jshwedding.com/viktorrolf_new'],
          ['Newhite', 'https://jshwedding.com/newhite_new']
        ]}
      ],
      cards: [
        { img: IMG + 'menu_dress.webp', title: 'Dress Preview', label: 'DISCOVER', href: 'https://jshwedding.com/dress_preview' },
        { img: IMG + 'menu_trunkshow.webp', title: 'Trunk Show', label: 'DISCOVER', href: 'https://jshwedding.com/magazine/?q=YToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9&bmode=view&idx=169872357&t=board' }
      ]
    },
    {
      key: 'suit', label: 'Suit', href: 'https://jshwedding.com/suit',
      band: '오뜨꾸뛰르 디자이너 수트',
      cols: [
        { title: 'DESIGNER', links: [['Blac Kong', 'https://jshwedding.com/blackong']] }
      ],
      cards: [
        { img: IMG + 'menu_blackong.webp', /* PC용 4:5 (800×1000) */
          imgMobile: IMG + 'menu_blackong_width.webp', /* 모바일용 가로 16:11 (1200×825) */
          title: 'Blac Kong', label: 'DISCOVER', href: 'https://jshwedding.com/blackong' }
      ]
    },
    {
      key: 'studio', label: 'Studio', href: 'https://jshwedding.com/studio_new',
      mobileOpenAll: true,
      band: '6개 프리미엄 웨딩 스튜디오',
      cols: [
        { title: 'EXPLORE', links: [['Studio Preview', 'https://jshwedding.com/studio_preview']] },
        { title: 'STUDIOS', links: [
          ['Jenewin', 'https://jshwedding.com/jenewin'],
          ['J:New', 'https://jshwedding.com/jnew'],
          ['New Maiden', 'https://jshwedding.com/newmaiden'],
          ['Kayla Bennet', 'https://jshwedding.com/studio_kaylabennet'],
          ['Leblanc', 'https://jshwedding.com/studio_leblanc'],
          ['Maiden', 'https://jshwedding.com/studio_maiden']
        ]}
      ],
      cards: [
        { img: IMG + 'menu_studio.webp', title: 'Studio Preview', label: 'DISCOVER', href: 'https://jshwedding.com/studio_preview' },
        { img: IMG + 'menu_studio_photographer.webp', sub: '감동을 포착하는 렌즈의 마에스트로', /* sub: 제목 위 작은 문구 (없으면 생략) */
          title: 'Photographer', label: 'MEET THE ARTIST', href: 'https://jshwedding.com/studio_preview#s20250213ab3713ae24ea4' }
      ]
    },
    {
      key: 'hairmakeup', label: 'Hair & Makeup', href: 'https://jshwedding.com/hairmakeup',
      mobileCols: 2, /* 모바일에서도 이름을 2열로 */
      band: '신부를 완성하는 7인의 스타일링 아트 디렉터',
      cols: [
        { title: 'ART DIRECTORS', links: [
          ['장유영 부장', 'https://jshwedding.com/hairmakeup'],
          ['정경 부장', 'https://jshwedding.com/hairmakeup'],
          ['이지혜 부장', 'https://jshwedding.com/hairmakeup'],
          ['문지영 실장', 'https://jshwedding.com/hairmakeup']
        ]},
        { title: '', links: [
          ['김아라 실장', 'https://jshwedding.com/hairmakeup'],
          ['이진선 실장', 'https://jshwedding.com/hairmakeup'],
          ['정하윤 실장', 'https://jshwedding.com/hairmakeup']
        ]}
      ],
      cards: [
        { img: IMG + 'menu_makeup.webp', /* PC용 4:5 (800×1000) */
          imgMobile: IMG + 'menu_makeup_width.webp', /* 모바일용 가로 16:11 (1200×825) */
          title: 'Art Directors', label: 'MEET THE TEAM', href: 'https://jshwedding.com/hairmakeup' }
      ]
    },
    {
      key: 'magazine', label: 'Magazine', href: 'https://jshwedding.com/90',
      band: '전수현웨딩의 신부들과 이야기',
      cols: [
        { title: 'STORIES', links: [
          ['Real Bride', 'https://jshwedding.com/realbride'],
          ['Celebrity', 'https://jshwedding.com/celebrity'],
          ['웨딩매거진', 'https://jshwedding.com/magazine']
        ]}
      ],
      cards: [
        { img: IMG + 'menu_magazine_manager.webp', title: 'Wedding Curator', label: 'MEET THE CURATOR', href: 'https://jshwedding.com/realbride#s2026082637e90e6a09522' },
        { img: IMG + 'menu_magazine.webp', title: 'Wedding Magazine', label: 'READ', href: 'https://jshwedding.com/magazine' }
      ]
    },
    {
      key: 'event', label: 'Event', href: 'https://jshwedding.com/event',
      band: '진행 중인 혜택과 웨딩홀 비교견적',
      cols: [
        { title: 'NOW', links: [
          ['진행중인 이벤트', 'https://jshwedding.com/promotion'],
          ['웨딩홀 비교견적', 'https://jweddinghall.com/', true]
        ]},
        { title: 'ARCHIVE', links: [['지난 이벤트', 'https://jshwedding.com/closed_event']] }
      ],
      cards: [
        { img: IMG + 'menu_event.webp', title: 'Now On', label: 'VIEW EVENT', href: 'https://jshwedding.com/promotion' },
        { img: IMG + 'menu_book_now.webp', title: 'Private Appointment', label: 'BOOK NOW', href: 'https://jshwedding.com/reservation' }
      ]
    }
  ];
  /* ═══════════════ ✏️ 여기까지 ═══════════════ */

  var BP = 1280; /* 이 폭 이상에서 PC 메가 메뉴, 미만은 전체 화면 메뉴 */

  /* ── 폰트 ── */
  function addLink(href) {
    if (document.querySelector('link[href="' + href + '"]')) return;
    var l = document.createElement('link'); l.rel = 'stylesheet'; l.href = href;
    document.head.appendChild(l);
  }
  addLink('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css');
  addLink('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');

  /* ── 스타일 ── */
  var CSS = [
    '.jm, .jm *, .jm-mega, .jm-mega *, .jm-drawer, .jm-drawer *, .jm-dim { box-sizing:border-box; margin:0; padding:0; }',
    '.jm, .jm-mega, .jm-drawer { --ink:#0a0a0a; --paper:#fff; --band:#f6f6f6; --rule:#e6e6e6; --soft:#6b6b6b; --ease:cubic-bezier(.25,1,.5,1);',
    '  font-family:"Pretendard","Apple SD Gothic Neo",sans-serif; -webkit-font-smoothing:antialiased; word-break:keep-all; }',
    '.jm a, .jm-mega a, .jm-drawer a { color:inherit; text-decoration:none; }',
    '.jm button, .jm-drawer button { font:inherit; color:inherit; background:none; border:0; cursor:pointer; }',
    '.jm ul, .jm-mega ul, .jm-drawer ul { list-style:none; }',
    /* 바 */
    '.jm { --hh:64px; position:relative; z-index:9000; width:100%; }',
    '@media (min-width:' + BP + 'px){ .jm { --hh:84px; } }',
    '.jm-transparent { position:absolute; top:0; left:0; right:0; }',
    '.jm.is-fixed { position:fixed; top:0; left:0; right:0; }',
    '.jm-bar { height:var(--hh); display:grid; grid-template-columns:1fr auto 1fr; align-items:center; padding:0 16px;',
    '  color:#fff; border-bottom:1px solid transparent; transition:background-color .35s var(--ease), color .35s var(--ease), border-color .35s var(--ease); }',
    '@media (min-width:640px){ .jm-bar { padding:0 28px; } }',
    '@media (min-width:' + BP + 'px){ .jm-bar { padding:0 40px; } }',
    '.jm-solid .jm-bar, .jm.is-on .jm-bar, .jm.is-stuck .jm-bar { background:var(--paper); color:var(--ink); border-bottom-color:var(--rule); }',
    '.jm-left { display:flex; align-items:center; gap:18px; min-width:0; }',
    '.jm-right { display:flex; align-items:center; justify-content:flex-end; gap:20px; }',
    '.jm-logo { display:flex; flex-direction:column; align-items:center; line-height:1; }',
    '.jm-logo-en { font-family:"Cormorant Garamond",serif; font-weight:500; font-size:19px; letter-spacing:.3em; padding-left:.3em; }',
    '.jm-logo-ko { font-size:8px; letter-spacing:.6em; padding-left:.6em; margin-top:6px; opacity:.72; }',
    '@media (min-width:' + BP + 'px){ .jm-logo-en { font-size:21px; letter-spacing:.24em; padding-left:.24em; } .jm-logo-ko { font-size:9px; } }',
    '.jm-logo img { display:block; height:30px; width:auto; }',
    '@media (min-width:' + BP + 'px){ .jm-logo img { height:40px; } }',
    '.jm-dtop .jm-logo img { height:30px; }',
    '.jm-logo .jm-li-b { display:none; }',
    '.jm-solid .jm-logo .jm-li-w, .jm.is-on .jm-logo .jm-li-w, .jm.is-stuck .jm-logo .jm-li-w { display:none; }',
    '.jm-solid .jm-logo .jm-li-b, .jm.is-on .jm-logo .jm-li-b, .jm.is-stuck .jm-logo .jm-li-b { display:block; }',
    '.jm-nav { display:none; gap:20px; }',
    '@media (min-width:' + BP + 'px){ .jm-nav { display:flex; } }',
    '@media (min-width:1440px){ .jm-nav { gap:28px; } }',
    '.jm-nav > a { position:relative; font-size:13px; letter-spacing:.02em; white-space:nowrap; padding:8px 0; }',
    '.jm-nav > a::after { content:""; position:absolute; left:0; right:0; bottom:2px; height:1px; background:currentColor;',
    '  transform:scaleX(0); transform-origin:left; transition:transform .45s var(--ease); }',
    '.jm-nav > a:hover::after, .jm-nav > a.is-on::after, .jm-nav > a.is-current::after { transform:scaleX(1); }',
    '.jm-tel, .jm-icon { display:none; font-size:13px; white-space:nowrap; }',
    '@media (min-width:' + BP + 'px){ .jm-icon { display:inline-flex; align-items:center; } }',
    '@media (min-width:1360px){ .jm-tel { display:inline-flex; align-items:center; } }',
    '.jm-icon svg { width:18px; height:18px; }',
    '.jm-book { font-size:13px; white-space:nowrap; padding-bottom:2px; border-bottom:1px solid currentColor; }',
    '.jm-book-l { display:none; } @media (min-width:640px){ .jm-book-s { display:none; } .jm-book-l { display:inline; } }',
    '.jm-burger { position:relative; width:22px; height:14px; display:block; }',
    '@media (min-width:' + BP + 'px){ .jm-burger { display:none; } }',
    '.jm-burger i { position:absolute; left:0; right:0; height:1.5px; background:currentColor; }',
    '.jm-burger i:nth-child(1){ top:2px; } .jm-burger i:nth-child(2){ bottom:2px; }',
    /* 메가 메뉴: 화면 기준(fixed)으로 띄워 아임웹 섹션에 잘리지 않게 */
    '.jm-mega { position:fixed; left:0; right:0; top:84px; z-index:8999; height:0; overflow:hidden; background:var(--paper); color:var(--ink);',
    '  transition:height .55s var(--ease); }',
    '@media (max-width:' + (BP - 1) + 'px){ .jm-mega { display:none; } }',
    '.jm-pane { position:absolute; top:0; left:0; right:0; opacity:0; visibility:hidden; transform:translateY(-8px);',
    '  transition:opacity .3s ease, transform .45s var(--ease), visibility 0s .3s; }',
    '.jm-pane.is-on { position:relative; opacity:1; visibility:visible; transform:none;',
    '  transition:opacity .4s ease .08s, transform .55s var(--ease) .08s, visibility 0s; }',
    '.jm-band { display:flex; align-items:center; justify-content:space-between; gap:24px; background:var(--band); padding:14px 40px; font-size:13px; }',
    '.jm-band-t { display:flex; align-items:baseline; gap:16px; }',
    '.jm-band-t b { font-weight:600; letter-spacing:.14em; font-size:11px; }',
    '.jm-band-t span, .jm-band a { color:var(--soft); }',
    '.jm-band a { transition:color .25s ease; } .jm-band a:hover { color:var(--ink); }',
    '.jm-pbody { display:flex; justify-content:space-between; gap:48px; padding:30px 40px 32px; }',
    '.jm-cols { display:flex; gap:56px; flex-shrink:0; }',
    '@media (min-width:1360px){ .jm-cols { gap:72px; } }',
    '.jm-col h4 { font-size:11px; font-weight:600; letter-spacing:.14em; margin-bottom:14px; min-height:1em; }',
    '.jm-col li + li { margin-top:9px; }',
    '.jm-col a, .jm-col p { font-size:13px; color:#3a3a3a; line-height:1.5; }',
    '.jm-col p { color:var(--soft); }',
    '.jm-col a { background:linear-gradient(currentColor,currentColor) no-repeat 0 100% / 0 1px; padding-bottom:1px;',
    '  transition:background-size .4s var(--ease), color .25s ease; }',
    '.jm-col a:hover { color:var(--ink); background-size:100% 1px; }',
    '.jm-cards { display:flex; gap:8px; }',
    '.jm-card { position:relative; display:block; width:250px; aspect-ratio:4/5; overflow:hidden; background:#ddd; color:#fff !important; }',
    '@media (min-width:1360px){ .jm-card { width:272px; } }',
    '.jm-card img { width:100%; height:100%; object-fit:cover; display:block; transition:transform 1.2s var(--ease); }',
    '.jm-card:hover img { transform:scale(1.05); }',
    '.jm-card::after { content:""; position:absolute; inset:0; background:linear-gradient(to top, rgba(0,0,0,.5), rgba(0,0,0,0) 46%); }',
    '.jm-card-t { position:absolute; left:0; right:0; bottom:26px; z-index:1; text-align:center; }',
    '.jm-card-t em { display:block; font-style:normal; font-size:12px; line-height:1.5; letter-spacing:.02em; opacity:.9; margin:0 14px 8px; word-break:keep-all; }',
    '.jm-card-t b { display:block; font-family:"Cormorant Garamond",serif; font-weight:400; font-size:24px; letter-spacing:.04em; line-height:1.1; }',
    '.jm-card-t span { display:inline-block; margin-top:8px; font-size:10px; letter-spacing:.2em; border-bottom:1px solid rgba(255,255,255,.8); padding-bottom:2px; }',
    '.jm-dim { position:fixed; inset:0; z-index:8998; background:rgba(0,0,0,.4); opacity:0; pointer-events:none; transition:opacity .45s ease; }',
    '.jm-dim.is-on { opacity:1; pointer-events:auto; }',
    /* 모바일 드로어 (KYHA식: 1단 목록 → 옆으로 넘어가는 2단 화면) */
    '.jm-drawer { position:fixed; inset:0; z-index:2147483000; background:var(--paper); color:var(--ink); display:flex; flex-direction:column;',
    '  transform:translateX(-100%); visibility:hidden; transition:transform .55s var(--ease), visibility 0s .55s; }',
    '.jm-drawer.is-on { transform:none; visibility:visible; transition:transform .55s var(--ease), visibility 0s; }',
    '@media (min-width:' + BP + 'px){ .jm-drawer { display:none; } }',
    '.jm-dtop { flex-shrink:0; height:64px; display:grid; grid-template-columns:1fr auto 1fr; align-items:center; padding:0 18px; border-bottom:1px solid var(--rule); }',
    '.jm-dtop .jm-book { justify-self:end; font-size:14px; }',
    '.jm-dtop .jm-logo .jm-li-w { display:none; } .jm-dtop .jm-logo .jm-li-b { display:block; }',
    '.jm-dtop .jm-logo-en { font-size:21px; }',
    '.jm-x { position:relative; width:22px; height:22px; }',
    '.jm-x::before, .jm-x::after { content:""; position:absolute; left:0; right:0; top:50%; height:1.5px; background:currentColor; }',
    '.jm-x::before { transform:rotate(45deg); } .jm-x::after { transform:rotate(-45deg); }',
    '.jm-views { position:relative; flex:1; overflow:hidden; }',
    '.jm-view { position:absolute; inset:0; overflow-y:auto; overscroll-behavior:contain; -webkit-overflow-scrolling:touch;',
    '  transition:transform .5s var(--ease), opacity .4s ease, visibility 0s .5s; }',
    '.jm-v0 { transform:none; }',
    '.jm-drawer.is-sub .jm-v0 { transform:translateX(-28%); opacity:0; visibility:hidden; }',
    '.jm-vsub { transform:translateX(100%); visibility:hidden; background:var(--paper); }',
    '.jm-vsub.is-on { transform:none; visibility:visible; transition:transform .5s var(--ease), opacity .4s ease, visibility 0s; }',
    /* 1단 목록 */
    '.jm-l1 { padding:14px 18px 8px; }',
    '.jm-l1 li > a, .jm-l1 li > button { width:100%; display:flex; align-items:center; justify-content:space-between; text-align:left;',
    '  padding:15px 0; font-size:19px; font-weight:400; letter-spacing:-.005em; line-height:1.3; }',
    '.jm-chev { width:9px; height:9px; border-right:1.5px solid currentColor; border-top:1.5px solid currentColor; transform:rotate(45deg); margin-right:6px; flex-shrink:0; }',
    '.jm-l1-meta { margin:18px 18px 28px; padding-top:22px; border-top:1px solid var(--rule); display:flex; flex-direction:column; gap:12px; font-size:15px; color:var(--soft); }',
    '.jm-l1-meta .jm-soc { display:flex; gap:20px; font-size:12px; letter-spacing:.18em; margin-top:6px; }',
    /* 2단 화면 */
    '.jm-shead { position:sticky; top:0; z-index:2; background:var(--paper); height:62px; display:grid; grid-template-columns:44px 1fr 44px; align-items:center;',
    '  margin:0 18px; border-bottom:1px solid var(--rule); }',
    '.jm-back { width:44px; height:44px; display:flex; align-items:center; }',
    '.jm-back i { width:10px; height:10px; border-left:1.5px solid currentColor; border-bottom:1.5px solid currentColor; transform:rotate(45deg); margin-left:6px; }',
    '.jm-shead b { text-align:center; font-size:17px; font-weight:500; }',
    '.jm-sall { display:block; margin:18px 18px 4px; font-size:14px; color:var(--soft); }',
    '.jm-sall span { border-bottom:1px solid currentColor; padding-bottom:1px; }',
    '.jm-acc { padding:4px 18px 12px; }',
    '.jm-sec-h { width:100%; display:flex; align-items:center; justify-content:space-between; text-align:left; padding:15px 0; font-size:18px; font-weight:400; line-height:1.3; }',
    '.jm-pm { position:relative; width:14px; height:14px; flex-shrink:0; margin-right:4px; }',
    '.jm-pm::before, .jm-pm::after { content:""; position:absolute; left:0; right:0; top:50%; height:1.5px; background:currentColor; transition:transform .4s var(--ease); }',
    '.jm-pm::after { transform:rotate(90deg); }',
    '.jm-sec.is-open .jm-pm::after { transform:rotate(0); }',
    '.jm-sec-b { display:grid; grid-template-rows:0fr; transition:grid-template-rows .45s var(--ease); }',
    '.jm-sec.is-open .jm-sec-b { grid-template-rows:1fr; }',
    '.jm-sec-b > div { overflow:hidden; }',
    '.jm-sec-b ul { padding:0 0 14px; }',
    '.jm-sec-cols { display:grid; grid-template-columns:1fr 1fr; column-gap:16px; padding:0 0 14px; }',
    '.jm-sec-cols ul { padding:0; }',
    '.jm-sec-b li a, .jm-sec-b li p { display:block; padding:7px 0; font-size:15px; color:#555; line-height:1.45; }',
    '.jm-scards { display:grid; grid-template-columns:1fr 1fr; gap:6px; padding:8px 0 24px; }',
    '.jm-scards.is-one { grid-template-columns:1fr; }',
    '.jm-scards .jm-card { width:auto; aspect-ratio:4/5; }',
    '.jm-scards.is-one .jm-card { aspect-ratio:16/11; }',
    '.jm-scards .jm-card-t { bottom:20px; }',
    '.jm-scards .jm-card-t b { font-size:21px; }',
    '.jm-scards .jm-card-t em { font-size:11px; margin:0 10px 6px; }',
    '.jm-dfoot { flex-shrink:0; padding:12px 18px calc(12px + env(safe-area-inset-bottom)); border-top:1px solid var(--rule); background:var(--paper); }',
    '.jm-dcta { display:flex; align-items:center; justify-content:center; height:52px; background:var(--ink); color:#fff !important; font-size:14px; font-weight:600; letter-spacing:.12em; }',
    '@media (prefers-reduced-motion:reduce){ .jm *, .jm-mega *, .jm-drawer, .jm-drawer *, .jm-mega, .jm-dim { animation:none !important; transition:none !important; } }'
  ].join('\n');

  function addStyle() {
    if (document.getElementById('jm-style')) return;
    var s = document.createElement('style'); s.id = 'jm-style'; s.textContent = CSS;
    /* body 끝에 붙여 위젯·아임웹 스타일보다 나중에 적용되게 */
    document.body.appendChild(s);
  }

  /* ── HTML 생성 ── */
  function esc(t) { return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function a(href, inner, cls, blank) {
    return '<a href="' + esc(href) + '"' + (cls ? ' class="' + cls + '"' : '') + (blank ? ' target="_blank" rel="noopener"' : '') + '>' + inner + '</a>';
  }
  function hasPane(m) { return !!(m.cols && m.cols.length); }
  function logo() {
    var inner = SITE.logoImgWhite
      ? '<img class="jm-li-w" src="' + esc(SITE.logoImgWhite) + '" alt="전수현웨딩"><img class="jm-li-b" src="' + esc(SITE.logoImgBlack || SITE.logoImgWhite) + '" alt="">'
      : '<span class="jm-logo-en">' + esc(SITE.logoEn) + '</span><span class="jm-logo-ko">' + esc(SITE.logoKo) + '</span>';
    return '<a class="jm-logo" href="' + esc(SITE.home) + '" aria-label="전수현웨딩 홈">' + inner + '</a>';
  }
  var IG_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".6" fill="currentColor"/></svg>';

  function barHTML(active) {
    var nav = MENU.map(function (m) {
      return '<a href="' + esc(m.href) + '"' + (hasPane(m) ? ' data-pane="' + esc(m.key) + '"' : '') +
        (m.key === active ? ' class="is-current"' : '') + '>' + esc(m.label) + '</a>';
    }).join('');
    return '<div class="jm-bar">' +
      '<div class="jm-left"><button class="jm-burger" type="button" aria-label="메뉴 열기" aria-expanded="false"><i></i><i></i></button>' +
      '<nav class="jm-nav" aria-label="주 메뉴">' + nav + '</nav></div>' +
      logo() +
      '<div class="jm-right">' +
        a('tel:' + SITE.tel, esc(SITE.telLabel), 'jm-tel') +
        '<a class="jm-icon" href="' + esc(SITE.instagram) + '" target="_blank" rel="noopener" aria-label="인스타그램">' + IG_SVG + '</a>' +
        a(SITE.reservation, '<span class="jm-book-l">Book Appointment</span><span class="jm-book-s">예약</span>', 'jm-book') +
      '</div></div>';
  }

  function megaHTML() {
    return MENU.filter(hasPane).map(function (m) {
      var cols = m.cols.map(function (c) {
        var items = (c.text || []).map(function (t) { return '<li><p>' + esc(t) + '</p></li>'; }).join('') +
          (c.links || []).map(function (l) { return '<li>' + a(l[1], esc(l[0]), '', l[2]) + '</li>'; }).join('');
        return '<div class="jm-col"><h4>' + esc(c.title || '') + '</h4><ul>' + items + '</ul></div>';
      }).join('');
      var cards = (m.cards || []).map(function (c) {
        return a(c.href, '<img loading="lazy" src="' + esc(c.img) + '" alt=""><span class="jm-card-t">' + (c.sub ? '<em>' + esc(c.sub) + '</em>' : '') + '<b>' + esc(c.title) + '</b><span>' + esc(c.label || 'DISCOVER') + '</span></span>', 'jm-card', c.blank);
      }).join('');
      return '<div class="jm-pane" data-pane="' + esc(m.key) + '">' +
        '<div class="jm-band"><div class="jm-band-t"><b>' + esc(m.label.toUpperCase()) + '</b><span>' + esc(m.band || '') + '</span></div>' +
        a(m.href, 'View all →') + '</div>' +
        '<div class="jm-pbody"><div class="jm-cols">' + cols + '</div><div class="jm-cards">' + cards + '</div></div></div>';
    }).join('');
  }

  function drawerHTML() {
    var l1 = MENU.map(function (m) {
      return hasPane(m)
        ? '<li><button type="button" data-go="' + esc(m.key) + '">' + esc(m.label) + '<i class="jm-chev"></i></button></li>'
        : '<li>' + a(m.href, esc(m.label)) + '</li>';
    }).join('');
    var subs = MENU.filter(hasPane).map(function (m) {
      /* 제목 없는 칸은 앞 칸에 합침 (예: HOUSES 두 칸 → 하나) */
      var secs = [];
      m.cols.forEach(function (c) {
        var grp = (c.text || []).map(function (t) { return '<li><p>' + esc(t) + '</p></li>'; }).join('') +
          (c.links || []).map(function (l) { return '<li>' + a(l[1], esc(l[0]), '', l[2]) + '</li>'; }).join('');
        if (!c.title && secs.length) secs[secs.length - 1].groups.push(grp);
        else secs.push({ title: c.title || m.label, groups: [grp] });
      });
      var acc = secs.map(function (sc, i) {
        var open = i === 0 || m.mobileOpenAll;
        var title = sc.title.charAt(0) + sc.title.slice(1).toLowerCase();
        /* mobileCols: 2 → PC처럼 칸을 나란히 (예: 아트 디렉터 2열) */
        var body = (m.mobileCols === 2 && sc.groups.length > 1)
          ? '<div class="jm-sec-cols">' + sc.groups.map(function (g) { return '<ul>' + g + '</ul>'; }).join('') + '</div>'
          : '<ul>' + sc.groups.join('') + '</ul>';
        return '<div class="jm-sec' + (open ? ' is-open' : '') + '"><button class="jm-sec-h" type="button" aria-expanded="' + !!open + '">' +
          esc(title) + '<i class="jm-pm"></i></button><div class="jm-sec-b"><div>' + body + '</div></div></div>';
      }).join('');
      var cards = (m.cards || []).map(function (c) {
        return a(c.href, '<img loading="lazy" src="' + esc(c.imgMobile || c.img) + '" alt=""><span class="jm-card-t">' + (c.sub ? '<em>' + esc(c.sub) + '</em>' : '') + '<b>' + esc(c.title) + '</b><span>' + esc(c.label || 'DISCOVER') + '</span></span>', 'jm-card', c.blank);
      }).join('');
      return '<div class="jm-view jm-vsub" data-view="' + esc(m.key) + '">' +
        '<div class="jm-shead"><button class="jm-back" type="button" aria-label="뒤로"><i></i></button><b>' + esc(m.label) + '</b><span></span></div>' +
        a(m.href, '<span>View all ' + esc(m.label) + ' →</span>', 'jm-sall') +
        '<div class="jm-acc">' + acc +
        (cards ? '<div class="jm-scards' + ((m.cards || []).length === 1 ? ' is-one' : '') + '">' + cards + '</div>' : '') +
        '</div></div>';
    }).join('');
    return '<div class="jm-dtop"><button class="jm-x" type="button" aria-label="메뉴 닫기"></button>' + logo() +
      a(SITE.reservation, '예약', 'jm-book') + '</div>' +
      '<div class="jm-views">' +
        '<div class="jm-view jm-v0"><ul class="jm-l1">' + l1 + '</ul>' +
          '<div class="jm-l1-meta">' + a('tel:' + SITE.tel, esc(SITE.telLabel)) +
          '<span>전북특별자치도 전주시 완산구 천잠로 369</span>' +
          '<div class="jm-soc">' + a(SITE.instagram, 'INSTAGRAM', '', true) + a(SITE.blog, 'BLOG', '', true) + a(SITE.cafe, 'CAFE', '', true) + '</div></div>' +
        '</div>' + subs +
      '</div>' +
      '<div class="jm-dfoot">' + a(SITE.reservation, 'BOOK APPOINTMENT', 'jm-dcta') + '</div>';
  }

  /* ── 동작 ── */
  function mount(root) {
    if (root.dataset.jmReady) return;
    root.dataset.jmReady = '1';
    addStyle();

    var theme = root.getAttribute('data-theme') === 'transparent' ? 'transparent' : 'solid';
    if (root.getAttribute('data-hide-imweb-header') === 'true' && !document.getElementById('jm-hide-imweb')) {
      var h = document.createElement('style'); h.id = 'jm-hide-imweb';
      h.textContent = '#doz_header_wrap{display:none !important;}';
      document.head.appendChild(h);
    }

    var head = document.createElement('header');
    head.className = 'jm jm-' + theme;
    head.innerHTML = barHTML(root.getAttribute('data-active'));
    root.appendChild(head);

    /* 메가 메뉴·딤·드로어는 body에 붙여 어떤 섹션에서도 잘리지 않게 */
    var mega = document.createElement('div'); mega.className = 'jm-mega'; mega.setAttribute('aria-hidden', 'true'); mega.innerHTML = megaHTML();
    var dim = document.createElement('div'); dim.className = 'jm-dim';
    var drawer = document.createElement('div'); drawer.className = 'jm-drawer'; drawer.setAttribute('role', 'dialog');
    drawer.setAttribute('aria-modal', 'true'); drawer.setAttribute('aria-label', '메뉴'); drawer.innerHTML = drawerHTML();
    document.body.appendChild(dim); document.body.appendChild(mega); document.body.appendChild(drawer);

    var links = Array.prototype.slice.call(head.querySelectorAll('.jm-nav > a'));
    var panes = {};
    mega.querySelectorAll('.jm-pane').forEach(function (p) { panes[p.getAttribute('data-pane')] = p; });
    var current = null, closeT = null;
    var desk = window.matchMedia('(min-width:' + BP + 'px)');
    var noHover = window.matchMedia('(hover: none)');

    function place() { mega.style.top = Math.max(0, head.getBoundingClientRect().bottom) + 'px'; }
    function openPane(key) {
      clearTimeout(closeT);
      var pane = panes[key];
      if (!pane) { closeMega(); return; }
      place();
      links.forEach(function (l) { l.classList.toggle('is-on', l.getAttribute('data-pane') === key); });
      if (current !== key) {
        Object.keys(panes).forEach(function (k) { panes[k].classList.toggle('is-on', k === key); });
        current = key;
      }
      head.classList.add('is-on'); dim.classList.add('is-on');
      mega.setAttribute('aria-hidden', 'false');
      mega.style.height = pane.offsetHeight + 'px';
    }
    function closeMega() {
      clearTimeout(closeT);
      if (!current) return;
      mega.style.height = '0px';
      head.classList.remove('is-on'); dim.classList.remove('is-on');
      mega.setAttribute('aria-hidden', 'true');
      links.forEach(function (l) { l.classList.remove('is-on'); });
      current = null;
      setTimeout(function () { if (!current) Object.keys(panes).forEach(function (k) { panes[k].classList.remove('is-on'); }); }, 550);
    }
    function later() { closeT = setTimeout(closeMega, 160); }

    links.forEach(function (l) {
      var key = l.getAttribute('data-pane');
      l.addEventListener('mouseenter', function () { if (desk.matches) { key ? openPane(key) : later(); } });
      l.addEventListener('focus', function () { if (desk.matches && key) openPane(key); });
      l.addEventListener('click', function (e) {
        if (desk.matches && noHover.matches && key && current !== key) { e.preventDefault(); openPane(key); }
      });
    });
    head.querySelectorAll('.jm-logo, .jm-right a').forEach(function (el) {
      el.addEventListener('mouseenter', function () { if (current) later(); });
    });
    [head, mega].forEach(function (el) {
      el.addEventListener('mouseenter', function () { clearTimeout(closeT); });
      el.addEventListener('mouseleave', later);
    });
    dim.addEventListener('click', closeMega);
    window.addEventListener('scroll', function () { if (current) closeMega(); }, { passive: true });

    /* 스크롤 고정: 조금만 내려도 흰 배경 + 검정 로고로 바뀌며 상단에 붙음 */
    var stickyAttr = root.getAttribute('data-sticky');
    var sticky = stickyAttr ? stickyAttr === 'true' : theme === 'transparent';
    if (sticky) {
      var fixed = false, ticking2 = false;
      var WHITE_AT = 40; /* 이만큼(px) 내리면 흰색으로 */
      function onStick() {
        ticking2 = false;
        var y = window.pageYOffset || document.documentElement.scrollTop;
        var rootTop = (fixed ? (parseFloat(root.dataset.jmTop) || 0) : root.getBoundingClientRect().top + y);
        var shouldFix = y > rootTop;
        if (shouldFix !== fixed) {
          fixed = shouldFix;
          if (fixed) {
            root.dataset.jmTop = rootTop;
            if (theme === 'solid') root.style.minHeight = head.offsetHeight + 'px';
            document.body.appendChild(head); /* 어떤 아임웹 섹션 안에서도 화면에 고정되도록 */
            head.classList.add('is-fixed');
          } else {
            head.classList.remove('is-fixed');
            root.appendChild(head);
            root.style.minHeight = '';
          }
        }
        head.classList.toggle('is-stuck', fixed && y > rootTop + WHITE_AT);
      }
      window.addEventListener('scroll', function () { if (!ticking2) { ticking2 = true; requestAnimationFrame(onStick); } }, { passive: true });
      window.addEventListener('resize', onStick);
      onStick();
    }
    window.addEventListener('resize', function () {
      if (!desk.matches) closeMega();
      else if (current) { place(); mega.style.height = panes[current].offsetHeight + 'px'; }
    });

    /* 드로어 */
    var burger = head.querySelector('.jm-burger');
    var views = {};
    drawer.querySelectorAll('.jm-vsub').forEach(function (v) { views[v.getAttribute('data-view')] = v; });
    function showSub(key) {
      Object.keys(views).forEach(function (k) { views[k].classList.toggle('is-on', k === key); });
      drawer.classList.toggle('is-sub', !!key);
      if (key) views[key].scrollTop = 0;
    }
    drawer.querySelectorAll('[data-go]').forEach(function (b) {
      b.addEventListener('click', function () { showSub(b.getAttribute('data-go')); });
    });
    drawer.querySelectorAll('.jm-back').forEach(function (b) {
      b.addEventListener('click', function () { showSub(null); });
    });
    drawer.querySelectorAll('.jm-sec').forEach(function (sec) {
      var h = sec.querySelector('.jm-sec-h');
      h.addEventListener('click', function () {
        var o = !sec.classList.contains('is-open');
        sec.classList.toggle('is-open', o);
        h.setAttribute('aria-expanded', o ? 'true' : 'false');
      });
    });
    var prevOverflow = '';
    function setDrawer(open) {
      drawer.classList.toggle('is-on', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) { prevOverflow = document.documentElement.style.overflow; document.documentElement.style.overflow = 'hidden'; }
      else { document.documentElement.style.overflow = prevOverflow; setTimeout(function () { showSub(null); }, 550); }
    }
    burger.addEventListener('click', function () { setDrawer(true); });
    drawer.querySelector('.jm-x').addEventListener('click', function () { setDrawer(false); });
    drawer.addEventListener('click', function (e) { if (e.target.closest('a')) setDrawer(false); });

    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      closeMega();
      if (drawer.classList.contains('is-on')) setDrawer(false);
    });
  }

  function mountAll() {
    document.querySelectorAll('#jsh-menu, [data-jsh-menu]').forEach(mount);
  }
  window.__jshMenu = { mountAll: mountAll };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mountAll);
  else mountAll();
})();
