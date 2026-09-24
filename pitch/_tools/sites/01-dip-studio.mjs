import { esc, icon, page, priceTabs, ratingBlock, visitBlock, contactsBlock, gallery } from '../kit.mjs';

const BOOK = 'https://dikidi.net/1421790?p=0.pi';
const WA = 'https://wa.me/79938975001?text=' + encodeURIComponent('Здравствуйте! Хочу записаться к вам на маникюр');

const nails = [
  ['#f4d9d3', '#e8b7b0'], ['#fbeee6', '#f3cfc1'], ['#e9c7c9', '#c98f98'], ['#fff7f1', '#f6ddd2'], ['#d9a9a9', '#b97c83'],
];
const nailSvg = `<svg class="fan" viewBox="0 0 360 300" aria-hidden="true">
<defs>${nails.map((c, i) => `<linearGradient id="n${i}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c[0]}"/><stop offset="1" stop-color="${c[1]}"/></linearGradient>`).join('')}
<linearGradient id="fr" x1="0" y1="0" x2="0" y2="1"><stop offset=".72" stop-color="#f6e2dc"/><stop offset=".73" stop-color="#fffdfb"/></linearGradient></defs>
${[-34, -17, 0, 17, 34].map((a, i) => `<g transform="rotate(${a} 180 290)"><path d="M180 60c-26 0-40 22-40 52v96c0 18 18 28 40 28s40-10 40-28v-96c0-30-14-52-40-52Z" fill="url(#${i === 2 ? 'fr' : 'n' + i})" stroke="rgba(120,70,80,.18)"/><path d="M162 92c4-12 10-18 18-20" stroke="rgba(255,255,255,.8)" stroke-width="5" stroke-linecap="round" fill="none"/></g>`).join('')}
</svg>`;

export default {
  slug: 'dip-studio-xq39',
  name: 'Dip studio',
  conceptName: '«Dip studio»',
  title: 'Dip studio — пудровый маникюр без лампы · концепт сайта',
  description: 'Концепт сайта студии порошкового маникюра Dip studio на Таганке.',
  themeColor: '#fbf6f2',
  favicon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#9e5563"/><path d="M32 12c-8 0-12 7-12 16v14c0 6 5 9 12 9s12-3 12-9V28c0-9-4-16-12-16Z" fill="#fbeee6"/></svg>',
  fonts: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Manrope:wght@400;500;600;700&display=swap',
  phone: '+7 (993) 897-50-01',
  book: { href: BOOK, label: 'Записаться онлайн', barLabel: 'Записаться' },
  nav: [['#pudra', 'Пудра'], ['#uslugi', 'Цены'], ['#otzyvy', 'Отзывы'], ['#kak-dobratsya', 'Адрес']],
  logo: '<span class="mark" aria-hidden="true"></span>Dip studio',
  footLine: 'Студия пудрового маникюра · ул. Верхняя Радищевская, 13–15',
  footSources: 'сайт студии и карточка на Яндекс Картах',
  css: `
:root{--bg:#fbf6f2;--surface:#fffdfb;--surface-2:#f5ece6;--text:#2e2226;--muted:#6f5d61;--line:#eadcd5;--line-strong:#dcc7bf;--accent:#9e5563;--accent-ink:#fff;--accent-text:#8e4957;
--font-display:"Cormorant Garamond",Georgia,serif;--font-body:Manrope,system-ui,sans-serif;--display-weight:500;--display-tracking:-.015em;--radius:20px;--radius-lg:30px;--star:#c9848f;--map-bg:#f3e7e1;
--ph-pattern:radial-gradient(circle at 20% 30%,#fff 0 2px,transparent 3px) 0 0/22px 22px}
.logo{font-size:26px;font-style:italic}
.mark{width:14px;height:20px;border-radius:8px 8px 6px 6px;background:linear-gradient(#f4d9d3,#c98f98);box-shadow:inset 0 -5px 0 #fff4ef}
.hero{position:relative;overflow:hidden;padding:clamp(40px,7vw,96px) 0 clamp(56px,8vw,110px);background:radial-gradient(1200px 500px at 85% 10%,#f6e1da 0,transparent 60%),radial-gradient(800px 420px at 0% 100%,#f7ebe4 0,transparent 60%)}
.hero .wrap{display:grid;gap:36px;align-items:center}
@media (min-width:920px){.hero .wrap{grid-template-columns:1.15fr .85fr}}
.hero h1{font-size:clamp(46px,8.4vw,96px);line-height:.98}
.hero h1 em{font-style:italic;color:var(--accent-text)}
.hero .lead{margin-top:22px;max-width:34ch}
.hero-cta{display:flex;flex-wrap:wrap;gap:12px;margin-top:30px}
.chipline{display:flex;flex-wrap:wrap;gap:10px;margin-top:28px}
.pill{display:inline-flex;align-items:center;gap:8px;background:var(--surface);border:1px solid var(--line);border-radius:999px;padding:8px 14px;font-size:14px;text-decoration:none}
.pill svg{width:16px;height:16px;color:var(--accent-text)}
.pill .st{fill:#c9848f;stroke:none}
.art{position:relative;max-width:420px;justify-self:center;width:100%}
.fan{width:100%;height:auto;filter:drop-shadow(0 30px 40px rgba(158,85,99,.18))}
.dust{position:absolute;inset:-10%;pointer-events:none}
.dust i{position:absolute;width:6px;height:6px;border-radius:50%;background:#e4b8b4;opacity:.0;animation:float 7s ease-in-out infinite}
@keyframes float{0%{transform:translateY(20px) scale(.6);opacity:0}30%{opacity:.8}100%{transform:translateY(-120px) scale(1);opacity:0}}
.why{display:grid;gap:14px;grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr))}
.why .card{display:grid;gap:10px}
.why .num{font-family:var(--font-display);font-size:44px;line-height:1;color:var(--accent-text);font-style:italic}
.why h3{font-size:26px}
.why p{color:var(--muted);font-size:15.5px}
.allergy{display:grid;gap:28px;align-items:center;margin-top:18px;background:#2e2226;color:#fbeee6;border-radius:var(--radius-lg);padding:clamp(26px,5vw,56px)}
@media (min-width:860px){.allergy{grid-template-columns:auto 1fr}}
.allergy .big{font-family:var(--font-display);font-size:clamp(72px,12vw,140px);line-height:.85;font-style:italic;color:#f4c9c6}
.allergy p{font-size:clamp(17px,2vw,21px);max-width:46ch;color:#f3e3dd}
.allergy small{display:block;margin-top:10px;color:#c9aeb0;font-size:13px}
.bookcard{display:grid;gap:22px;background:linear-gradient(135deg,#fffdfb,#f7e8e3);border:1px solid var(--line);border-radius:var(--radius-lg);padding:clamp(24px,4vw,48px)}
@media (min-width:860px){.bookcard{grid-template-columns:1.2fr 1fr;align-items:center}}
.steps{list-style:none;margin:0;padding:0;display:grid;gap:14px;counter-reset:s}
.steps li{display:flex;gap:14px;align-items:flex-start;font-size:16.5px}
.steps li::before{counter-increment:s;content:counter(s);flex:none;width:34px;height:34px;border-radius:50%;display:grid;place-items:center;background:var(--accent);color:#fff;font-weight:700;font-size:15px}
.bookcard .btn{width:100%}
`,
  hero: `<section class="hero" aria-labelledby="h1"><div class="wrap">
<div>
<span class="eyebrow">Студия пудрового маникюра · Таганка</span>
<h1 id="h1">Маникюр без лампы и <em>без&nbsp;аллергии</em></h1>
<p class="lead">Пилочный маникюр и пудровое покрытие: без УФ-лампы, гипоаллергенно и бережно к ногтям. Для всех, кому не подходит гель-лак.</p>
<div class="hero-cta"><a class="btn btn-primary" href="${BOOK}" target="_blank" rel="noopener">${icon.cal}Записаться онлайн</a><a class="btn btn-ghost" href="#uslugi">Смотреть цены</a></div>
<div class="chipline">
<a class="pill" href="#otzyvy"><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path class="st" d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9Z"/></svg><strong>5,0</strong>&nbsp;· 52 отзыва на Яндекс Картах</a>
<span class="pill">${icon.clock}Ежедневно 10:00–22:00</span>
</div>
</div>
<div class="art" aria-hidden="true">${nailSvg}<div class="dust">${Array.from({ length: 14 }, (_, i) => `<i style="left:${(i * 37) % 100}%;top:${60 + ((i * 23) % 40)}%;animation-delay:${(i * 0.5).toFixed(1)}s;width:${3 + (i % 4) * 2}px;height:${3 + (i % 4) * 2}px"></i>`).join('')}</div></div>
</div></section>`,
  sections: [
    `<section class="sec" id="pudra" aria-labelledby="pudra-h"><div class="wrap">
<div class="sec-head reveal"><span class="eyebrow">Почему к нам</span><h2 id="pudra-h">Пудра вместо гель-лака</h2><p>Всё, что важно знать до записи, в четырёх пунктах.</p></div>
<div class="why">
<div class="card reveal"><span class="num">01</span><h3>Пудровое покрытие</h3><p>Гипоаллергенно, без УФ-лампы, с витаминами и минералами для ногтевой пластины. Подходит при аллергии на гель-лак и ожогах от лампы.</p></div>
<div class="card reveal"><span class="num">02</span><h3>Стерильно</h3><p>Инструменты проходят 4 этапа стерилизации. Крафт-пакет вскрываем при вас.</p></div>
<div class="card reveal"><span class="num">03</span><h3>Гарантия 5 дней</h3><p>Если за это время отколется кусочек или появится трещинка, бесплатно переделаем.</p></div>
<div class="card reveal"><span class="num">04</span><h3>Как дома</h3><p>Мягкая мебель, напитки, печенье и конфеты, ненавязчивая музыка.</p></div>
</div>
<div class="allergy reveal"><div class="big">98,7%</div><div><p>клиенток студии — аллергики. Для них пудровое покрытие — способ носить маникюр без гель-лака.</p><small>Данные студии</small></div></div>
</div></section>`,
    priceTabs({
      title: 'Прайс без сюрпризов', lead: 'Время процедур указано ориентировочно.', alt: true,
      bookHref: BOOK,
      cats: [
        { name: 'Маникюр', items: [
          { n: 'Маникюр аппаратный или пилочный', p: '2 000 ₽', t: '1 ч' },
          { n: 'Маникюр + пудровое покрытие', d: 'Без УФ-лампы, гипоаллергенно', p: '4 000 ₽', t: '2 ч' },
          { n: 'Коррекция длины (наращивание ногтя)', p: '400 ₽', t: '5 мин' },
        ] },
        { name: 'Педикюр', items: [
          { n: 'Педикюр-смарт', p: '3 000 ₽', t: '1 ч' },
          { n: 'Педикюр-смарт + пудровое покрытие', p: '4 500 ₽', t: '2 ч' },
        ] },
        { name: 'Дизайн и сервис', items: [
          { n: 'Френч', p: '4 500 ₽' },
          { n: 'Омбре', p: '4 500 ₽' },
          { n: 'Дизайн ногтя', d: 'Рисунок, стразы, градиент', p: 'от 100 ₽', t: '5 мин' },
          { n: 'Ремонт 1 ногтя (пудра)', p: '500 ₽', t: '30 мин' },
          { n: 'Снятие покрытия', p: '700 ₽', t: '30 мин' },
        ] },
      ],
    }),
    `<section class="sec" id="zapis" aria-labelledby="zapis-h"><div class="wrap">
<div class="bookcard reveal">
<div><span class="eyebrow">Онлайн-запись</span><h2 id="zapis-h" style="font-size:clamp(32px,5vw,50px)">Запись с телефона в пару касаний</h2>
<ol class="steps" style="margin-top:22px"><li>Выберите услугу и мастера</li><li>Отметьте удобное время в календаре студии</li><li>Подтвердите запись — готово</li></ol></div>
<div style="display:grid;gap:12px"><a class="btn btn-primary" href="${BOOK}" target="_blank" rel="noopener">${icon.cal}Открыть запись DIKIDI</a><a class="btn btn-ghost" href="${WA}" target="_blank" rel="noopener">${icon.wa}Записаться в WhatsApp</a><p class="note" style="text-align:center">Кнопка ведёт на настоящую онлайн-запись студии</p></div>
</div></div></section>`,
    gallery({ title: 'Френч, омбре, рисунки', lead: 'Работы мастеров: живые фото вместо стоковых картинок.', alt: true }),
    ratingBlock({ rating: 5, count: 52, orgUrl: 'https://yandex.ru/maps/org/39989078578/', lead: 'Отзывы клиенток — в карточке студии на Яндекс Картах. Там же можно оставить свой.' }),
    visitBlock({ address: 'Москва, ул. Верхняя Радищевская, 13–15, пом. 5/П', metro: 'м. Таганская — 270 м', hours: [['Ежедневно', '10:00–22:00']], orgId: '39989078578', seed: 3, alt: true }),
    contactsBlock({ title: 'Запишитесь удобным способом', items: [
      { icon: 'phone', label: 'Телефон', value: '+7 (993) 897-50-01', href: 'tel:+79938975001' },
      { icon: 'wa', label: 'WhatsApp', value: 'Написать в WhatsApp', href: WA },
      { icon: 'tg', label: 'Telegram', value: '@dip_studio_nails', href: 'https://t.me/dip_studio_nails' },
      { icon: 'vk', label: 'ВКонтакте', value: 'Группа студии', href: 'https://vk.com/club224580635' },
      { icon: 'mail', label: 'Почта', value: 'Dipstudionails@yandex.ru', href: 'mailto:Dipstudionails@yandex.ru' },
    ] }),
  ],
};
