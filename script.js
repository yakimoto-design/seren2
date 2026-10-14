const toggle=document.querySelector('.menu-toggle');
const menu=document.getElementById('mobile-menu');
function setMenu(open){menu.hidden=!open;toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'メニューを閉じる':'メニューを開く');document.body.classList.toggle('menu-open',open)}
toggle.addEventListener('click',()=>setMenu(menu.hidden));
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!menu.hidden){setMenu(false);toggle.focus()}});
window.matchMedia('(min-width:701px)').addEventListener('change',e=>{if(e.matches)setMenu(false)});
