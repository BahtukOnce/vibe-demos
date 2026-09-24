import { icon, page, priceTabs, ratingBlock, visitBlock, contactsBlock, gallery } from '../kit.mjs';

const BOOK = 'https://n50373.yclients.com/company/68109/personal/menu?o=';
const WA = 'https://wa.me/79032705919';
const TG = 'https://t.me/p_professional_bot';

const ring = `<svg class="ring" viewBox="0 0 300 300" aria-hidden="true">
<circle cx="150" cy="150" r="126" fill="#fff" stroke="#e3ebf2" stroke-width="16"/>
<circle class="arc" cx="150" cy="150" r="126" fill="none" stroke="#1f3a5f" stroke-width="16" stroke-linecap="round" stroke-dasharray="792" stroke-dashoffset="792" transform="rotate(-90 150 150)"/>
${Array.from({ length: 12 }, (_, i) => `<line x1="150" y1="40" x2="150" y2="${i % 3 ? 50 : 56}" stroke="#9cb3c9" stroke-width="3" stroke-linecap="round" transform="rotate(${i * 30} 150 150)"/>`).join('')}
<text x="150" y="146" text-anchor="middle" font-family="Montserrat Alternates,sans-serif" font-weight="700" font-size="58" fill="#14233a">1:30</text>
<text x="150" y="182" text-anchor="middle" font-family="Montserrat,sans-serif" font-size="15" fill="#51607a">маникюр + педикюр</text>
<text x="150" y="202" text-anchor="middle" font-family="Montserrat,sans-serif" font-size="15" fill="#51607a">с покрытием</text>
</svg>`;

export default {
  slug: 'pedikyur-professional-evo3',
  name: 'Педикюр Профессионал',
  conceptName: 'салона «Педикюр Профессионал»',
  title: 'Педикюр Профессионал — маникюр и педикюр у МЦД Железнодорожная · концепт сайта',
  description: 'Концепт сайта салона «Педикюр Профессионал» в Железнодорожном: цены и онлайн-запись.',
  themeColor: '#f6f8fa',
  favicon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#1f3a5f"/><circle cx="32" cy="32" r="17" fill="none" stroke="#9cc3db" stroke-width="5"/><path d="M32 22v10l7 5" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/></svg>',
  fonts: 'https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@600;700&family=Montserrat:wght@400;500;600;700&display=swap',
  phone: '+7 (926) 375-45-55',
  book: { href: BOOK, label: 'Записаться онлайн', barLabel: 'Записаться' },
  nav: [['#uslugi', 'Цены'], ['#kompleks', 'Комплекс за 1,5 ч'], ['#otzyvy', 'Отзывы'], ['#kak-dobratsya', 'Адрес']],
  logo: '<span class="pp" aria-hidden="true">PP</span>Педикюр Профессионал',
  footLine: 'Маникюр и педикюр · Балашиха, мкр. Железнодорожный, Советская ул., 5А',
  footSources: 'сайт салона на Яндекс Бизнесе и карточка на Яндекс Картах',
  policyOwner: 'салона «Педикюр Профессионал»',
  css: `
:root{--bg:#f6f8fa;--surface:#fff;--surface-2:#eaf0f5;--text:#14233a;--muted:#51607a;--line:#e0e8ef;--line-strong:#cdd9e4;--accent:#1f3a5f;--accent-ink:#fff;--accent-text:#1f3a5f;--sky:#9cc3db;
--font-display:"Montserrat Alternates",system-ui,sans-serif;--font-body:Montserrat,system-ui,sans-serif;--display-weight:700;--display-tracking:-.03em;--radius:18px;--radius-lg:26px;--star:#f2b441;--map-bg:#e9f0f6;
--ph-pattern:repeating-linear-gradient(0deg,transparent 0 18px,rgba(31,58,95,.06) 18px 19px)}
.logo{font-size:17px;font-family:var(--font-body);font-weight:700;letter-spacing:-.01em}
.pp{display:grid;place-items:center;width:34px;height:34px;border-radius:10px;background:var(--accent);color:#fff;font-family:var(--font-display);font-size:14px}
@media (max-width:380px){.logo{font-size:15px}}
.hero{padding:clamp(34px,6vw,80px) 0 clamp(56px,8vw,100px);background:radial-gradient(700px 400px at 85% 20%,#dfeaf4,transparent 70%)}
.hero .wrap{display:grid;gap:30px;align-items:center}
@media (min-width:920px){.hero .wrap{grid-template-columns:1.15fr .85fr}}
.hero h1{font-size:clamp(38px,6.6vw,74px);line-height:1.04}
.hero h1 span{color:#3c6a9a}
.hero .lead{margin-top:18px;max-width:40ch}
.hero-cta{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}
.ring{width:min(78vw,340px);justify-self:center;filter:drop-shadow(0 24px 40px rgba(31,58,95,.18))}
.arc{animation:fill 2.2s .3s cubic-bezier(.4,0,.2,1) forwards}
@keyframes fill{to{stroke-dashoffset:198}}
.strip{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-top:26px}
@media (min-width:640px){.strip{grid-template-columns:repeat(4,1fr)}}
.strip div{background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:12px 14px}
.strip strong{display:block;font-family:var(--font-display);font-size:20px}
.strip span{font-size:13px;color:var(--muted)}
.duo{display:grid;gap:18px;align-items:center;background:var(--accent);color:#fff;border-radius:var(--radius-lg);padding:clamp(24px,4vw,48px)}
@media (min-width:860px){.duo{grid-template-columns:1.2fr 1fr}}
.duo h2{font-size:clamp(30px,4.6vw,48px)}
.duo p{color:#c9d8e7;margin-top:12px}
.duo ul{list-style:none;padding:0;margin:0;display:grid;gap:10px}
.duo li{display:flex;justify-content:space-between;gap:12px;background:rgba(255,255,255,.08);border-radius:14px;padding:14px 16px}
.duo li b{white-space:nowrap}
.duo .btn{background:#fff;color:var(--accent);margin-top:18px}
.duo small{display:block;color:#a9bdd2;font-size:13px;margin-top:10px}
`,
  hero: `<section class="hero" aria-labelledby="h1"><div class="wrap">
<div>
<span class="eyebrow">Маникюр и педикюр · Железнодорожный</span>
<h1 id="h1">Маникюр и педикюр с покрытием <span>за 1,5 часа</span></h1>
<p class="lead">Салон у станции МЦД Железнодорожная: 93 метра от платформы. Работаем каждый день с 10:15 до 22:00.</p>
<div class="hero-cta"><a class="btn btn-primary" href="${BOOK}" target="_blank" rel="noopener">${icon.cal}Записаться онлайн</a><a class="btn btn-ghost" href="${TG}" target="_blank" rel="noopener">${icon.tg}Telegram-бот</a></div>
<div class="strip"><div><strong>5,0 ★</strong><span>307 отзывов</span></div><div><strong>93 м</strong><span>от МЦД</span></div><div><strong>10:15–22</strong><span>ежедневно</span></div><div><strong>от 750 ₽</strong><span>детский маникюр</span></div></div>
</div>
${ring}
</div></section>`,
    sections: [
    `<section class="sec" id="kompleks" aria-labelledby="kompleks-h"><div class="wrap">
<div class="duo reveal">
<div><span class="eyebrow" style="color:#9cc3db">В 4 руки</span><h2 id="kompleks-h">Два мастера — один визит</h2><p>Маникюр и педикюр делают одновременно. Комплекс с покрытием занимает около полутора часов.</p><a class="btn" href="${BOOK}" target="_blank" rel="noopener">${icon.cal}Выбрать время</a></div>
<div><ul>
<li><span>Маникюр + педикюр в 4 руки</span><b>3 050 ₽</b></li>
<li><span>Маникюр + снятие + покрытие</span><b>2 400 ₽</b></li>
<li><span>Педикюр + снятие + покрытие</span><b>3 550 ₽</b></li>
</ul><small>Комплекс в 4 руки: любой маникюр + классический или комбинированный педикюр; покрытие и доп. услуги — отдельно.</small></div>
</div></div></section>`,
    priceTabs({
      title: 'Прайс', lead: 'Цены из каталога салона. Стоимость покрытия зависит от палитры.', alt: true, bookHref: BOOK,
      cats: [
        { name: 'Маникюр', items: [
          { n: 'Маникюр классический, аппаратный или комбинированный', d: 'Без последующего покрытия', p: '1 200 ₽' },
          { n: 'Маникюр под покрытие', d: 'Классический, аппаратный или комбинированный — с последующим покрытием', p: '950 ₽' },
          { n: 'Покрытие гель-лаком', d: 'От 1 150 до 1 250 ₽ в зависимости от палитры. Френч, «кошачий глаз» и сложные покрытия — по другой цене', p: 'от 1 150 ₽' },
          { n: 'Снятие гель-лака', d: 'С последующим покрытием; без покрытия — 450 ₽', p: '300 ₽' },
          { n: 'Укрепление гелем', p: '850 ₽' },
          { n: 'Мужской маникюр', p: '1 100 ₽' },
          { n: 'Детский маникюр', p: '750 ₽' },
        ] },
        { name: 'Педикюр', items: [
          { n: 'Педикюр классический', p: '2 100 ₽' },
          { n: 'Педикюр комбинированный', p: '2 100 ₽' },
          { n: 'Педикюр аппаратный', p: '2 200 ₽' },
          { n: 'Smart-педикюр', p: '2 500 ₽' },
          { n: 'Покрытие гель-лаком (ноги)', d: 'От 1 150 до 1 250 ₽ в зависимости от палитры', p: 'от 1 150 ₽' },
          { n: 'Мужской педикюр', p: '2 200 ₽' },
          { n: 'Детский педикюр', p: '1 300 ₽' },
        ] },
        { name: 'Комплексы', items: [
          { n: 'Маникюр + педикюр в 4 руки', d: 'Любой маникюр + классический или комбинированный педикюр, без учёта покрытия', p: '3 050 ₽' },
          { n: 'Маникюр + снятие + покрытие', d: 'Любой вид маникюра, покрытие за 1 150 ₽', p: '2 400 ₽' },
          { n: 'Педикюр + снятие + покрытие', d: 'Классический педикюр, покрытие за 1 150 ₽', p: '3 550 ₽' },
        ] },
      ],
    }),
    gallery({ title: 'Работы мастеров', lead: 'Покрытия, френч и педикюр — реальные фото вместо стоковых.' }),
    ratingBlock({ rating: 5, count: 307, orgUrl: 'https://yandex.ru/maps/org/91896574680/', alt: true }),
    visitBlock({ address: 'Московская обл., Балашиха, мкр. Железнодорожный, Советская ул., 5А', metro: 'МЦД Железнодорожная — 93 м', hours: [['Ежедневно', '10:15–22:00']], orgId: '91896574680', seed: 23 }),
    contactsBlock({ alt: true, title: 'Запись и вопросы', items: [
      { icon: 'cal', label: 'Онлайн-запись', value: 'YCLIENTS', href: BOOK },
      { icon: 'phone', label: 'Телефон', value: '+7 (926) 375-45-55', href: 'tel:+79263754555' },
      { icon: 'wa', label: 'WhatsApp', value: 'Написать в WhatsApp', href: WA },
      { icon: 'tg', label: 'Telegram', value: 'Telegram-бот салона', href: TG },
      { icon: 'max', label: 'MAX', value: 'Написать в MAX', href: 'https://max.ru/79032705919' },
    ] }),
  ],
};
