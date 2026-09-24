import { icon, page, ratingBlock, visitBlock, contactsBlock, gallery, demoMsg } from '../kit.mjs';

const BONUS = 'https://card.evobonus.ru/form/d1929d7a-c925-4e50-933b-c93bc54182df';
// Drinks that guests mention in reviews on the coffee shop page; prices are not published,
// except the cappuccino range from Yandex Maps. The owner fills in the real menu.
const DRINKS = [['Капучино', '300–500 ₽'], ['Раф', ''], ['Флэт уайт', ''], ['Лунго', ''], ['Матча', '']];

const cup = `<svg class="cup" viewBox="0 0 320 300" aria-hidden="true">
<g fill="none" stroke="#2b1d14" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
<path d="M70 120h150l-14 120a24 24 0 0 1-24 21h-74a24 24 0 0 1-24-21Z" fill="#fffbf3"/>
<path d="M220 140h14a26 26 0 0 1 0 52h-20"/>
<path d="M60 262h180"/>
<path class="steam s1" d="M115 100c-12-16 12-24 0-44"/><path class="steam s2" d="M147 96c-12-16 12-24 0-44"/><path class="steam s3" d="M179 100c-12-16 12-24 0-44"/>
</g>
<path d="M86 150h118l-8 70H94Z" fill="#b4532a" opacity=".16"/>
<text x="112" y="200" font-family="Caveat,cursive" font-size="34" fill="#b4532a">кофе</text>
</svg>`;

export default {
  slug: 'shkolnik-q1tq',
  name: 'Школьник',
  conceptName: 'кофейни «Школьник»',
  title: 'Школьник — кофейня на Земляном Валу · концепт сайта',
  description: 'Концепт сайта кофейни «Школьник»: меню и предзаказ к выходу.',
  themeColor: '#f7f0e4',
  favicon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#b4532a"/><path d="M16 24h28l-3 22a5 5 0 0 1-5 4H24a5 5 0 0 1-5-4Z" fill="#fffbf3"/><path d="M44 28h4a6 6 0 0 1 0 12h-5" stroke="#fffbf3" stroke-width="4" fill="none"/></svg>',
  fonts: 'https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=Rubik:wght@400;500;600;700&display=swap',
  phone: '+7 (985) 984-09-25',
  book: { href: '#predzakaz', label: 'Предзаказ к выходу', barLabel: 'Предзаказ' },
  barIcon: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 9h11l-1 9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Z"/><path d="M16 11h1.5a2.5 2.5 0 0 1 0 5H15.6M8 3.5c-.8 1 .8 2 0 3M11 3.5c-.8 1 .8 2 0 3"/></svg>',
  nav: [['#menu', 'Меню'], ['#predzakaz', 'Предзаказ'], ['#otzyvy', 'Отзывы'], ['#kak-dobratsya', 'Как найти']],
  logo: '<span class="hand">Школьник</span>',
  footLine: 'Кофейня · кондитерская · магазин кофе · ул. Земляной Вал, 12/7с1',
  footSources: 'сайт кофейни на Яндекс Бизнесе и карточка на Яндекс Картах',
  policyOwner: 'кофейни «Школьник»',
  css: `
:root{--bg:#f7f0e4;--surface:#fffbf3;--surface-2:#efe3cf;--text:#2b1d14;--muted:#6b5646;--line:#e4d5bd;--line-strong:#d6c2a2;--accent:#b4532a;--accent-ink:#fff;--accent-text:#9f4722;
--font-display:Rubik,system-ui,sans-serif;--font-body:Rubik,system-ui,sans-serif;--display-weight:600;--display-tracking:-.02em;--radius:14px;--radius-lg:22px;--btn-radius:14px;--star:#e3a23b;--map-bg:#efe6d6;
--ph-pattern:linear-gradient(rgba(94,132,190,.12) 1px,transparent 1px) 0 0/100% 22px}
.hand{font-family:Caveat,cursive;font-weight:700}
.logo .hand{font-size:34px;letter-spacing:0}
.paper{background-color:var(--bg);background-image:linear-gradient(rgba(94,132,190,.13) 1px,transparent 1px),linear-gradient(90deg,rgba(94,132,190,.13) 1px,transparent 1px);background-size:24px 24px}
.hero{position:relative;padding:clamp(34px,6vw,84px) 0 clamp(52px,8vw,100px)}
.hero::before{content:"";position:absolute;top:0;bottom:0;left:clamp(12px,4vw,56px);width:2px;background:rgba(214,70,70,.35)}
.hero .wrap{position:relative;display:grid;gap:26px;align-items:center}
@media (min-width:920px){.hero .wrap{grid-template-columns:1.15fr .85fr}}
.hero h1{font-size:clamp(44px,8vw,92px);line-height:.98}
.hero h1 .hand{display:block;color:var(--accent-text);font-size:1.08em;font-weight:700;line-height:.9;transform:rotate(-2deg);transform-origin:left}
.hero .lead{margin-top:20px;max-width:36ch}
.hero-cta{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}
.note-hand{font-family:Caveat,cursive;font-size:26px;color:var(--accent-text);display:inline-flex;gap:8px;align-items:center;margin-top:22px;transform:rotate(-1.5deg)}
.stickers{display:flex;flex-wrap:wrap;gap:10px;margin-top:22px}
.sticker{display:inline-flex;align-items:center;gap:8px;background:var(--surface);border:1.5px solid var(--text);border-radius:12px;padding:8px 12px;font-weight:600;font-size:14px;box-shadow:3px 3px 0 var(--text);text-decoration:none}
.sticker svg{width:18px;height:18px}
.sticker .st{fill:#e3a23b;stroke:none}
.cup{width:min(100%,380px);justify-self:center}
.steam{animation:steam 3.2s ease-in-out infinite;opacity:.7}
.s2{animation-delay:.6s}.s3{animation-delay:1.2s}
@keyframes steam{0%,100%{transform:translateY(4px);opacity:.25}50%{transform:translateY(-6px);opacity:.8}}
.feat{display:grid;gap:10px;grid-template-columns:repeat(2,1fr);margin-top:30px}
@media (min-width:760px){.feat{grid-template-columns:repeat(4,1fr)}}
.feat div{background:var(--surface);border:1.5px dashed var(--line-strong);border-radius:14px;padding:14px;display:flex;gap:10px;align-items:center;font-weight:600;font-size:15px}
.feat svg{width:22px;height:22px;color:var(--accent-text)}
.menu{display:grid;gap:14px;grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr))}
.mcard{background:var(--surface);border:1.5px solid var(--text);border-radius:var(--radius-lg);padding:22px;box-shadow:5px 5px 0 var(--text);display:grid;gap:10px;align-content:start}
.mcard h3{font-size:24px}
.mcard .hand{font-size:24px;color:var(--accent-text)}
.mcard ul{list-style:none;margin:0;padding:0;display:grid;gap:8px}
.mcard li{display:flex;justify-content:space-between;gap:10px;border-bottom:1px dashed var(--line-strong);padding-bottom:6px;font-size:15.5px}
.mcard li span:last-child{color:var(--muted);white-space:nowrap}
.mcard .ph-line{color:var(--muted);font-size:14px}
.pre{display:grid;gap:22px}
@media (min-width:920px){.pre{grid-template-columns:1fr 1fr;align-items:start}}
.ticket{position:relative;background:var(--surface);border:1.5px solid var(--text);border-radius:18px;padding:26px 24px;box-shadow:6px 6px 0 var(--text)}
.ticket h3{font-family:Caveat,cursive;font-size:38px;font-weight:700;color:var(--accent-text)}
.drink{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:12px 0;border-bottom:1px dashed var(--line-strong)}
.drink strong{display:block}
.drink small{color:var(--muted)}
.qty{display:flex;align-items:center;gap:8px}
.qty button{width:40px;height:40px;border-radius:12px;border:1.5px solid var(--text);background:var(--surface);font-size:20px;font-weight:600;cursor:pointer;line-height:1}
.qty output{min-width:22px;text-align:center;font-weight:700}
.bonus{display:grid;gap:14px;align-items:center;background:var(--accent);color:#fff;border-radius:var(--radius-lg);padding:clamp(22px,4vw,40px)}
@media (min-width:760px){.bonus{grid-template-columns:1fr auto}}
.bonus h3{font-size:clamp(24px,3vw,34px)}
.bonus p{color:#fde6da;margin-top:6px}
.bonus .btn{background:#fffbf3;color:var(--text)}
`,
  bodyClass: 'paper',
  hero: `<section class="hero" aria-labelledby="h1"><div class="wrap">
<div>
<span class="eyebrow">Кофейня · кондитерская · магазин кофе</span>
<h1 id="h1">Кофе на Земляном Валу <span class="hand">по пути к Курской</span></h1>
<p class="lead">Закажите кофе заранее — заберёте по пути. Или оставайтесь с ноутбуком: есть Wi-Fi.</p>
<div class="hero-cta"><a class="btn btn-primary" href="#predzakaz">${icon.arrow}Предзаказ к выходу</a><a class="btn btn-ghost" href="#menu">Меню</a></div>
<div class="stickers">
<a class="sticker" href="#otzyvy"><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path class="st" d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9Z"/></svg>4,7 · 493 отзыва</a>
<span class="sticker">Хорошее место 2026 · Яндекс Карты</span>
</div>
<p class="note-hand">↳ от метро Курская — 480 м</p>
</div>
${cup}
</div></section>`,
  sections: [
    `<section class="sec" id="menu" aria-labelledby="menu-h" style="background:var(--surface-2)"><div class="wrap">
<div class="sec-head reveal"><span class="eyebrow">Меню</span><h2 id="menu-h">Что у нас есть</h2><p>Здесь будет ваше меню с ценами. Пока показываем то, что известно из открытых данных.</p></div>
<div class="menu">
<div class="mcard reveal"><span class="hand">урок 1</span><h3>Кофе</h3><ul>${DRINKS.map(([n, p]) => `<li><span>${n}</span><span>${p || '—'}</span></li>`).join('')}</ul><p class="ph-line">Цена капучино — по данным Яндекс Карт. Остальные цены добавим из вашего меню.</p></div>
<div class="mcard reveal"><span class="hand">урок 2</span><h3>Кондитерская</h3><p class="ph-line">Десерты и выпечка — с фото и ценами из вашей витрины.</p><ul><li><span>Здесь будут десерты</span><span>—</span></li></ul></div>
<div class="mcard reveal"><span class="hand">урок 3</span><h3>Зерно домой</h3><p class="ph-line">«Школьник» — ещё и магазин кофе. Здесь будет список сортов и помол.</p><ul><li><span>Здесь будет ассортимент</span><span>—</span></li></ul></div>
<div class="mcard reveal"><span class="hand">перемена</span><h3>Чай и еда навынос</h3><p class="ph-line">Чай, еда с собой, оплата картой. Позиции — из вашего меню.</p><ul><li><span>Здесь будут позиции</span><span>—</span></li></ul></div>
</div>
<div class="feat">
<div>${icon.arrow}Кофе с собой</div><div><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 10a10 10 0 0 1 14 0M8 13.5a6 6 0 0 1 8 0M11 17h2"/></svg>Wi-Fi</div><div><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18"/></svg>Оплата картой</div><div><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 8h12l-1 11H7Z"/><path d="M9 8a3 3 0 0 1 6 0"/></svg>Еда навынос</div>
</div>
</div></section>`,
    `<section class="sec" id="predzakaz" aria-labelledby="pre-h"><div class="wrap">
<div class="sec-head reveal"><span class="eyebrow">Предзаказ</span><h2 id="pre-h">Кофе будет готов к вашему приходу</h2><p>Выберите напитки и время — бариста начнёт готовить заранее. Без очереди.</p></div>
<form class="pre" data-demo novalidate>
<div class="ticket reveal"><h3>Мой заказ</h3>
<div id="drinks">${DRINKS.map(([n, p], i) => `<div class="drink"><div><strong>${n}</strong>${p ? `<small>${p}</small>` : '<small>цена из вашего меню</small>'}</div><div class="qty"><button type="button" data-d="-1" data-i="${i}" aria-label="Убрать ${n}">−</button><output id="q${i}" aria-live="polite">0</output><button type="button" data-d="1" data-i="${i}" aria-label="Добавить ${n}">+</button></div></div>`).join('')}</div>
<p class="note" id="sum" style="margin-top:14px">Пока ничего не выбрано</p>
</div>
<div class="card form reveal">
<div class="field"><span class="lbl" id="when-l">Буду через</span><div class="chips" role="radiogroup" aria-labelledby="when-l">${['10 минут', '15 минут', '20 минут', '30 минут'].map((t, i) => `<button type="button" class="chip" role="radio" aria-checked="${i === 1}">${t}</button>`).join('')}</div></div>
<div class="field"><label for="p-name">Имя для стакана</label><input class="input" id="p-name" name="name" autocomplete="given-name" placeholder="Например, Аня"></div>
<div class="field"><label for="p-tel">Телефон</label><input class="input" id="p-tel" name="tel" type="tel" inputmode="tel" autocomplete="tel" placeholder="+7"></div>
<div class="field"><label for="p-note">Пожелания</label><input class="input" id="p-note" name="note" placeholder="Молоко, сироп, без сахара"></div>
<button class="btn btn-primary btn-block" type="submit">Отправить предзаказ</button>
<p class="consent">Оплата — на месте. Нажимая кнопку, вы соглашаетесь с <a href="#" data-policy>политикой обработки персональных данных</a>.</p>
${demoMsg('Это демо: заказ не отправлен. На рабочем сайте он сразу придёт бариста.')}
</div>
</form>
<div class="bonus reveal" style="margin-top:26px"><div><h3>Бонусная карта «Школьника»</h3><p>Анкета программы лояльности — скидки и бонусы для постоянных гостей.</p></div><a class="btn" href="${BONUS}" target="_blank" rel="noopener">Оформить карту${icon.arrow}</a></div>
</div></section>`,
    gallery({ title: 'Зал, бар, витрина', lead: 'Зал, бар и витрина кондитерской: реальные фото вместо стоковых.', label: 'Здесь будут ваши фото зала и напитков' }),
    ratingBlock({ rating: 4.7, count: 493, orgUrl: 'https://yandex.ru/maps/org/31552180825/', lead: 'Гости оставили почти пятьсот отзывов. Все — в карточке кофейни на Яндекс Картах.', alt: true, award: true }),
    visitBlock({ address: 'Москва, ул. Земляной Вал, 12/7с1', metro: 'м. Курская — 480 м', hours: [['Пн–Пт', '8:30–22:00'], ['Сб–Вс', '9:30–22:00']], orgId: '31552180825', seed: 2 }),
    contactsBlock({ alt: true, title: 'Позвонить или написать', items: [
      { icon: 'phone', label: 'Телефон', value: '+7 (985) 984-09-25', href: 'tel:+79859840925' },
      { icon: 'mail', label: 'Почта', value: 'shkolnikcoffee@gmail.com', href: 'mailto:shkolnikcoffee@gmail.com' },
    ] }),
  ],
  js: `
(function(){
  var names=${JSON.stringify(DRINKS.map((d) => d[0]))},q=names.map(function(){return 0});
  var sum=document.getElementById('sum');
  document.getElementById('drinks').addEventListener('click',function(e){
    var b=e.target.closest('button[data-d]');if(!b)return;var i=+b.getAttribute('data-i');q[i]=Math.max(0,Math.min(9,q[i]+ +b.getAttribute('data-d')));
    document.getElementById('q'+i).textContent=q[i];
    var parts=names.map(function(n,i){return q[i]?n+' × '+q[i]:''}).filter(Boolean);
    sum.textContent=parts.length?'В заказе: '+parts.join(', '):'Пока ничего не выбрано';
  });
  document.querySelectorAll('[role="radiogroup"] .chip').forEach(function(c,_,all){c.addEventListener('click',function(){c.parentNode.querySelectorAll('.chip').forEach(function(x){x.setAttribute('aria-checked','false')});c.setAttribute('aria-checked','true');});});
})();`,
};
