// Shared building blocks for the pitch demos. Each demo is still emitted as a
// single self-contained index.html (inline CSS/JS, no framework); this file only
// keeps the repeated parts (concept banner, prices, rating, route, contacts,
// demo forms) consistent and correct across all pages.

export const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function plural(n, [one, few, many]) {
  const m10 = n % 10, m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return one;
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
  return many;
}
// Glue digit groups and the currency sign so prices never wrap mid-number.
export const nb = (s) => String(s ?? '').replace(/(\d) (?=\d{3}\b)/g, '$1\u00a0').replace(/(\d) ₽/g, '$1\u00a0₽').replace(/ \/ /g, '\u00a0/ ');
export const reviewsText = (n) => `${n} ${plural(n, ['отзыв', 'отзыва', 'отзывов'])}`;
export const rub = (n) => (typeof n === 'number' ? n.toLocaleString('ru-RU').replace(/ /g, ' ') + ' ₽' : n);
export const telHref = (phone) => 'tel:+' + phone.replace(/\D/g, '').replace(/^8(?=\d{10}$)/, '7');

export const AWARD_ICON = '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 14.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/><path d="m9 14-1.5 6.5L12 18l4.5 2.5L15 14"/><path d="m12 7.2.8 1.6 1.8.3-1.3 1.2.3 1.8-1.6-.9-1.6.9.3-1.8-1.3-1.2 1.8-.3Z"/></svg>';

export const icon = {
  phone: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 3.5h2.6l1.5 4-2 1.3a11 11 0 0 0 6.5 6.5l1.3-2 4 1.5v2.6a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z"/></svg>',
  wa: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 19.5 5.6 16A8 8 0 1 1 8.4 18.6Z"/><path d="M9.3 8.6c.2-.4.5-.4.8-.4h.5c.2 0 .4.1.5.4l.6 1.5c.1.2 0 .5-.1.6l-.5.6c.6 1.2 1.5 2 2.6 2.6l.6-.5c.2-.2.4-.2.6-.1l1.5.6c.3.1.4.3.4.5v.5c0 .3 0 .6-.4.8-.5.3-1.2.5-1.9.3a8 8 0 0 1-5.2-5.2c-.2-.7 0-1.4.3-1.9Z"/></svg>',
  tg: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="m3.5 11.3 16-6.3c.7-.3 1.4.3 1.2 1.1l-2.7 12.4c-.2.8-1.1 1.1-1.7.6l-4-3-2 1.9c-.3.3-.8.2-.9-.2l-.9-3.7-3.7-1.2c-.8-.3-.8-1.3-.1-1.6Z"/><path d="m9.4 13.8 7.4-6.3"/></svg>',
  mail: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/></svg>',
  vk: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><path d="M7 9c.3 3.6 2.2 6 5.3 6v-2.2c1.2.2 2.1 1.1 2.5 2.2H17c-.5-1.8-1.8-3-2.7-3.4.9-.6 2-1.8 2.3-2.6h-2c-.4 1-1.3 2-2.3 2.1V9h-2v5C9.2 13.6 8.8 11.4 8.8 9Z"/></svg>',
  pin: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-6.5-5.8-6.5-11a6.5 6.5 0 0 1 13 0c0 5.2-6.5 11-6.5 11Z"/><circle cx="12" cy="10" r="2.4"/></svg>',
  clock: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>',
  star: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9Z"/></svg>',
  arrow: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  cal: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15" rx="2.5"/><path d="M3.5 9.5h17M8 3v4M16 3v4"/></svg>',
  chat: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5h16v10H9l-5 4Z"/></svg>',
  metro: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 18.5h17M5.5 18.5 9 6l3 7 3-7 3.5 12.5"/></svg>',
  photo: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2.5"/><circle cx="12" cy="12" r="3.5"/><path d="M8 5l1.5-2h5L16 5"/></svg>',
  check: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
  info: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/></svg>',
  max: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M8 15.5V8.5l4 4 4-4v7"/></svg>',
  viber: '<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5c4.8 0 8 2.3 8 7.3s-3.2 7.2-8 7.2l-3.5 2.5V17.6C5.6 16.6 4 14.3 4 10.8 4 5.8 7.2 3.5 12 3.5Z"/><path d="M9.8 8.3c.8 2.4 2.2 3.8 4.4 4.6"/></svg>',
};

const BASE_CSS = `
*,*::before,*::after{box-sizing:border-box}
html{-webkit-text-size-adjust:100%;scroll-behavior:smooth;scroll-padding-top:84px}
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}
body{margin:0;background:var(--bg);color:var(--text);font:400 16px/1.55 var(--font-body);-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;overflow-x:hidden}
img,svg{display:block;max-width:100%}
a{color:inherit}
h1,h2,h3,h4{font-family:var(--font-display);font-weight:var(--display-weight,500);line-height:1.08;letter-spacing:var(--display-tracking,-.01em);margin:0;text-wrap:balance}
p{margin:0}
button,input,select,textarea{font:inherit;color:inherit}
:focus-visible{outline:3px solid var(--focus,var(--accent));outline-offset:3px;border-radius:6px}
.skip{position:absolute;left:12px;top:-60px;z-index:100;background:var(--text);color:var(--bg);padding:10px 14px;border-radius:10px;text-decoration:none}
.skip:focus{top:12px}
.wrap{width:100%;max-width:1140px;margin:0 auto;padding:0 20px}
.sr{position:absolute!important;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
svg.i{width:1.25em;height:1.25em;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round;flex:none}

/* concept banner */
.concept{background:#16140f;color:#f6f1e7;font:500 13px/1.45 var(--font-body);position:relative;z-index:60}
.concept .wrap{display:flex;gap:10px;align-items:flex-start;padding-top:10px;padding-bottom:10px}
.concept b{display:inline-block;background:#f3d34a;color:#16140f;border-radius:5px;padding:1px 7px;margin-right:6px;font-size:11px;letter-spacing:.06em;text-transform:uppercase;vertical-align:1px}
.concept svg{margin-top:1px;color:#f3d34a}

/* header */
.top{position:sticky;top:0;z-index:50;background:color-mix(in srgb,var(--bg) 86%,transparent);backdrop-filter:saturate(1.4) blur(14px);-webkit-backdrop-filter:saturate(1.4) blur(14px);border-bottom:1px solid var(--line)}
.top .wrap{display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:64px}
.logo{font-family:var(--font-display);font-size:22px;font-weight:var(--logo-weight,600);text-decoration:none;letter-spacing:var(--display-tracking,-.01em);white-space:nowrap;display:flex;align-items:center;gap:10px}
.nav{display:none;gap:26px;font-size:15px}
.nav a{text-decoration:none;color:var(--muted);transition:color .2s}
.nav a:hover{color:var(--text)}
.top .top-cta{display:none}
@media (min-width:900px){.nav{display:flex}.top .top-cta{display:inline-flex}}

/* buttons */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:52px;padding:0 24px;border-radius:var(--btn-radius,999px);border:1.5px solid transparent;font-weight:600;font-size:16px;text-decoration:none;cursor:pointer;transition:transform .15s ease,background .2s,box-shadow .2s,color .2s;white-space:nowrap}
.btn:active{transform:translateY(1px)}
.btn-primary{background:var(--accent);color:var(--accent-ink);box-shadow:0 8px 24px -10px color-mix(in srgb,var(--accent) 70%,transparent)}
.btn-primary:hover{background:color-mix(in srgb,var(--accent) 88%,#000)}
.btn-ghost{border-color:color-mix(in srgb,var(--text) 22%,transparent);color:var(--text);background:transparent}
.btn-ghost:hover{border-color:var(--text)}
.btn-sm{min-height:42px;padding:0 18px;font-size:15px}
.btn-block{width:100%}

/* sections */
.sec{padding:clamp(64px,9vw,112px) 0}
.sec-alt{background:var(--surface-2)}
.eyebrow{font:600 12px/1.4 var(--font-body);letter-spacing:.14em;text-transform:uppercase;color:var(--accent-text,var(--accent));margin-bottom:14px;display:block}
.sec-head{max-width:720px;margin-bottom:clamp(28px,4vw,48px)}
.sec-head h2{font-size:clamp(32px,5vw,52px)}
.sec-head p{margin-top:16px;color:var(--muted);font-size:clamp(16px,1.6vw,18px)}
.lead{font-size:clamp(17px,1.8vw,20px);color:var(--muted)}
.muted{color:var(--muted)}
.note{font-size:14px;color:var(--muted)}

/* prices */
.tabs{display:flex;gap:8px;overflow-x:auto;padding:2px 2px 14px;margin:0 -20px 8px;padding-left:20px;padding-right:20px;scrollbar-width:none;-webkit-overflow-scrolling:touch}
.tabs::-webkit-scrollbar{display:none}
.tab{flex:none;border:1.5px solid var(--line-strong,var(--line));background:var(--surface);color:var(--text);border-radius:999px;padding:10px 18px;font-weight:600;font-size:15px;cursor:pointer;transition:all .2s;min-height:44px}
.tab[aria-selected="true"]{background:var(--text);color:var(--bg);border-color:var(--text)}
.panel[hidden]{display:none}
.plist{list-style:none;margin:0;padding:0;border-top:1px solid var(--line)}
.prow{display:flex;gap:16px;align-items:baseline;justify-content:space-between;padding:18px 0;border-bottom:1px solid var(--line)}
.prow-main{min-width:0;flex:1}
.prow-name{font-weight:600;font-size:17px;overflow-wrap:anywhere}
.prow-desc{color:var(--muted);font-size:14.5px;margin-top:4px;max-width:62ch}
.prow-meta{display:flex;gap:10px;flex-wrap:wrap;margin-top:6px;font-size:13px;color:var(--muted)}
.prow-price{font-family:var(--font-price,var(--font-body));font-weight:700;font-size:18px;white-space:nowrap;text-align:right}
.prow-price small{display:block;font-weight:500;font-size:12px;color:var(--muted)}
.price-foot{display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:space-between;margin-top:28px}

/* rating */
.rating{display:grid;gap:28px;align-items:center;background:var(--surface);border:1px solid var(--line);border-radius:var(--radius-lg,28px);padding:clamp(24px,4vw,48px)}
@media (min-width:860px){.rating{grid-template-columns:auto 1fr auto}}
.rating-num{display:flex;align-items:center;gap:14px;font-family:var(--font-display);font-size:clamp(56px,9vw,88px);line-height:1}
.rating-num svg{width:.62em;height:.62em;fill:var(--star,#f5b82e);stroke:none}
.rating-txt h3{font-size:clamp(22px,2.6vw,30px)}
.rating-txt p{margin-top:8px;color:var(--muted)}
.stars{position:relative;display:inline-flex;color:var(--star,#f5b82e)}
.stars-bg,.stars-fg{display:flex;gap:3px;white-space:nowrap}
.stars-bg{opacity:.28}
.stars-fg{position:absolute;left:0;top:0;bottom:0;overflow:hidden}
.stars svg{fill:currentColor;stroke:none;width:20px;height:20px;flex:none}
.award{display:flex;gap:10px;align-items:flex-start;margin-top:14px!important;padding:12px 14px;border-radius:14px;background:color-mix(in srgb,var(--star,#f5b82e) 14%,transparent);color:var(--text)!important;font-size:14.5px}
.award svg{width:22px;height:22px;color:var(--accent-text,var(--accent));margin-top:1px}

/* visit */
.visit{display:grid;gap:20px}
@media (min-width:900px){.visit{grid-template-columns:1.05fr 1fr;gap:28px}}
.card{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius-lg,28px);padding:clamp(22px,3.4vw,36px)}
.facts{list-style:none;margin:0;padding:0;display:grid;gap:18px}
.facts li{display:flex;gap:14px;align-items:flex-start}
.facts li>svg{color:var(--accent-text,var(--accent));margin-top:2px;width:22px;height:22px}
.facts b{display:block;font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);font-weight:600;margin-bottom:2px}
.hours{border-collapse:collapse;font-size:15.5px}
.hours td{padding:2px 18px 2px 0}
.mapcard{position:relative;min-height:300px;border-radius:var(--radius-lg,28px);overflow:hidden;border:1px solid var(--line);background:var(--map-bg,var(--surface-2));display:flex;align-items:flex-end;text-decoration:none}
.mapcard svg.mapart{position:absolute;inset:0;width:100%;height:100%}
.mapcard .mapbtn{position:relative;margin:18px;background:var(--surface);border:1px solid var(--line);border-radius:999px;padding:12px 18px;font-weight:600;display:inline-flex;gap:10px;align-items:center;box-shadow:0 10px 30px -12px rgba(0,0,0,.25)}
.mapcard:hover .mapbtn{border-color:var(--text)}
.btn-row{display:flex;flex-wrap:wrap;gap:12px;margin-top:24px}

/* contacts */
.contacts{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr))}
.ccard{display:flex;align-items:center;gap:14px;padding:18px 20px;border-radius:var(--radius,18px);background:var(--surface);border:1px solid var(--line);text-decoration:none;transition:border-color .2s,transform .2s;min-width:0}
.ccard:hover{border-color:var(--text);transform:translateY(-2px)}
.ccard svg{width:26px;height:26px;color:var(--accent-text,var(--accent))}
.ccard span{display:block;min-width:0}
.ccard small{display:block;color:var(--muted);font-size:13px}
.ccard strong{display:block;font-size:16.5px;overflow-wrap:anywhere}

/* gallery placeholders */
.gal{display:grid;gap:12px;grid-template-columns:repeat(2,1fr)}
.gal .ph:first-child{grid-column:span 2;aspect-ratio:2/1}
@media (max-width:759px){.gal .ph:nth-child(n+6){display:none}}
@media (min-width:760px){.gal{grid-template-columns:repeat(4,1fr)}.gal .ph:first-child{grid-row:span 2;aspect-ratio:auto}}
.ph{position:relative;aspect-ratio:1;border-radius:var(--radius,18px);overflow:hidden;background:var(--ph-bg,var(--surface-2));border:1px dashed color-mix(in srgb,var(--text) 22%,transparent);display:flex;align-items:center;justify-content:center;text-align:center;color:var(--muted);font-size:13px;padding:12px}
.ph::before{content:"";position:absolute;inset:0;background:var(--ph-pattern,none);opacity:.55}
.ph span{position:relative;display:flex;flex-direction:column;align-items:center;gap:8px}
.ph svg{width:28px;height:28px}
.ph:first-child span{font-size:15px;font-weight:600;color:var(--text)}

/* forms */
.form{display:grid;gap:14px}
.field{display:grid;gap:6px}
.field label,.field .lbl{font-size:14px;font-weight:600}
.input,select.input,textarea.input{width:100%;min-height:52px;border-radius:var(--input-radius,14px);border:1.5px solid var(--line-strong,var(--line));background:var(--surface);padding:12px 16px;font-size:16px;transition:border-color .2s,box-shadow .2s}
textarea.input{min-height:96px;resize:vertical}
.input:focus{outline:none;border-color:var(--accent);box-shadow:0 0 0 4px color-mix(in srgb,var(--accent) 22%,transparent)}
.row2{display:grid;gap:14px}
@media (min-width:640px){.row2{grid-template-columns:1fr 1fr}}
.chips{display:flex;flex-wrap:wrap;gap:8px}
.chip{border:1.5px solid var(--line-strong,var(--line));background:var(--surface);border-radius:999px;padding:9px 15px;font-size:15px;cursor:pointer;min-height:44px;transition:all .15s}
.chip[aria-pressed="true"],.chip[aria-checked="true"]{background:var(--accent);border-color:var(--accent);color:var(--accent-ink)}
.chip:disabled{opacity:.4;cursor:not-allowed}
.demo-msg{display:none;gap:12px;align-items:flex-start;border-radius:16px;padding:16px 18px;background:color-mix(in srgb,var(--accent) 12%,var(--surface));border:1.5px solid color-mix(in srgb,var(--accent) 45%,transparent);font-weight:500}
.demo-msg.show{display:flex}
.demo-msg svg{width:22px;height:22px;color:var(--accent-text,var(--accent));margin-top:1px}
.consent{font-size:13px;color:var(--muted)}
.consent a{color:inherit}

/* booking widget */
.slots{display:grid;grid-template-columns:repeat(auto-fill,minmax(82px,1fr));gap:8px}
.days{display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;padding-bottom:4px}
.days::-webkit-scrollbar{display:none}
.day{flex:none;display:grid;justify-items:center;gap:2px;min-width:64px;padding:10px 8px;border-radius:16px;border:1.5px solid var(--line-strong,var(--line));background:var(--surface);cursor:pointer;font-size:13px;color:var(--muted)}
.day strong{font-size:20px;color:var(--text);font-family:var(--font-display)}
.day[aria-pressed="true"]{background:var(--text);border-color:var(--text);color:color-mix(in srgb,var(--bg) 75%,transparent)}
.day[aria-pressed="true"] strong{color:var(--bg)}
.chosen{font-size:15px;color:var(--muted)}

/* footer */
.foot{padding:48px 0 calc(48px + var(--bar-h,0px));border-top:1px solid var(--line);font-size:14.5px;color:var(--muted)}
.foot .wrap{display:grid;gap:18px}
@media (min-width:860px){.foot .wrap{grid-template-columns:1fr auto;align-items:end}}
.foot a{color:inherit}
.foot-name{font-family:var(--font-display);font-size:22px;color:var(--text)}
.linkbtn{background:none;border:0;padding:0;color:inherit;text-decoration:underline;cursor:pointer;font-size:inherit}

/* sticky bottom bar (mobile) */
.bar{position:fixed;left:0;right:0;bottom:0;z-index:70;display:grid;grid-template-columns:1fr 1.25fr;gap:10px;padding:10px 12px calc(10px + env(safe-area-inset-bottom));background:color-mix(in srgb,var(--bg) 90%,transparent);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-top:1px solid var(--line)}
.bar .btn{min-height:52px;padding:0 12px}
body{--bar-h:76px}
@media (min-width:900px){.bar{display:none}body{--bar-h:0px}}

dialog.policy{border:0;border-radius:24px;padding:0;max-width:560px;width:calc(100% - 32px);background:var(--surface);color:var(--text);box-shadow:0 30px 80px -20px rgba(0,0,0,.45)}
dialog.policy::backdrop{background:rgba(10,10,10,.45);backdrop-filter:blur(3px)}
dialog.policy .in{padding:28px;display:grid;gap:14px}
dialog.policy h2{font-size:26px}

.reveal{opacity:0;transform:translateY(18px);transition:opacity .7s ease,transform .7s ease}
.reveal.on{opacity:1;transform:none}
@media (prefers-reduced-motion:reduce){.reveal{opacity:1;transform:none}}
`;

const BASE_JS = `
(function(){
  var d=document;
  // tabs
  d.querySelectorAll('[data-tabs]').forEach(function(root){
    var tabs=root.querySelectorAll('[role="tab"]');
    tabs.forEach(function(t,i){
      t.addEventListener('click',function(){select(i)});
      t.addEventListener('keydown',function(e){
        if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();var n=(i+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;select(n);tabs[n].focus();}
      });
    });
    function select(i){
      tabs.forEach(function(t,j){var on=i===j;t.setAttribute('aria-selected',on);t.tabIndex=on?0:-1;var p=d.getElementById(t.getAttribute('aria-controls'));if(p)p.hidden=!on;});
    }
  });
  // demo forms: nothing is sent anywhere
  d.querySelectorAll('form[data-demo]').forEach(function(f){
    f.addEventListener('submit',function(e){
      e.preventDefault();
      var m=f.querySelector('.demo-msg');
      if(m){m.classList.add('show');m.focus&&m.focus();}
    });
  });
  // policy dialog
  var dlg=d.getElementById('policy');
  d.querySelectorAll('[data-policy]').forEach(function(b){b.addEventListener('click',function(e){e.preventDefault();if(dlg&&dlg.showModal)dlg.showModal();});});
  if(dlg){dlg.addEventListener('click',function(e){if(e.target===dlg)dlg.close();});}
  // demo booking widgets
  d.querySelectorAll('[data-booking]').forEach(function(root){
    var cfg=JSON.parse(root.getAttribute('data-booking'));
    var daysEl=root.querySelector('.days'),slotsEl=root.querySelector('.slots'),out=root.querySelector('.chosen'),hidden=root.querySelector('input[name="slot"]');
    var names=['вс','пн','вт','ср','чт','пт','сб'],months=['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
    var now=new Date(),sel={day:null,time:null};
    function toMin(s){var p=s.split(':');return +p[0]*60+ +p[1];}
    function hoursFor(date){var o=cfg.open,c=cfg.close;if(cfg.byDay&&cfg.byDay[date.getDay()]){o=cfg.byDay[date.getDay()][0];c=cfg.byDay[date.getDay()][1];}return [toMin(o),toMin(c)];}
    function pad(n){return (n<10?'0':'')+n;}
    function renderSlots(){
      slotsEl.innerHTML='';var date=sel.day;if(!date)return;var h=hoursFor(date),last=h[1]-(cfg.minLen||60),isToday=date.toDateString()===now.toDateString();
      var any=false;
      for(var m=h[0];m<=last;m+=cfg.step||60){
        var b=d.createElement('button');b.type='button';b.className='chip';b.textContent=pad(Math.floor(m/60))+':'+pad(m%60);
        if(isToday&&m<=now.getHours()*60+now.getMinutes()+30){b.disabled=true;b.setAttribute('aria-label',b.textContent+', уже прошло');}
        else any=true;
        b.setAttribute('aria-pressed','false');
        b.addEventListener('click',function(){slotsEl.querySelectorAll('.chip').forEach(function(x){x.setAttribute('aria-pressed','false')});this.setAttribute('aria-pressed','true');sel.time=this.textContent;update();});
        slotsEl.appendChild(b);
      }
      if(!any){var p=d.createElement('p');p.className='note';p.style.gridColumn='1/-1';p.textContent='На этот день окон уже нет — выберите другой день.';slotsEl.appendChild(p);}
      return any;
    }
    function update(){
      if(sel.day&&sel.time){var t=sel.day.getDate()+' '+months[sel.day.getMonth()]+', '+names[sel.day.getDay()]+' · '+sel.time;out.textContent='Вы выбрали: '+t;hidden.value=t;}
      else out.textContent='Выберите день и время';
    }
    for(var i=0;i<(cfg.days||7);i++){
      var dt=new Date(now.getFullYear(),now.getMonth(),now.getDate()+i);
      var b=d.createElement('button');b.type='button';b.className='day';b.setAttribute('aria-pressed',i===0?'true':'false');
      b.innerHTML='<span>'+(i===0?'сегодня':i===1?'завтра':names[dt.getDay()])+'</span><strong>'+dt.getDate()+'</strong><span>'+months[dt.getMonth()].slice(0,3)+'</span>';
      b.setAttribute('aria-label',dt.getDate()+' '+months[dt.getMonth()]);
      (function(dt,b){b.addEventListener('click',function(){daysEl.querySelectorAll('.day').forEach(function(x){x.setAttribute('aria-pressed','false')});b.setAttribute('aria-pressed','true');sel.day=dt;sel.time=null;renderSlots();update();});})(dt,b);
      daysEl.appendChild(b);
      if(i===0)sel.day=dt;
    }
    if(!renderSlots()){var nb=daysEl.querySelectorAll('.day')[1];if(nb)nb.click();}
    update();
  });
  // gentle reveal on scroll
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target);}})},{rootMargin:'0px 0px -8% 0px'});
    d.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});
  } else d.querySelectorAll('.reveal').forEach(function(el){el.classList.add('on')});
  var y=d.getElementById('y');if(y)y.textContent=new Date().getFullYear();
})();
`;

export function page(c) {
  const book = c.book || { href: '#zapis', label: 'Записаться' };
  const bookAttrs = /^https?:/.test(book.href) ? ' target="_blank" rel="noopener"' : '';
  const nav = (c.nav || []).map(([h, t]) => `<a href="${h}">${esc(t)}</a>`).join('');
  return `<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="robots" content="noindex, nofollow">
<meta name="googlebot" content="noindex, nofollow">
<meta name="yandex" content="noindex, nofollow">
<title>${esc(c.title)}</title>
<meta name="description" content="${esc(c.description)}">
<meta name="theme-color" content="${c.themeColor}">
<link rel="icon" href="data:image/svg+xml,${encodeURIComponent(c.favicon)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${c.fonts}">
<style>${BASE_CSS}
${c.css}</style>
</head>
<body class="${c.bodyClass || ''}">
<a class="skip" href="#main">Перейти к содержанию</a>
<div class="concept" role="note"><div class="wrap">${icon.info}<p><b>Концепт</b>Концепт нового сайта для ${esc(c.conceptName)}. Подготовил Егор Лязин для обсуждения с владельцем. Не официальный сайт.</p></div></div>
<header class="top"><div class="wrap">
<a class="logo" href="#main" aria-label="${esc(c.name)} — наверх">${c.logo || esc(c.name)}</a>
<nav class="nav" aria-label="Разделы">${nav}</nav>
<a class="btn btn-primary btn-sm top-cta" href="${book.href}"${bookAttrs}>${esc(book.label)}</a>
</div></header>
<main id="main">
${c.hero}
${c.sections.join('\n')}
</main>
<footer class="foot"><div class="wrap">
<div><div class="foot-name">${esc(c.name)}</div><p style="margin-top:8px">${esc(c.footLine || '')}</p><p style="margin-top:8px">Концепт сайта. Все данные — из открытых источников компании${c.footSources ? ` (${esc(c.footSources)})` : ''}. Формы на странице ничего не отправляют.</p></div>
<div><button class="linkbtn" type="button" data-policy>Политика обработки персональных данных</button><p style="margin-top:8px">© <span id="y">2026</span></p></div>
</div></footer>
<div class="bar" role="region" aria-label="Быстрые действия">
<a class="btn btn-ghost" href="${telHref(c.phone)}">${icon.phone}<span>Позвонить</span></a>
<a class="btn btn-primary" href="${book.href}"${bookAttrs}>${c.barIcon || icon.cal}<span>${esc(book.barLabel || book.label)}</span></a>
</div>
<dialog class="policy" id="policy" aria-labelledby="policy-t"><div class="in">
<h2 id="policy-t">Политика обработки персональных данных</h2>
<p class="muted">Здесь будет политика обработки персональных данных ${esc(c.policyOwner || c.name)}. В концепте это заглушка: формы на странице ничего не отправляют и не сохраняют.</p>
<form method="dialog"><button class="btn btn-primary">Понятно</button></form>
</div></dialog>
<script>${BASE_JS}
${c.js || ''}</script>
</body>
</html>
`;
}

// ---------- reusable sections ----------

export function priceTabs({ id = 'uslugi', eyebrow = 'Услуги и цены', title, lead, cats, bookHref, bookLabel = 'Записаться онлайн', footNote, alt }) {
  const tabs = cats.map((c, i) => `<button class="tab" role="tab" id="${id}-t${i}" aria-controls="${id}-p${i}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${esc(c.name)}</button>`).join('');
  const panels = cats.map((c, i) => `<div class="panel" role="tabpanel" id="${id}-p${i}" aria-labelledby="${id}-t${i}"${i ? ' hidden' : ''}><ul class="plist">${c.items.map((it) => `<li class="prow"><div class="prow-main"><div class="prow-name">${esc(it.n)}</div>${it.d ? `<div class="prow-desc">${nb(esc(it.d))}</div>` : ''}${it.t ? `<div class="prow-meta"><span>${icon.clock.replace('<svg', '<svg style="width:15px;height:15px;display:inline;vertical-align:-3px"')} ${esc(it.t)}</span></div>` : ''}</div><div class="prow-price">${nb(esc(it.p))}${it.ps ? `<small>${nb(esc(it.ps))}</small>` : ''}</div></li>`).join('')}</ul></div>`).join('');
  const ext = bookHref && /^https?:/.test(bookHref) ? ' target="_blank" rel="noopener"' : '';
  return `<section class="sec${alt ? ' sec-alt' : ''}" id="${id}" aria-labelledby="${id}-h"><div class="wrap">
<div class="sec-head reveal"><span class="eyebrow">${esc(eyebrow)}</span><h2 id="${id}-h">${title}</h2>${lead ? `<p>${lead}</p>` : ''}</div>
<div data-tabs class="reveal"><div class="tabs" role="tablist" aria-label="Категории услуг">${tabs}</div>${panels}</div>
<div class="price-foot"><p class="note">${footNote || 'Цены — из открытых источников компании. Точную стоимость подтвердит администратор.'}</p>${bookHref ? `<a class="btn btn-primary" href="${bookHref}"${ext}>${icon.cal}${esc(bookLabel)}</a>` : ''}</div>
</div></section>`;
}

export function ratingBlock({ rating, count, orgUrl, lead, alt, award }) {
  const r = Number(rating).toFixed(1);
  const pct = Math.max(0, Math.min(100, (Number(rating) / 5) * 100)).toFixed(1);
  const row = icon.star.repeat(5);
  return `<section class="sec${alt ? ' sec-alt' : ''}" id="otzyvy" aria-labelledby="otzyvy-h"><div class="wrap">
<div class="rating reveal">
<div class="rating-num">${icon.star}<span>${r.replace('.', ',')}</span></div>
<div class="rating-txt"><div class="stars" aria-hidden="true"><span class="stars-bg">${row}</span><span class="stars-fg" style="width:${pct}%">${row}</span></div><h3 id="otzyvy-h" style="margin-top:10px">${reviewsText(count)} на Яндекс Картах</h3><p>${lead || 'Живые отзывы клиентов — в карточке на Яндекс Картах. Там же можно оставить свой.'}</p>${award ? `<p class="award">${AWARD_ICON}<span><strong>Хорошее место 2026</strong> — награда Яндекс Карт для любимых мест пользователей</span></p>` : ''}</div>
<a class="btn btn-ghost" href="${orgUrl}reviews/" target="_blank" rel="noopener">Читать отзывы${icon.arrow}</a>
</div></div></section>`;
}

function mapArt(seed = 1) {
  // abstract city-block map, no external tiles
  const lines = [];
  let s = seed * 9301;
  const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  for (let i = 0; i < 7; i++) lines.push(`<path d="M${-20 + rnd() * 60} ${i * 70 + rnd() * 30} L 820 ${i * 70 + 40 + rnd() * 60}" />`);
  for (let i = 0; i < 8; i++) lines.push(`<path d="M${i * 110 + rnd() * 40} -20 L ${i * 110 - 60 + rnd() * 80} 520" />`);
  return `<svg class="mapart" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
<rect width="800" height="500" fill="var(--map-bg,var(--surface-2))"/>
<path d="M-20 360 C 180 300, 300 420, 520 330 S 760 250, 840 300" stroke="var(--map-water,color-mix(in srgb,var(--accent) 22%,transparent))" stroke-width="34" fill="none" stroke-linecap="round"/>
<g stroke="var(--map-road,color-mix(in srgb,var(--text) 10%,transparent))" stroke-width="10" fill="none" stroke-linecap="round">${lines.join('')}</g>
<g transform="translate(400 215)"><circle r="46" fill="color-mix(in srgb,var(--accent) 18%,transparent)"/><circle r="22" fill="color-mix(in srgb,var(--accent) 30%,transparent)"/><path d="M0 16s-17-15-17-28a17 17 0 0 1 34 0c0 13-17 28-17 28Z" transform="translate(0 -14)" fill="var(--accent)"/><circle cy="-26" r="6" fill="var(--surface)"/></g>
</svg>`;
}

export function hoursTable(hours) {
  return `<table class="hours"><tbody>${hours.map(([d, t]) => `<tr><td>${esc(d)}</td><td><strong>${esc(t)}</strong></td></tr>`).join('')}</tbody></table>`;
}

export function visitBlock({ address, metro, hours, orgId, routeUrl, extra, seed, alt }) {
  const org = `https://yandex.ru/maps/org/${orgId}/`;
  return `<section class="sec${alt ? ' sec-alt' : ''}" id="kak-dobratsya" aria-labelledby="kak-h"><div class="wrap">
<div class="sec-head reveal"><span class="eyebrow">Как добраться</span><h2 id="kak-h">Ждём по адресу</h2></div>
<div class="visit">
<div class="card reveal"><ul class="facts">
<li>${icon.pin}<div><b>Адрес</b>${esc(address)}</div></li>
${metro ? `<li>${icon.metro}<div><b>Рядом</b>${esc(metro)}</div></li>` : ''}
${hours ? `<li>${icon.clock}<div><b>Режим работы</b>${hoursTable(hours)}</div></li>` : ''}
${extra || ''}
</ul>
<div class="btn-row"><a class="btn btn-primary" href="${routeUrl || org}" target="_blank" rel="noopener">${icon.pin}Маршрут в Яндекс Картах</a></div></div>
<a class="mapcard reveal" href="${org}" target="_blank" rel="noopener" aria-label="Открыть карточку на Яндекс Картах">${mapArt(seed)}<span class="mapbtn">${icon.pin}Открыть на Яндекс Картах</span></a>
</div></div></section>`;
}

export function contactsBlock({ items, title = 'На связи', lead, alt }) {
  const cards = items.map((it) => {
    const ext = /^https?:/.test(it.href) ? ' target="_blank" rel="noopener"' : '';
    return `<a class="ccard" href="${it.href}"${ext} aria-label="${esc(it.label + ': ' + it.value)}">${icon[it.icon]}<span><small>${esc(it.label)}</small><strong>${esc(it.value)}</strong></span></a>`;
  }).join('');
  return `<section class="sec${alt ? ' sec-alt' : ''}" id="kontakty" aria-labelledby="kontakty-h"><div class="wrap">
<div class="sec-head reveal"><span class="eyebrow">Контакты</span><h2 id="kontakty-h">${title}</h2>${lead ? `<p>${lead}</p>` : ''}</div>
<div class="contacts reveal">${cards}</div>
</div></section>`;
}

export function gallery({ title = 'Работы', lead, n = 9, alt, label = 'Здесь будут ваши фото работ' }) {
  const tiles = Array.from({ length: n }, (_, i) => `<div class="ph">${i === 0 ? `<span>${icon.photo}${esc(label)}</span>` : `<span>${icon.photo}Фото ${i + 1}</span>`}</div>`).join('');
  return `<section class="sec${alt ? ' sec-alt' : ''}" id="raboty" aria-labelledby="raboty-h"><div class="wrap">
<div class="sec-head reveal"><span class="eyebrow">Галерея</span><h2 id="raboty-h">${title}</h2>${lead ? `<p>${lead}</p>` : ''}</div>
<div class="gal reveal">${tiles}</div>
</div></section>`;
}

export function bookingWidget({ id = 'zapis', eyebrow = 'Онлайн-запись', title, lead, services, open, close, byDay, step = 30, minLen = 60, alt, submitLabel = 'Записаться', extraFields = '' }) {
  const cfg = JSON.stringify({ open, close, byDay, step, minLen, days: 10 });
  return `<section class="sec${alt ? ' sec-alt' : ''}" id="${id}" aria-labelledby="${id}-h"><div class="wrap">
<div class="sec-head reveal"><span class="eyebrow">${esc(eyebrow)}</span><h2 id="${id}-h">${title}</h2>${lead ? `<p>${lead}</p>` : ''}</div>
<form class="card form reveal" data-demo data-booking='${cfg}' novalidate>
<div class="field"><label for="${id}-svc">Услуга</label><select class="input" id="${id}-svc" name="service">${services.map((s) => `<option>${esc(s)}</option>`).join('')}</select></div>
<div class="field"><span class="lbl" id="${id}-dl">День</span><div class="days" role="group" aria-labelledby="${id}-dl"></div></div>
<div class="field"><span class="lbl" id="${id}-tl">Время</span><div class="slots" role="group" aria-labelledby="${id}-tl"></div><p class="chosen" aria-live="polite"></p><input type="hidden" name="slot"></div>
${extraFields}
<div class="row2"><div class="field"><label for="${id}-name">Имя</label><input class="input" id="${id}-name" name="name" autocomplete="name" placeholder="Как к вам обращаться"></div>
<div class="field"><label for="${id}-tel">Телефон</label><input class="input" id="${id}-tel" name="tel" type="tel" inputmode="tel" autocomplete="tel" placeholder="+7"></div></div>
<button class="btn btn-primary btn-block" type="submit">${esc(submitLabel)}</button>
<p class="consent">Нажимая кнопку, вы соглашаетесь с <a href="#" data-policy>политикой обработки персональных данных</a>.</p>
<div class="demo-msg" role="status" tabindex="-1">${icon.info}<div>Это демо: заявка не отправлена. На рабочем сайте здесь будут реальные свободные окна из вашей системы записи.</div></div>
</form>
</div></section>`;
}

export function demoMsg(text = 'Это демо: заявка не отправлена.') {
  return `<div class="demo-msg" role="status" tabindex="-1">${icon.info}<div>${text}</div></div>`;
}
