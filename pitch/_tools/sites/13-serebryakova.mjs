import { icon, page, priceTabs, ratingBlock, visitBlock, contactsBlock, gallery } from '../kit.mjs';

const BOOK = 'https://n612473.yclients.com/';
const WA = 'https://wa.me/79999200297';
const TG = 'https://t.me/serebryakova_beauty_studio';

const pack = `<svg class="pack" viewBox="0 0 320 360" aria-hidden="true">
<defs><linearGradient id="sv" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".45" stop-color="#d9dde5"/><stop offset=".6" stop-color="#f4f5f8"/><stop offset="1" stop-color="#aab1bf"/></linearGradient>
<linearGradient id="kr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d8b98f"/><stop offset="1" stop-color="#b8956a"/></linearGradient></defs>
<circle cx="160" cy="180" r="150" fill="none" stroke="url(#sv)" stroke-width="10"/>
<g transform="rotate(-8 160 190)"><rect x="98" y="70" width="124" height="220" rx="8" fill="url(#kr)"/><path d="M98 110h124" stroke="#9c7b52" stroke-width="2" stroke-dasharray="6 5"/>
<rect x="116" y="140" width="88" height="44" rx="4" fill="#f4ead9"/><text x="160" y="160" text-anchor="middle" font-family="Mulish,sans-serif" font-size="11" font-weight="700" fill="#6b4f2c">СТЕРИЛЬНО</text><text x="160" y="176" text-anchor="middle" font-family="Mulish,sans-serif" font-size="10" fill="#6b4f2c">вскрываем при вас</text>
<g stroke="#8f7650" stroke-width="3" stroke-linecap="round" opacity=".7"><path d="M130 210v54M160 206v58M190 210v54"/></g></g>
<circle cx="258" cy="74" r="22" fill="#4a3f6b"/><path d="m248 74 7 7 13-14" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const STEPS = [['Дезинфекция', 'Первый этап обработки инструмента'], ['УЗ-чистка', 'Ультразвуковая очистка'], ['Сушка и упаковка', 'Инструмент запечатывают в крафт-пакет'], ['Стерилизатор ГП-10', 'Воздушный стерилизатор уничтожает микроорганизмы, включая споры']];

export default {
  slug: 'serebryakova-r1sq',
  name: 'Студия красоты Серебрякова',
  conceptName: 'студии красоты Серебряковой',
  title: 'Студия красоты Серебрякова — маникюр, ресницы, брови в Жулебино · концепт сайта',
  description: 'Концепт сайта студии красоты Серебряковой в Жулебино: стерильность, цены, онлайн-запись.',
  themeColor: '#f4f5f7',
  favicon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff"/><stop offset=".5" stop-color="#c9ced8"/><stop offset="1" stop-color="#8a94a6"/></linearGradient></defs><rect width="64" height="64" rx="32" fill="url(#g)"/><text x="32" y="43" text-anchor="middle" font-family="Georgia,serif" font-size="30" fill="#4a3f6b">С</text></svg>',
  fonts: 'https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,300;0,400;1,300&family=Mulish:wght@400;500;600;700;800&display=swap',
  phone: '+7 (980) 076-18-42',
  book: { href: BOOK, label: 'Записаться онлайн', barLabel: 'Записаться' },
  nav: [['#sterilno', 'Стерильность'], ['#uslugi', 'Цены'], ['#otzyvy', 'Отзывы'], ['#kontakty', 'Контакты']],
  logo: '<span class="silver">Серебрякова</span><small>студия красоты</small>',
  footLine: 'Маникюр, педикюр, ресницы, брови · Москва, ул. Авиаконструктора Миля, 15к1',
  footSources: 'сайт студии на Яндекс Бизнесе и карточка на Яндекс Картах',
  policyOwner: 'студии красоты Серебряковой',
  css: `
:root{--bg:#f4f5f7;--surface:#fff;--surface-2:#e9ecf0;--text:#1f2230;--muted:#5a6070;--line:#dfe3ea;--line-strong:#cbd1db;--accent:#4a3f6b;--accent-ink:#fff;--accent-text:#4a3f6b;--silver:linear-gradient(100deg,#8a94a6,#e9ecf1 30%,#9aa3b3 55%,#f5f6f8 72%,#7f889a);
--font-display:Spectral,Georgia,serif;--font-body:Mulish,system-ui,sans-serif;--display-weight:300;--display-tracking:-.02em;--radius:16px;--radius-lg:24px;--star:#8a7ab8;--map-bg:#e8ebf0;
--ph-pattern:linear-gradient(115deg,transparent 40%,rgba(255,255,255,.7) 50%,transparent 60%) 0 0/200% 100%}
.logo{flex-direction:column;align-items:flex-start;gap:0;line-height:1}
.logo small{font-family:var(--font-body);font-size:11px;letter-spacing:.24em;text-transform:uppercase;color:var(--muted);margin-top:4px}
.silver{background:linear-gradient(100deg,#3f4656,#7f889a 35%,#3a4150 58%,#6b7385);-webkit-background-clip:text;background-clip:text;color:transparent;font-size:26px;font-weight:400;-webkit-text-fill-color:transparent;filter:drop-shadow(0 1px 0 rgba(0,0,0,.15))}
@supports not (background-clip:text){.silver{color:#6b7385}}
.hero{padding:clamp(34px,6vw,84px) 0 clamp(56px,8vw,100px);background:radial-gradient(700px 400px at 80% 10%,#fff,transparent 70%),linear-gradient(180deg,#eceef3,var(--bg))}
.hero .wrap{display:grid;gap:30px;align-items:center}
@media (min-width:920px){.hero .wrap{grid-template-columns:1.1fr .9fr}}
.hero h1{font-size:clamp(46px,8vw,98px);line-height:.98}
.hero h1 em{font-style:italic;color:var(--accent-text)}
.hero .lead{margin-top:20px;max-width:42ch}
.hero-cta{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}
.pack{width:min(100%,380px);justify-self:center}
.badges{display:flex;flex-wrap:wrap;gap:8px;margin-top:24px}
.badges span{background:var(--surface);border:1px solid var(--line);border-radius:999px;padding:7px 12px;font-size:14px;font-weight:600}
.steps4{display:grid;gap:10px;grid-template-columns:repeat(2,minmax(0,1fr));counter-reset:st}
@media (min-width:900px){.steps4{grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}}
.st{position:relative;background:var(--surface);border:1px solid var(--line);border-radius:var(--radius-lg);padding:clamp(16px,3vw,26px)}
.st::before{counter-increment:st;content:"0" counter(st);font-family:var(--font-display);font-size:48px;font-weight:300;line-height:1;background:var(--silver);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;display:block;margin-bottom:10px}
.st h3{font-family:var(--font-body);font-size:clamp(15.5px,4vw,18px);font-weight:800}
.st p{color:var(--muted);font-size:clamp(13.5px,3.5vw,15px);margin-top:6px}
.kraft{margin-top:14px;display:grid;gap:16px;align-items:center;background:var(--accent);color:#fff;border-radius:var(--radius-lg);padding:clamp(22px,4vw,40px)}
@media (min-width:820px){.kraft{grid-template-columns:1fr 1fr}}
.kraft h3{font-size:clamp(26px,3.4vw,38px);font-weight:300}
.kraft ul{list-style:none;margin:0;padding:0;display:grid;gap:10px}
.kraft li{display:flex;gap:10px;align-items:flex-start;color:#e3def3}
.kraft svg{color:#c9bff0}
.brands{display:flex;flex-wrap:wrap;gap:10px;margin-top:10px}
.brands span{font-family:var(--font-display);font-size:26px;padding:10px 18px;border:1px solid var(--line-strong);border-radius:12px;background:var(--surface)}
.two{display:grid;gap:14px;margin-top:22px}
@media (min-width:820px){.two{grid-template-columns:1fr 1fr}}
`,
  hero: `<section class="hero" aria-labelledby="h1"><div class="wrap">
<div>
<span class="eyebrow">Маникюр · педикюр · ресницы · брови · Жулебино</span>
<h1 id="h1">Стерильность, <em>которую видно</em></h1>
<p class="lead">Крафт-пакет вскрываем при вас. Одноразовые расходники, воздушный стерилизатор ГП-10, вытяжки Verakso и 4blanc. В 3 минутах от метро Жулебино.</p>
<div class="hero-cta"><a class="btn btn-primary" href="${BOOK}" target="_blank" rel="noopener">${icon.cal}Записаться онлайн</a><a class="btn btn-ghost" href="#uslugi">Цены</a></div>
<div class="badges"><span>★ 5,0 · 125 отзывов</span><span>Хорошее место 2026</span><span>700+ оттенков</span></div>
</div>
${pack}
</div></section>`,
  sections: [
    `<section class="sec" id="sterilno" aria-labelledby="sterilno-h"><div class="wrap">
<div class="sec-head reveal"><span class="eyebrow">Безопасность</span><h2 id="sterilno-h">Полный цикл обработки</h2><p>Каждый инструмент проходит все этапы — и вы видите результат.</p></div>
<div class="steps4">${STEPS.map(([h, p]) => `<div class="st reveal"><h3>${h}</h3><p>${p}</p></div>`).join('')}</div>
<div class="kraft reveal"><h3>Крафт-пакет вскрываем в вашем присутствии</h3><ul>
<li>${icon.check}Одноразовые расходные материалы — без повторного использования</li>
<li>${icon.check}Вытяжки Verakso и 4blanc убирают пыль от опила и летучие вещества</li>
<li>${icon.check}Воздушный стерилизатор Ферропласт ГП-10</li>
</ul></div>
</div></section>`,
    `<section class="sec sec-alt" id="materialy" aria-labelledby="mat-h"><div class="wrap">
<div class="sec-head reveal"><span class="eyebrow">Материалы и комфорт</span><h2 id="mat-h">Более 700 оттенков на выбор</h2><p>Гель-лаки и материалы для дизайна ведущих брендов.</p></div>
<div class="brands reveal"><span>BANDI</span><span>LUXIO</span><span>ONIQ</span><span>EMi</span></div>
<div class="two">
<div class="card reveal"><h3 style="font-size:26px">Пока мастер работает</h3><p class="muted" style="margin-top:8px">Бесплатный чай и кофе, фильмы и сериалы во время процедуры.</p></div>
<div class="card reveal"><h3 style="font-size:26px">Важно знать</h3><p class="muted" style="margin-top:8px">Работаем с длиной свободного края до 1 см. Педикюр — косметическая процедура, только для здоровых стоп.</p></div>
</div>
</div></section>`,
    priceTabs({
      title: 'Цены', lead: 'Из каталога студии. Снятие чужой работы и сложный дизайн — с доплатой, её назовёт мастер.', bookHref: BOOK,
      cats: [
        { name: 'Маникюр', items: [
          { n: 'Маникюр без покрытия', d: 'Комбинированный; снятие покрытия не входит', p: '2 000 ₽' },
          { n: 'Снятие + маникюр без покрытия', p: '3 000 ₽' },
          { n: 'Маникюр + бондирование Arnelle', d: 'Бескислотное покрытие с кератином и витаминами A и E', p: '3 000 ₽' },
          { n: 'Снятие + маникюр + бондирование Arnelle', p: '3 500 ₽' },
          { n: 'Маникюр с покрытием гель-лак в один тон', p: '4 000 ₽' },
          { n: 'Маникюр с покрытием, френч или дизайн', d: 'До 4 ногтей — 4 000 ₽, больше — 4 500–5 000 ₽', p: 'от 4 000 ₽' },
          { n: 'Маникюр с покрытием «Аэрография»', p: '5 000 ₽' },
          { n: 'Мужской маникюр', d: 'Комбинированный, без покрытия', p: '2 500 ₽' },
        ] },
        { name: 'Педикюр', items: [
          { n: 'Экспресс-педикюр без покрытия', d: 'Без обработки стоп', p: '3 000 ₽' },
          { n: 'Экспресс-педикюр с покрытием', p: '3 500 ₽' },
          { n: 'Smart-педикюр без покрытия', p: '3 500 ₽' },
          { n: 'Smart-педикюр с покрытием в один тон', p: '4 000 ₽' },
          { n: 'Smart-педикюр с френчем', p: '4 500 ₽' },
          { n: 'Педикюр с бондированием Arnelle', p: '4 000 ₽' },
          { n: 'Препаратный педикюр Straderm', p: '4 000 ₽' },
          { n: 'Препаратный педикюр Straderm с покрытием', p: '4 500 ₽' },
          { n: 'Мужской педикюр', p: '4 500 ₽' },
        ] },
        { name: 'Комплексы', items: [
          { n: 'Маникюр с покрытием в один тон + педикюр', d: 'Около 3–4 часов', p: '8 000 ₽' },
          { n: 'Маникюр с покрытием + препаратный педикюр Straderm', p: '8 500 ₽' },
          { n: 'Маникюр с френчем или дизайном + педикюр', p: '8 500 ₽' },
          { n: 'Укрепление гелем, френч или дизайн + педикюр Straderm', p: '9 000 ₽' },
          { n: 'Наращивание в один тон + педикюр', p: '10 000 ₽' },
          { n: 'Наращивание с френчем или дизайном + педикюр', p: '10 500 ₽' },
        ] },
        { name: 'Наращивание', items: [
          { n: 'Наращивание с покрытием в один тон', p: '6 000 ₽' },
          { n: 'Наращивание с дизайном', p: '6 500 ₽' },
          { n: 'Коррекция наращенных ногтей в один тон', p: '5 000 ₽' },
          { n: 'Коррекция наращенных ногтей с дизайном', p: '7 500 ₽' },
          { n: 'Дизайн или френч к маникюру', d: 'До 4 ногтей; больше 4 — 1 000–2 000 ₽', p: '500 ₽' },
        ] },
        { name: 'Ресницы', items: [
          { n: 'Наращивание: классический объём', p: '3 500 ₽' },
          { n: 'Наращивание 1,5–2D', p: '3 800 ₽' },
          { n: 'Наращивание 2,5–3D', p: '4 100 ₽' },
          { n: 'Наращивание 4D', p: '4 400 ₽' },
          { n: 'Наращивание 5D', p: '4 700 ₽' },
          { n: 'Наращивание в уголках глаз', p: '3 000 ₽' },
          { n: 'Нижние ресницы', d: 'Полное заполнение — 2 000 ₽', p: '1 500 ₽' },
          { n: 'Дополнительный эффект или лучи', d: 'Мокрый, полумокрый, цветные ресницы', p: '500 ₽' },
          { n: 'Ламинирование ресниц + ботокс', p: '3 500 ₽' },
        ] },
        { name: 'Брови', items: [
          { n: 'Ламинирование бровей', d: 'Без коррекции и окрашивания', p: '2 500 ₽' },
          { n: 'Ламинирование, коррекция и окрашивание', p: '3 500 ₽' },
          { n: 'Коррекция и окрашивание краской', p: '2 000 ₽' },
          { n: 'Коррекция пинцетом или воском', p: '1 000 ₽' },
          { n: 'Окрашивание бровей краской', p: '1 000 ₽' },
          { n: 'Окрашивание ресниц', p: '1 000 ₽' },
          { n: 'Прореживание бровей', p: '600 ₽' },
          { n: 'Мужская коррекция бровей', p: '1 500 ₽' },
        ] },
        { name: 'Перманент', items: [
          { n: 'Пудровое напыление бровей', p: '10 000 ₽' },
          { n: 'Перманентный макияж губ', p: '10 000 ₽' },
          { n: 'Коррекция перманентного макияжа', p: '6 000 ₽' },
        ] },
      ],
    }),
    gallery({ title: 'Работы мастеров', lead: 'Маникюр, ресницы, брови — реальные фото вместо стоковых.', alt: true }),
    ratingBlock({ rating: 5, count: 125, orgUrl: 'https://yandex.ru/maps/org/181394309384/', award: true }),
    visitBlock({ address: 'Москва, ул. Авиаконструктора Миля, 15к1', metro: 'м. Жулебино — 350 м, 3 минуты пешком', hours: [['Ежедневно', 'круглосуточно, по записи']], orgId: '181394309384', seed: 41, alt: true,
      extra: `<li>${icon.info}<div><b>Точный адрес</b>Схему проезда пришлём при записи</div></li>` }),
    contactsBlock({ title: 'Запись и вопросы', items: [
      { icon: 'cal', label: 'Онлайн-запись', value: 'YCLIENTS', href: BOOK },
      { icon: 'phone', label: 'Телефон', value: '+7 (980) 076-18-42', href: 'tel:+79800761842' },
      { icon: 'wa', label: 'WhatsApp', value: 'Написать в WhatsApp', href: WA },
      { icon: 'tg', label: 'Telegram', value: '@serebryakova_beauty_studio', href: TG },
      { icon: 'vk', label: 'ВКонтакте', value: 'Страница студии', href: 'https://vk.ru/serebryakova_beauty_studio' },
    ] }),
  ],
};
