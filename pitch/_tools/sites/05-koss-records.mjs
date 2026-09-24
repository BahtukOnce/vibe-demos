import { icon, page, ratingBlock, visitBlock, contactsBlock, gallery, bookingWidget } from '../kit.mjs';

const TG = 'https://t.me/+79654188866';
const WA = 'https://wa.me/79654188866';
const GEAR = [
  ['Предусилители и обработка', ['Avalon 737 SP', 'Grace Design m103', 'Focusrite Platinum', 'Neve 8816 Summing Mixer', 'Universal Audio UAD-2', 'TC Electronic PowerCore FireWire']],
  ['Микрофоны', ['Neumann U 87', 'Shure SM 58', 'Shure SM 57', 'Shure BG 2.1', 'Sennheiser E 815 S']],
  ['Мониторы и интерфейсы', ['Dynaudio Acoustics BM5A', 'Dynaudio BM9S', 'RME FireFace 800', 'RME FireFace 400', 'MOTU UltraLite-mk3 Hybrid', 'Apple Mac Pro']],
  ['Синтезаторы и железо', ['Access Virus TI2 Desktop', 'Clavia Nord Rack 2X', 'Oberheim Matrix 1000', 'E-mu Planet Phatt', 'Novation KS Rack', 'Korg EMX 1', 'Korg KAOSS Pad', 'Boss DR-550', 'Akai Professional MPK25']],
];
const bars = Array.from({ length: 48 }, (_, i) => {
  const h = 18 + Math.round(Math.abs(Math.sin(i * 0.55) * 60 + Math.sin(i * 1.7) * 22));
  return `<i style="height:${h}%;animation-delay:${((i * 0.07) % 1.4).toFixed(2)}s"></i>`;
}).join('');

export default {
  slug: 'koss-records-xtgx',
  name: 'Koss Records',
  conceptName: 'студии звукозаписи «Koss Records»',
  title: 'Koss Records — студия звукозаписи в Измайлово · концепт сайта',
  description: 'Концепт сайта студии звукозаписи Koss Records: пакеты услуг и бронирование времени.',
  themeColor: '#0a0a0b',
  favicon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#0a0a0b"/><circle cx="32" cy="32" r="12" fill="#ff3b30"/></svg>',
  fonts: 'https://fonts.googleapis.com/css2?family=Unbounded:wght@500;700&family=JetBrains+Mono:wght@400;600&family=Inter:wght@400;500;600;700&display=swap',
  phone: '+7 (965) 418-88-66',
  book: { href: '#bron', label: 'Забронировать время', barLabel: 'Бронь студии' },
  nav: [['#pakety', 'Услуги'], ['#bron', 'Бронь'], ['#gear', 'Оборудование'], ['#kontakty', 'Контакты']],
  logo: '<span class="rec-dot" aria-hidden="true"></span>KOSS RECORDS',
  footLine: 'Студия звукозаписи · 3-я Парковая ул., 26/2',
  footSources: 'сайт студии на Яндекс Бизнесе и карточка на Яндекс Картах',
  policyOwner: 'студии Koss Records',
  css: `
:root{--bg:#0a0a0b;--surface:#141416;--surface-2:#0f0f11;--text:#f2f2f0;--muted:#a3a39c;--line:#26262a;--line-strong:#34343a;--accent:#d7ff3a;--accent-ink:#0a0a0b;--accent-text:#d7ff3a;--rec:#ff3b30;
--font-display:Unbounded,system-ui,sans-serif;--font-body:Inter,system-ui,sans-serif;--font-price:"JetBrains Mono",monospace;--display-weight:700;--display-tracking:-.03em;--radius:14px;--radius-lg:22px;--btn-radius:12px;--star:#d7ff3a;--map-bg:#121214;--map-road:#232327;--map-water:#1d2b0a;--focus:#d7ff3a;
--ph-pattern:repeating-linear-gradient(90deg,transparent 0 10px,rgba(215,255,58,.06) 10px 11px)}
.concept{border-bottom:1px solid #26262a}
.logo{font-size:17px;letter-spacing:.02em}
.rec-dot{width:12px;height:12px;border-radius:50%;background:var(--rec);box-shadow:0 0 0 4px rgba(255,59,48,.2);animation:blink 1.6s steps(2,start) infinite}
@keyframes blink{to{visibility:hidden}}
.hero{position:relative;overflow:hidden;padding:clamp(40px,7vw,100px) 0 0;background:radial-gradient(800px 400px at 80% 0,rgba(215,255,58,.10),transparent 70%)}
.hero h1{font-size:clamp(40px,8.6vw,104px);line-height:.95;text-transform:uppercase}
.hero h1 span{color:var(--accent)}
.hero .lead{margin-top:22px;max-width:44ch}
.hero-cta{display:flex;flex-wrap:wrap;gap:12px;margin-top:30px}
.mono{font-family:"JetBrains Mono",monospace;font-size:13px;letter-spacing:.04em;color:var(--muted);text-transform:uppercase}
.live{display:inline-flex;align-items:center;gap:10px;border:1px solid var(--line-strong);border-radius:999px;padding:6px 12px;margin-bottom:22px}
.live b{width:9px;height:9px;border-radius:50%;background:var(--rec)}
.wave{display:flex;align-items:flex-end;gap:4px;height:clamp(110px,18vw,200px);margin-top:clamp(40px,6vw,72px);-webkit-mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)}
.wave i{flex:1;min-width:2px;background:linear-gradient(var(--accent),rgba(215,255,58,.15));border-radius:3px 3px 0 0;transform-origin:bottom;animation:vu 1.4s ease-in-out infinite alternate}
@keyframes vu{0%{transform:scaleY(.35)}100%{transform:scaleY(1)}}
.stats{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.stats div{padding:18px 12px;border-right:1px solid var(--line)}
.stats div:last-child{border-right:0}
.stats strong{display:block;font-family:var(--font-display);font-size:clamp(17px,4.4vw,30px);white-space:nowrap}
.stats span{font-size:13px;color:var(--muted)}
.pk{display:grid;gap:14px;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr))}
.pkc{display:grid;gap:16px;align-content:space-between;border:1px solid var(--line-strong);border-radius:var(--radius-lg);padding:26px;background:linear-gradient(180deg,#161618,#101012);transition:border-color .2s}
.pkc:hover{border-color:var(--accent)}
.pkc .mono{color:var(--accent)}
.pkc h3{font-size:26px;text-transform:uppercase}
.pkc p{color:var(--muted)}
.pkc .price{font-family:"JetBrains Mono",monospace;font-size:34px;font-weight:600;color:var(--text)}
.pkc.hl{border-color:var(--accent);background:linear-gradient(180deg,#1b2107,#111305)}
.for{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));margin-top:18px}
.for div{border-left:2px solid var(--accent);padding:4px 0 4px 16px}
.for h3{font-size:17px;font-family:var(--font-body);font-weight:700}
.for p{color:var(--muted);font-size:15px;margin-top:4px}
.gear{display:grid;gap:14px;grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr))}
.gear .card{background:var(--surface)}
.gear h3{font-family:"JetBrains Mono",monospace;font-size:13px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--accent)}
.gear ul{list-style:none;margin:14px 0 0;padding:0;display:grid;gap:9px}
.gear li{display:flex;gap:10px;align-items:baseline;font-size:15.5px}
.gear li::before{content:"";flex:none;width:6px;height:6px;border-radius:50%;background:var(--muted);transform:translateY(-2px)}
.btn-ghost{border-color:#3a3a40}
.tab[aria-selected="true"]{background:var(--accent);color:var(--accent-ink);border-color:var(--accent)}
`,
  hero: `<section class="hero" aria-labelledby="h1"><div class="wrap">
<span class="live mono"><b aria-hidden="true"></b>Студия звукозаписи · Измайлово</span>
<h1 id="h1">Запись.<br>Сведение.<br><span>Мастеринг.</span></h1>
<p class="lead">Голос, инструменты, группы и сольные артисты. Аудиореклама и дикторы. Работаем каждый день с 11:00 до 23:00.</p>
<div class="hero-cta"><a class="btn btn-primary" href="#bron">${icon.cal}Забронировать время</a><a class="btn btn-ghost" href="${TG}" target="_blank" rel="noopener">${icon.tg}Написать в Telegram</a></div>
<div class="wave" aria-hidden="true">${bars}</div>
</div>
<div class="wrap"><div class="stats"><div><strong>5,0</strong><span>48 отзывов на Картах</span></div><div><strong>от 1 200 ₽</strong><span>мастеринг трека</span></div><div><strong>11–23</strong><span>ежедневно</span></div></div></div>
</section>`,
  sections: [
    `<section class="sec" id="pakety" aria-labelledby="pakety-h"><div class="wrap">
<div class="sec-head reveal"><span class="eyebrow">Услуги</span><h2 id="pakety-h">Три пакета — понятные цены</h2><p>Цены — из прайса студии. Объём работы и итог обсудим до начала сессии.</p></div>
<div class="pk">
<article class="pkc reveal"><div><p class="mono">01 / REC</p><h3 style="margin-top:10px">Звукозапись</h3><p style="margin-top:10px">Запись голоса и музыкальных инструментов.</p></div><div><p class="price">1 500 ₽</p><a class="btn btn-ghost btn-sm" style="margin-top:14px" href="#bron" data-svc="Звукозапись">Выбрать</a></div></article>
<article class="pkc hl reveal"><div><p class="mono">02 / MIX</p><h3 style="margin-top:10px">Сведение</h3><p style="margin-top:10px">Сведение одной дорожки голоса с минусом (битом) + мастеринг.</p></div><div><p class="price">3 000 ₽</p><a class="btn btn-primary btn-sm" style="margin-top:14px" href="#bron" data-svc="Сведение + мастеринг">Выбрать</a></div></article>
<article class="pkc reveal"><div><p class="mono">03 / MASTER</p><h3 style="margin-top:10px">Мастеринг</h3><p style="margin-top:10px">Мастеринг сведённого трека.</p></div><div><p class="price">1 200 ₽</p><a class="btn btn-ghost btn-sm" style="margin-top:14px" href="#bron" data-svc="Мастеринг">Выбрать</a></div></article>
</div>
<div class="for reveal">
<div><h3>Артистам и группам</h3><p>Студия подходит для разных стилей — и для коллективов, и для сольных исполнителей.</p></div>
<div><h3>Аудиореклама</h3><p>База голосов дикторов и актёров — поможем подобрать тембр.</p></div>
<div><h3>Под ключ</h3><p>Со студией работают поэты, композиторы, аранжировщики, саунд-продюсеры и сессионные музыканты.</p></div>
</div>
</div></section>`,
    bookingWidget({
      id: 'bron', eyebrow: 'Бронирование', title: 'Забронируйте время студии', alt: true,
      lead: 'Выберите услугу, день и время начала. Работаем ежедневно с 11:00 до 23:00.',
      services: ['Звукозапись', 'Сведение + мастеринг', 'Мастеринг', 'Аудиореклама / диктор', 'Другое — обсудим'],
      open: '11:00', close: '23:00', step: 60, minLen: 60, submitLabel: 'Забронировать',
      extraFields: `<div class="field"><span class="lbl" id="dur-l">Сколько часов</span><div class="chips" role="radiogroup" aria-labelledby="dur-l">${['1 час', '2 часа', '3 часа', '4+ часа'].map((t, i) => `<button type="button" class="chip" role="radio" aria-checked="${i === 1}">${t}</button>`).join('')}</div></div>
<div class="field"><label for="bron-ref">Ссылка на демо или референс</label><input class="input" id="bron-ref" name="ref" placeholder="Необязательно"></div>`,
    }),
    `<section class="sec" id="gear" aria-labelledby="gear-h"><div class="wrap">
<div class="sec-head reveal"><span class="eyebrow">Оборудование</span><h2 id="gear-h">На чём пишем</h2><p>Полный список — со страницы студии.</p></div>
<div class="gear">${GEAR.map(([h, list]) => `<div class="card reveal"><h3>${h}</h3><ul>${list.map((x) => `<li>${x}</li>`).join('')}</ul></div>`).join('')}</div>
</div></section>`,
    gallery({ title: 'Студия изнутри', lead: 'Реальные фото студии вместо стоковых картинок.', alt: true, label: 'Здесь будут ваши фото студии' }),
    ratingBlock({ rating: 5, count: 48, orgUrl: 'https://yandex.ru/maps/org/1201329779/', lead: 'Отзывы артистов — в карточке студии на Яндекс Картах.' }),
    visitBlock({ address: 'Москва, 3-я Парковая ул., 26/2', metro: 'м. Измайловская — 930 м', hours: [['Ежедневно', '11:00–23:00']], orgId: '1201329779', seed: 11, alt: true }),
    contactsBlock({ title: 'Обсудить проект', items: [
      { icon: 'phone', label: 'Телефон', value: '+7 (965) 418-88-66', href: 'tel:+79654188866' },
      { icon: 'tg', label: 'Telegram', value: 'Написать в Telegram', href: TG },
      { icon: 'wa', label: 'WhatsApp', value: 'Написать в WhatsApp', href: WA },
      { icon: 'mail', label: 'Почта', value: 'kossrecords@mail.ru', href: 'mailto:kossrecords@mail.ru' },
      { icon: 'vk', label: 'ВКонтакте', value: 'vk.ru/kossrecords', href: 'https://vk.ru/kossrecords' },
    ] }),
  ],
  js: `
(function(){
  document.querySelectorAll('[data-svc]').forEach(function(a){a.addEventListener('click',function(){var s=document.getElementById('bron-svc');for(var i=0;i<s.options.length;i++)if(s.options[i].text===a.getAttribute('data-svc'))s.selectedIndex=i;});});
  document.querySelectorAll('[role="radiogroup"] .chip').forEach(function(c){c.addEventListener('click',function(){c.parentNode.querySelectorAll('.chip').forEach(function(x){x.setAttribute('aria-checked','false')});c.setAttribute('aria-checked','true');});});
})();`,
};
