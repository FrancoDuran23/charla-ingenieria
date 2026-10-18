# Charla "Orquestación de agentes y modelos de IA" (Franco Durán · Facultad de Ingeniería · jujuy.dev) — HTML web deck
Workflow: new-plain (HTML, not pptx). Last phase: family (style samples).
Nav (mirrors charla.facundopadilla.com/orca: ?slide=N 1-based, ref also has &step=M for fragments): deck.js — ←/→, ↑/↓, Space/Enter, PageUp/Down, Home/End, f=fullscreen, click halves, swipe; 1280x720 stage scaled to viewport; URL synced via replaceState.
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
Orca facts (slide 12) from charla.facundopadilla.com/orca: "Agent Development Environment"; worktrees = mismo repo, varios directorios de trabajo separados; "un agente, un espacio de trabajo". Credit on slide.
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
- Agents sub-section (old 12-13 → new 12-16), condensed from Facu Padilla's deck (charla.facundopadilla.com/orca, credited on each): 12 Un modelo no es un agente (modelo: prompt→respuesta vs agente: percibe→decide→actúa→observa loop) · 13 ¿Qué es el harness? (modelo + herramientas + contexto + permisos + loop + estado = harness; "Gracias, Jev") · 14 Orquestar es coordinar trabajo (no es: malla de agentes / es: quién hace qué, cuándo y cómo se integra; "Más agentes ≠ más productividad") · 15 Un agente, un espacio de trabajo (mismo checkout → conflictos; repo → worktrees A/B/C → review (si falla, volvemos) → merge; fan-out/fan-in) · 16 Orca (ADE = Agent Development Environment; antes: caos de terminales/branches/notas "¿cuál era cuál?" → panel Orca con workers A-D; Worker = agente con tarea concreta).
- Old 14-19 → now 17-22 (CSS classes renamed s17-s22).
- Slide 19 Comunidades: nodes with real logos from jujuy.dev.ar "Los que empujan" (assets/logos/comunidades/): Superteam Argentina, SaltaDev, CuyoConnect, CrecimientoAR, Nerdearla, Formosa.dev, Mar del Plata Dev; Superteam Brasil (not on site, initials node, named by Franco). Not used (not communities): Fundación CIDEJ, Municipalidad SSJ, Gobierno de Jujuy, Celo, Ripio.
Storyboard now: 1 Portada · 2 Técnica/práctica/sentimental · 3 Quién soy · 4 ColeJUY · 5 Locura · 6 Plot twist · 7 Hace casi 1 año · 8 Pantallas compartidas · 9 5 etapas · 10 Hackatones · 11 IDE/ADE · 12-16 Agentes (Facu) · 17 Final feliz · 18 FOMO · 19 Comunidades · 20 Se desbloquea · 21 Delegar · 22 Cierre.
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
