# Money Project — Landing Page

Landing page en Next.js (App Router, TypeScript, Tailwind CSS v4 y Framer Motion) para el programa **Money Project Inc.**, basada en el contenido del diseño de Canva "LO QUE OBTENDRÁS DE MP LANDING" y en la página de referencia `beacons.ai/moneyprojectsv`.

## Antes de publicar

1. **Número de WhatsApp**: abrí `src/lib/content.ts` y reemplazá `WHATSAPP_NUMBER` con el número real (con código de país, sin `+` ni espacios, ej. `50371234567`). Todos los botones de "Reservar" / "Quiero mi lugar" del sitio usan esta única variable.
2. **Copy y fechas**: todo el texto del sitio (fechas, precios, currícula, preguntas frecuentes) vive en `src/lib/content.ts`. Es un solo archivo pensado para que puedas editar el contenido sin tocar los componentes.
3. Dos respuestas del FAQ ("¿Puedo entrar si no sé nada de dinero?" y "¿Qué pasa si me pierdo una sesión?") son copy razonable que redacté porque el Canva no detallaba la respuesta exacta — valdría la pena que las revises/ajustes antes de publicar.
4. El logo de "Librería Internacional" usa el asset extraído del Canva; los logos de `n1co` y `Carne y Calle` se muestran como texto porque no se pudieron descargar como PNG independiente (están protegidos como contenido premium de Canva). Si tenés esos logos en otro formato, podés reemplazarlos en `src/components/PresencialEvent.tsx`.

## Desarrollo

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Producción

```bash
npm run build
npm run start
```

## Estructura

- `src/lib/content.ts` — todo el copy, precios, fechas y datos editables.
- `src/components/` — una sección por archivo (Hero, Founders, Problem, Curriculum, Pricing, Faq, etc.).
- `public/assets/` — los assets gráficos individuales extraídos del diseño de Canva (íconos, fotos, logos).

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion (animaciones de scroll y acordeones)
- Fuentes autohospedadas vía `@fontsource` (Anton, Playfair Display, Inter) — sin dependencias externas a Google Fonts en build o runtime.
