import fs from 'fs';
import { icon, page, ratingBlock, visitBlock, contactsBlock, demoMsg } from '../kit.mjs';

const catalog = JSON.parse(fs.readFileSync(new URL('../data/flowzenda-catalog.json', import.meta.url), 'utf8'));
const WA = 'https://wa.me/79252307930';
const TG = 'https://t.me/flowzendaa';

const heroBouquet = `<svg class="bq" viewBox="0 0 420 460" aria-hidden="true">
<g stroke="#3f6b55" stroke-width="3" stroke-linecap="round" fill="none" opacity=".8"><path d="M210 440c-6-90-40-160-88-214"/><path d="M210 440c2-100 8-170 20-236"/><path d="M210 440c14-86 52-150 104-196"/><path d="M210 440c-22-70-60-110-120-140"/></g>
<g fill="#8fb39c"><path d="M150 300c-34-2-62 14-76 44 34 4 60-10 76-44Z"/><path d="M292 292c30-12 60-6 80 18-30 12-58 6-80-18Z"/><path d="M236 250c8-30 30-50 62-54-4 32-26 52-62 54Z"/></g>
${[[120, 190, 58, '#f2c3cc'], [230, 150, 70, '#e8a0af'], [320, 215, 54, '#f6dde2'], [175, 245, 48, '#d97a8e'], [270, 262, 46, '#fbe9ec'], [95, 270, 36, '#f7d4da']].map(([x, y, r, c], i) => `<g transform="translate(${x} ${y})">${Array.from({ length: 8 }, (_, k) => `<ellipse rx="${r * 0.46}" ry="${r * 0.26}" cx="${r * 0.42}" transform="rotate(${k * 45 + i * 11})" fill="${c}" opacity=".92"/>`).join('')}<circle r="${r * 0.22}" fill="#fff" opacity=".7"/><circle r="${r * 0.12}" fill="#c9687d" opacity=".55"/></g>`).join('')}
<g fill="#fff" opacity=".9"><circle cx="300" cy="120" r="5"/><circle cx="140" cy="120" r="4"/><circle cx="360" cy="160" r="3"/></g>
</svg>`;

const CATS = [['all', 'Все'], ['avtor', 'Авторские букеты'], ['kompoz', 'Композиции: боксы, корзины, кашпо'], ['mono', 'Моно-букеты'], ['svad', 'Свадебные']];
const PRICES = [['all', 'Любая цена'], ['0-5000', 'до 5 000 ₽'], ['5000-10000', '5–10 тыс. ₽'], ['10000-20000', '10–20 тыс. ₽'], ['20000-99999', 'от 20 тыс. ₽']];

export default {
  slug: 'flowzenda-id66',
  name: 'Flowzenda',
  conceptName: 'цветочного магазина «Flowzenda»',
  title: 'Flowzenda — авторские букеты у Арбата · концепт сайта',
  description: 'Концепт сайта цветочного магазина Flowzenda: каталог букетов с фильтрами и заказом.',
  themeColor: '#fffcfa',
  favicon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="18" fill="#fbeef0"/><g transform="translate(32 30)" fill="#e8a0af">' + Array.from({ length: 6 }, (_, k) => `<ellipse rx="11" ry="6" cx="10" transform="rotate(${k * 60})"/>`).join('') + '</g><circle cx="32" cy="30" r="5" fill="#3f6b55"/></svg>',
  fonts: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;1,500&family=Raleway:wght@400;500;600;700&display=swap',
  phone: '+7 (925) 230-79-30',
  book: { href: '#katalog', label: 'Выбрать букет', barLabel: 'Выбрать букет' },
  barIcon: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="9" r="4"/><path d="M12 13v8M8 18c2 0 4 1 4 3M16 18c-2 0-4 1-4 3"/></svg>',
  nav: [['#katalog', 'Каталог'], ['#zakaz', 'Заказ'], ['#otzyvy', 'Отзывы'], ['#kak-dobratsya', 'Адрес']],
  logo: 'Flowzenda',
  footLine: 'Магазин цветов · Большой Афанасьевский пер., 31',
  footSources: 'сайт магазина на Яндекс Бизнесе и карточка на Яндекс Картах',
  policyOwner: 'магазина Flowzenda',
  css: `
:root{--bg:#fffcfa;--surface:#fff;--surface-2:#f8efec;--text:#23302a;--muted:#5c6b63;--line:#efe3df;--line-strong:#e2d2cd;--accent:#3f6b55;--accent-ink:#fff;--accent-text:#3a634e;--pink:#e8a0af;
--font-display:Lora,Georgia,serif;--font-body:Raleway,system-ui,sans-serif;--display-weight:500;--display-tracking:-.01em;--radius:22px;--radius-lg:32px;--star:#e8a0af;--map-bg:#f6eeeb;
--ph-pattern:radial-gradient(circle at 50% 50%,rgba(232,160,175,.25) 0 6px,transparent 7px) 0 0/28px 28px}
body{font-weight:500}
.logo{font-style:italic;font-size:26px}
.hero{position:relative;overflow:hidden;padding:clamp(36px,6vw,84px) 0 clamp(40px,6vw,80px);background:radial-gradient(700px 360px at 90% 0,#fbe7eb 0,transparent 70%),radial-gradient(600px 300px at 0 100%,#eef5ef 0,transparent 70%)}
.hero .wrap{display:grid;gap:22px;align-items:center}
@media (min-width:920px){.hero .wrap{grid-template-columns:1.05fr .95fr}}
.hero h1{font-size:clamp(44px,7.8vw,92px);line-height:1}
.hero h1 em{color:var(--accent-text)}
.hero .lead{margin-top:20px;max-width:38ch}
.hero-cta{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}
.meta{display:flex;flex-wrap:wrap;gap:10px 18px;margin-top:26px;font-size:15px;color:var(--muted)}
.meta span{display:inline-flex;gap:8px;align-items:center}
.meta svg{color:var(--accent-text)}
.meta .st{fill:var(--pink);stroke:none}
.bq{width:min(100%,440px);height:auto;justify-self:center;animation:sway 8s ease-in-out infinite;transform-origin:50% 95%}
@keyframes sway{50%{transform:rotate(1.5deg)}}
.filters{display:grid;gap:12px;margin-bottom:22px}
.filters .chips{flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none;margin:0 -20px;padding:2px 20px}
.filters .chips::-webkit-scrollbar{display:none}
.filters .chip{flex:none}
.frow{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap}
.count{font-size:15px;color:var(--muted)}
.sort{min-height:44px;border-radius:999px;border:1.5px solid var(--line-strong);background:var(--surface);padding:0 14px;font-weight:600}
.grid{display:grid;gap:16px;grid-template-columns:repeat(2,minmax(0,1fr))}
@media (min-width:760px){.grid{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media (min-width:1080px){.grid{grid-template-columns:repeat(4,minmax(0,1fr))}}
.item{display:flex;flex-direction:column;background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;transition:transform .25s,box-shadow .25s}
.item:hover{transform:translateY(-3px);box-shadow:0 20px 40px -24px rgba(35,48,42,.35)}
.item .pic{position:relative;aspect-ratio:4/5;background:linear-gradient(160deg,#fdf3f4,#f3ece6)}
.item .pic svg{position:absolute;inset:0;width:100%;height:100%}
.item .pic small{position:absolute;left:10px;bottom:10px;background:rgba(255,255,255,.85);border-radius:999px;padding:3px 9px;font-size:11px;color:var(--muted)}
.item .body{display:flex;flex-direction:column;gap:6px;padding:14px 14px 16px;flex:1}
.item h3{font-size:19px}
.item .comp{font-size:13px;color:var(--muted);display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
.item .ifoot{margin-top:auto;display:flex;align-items:center;justify-content:space-between;gap:8px;padding-top:8px}
.item .pr{font-weight:700;font-size:17px;white-space:nowrap}
.item .btn{min-height:40px;padding:0 14px;font-size:14px}
@media (max-width:420px){.item .ifoot{flex-direction:column;align-items:stretch}.item .btn{width:100%}}
.more{display:flex;justify-content:center;margin-top:24px}
.empty{padding:40px;text-align:center;color:var(--muted);border:1px dashed var(--line-strong);border-radius:var(--radius)}
.order{display:grid;gap:22px}
@media (min-width:920px){.order{grid-template-columns:.8fr 1.2fr;align-items:start}}
.order-aside{display:grid;gap:14px}
.order-aside .card p{color:var(--muted)}
.seg{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.seg label{display:flex;align-items:center;justify-content:center;gap:8px;min-height:52px;border-radius:14px;border:1.5px solid var(--line-strong);cursor:pointer;font-weight:600;background:var(--surface)}
.seg input{position:absolute;opacity:0;pointer-events:none}
.seg input:checked+span{color:var(--accent-text)}
.seg label:has(input:checked){border-color:var(--accent);background:color-mix(in srgb,var(--accent) 8%,var(--surface))}
.seg label:has(input:focus-visible){outline:3px solid var(--accent);outline-offset:2px}
`,
  hero: `<section class="hero" aria-labelledby="h1"><div class="wrap">
<div>
<span class="eyebrow">Магазин цветов · у Арбата</span>
<h1 id="h1">Букеты с <em>характером</em></h1>
<p class="lead">Авторские букеты, композиции в боксах и корзинах, моно-букеты и свадебная флористика. Каталог с ценами и составом.</p>
<div class="hero-cta"><a class="btn btn-primary" href="#katalog">Смотреть каталог${icon.arrow}</a><a class="btn btn-ghost" href="${TG}" target="_blank" rel="noopener">${icon.tg}Написать флористу</a></div>
<div class="meta"><a href="#otzyvy" style="text-decoration:none"><span><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path class="st" d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9Z"/></svg><strong>5,0</strong> · 78 отзывов на Яндекс Картах</span></a><span>${icon.clock}Ежедневно 8:00–20:00</span></div>
</div>
${heroBouquet}
</div></section>`,
  sections: [
    `<section class="sec" id="katalog" aria-labelledby="katalog-h" style="padding-top:clamp(40px,6vw,72px)"><div class="wrap">
<div class="sec-head reveal"><span class="eyebrow">Каталог</span><h2 id="katalog-h">${catalog.length} букетов и композиций</h2><p>Фильтруйте по типу и бюджету. Цены и составы — из актуального каталога магазина.</p></div>
<div class="filters" role="group" aria-label="Фильтры каталога">
<div class="chips" id="f-cat">${CATS.map(([k, t], i) => `<button type="button" class="chip" data-v="${k}" aria-pressed="${i === 0}">${t}</button>`).join('')}</div>
<div class="chips" id="f-price">${PRICES.map(([k, t], i) => `<button type="button" class="chip" data-v="${k}" aria-pressed="${i === 0}">${t}</button>`).join('')}</div>
<div class="frow"><p class="count" id="f-count" aria-live="polite"></p><label class="sr" for="f-sort">Сортировка</label><select class="sort" id="f-sort"><option value="new">Сначала новые</option><option value="asc">Сначала дешевле</option><option value="desc">Сначала дороже</option></select></div>
</div>
<div class="grid" id="grid"></div>
<div class="more"><button type="button" class="btn btn-ghost" id="more">Показать ещё</button></div>
</div></section>`,
    `<section class="sec sec-alt" id="zakaz" aria-labelledby="zakaz-h"><div class="wrap">
<div class="sec-head reveal"><span class="eyebrow">Заказ</span><h2 id="zakaz-h">Оформить за минуту</h2><p>Выберите букет, способ получения и напишите текст открытки.</p></div>
<div class="order">
<div class="order-aside reveal">
<div class="card"><h3 style="font-size:24px">Нужен другой букет?</h3><p style="margin-top:8px">Пришлите референс флористу — в Telegram или WhatsApp.</p><div class="btn-row" style="margin-top:16px"><a class="btn btn-primary btn-sm" href="${TG}" target="_blank" rel="noopener">${icon.tg}Telegram</a><a class="btn btn-ghost btn-sm" href="${WA}" target="_blank" rel="noopener">${icon.wa}WhatsApp</a></div></div>
<div class="card"><h3 style="font-size:24px">Самовывоз</h3><p style="margin-top:8px">Большой Афанасьевский пер., 31. Ежедневно с 8:00 до 20:00.</p></div>
</div>
<form class="card form reveal" data-demo novalidate>
<div class="field"><label for="o-item">Букет</label><select class="input" id="o-item" name="item"><option value="">Выберите из каталога</option>${catalog.map((x) => `<option>${x.n} — ${x.p.toLocaleString('ru-RU').replace(/ /g, ' ')} ₽</option>`).join('')}<option>Другой — по референсу</option></select></div>
<div class="field"><span class="lbl" id="o-how">Получение</span><div class="seg" role="radiogroup" aria-labelledby="o-how"><label><input type="radio" name="how" value="delivery" checked><span>Доставка</span></label><label><input type="radio" name="how" value="pickup"><span>Самовывоз</span></label></div></div>
<div class="row2"><div class="field"><label for="o-date">Дата</label><input class="input" id="o-date" name="date" type="date"></div><div class="field"><label for="o-time">Время</label><input class="input" id="o-time" name="time" type="time" min="08:00" max="20:00" value="12:00"></div></div>
<div class="field" id="o-addr-f"><label for="o-addr">Адрес доставки</label><input class="input" id="o-addr" name="addr" autocomplete="street-address" placeholder="Улица, дом, квартира"></div>
<div class="field"><label for="o-card">Текст открытки</label><textarea class="input" id="o-card" name="card" placeholder="Необязательно"></textarea></div>
<div class="row2"><div class="field"><label for="o-name">Ваше имя</label><input class="input" id="o-name" name="name" autocomplete="name"></div><div class="field"><label for="o-tel">Телефон</label><input class="input" id="o-tel" name="tel" type="tel" inputmode="tel" autocomplete="tel" placeholder="+7"></div></div>
<button class="btn btn-primary btn-block" type="submit">Отправить заказ</button>
<p class="consent">Стоимость доставки и итоговую сумму подтвердит флорист. Нажимая кнопку, вы соглашаетесь с <a href="#" data-policy>политикой обработки персональных данных</a>.</p>
${demoMsg('Это демо: заказ не отправлен. На рабочем сайте заявка придёт флористу в мессенджер.')}
</form>
</div></div></section>`,
    ratingBlock({ rating: 5, count: 78, orgUrl: 'https://yandex.ru/maps/org/81809657173/', award: true }),
    visitBlock({ address: 'Москва, Большой Афанасьевский пер., 31', metro: 'м. Кропоткинская — 720 м', hours: [['Ежедневно', '8:00–20:00']], orgId: '81809657173', seed: 7, alt: true }),
    contactsBlock({ title: 'Флорист на связи', items: [
      { icon: 'phone', label: 'Телефон', value: '+7 (925) 230-79-30', href: 'tel:+79252307930' },
      { icon: 'tg', label: 'Telegram', value: '@flowzendaa', href: TG },
      { icon: 'wa', label: 'WhatsApp', value: 'Написать в WhatsApp', href: WA },
      { icon: 'mail', label: 'Почта', value: 'Lisabelenic@gmail.com', href: 'mailto:Lisabelenic@gmail.com' },
    ] }),
  ],
  js: `
(function(){
  var data=${JSON.stringify(catalog.map((x) => [x.n, x.p, x.c, x.d]))};
  var grid=document.getElementById('grid'),more=document.getElementById('more'),count=document.getElementById('f-count');
  var step=window.innerWidth<760?6:12;var st={cat:'all',price:'all',sort:'new',shown:step};
  var pal=[['#f2c3cc','#e8a0af','#d97a8e'],['#f6dde2','#fbe9ec','#e9b7c0'],['#f3d9b1','#f7e7cc','#e7b57e'],['#dfe7f6','#c8d5ef','#aebfe6'],['#fbe3d6','#f5c6ae','#e9a488'],['#efe0f2','#dcc3e3','#c7a2d1']];
  function art(i,c){
    var p=pal[i%pal.length],s='',k,j,n=c==='mono'?5:c==='kompoz'?7:6,base=c==='kompoz'?'<rect x="46" y="150" width="108" height="56" rx="10" fill="#eadfd6"/>':'<path d="M100 200 C 96 170 88 150 76 130M100 200C102 168 106 150 118 128M100 200c-10-24-24-38-44-48" stroke="#3f6b55" stroke-width="3" fill="none" stroke-linecap="round"/>';
    for(k=0;k<n;k++){var x=100+Math.cos(k*2.4+i)*34*(k%3?1:.35),y=(c==='kompoz'?112:96)+Math.sin(k*2.4+i)*26*(k%3?1:.35),r=18+((i+k)%3)*5,col=p[k%3];s+='<g transform="translate('+x.toFixed(1)+' '+y.toFixed(1)+')">';for(j=0;j<6;j++)s+='<ellipse rx="'+(r*.5).toFixed(1)+'" ry="'+(r*.3).toFixed(1)+'" cx="'+(r*.42).toFixed(1)+'" transform="rotate('+(j*60+k*13)+')" fill="'+col+'"/>';s+='<circle r="'+(r*.2).toFixed(1)+'" fill="#fff" opacity=".75"/></g>';}
    var leaves='<path d="M58 132c-18-2-30 6-36 20 18 2 30-6 36-20Z" fill="#9dbca8"/><path d="M142 128c16-6 30-2 40 10-16 6-30 2-40-10Z" fill="#9dbca8"/>';
    return '<svg viewBox="0 0 200 240" preserveAspectRatio="xMidYMid meet" aria-hidden="true">'+base+leaves+s+'</svg>';
  }
  function fmt(n){return n.toLocaleString('ru-RU').replace(/\\u00a0/g,' ')+' ₽';}
  function list(){
    var r=data.map(function(x,i){return {x:x,i:i}}).filter(function(o){
      if(st.cat!=='all'&&o.x[2]!==st.cat)return false;
      if(st.price!=='all'){var a=st.price.split('-');if(o.x[1]<+a[0]||o.x[1]>=+a[1])return false;}
      return true;});
    if(st.sort==='asc')r.sort(function(a,b){return a.x[1]-b.x[1]});
    if(st.sort==='desc')r.sort(function(a,b){return b.x[1]-a.x[1]});
    return r;
  }
  function render(){
    var r=list();grid.innerHTML='';
    count.textContent='Найдено: '+r.length;
    if(!r.length){grid.innerHTML='<p class="empty" style="grid-column:1/-1">Ничего не нашлось — попробуйте другой бюджет или напишите флористу.</p>';}
    r.slice(0,st.shown).forEach(function(o){
      var x=o.x,el=document.createElement('article');el.className='item';
      el.innerHTML='<div class="pic">'+art(o.i,x[2])+'<small>здесь будет фото букета</small></div><div class="body"><h3>'+x[0]+'</h3>'+(x[3]?'<p class="comp">'+x[3]+'</p>':'')+'<div class="ifoot"><span class="pr">'+fmt(x[1])+'</span><button type="button" class="btn btn-primary">Заказать</button></div></div>';
      el.querySelector('button').setAttribute('aria-label','Заказать '+x[0]);
      el.querySelector('button').addEventListener('click',function(){var s=document.getElementById('o-item');for(var i=0;i<s.options.length;i++){if(s.options[i].text.indexOf(x[0]+' ')===0){s.selectedIndex=i;break;}}document.getElementById('zakaz').scrollIntoView();setTimeout(function(){s.focus()},400);});
      grid.appendChild(el);
    });
    more.hidden=r.length<=st.shown;
  }
  function bind(id,key){var box=document.getElementById(id);box.addEventListener('click',function(e){var b=e.target.closest('.chip');if(!b)return;box.querySelectorAll('.chip').forEach(function(c){c.setAttribute('aria-pressed','false')});b.setAttribute('aria-pressed','true');st[key]=b.getAttribute('data-v');st.shown=step;render();});}
  bind('f-cat','cat');bind('f-price','price');
  document.getElementById('f-sort').addEventListener('change',function(){st.sort=this.value;render();});
  more.addEventListener('click',function(){st.shown+=step;render();});
  render();
  var d=document.getElementById('o-date'),t=new Date();d.min=t.toISOString().slice(0,10);d.value=d.min;
  document.querySelectorAll('input[name="how"]').forEach(function(r){r.addEventListener('change',function(){document.getElementById('o-addr-f').hidden=this.value!=='delivery';});});
})();`,
};
