import { icon, page, priceTabs, ratingBlock, visitBlock, contactsBlock, gallery } from '../kit.mjs';

const BOOK = 'https://n233635.yclients.com/';
const WA = 'https://wa.me/79015878496';
const TG = 'https://t.me/dorogoy_ya_zanyata';

const LASER = [
  ['XS', 4200, ['Глубокое бикини', 'Подмышечные впадины']],
  ['S', 6800, ['Глубокое бикини', 'Подмышечные впадины', 'Голени']],
  ['M', 8200, ['Глубокое бикини', 'Подмышечные впадины', 'Ноги полностью']],
  ['L', 9200, ['Глубокое бикини', 'Подмышечные впадины', 'Голени', 'Руки до локтя']],
  ['XL', 10800, ['Глубокое бикини', 'Подмышечные впадины', 'Ноги полностью', 'Руки полностью']],
];
const rub = (n) => n.toLocaleString('ru-RU').replace(/ /g, ' ') + ' ₽';

export default {
  slug: 'dorogoj-ya-zanyata-rnwy',
  name: 'Дорогой, я занята!',
  conceptName: 'студии «Дорогой, я занята!»',
  title: 'Дорогой, я занята! — маникюр и эпиляция на Тушинской · концепт сайта',
  description: 'Концепт сайта студии «Дорогой, я занята!»: маникюр, педикюр, брови и эпиляция.',
  themeColor: '#fff4f3',
  favicon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="32" fill="#a3123a"/><text x="32" y="44" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-size="34" fill="#fff4f3">Д</text></svg>',
  fonts: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;1,500;1,600&family=Inter:wght@400;500;600;700&display=swap',
  phone: '+7 (901) 587-84-96',
  book: { href: BOOK, label: 'Записаться онлайн', barLabel: 'Записаться' },
  nav: [['#uslugi', 'Услуги'], ['#laser', 'Лазер'], ['#o-nas', 'О нас'], ['#otzyvy', 'Отзывы']],
  logo: '<em>Дорогой, я занята!</em>',
  footLine: 'Маникюр, педикюр, брови, эпиляция · Москва, Тушинская ул., 12',
  footSources: 'сайт студии на Яндекс Бизнесе и карточка на Яндекс Картах',
  policyOwner: 'студии «Дорогой, я занята!»',
  css: `
:root{--bg:#fff4f3;--surface:#fff;--surface-2:#fbe4e4;--text:#2a0e14;--muted:#6e4a50;--line:#f5d8d8;--line-strong:#ecc2c4;--accent:#a3123a;--accent-ink:#fff;--accent-text:#a3123a;
--font-display:"Playfair Display",Georgia,serif;--font-body:Inter,system-ui,sans-serif;--display-weight:600;--display-tracking:-.02em;--radius:20px;--radius-lg:30px;--star:#e2446b;--map-bg:#fae3e3;
--ph-pattern:radial-gradient(ellipse at 50% 60%,rgba(163,18,58,.08) 0 8px,transparent 9px) 0 0/30px 30px}
.logo{font-size:21px}
.logo em{font-style:italic;font-weight:500}
.hero{position:relative;overflow:hidden;padding:clamp(40px,7vw,100px) 0 clamp(56px,8vw,110px)}
.hero::after{content:"";position:absolute;right:-12vw;top:-8vw;width:48vw;height:48vw;min-width:320px;min-height:320px;border-radius:50%;background:radial-gradient(circle,#fbd2d8,transparent 68%);z-index:-1}
.status{display:inline-flex;align-items:center;gap:10px;background:var(--surface);border:1px solid var(--line-strong);border-radius:999px;padding:8px 14px 8px 10px;font-size:14px;font-weight:600;box-shadow:0 10px 30px -18px rgba(163,18,58,.5)}
.status i{width:10px;height:10px;border-radius:50%;background:#e2446b;box-shadow:0 0 0 0 rgba(226,68,107,.6);animation:pulse 1.8s infinite}
@keyframes pulse{70%{box-shadow:0 0 0 10px rgba(226,68,107,0)}100%{box-shadow:0 0 0 0 rgba(226,68,107,0)}}
.hero h1{font-size:clamp(52px,10vw,132px);line-height:.92;font-style:italic;font-weight:500;margin-top:22px}
.hero h1 span{display:block;color:var(--accent-text)}
.hero .lead{margin-top:24px;max-width:44ch}
.hero-cta{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}
.tagrow{display:flex;flex-wrap:wrap;gap:8px;margin-top:26px}
.tagrow span{border-radius:999px;background:var(--surface-2);padding:7px 13px;font-size:14px;font-weight:600;color:var(--accent-text)}
.laser{display:grid;gap:18px;align-items:start}
@media (min-width:900px){.laser{grid-template-columns:1fr 1fr}}
.sizes{display:grid;grid-template-columns:repeat(5,1fr);gap:8px}
.size{aspect-ratio:1;border-radius:18px;border:1.5px solid var(--line-strong);background:var(--surface);font-family:var(--font-display);font-size:clamp(20px,5vw,30px);font-weight:600;cursor:pointer;transition:all .2s}
.size[aria-pressed="true"]{background:var(--accent);border-color:var(--accent);color:#fff;transform:translateY(-3px);box-shadow:0 14px 30px -14px rgba(163,18,58,.7)}
.lres{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius-lg);padding:28px}
.lres .pr{font-family:var(--font-display);font-size:clamp(44px,7vw,64px);line-height:1;color:var(--accent-text)}
.lres ul{list-style:none;margin:16px 0 0;padding:0;display:grid;gap:10px}
.lres li{display:flex;gap:10px;align-items:center}
.lres li svg{color:var(--accent-text)}
.about{display:grid;gap:24px;align-items:center}
@media (min-width:900px){.about{grid-template-columns:1fr 1fr}}
.quote{font-family:var(--font-display);font-style:italic;font-size:clamp(26px,3.6vw,40px);line-height:1.2}
.quote::before{content:"«";color:var(--accent-text)}
.quote::after{content:"»";color:var(--accent-text)}
.mini{display:grid;gap:10px;grid-template-columns:1fr 1fr}
.mini div{background:var(--surface);border:1px solid var(--line);border-radius:18px;padding:18px}
.mini strong{display:block;font-family:var(--font-display);font-size:clamp(18px,4.6vw,22px);font-style:italic;line-height:1.2;margin-bottom:4px}
.mini span{color:var(--muted);font-size:14.5px}
`,
  hero: `<section class="hero" aria-labelledby="h1"><div class="wrap">
<span class="status"><i aria-hidden="true"></i>Занята: делаю маникюр на Тушинской</span>
<h1 id="h1">Дорогой, <span>я занята!</span></h1>
<p class="lead">Маникюр и педикюр, брови и ресницы, депиляция и лазерная эпиляция. Хороший фильм и бокал вина — во время процедуры.</p>
<div class="hero-cta"><a class="btn btn-primary" href="${BOOK}" target="_blank" rel="noopener">${icon.cal}Записаться онлайн</a><a class="btn btn-ghost" href="#uslugi">Цены</a></div>
<div class="tagrow"><span>★ 5,0 · 298 отзывов</span><span>Хорошее место 2026</span><span>Ежедневно 10–22</span></div>
</div></section>`,
  sections: [
    priceTabs({
      title: 'Услуги и цены', eyebrow: 'Прайс', lead: 'Всё включено — так и написано: ALL INCLUSIVE.', alt: true, bookHref: BOOK,
      cats: [
        { name: 'Маникюр', items: [
          { n: 'Маникюр ALL INCLUSIVE', d: 'Снятие старого покрытия, маникюр, выравнивание жёсткой базой (акрилом или гелем для наращивания), цвет или блёстки', p: '3 200 ₽' },
          { n: 'Маникюр BASE', d: 'Снятие старого покрытия, маникюр, выравнивание базой, цвет или блёстки', p: '2 700 ₽' },
        ] },
        { name: 'Педикюр', items: [
          { n: 'Педикюр ALL INCLUSIVE', d: 'Smart-педикюр: обработка ступни, пяточек и пальчиков, снятие старого покрытия, база, цвет или блёстки', p: '3 700 ₽' },
          { n: 'Педикюр BASE', d: 'Обработка кутикулы, снятие старого покрытия, база, цвет или блёстки', p: '3 200 ₽' },
          { n: 'Педикюр без покрытия', d: 'Пальчики — в комбинированной технике, стопа — в технике Smart', p: '3 000 ₽' },
        ] },
        { name: 'Дизайн', items: [
          { n: 'Френч', p: '500 ₽' },
          { n: 'Мультяшки', d: 'Цена зависит от сложности, примерно 500–800 ₽; от 30 минут', p: 'от 500 ₽' },
        ] },
        { name: 'Брови и ресницы', items: [
          { n: 'Архитектура бровей', d: 'Эскиз brow-пастой, коррекция и окрашивание', p: '1 900 ₽' },
          { n: 'Ламинирование бровей', d: 'Коррекция, окрашивание стойким красителем и ламинирование. Эффект — до 2 месяцев', p: '3 200 ₽' },
          { n: 'Ламинирование ресниц', p: '3 500 ₽' },
          { n: 'Снятие наращённых ресниц', p: '700 ₽' },
        ] },
        { name: 'Депиляция', items: [
          { n: '1 зона лица', d: 'Сахар или полимерный воск', p: '600 ₽' },
          { n: 'Подмышечные впадины', d: 'Сахар или полимерный воск', p: '1 000 ₽' },
          { n: 'Голени или бёдра', d: 'Сахар или полимерный воск', p: '1 700 ₽' },
          { n: 'Глубокое бикини', d: 'Сахар или полимерный воск', p: '3 000 ₽' },
        ] },
        { name: 'Лазер', items: [
          { n: 'Подмышечные впадины', p: '1 500 ₽' }, { n: 'Голени и колени', p: '3 000 ₽' }, { n: 'Глубокое бикини', p: '3 500 ₽' },
          ...LASER.map(([s, p, z]) => ({ n: `Комплекс ${s}`, d: z.join(' + '), p: rub(p) })),
        ] },
        { name: 'Электроэпиляция', items: [
          { n: 'Электроэпиляция', d: 'Зоны: глубокое бикини, голени, подмышечные впадины', p: '55 ₽', ps: 'за минуту' },
          { n: 'Пробный сеанс', d: 'Обязательное пробное посещение, 15 минут', p: '825 ₽' },
        ] },
      ],
    }),
    `<section class="sec" id="laser" aria-labelledby="laser-h"><div class="wrap">
<div class="sec-head reveal"><span class="eyebrow">Лазерная эпиляция</span><h2 id="laser-h">Подберите комплекс по размеру</h2><p>От XS до XL — выберите набор зон и сразу увидите цену.</p></div>
<div class="laser reveal">
<div><div class="sizes" role="group" aria-label="Размер комплекса">${LASER.map(([s], i) => `<button type="button" class="size" data-i="${i}" aria-pressed="${i === 2}">${s}</button>`).join('')}</div>
<p class="note" style="margin-top:14px">Отдельные зоны: подмышки — 1 500 ₽, голени и колени — 3 000 ₽, глубокое бикини — 3 500 ₽.</p></div>
<div class="lres" aria-live="polite"><p class="note" id="l-name">Комплекс M</p><p class="pr" id="l-price">8 200 ₽</p><ul id="l-zones"></ul><a class="btn btn-primary" style="margin-top:20px" href="${BOOK}" target="_blank" rel="noopener">${icon.cal}Записаться на лазер</a></div>
</div></div></section>`,
    `<section class="sec sec-alt" id="o-nas" aria-labelledby="o-nas-h"><div class="wrap">
<div class="about">
<div class="reveal"><span class="eyebrow">О студии</span><h2 id="o-nas-h" class="sr">О студии</h2><p class="quote">Минимум — это классный фильм, бокал вина и хорошее настроение</p></div>
<div class="mini reveal">
<div><strong>Инструктор рядом</strong><span>Руководитель студии — инструктор по маникюру, постоянно в студии и всё контролирует</span></div>
<div><strong>Разбор работ</strong><span>Мастера учатся постоянно: работа над ошибками и разбор</span></div>
<div><strong>Под вас</strong><span>Подстраиваемся под ваш комфорт</span></div>
<div><strong>7 дней в неделю</strong><span>Ежедневно с 10:00 до 22:00</span></div>
</div>
</div></div></section>`,
    gallery({ title: 'Работы мастеров', lead: 'Маникюр, дизайн, брови — реальные фото вместо стоковых.' }),
    ratingBlock({ rating: 5, count: 298, orgUrl: 'https://yandex.ru/maps/org/181079357027/', award: true, alt: true }),
    visitBlock({ address: 'Москва, Тушинская ул., 12', metro: 'м. Тушинская — 710 м', hours: [['Ежедневно', '10:00–22:00']], orgId: '181079357027', seed: 29 }),
    contactsBlock({ alt: true, title: 'Напишите — ответим', items: [
      { icon: 'cal', label: 'Онлайн-запись', value: 'YCLIENTS', href: BOOK },
      { icon: 'phone', label: 'Телефон', value: '+7 (901) 587-84-96', href: 'tel:+79015878496' },
      { icon: 'wa', label: 'WhatsApp', value: 'Написать в WhatsApp', href: WA },
      { icon: 'tg', label: 'Telegram', value: '@dorogoy_ya_zanyata', href: TG },
    ] }),
  ],
  js: `
(function(){
  var L=${JSON.stringify(LASER)};
  var check='${'<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>'}';
  function show(i){var x=L[i];document.getElementById('l-name').textContent='Комплекс '+x[0];document.getElementById('l-price').textContent=x[1].toLocaleString('ru-RU').replace(/\\u00a0/g,' ')+' ₽';document.getElementById('l-zones').innerHTML=x[2].map(function(z){return '<li>'+check+z+'</li>'}).join('');}
  document.querySelectorAll('.size').forEach(function(b){b.addEventListener('click',function(){document.querySelectorAll('.size').forEach(function(x){x.setAttribute('aria-pressed','false')});b.setAttribute('aria-pressed','true');show(+b.getAttribute('data-i'));});});
  show(2);
})();`,
};
