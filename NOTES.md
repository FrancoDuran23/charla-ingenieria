# Charla "Orquestación de agentes y modelos de IA" (Franco Durán · Facultad de Ingeniería · jujuy.dev) — HTML web deck
Workflow: new-plain (HTML, not pptx). Last phase: family (style samples).
Nav (?slide=N 1-based, &step=M for fragments; now #/N/step): deck.js — ←/→, ↑/↓, Space/Enter, PageUp/Down, Home/End, f=fullscreen, click halves, swipe; 1280x720 stage scaled to viewport; URL synced via replaceState.
Files: base.css, deck.js, fonts/ (bundled TTFs, no CDN), estilo-a-quebrada.html, estilo-b-terminal.html, shot.py (playwright renders -> renders/).
Style A "Quebrada": paper #F4EADB, ink #2B1A14, terracota #C8502E, magenta #B83C6E, mostaza #E3A82B, teal #1F6F6A; Bricolage Grotesque 800 + DM Mono; aguayo side band, cerros de 7 colores.
Style B "Terminal": bg #0B0E13, panel #141922, green #39FF88, pink #FF3DA5, yellow #FFE14D; Archivo Black + JetBrains Mono + Anton (meme captions, Impact-style); window chrome, scanlines, prompt.
Defects left: meme + photo are placeholders.

## Revision: style = jujuy.dev.ar (A and B rejected)
Source: https://jujuy.dev.ar (css/tokens.css, css/jd.css), copies in ref/. Deck: estilo-jujuydev.html, render script shot_jd.py.
Palette: paper #fbfbf7, paper-raised #fff, paper-sunk #f1f0ea, ink #0a0a0a, ink-muted #55534e, line-soft #dddbd3, navy #14134d, violet #7b37e5 (accent),
 orb gradient #f624e5 -> #aa31ef -> #3f6df4, sunset #eb8046, cardon #c3408f, sky #586fcc, plum #2b1e3f. Dark theme: paper #0e0d14, violet #b18cff.
Fonts: Anton (uppercase display, line-height .88), Archivo Black, Montserrat 400-800 (body), Space Mono 700 (uppercase links, letter-spacing 4px). Local TTFs in fonts/.
Motifs: square tags (outlined 1.5px / solid black / violet), square buttons, 48x4 black bar over headings, violet highlighted word, blurred orb gradient, 18px rounded tiles + shadow 0 10px 30px rgba(20,19,77,.12), llama mascot w/ rainbow goggles, photo-tile marquee, black date blocks with orb.
Assets: assets/jujuydev-logo.webp, -logo-white.webp, -isotipo.png, -llama-hd.webp.

## FULL DECK (build) — charla.html
Workflow: new-plain (HTML web deck). Phase: build (full deck, 19 slides). Approved style: jujuy.dev.
Files: charla.html (slides + per-slide CSS + speaker notes in <aside class="notes">), charla.css (jujuy.dev tokens/components), base.css (stage + notes panel), deck.js (engine), shot_full.py (renders renders/full/slide-NN.png at final step + contact-sheet.jpg).
Engine: ?slide=N&step=M, any element with data-step="k" gets .on when step>=k (.step = fade-up, .pop = scale-in). → advances step then slide; ← goes back (lands on previous slide's last step).
Notes: n = toggle notes overlay; p = open presenter window (?notes=1): slide left 60%, notes right, step counter, next hint, timer; windows sync via BroadcastChannel.
Placeholders: <figure class="media [meme|sm|contain]" data-label="..."><img src="assets/..."></figure> → labelled striped box until the file exists.
Orca facts (slide 12): "Agent Development Environment"; worktrees = mismo repo, varios directorios de trabajo separados; "un agente, un espacio de trabajo". Credit on slide.
Storyboard: 1 Portada · 2 Técnica/práctica/sentimental (meme) · 3 Quién soy (steps 3) · 4 ColeJUY (+1500 usuarios/día, ponele) · 5 Locura (collage, steps 3) · 6 Plot twist (chips, steps 5) · 7 Hace casi 1 año (meme) · 8 Pantallas compartidas (timeline, steps 7) · 9 5 etapas del duelo (steps 5) · 10 Hackatones (steps 6) · 11 IDE/ADE (meme) · 12 Orca simple (diagrama, steps 3) · 13 Harness = agente, orquestación, Gracias Jev (steps 4) · 14 Final feliz (quote, dark) · 15 FOMO (meme) · 16 Comunidades (mapa, steps 4) · 17 Se desbloquea (candado, Grok Bot, steps 5) · 18 Delegar (4 fotos, steps 4) · 19 Cierre (steps 3).
Placeholders Franco completes in notes: slide 9 post de esperanza ("cielo"/Martín), slide 16 otras comunidades AR, slide 17 "[Grok Bot es... completar]".
Image files expected (also in assets/memes/README.md and assets/fotos/README.md):
| Archivo | Qué va |
|---|---|
| `assets/fotos/01-franco-portada.jpg` | FOTO: Franco |
| ~~`assets/memes/02-two-buttons.jpg`~~ | (slide eliminada) |
| `assets/fotos/03-franco-perfil.jpg` | FOTO: Franco (perfil) |
| ~~`assets/fotos/04-colejuy-screenshot.png`~~ | (slide eliminada) |
| `assets/fotos/05-richard-hipp.jpg` | FOTO: cowork con Richard Hipp |
| `assets/fotos/05-midudev.jpg` | FOTO: con midudev |
| `assets/fotos/05-amigos-tech.jpg` | FOTO: Artu Grande, Erasmo Hernández, Carli Code |
| `assets/fotos/05-hackatones.jpg` | FOTO: hackatones y eventos en simultáneo |
| `assets/fotos/05-coworking.jpg` | FOTO: coworking con amigos / reuniones |
| ~~`assets/memes/05-this-is-fine.jpg`~~ | (eliminado) |
| `assets/memes/07-claude-daily-limit.webp` | MEME: Claude y el límite diario (real, de Franco) |
| `assets/fotos/09-posts-en-contra.png` | CAPTURA: posts en contra de la IA |
| `assets/fotos/09-post-esperanza.png` | CAPTURA: el post que dio esperanza |
| `assets/fotos/10-hackaton.jpg` | FOTO: Franco en una hackatón |
| `assets/memes/11-verguenza.jpg` | MEME: vergüenza ajena / cara de mis compañeros |
| `assets/memes/15-fomo.jpg` | MEME: distracted boyfriend — yo / herramienta nueva / la de la semana pasada |
| `assets/fotos/18-cafe-amigos.jpg` | FOTO: café con amigos |
| `assets/fotos/18-mate-abuelos.jpg` | FOTO: mate con los abuelos |
| `assets/fotos/18-charla.jpg` | FOTO: dando esta charla |
| `assets/fotos/18-estudiar.jpg` | FOTO: estudiando / pizarrón |

## EDIT (2026-10-17) — 22 slides
Repo: /workspace/charla-ingenieria (GitHub Pages: https://francoduran23.github.io/charla-ingenieria/). index.html == charla.html (keep identical). Render check: `python3 tools/shot_full.py` → renders/full/ (gitignored).
Changes:
- Slide 3 Quién soy: logo wall — Founder (jujuy.dev) · Embajador · charlas · hackatones (Stellar from stellar.org press kit; Superteam and CrecimientoAR from jujuy.dev.ar); missing logos are hidden (no empty slots).
- Slide 5 Locura: explosion of 38 polaroid cards in 4 bursts (steps 1-4, pop/burst animation from center), title in black tag on top. Labeled highlight slots: assets/fotos/05-richard-hipp.jpg, 05-midudev.jpg, 05-artu-grande.jpg, 05-erasmo-hernandez.jpg, 05-carli-code.jpg, 05-hackatones.jpg, 05-coworking.jpg (05-amigos-tech.jpg removed), generic assets/fotos/locura/01-30.jpg (01-18 = real event photos from jujuy.dev.ar; 19-30 show llama/gradient tiles).
- Agents sub-section (old 12-13 → new 12-16), agents explainer: 12 Un modelo no es un agente (modelo: prompt→respuesta vs agente: percibe→decide→actúa→observa loop) · 13 ¿Qué es el harness? (modelo + herramientas + contexto + permisos + loop + estado = harness; "Gracias, Jev") · 14 Orquestar es coordinar trabajo (no es: malla de agentes / es: quién hace qué, cuándo y cómo se integra; "Más agentes ≠ más productividad") · 15 Un agente, un espacio de trabajo (mismo checkout → conflictos; repo → worktrees A/B/C → review (si falla, volvemos) → merge; fan-out/fan-in) · 16 Orca (ADE = Agent Development Environment; antes: caos de terminales/branches/notas "¿cuál era cuál?" → panel Orca con workers A-D; Worker = agente con tarea concreta).
- Old 14-19 → now 17-22 (CSS classes renamed s17-s22).
- Slide 19 Comunidades: nodes with real logos from jujuy.dev.ar "Los que empujan" (assets/logos/comunidades/): Superteam Argentina, SaltaDev, CuyoConnect, CrecimientoAR, Nerdearla, Formosa.dev, Mar del Plata Dev; Superteam Brasil (not on site, initials node, named by Franco). Not used (not communities): Fundación CIDEJ, Municipalidad SSJ, Gobierno de Jujuy, Celo, Ripio.
Storyboard now: 1 Portada · 2 Técnica/práctica/sentimental · 3 Quién soy · 4 ColeJUY · 5 Locura · 6 Plot twist · 7 Hace casi 1 año · 8 Pantallas compartidas · 9 5 etapas · 10 Hackatones · 11 IDE/ADE · 12-16 Agentes · 17 Final feliz · 18 FOMO · 19 Comunidades · 20 Se desbloquea · 21 Delegar · 22 Cierre.
Asset lists: assets/memes/README.md, assets/fotos/README.md, assets/logos/README.md.

## REORDER (2026-10-17, noche) — orden exacto del guion
1 Portada (neutral: "Orquestación de agentes y modelos de IA" · Franco Durán · Facultad de Ingeniería · jujuy.dev) · 2 ¿Técnica, práctica, teórica o sentimental? (primera línea real: "Cuando estaba armando esta charla…") · 3 Quién soy (reveals: 26 años → Lic. en TI → consultor → founder jujuy.dev → ColeJUY → embajador/charlas + organizo/hosteo hackatones; logos Stellar, Superteam, CrecimientoAR) · 4 ColeJUY · 5 Estas semanas fueron una locura · 6 Plot twist · 7 ¿Quién programa hoy a mano? (acá aparece la pregunta por primera vez) · 8 Pantallas compartidas · 9 5 etapas (miedo → negación → posts en contra → … → esperanza) · 10 Hackatones · 11 Un modelo no es un agente · 12 ¿Qué es el harness? · 13 Orquestar es coordinar trabajo · 14 ¿Quién usa un IDE? Yo uso un ADE (+ vergüenza) · 15 Un agente, un espacio de trabajo · 16 Orca (cierre técnico: modelos + sticker "Gracias, Jev") · 17 Final feliz · 18 FOMO · 19 Comunidades · 20 Se desbloquea algo nuevo (24/7 → Grok Bot) · 21 Delegar · 22 Cierre.
Removed: "Analista Programador Universitario", "y gané unas cuantas", "Hackatones ganadas/hosteadas". The CSS classes s11–s16 keep their old names (s11 = IDE slide, now 14th) — styling only, not position.

## UPDATE (2026-10-17, 23:50) — 20 slides
- Slide "¿Técnica, práctica, teórica o sentimental?" eliminada; su nota ("Cuando estaba armando esta charla…") pasó a la portada.
- Portada: dibujo real que mandó Franco (assets/memes/01-dad-agentic-workflows.jpg, "To relax my dad likes to make agentic workflows") en lugar de la foto placeholder.
- Quién soy: logos Stellar, Superteam, CrecimientoAR, Celo, Ripio.
- Slide ColeJUY eliminada; su contenido (colectivos en vivo, open source, +1500 usuarios/día) pasó a las notas de Quién soy, y el logo oficial de ColeJUY (assets/logos/colejuy.png, enviado por Franco) va en la fila de logos junto a jujuy.dev ("Founder · creador").
Orden final (20): 1 Portada · 2 Quién soy · 3 Locura · 4 Plot twist · 5 ¿Quién programa hoy a mano? · 6 Pantallas compartidas · 7 5 etapas · 8 Hackatones · 9 Modelo ≠ agente · 10 Harness · 11 Orquestar · 12 IDE/ADE · 13 Worktrees · 14 Orca (+ los modelos que uso: Claude Sonnet, Haiku, Opus, Fable y ⭐ Jev) · 15 Final feliz · 16 FOMO · 17 Comunidades · 18 Se desbloquea · 19 Delegar · 20 Cierre.

## UPDATE (2026-10-17, 23:59)
- Slide 14 Orca: el sticker "Gracias, Jev" se reemplaza por "Los modelos que uso": chips de texto Claude Sonnet, Haiku, Opus, Fable (paso 4) y Jev destacado con ⭐ y "¡y Jev!" (paso 5). Jev es un modelo, no una persona. Sin logos.
- Slide 3 Locura: se eliminó la tarjeta "Me amenazaron por una app…" (meme this is fine) y la mención en las notas.

## UPDATE (2026-10-18, 00:10) — 19 slides
- Slide "Final feliz" eliminada. La anécdota del team leader ("Franco, tenés razón…", cayó con Herd) queda como intro opcional en las notas de "El FOMO me hizo la casa". En la slide IDE/ADE se sacó "esto tiene final feliz, ya lo cuento".
Orden final (19): 1 Portada · 2 Quién soy · 3 Locura · 4 Plot twist · 5 ¿Quién programa hoy a mano? · 6 Pantallas compartidas · 7 5 etapas · 8 Hackatones · 9 Modelo ≠ agente · 10 Harness · 11 Orquestar · 12 IDE/ADE · 13 Worktrees · 14 Orca (+ modelos) · 15 FOMO · 16 Comunidades · 17 Se desbloquea · 18 Delegar · 19 Cierre.

## UPDATE (2026-10-18, 00:15)
- Slide 3 Locura: fotos reales de Franco (assets/fotos/locura/franco-01..04.jpg) en las tarjetas grandes del primer burst; fotos de jujuy.dev.ar (01-18) como relleno en bursts 2-4. Se sacaron los slots vacíos (Richard Hipp, midudev, Artu, Erasmo, Carli, hackatones, coworking) y las tarjetas llama #19-30; cualquier tarjeta sin imagen se oculta.
- Sin referencias a otras charlas: se quitaron los créditos de las slides de agentes y sus menciones en notas.

## UPDATE (2026-10-18, 00:25)
- Slide 3 Locura: solo fotos reales y distintas (franco-01 + 17 de jujuy.dev.ar). Eliminadas franco-02/04 (capturas), franco-03 (ilustración), 15.jpg (casi duplicado de franco-01). Explosión rebalanceada: tarjetas más grandes en 3 bursts. Detalle en assets/fotos/README.md.
- Slide 15: título cambiado a "Cada semana algo nuevo: bienvenido al FOMO" (antes "El FOMO me hizo la casa").
- Slide 3: nueva foto de Franco con midudev (assets/fotos/locura/midudev.jpg, recortada de historia de IG) como tarjeta grande del primer burst.
- Slide 3: nuevas fotos de Franco recortadas de historias de IG: hackcba-pitch.jpg ("HackCBA"), hackcba-sala.jpg, colejuy-app.jpg ("ColeJUY en vivo", captura intencional). Burst 1: HackCBA pitch, Superteam, midudev; burst 2: sala HackCBA, ColeJUY; fotos de jujuy.dev.ar en bursts 2-4.
- Slide 3: foto real "This is fine" (assets/fotos/locura/this-is-fine.jpg) como último burst (paso 5), tarjeta grande arriba de todo, sin caption.
- Slide 3: flyer Metropolis Argentina & LATAM (metropolis.jpg) en burst 2; "This is fine" achicada y movida abajo al centro para no tapar la cara de Franco en la foto Superteam.

## UPDATE (2026-10-18, 01:10) — fotos repartidas en sus slides (nada repetido)
- Slide 2 Quién soy: perfil = assets/fotos/03-franco-perfil.jpg (foto de Franco con remera ST, adjunto sin usar, recortada solo a él).
- Slide 7 5 etapas: “This is fine” (assets/fotos/09-this-is-fine.jpg) aparece en el paso 4 (“…”), tarjeta grande 380×500 a la derecha, borde blanco + sombra violeta; sale de la slide 3.
- Slide 8 Hackatones: 10-hackaton.jpg (Franco pitcheando en HackCBA) + 10-hackaton-sala.jpg (tarjeta chica superpuesta abajo a la derecha); salen de la slide 3.
- Slide 18 Delegar: fila en flex (los slots sin foto se cierran): café = mate y código (ex locura/07), charla = charla Superteam (ex locura/06), estudiar = mentoría (ex locura/08). “Mate con los abuelos” sigue sin foto (oculto; el paso 2 queda sin imagen).
- Slide 3 Locura: nuevas diario-cabildo-tech.jpg (“Salimos en el diario”, burst 1) y perro-robot.jpg (burst 2); explosión reacomodada (20 tarjetas, 4 bursts).
- Global: `.slide figure.media.missing{display:none}` — ningún placeholder rayado en el deck (memes 11/15/17 y capturas de la slide 7 ocultos hasta que existan).
- tools/shot_steps.py: renders de pasos sueltos (`python3 tools/shot_steps.py 3:1 7:4`).

## UPDATE (2026-10-18, 20:30)
- Slide 2 Quién soy: nuevo perfil = foto de Franco de perfil con remera Superteam ARG (attachment 2d1c027d…png → assets/fotos/03-franco-perfil.jpg, recorte cara + logo). Se descarta la foto anterior (Franco con el señor que lo abraza). Como era la misma que locura/franco-01.jpg, esa se sacó de la slide 3 (archivo eliminado).
- Slide 3 Locura: 8 fotos nuevas de Franco (coworking-llama, coworking-noche-2, franco-charla, franco-amigo-speaker, selfie-auditorio-2, grokbot-salta “Grok Bot Salta”, grupo-carpa, selfie-grupo-sala). 02.jpg eliminada (casi idéntica a selfie-auditorio-2, de menor calidad). Explosión rearmada: 26 tarjetas; burst 1 = diario, franco-charla, midudev, franco-amigo-speaker, selfie-grupo-sala; burst 2 = selfie-auditorio-2, ColeJUY, Grok Bot Salta, Metropolis, perro robot + jujuy.dev 03/04/14/16; burst 3 = coworking-llama, coworking-noche-2, grupo-carpa + jujuy.dev 09/10/11/12/17; burst 4 = jujuy.dev 01/05/13/18. Detalle en assets/fotos/README.md.

## UPDATE (2026-10-18, 20:55) — slide 6 Las pantallas compartidas
- Lead: “Hace 5 meses…” (sin “en el laburo”, también en las notas).
- Timeline pasa a vertical a la izquierda (mismos 6 textos y pasos, “👈 yo” al lado del 6) y a la derecha una captura grande (614×345) que cambia en cada paso 1–6; el remate “…pero ninguno trabajaba como yo.” (paso 7) queda abajo, sin tapar nada.
- Las 6 capturas son mockups genéricos (no había capturas reales que encajen): assets/capturas/06-*.png, fuente assets/capturas/src/06-mockups.html, render con tools/render_capturas.py. Detalle en assets/capturas/README.md.

## UPDATE (2026-10-18, 21:25) — slide 3
- Nueva foto en el burst 1: assets/fotos/locura/richard-hipp.jpg (cowork con Richard Hipp, creador de SQLite; adelante la laptop de Franco con Omarchy), tarjeta grande arriba a la derecha con caption “Cowork con el creador de SQLite”. selfie-auditorio-2 pasa al burst 3 (esquina superior derecha), coworking-llama a la franja de arriba y 16.jpg al burst 4. 27 tarjetas.

## UPDATE (2026-10-18, 21:30) — slide 6
- Franco no revela acá cómo trabaja: el punto 6 del timeline es solo un “?” grande violeta (sin “Agentes en paralelo · orquestación” ni “👈 yo”); en el paso 6 el marco de la derecha muestra una pantalla misteriosa (ventana negra con “?” en degradé orb, HTML/CSS en la slide). 06-6-agentes-paralelo.png ya no se usa.
- Se eliminó el remate “…pero ninguno trabajaba como yo.” y su paso (la slide tiene 6 pasos). Notas: “¿Y el 6? Lo vemos después de las etapas del duelo.”

## UPDATE (2026-10-18, 21:40) — slide 7 paso 1 (Miedo)
- 4 burbujas tipo post, anónimas y genéricas (avatar gris sin nombre, sin @, sin logos, sin contadores), pop escalonado con el paso 1, a la derecha de la lista: “Me echaron y me reemplazaron con un chatbot.” · “Despidieron a medio equipo de soporte por la IA.” · “Hice 10 años de diseño y ahora lo hace una app en 5 segundos.” · “¿Para qué estudié programación si ahora lo hace la IA?”. Se ven en los pasos 1–3 y se desvanecen al entrar “This is fine” (paso 4) para no taparla (`.s09:has(.tif.on) .fear`).

## UPDATE (2026-10-19, 14:30) — slide 6
- Se eliminó “Autocompletar en el IDE” y su captura (06-2 deja de usarse). Quedan 5 pasos: 1 Chat + copiar/pegar · 2 CLI · 3 Prompts larguísimos · 4 Skills / AGENTS.md · 5 “?” (pantalla misteriosa). Timeline vertical con 68 px entre nodos; badges de los mockups renumerados (CLI 2, prompt 3, AGENTS.md 4). Notas: “¿Y el 5?…”.

## UPDATE (2026-10-19, 14:40) — slide 7 con las 5 etapas clásicas
- 01 Negación (“La IA no sirve, escribe código malo”) · 02 Ira (Posts en contra y gente que se quedó sin laburo; acá entran las 4 burbujas anónimas y el slot oculto 09-posts-en-contra.png) · 03 Negociación (“La uso solo para autocompletar, nada más”) · 04 Depresión (foto This is fine; las burbujas se desvanecen) · 05 Aceptación (¡Pum! Esperanza, violeta; slot oculto 09-post-esperanza.png). Sin “Miedo”, “Posts en contra” ni “…”. Notas reescritas por etapa; cierran con que después se revela el punto “?” (cómo trabajo yo).

## UPDATE (2026-10-19, 14:50) — slide 17
- Eliminada la línea PD a Ben/SpaceX (HTML, CSS `.ben` y notas). El meme de la pelea con el bondi (slot oculto) pasa al paso 4; quedan 4 pasos.
- Tarjeta `.gb`: ícono oficial de Grok Bot al lado del nombre (`assets/logos/grokbot.png`, extraído del og:image oficial de x.ai/bot).

## UPDATE (2026-10-19, 15:00) — slides 15 y 18
- Slide 15 (FOMO): nuevo remate en el paso 2 (último), bloque punch negro con sombra violeta a la derecha: “Animate a instalar algo nuevo: no tiene que ser algo mejor.” Sumado a las notas.
- Slide 18 (Delegar): caption “☕ Un café con amigos” → “🧉 Unos mates con amigos” (también label y notas).

## UPDATE (2026-10-19, 15:10) — slide 19 Cierre: QRs
- Nuevo paso 4: dos tarjetas QR grandes (196 px, borde negro + sombra violeta) bajo “¡Gracias!”: “Sumate a la comunidad” (WhatsApp de jujuy.dev, link del botón “Unite a la comunidad” de jujuy.dev.ar) y “Seguime en Instagram” (@francoduran.23). La llama se achica a la esquina inferior derecha y el orbe se apaga al aparecer los QR. Ver assets/qr/README.md. Notas actualizadas.

## UPDATE (2026-10-19, 17:50) — transiciones entre slides
- deck.js + charla.css: al cambiar de slide, la saliente se desliza 90 px hacia el lado contrario al avance y se desvanece; la entrante entra desde 110 px del otro lado con fade (450 ms, cubic-bezier(.22,1,.36,1); hacia atrás, espejado). Saltos (índice O, URL/hash, teclas 1–9, Inicio/Fin, saltos sincronizados del presentador) = fade simple de 250 ms. Los pasos dentro de una slide no cambian.
- Detalle jujuy.dev: barrido del gradiente del deck (magenta→violeta→azul, 6 px) sobre el borde superior en la dirección de avance; desaparece al terminar. No tapa contenido.
- Solo transform/opacity (translate3d) → fluido en iPhone. prefers-reduced-motion: sin animación.

## UPDATE (2026-10-19, 21:45) — nueva slide 14 “Para probar en casa” (deck = 20 slides)
- Insertada después de “Un agente, un espacio de trabajo” (13) y antes de “Orca, explicado simple”. Dos QR grandes (paso 1, mismo estilo que el cierre): “Skills de Matt Pocock” → github.com/mattpocock/skills y “Descargá Orca” → onorca.dev/download (ver assets/qr/README.md). Notas: invitar a escanear.
- Renumeración: todo lo que en este archivo figura como slide 14–19 ahora es 15–20 (Orca 15, … FOMO 16, Comunidades 17, Se desbloquea 18, Delegar 19, Cierre 20). Contador e índice se generan solos; no hay links internos #/N fijos en el deck.

## UPDATE (2026-10-20, 15:20) — +700, Quién soy sin ColeJUY, sin “pelearme con empresas”
- jujuy.dev pasa de +600 a +700 en todo el deck (slide 2 “Founder de jujuy.dev · +700 entusiastas tech” y sus notas; Comunidades “Nace jujuy.dev · +700”).
- Slide 2 Quién soy: fuera el ítem “Creador de ColeJUY”, el logo de ColeJUY en la fila Founder (queda solo jujuy.dev; rótulo “Founder”) y el párrafo de ColeJUY en las notas. Ítems 01–05, pasos 1–4 (Embajador + Hackatones + logos en el paso 4). La foto “ColeJUY en vivo” de la slide 3 sigue.
- Slide 18 Se desbloquea: fuera el chip “🥊 Pelearme con empresas”, el slot del meme 17-pelea-bondi (“Yo vs. las empresas (con refuerzos)”, su CSS) y las menciones en notas. Quedan 3 pasos.

## UPDATE (2026-10-20, 15:50) — slide 12 ¿Quién usa un IDE?: logos Orca + herdr
- En el paso 1 (con “ADE: Orca”) aparece una fila de dos tarjetas blancas con borde (estilo logos de Quién soy) bajo el texto: Orca (borde violeta, onorca.dev) y herdr (herdr.dev). No tocan el slot del meme (columna derecha). Fuentes en assets/logos/README.md.
- (15:55) Logos de Orca y herdr movidos a la mitad derecha (donde iba el meme 11): dos tarjetas grandes apiladas y centradas (ícono 168 px, nombre 76 px), Orca con sombra violeta. Siguen en el paso 1. El slot del meme 11 queda oculto siempre (`.s11 .meme{display:none!important}`) aunque aparezca el archivo, para no superponerse.

## UPDATE (2026-10-20, 16:05) — nueva slide 12 “Orquestar es armar un DAG” (deck = 21)
- Búsqueda previa: no había ni hubo contenido sobre DAG / grafo acíclico dirigido (grep en charla.html/NOTES y `git log -S` en todo el historial: sin resultados). La slide 11 “Orquestar es coordinar trabajo” ya está llena, así que va una slide nueva justo después.
- Diagrama HTML/SVG con el estilo de la sub-sección agentes: paso 1 Planificar · paso 2 Backend y Frontend en paralelo (caja punteada violeta “en paralelo”) · paso 3 Tests → Deploy 🚀 · paso 4 flecha roja punteada de vuelta al principio tachada (“Prohibido volver al principio”). Leyenda abajo: Nodo / Flecha / Paralelo / Sin ciclos. Notas: explicación simple (sin datos ni citas).
- Kickers de la sub-sección renumerados a /6 (DAG = 4/6, worktrees 5/6, Orca 6/6). Renumeración: ¿Quién usa un IDE? 13, Un agente un espacio 14, Para probar en casa 15, Orca 16, FOMO 17, Comunidades 18, Se desbloquea 19, Delegar 20, Cierre 21.
- (2026-10-20, 16:10) Slide 17 FOMO: remate cambiado a “El que no prueba, / no se entera.” (mismo bloque punch, paso 2; notas actualizadas). El “Animate a instalar algo nuevo” del Cierre no se tocó.

## UPDATE (2026-10-20, 16:20) — animaciones en loop
- Slide 11 “Orquestar es coordinar trabajo” (paso 2+): escena SVG/CSS propia abajo a la izquierda: orquestador con chullo y mate revolea un látigo en el aire (“¡CHAS!”, no golpea a nadie); 4 robotitos con laptops tecleando se sobresaltan con cada chasquido (saltito + gota de sudor) y su barra de progreso pega un tirón. Loop 2,4 s. GIF/MP4 de muestra en /workspace/latigo-orquestador.{gif,mp4} (fuera del repo).
- Slide 12 DAG (paso 3+): dos “tareas” (puntos violeta) salen de Planificar, van en paralelo por Backend y Frontend, se juntan en Tests y llegan a Deploy, que hace un “ping”.
- Slide 14 worktrees: paso 1, tres puntos rojos chocan en el mismo Repo y “💥 conflictos” tiembla; paso 3, tres puntos violeta viajan en paralelo (a distinta velocidad) Repo → Worktree A/B/C → Review → Merge.
- Solo transform/opacity/offset-distance; pausadas fuera de la slide activa; con prefers-reduced-motion no hay animación (los puntos se ocultan, la escena queda quieta).

## UPDATE (2026-10-20, 16:30) — DAG coherente con el code review
- Slide 12: Planificar → Backend ∥ Frontend → Tests → **Code review** → Deploy. Code review tiene un loop chiquito sobre sí mismo (“↻ arreglar”, paso 4) con un puntito que da vueltas y el ↻ girando (sin animación con reduced-motion). Fuera la flecha roja tachada “Prohibido volver al principio”; en su lugar: “Cada tarea puede iterar adentro; el plan no vuelve atrás.” Leyenda: “↻ Sin ciclos entre tareas: los loops viven adentro de cada nodo”. Notas: el loop de review vive adentro del nodo; entre tareas no hay ciclos. Los puntitos del flujo pasan por Code review.
- Slide 14 (worktrees) ya es coherente: su “si falla, volvemos” es el mismo loop review ↔ worktree dentro de una tarea; no se tocó.

## UPDATE (2026-10-20, 16:25) — Delegar con fotos nuevas + DAG en rondas
- Slide 20 Delegar: “🎤 Explicar esto acá” → foto nueva `18-franco-hablando.jpg` (Franco hablando, remera West Coast Indigo; el texto ya coincidía, no se cambió). Era la misma foto que `locura/franco-charla.jpg` de la slide 3: se sacó de la 3 y en su tarjeta va la foto anterior de Delegar (`locura/charla-superteam.jpg`, ex 18-charla). “📚 Estudiar productos y el problema” (texto pedido) → foto nueva `18-estudiar-laptop.jpg` (Franco con tres chicos y la laptop con stickers); `18-estudiar.jpg` queda sin uso. Notas ajustadas.
- Slide 12 DAG: se saca el self-loop “arreglar” de Code review. Ahora flecha violeta punteada de Code review de vuelta a Planificar con “↻ reorquestar si algo está mal”; mensaje “Cada ronda es un DAG. Si el review encuentra algo mal, el orquestador arma una ronda nueva.”; leyenda “↻ Sin ciclos dentro de una ronda: el review dispara una ronda nueva”. Animación: tras el review un puntito vuelve por esa flecha y se ilumina solo Backend (“se rehace”). Notas: reorquestar sí es un ciclo, por eso se piensa en rondas y cada ronda es un DAG.
- (2026-10-20, 16:30) Slide 20 Delegar: “🧉 Unos mates con amigos” → foto nueva `18-mates-hackaton.jpg` (amigos en una mesa de hackatón con Takis, Monster y stickers de jujuy.dev; ancho completo, se ven caras, Takis y stickers). Texto sin cambios; `18-cafe-amigos.jpg` queda sin uso. No está repetida en el deck.

## UPDATE (2026-10-20, 16:45) — animaciones visibles para Franco (bug de .flow + reduced-motion)
- Bug: la clase genérica `.flow` de los puntitos animados chocaba con `<div class="flow">` de la slide 8 (Hackatones): el contenedor de los tags heredaba el círculo con offset-path y se movía/deformaba (“la línea rara”). Los puntitos ahora son `.fdot`; la slide 8 vuelve a verse como antes.
- Las animaciones decorativas ya no se apagan con “Reducir movimiento” (Mac de Franco); solo las transiciones entre slides lo respetan.
- Puntitos más grandes (24 px, borde blanco 3 px, halo) y por encima de las cajas (z-index 5–6).
- Nuevos: slide 9 “Un modelo no es un agente” (paso 2): un puntito recorre el loop Percibe → Decide → Actúa → Observa. Slide 11 “Orquestar” (paso 2): puntitos salen del orquestador hacia UX/UI, Backend, Tests y Review (además del látigo).
- (2026-10-21, 12:05) Slide 1 Portada: dos QR abajo a la izquierda (tarjetas horizontales QR 118 px + etiqueta, estilo cierre): “Seguí la charla” → charla online y “IG de jujuy.dev” → instagram.com/jujuy.dev. Título a 90 px y bloque subido para hacerles lugar; “Deslizá →” movido a la derecha de los QR.
