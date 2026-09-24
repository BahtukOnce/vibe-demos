import { icon, page, priceTabs, ratingBlock, visitBlock, contactsBlock, gallery, demoMsg } from '../kit.mjs';

const WA = 'https://wa.me/79917142303';
const TG = 'https://t.me/Podolog_Proskurnova';

// "What brings you" helper: maps common requests to services from the price list.
const HELP = [
  ['Вросший ноготь', 'Ортониксия — коррекция вросшего ногтя без операции.', [['Титановая нить', '9 000 ₽'], ['Скоба 3ТО «Омега»', '9 000 ₽'], ['Скоба «Унибрейс»', '9 000 ₽']]],
  ['Изменённые ногти', 'Обработка ногтевых пластин с видимыми изменениями. При необходимости — анализ в лаборатории.', [['Пальцы парамедицинские', 'от 5 000 ₽'], ['Обработка сложного ногтя', 'от 2 000 ₽'], ['Забор материала на анализ', '800 ₽']]],
  ['Натоптыши и мозоли', 'Обработка локального гиперкератоза — участков огрубевшей кожи.', [['Малая зона', 'от 2 500 ₽'], ['Большая зона', 'от 3 000 ₽'], ['Разгрузочная повязка', '500 ₽']]],
  ['Изменения кожи стоп', 'Обработка кожи стоп с видимыми изменениями или комплекс «ногти + стопы».', [['Стопы парамедицинские', 'от 5 000 ₽'], ['Парамедицинский педикюр — комплекс', 'от 7 000 ₽']]],
  ['Стопам нужна разгрузка', 'Ортопедия: индивидуальные ортозы и анатомические стельки.', [['Ортозы силиконовые', 'от 3 000 ₽'], ['Стельки анатомические', '7 000 ₽'], ['Коррекция стелек', '3 500 ₽']]],
  ['Просто ухоженные стопы', 'Педикюр для стоп и ногтей без видимых изменений.', [['Гигиенический педикюр', '6 000 ₽'], ['Аппаратная обработка стоп или ногтей', '4 000 ₽']]],
];

const foot = `<svg class="footart" viewBox="0 0 260 340" aria-hidden="true">
<path d="M126 26c34 0 60 30 66 76 6 44-4 70-4 108 0 40 22 64 12 96-8 24-38 30-62 24-30-8-46-34-50-70-4-34-26-58-28-102C58 96 84 26 126 26Z" fill="#e6f2ef" stroke="#0f766e" stroke-width="3"/>
${[[92, 34, 15], [124, 22, 12], [150, 24, 10], [172, 34, 9], [188, 50, 8]].map(([x, y, r]) => `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 1.25}" fill="#fff" stroke="#0f766e" stroke-width="3"/>`).join('')}
<g fill="#0f766e"><circle class="pt" cx="92" cy="30" r="5"/><circle class="pt p2" cx="112" cy="120" r="5"/><circle class="pt p3" cx="150" cy="290" r="5"/></g>
<path d="M112 120c20 30 30 60 26 100" stroke="#0f766e" stroke-width="2" stroke-dasharray="4 6" fill="none" opacity=".5"/>
</svg>`;

export default {
  slug: 'kabinet-podologii-y3wc',
  name: 'Кабинет подологии',
  conceptName: '«Кабинета подологии»',
  title: 'Кабинет подологии на Бульваре Рокоссовского · концепт сайта',
  description: 'Концепт сайта кабинета подологии: вросший ноготь, изменённые ногти, стопы и ортопедия.',
  themeColor: '#f5faf9',
  favicon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#0f766e"/><path d="M30 12c9 0 14 8 15 20s-1 18 2 26c-6 4-14 2-17-6-3-7-8-12-8-22 0-10 3-18 8-18Z" fill="#e6f2ef"/></svg>',
  fonts: 'https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,500;7..72,600&family=Inter:wght@400;500;600;700&display=swap',
  phone: '+7 (991) 714-23-03',
  book: { href: '#zapis', label: 'Записаться', barLabel: 'Записаться' },
  nav: [['#pomoshch', 'С чем приходят'], ['#uslugi', 'Цены'], ['#otzyvy', 'Отзывы'], ['#kontakty', 'Контакты']],
  logo: '<span class="dot" aria-hidden="true"></span>Кабинет подологии',
  footLine: 'Подология, ортониксия, ортопедия · Москва, Ивантеевская ул., 28к1',
  footSources: 'сайт кабинета на Яндекс Бизнесе и карточка на Яндекс Картах',
  policyOwner: 'кабинета подологии',
  css: `
:root{--bg:#f5faf9;--surface:#fff;--surface-2:#e6f2ef;--text:#0f2a2a;--muted:#4a6363;--line:#d9e9e5;--line-strong:#c2dcd6;--accent:#0f766e;--accent-ink:#fff;--accent-text:#0d6b64;
--font-display:Literata,Georgia,serif;--font-body:Inter,system-ui,sans-serif;--display-weight:500;--display-tracking:-.02em;--radius:16px;--radius-lg:22px;--btn-radius:12px;--star:#e0a526;--map-bg:#e4f0ed;
--ph-pattern:linear-gradient(90deg,rgba(15,118,110,.06) 1px,transparent 1px) 0 0/22px 22px}
.logo{font-size:21px}
.dot{width:12px;height:12px;border-radius:50%;background:var(--accent);box-shadow:0 0 0 5px rgba(15,118,110,.15)}
.hero{padding:clamp(34px,6vw,84px) 0 clamp(56px,8vw,100px)}
.hero .wrap{display:grid;gap:30px;align-items:center}
@media (min-width:920px){.hero .wrap{grid-template-columns:1.2fr .8fr}}
.hero h1{font-size:clamp(44px,7.6vw,88px);line-height:1}
.hero .lead{margin-top:20px;max-width:44ch}
.hero-cta{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}
.tick{display:grid;gap:8px;margin-top:24px;padding:0;list-style:none}
.tick li{display:flex;gap:10px;align-items:center;font-weight:500}
.tick svg{color:var(--accent-text)}
.footart{width:min(64vw,280px);justify-self:center}
.pt{animation:pt 2.4s ease-in-out infinite;transform-box:fill-box;transform-origin:center}
.p2{animation-delay:.8s}.p3{animation-delay:1.6s}
@keyframes pt{50%{transform:scale(1.8);opacity:.5}}
.helper{display:grid;gap:18px}
@media (min-width:900px){.helper{grid-template-columns:.9fr 1.1fr;align-items:start}}
.probs{display:grid;gap:8px}
.prob{display:flex;justify-content:space-between;align-items:center;gap:10px;text-align:left;border:1.5px solid var(--line-strong);background:var(--surface);border-radius:14px;padding:14px 16px;font-weight:600;font-size:16px;cursor:pointer;min-height:54px}
.prob[aria-pressed="true"]{border-color:var(--accent);background:#eef8f6;box-shadow:inset 3px 0 0 var(--accent)}
.prob svg{color:var(--accent-text)}
.answer{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius-lg);padding:26px}
.answer h3{font-size:28px}
.answer p{color:var(--muted);margin-top:8px}
.answer ul{list-style:none;margin:16px 0 0;padding:0;border-top:1px solid var(--line)}
.answer li{display:flex;justify-content:space-between;gap:12px;padding:12px 0;border-bottom:1px solid var(--line)}
.answer li b{white-space:nowrap}
.disclaim{display:flex;gap:10px;align-items:flex-start;margin-top:16px;font-size:14px;color:var(--muted)}
.disclaim svg{color:var(--accent-text);width:20px;height:20px}
`,
  hero: `<section class="hero" aria-labelledby="h1"><div class="wrap">
<div>
<span class="eyebrow">Подолог · м. Бульвар Рокоссовского</span>
<h1 id="h1">Здоровые стопы и&nbsp;ногти</h1>
<p class="lead">Вросший ноготь, изменённые ногти, натоптыши, индивидуальные стельки и ортозы. Начните с консультации подолога — 2 500 ₽.</p>
<div class="hero-cta"><a class="btn btn-primary" href="#zapis">${icon.cal}Записаться на консультацию</a><a class="btn btn-ghost" href="#pomoshch">С чем приходят</a></div>
<ul class="tick"><li>${icon.check}Коррекция вросшего ногтя: нить и скобы</li><li>${icon.check}Медицинский педикюр</li><li>${icon.check}★ 5,0 · 111 отзывов · Хорошее место 2026</li></ul>
</div>
${foot}
</div></section>`,
  sections: [
    `<section class="sec sec-alt" id="pomoshch" aria-labelledby="pom-h"><div class="wrap">
<div class="sec-head reveal"><span class="eyebrow">Подсказка</span><h2 id="pom-h">С чем вы пришли?</h2><p>Выберите ситуацию — покажем подходящие услуги и цены из прайса кабинета.</p></div>
<div class="helper reveal">
<div class="probs" role="group" aria-label="Ситуации">${HELP.map(([t], i) => `<button type="button" class="prob" data-i="${i}" aria-pressed="${i === 0}">${t}${icon.arrow}</button>`).join('')}</div>
<div class="answer" aria-live="polite"><h3 id="a-t"></h3><p id="a-d"></p><ul id="a-l"></ul>
<a class="btn btn-primary" style="margin-top:20px" href="#zapis">${icon.cal}Записаться</a>
<p class="disclaim">${icon.info}<span>Подсказка не заменяет осмотр. Точный план и стоимость подолог назовёт на консультации.</span></p></div>
</div>
</div></section>`,
    priceTabs({
      title: 'Прайс', lead: 'Цены из каталога кабинета. Где указано «от» — стоимость зависит от сложности.',
      cats: [
        { name: 'Подология', items: [
          { n: 'Консультация подолога', p: '2 500 ₽' },
          { n: 'Парамедицинский педикюр — комплекс', d: 'Обработка ногтей и кожи стоп с изменениями: 7 000 / 8 000 / 9 000 ₽', p: 'от 7 000 ₽' },
          { n: 'Пальцы парамедицинские', d: 'Обработка ногтевых пластин с видимыми изменениями: 5 000 / 5 500 / 6 500 ₽', p: 'от 5 000 ₽' },
          { n: 'Стопы парамедицинские', d: 'Обработка кожи стоп с видимыми изменениями: 5 000 / 5 500 / 6 500 ₽', p: 'от 5 000 ₽' },
          { n: 'Обработка сложного ногтя', p: 'от 2 000 ₽' },
          { n: 'Локальный гиперкератоз, малая зона', p: 'от 2 500 ₽' },
          { n: 'Локальный гиперкератоз, большая зона', p: 'от 3 000 ₽' },
          { n: 'Нестабильный участок стенки ногтя', d: '6 000 / 7 000 ₽', p: 'от 6 000 ₽' },
          { n: 'Забор материала на анализ', d: 'Для лаборатории', p: '800 ₽' },
          { n: 'Разгрузочная повязка', p: '500 ₽' },
        ] },
        { name: 'Ортониксия', items: [
          { n: 'Титановая нить', p: '9 000 ₽' }, { n: 'Скоба 3ТО «Омега»', p: '9 000 ₽' }, { n: 'Скоба «Унибрейс»', p: '9 000 ₽' },
        ] },
        { name: 'Ортопедия', items: [
          { n: 'Ортозы индивидуальные силиконовые', p: 'от 3 000 ₽' }, { n: 'Стельки анатомические', p: '7 000 ₽' }, { n: 'Коррекция стелек', p: '3 500 ₽' },
        ] },
        { name: 'Педикюр', items: [
          { n: 'Гигиенический педикюр', d: 'Ногти и кожа стоп без видимых патологий', p: '6 000 ₽' },
          { n: 'Аппаратная обработка стоп или ногтевых пластин', d: 'Без видимых патологий', p: '4 000 ₽' },
        ] },
      ],
      bookHref: '#zapis', bookLabel: 'Записаться',
      footNote: 'Цены — с сайта кабинета на Яндекс Бизнесе. Точную стоимость подолог назовёт после осмотра.',
    }),
    `<section class="sec sec-alt" id="zapis" aria-labelledby="zapis-h"><div class="wrap">
<div class="sec-head reveal"><span class="eyebrow">Запись</span><h2 id="zapis-h">Оставьте заявку — перезвоним</h2><p>Выберите, что беспокоит, и удобное время. Кабинет свяжется, чтобы подтвердить запись.</p></div>
<form class="card form reveal" data-demo novalidate>
<div class="row2"><div class="field"><label for="z-what">Что беспокоит</label><select class="input" id="z-what" name="what">${HELP.map(([t]) => `<option>${t}</option>`).join('')}<option>Нужна консультация</option></select></div>
<div class="field"><label for="z-when">Когда удобно</label><select class="input" id="z-when" name="when"><option>Как можно скорее</option><option>Утром</option><option>Днём</option><option>Вечером</option><option>В выходные</option></select></div></div>
<div class="row2"><div class="field"><label for="z-name">Имя</label><input class="input" id="z-name" name="name" autocomplete="name"></div>
<div class="field"><label for="z-tel">Телефон</label><input class="input" id="z-tel" name="tel" type="tel" inputmode="tel" autocomplete="tel" placeholder="+7"></div></div>
<button class="btn btn-primary btn-block" type="submit">Отправить заявку</button>
<p class="consent">Нажимая кнопку, вы соглашаетесь с <a href="#" data-policy>политикой обработки персональных данных</a>.</p>
${demoMsg('Это демо: заявка не отправлена. На рабочем сайте она придёт в кабинет, а время подтвердят по телефону.')}
</form>
</div></section>`,
    gallery({ title: 'Кабинет', lead: 'Кабинет и оборудование — реальные фото вместо стоковых.', label: 'Здесь будут ваши фото кабинета' }),
    ratingBlock({ rating: 5, count: 111, orgUrl: 'https://yandex.ru/maps/org/26767511407/', award: true, alt: true }),
    visitBlock({ address: 'Москва, Ивантеевская ул., 28к1', metro: 'м. Бульвар Рокоссовского — 190 м', orgId: '26767511407', seed: 43 }),
    contactsBlock({ alt: true, title: 'Задать вопрос подологу', items: [
      { icon: 'phone', label: 'Телефон', value: '+7 (991) 714-23-03', href: 'tel:+79917142303' },
      { icon: 'wa', label: 'WhatsApp', value: 'Написать в WhatsApp', href: WA },
      { icon: 'tg', label: 'Telegram', value: '@Podolog_Proskurnova', href: TG },
      { icon: 'vk', label: 'ВКонтакте', value: 'Страница кабинета', href: 'https://vk.com/id596260934' },
    ] }),
  ],
  js: `
(function(){
  var H=${JSON.stringify(HELP)};
  function show(i){var h=H[i];document.getElementById('a-t').textContent=h[0];document.getElementById('a-d').textContent=h[1];document.getElementById('a-l').innerHTML=h[2].map(function(r){return '<li><span>'+r[0]+'</span><b>'+r[1]+'</b></li>'}).join('');var s=document.getElementById('z-what');if(s)s.selectedIndex=i;}
  document.querySelectorAll('.prob').forEach(function(b){b.addEventListener('click',function(){document.querySelectorAll('.prob').forEach(function(x){x.setAttribute('aria-pressed','false')});b.setAttribute('aria-pressed','true');show(+b.getAttribute('data-i'));});});
  show(0);
})();`,
};
