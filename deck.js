/* Motor de slides jujuy.dev — modelo de navegación igual al deck de Celo (builder-session-jujuy)
   → Espacio PgDn Enter = siguiente (revela el próximo paso; cuando no quedan, pasa de slide)
   ← PgUp Backspace = anterior (deshace el último paso; si no hay, slide anterior)
   Inicio/Fin, 1–9 = saltar · O = índice · F = pantalla completa · N = notas · P = ventana presentador
   Botones abajo a la derecha (‹ › índice pantalla completa) · deslizar en el celu · rueda/trackpad
   URL: #/N (también acepta ?slide=N&step=M). ?notes=1 = vista presentador.
   Celular en vertical: sin pasos (se ve todo junto), la slide ocupa el ancho.
   Pasos: elementos con data-step="k" reciben .on cuando paso >= k. Puntitos abajo a la izquierda = pasos.
   Imágenes: <figure class="media" data-label="..."><img src="..."></figure> muestra un placeholder hasta que exista el archivo. */
(function(){
  "use strict";
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const stage=$('.stage'); if(!stage) return;
  const slides=$$('.slide',stage), N=slides.length;
  const bar=$('.progress i',stage), ctr=$('.counter',stage);
  const maxStep=slides.map(s=>Math.max(0,...$$('[data-step]',s).map(e=>+e.dataset.step||0)));
  const P=new URLSearchParams(location.search);
  const presenter=P.get('notes')==='1';
  const portrait=matchMedia('(orientation: portrait) and (max-width: 820px)');
  const clamp=(v,a,b)=>Math.min(Math.max(v,a),b);

  // contenedor fijo: el lienzo de 1280px nunca agranda la página (bug del celu)
  document.documentElement.classList.add('deck-on');
  const vp=document.createElement('div'); vp.className='deck-viewport';
  stage.parentNode.insertBefore(vp,stage); vp.appendChild(stage);

  // placeholders de imágenes
  $$('figure.media').forEach(fig=>{
    const img=$('img',fig); if(!img) return;
    const ph=document.createElement('div'); ph.className='ph'; ph.innerHTML='<b></b><small></small>';
    $('b',ph).textContent=fig.dataset.label||'IMAGEN'; $('small',ph).textContent=img.getAttribute('src'); fig.prepend(ph);
    const ok=()=>{ if(img.naturalWidth>0) fig.classList.remove('missing'); };
    fig.classList.add('missing'); img.addEventListener('load',ok); img.addEventListener('error',()=>fig.classList.add('missing')); if(img.complete) ok();
  });

  // UI: botones, puntitos, hint, índice, notas
  const ui=document.createElement('div'); ui.className='deck-ui';
  ui.innerHTML=`<div class="deck-dots" aria-hidden="true"></div>
   <p class="deck-hint"><kbd>←</kbd><kbd>→</kbd> navegar · <kbd>O</kbd> índice · <kbd>F</kbd> pantalla completa · <kbd>N</kbd> notas</p>
   <div class="deck-ctrl">
    <button class="d-prev" aria-label="Anterior"><svg viewBox="0 0 16 16"><path d="M10 3L5 8l5 5"/></svg></button>
    <button class="d-next" aria-label="Siguiente"><svg viewBox="0 0 16 16"><path d="M6 3l5 5-5 5"/></svg></button>
    <button class="d-grid" aria-label="Índice (O)"><svg viewBox="0 0 16 16"><rect x="2" y="2" width="5" height="5"/><rect x="9" y="2" width="5" height="5"/><rect x="2" y="9" width="5" height="5"/><rect x="9" y="9" width="5" height="5"/></svg></button>
    <button class="d-full" aria-label="Pantalla completa (F)"><svg viewBox="0 0 16 16"><path d="M2 6V2h4M10 2h4v4M14 10v4h-4M6 14H2v-4"/></svg></button>
   </div>
   <div class="deck-overview" aria-hidden="true"><header><h2>Índice</h2><span>Esc para cerrar</span></header><div class="deck-thumbs"></div></div>`;
  document.body.appendChild(ui);
  const dots=$('.deck-dots',ui), hint=$('.deck-hint',ui), ov=$('.deck-overview',ui), thumbs=$('.deck-thumbs',ui);
  slides.forEach((sl,k)=>{ const t=document.createElement('button'); t.className='deck-thumb';
    t.innerHTML=`<b>${String(k+1).padStart(2,'0')}</b><span></span>`; $('span',t).textContent=sl.dataset.title||('Slide '+(k+1));
    t.onclick=()=>{ toggleOverview(false); mode='jump'; show(k,0); }; thumbs.appendChild(t); });
  const notesBox=document.createElement('div'); notesBox.className='notes-panel'+(presenter?'':' hidden');
  notesBox.innerHTML='<div class="np-head"><span class="np-pos"></span><span class="np-timer"></span></div><div class="np-body"></div><div class="np-next"></div>';
  document.body.appendChild(notesBox);
  if(presenter){ document.body.classList.add('presenter'); const t0=Date.now();
    setInterval(()=>{const s=Math.floor((Date.now()-t0)/1000);$('.np-timer',notesBox).textContent=String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')},1000); }

  // estado
  const fromURL=()=>{ const m=location.hash.match(/^#\/(\d+)(?:\/(\d+))?/);
    if(m) return [(+m[1]||1)-1, +(m[2]||0)];
    return [(parseInt(P.get('slide'))||1)-1, parseInt(P.get('step'))||0]; };
  let [i,st]=fromURL(); i=clamp(i,0,N-1); st=clamp(st,0,maxStep[i]);
  const stepsOn=()=>!portrait.matches;
  const ch=('BroadcastChannel' in window)?new BroadcastChannel('jd-deck'):null;

  // transiciones entre slides: 'fwd'/'back' = deslizar+fade (450ms), 'jump' = fade corto (índice, URL, números)
  const reduce=matchMedia('(prefers-reduced-motion: reduce)');
  const wipe=document.createElement('div'); wipe.className='deck-wipe'; wipe.setAttribute('aria-hidden','true'); stage.appendChild(wipe);
  let shown=-1, mode=null, tT=0;
  function transition(from,to){
    clearTimeout(tT);
    slides.forEach(el=>el.classList.remove('t-in','t-out','t-fwd','t-back','t-jump'));
    stage.classList.remove('t-fwd','t-back','t-jump'); wipe.classList.remove('go');
    if(from<0||from===to||reduce.matches||false) return;
    const m=mode||(Math.abs(to-from)===1?(to>from?'fwd':'back'):'jump');
    void stage.offsetWidth; // reinicia animaciones si se navega rápido
    slides[from].classList.add('t-out','t-'+m); slides[to].classList.add('t-in','t-'+m);
    if(m!=='jump'){ stage.classList.add('t-'+m); wipe.classList.add('go'); }
    tT=setTimeout(()=>{ slides.forEach(el=>el.classList.remove('t-in','t-out','t-fwd','t-back','t-jump')); stage.classList.remove('t-fwd','t-back','t-jump'); wipe.classList.remove('go'); },520);
  }
  function render(silent){
    const eff=stepsOn()?st:maxStep[i];
    if(shown!==i){ transition(shown,i); shown=i; } mode=null;
    slides.forEach((el,k)=>{ el.classList.toggle('active',k===i); el.setAttribute('aria-hidden',k!==i); });
    const cur=slides[i]; cur.dataset.cur=eff;
    $$('[data-step]',cur).forEach(e=>e.classList.toggle('on',(+e.dataset.step||0)<=eff));
    if(bar) bar.style.width=((i+1)/N*100)+'%';
    if(ctr) ctr.textContent=String(i+1).padStart(2,'0')+' / '+String(N).padStart(2,'0');
    const m=stepsOn()?maxStep[i]:0;
    dots.innerHTML=m>0?Array.from({length:m},(_,k)=>`<i class="${k<st?'on':''}"></i>`).join(''):'';
    $$('.deck-thumb',thumbs).forEach((t,k)=>t.classList.toggle('cur',k===i));
    $('.d-prev',ui).disabled=(i===0&&st===0); $('.d-next',ui).disabled=(i===N-1&&(st>=maxStep[i]||!stepsOn()));
    const hash=`#/${i+1}`+(st&&stepsOn()?`/${st}`:'');
    const q=new URLSearchParams(location.search); q.delete('slide'); q.delete('step');
    const url=location.pathname+(q.toString()?'?'+q:'')+hash;
    if(location.href.slice(location.origin.length)!==url) history.replaceState(null,'',url);
    // notas
    const n=$('.notes',cur); $('.np-body',notesBox).innerHTML=n?n.innerHTML:'<p>(sin notas)</p>';
    $('.np-pos',notesBox).textContent=`Slide ${i+1}/${N} · paso ${st}/${maxStep[i]}`;
    $('.np-next',notesBox).textContent=st<maxStep[i]?'Próximo: paso '+(st+1)+' de esta slide':(i<N-1?'Próximo: '+(slides[i+1].dataset.title||'slide '+(i+2)):'Fin');
    if(portrait.matches) vp.scrollTop=0;
    if(ch&&!silent) ch.postMessage({i,st});
  }
  function show(n,s,silent){ i=clamp(n,0,N-1); st=clamp(s,0,maxStep[i]); render(silent); }
  if(ch) ch.onmessage=e=>{ mode=Math.abs(e.data.i-i)===1?null:'jump'; show(e.data.i,e.data.st,true); };
  const next=()=>{ if(stepsOn()&&st<maxStep[i]) show(i,st+1); else if(i<N-1) show(i+1,0); };
  const prev=()=>{ if(stepsOn()&&st>0) show(i,st-1); else if(i>0) show(i-1,stepsOn()?maxStep[i-1]:0); };
  const nextSlide=()=>{ if(i<N-1) show(i+1,0); };

  function fit(){
    if(portrait.matches&&!presenter){ // ancho completo, arriba
      const s=innerWidth/1280; stage.style.transformOrigin='0 0'; stage.style.left='0px';
      stage.style.top=Math.max(0,(innerHeight-720*s)/2-40)+'px'; stage.style.transform=`scale(${s})`; return; }
    const W=presenter?innerWidth*0.6:innerWidth, H=innerHeight, s=Math.min(W/1280,H/720);
    stage.style.transformOrigin='0 0'; stage.style.left=((W-1280*s)/2)+'px'; stage.style.top=((H-720*s)/2)+'px'; stage.style.transform=`scale(${s})`;
  }
  function toggleOverview(force){ const open=force??!ov.classList.contains('open'); ov.classList.toggle('open',open); ov.setAttribute('aria-hidden',!open); }
  function toggleFull(){ if(!document.fullscreenElement) document.documentElement.requestFullscreen?.().catch(()=>{}); else document.exitFullscreen?.(); }
  let hintT=setTimeout(hideHint,9000); function hideHint(){ clearTimeout(hintT); hint.classList.add('gone'); }

  addEventListener('keydown',e=>{ if(e.metaKey||e.ctrlKey||e.altKey) return;
    const open=ov.classList.contains('open');
    switch(e.key){
      case 'ArrowRight': case 'ArrowDown': case 'PageDown': case ' ': case 'Enter':
        if(e.key==='Enter'&&document.activeElement?.matches('button,a')) return;
        e.preventDefault(); if(!open) (e.shiftKey?nextSlide:next)(); break;
      case 'ArrowLeft': case 'ArrowUp': case 'PageUp': case 'Backspace': e.preventDefault(); if(!open) prev(); break;
      case 'Home': mode='jump'; show(0,0); break;
      case 'End': mode='jump'; show(N-1,maxStep[N-1]); break;
      case 'o': case 'O': toggleOverview(); break;
      case 'f': case 'F': toggleFull(); break;
      case 'n': case 'N': if(!presenter) notesBox.classList.toggle('hidden'); break;
      case 'p': case 'P': { const q=new URLSearchParams(location.search); q.set('notes','1'); window.open(location.pathname+'?'+q+location.hash,'jd-presenter','width=1400,height=820'); break; }
      case 'Escape': if(open) toggleOverview(false); break;
      default: if(/^[1-9]$/.test(e.key)){ mode='jump'; show(+e.key-1,0); }
    }
    hideHint();
  });
  $('.d-next',ui).onclick=e=>{e.stopPropagation();next();hideHint();};
  $('.d-prev',ui).onclick=e=>{e.stopPropagation();prev();hideHint();};
  $('.d-grid',ui).onclick=e=>{e.stopPropagation();toggleOverview();};
  $('.d-full',ui).onclick=e=>{e.stopPropagation();toggleFull();};
  // deslizar
  let tx=null,ty=null;
  vp.addEventListener('touchstart',e=>{tx=e.touches[0].clientX;ty=e.touches[0].clientY;},{passive:true});
  vp.addEventListener('touchend',e=>{ if(tx==null) return; const dx=e.changedTouches[0].clientX-tx, dy=e.changedTouches[0].clientY-ty;
    if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.4){ (dx<0?next:prev)(); hideHint(); } tx=null; },{passive:true});
  // rueda / trackpad (una acción por gesto)
  let wheelLock=0;
  vp.addEventListener('wheel',e=>{ if(portrait.matches) return; e.preventDefault(); const d=Math.abs(e.deltaY)>Math.abs(e.deltaX)?e.deltaY:e.deltaX;
    if(Math.abs(d)<12) return; const now=Date.now(); if(now<wheelLock) { wheelLock=now+250; return; } wheelLock=now+650; (d>0?next:prev)(); hideHint(); },{passive:false});
  addEventListener('hashchange',()=>{ const [a,b]=fromURL(); if(a!==i||b!==st){ mode='jump'; show(a,b); } });
  addEventListener('resize',fit); portrait.addEventListener?.('change',()=>{fit();render(true);});
  fit(); render(true);
})();
