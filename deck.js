/* Motor de slides (jujuy.dev)
   Navegación: → ↓ Espacio Enter PageDown = avanzar (paso a paso) · ← ↑ PageUp Backspace = volver
   Home/End = primera/última · f = pantalla completa · n = notas · p = abrir vista presentador
   URL: ?slide=N (1-based) &step=M (revelado progresivo) &notes=1 (vista presentador)
   Revelado: cualquier elemento con data-step="k" recibe la clase .on cuando el paso actual >= k.
   Cada <section class="slide"> calcula sus pasos = max(data-step) de sus hijos.
   Imágenes: <figure class="media" data-label="..."><img src="assets/..."></figure> muestra un placeholder
   rotulado hasta que exista el archivo. */
(function(){
  const slides=[...document.querySelectorAll('.slide')], N=slides.length;
  const stage=document.querySelector('.stage'), bar=document.querySelector('.progress i'), ctr=document.querySelector('.counter');
  const maxStep=slides.map(s=>Math.max(0,...[...s.querySelectorAll('[data-step]')].map(e=>+e.dataset.step||0)));
  const P=new URLSearchParams(location.search);
  const presenter=P.get('notes')==='1';
  let i=clamp((parseInt(P.get('slide'))||1)-1,0,N-1), st=clamp(parseInt(P.get('step'))||0,0,maxStep[i]);
  function clamp(v,a,b){return Math.min(Math.max(v,a),b)}

  // placeholders de imágenes
  document.querySelectorAll('figure.media').forEach(fig=>{
    const img=fig.querySelector('img'); if(!img) return;
    const ph=document.createElement('div'); ph.className='ph';
    ph.innerHTML=`<b></b><small></small>`; ph.querySelector('b').textContent=fig.dataset.label||'IMAGEN';
    ph.querySelector('small').textContent=img.getAttribute('src'); fig.prepend(ph);
    const ok=()=>{ if(img.naturalWidth>0) fig.classList.remove('missing'); };
    fig.classList.add('missing'); img.addEventListener('load',ok); img.addEventListener('error',()=>fig.classList.add('missing')); if(img.complete) ok();
  });

  // notas / presentador
  let notesBox=null, timerStart=Date.now();
  function buildNotes(){
    notesBox=document.createElement('div'); notesBox.className='notes-panel';
    notesBox.innerHTML='<div class="np-head"><span class="np-pos"></span><span class="np-timer"></span></div><div class="np-body"></div><div class="np-next"></div>';
    document.body.appendChild(notesBox);
    if(presenter){ document.body.classList.add('presenter'); setInterval(()=>{const s=Math.floor((Date.now()-timerStart)/1000);notesBox.querySelector('.np-timer').textContent=String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')},1000); }
  }
  function renderNotes(){
    if(!notesBox) return;
    const n=slides[i].querySelector('.notes');
    notesBox.querySelector('.np-body').innerHTML=n?n.innerHTML:'<p>(sin notas)</p>';
    notesBox.querySelector('.np-pos').textContent=`Slide ${i+1}/${N} · paso ${st}/${maxStep[i]}`;
    const nx=st<maxStep[i]?'Próximo: paso '+(st+1)+' de esta slide':(i<N-1?'Próximo: '+(slides[i+1].dataset.title||('slide '+(i+2))):'Fin');
    notesBox.querySelector('.np-next').textContent=nx;
  }
  buildNotes(); if(!presenter) notesBox.classList.add('hidden');

  const ch=('BroadcastChannel' in window)?new BroadcastChannel('jd-deck'):null;
  function show(n,s,silent){
    i=clamp(n,0,N-1); st=clamp(s,0,maxStep[i]);
    slides.forEach((el,k)=>{el.classList.toggle('active',k===i); });
    const cur=slides[i]; cur.dataset.cur=st;
    cur.querySelectorAll('[data-step]').forEach(e=>e.classList.toggle('on',(+e.dataset.step||0)<=st));
    if(bar) bar.style.width=((i+1)/N*100)+'%';
    if(ctr) ctr.textContent=String(i+1).padStart(2,'0')+' / '+String(N).padStart(2,'0');
    const q=new URLSearchParams(location.search); q.set('slide',i+1); if(st) q.set('step',st); else q.delete('step');
    history.replaceState(null,'','?'+q.toString()); renderNotes();
    if(ch&&!silent) ch.postMessage({i,st});
  }
  if(ch) ch.onmessage=e=>show(e.data.i,e.data.st,true);
  const next=()=>{ if(st<maxStep[i]) show(i,st+1); else if(i<N-1) show(i+1,0); };
  const prev=()=>{ if(st>0) show(i,st-1); else if(i>0) show(i-1,maxStep[i-1]); };

  function fit(){
    const W=presenter?innerWidth*0.6:innerWidth, H=innerHeight, s=Math.min(W/1280,H/720);
    stage.style.transformOrigin='0 0'; stage.style.left=((W-1280*s)/2)+'px'; stage.style.top=((H-720*s)/2)+'px';
    stage.style.transform=`scale(${s})`;
  }
  addEventListener('keydown',e=>{ const k=e.key; if(e.metaKey||e.ctrlKey||e.altKey) return;
    if(['ArrowRight','ArrowDown','PageDown',' ','Enter'].includes(k)){e.preventDefault();next()}
    else if(['ArrowLeft','ArrowUp','PageUp','Backspace'].includes(k)){e.preventDefault();prev()}
    else if(k==='Home') show(0,0); else if(k==='End') show(N-1,maxStep[N-1]);
    else if(k==='f') document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen();
    else if(k==='n'&&!presenter) notesBox.classList.toggle('hidden');
    else if(k==='p'){ const q=new URLSearchParams(location.search); q.set('notes','1'); window.open(location.pathname+'?'+q.toString(),'jd-presenter','width=1400,height=820'); }
  });
  addEventListener('click',e=>{ if(e.target.closest('a,.notes-panel')) return; const W=presenter?innerWidth*0.6:innerWidth; if(e.clientX>W) return; e.clientX>W/2?next():prev(); });
  let tx=null; addEventListener('touchstart',e=>tx=e.touches[0].clientX,{passive:true});
  addEventListener('touchend',e=>{ if(tx===null) return; const d=e.changedTouches[0].clientX-tx; if(Math.abs(d)>40) (d<0?next:prev)(); tx=null; });
  addEventListener('resize',fit); fit(); show(i,st,true);
})();
