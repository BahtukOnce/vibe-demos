import { icon, page, priceTabs, ratingBlock, visitBlock, contactsBlock, gallery } from '../kit.mjs';

const BOOK = 'https://n832854.yclients.com/company/779254/personal/select-master?o=';
const WA = 'https://wa.me/79060750399';
const TG = 'https://t.me/nails_master_kate';

const bottle = `<svg class="bottle" viewBox="0 0 280 340" aria-hidden="true">
<defs><linearGradient id="gl" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#3e6385"/><stop offset=".45" stop-color="#8fb0cc"/><stop offset=".6" stop-color="#5a7fa3"/><stop offset="1" stop-color="#2f4d6a"/></linearGradient>
<linearGradient id="cap" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1d2a36"/><stop offset=".5" stop-color="#4a5a6a"/><stop offset="1" stop-color="#1d2a36"/></linearGradient></defs>
<ellipse cx="140" cy="318" rx="92" ry="12" fill="#1d2a36" opacity=".08"/>
<rect x="104" y="30" width="72" height="110" rx="10" fill="url(#cap)"/>
<rect x="116" y="130" width="48" height="26" fill="#c9d6e2"/>
<path d="M70 176c0-14 12-24 26-24h88c14 0 26 10 26 24v112c0 16-12 28-28 28H98c-16 0-28-12-28-28Z" fill="url(#gl)"/>
<path d="M92 186c0-6 4-10 10-10h8v120h-8c-6 0-10-4-10-10Z" fill="#fff" opacity=".35"/>
<text x="140" y="250" text-anchor="middle" font-family="Alice,serif" font-size="22" fill="#f7f5f0">Раменки</text>
</svg>`;

export default {
  slug: 'manikyur-ramenki-ymj3',
  name: 'Маникюр Раменки',
  conceptName: 'студии «Маникюр Раменки»',
  title: 'Маникюр Раменки — ногтевая студия на Мичуринском проспекте · концепт сайта',
  description: 'Концепт сайта студии «Маникюр Раменки»: цены и онлайн-запись к мастеру.',
  themeColor: '#f7f5f0',
  favicon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#3e6385"/><rect x="24" y="10" width="16" height="20" rx="3" fill="#1d2a36"/><rect x="16" y="30" width="32" height="26" rx="7" fill="#c9d6e2"/></svg>',
  fonts: 'https://fonts.googleapis.com/css2?family=Alice&family=Nunito:wght@400;500;600;700&display=swap',
  phone: '+7 (906) 075-03-99',
  book: { href: BOOK, label: 'Записаться онлайн', barLabel: 'Записаться' },
  nav: [['#uslugi', 'Цены'], ['#master', 'Мастер'], ['#otzyvy', 'Отзывы'], ['#kak-dobratsya', 'Адрес']],
  logo: '<span>Маникюр <span class="r">Раменки</span></span>',
  footLine: 'Ногтевая студия · Москва, Мичуринский пр., 25к3',
  footSources: 'сайт студии на Яндекс Бизнесе и карточка на Яндекс Картах',
  policyOwner: 'студии «Маникюр Раменки»',
  css: `
:root{--bg:#f7f5f0;--surface:#fff;--surface-2:#e8eef3;--text:#1d2a36;--muted:#566575;--line:#e1e6ea;--line-strong:#cdd6de;--accent:#3e6385;--accent-ink:#fff;--accent-text:#35587a;
--font-display:Alice,Georgia,serif;--font-body:Nunito,system-ui,sans-serif;--display-weight:400;--display-tracking:-.01em;--radius:20px;--radius-lg:30px;--star:#e0a526;--map-bg:#e6edf2;
--ph-pattern:radial-gradient(circle at 50% 50%,rgba(62,99,133,.1) 0 3px,transparent 4px) 0 0/16px 16px}
body{font-size:16.5px}
.logo{font-size:24px}
.logo .r{color:var(--accent-text)}
.hero{position:relative;overflow:hidden;padding:clamp(34px,6vw,84px) 0 clamp(56px,8vw,100px);background:linear-gradient(180deg,#e9eff4 0,var(--bg) 80%)}
.hero .wrap{display:grid;gap:26px;align-items:center}
@media (min-width:920px){.hero .wrap{grid-template-columns:1.15fr .85fr}}
.hero h1{font-size:clamp(46px,8vw,96px);line-height:1}
.hero .lead{margin-top:20px;max-width:42ch}
.hero-cta{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}
.bottle{width:min(62vw,280px);justify-self:center;animation:bob 6s ease-in-out infinite}
@keyframes bob{50%{transform:translateY(-8px) rotate(-2deg)}}
.hero-meta{display:flex;flex-wrap:wrap;gap:8px;margin-top:24px}
.hero-meta span{display:inline-flex;align-items:center;gap:8px;background:var(--surface);border:1px solid var(--line);border-radius:999px;padding:7px 13px;font-size:14px;font-weight:600}
.master{display:grid;gap:22px;align-items:center;background:var(--surface);border:1px solid var(--line);border-radius:var(--radius-lg);padding:clamp(22px,4vw,44px)}
@media (min-width:860px){.master{grid-template-columns:auto 1fr auto}}
.avatar{width:120px;height:120px;border-radius:50%;background:var(--surface-2);display:grid;place-items:center;text-align:center;font-size:12px;color:var(--muted);border:1px dashed var(--line-strong);padding:10px}
.master h2{font-size:clamp(30px,4vw,44px)}
.master p{color:var(--muted);margin-top:8px;max-width:52ch}
`,
  hero: `<section class="hero" aria-labelledby="h1"><div class="wrap">
<div>
<span class="eyebrow">Ногтевая студия · Мичуринский проспект</span>
<h1 id="h1">Маникюр в&nbsp;Раменках</h1>
<p class="lead">Аппаратный и комбинированный маникюр, педикюр, стойкое покрытие, наращивание и дизайн. Мужской ногтевой сервис.</p>
<div class="hero-cta"><a class="btn btn-primary" href="${BOOK}" target="_blank" rel="noopener">${icon.cal}Записаться онлайн</a><a class="btn btn-ghost" href="${TG}" target="_blank" rel="noopener">${icon.tg}Написать мастеру</a></div>
<div class="hero-meta"><span>★ 5,0 · 81 отзыв</span><span>Хорошее место 2026</span><span>${icon.metro}м. Раменки — 460 м</span></div>
</div>
${bottle}
</div></section>`,
  sections: [
    priceTabs({
      title: 'Цены', lead: 'Из каталога студии.', alt: true, bookHref: BOOK,
      cats: [
        { name: 'Маникюр', items: [
          { n: 'Маникюр без покрытия', p: '2 400 ₽' },
          { n: 'Комплексный маникюр + гель-лак', p: '3 900 ₽' },
          { n: 'Комплексный маникюр + гель-лак + пирсинг ногтя', p: '4 400 ₽' },
          { n: 'Дизайн: френч или омбре', p: '500 ₽' },
        ] },
        { name: 'Наращивание', items: [
          { n: 'Наращивание ногтей', p: '5 500 ₽' },
          { n: 'Коррекция гелевых ногтей', p: '4 700 ₽' },
        ] },
        { name: 'Педикюр', items: [
          { n: 'Педикюр: обработка пальчиков + гель-лак', d: 'Без обработки стопы', p: '4 000 ₽' },
          { n: 'Smart-педикюр без покрытия', p: '4 000 ₽' },
          { n: 'Smart-педикюр + гель-лак', p: '4 900 ₽' },
        ] },
      ],
    }),
    `<section class="sec" id="master" aria-labelledby="master-h"><div class="wrap">
<div class="master reveal">
<div class="avatar">Здесь будет фото мастера</div>
<div><span class="eyebrow">Ваш мастер</span><h2 id="master-h">Катерина</h2><p>Мастер ногтевого сервиса. Выберите удобное время в онлайн-записи или напишите напрямую в Telegram.</p></div>
<div style="display:grid;gap:10px"><a class="btn btn-primary" href="${BOOK}" target="_blank" rel="noopener">${icon.cal}Выбрать время</a><a class="btn btn-ghost" href="${TG}" target="_blank" rel="noopener">${icon.tg}Telegram</a></div>
</div></div></section>`,
    gallery({ title: 'Работы', lead: 'Покрытия, френч, омбре, наращивание — реальные фото вместо стоковых.', alt: true }),
    ratingBlock({ rating: 5, count: 81, orgUrl: 'https://yandex.ru/maps/org/121998722046/', award: true }),
    visitBlock({ address: 'Москва, Мичуринский пр., 25к3', metro: 'м. Раменки — 460 м', hours: [['Ежедневно', '10:00–22:00']], orgId: '121998722046', seed: 47, alt: true }),
    contactsBlock({ title: 'Запись и вопросы', items: [
      { icon: 'cal', label: 'Онлайн-запись', value: 'YCLIENTS', href: BOOK },
      { icon: 'phone', label: 'Телефон', value: '+7 (906) 075-03-99', href: 'tel:+79060750399' },
      { icon: 'tg', label: 'Telegram', value: '@nails_master_kate', href: TG },
      { icon: 'wa', label: 'WhatsApp', value: 'Написать в WhatsApp', href: WA },
    ] }),
  ],
};
