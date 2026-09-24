import { icon, page, ratingBlock, visitBlock, contactsBlock, gallery } from '../kit.mjs';

const BOOK = 'https://n123003.yclients.com/';
const WA = 'https://wa.me/74952055007';
const TAPLINK = 'https://taplink.cc/k_nail_bar';

const MENU = [
  ['Маникюр', [
    ['Маникюр без покрытия', 'Комбинированный, аппаратный или классический', '1 300'],
    ['Маникюр с покрытием', 'Снятие, маникюр, выравнивание, покрытие Kalipso, Luxio или Termish', '2 800'],
    ['Френч', 'Классика, которая подходит к любому образу', '3 300'],
  ]],
  ['Педикюр', [
    ['SMART-педикюр без покрытия', 'Женский', '1 800'],
    ['SMART-педикюр с покрытием', 'Покрытие лаком', '2 700'],
    ['Педикюр без покрытия', 'Обработка пальчиков и стоп', '2 000'],
    ['Педикюр с покрытием', 'Снятие, педикюр, покрытие', '3 000'],
    ['Мужской SMART-педикюр', '', '2 500'],
  ]],
  ['Брови', [
    ['Окрашивание бровей', 'Краской или хной', '1 200'],
    ['Ламинирование бровей', 'Долговременная укладка', '3 500'],
  ]],
  ['Подарок', [
    ['Подарочный сертификат', 'На любую услугу: маникюр, педикюр, брови', '5 000'],
  ]],
];

export default {
  slug: 'k-nail-bar-h05h',
  name: 'K Nail Bar',
  conceptName: 'студии «K Nail Bar»',
  title: 'K Nail Bar — студия маникюра в Красногорске · концепт сайта',
  description: 'Концепт сайта студии маникюра K Nail Bar в Красногорске: меню услуг и онлайн-запись.',
  themeColor: '#f4ece4',
  favicon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="10" fill="#3b2418"/><text x="32" y="45" text-anchor="middle" font-family="Georgia,serif" font-size="38" fill="#e9d5c2">K</text></svg>',
  fonts: 'https://fonts.googleapis.com/css2?family=Oranienbaum&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap',
  phone: '+7 (926) 749-68-06',
  book: { href: BOOK, label: 'Записаться онлайн', barLabel: 'Записаться' },
  nav: [['#menu', 'Меню'], ['#otzyvy', 'Отзывы'], ['#kak-dobratsya', 'Адрес'], ['#kontakty', 'Контакты']],
  logo: 'K&nbsp;Nail&nbsp;Bar',
  footLine: 'Студия маникюра · Красногорск, Авангардная ул., 2',
  footSources: 'сайт студии на Яндекс Бизнесе, Taplink и карточка на Яндекс Картах',
  policyOwner: 'студии K Nail Bar',
  css: `
:root{--bg:#f4ece4;--surface:#fbf7f2;--surface-2:#eaddd0;--text:#2a1b12;--muted:#6b5646;--line:#e2d3c4;--line-strong:#d2bfac;--accent:#3b2418;--accent-ink:#f4ece4;--accent-text:#7a4a2e;--gold:#c19a7a;
--font-display:Oranienbaum,Georgia,serif;--font-body:"IBM Plex Sans",system-ui,sans-serif;--display-weight:400;--display-tracking:0;--radius:6px;--radius-lg:10px;--btn-radius:4px;--input-radius:6px;--star:#b98a5e;--map-bg:#ece1d5;
--ph-pattern:repeating-linear-gradient(135deg,transparent 0 12px,rgba(59,36,24,.05) 12px 13px)}
.logo{font-size:30px;letter-spacing:.02em}
.btn{text-transform:uppercase;letter-spacing:.08em;font-size:14px}
.hero{padding:clamp(30px,6vw,80px) 0 clamp(56px,8vw,100px)}
.hero .wrap{display:grid;gap:32px;align-items:center}
@media (min-width:940px){.hero .wrap{grid-template-columns:1.05fr .95fr}}
.hero h1{font-size:clamp(56px,11vw,140px);line-height:.86;letter-spacing:-.01em}
.hero h1 small{display:block;font-size:clamp(14px,3.8vw,.3em);letter-spacing:.16em;text-transform:uppercase;margin-top:14px;color:var(--accent-text)}
.hero .lead{margin-top:22px;max-width:40ch}
.hero-cta{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}
.chipsline{display:flex;flex-wrap:wrap;gap:8px;margin-top:22px}
.chipsline span{border:1px solid var(--line-strong);padding:6px 12px;font-size:13.5px;border-radius:4px;background:var(--surface)}
.card-menu{background:var(--accent);color:#efe3d6;padding:clamp(24px,4vw,40px);position:relative;border-radius:4px;box-shadow:0 30px 60px -30px rgba(59,36,24,.7)}
.card-menu::before{content:"";position:absolute;inset:10px;border:1px solid rgba(193,154,122,.45);pointer-events:none}
.card-menu h2{font-size:clamp(34px,5vw,48px);text-align:center;color:#f4e6d6}
.card-menu .sub{text-align:center;font-size:12px;letter-spacing:.3em;text-transform:uppercase;color:var(--gold);margin-top:6px}
.card-menu ul{list-style:none;margin:22px 0 0;padding:0;display:grid;gap:14px}
.card-menu li{display:flex;align-items:baseline;gap:10px}
.card-menu li span{flex:none}
.card-menu li i{flex:1;border-bottom:1px dotted rgba(193,154,122,.6);transform:translateY(-4px)}
.card-menu li b{font-family:var(--font-display);font-size:24px;font-weight:400;color:#f4e6d6}
.menu-grid{display:grid;gap:18px}
@media (min-width:900px){.menu-grid{grid-template-columns:1fr 1fr}}
.mblock{background:var(--surface);border:1px solid var(--line);padding:28px}
.mblock h3{font-size:34px;border-bottom:1px solid var(--line-strong);padding-bottom:10px}
.mrow{display:grid;grid-template-columns:1fr auto;gap:4px 14px;padding:14px 0;border-bottom:1px dotted var(--line-strong)}
.mrow:last-child{border-bottom:0}
.mrow strong{font-weight:600}
.mrow b{font-family:var(--font-display);font-size:26px;font-weight:400;white-space:nowrap}
.mrow small{grid-column:1/-1;color:var(--muted);font-size:14px}
.perks{display:grid;gap:10px;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));margin-top:22px}
.perks div{display:flex;gap:10px;align-items:center;padding:14px 16px;background:var(--surface);border:1px solid var(--line);font-weight:500}
.perks svg{color:var(--accent-text)}
`,
  hero: `<section class="hero" aria-labelledby="h1"><div class="wrap">
<div>
<span class="eyebrow">Студия маникюра · Красногорск</span>
<h1 id="h1">K Nail Bar<small>маникюр · педикюр · брови</small></h1>
<p class="lead">Студия в Павшинской пойме. Покрытия Kalipso, Luxio и Termish, мужской сервис, наращивание и артдизайн. Есть парковка.</p>
<div class="hero-cta"><a class="btn btn-primary" href="${BOOK}" target="_blank" rel="noopener">${icon.cal}Записаться</a><a class="btn btn-ghost" href="#menu">Меню услуг</a></div>
<div class="chipsline"><span>★ 5,0 · 180 отзывов</span><span>Хорошее место 2026</span><span>Ежедневно 10–21</span></div>
</div>
<aside class="card-menu" aria-label="Популярное из меню"><h2>Меню</h2><p class="sub">популярное</p><ul>
<li><span>Маникюр без покрытия</span><i></i><b>1 300</b></li>
<li><span>Маникюр с покрытием</span><i></i><b>2 800</b></li>
<li><span>Френч</span><i></i><b>3 300</b></li>
<li><span>SMART-педикюр с покрытием</span><i></i><b>2 700</b></li>
<li><span>Ламинирование бровей</span><i></i><b>3 500</b></li>
</ul></aside>
</div></section>`,
  sections: [
    `<section class="sec sec-alt" id="menu" aria-labelledby="menu-h"><div class="wrap">
<div class="sec-head reveal"><span class="eyebrow">Меню студии</span><h2 id="menu-h">Все услуги и цены</h2><p>Цены в рублях. Стоимость дизайна уточняйте у мастера.</p></div>
<div class="menu-grid">${MENU.map(([h, rows]) => `<div class="mblock reveal"><h3>${h}</h3>${rows.map(([n, d, p]) => `<div class="mrow"><strong>${n}</strong><b>${p} ₽</b>${d ? `<small>${d}</small>` : ''}</div>`).join('')}</div>`).join('')}</div>
<div class="perks reveal"><div>${icon.check}Парковка</div><div>${icon.check}Wi-Fi</div><div>${icon.check}Мужской ногтевой сервис</div><div>${icon.check}Наращивание и артдизайн</div><div>${icon.check}Оплата картой</div></div>
<div class="btn-row"><a class="btn btn-primary" href="${BOOK}" target="_blank" rel="noopener">${icon.cal}Записаться онлайн</a></div>
</div></section>`,
    gallery({ title: 'Работы мастеров', lead: 'Френч, дизайн, наращивание — реальные фото вместо стоковых.' }),
    ratingBlock({ rating: 5, count: 180, orgUrl: 'https://yandex.ru/maps/org/80303677134/', award: true, alt: true }),
    visitBlock({ address: 'Московская обл., Красногорск, Авангардная ул., 2', metro: 'Павшинская пойма, ЖК «Арт»', hours: [['Ежедневно', '10:00–21:00']], orgId: '80303677134', seed: 31,
      extra: `<li>${icon.check}<div><b>Парковка</b>Есть</div></li>` }),
    contactsBlock({ alt: true, title: 'Запись и связь', items: [
      { icon: 'cal', label: 'Онлайн-запись', value: 'YCLIENTS', href: BOOK },
      { icon: 'phone', label: 'Телефон', value: '+7 (926) 749-68-06', href: 'tel:+79267496806' },
      { icon: 'wa', label: 'WhatsApp', value: 'Написать в WhatsApp', href: WA },
      { icon: 'chat', label: 'Все ссылки', value: 'taplink.cc/k_nail_bar', href: TAPLINK },
    ] }),
  ],
};
