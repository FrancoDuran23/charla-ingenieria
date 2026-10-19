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
| `assets/memes/17-pelea-bondi.jpg` | MEME: pelea con el bondi |
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
1 Portada (neutral: "Orquestación de agentes y modelos de IA" · Franco Durán · Facultad de Ingeniería · jujuy.dev) · 2 ¿Técnica, práctica, teórica o sentimental? (primera línea real: "Cuando estaba armando esta charla…") · 3 Quién soy (reveals: 26 años → Lic. en TI → consultor → founder jujuy.dev → ColeJUY → embajador/charlas + organizo/hosteo hackatones; logos Stellar, Superteam, CrecimientoAR) · 4 ColeJUY · 5 Estas semanas fueron una locura · 6 Plot twist · 7 ¿Quién programa hoy a mano? (acá aparece la pregunta por primera vez) · 8 Pantallas compartidas · 9 5 etapas (miedo → negación → posts en contra → … → esperanza) · 10 Hackatones · 11 Un modelo no es un agente · 12 ¿Qué es el harness? · 13 Orquestar es coordinar trabajo · 14 ¿Quién usa un IDE? Yo uso un ADE (+ vergüenza) · 15 Un agente, un espacio de trabajo · 16 Orca (cierre técnico: modelos + sticker "Gracias, Jev") · 17 Final feliz · 18 FOMO · 19 Comunidades · 20 Se desbloquea algo nuevo (24/7 → Grok Bot → Ben/SpaceX → pelea con el bondi) · 21 Delegar · 22 Cierre.
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
