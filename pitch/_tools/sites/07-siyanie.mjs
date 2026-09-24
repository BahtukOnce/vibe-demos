import { icon, page, priceTabs, ratingBlock, visitBlock, contactsBlock, gallery, bookingWidget } from '../kit.mjs';

const rays = `<svg class="rays" viewBox="-200 -200 400 400" aria-hidden="true">
<defs><radialGradient id="rg"><stop offset="0" stop-color="#fff6dd"/><stop offset=".55" stop-color="#f3dfae"/><stop offset="1" stop-color="#f3dfae" stop-opacity="0"/></radialGradient>
<linearGradient id="ray" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d9b870" stop-opacity=".0"/><stop offset="1" stop-color="#d9b870" stop-opacity=".55"/></linearGradient></defs>
<g class="spin">${Array.from({ length: 24 }, (_, i) => `<path d="M-5 -190 L5 -190 L1.4 -64 L-1.4 -64Z" fill="url(#ray)" transform="rotate(${i * 15})"/>`).join('')}</g>
<circle r="92" fill="url(#rg)"/>
<circle r="58" fill="#fffaf0" stroke="#d9b870" stroke-width="1.5"/>
<path d="M0 -26 L6 -6 L26 0 L6 6 L0 26 L-6 6 L-26 0 L-6 -6Z" fill="#b8924a"/>
</svg>`;

const HALLS = [
  ['Женский зал', 'Стрижки, укладки, окрашивание', 'стрижка от 1 200 ₽', 1],
  ['Мужской зал', 'Стрижки, борода и усы', 'стрижка от 600 ₽', 0],
  ['Детский зал', 'Стрижки для детей', 'стрижка от 900 ₽', 2],
  ['Ногтевой сервис', 'Маникюр, педикюр, дизайн', 'маникюр от 1 000 ₽', 6],
];

export default {
  slug: 'siyanie-xgii',
  name: 'Сияние',
  conceptName: 'студии «Сияние»',
  title: 'Студия «Сияние» — салон красоты у м. Планерная · концепт сайта',
  description: 'Концепт сайта студии «Сияние»: мужской, женский и детский залы, ногтевой сервис.',
  themeColor: '#fbf8f2',
  favicon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#2a241c"/><path d="M32 10l5 17 17 5-17 5-5 17-5-17-17-5 17-5Z" fill="#d9b870"/></svg>',
  fonts: 'https://fonts.googleapis.com/css2?family=Prata&family=Jost:wght@400;500;600&display=swap',
  phone: '+7 (916) 988-08-06',
  book: { href: '#zapis', label: 'Записаться', barLabel: 'Записаться' },
  nav: [['#zaly', 'Залы'], ['#uslugi', 'Прайс'], ['#zapis', 'Запись'], ['#kak-dobratsya', 'Как найти']],
  logo: '<span class="spark" aria-hidden="true">✦</span>Сияние',
  footLine: 'Салон красоты · Москва, ул. Планерная, 20к1 · «Сияем вместе!»',
  footSources: 'сайт студии и карточка на Яндекс Картах',
  policyOwner: 'студии «Сияние»',
  css: `
:root{--bg:#fbf8f2;--surface:#fff;--surface-2:#f3ecdf;--text:#2a241c;--muted:#6a5f50;--line:#ebe2d2;--line-strong:#ddd0b9;--accent:#8a6a2f;--accent-ink:#fff;--accent-text:#7d5f27;--gold:#d9b870;
--font-display:Prata,Georgia,serif;--font-body:Jost,system-ui,sans-serif;--display-weight:400;--display-tracking:-.005em;--radius:18px;--radius-lg:28px;--star:#c9a24f;--map-bg:#f2eadb;
--ph-pattern:radial-gradient(circle at 50% 50%,rgba(217,184,112,.35) 0 1.5px,transparent 2px) 0 0/18px 18px}
body{font-size:17px}
.logo{font-size:26px}
.spark{color:var(--gold);font-size:20px}
.hero{position:relative;overflow:hidden;text-align:center;padding:clamp(24px,4vw,56px) 0 clamp(56px,8vw,110px);background:radial-gradient(900px 480px at 50% 0,#f6ead0 0,transparent 70%)}
.rays{width:min(72vw,300px);height:auto;margin:0 auto -18px}
@media (min-width:900px){.rays{width:340px}}
.spin{transform-origin:0 0;animation:spin 60s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.hero h1{font-size:clamp(50px,9vw,110px);line-height:.95}
.hero .lead{margin:22px auto 0;max-width:40ch}
.hero-cta{display:flex;flex-wrap:wrap;gap:12px;margin-top:30px;justify-content:center}
.hero .eyebrow{margin-bottom:10px}
.halls{display:grid;gap:12px;grid-template-columns:repeat(2,minmax(0,1fr))}
@media (min-width:900px){.halls{grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}}
.hall{position:relative;display:grid;gap:6px;text-align:left;padding:20px 16px;border-radius:var(--radius-lg);border:1px solid var(--line);background:var(--surface);cursor:pointer;transition:border-color .2s,transform .2s,box-shadow .2s;overflow:hidden;min-height:150px;align-content:end}
@media (min-width:900px){.hall{padding:26px 24px;min-height:190px}}
.hall::before{content:"";position:absolute;right:-50px;top:-50px;width:150px;height:150px;border-radius:50%;background:radial-gradient(#f6e6bf,transparent 70%)}
.hall:hover{border-color:var(--gold);transform:translateY(-3px);box-shadow:0 20px 40px -26px rgba(138,106,47,.5)}
.hall h3{font-size:clamp(21px,5.6vw,28px);position:relative}
.hall p{color:var(--muted);position:relative;font-size:clamp(14px,3.6vw,16px)}
.hall b{position:relative;color:var(--accent-text);font-weight:600}
.entry{display:flex;gap:12px;align-items:flex-start;margin-top:16px;padding:14px 16px;border-radius:14px;background:var(--surface-2);font-size:15.5px}
.entry svg{color:var(--accent-text);width:22px;height:22px;margin-top:1px}
`,
  hero: `<section class="hero" aria-labelledby="h1"><div class="wrap">
${rays}
<span class="eyebrow">Салон красоты · м. Планерная</span>
<h1 id="h1">Сияем вместе</h1>
<p class="lead">Стрижки и окрашивание в мужском, женском и детском залах. Брови, маникюр и педикюр — в одном месте.</p>
<div class="hero-cta"><a class="btn btn-primary" href="#zapis">${icon.cal}Записаться</a><a class="btn btn-ghost" href="tel:+79169880806">${icon.phone}+7 (916) 988-08-06</a></div>
</div></section>`,
  sections: [
    `<section class="sec sec-alt" id="zaly" aria-labelledby="zaly-h"><div class="wrap">
<div class="sec-head reveal"><span class="eyebrow">Четыре зала</span><h2 id="zaly-h">Для всей семьи</h2><p>Выберите зал — откроется его прайс.</p></div>
<div class="halls">${HALLS.map(([h, d, p, tab]) => `<button type="button" class="hall reveal" data-tab="${tab}"><h3>${h}</h3><p>${d}</p><b>${p}</b></button>`).join('')}</div>
</div></section>`,
    priceTabs({
      title: 'Прайс-лист', lead: 'Цены с сайта студии. «от» — стоимость зависит от длины и сложности.',
      cats: [
        { name: 'Мужской зал', items: [
          { n: 'Стрижка под машинку', p: '600 ₽' }, { n: 'Стрижка классическая', p: '900 ₽' }, { n: 'Стрижка креативная', p: '1 000 ₽' }, { n: 'Борода', p: 'от 600 ₽' }, { n: 'Усы', p: '300 ₽' },
        ] },
        { name: 'Женский зал', items: [
          { n: 'Стрижка: короткие волосы', p: '1 200 ₽' }, { n: 'Стрижка: средние волосы', p: '1 700 ₽' }, { n: 'Стрижка: длинные волосы', p: '2 200 ₽' }, { n: 'Коррекция чёлки', p: '500 ₽' }, { n: 'Укладка дневная', p: 'от 800 ₽' }, { n: 'Укладка вечерняя', p: 'от 2 000 ₽' },
        ] },
        { name: 'Детский зал', items: [
          { n: 'Стрижка: короткие волосы', p: '1 200 ₽' }, { n: 'Стрижка: средние волосы', p: '1 700 ₽' }, { n: 'Стрижка: длинные волосы', p: '2 200 ₽' }, { n: 'Стрижка для мальчиков', p: '900 ₽' },
        ] },
        { name: 'Окрашивание', items: [
          { n: 'В один тон: короткие', p: 'от 4 500 ₽' }, { n: 'В один тон: средние', p: 'от 5 500 ₽' }, { n: 'В один тон: длинные', p: 'от 6 500 ₽' },
          { n: 'Мелирование: короткие', p: 'от 5 500 ₽' }, { n: 'Мелирование: средние', p: 'от 6 000 ₽' }, { n: 'Мелирование: длинные', p: 'от 7 000 ₽' },
          { n: 'Шатуш, айр тач, балаяж, тотал блонд', p: 'от 9 000 ₽' }, { n: 'Корни', p: '4 500 ₽' },
          { n: 'Тонирование: короткие / средние / длинные', p: 'от 4 500 ₽', ps: '5 500 / 6 500 ₽' },
          { n: 'Выход из цвета (смывка)', d: 'Короткие / средние / длинные', p: '3 000 ₽', ps: '4 000 / 5 000 ₽' },
        ] },
        { name: 'Уход и завивка', items: [
          { n: 'Восстановление волос', p: '1 500 ₽' }, { n: 'Лёгкий уход', p: '1 000 ₽' },
          { n: 'Биозавивка: короткие', p: '3 500 ₽' }, { n: 'Биозавивка: средние', p: '4 500 ₽' }, { n: 'Биозавивка: длинные', p: '5 500 ₽' },
        ] },
        { name: 'Брови и ресницы', items: [
          { n: 'Коррекция бровей пинцетом', p: '400 ₽' }, { n: 'Окрашивание бровей', p: '400 ₽' }, { n: 'Окрашивание ресниц', p: '400 ₽' },
        ] },
        { name: 'Маникюр', items: [
          { n: 'Маникюр классический / аппаратный / комбинированный', d: 'Без покрытия', p: '1 000 ₽' }, { n: 'Мужской маникюр', p: '1 200 ₽' },
          { n: 'Маникюр + гель-лак', d: 'Классический, аппаратный или комбинированный', p: '2 500 ₽' },
          { n: 'Снятие', p: '400 ₽' }, { n: 'Выравнивание', p: '500 ₽' }, { n: 'Укрепление гелем или акриловой пудрой', p: '1 200 ₽' },
          { n: 'Френч', p: '500 ₽' }, { n: 'Втирка', p: '300 ₽' }, { n: 'Ремонт ногтя', p: '300 ₽' }, { n: 'Дизайн 1 ногтя', p: '100–200 ₽' }, { n: 'Наклейка, 1 шт.', p: '50 ₽' }, { n: 'Наращивание гелем', p: 'от 5 000 ₽' },
        ] },
        { name: 'Педикюр', items: [
          { n: 'Педикюр аппаратный', p: '2 200 ₽' }, { n: 'Педикюр смарт', p: '2 300 ₽' }, { n: 'Аппаратный + гель-лак', p: '3 200 ₽' }, { n: 'Смарт + гель-лак', p: '3 300 ₽' },
        ] },
      ],
      bookHref: '#zapis', bookLabel: 'Записаться',
      footNote: 'Цены — с сайта студии. Точную стоимость подтвердит мастер.',
    }),
    bookingWidget({
      title: 'Выберите удобное время', alt: true, lead: 'Работаем ежедневно с 10:00 до 20:00.',
      services: ['Женская стрижка', 'Мужская стрижка', 'Детская стрижка', 'Окрашивание', 'Укладка', 'Маникюр', 'Педикюр', 'Брови и ресницы'],
      open: '10:00', close: '20:00', step: 30, minLen: 60,
    }),
    gallery({ title: 'Работы мастеров', lead: 'Стрижки, окрашивания и маникюр — реальные фото вместо стоковых.' }),
    ratingBlock({ rating: 5, count: 124, orgUrl: 'https://yandex.ru/maps/org/185283450230/', award: true, alt: true }),
    visitBlock({ address: 'Москва, ул. Планерная, 20к1', metro: 'м. Планерная — 610 м', hours: [['Ежедневно', '10:00–20:00']], orgId: '185283450230', seed: 17,
      extra: `<li>${icon.info}<div><b>Как войти</b>Первый этаж, вход со двора</div></li>` }),
    contactsBlock({ alt: true, title: 'Запись по телефону и почте', items: [
      { icon: 'phone', label: 'Телефон', value: '+7 (916) 988-08-06', href: 'tel:+79169880806' },
      { icon: 'mail', label: 'Почта', value: 'studiosyanie@ya.ru', href: 'mailto:studiosyanie@ya.ru' },
    ] }),
  ],
  js: `
(function(){
  document.querySelectorAll('.hall').forEach(function(h){h.addEventListener('click',function(){var t=document.getElementById('uslugi-t'+h.getAttribute('data-tab'));if(t){t.click();document.getElementById('uslugi').scrollIntoView();setTimeout(function(){t.focus({preventScroll:true})},450);}});});
})();`,
};
