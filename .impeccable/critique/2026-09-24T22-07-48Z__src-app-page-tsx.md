---
target: landing completa
total_score: 24
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
target_identity: "file:/Users/desarrollopashq/Documents/GitHub/LandingPage-Abogado/src/app/page.tsx"
target_fingerprint: "sha256:0a4fc2ae1352af8f94b5b406083b7aa011dfcaaf3d9c1992dc7f884c35ea6d9d"
target_path: /Users/desarrollopashq/Documents/GitHub/LandingPage-Abogado/src/app/page.tsx
timestamp: 2026-09-24T22-07-48Z
slug: src-app-page-tsx
---
Method: dual-agent (A: design review · B: detector + browser)

## Design Health Score — 24/32 (75%, Good) · n/a: 7, 10
| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of status | 3 | Sin indicador de sección activa en nav |
| 2 | Match real world | 3 | Términos sin explicar (prescripción adquisitiva, protocolización, linderaciones) |
| 3 | User control | 2 | /privacidad y /terminos sin nav ni footer; menú móvil sin scrim ni Esc |
| 4 | Consistency | 2 | 6 etiquetas de CTA para 2 acciones; voz nosotros/él; Title Case inglés |
| 5 | Error prevention | 3 | WhatsApp sin texto precargado |
| 6 | Recognition | 3 | Áreas por taxonomía legal (divorcio en Civil, tenencia en Niñez) |
| 7 | Flexibility | n/a | Landing |
| 8 | Aesthetic/minimalist | 3 | Stats duplicadas (Attorneys + Benefits), tarjeta "FL" placeholder |
| 9 | Error recovery | 2 | Solo WhatsApp/teléfono; sin email ni dirección |
| 10 | Help | n/a | Landing (FAQ existe y es buena) |

## Design specificity
~60% plantilla / 40% propio. Copy local muy bueno (ANT, alimentos, Tsáchilas); shell visual = kit "estudio jurídico premium" (kicker+H2 serif en todas las secciones, grid de iconos, banda oscura 3 beneficios, gauges). Estatua: se mantiene por decisión del cliente.
Detector: fuente limpia salvo layout-transition globals.css:193. URL: undersized text 8.8–10.4px (stat labels, navbar-brand-sub), kicker-above-heading x4, line-length ~90ch, hero-watermark sin aria-hidden. Falsos positivos: low-contrast y viewport-edge medidos durante animación .reveal. Lighthouse: Desktop A11y 96 / BP 100 / SEO 100; Mobile 100 en todo.

## Priority issues
- [P1] Servicios: 7 tarjetas planas, huérfana en desktop, ~2300px en móvil sin acción. Fix: 4 grupos por situación con CTA WhatsApp precargado por área. (/impeccable layout + clarify)
- [P1] Confianza afirmada no demostrada: "Verificado" sin fuente, gauges llenos sin dato, 9+/2017 duplicado, sin matrícula/dirección/email/testimonios, "resultados comprobados". (/impeccable clarify)
- [P1] Conversión móvil: sin barra fija WhatsApp/Llamar, hamburguesa 32x24, botones hero desiguales, WhatsApp vacío. (/impeccable adapt)
- [P2] Tono: Title Case inglés, 6 etiquetas CTA, CTA en mayúsculas "URGENTE" vs horario L–V, cita sin autor. (/impeccable clarify)
- [P2] Texto diminuto 8.8–12px; badge solapa nombre en foto; watermark sin aria-hidden; transition padding. (/impeccable polish)
- [P2] Páginas legales sin layout, sin LOPDP, sin fecha ni email. (/impeccable harden)

## Personas
Jordan: no sabe en qué área cae su caso; no sabe qué incluye la consulta gratis ni qué pasa tras escribir.
Casey: sin contacto persistente; targets pequeños; chat en blanco.
Riley: "Verificado" por quién; "Más de 7" = 7; urgente vs L–V; sin dirección; JS off = H1 invisible (.reveal).

## Minor
"use client" innecesario en Services/Benefits; FOUNDING_YEAR duplicado; icono Tierras = gráfico financiero; 404 no identificado en carga; declarar color-scheme: light; 18 SVG decorativos sin aria-hidden.

## Questions
1. ¿"Nosotros" o "el Dr. Lapo"? Un abogado solo gana confianza siendo él.
2. ¿Qué recibe el cliente en las primeras 24h tras escribir? Eso debería ser protagonista.
3. ¿Y si la promesa de transparencia de honorarios fuera el titular de Benefits?
