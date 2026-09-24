import { icon, page, priceTabs, ratingBlock, visitBlock, contactsBlock, gallery, AWARD_ICON } from '../kit.mjs';

const BOOK = 'https://n204433.yclients.com/';
const WA = 'https://wa.me/79153526633';
const TG = 'https://t.me/dommanikura';

const HITS = [
  ['Маникюр', 'Базовая услуга студии', '1 070 ₽', ''],
  ['Маникюр + покрытие «ХИТ»', 'Гель-лак Cosmo, массаж рук (крем + масло) в подарок', '2 150 ₽', 'Акция'],
  ['Педикюр + покрытие «ХИТ» + SPA', 'Стойкий гель-лак и SPA-уход для ног', '3 350 ₽', ''],
  ['Маникюр + педикюр в 4 руки', 'Покрытие «ХИТ» и SPA-программа за один сеанс', '5 500 ₽', 'Экономит время'],
];

export default {
  slug: 'dom-manikyura-g5ox',
  name: 'Дом Маникюра',
  conceptName: 'студии «Дом Маникюра»',
  title: 'Дом Маникюра — ногтевая студия у м. Бабушкинская · концепт сайта',
  description: 'Концепт сайта ногтевой студии «Дом Маникюра»: цены, бонусы и онлайн-запись.',
  themeColor: '#fff6f0',
  favicon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#b24e33"/><path d="M14 30 32 14l18 16v20H14Z" fill="#fff6f0"/></svg>',
  fonts: 'https://fonts.googleapis.com/css2?family=Yeseva+One&family=Nunito+Sans:opsz,wght@6..12,400;6..12,600;6..12,700;6..12,800&display=swap',
  phone: '+7 (915) 352-66-33',
  book: { href: BOOK, label: 'Записаться онлайн', barLabel: 'Записаться' },
  nav: [['#hity', 'Хиты'], ['#bonusy', 'Бонусы'], ['#uslugi', 'Цены'], ['#otzyvy', 'Отзывы']],
  logo: '<span class="house" aria-hidden="true"></span>Дом Маникюра',
  footLine: 'Ногтевая студия · Москва, ул. Менжинского, 25',
  footSources: 'сайт студии на Яндекс Бизнесе и карточка на Яндекс Картах',
  policyOwner: 'студии «Дом Маникюра»',
  css: `
:root{--bg:#fff6f0;--surface:#fff;--surface-2:#fce9de;--text:#3a2419;--muted:#7a5b4c;--line:#f3dccf;--line-strong:#ebc9b7;--accent:#b24e33;--accent-ink:#fff;--accent-text:#a3452c;
--font-display:"Yeseva One",Georgia,serif;--font-body:"Nunito Sans",system-ui,sans-serif;--display-weight:400;--display-tracking:0;--radius:20px;--radius-lg:30px;--star:#f0a33a;--map-bg:#fbe8dc;
--ph-pattern:radial-gradient(circle at 0 0,rgba(178,78,51,.08) 0 10px,transparent 11px) 0 0/26px 26px}
body{font-size:16.5px}
.logo{font-size:23px}
.house{width:20px;height:18px;background:var(--accent);clip-path:polygon(50% 0,100% 45%,100% 100%,0 100%,0 45%)}
.hero{padding:clamp(34px,6vw,80px) 0 clamp(56px,8vw,100px);background:linear-gradient(180deg,#fde9dc,transparent)}
.hero .wrap{display:grid;gap:30px;align-items:center}
@media (min-width:920px){.hero .wrap{grid-template-columns:1.1fr .9fr}}
.hero h1{font-size:clamp(44px,7.6vw,86px);line-height:1.02}
.hero .lead{margin-top:18px;max-width:38ch}
.hero-cta{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}
.facts-row{display:flex;flex-wrap:wrap;gap:8px 18px;margin-top:24px;font-size:15px;color:var(--muted)}
.facts-row span{display:inline-flex;gap:8px;align-items:center}
.facts-row svg{color:var(--accent-text)}
.home{position:relative;justify-self:center;width:min(100%,400px);aspect-ratio:1/1.08;background:linear-gradient(160deg,#fff,#fde3d4);clip-path:polygon(50% 0,100% 38%,100% 100%,0 100%,0 38%);display:grid;place-items:center;text-align:center;padding:30% 12% 10%;filter:drop-shadow(0 30px 40px rgba(178,78,51,.2))}
.home .big{font-family:var(--font-display);font-size:clamp(80px,14vw,124px);line-height:.9;color:var(--accent-text)}
.home .stars5{color:#f0a33a;letter-spacing:4px;font-size:22px}
.home p{font-weight:700;margin-top:6px}
.home small{display:block;color:var(--muted);font-size:13.5px;margin-top:6px}
.home .aw{display:inline-flex;gap:6px;align-items:center;margin-top:12px;font-size:13px;font-weight:700;background:#fff;border-radius:999px;padding:6px 10px;border:1px solid var(--line)}
.home .aw svg{width:18px;height:18px;color:var(--accent-text)}
.hits{display:grid;gap:14px;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr))}
.hit{position:relative;display:grid;gap:10px;align-content:space-between;background:var(--surface);border:1px solid var(--line);border-radius:var(--radius-lg);padding:24px}
@media (min-width:760px){.hit{min-height:220px}}
.hit .tag{position:absolute;top:18px;right:18px;background:var(--accent);color:#fff;font-size:12px;font-weight:800;border-radius:999px;padding:4px 10px}
.hit h3{font-size:24px;max-width:13ch}
.hit p{color:var(--muted);font-size:15px}
.hit .pr{font-family:var(--font-display);font-size:36px;color:var(--accent-text)}
.hit a{font-weight:800;text-decoration:none;display:inline-flex;gap:8px;align-items:center}
.bonus{display:grid;gap:10px;grid-template-columns:repeat(3,minmax(0,1fr))}
.bcard{border-radius:var(--radius-lg);padding:clamp(14px,3vw,26px);background:var(--accent);color:#fff;display:grid;gap:6px;align-content:start}
.bcard:nth-child(2){background:#8f3b25}
.bcard:nth-child(3){background:#3a2419}
.bcard .pct{font-family:var(--font-display);font-size:clamp(28px,8vw,64px);line-height:1}
.bcard p{color:#ffe2d6;font-size:clamp(13px,3.4vw,16px)}
.perks{display:grid;gap:8px;grid-template-columns:repeat(2,minmax(0,1fr));margin-top:22px;list-style:none;padding:0}
@media (min-width:900px){.perks{grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}}
.perks li{display:flex;gap:8px;align-items:center;background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:12px;font-weight:600;font-size:clamp(13.5px,3.6vw,16px)}
.perks svg{color:var(--accent-text);width:22px;height:22px}
`,
  hero: `<section class="hero" aria-labelledby="h1"><div class="wrap">
<div>
<span class="eyebrow">Ногтевая студия · м. Бабушкинская</span>
<h1 id="h1">Маникюр от 1 070 ₽ и уход в 4 руки</h1>
<p class="lead">Маникюр, педикюр, покрытие, наращивание и дизайн. Брови и ресницы. Запишитесь онлайн — время выберете сами.</p>
<div class="hero-cta"><a class="btn btn-primary" href="${BOOK}" target="_blank" rel="noopener">${icon.cal}Записаться онлайн</a><a class="btn btn-ghost" href="${WA}" target="_blank" rel="noopener">${icon.wa}WhatsApp</a></div>
<div class="facts-row"><span>${icon.clock}Ежедневно 10:00–22:00</span><span>${icon.metro}370 м от метро</span></div>
</div>
<a class="home" href="#otzyvy" style="text-decoration:none"><div><div class="big">4,9</div><div class="stars5" aria-hidden="true">★★★★★</div><p>425 отзывов на Яндекс Картах</p><span class="aw">${AWARD_ICON}Хорошее место 2026</span></div></a>
</div></section>`,
  sections: [
    `<section class="sec" id="hity" aria-labelledby="hity-h"><div class="wrap">
<div class="sec-head reveal"><span class="eyebrow">Хиты студии</span><h2 id="hity-h">Главное из прайса</h2><p>Услуги из каталога студии — с ценами.</p></div>
<div class="hits">${HITS.map(([h, d, p, t]) => `<article class="hit reveal">${t ? `<span class="tag">${t}</span>` : ''}<div><h3>${h}</h3><p style="margin-top:8px">${d}</p></div><div><div class="pr">${p}</div><a href="${BOOK}" target="_blank" rel="noopener" aria-label="Записаться: ${h}">Записаться ${icon.arrow}</a></div></article>`).join('')}</div>
</div></section>`,
    `<section class="sec sec-alt" id="bonusy" aria-labelledby="bonusy-h"><div class="wrap">
<div class="sec-head reveal"><span class="eyebrow">Для постоянных клиентов</span><h2 id="bonusy-h">Скидки постоянным клиентам</h2></div>
<div class="bonus">
<div class="bcard reveal"><span class="pct">−5%</span><p>на каждый 5-й визит</p></div>
<div class="bcard reveal"><span class="pct">−10%</span><p>на каждый 10-й визит</p></div>
<div class="bcard reveal"><span class="pct">−10%</span><p>в день рождения</p></div>
</div>
<ul class="perks">
<li>${icon.check}Одноразовые наборы и антисептика</li>
<li>${icon.check}Чай и кофе — бесплатно</li>
<li>${icon.check}Мужской ногтевой сервис</li>
<li>${icon.check}Подарочные сертификаты</li>
<li>${icon.check}Wi-Fi и оплата картой</li>
<li>${icon.check}Наращивание и артдизайн</li>
</ul>
</div></section>`,
    priceTabs({
      title: 'Цены', lead: 'Все услуги из каталога студии.', bookHref: BOOK,
      cats: [
        { name: 'Маникюр', items: [
          { n: 'Маникюр', p: '1 070 ₽' },
          { n: 'Покрытие «Премиум»', p: '1 600 ₽' },
          { n: 'Маникюр + покрытие «ХИТ» + массаж рук', d: 'Гель-лак Cosmo, массаж (крем + масло) в подарок', p: '2 150 ₽' },
          { n: 'Маникюр + гель-лак «Стандарт» + массаж рук', d: 'Массаж (крем + масло) в подарок', p: '2 350 ₽' },
        ] },
        { name: 'Педикюр', items: [
          { n: 'Педикюр', p: '2 100 ₽' },
          { n: 'Педикюр + покрытие «ХИТ» + SPA для ног', p: '3 350 ₽' },
        ] },
        { name: 'В 4 руки', items: [
          { n: 'Маникюр + педикюр + покрытие «ХИТ» + SPA-программа', d: 'Два мастера одновременно — быстрее в два раза', p: '5 500 ₽' },
        ] },
        { name: 'Брови', items: [
          { n: 'Ламинирование бровей — комплекс', d: 'Коррекция + окрашивание + ботокс', p: '2 800 ₽', ps: 'акция' },
          { n: 'Окрашивание бровей хной', d: 'Brow-пилинг в подарок', p: '1 000 ₽' },
        ] },
      ],
    }),
    gallery({ title: 'Работы мастеров', lead: 'Френч, дизайн, наращивание — реальные фото вместо стоковых.', alt: true }),
    ratingBlock({ rating: 4.9, count: 425, orgUrl: 'https://yandex.ru/maps/org/212402716159/', award: true, lead: 'Отзывы клиенток — в карточке студии на Яндекс Картах. Там же можно оставить свой.' }),
    visitBlock({ address: 'Москва, ул. Менжинского, 25', metro: 'м. Бабушкинская — 370 м', hours: [['Ежедневно', '10:00–22:00']], orgId: '212402716159', seed: 19, alt: true }),
    contactsBlock({ title: 'Запишитесь, как удобно', items: [
      { icon: 'cal', label: 'Онлайн-запись', value: 'YCLIENTS', href: BOOK },
      { icon: 'phone', label: 'Телефон', value: '+7 (915) 352-66-33', href: 'tel:+79153526633' },
      { icon: 'wa', label: 'WhatsApp', value: 'Написать в WhatsApp', href: WA },
      { icon: 'tg', label: 'Telegram', value: '@dommanikura', href: TG },
    ] }),
  ],
};
