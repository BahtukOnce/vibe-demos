import { icon, page, priceTabs, ratingBlock, visitBlock, contactsBlock, gallery, demoMsg } from '../kit.mjs';

const BOOK = 'https://dikidi.net/733759?p=0.pi';
const WA = 'https://wa.me/79250511939';
const TG = 'https://t.me/+79250511939';

export default {
  slug: 'nanails-dw7t',
  name: 'NaNails beauty',
  conceptName: 'студии «NaNails beauty»',
  title: 'NaNails beauty — студия и школа маникюра на Покровке · концепт сайта',
  description: 'Концепт сайта NaNails beauty: студия маникюра и школа мастеров на Покровке.',
  themeColor: '#f6f4fb',
  favicon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="18" fill="#6446c8"/><text x="32" y="43" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="26" fill="#fff">Na</text></svg>',
  fonts: 'https://fonts.googleapis.com/css2?family=Tenor+Sans&family=PT+Sans:wght@400;700&display=swap',
  phone: '+7 (925) 051-19-39',
  book: { href: BOOK, label: 'Записаться', barLabel: 'Записаться' },
  nav: [['#uslugi', 'Услуги'], ['#shkola', 'Школа'], ['#otzyvy', 'Отзывы'], ['#kak-dobratsya', 'Адрес']],
  logo: '<span>Na<span class="nails">Nails</span> beauty</span>',
  footLine: 'Студия и школа маникюра · Москва, ул. Покровка, 31с2',
  footSources: 'сайт студии на Яндекс Бизнесе и карточка на Яндекс Картах',
  policyOwner: 'студии NaNails beauty',
  css: `
:root{--bg:#f6f4fb;--surface:#fff;--surface-2:#ece8f7;--text:#1e1b2b;--muted:#5b5670;--line:#e4dff2;--line-strong:#d3cbea;--accent:#6446c8;--accent-ink:#fff;--accent-text:#5a3dbd;
--font-display:"Tenor Sans",system-ui,sans-serif;--font-body:"PT Sans",system-ui,sans-serif;--display-weight:400;--display-tracking:-.01em;--radius:18px;--radius-lg:28px;--star:#8b6cf0;--map-bg:#ebe7f6;
--ph-pattern:radial-gradient(circle at 30% 30%,rgba(100,70,200,.12) 0 4px,transparent 5px) 0 0/20px 20px}
body{font-size:17px}
.logo{font-size:24px}
.logo .nails{color:var(--accent-text)}
.hero{position:relative;overflow:hidden;padding:clamp(34px,6vw,80px) 0 clamp(56px,8vw,100px);background:radial-gradient(600px 380px at 90% 10%,#e2dafb,transparent 70%),radial-gradient(500px 300px at 0 90%,#f3e8fb,transparent 70%)}
.seg{display:inline-grid;grid-template-columns:1fr 1fr;background:var(--surface);border:1px solid var(--line-strong);border-radius:999px;padding:4px;margin-bottom:26px}
.seg button{border:0;background:transparent;border-radius:999px;padding:10px 20px;font-weight:700;font-size:15px;cursor:pointer;min-height:44px;color:var(--muted)}
.seg button[aria-selected="true"]{background:var(--text);color:#fff}
.hero h1{font-size:clamp(42px,7.4vw,90px);line-height:1.02;max-width:14ch}
.hero .lead{margin-top:20px;max-width:42ch}
.hero-cta{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}
.hero-panel[hidden]{display:none}
.blobs{position:absolute;right:max(20px,6vw);top:120px;width:260px;height:260px;pointer-events:none;opacity:.9}
@media (max-width:1000px){.blobs{display:none}}
.pillrow{display:flex;flex-wrap:wrap;gap:8px;margin-top:24px}
.pillrow span{background:var(--surface);border:1px solid var(--line);border-radius:999px;padding:7px 13px;font-size:14px}
.school{display:grid;gap:14px;grid-template-columns:repeat(auto-fit,minmax(min(100%,270px),1fr))}
.course{display:grid;gap:12px;align-content:space-between;background:var(--surface);border:1px solid var(--line);border-radius:var(--radius-lg);padding:26px}
.course.main{background:var(--text);color:#fff;border-color:var(--text)}
.course.main p{color:#c9c3dd}
.course h3{font-size:26px}
.course p{color:var(--muted)}
.course .pr{font-family:var(--font-display);font-size:34px}
.course .meta{font-size:14px;color:var(--muted)}
.course.main .meta{color:#b6aee0}
.lead-form{margin-top:18px}
`,
  hero: `<section class="hero" aria-labelledby="h1"><div class="wrap">
<svg class="blobs" viewBox="0 0 200 200" aria-hidden="true"><defs><linearGradient id="bl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#b9a6ff"/><stop offset="1" stop-color="#6446c8"/></linearGradient></defs>${[0, 1, 2, 3, 4].map((i) => `<rect x="${30 + i * 30}" y="${40 + (i % 2) * 18}" width="24" height="${90 - Math.abs(2 - i) * 10}" rx="12" fill="url(#bl)" opacity="${0.55 + i * 0.09}" transform="rotate(${-12 + i * 6} ${42 + i * 30} 100)"/>`).join('')}</svg>
<div class="seg" role="tablist" aria-label="Студия или школа"><button role="tab" id="t-studio" aria-selected="true" aria-controls="p-studio">Студия</button><button role="tab" id="t-school" aria-selected="false" aria-controls="p-school" tabindex="-1">Школа</button></div>
<div class="hero-panel" id="p-studio" role="tabpanel" aria-labelledby="t-studio">
<span class="eyebrow">Студия маникюра · Покровка</span>
<h1 id="h1">Маникюр в центре Москвы</h1>
<p class="lead">Маникюр и педикюр, наращивание и дизайн — френч, омбре, втирка, стемпинг. Запись онлайн, ежедневно с 10:00 до 22:00.</p>
<div class="hero-cta"><a class="btn btn-primary" href="${BOOK}" target="_blank" rel="noopener">${icon.cal}Записаться онлайн</a><a class="btn btn-ghost" href="#uslugi">Цены</a></div>
</div>
<div class="hero-panel" id="p-school" role="tabpanel" aria-labelledby="t-school" hidden>
<span class="eyebrow">Школа маникюра</span>
<p class="h1like" style="font-family:var(--font-display);font-size:clamp(42px,7.4vw,90px);line-height:1.02;max-width:14ch">Станьте мастером маникюра</p>
<p class="lead">Базовый курс «Маникюр 2 в 1» — за 7 дней. Стажировка на 10 моделях. Школа — при студии на Покровке.</p>
<div class="hero-cta"><a class="btn btn-primary" href="#shkola">Выбрать курс${icon.arrow}</a><a class="btn btn-ghost" href="${WA}" target="_blank" rel="noopener">${icon.wa}Спросить в WhatsApp</a></div>
</div>
<div class="pillrow"><span>★ 5,0 · 165 отзывов</span><span>Хорошее место 2026</span><span>Подарочные сертификаты</span></div>
</div></section>`,
  sections: [
    priceTabs({
      title: 'Услуги и цены', eyebrow: 'Студия', lead: 'Цены из каталога студии.', alt: true, bookHref: BOOK,
      cats: [
        { name: 'Маникюр', items: [
          { n: 'Маникюр комбинированный без покрытия', p: '1 800 ₽' },
          { n: 'Маникюр аппаратный без покрытия', p: '1 800 ₽' },
          { n: 'Маникюр комбинированный с покрытием', p: '2 600 ₽' },
          { n: 'Мужской маникюр', p: '1 700 ₽' },
          { n: 'Покрытие ногтей (лак)', p: '300 ₽' },
          { n: 'Снятие гель-лака', p: '400 ₽' },
          { n: 'Укрепление ногтей гелем', p: '700 ₽' },
          { n: 'Укрепление акриловой пудрой', p: '50 ₽', ps: 'за 1 шт.' },
          { n: 'IBX-система для ногтей', p: '500 ₽' },
          { n: 'Ремонт ногтя', p: '150 ₽', ps: 'за 1 шт.' },
        ] },
        { name: 'Комплексы', items: [
          { n: 'Снятие гель-лака + маникюр с покрытием', p: '2 800 ₽' },
          { n: 'Снятие + укрепление + маникюр с покрытием', p: '3 500 ₽' },
        ] },
        { name: 'Дизайн', items: [
          { n: 'Френч', p: '500 ₽' }, { n: 'Лунный маникюр', p: '500 ₽' }, { n: 'Омбре', p: '500 ₽' }, { n: 'Втирка', p: '500 ₽' }, { n: '«Кошачий глаз»', p: '300 ₽' },
          { n: 'Дизайн ногтей, стемпинг, фольга, блёстки, стразы, слайдеры', p: 'от 100 ₽' },
          { n: 'Топ молочный или матовый', p: '300 ₽' }, { n: 'Топ с шиммером или светоотражающий', p: '100 ₽' },
        ] },
        { name: 'Наращивание', items: [
          { n: 'Наращивание ногтей', p: '4 000 ₽' }, { n: 'Коррекция нарощенных ногтей', p: '3 300 ₽' }, { n: 'Снятие нарощенных ногтей', p: '500 ₽' },
        ] },
        { name: 'Педикюр', items: [
          { n: 'Смарт-педикюр без покрытия', p: '3 000 ₽' }, { n: 'Смарт-педикюр с покрытием', p: '3 600 ₽' }, { n: 'Мужской педикюр', p: '3 000 ₽' },
        ] },
        { name: 'Уход и брови', items: [
          { n: 'Парафинотерапия для рук', p: '500 ₽' }, { n: 'Парафинотерапия для ног', p: '700 ₽' },
          { n: 'Брови: коррекция пинцетом или воском, ламинирование, архитектура', p: 'по запросу' },
        ] },
      ],
    }),
    `<section class="sec" id="shkola" aria-labelledby="shkola-h"><div class="wrap">
<div class="sec-head reveal"><span class="eyebrow">Школа</span><h2 id="shkola-h">Обучение маникюру</h2><p>Школа при студии на Покровке: базовый курс, стажировка и отдельные направления.</p></div>
<div class="school">
<article class="course main reveal"><div><p class="meta">Базовый курс · 7 дней</p><h3 style="margin-top:8px">Маникюр 2 в 1</h3><p style="margin-top:10px">Для тех, кто начинает с нуля.</p></div><div><p class="pr">30 000 ₽</p></div></article>
<article class="course reveal"><div><p class="meta">Практика · 10 моделей</p><h3 style="margin-top:8px">Мастер маникюра: стажировка</h3><p style="margin-top:10px">В курс входят 10 моделей.</p></div><div><p class="pr">25 000 ₽</p></div></article>
<article class="course reveal"><div><p class="meta">4 дня</p><h3 style="margin-top:8px">Наращивание ногтей</h3><p style="margin-top:10px">Цену и даты уточните у школы.</p></div><div><p class="pr" style="font-size:24px">по запросу</p></div></article>
<article class="course reveal"><div><p class="meta">Курс</p><h3 style="margin-top:8px">Смарт-педикюр</h3><p style="margin-top:10px">Цену и даты уточните у школы.</p></div><div><p class="pr" style="font-size:24px">по запросу</p></div></article>
</div>
<form class="card form lead-form reveal" data-demo novalidate>
<h3 style="font-size:24px">Хочу на курс</h3>
<div class="row2"><div class="field"><label for="c-course">Курс</label><select class="input" id="c-course" name="course"><option>Маникюр 2 в 1</option><option>Стажировка</option><option>Наращивание ногтей</option><option>Смарт-педикюр</option></select></div>
<div class="field"><label for="c-tel">Телефон</label><input class="input" id="c-tel" name="tel" type="tel" inputmode="tel" autocomplete="tel" placeholder="+7"></div></div>
<button class="btn btn-primary" type="submit">Узнать даты старта</button>
<p class="consent">Нажимая кнопку, вы соглашаетесь с <a href="#" data-policy>политикой обработки персональных данных</a>.</p>
${demoMsg('Это демо: заявка не отправлена. На рабочем сайте она придёт в студию.')}
</form>
</div></section>`,
    gallery({ title: 'Работы студии и учеников', lead: 'Дизайн, наращивание, френч — реальные фото вместо стоковых.', alt: true }),
    ratingBlock({ rating: 5, count: 165, orgUrl: 'https://yandex.ru/maps/org/53229101391/', award: true }),
    visitBlock({ address: 'Москва, ул. Покровка, 31с2', metro: 'м. Курская — 970 м', hours: [['Ежедневно', '10:00–22:00']], orgId: '53229101391', seed: 37, alt: true }),
    contactsBlock({ title: 'Напишите нам', items: [
      { icon: 'cal', label: 'Онлайн-запись', value: 'DIKIDI', href: BOOK },
      { icon: 'phone', label: 'Телефон', value: '+7 (925) 051-19-39', href: 'tel:+79250511939' },
      { icon: 'wa', label: 'WhatsApp', value: 'Написать в WhatsApp', href: WA },
      { icon: 'tg', label: 'Telegram', value: 'Написать в Telegram', href: TG },
      { icon: 'vk', label: 'ВКонтакте', value: 'Группа студии', href: 'https://vk.ru/club174002867' },
    ] }),
  ],
  js: `
(function(){
  var tabs=[document.getElementById('t-studio'),document.getElementById('t-school')];
  tabs.forEach(function(t,i){t.addEventListener('click',function(){tabs.forEach(function(x,j){x.setAttribute('aria-selected',i===j);x.tabIndex=i===j?0:-1;document.getElementById(x.getAttribute('aria-controls')).hidden=i!==j;});});
  t.addEventListener('keydown',function(e){if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();var n=tabs[1-i];n.click();n.focus();}});});
})();`,
};
