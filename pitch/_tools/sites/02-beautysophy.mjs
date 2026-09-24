import { icon, page, priceTabs, ratingBlock, visitBlock, contactsBlock, gallery } from '../kit.mjs';

const BOOK = 'https://n272430.yclients.com/company/264560/personal/menu?o=';

const arch = `<svg class="arch-art" viewBox="0 0 400 520" aria-hidden="true">
<defs><linearGradient id="ag" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e3e6d6"/><stop offset="1" stop-color="#c9d0b5"/></linearGradient>
<clipPath id="ac"><path d="M40 520V200a160 160 0 0 1 320 0v320Z"/></clipPath></defs>
<path d="M40 520V200a160 160 0 0 1 320 0v320Z" fill="url(#ag)"/>
<g clip-path="url(#ac)" fill="none" stroke="#5e6e4f" stroke-width="2.2" stroke-linecap="round" opacity=".75">
<path d="M200 520C196 430 180 360 150 300"/><path d="M150 300c-30-8-52-30-58-62 32 2 56 22 58 62Z" fill="#aab596" stroke="none"/>
<path d="M172 380c26-18 58-22 90-12-18 26-50 36-90 12Z" fill="#b8c2a4" stroke="none"/>
<path d="M186 450c-28-14-60-14-88 2 22 22 56 24 88-2Z" fill="#9daa87" stroke="none"/>
<path d="M200 520c10-80 30-140 70-190"/><path d="M270 330c4-30 24-54 54-64 4 32-18 56-54 64Z" fill="#c3cbb0" stroke="none"/>
</g>
<circle cx="200" cy="118" r="34" fill="#f3f1ea" opacity=".85"/>
</svg>`;

export default {
  slug: 'beautysophy-2bmo',
  name: 'Бьютисофия',
  conceptName: 'салона «Бьютисофия»',
  title: 'Бьютисофия — салон красоты на Планерной · концепт сайта',
  description: 'Концепт сайта салона красоты «Бьютисофия» на Планерной.',
  themeColor: '#f3f1ea',
  favicon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#5e6e4f"/><path d="M16 56V30a16 16 0 0 1 32 0v26" fill="none" stroke="#f3f1ea" stroke-width="5"/></svg>',
  fonts: 'https://fonts.googleapis.com/css2?family=Forum&family=Onest:wght@400;500;600;700&display=swap',
  phone: '+7 (995) 895-28-33',
  book: { href: BOOK, label: 'Записаться', barLabel: 'Записаться' },
  nav: [['#uslugi', 'Услуги и цены'], ['#kompleksy', 'Комплексы'], ['#otzyvy', 'Отзывы'], ['#kontakty', 'Контакты']],
  logo: '<span class="arch-mark" aria-hidden="true"></span>Бьютисофия',
  footLine: 'Салон красоты · Москва, ул. Планерная, 7к1',
  footSources: 'сайт салона и карточка на Яндекс Картах',
  css: `
:root{--bg:#f3f1ea;--surface:#fbfaf6;--surface-2:#e9e8dd;--text:#262b22;--muted:#5f6656;--line:#dcdccf;--line-strong:#c9cabb;--accent:#5e6e4f;--accent-ink:#fff;--accent-text:#4f5e41;
--font-display:Forum,Georgia,serif;--font-body:Onest,system-ui,sans-serif;--display-weight:400;--display-tracking:0;--radius:18px;--radius-lg:26px;--star:#8b9a6f;--btn-radius:14px;--map-bg:#e6e6d9;
--ph-pattern:repeating-linear-gradient(45deg,transparent 0 14px,rgba(94,110,79,.07) 14px 15px)}
.logo{font-size:25px;text-transform:uppercase;letter-spacing:.08em}
.arch-mark{width:16px;height:22px;border:2px solid var(--accent);border-bottom:0;border-radius:10px 10px 0 0}
.hero{padding:clamp(36px,6vw,80px) 0 clamp(56px,8vw,100px)}
.hero .wrap{display:grid;gap:34px;align-items:center}
@media (min-width:920px){.hero .wrap{grid-template-columns:1.1fr .9fr}}
.hero h1{font-size:clamp(44px,7.6vw,88px);line-height:1;text-transform:uppercase;letter-spacing:.01em}
.hero .lead{margin-top:22px;max-width:40ch}
.hero-cta{display:flex;flex-wrap:wrap;gap:12px;margin-top:30px}
.cats{display:flex;flex-wrap:wrap;gap:8px;margin-top:28px;padding:0;list-style:none}
.cats li{border:1px solid var(--line-strong);border-radius:999px;padding:7px 14px;font-size:14px;color:var(--muted);background:var(--surface)}
.visual{position:relative;justify-self:center;width:min(100%,420px)}
.arch-art{width:100%;height:auto}
.badge{position:absolute;left:-6px;bottom:28px;background:var(--surface);border:1px solid var(--line);border-radius:16px;padding:12px 16px;box-shadow:0 18px 40px -20px rgba(38,43,34,.35);display:flex;gap:12px;align-items:center;text-decoration:none}
.badge strong{font-family:var(--font-display);font-size:34px;line-height:1}
.badge small{display:block;color:var(--muted);font-size:13px;line-height:1.3}
.badge svg{width:26px;height:26px;fill:#8b9a6f;stroke:none}
.combos{display:grid;gap:14px;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))}
.combo{position:relative;display:grid;gap:14px;align-content:space-between;background:var(--surface);border:1px solid var(--line);border-radius:var(--radius-lg);padding:28px;overflow:hidden}
.combo::after{content:"";position:absolute;right:-30px;bottom:-110px;width:150px;height:200px;border:1.5px solid color-mix(in srgb,var(--accent) 28%,transparent);border-radius:75px 75px 0 0;pointer-events:none}
.combo h3{font-size:28px;line-height:1.1}
.combo ul{margin:0;padding:0;list-style:none;display:grid;gap:6px;color:var(--muted);font-size:15px}
.combo li::before{content:"+ ";color:var(--accent-text);font-weight:700}
.combo li:first-child::before{content:""}
.combo .price{font-family:var(--font-display);font-size:40px;line-height:1}
.combo .price small{font-family:var(--font-body);font-size:14px;color:var(--muted);margin-left:8px}
.pm{margin-top:18px;background:var(--accent);color:#f3f1ea;border-radius:var(--radius-lg);padding:clamp(24px,4vw,40px);display:grid;gap:16px;align-items:center}
@media (min-width:760px){.pm{grid-template-columns:1fr auto}}
.pm h3{font-size:clamp(26px,3.4vw,36px)}
.pm p{color:#dfe4d3}
.pm .btn{background:#f3f1ea;color:var(--text)}
`,
  hero: `<section class="hero" aria-labelledby="h1"><div class="wrap">
<div>
<span class="eyebrow">Салон красоты · м. Планерная</span>
<h1 id="h1">Эстетика и&nbsp;осознанный уход</h1>
<p class="lead">Маникюр и педикюр, брови и ресницы, косметология и лазерная эпиляция. Всё в одном месте, запись онлайн — в пару касаний.</p>
<div class="hero-cta"><a class="btn btn-primary" href="${BOOK}" target="_blank" rel="noopener">${icon.cal}Записаться онлайн</a><a class="btn btn-ghost" href="#uslugi">Прайс</a></div>
<ul class="cats" aria-label="Направления"><li>Ногти</li><li>Брови и ресницы</li><li>Косметология</li><li>Эпиляция</li><li>Перманент</li></ul>
</div>
<div class="visual">${arch}<a class="badge" href="#otzyvy"><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9Z"/></svg><span><strong>5,0</strong><small>100 отзывов<br>на Яндекс Картах</small></span></a></div>
</div></section>`,
  sections: [
    priceTabs({
      title: 'Прайс по направлениям', lead: 'Выберите вкладку — цены и длительность процедур.', alt: true, bookHref: BOOK,
      cats: [
        { name: 'Маникюр и педикюр', items: [
          { n: 'Маникюр без покрытия', p: '1 300 ₽', t: '60 мин' },
          { n: 'Маникюр + снятие + покрытие гель-лак', p: '2 900 ₽', t: '120 мин' },
          { n: 'Маникюр + снятие + покрытие гель-лак «Премиум»', p: '3 400 ₽', t: '120 мин' },
          { n: 'Педикюр без покрытия', p: '2 200 ₽', t: '80 мин' },
          { n: 'Педикюр + покрытие гель-лак', p: '3 200 ₽', t: '120 мин' },
        ] },
        { name: 'Брови и ресницы', items: [
          { n: 'Коррекция бровей (воск / пинцет)', p: '900 ₽' },
          { n: 'Коррекция + окрашивание бровей краской', p: '1 600 ₽' },
          { n: 'Коррекция + окрашивание бровей хной', p: '1 800 ₽' },
          { n: 'Ламинирование бровей', p: '2 200 ₽' },
          { n: 'Ламинирование ресниц', p: '2 200 ₽' },
          { n: 'Наращивание ресниц 1D', p: '3 000 ₽' },
          { n: 'Наращивание ресниц 2D', p: '3 400 ₽' },
        ] },
        { name: 'Косметология', items: [
          { n: 'Комбинированная чистка лица', p: '3 500 ₽' },
          { n: 'Сияющий уход на выход', p: '3 500 ₽' },
        ] },
        { name: 'Эпиляция', items: [
          { n: 'Лазер: бикини', p: '1 900 ₽' },
          { n: 'Лазер: глубокое бикини', p: '1 500 ₽' },
          { n: 'Лазер: бикини + подмышки', p: '2 500 ₽' },
          { n: 'Депиляция воском: ноги полностью', p: '1 900 ₽' },
          { n: 'Депиляция: глубокое бикини', p: '1 800 ₽' },
          { n: 'Депиляция: подмышечные впадины', p: '700 ₽' },
          { n: 'Комплекс депиляции: бикини + подмышки + голени', p: '3 500 ₽' },
        ] },
        { name: 'Перманент', items: [
          { n: 'Перманентный макияж бровей или губ', p: '8 000 ₽' },
        ] },
      ],
      footNote: 'Цены — с сайта салона. Точную стоимость подтвердит администратор.',
    }),
    `<section class="sec" id="kompleksy" aria-labelledby="kompleksy-h"><div class="wrap">
<div class="sec-head reveal"><span class="eyebrow">Выгоднее вместе</span><h2 id="kompleksy-h">Комплексы</h2><p>Несколько процедур за один визит по цене комплекса.</p></div>
<div class="combos">
<article class="combo reveal"><div><h3>Руки и ноги</h3><ul style="margin-top:14px"><li>Снятие</li><li>маникюр и покрытие</li><li>педикюр гель-лак</li></ul></div><p class="price">6 000 ₽<small>180 мин</small></p></article>
<article class="combo reveal"><div><h3>Взгляд</h3><ul style="margin-top:14px"><li>Ламинирование бровей</li><li>ламинирование ресниц</li></ul></div><p class="price">4 000 ₽</p></article>
<article class="combo reveal"><div><h3>Лазер</h3><ul style="margin-top:14px"><li>Бикини</li><li>подмышки</li><li>голени</li></ul></div><p class="price">4 000 ₽</p></article>
</div>
<div class="pm reveal"><div><h3>Перманентный макияж бровей или губ</h3><p style="margin-top:8px">8 000 ₽ — запишитесь на удобное время онлайн</p></div><a class="btn" href="${BOOK}" target="_blank" rel="noopener">${icon.cal}Выбрать время</a></div>
</div></section>`,
    gallery({ title: 'Салон и работы мастеров', lead: 'Интерьер и работы: реальные фото вместо стоковых картинок.', alt: true, label: 'Здесь будут ваши фото работ и салона' }),
    ratingBlock({ rating: 5, count: 100, orgUrl: 'https://yandex.ru/maps/org/30638508264/' }),
    visitBlock({ address: 'Москва, ул. Планерная, 7к1', metro: 'м. Планерная — 410 м', hours: [['Ежедневно', '10:00–22:00']], orgId: '30638508264', seed: 5, alt: true }),
    contactsBlock({ title: 'Запись и вопросы', items: [
      { icon: 'phone', label: 'Телефон', value: '+7 (995) 895-28-33', href: 'tel:+79958952833' },
      { icon: 'wa', label: 'WhatsApp', value: 'Написать в WhatsApp', href: 'https://wa.me/79958952833' },
      { icon: 'tg', label: 'Telegram', value: '@Beautysophy_studio', href: 'https://t.me/Beautysophy_studio' },
      { icon: 'max', label: 'MAX', value: 'Написать в MAX', href: 'https://max.ru/u/f9LHodD0cOLAeUZt6TwXCqTutTzVo4g8LduU5K0lmamwPvuN1eP-yj9duOI' },
      { icon: 'mail', label: 'Почта', value: 'beautysophy@yandex.ru', href: 'mailto:beautysophy@yandex.ru' },
    ] }),
  ],
};
