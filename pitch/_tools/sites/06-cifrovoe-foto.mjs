import { icon, page, priceTabs, ratingBlock, visitBlock, contactsBlock, demoMsg } from '../kit.mjs';

const TG = 'https://t.me/+79296566488';

// Calculator catalogue: only prices published by the salon. "from" = the salon says the price starts at.
const CALC = {
  docs: { name: 'Фото на документы', unit: 'комплект', items: [['Стандартный комплект с ретушью', 790, false]], note: 'Цена — за стандартный комплект с файла салона, без замены одежды. Замена одежды — по запросу.' },
  print: { name: 'Печать и копии А4', unit: 'стр.', items: [['Печать документов А4', 20, true], ['Ксерокопия А4', 25, true]], note: 'Цена за страницу зависит от количества, заливки и цвета — итог «от».' },
  souvenir: { name: 'Фото на сувенирах', unit: 'шт.', items: [['Кружка (белая)', 900, false], ['Футболка (белая, печать А4 с одной стороны)', 1900, false], ['Подушка с наволочкой (с одной стороны)', 1850, false], ['Брелок', 650, false]], note: 'Изделия — салона. Футболку можно печатать с двух сторон, до А3 — по запросу.' },
  ceramic: { name: 'Фото на керамике', unit: 'шт.', items: [['Керамика 9×12', 2700, false], ['Керамика 13×18', 3600, false]], note: 'Обработка фотографии считается отдельно. Срок изготовления — 2 недели.' },
  photo: { name: 'Фотопечать', unit: 'шт.', items: [['10×15', null], ['15×20', null], ['21×30', null], ['30×40', null]], note: 'Форматов и цен фотопечати на странице салона нет — здесь будут ваши. Калькулятор посчитает сам.' },
};

const frames = `<svg class="stack" viewBox="0 0 420 380" aria-hidden="true">
<defs><linearGradient id="p1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#bcd3ff"/><stop offset="1" stop-color="#6d8fe8"/></linearGradient>
<linearGradient id="p2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffe7a3"/><stop offset="1" stop-color="#f5b83d"/></linearGradient>
<linearGradient id="p3" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#cfe9dc"/><stop offset="1" stop-color="#7cc3a0"/></linearGradient></defs>
<g transform="rotate(-8 140 200)"><rect x="40" y="90" width="190" height="230" rx="6" fill="#fff" stroke="#e3e7ef"/><rect x="54" y="104" width="162" height="170" fill="url(#p2)"/><path d="M54 274l50-60 36 34 30-24 46 50Z" fill="#fff" opacity=".45"/></g>
<g transform="rotate(6 280 190)"><rect x="190" y="70" width="190" height="230" rx="6" fill="#fff" stroke="#e3e7ef"/><rect x="204" y="84" width="162" height="170" fill="url(#p1)"/><circle cx="330" cy="120" r="16" fill="#fff" opacity=".6"/><path d="M204 254l54-64 40 40 26-20 42 44Z" fill="#fff" opacity=".45"/></g>
<g transform="translate(120 170)"><rect width="180" height="196" rx="8" fill="#fff" stroke="#d9dee8"/>
${[0, 1].map((r) => [0, 1].map((c) => `<g transform="translate(${16 + c * 78} ${14 + r * 92})"><rect width="70" height="84" rx="3" fill="url(#p3)"/><circle cx="35" cy="34" r="14" fill="#fff" opacity=".8"/><path d="M12 84c2-18 12-26 23-26s21 8 23 26Z" fill="#fff" opacity=".8"/></g>`).join('')).join('')}
</g>
</svg>`;

export default {
  slug: 'cifrovoe-foto-dryq',
  name: 'Цифровое фото',
  conceptName: 'фотосалона «Цифровое фото»',
  title: 'Цифровое фото — фотосалон и багет у м. Академическая · концепт сайта',
  description: 'Концепт сайта фотосалона «Цифровое фото»: калькулятор заказа, фото на документы, печать и багет.',
  themeColor: '#f7f8fa',
  favicon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#1d4ed8"/><rect x="14" y="20" width="36" height="26" rx="5" fill="none" stroke="#fff" stroke-width="4"/><circle cx="32" cy="33" r="7" fill="#facc15"/></svg>',
  fonts: 'https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700;800&display=swap',
  phone: '+7 (499) 129-64-88',
  book: { href: '#kalkulyator', label: 'Рассчитать заказ', barLabel: 'Рассчитать' },
  barIcon: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h2M12 11h2M16 11h0M8 15h2M12 15h2M8 18h8"/></svg>',
  nav: [['#kalkulyator', 'Калькулятор'], ['#uslugi', 'Цены'], ['#otzyvy', 'Отзывы'], ['#kak-dobratsya', 'Адрес']],
  logo: '<span class="lens" aria-hidden="true"></span>Цифровое фото',
  footLine: 'Фотоуслуги, багетная мастерская, полиграфия · Профсоюзная ул., 5/9',
  footSources: 'сайт салона на Яндекс Бизнесе и карточка на Яндекс Картах',
  policyOwner: 'салона «Цифровое фото»',
  css: `
:root{--bg:#f7f8fa;--surface:#fff;--surface-2:#eef1f6;--text:#111827;--muted:#4b5563;--line:#e2e6ee;--line-strong:#cfd6e2;--accent:#1d4ed8;--accent-ink:#fff;--accent-text:#1d4ed8;--yellow:#facc15;
--font-display:"Golos Text",system-ui,sans-serif;--font-body:"Golos Text",system-ui,sans-serif;--display-weight:800;--display-tracking:-.035em;--radius:16px;--radius-lg:24px;--btn-radius:12px;--star:#f5b83d;--map-bg:#eef2f8;
--ph-pattern:linear-gradient(135deg,rgba(29,78,216,.06) 25%,transparent 25%) 0 0/16px 16px}
.logo{font-size:20px;font-weight:800}
.lens{width:22px;height:22px;border-radius:7px;background:var(--accent);position:relative}
.lens::after{content:"";position:absolute;inset:6px;border-radius:50%;background:var(--yellow)}
.hero{padding:clamp(34px,6vw,80px) 0 clamp(48px,7vw,90px)}
.hero .wrap{display:grid;gap:26px;align-items:center}
@media (min-width:920px){.hero .wrap{grid-template-columns:1.1fr .9fr}}
.hero h1{font-size:clamp(38px,6.6vw,76px);line-height:1.02}
.hero h1 mark{background:linear-gradient(transparent 58%,var(--yellow) 58%);color:inherit;padding:0 .05em}
.hero .lead{margin-top:18px;max-width:42ch}
.hero-cta{display:flex;flex-wrap:wrap;gap:12px;margin-top:26px}
.quick{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:26px}
@media (min-width:640px){.quick{grid-template-columns:repeat(4,minmax(0,1fr))}}
.quick a{display:grid;gap:4px;background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:12px 14px;text-decoration:none;transition:border-color .2s}
.quick a:hover{border-color:var(--accent)}
.quick strong{font-size:15px}
.quick span{font-size:13px;color:var(--muted)}
.stack{width:min(100%,440px);justify-self:center}
.calc{display:grid;gap:18px}
@media (min-width:960px){.calc{grid-template-columns:1.25fr .75fr;align-items:start}}
.kinds{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
@media (min-width:640px){.kinds{grid-template-columns:repeat(3,minmax(0,1fr))}}
.kind{display:grid;gap:4px;text-align:left;border:1.5px solid var(--line-strong);background:var(--surface);border-radius:14px;padding:12px 14px;cursor:pointer;font-weight:700;font-size:15px;min-height:56px}
.kind small{font-weight:500;color:var(--muted);font-size:12.5px}
.kind[aria-pressed="true"]{border-color:var(--accent);box-shadow:inset 0 0 0 1px var(--accent);background:#f3f6ff}
.opts{display:grid;gap:8px}
.opt{display:flex;align-items:center;justify-content:space-between;gap:10px;border:1.5px solid var(--line);border-radius:12px;padding:12px 14px;cursor:pointer;background:var(--surface)}
.opt:has(input:checked){border-color:var(--accent);background:#f3f6ff}
.opt:has(input:focus-visible){outline:3px solid var(--accent);outline-offset:2px}
.opt input{accent-color:var(--accent);width:18px;height:18px}
.opt span{flex:1}
.opt b{white-space:nowrap}
.stepper{display:inline-flex;align-items:center;border:1.5px solid var(--line-strong);border-radius:12px;overflow:hidden;background:var(--surface)}
.stepper button{width:48px;height:48px;border:0;background:transparent;font-size:22px;cursor:pointer}
.stepper input{width:70px;height:48px;border:0;text-align:center;font-weight:700;font-size:18px;background:transparent;-moz-appearance:textfield}
.stepper input::-webkit-outer-spin-button,.stepper input::-webkit-inner-spin-button{-webkit-appearance:none}
.total{position:sticky;top:84px;background:#111827;color:#fff;border-radius:var(--radius-lg);padding:26px;display:grid;gap:12px}
.total .sum{font-size:clamp(40px,6vw,56px);font-weight:800;letter-spacing:-.03em;line-height:1}
.total p{color:#cbd5e1;font-size:14.5px}
.total .btn{background:var(--yellow);color:#111827}
.file{border:1.5px dashed #475569;border-radius:12px;padding:12px;font-size:14px;color:#cbd5e1}
.file input{width:100%;color:#cbd5e1}
`,
  hero: `<section class="hero" aria-labelledby="h1"><div class="wrap">
<div>
<span class="eyebrow">Фотосалон · багетная мастерская · полиграфия</span>
<h1 id="h1">Фото на документы <mark>за 790 ₽</mark> у метро Академическая</h1>
<p class="lead">Печать и копии, ретушь и реставрация, фото на кружках и футболках, рамки и багет. Больше 15 лет работы.</p>
<div class="hero-cta"><a class="btn btn-primary" href="#kalkulyator">Рассчитать заказ${icon.arrow}</a><a class="btn btn-ghost" href="${TG}" target="_blank" rel="noopener">${icon.tg}Прислать файлы</a></div>
<div class="quick">
<a href="#kalkulyator" data-kind="docs"><strong>Документы</strong><span>от 790 ₽</span></a>
<a href="#kalkulyator" data-kind="print"><strong>Печать А4</strong><span>от 20 ₽/стр.</span></a>
<a href="#kalkulyator" data-kind="souvenir"><strong>Сувениры</strong><span>от 650 ₽</span></a>
<a href="#otzyvy"><strong>★ 4,8</strong><span>68 отзывов</span></a>
</div>
</div>
${frames}
</div></section>`,
  sections: [
    `<section class="sec sec-alt" id="kalkulyator" aria-labelledby="calc-h"><div class="wrap">
<div class="sec-head reveal"><span class="eyebrow">Калькулятор</span><h2 id="calc-h">Сколько будет стоить</h2><p>Выберите услугу, вариант и количество — сумма посчитается сразу. Цены — из каталога салона.</p></div>
<form class="calc" data-demo novalidate>
<div class="card form reveal">
<div class="field"><span class="lbl" id="k-l">Что нужно</span><div class="kinds" role="group" aria-labelledby="k-l">${Object.entries(CALC).map(([k, v], i) => `<button type="button" class="kind" data-k="${k}" aria-pressed="${i === 0}">${v.name}<small>${v.items.some((x) => x[1]) ? 'от ' + Math.min(...v.items.filter((x) => x[1]).map((x) => x[1])).toLocaleString('ru-RU').replace(/ /g, ' ') + ' ₽' : 'цена по запросу'}</small></button>`).join('')}</div></div>
<div class="field"><span class="lbl" id="o-l">Вариант</span><div class="opts" id="opts" role="radiogroup" aria-labelledby="o-l"></div></div>
<div class="field"><label for="qty">Количество, <span id="unit">шт.</span></label><div class="stepper"><button type="button" id="minus" aria-label="Меньше">−</button><input id="qty" name="qty" type="number" inputmode="numeric" min="1" max="999" value="1"><button type="button" id="plus" aria-label="Больше">+</button></div></div>
<p class="note" id="cnote"></p>
</div>
<aside class="total reveal" aria-live="polite">
<p style="color:#94a3b8;font-size:13px;letter-spacing:.08em;text-transform:uppercase">Итого</p>
<div class="sum" id="sum">790 ₽</div>
<p id="sumnote">Точную сумму подтвердит мастер.</p>
<label class="file">Файлы для печати (необязательно)<input type="file" multiple name="files"></label>
<button class="btn btn-block" type="submit">Отправить заказ</button>
${demoMsg('Это демо: заказ не отправлен. На рабочем сайте файлы и расчёт придут в салон.')}
</aside>
</form>
</div></section>`,
    priceTabs({
      title: 'Всё, что делаем', lead: 'Цены с сайта салона. «По запросу» — где стоимость зависит от объёма работы.',
      cats: [
        { name: 'Фото и печать', items: [
          { n: 'Фото на документы', d: 'С ретушью, любого формата; при необходимости — с заменой одежды', p: '790 ₽', ps: 'комплект' },
          { n: 'Печать документов А4', d: 'Чёрно-белая и цветная', p: 'от 20 ₽', ps: 'страница' },
          { n: 'Ксерокопия А4', d: 'Чёрно-белая и цветная', p: 'от 25 ₽', ps: 'страница' },
          { n: 'Оцветнение и реставрация фото', d: 'Цена зависит от объёма работы', p: 'по запросу' },
          { n: 'Фотоколлаж', d: 'Цена зависит от объёма работы', p: 'по запросу' },
        ] },
        { name: 'Сувениры', items: [
          { n: 'Фото на кружке', d: 'Белая кружка', p: '900 ₽' },
          { n: 'Фото на футболке', d: 'Белая, печать А4 с одной стороны; можно с двух сторон, до А3', p: '1 900 ₽' },
          { n: 'Фото на подушке', d: 'Комплект с наволочкой, изображение с одной стороны', p: '1 850 ₽' },
          { n: 'Перенос фото на брелок', p: '650 ₽' },
          { n: 'Фото на керамике 9×12', d: 'Срок изготовления — 2 недели, обработка фото отдельно', p: '2 700 ₽' },
          { n: 'Фото на керамике 13×18', p: '3 600 ₽' },
        ] },
        { name: 'Рамки и багет', items: [
          { n: 'Фоторамки стандартных размеров', d: '10×15, 15×20, 21×30, 30×40 в наличии; другие — на заказ', p: 'от 290 ₽' },
          { n: 'Фоторамка 10×15 с ножкой', d: 'Пластиковый багет, стекло, картонный задник', p: '1 500 ₽' },
          { n: 'Фоторамка 10×15, «жёлтое золото» с патиной', p: '1 720 ₽' },
          { n: 'Фоторамка 30×30 с паспарту', d: 'Под 4 фотографии 10×15', p: '3 300 ₽' },
          { n: 'Оформление в багет', d: 'Собственная багетная мастерская', p: 'по запросу' },
        ] },
        { name: 'Картины и таблички', items: [
          { n: 'Картина «Маки»', d: 'Акварель, тройное паспарту, деревянная рама', p: '9 500 ₽' },
          { n: 'Картина «Розы»', d: 'Холст, масло, 40×50, рама из собственной мастерской', p: '29 000 ₽' },
          { n: 'Картина «Горы»', d: 'Холст, масло, 40×50, деревянная рама', p: '35 000 ₽' },
          { n: 'Оформление керамики', d: 'Керамическая рыба ручной работы в глубокой багетной раме, 30×37', p: '15 500 ₽' },
          { n: 'Домовые таблички', d: 'Пластик и металл; цена зависит от материала, размера и формы', p: 'по запросу' },
        ] },
      ],
      footNote: 'Цены — с сайта салона на Яндекс Бизнесе. Срочная печать и печать через интернет — тоже здесь.',
    }),
    ratingBlock({ rating: 4.8, count: 68, orgUrl: 'https://yandex.ru/maps/org/1067899494/', alt: true, lead: 'Отзывы о фото на документы, печати и сервисе — в карточке на Яндекс Картах.' }),
    visitBlock({ address: 'Москва, Профсоюзная ул., 5/9', metro: 'м. Академическая — 210 м', hours: [['Пн–Пт', '9:30–20:00'], ['Сб–Вс', '10:00–19:00']], orgId: '1067899494', seed: 13 }),
    contactsBlock({ alt: true, title: 'Пришлите файлы — всё подготовим', items: [
      { icon: 'phone', label: 'Телефон', value: '+7 (499) 129-64-88', href: 'tel:+74991296488' },
      { icon: 'tg', label: 'Telegram', value: 'Прислать файлы', href: TG },
      { icon: 'mail', label: 'Почта', value: 'emih.foto@yandex.ru', href: 'mailto:emih.foto@yandex.ru' },
      { icon: 'vk', label: 'ВКонтакте', value: 'vk.ru/akadem.photo', href: 'https://vk.ru/akadem.photo' },
    ] }),
  ],
  js: `
(function(){
  var C=${JSON.stringify(CALC)},cur='docs';
  var opts=document.getElementById('opts'),qty=document.getElementById('qty'),sum=document.getElementById('sum'),note=document.getElementById('cnote'),unit=document.getElementById('unit'),sn=document.getElementById('sumnote');
  function fmt(n){return n.toLocaleString('ru-RU').replace(/\\u00a0/g,' ')+' ₽';}
  function draw(){
    var c=C[cur];opts.innerHTML='';
    c.items.forEach(function(it,i){var l=document.createElement('label');l.className='opt';l.innerHTML='<input type="radio" name="opt" value="'+i+'"'+(i===0?' checked':'')+'><span>'+it[0]+'</span><b>'+(it[1]?(it[2]?'от ':'')+fmt(it[1]):'по запросу')+'</b>';opts.appendChild(l);});
    unit.textContent=c.unit;note.textContent=c.note;calc();
  }
  function calc(){
    var c=C[cur],sel=opts.querySelector('input:checked'),it=c.items[sel?+sel.value:0],n=Math.max(1,Math.min(999,parseInt(qty.value,10)||1));
    if(!it[1]){sum.textContent='по запросу';sn.textContent='Здесь будут ваши цены — и калькулятор посчитает сумму.';return;}
    sum.textContent=(it[2]?'от ':'')+fmt(it[1]*n);sn.textContent=it[2]?'Итог зависит от заливки и цвета. Точную сумму подтвердит мастер.':'Точную сумму подтвердит мастер.';
  }
  document.querySelectorAll('.kind').forEach(function(b){b.addEventListener('click',function(){document.querySelectorAll('.kind').forEach(function(x){x.setAttribute('aria-pressed','false')});b.setAttribute('aria-pressed','true');cur=b.getAttribute('data-k');draw();});});
  document.querySelectorAll('.quick a[data-kind]').forEach(function(a){a.addEventListener('click',function(){var b=document.querySelector('.kind[data-k="'+a.getAttribute('data-kind')+'"]');if(b)b.click();});});
  opts.addEventListener('change',calc);qty.addEventListener('input',calc);
  document.getElementById('minus').addEventListener('click',function(){qty.value=Math.max(1,(parseInt(qty.value,10)||1)-1);calc();});
  document.getElementById('plus').addEventListener('click',function(){qty.value=Math.min(999,(parseInt(qty.value,10)||1)+1);calc();});
  draw();
})();`,
};
