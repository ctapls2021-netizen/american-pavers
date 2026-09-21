# 📘 PLAYBOOK MAESTRO: DESARROLLO DE SITIOS WEB DE ALTO RENDIMIENTO, SISTEMA DE DISEÑO Y PROTOCOLO DE IA

> **Propósito de esta guía**: Manual de referencia técnica y metodológica para agentes de IA y desarrolladores. Permite construir sitios web corporativos y de conversión de clase mundial para **cualquier marca o industria**, garantizando puntuaciones de **95-100 en Google PageSpeed Insights (Móvil y Desktop)**, coherencia visual rigurosa, cero alucinaciones de contenido y estándares profesionales de multimedia.

---

## ÍNDICE GENERAL

1. [Arquitectura Tecnológica Recomendada](#1-arquitectura-tecnológica-recomendada)
2. [Estrategia de Optimización Extrema de Velocidad (PageSpeed 95-100)](#2-estrategia-de-optimización-extrema-de-velocidad-pagespeed-95-100)
3. [Reglas Estrictas de Jerarquía Visual, Títulos y Subtítulos](#3-reglas-estrictas-de-jerarquía-visual-títulos-y-subtítulos)
4. [Sistema de Diseño Agnóstico de Marca (Multi-Industria)](#4-sistema-de-diseño-agnóstico-de-marca-multi-industria)
5. [Protocolo del Agente: Preguntas Obligatorias y Regla Anti-Invención](#5-protocolo-del-agente-preguntas-obligatorias-y-regla-anti-invención)
6. [Estándares de Calidad y Optimización de Imágenes y Videos](#6-estándares-de-calidad-y-optimización-de-imágenes-y-videos)
7. [Checklist Pre-Despliegue y Validación Final](#7-checklist-pre-despliegue-y-validación-final)

---

## 1. ARQUITECTURA TECNOLÓGICA RECOMENDADA

Para lograr 100/100 en Desktop y 95+ en Móvil con costos de infraestructura cercanos a cero, se debe emplear una arquitectura de **Static Site Generation (SSG) distribuida en el Edge**:

### Stack Principal:
- **Framework**: **Next.js (App Router)** con TypeScript.
- **Exportación**: Estática pura (`output: 'export'` en `next.config.ts`). Genera HTML, CSS y JS planos en el directorio `out/`.
- **Hosting / CDN**: **Cloudflare Pages**, **Vercel** o **AWS CloudFront/S3**.
  - *Ventaja*: Cero cold starts, TTFB (Time to First Byte) inferior a 50 ms a nivel global, compresión automática Brotli y cacheo en el Edge.
- **Estilos**: **Tailwind CSS**. Genera únicamente el CSS de las clases realmente utilizadas (usualmente menos de 20 KB gzipped).
- **Iconografía**: **Lucide React** (importaciones nombradas directas para permitir Tree Shaking efectivo).
- **Animaciones**: **Framer Motion** utilizado de forma contenida o transiciones CSS nativas por hardware (`transform`, `opacity`).

### Separación de Capas (Single Source of Truth):
Nunca escribas textos, teléfonos, colores o servicios quemados (*hardcoded*) dentro de los componentes JSX. La estructura de carpetas debe ser:
```text
├── public/
│   ├── assets/
│   │   ├── banners/           # Fondos y héroes optimizados (versión desktop y móvil)
│   │   ├── logos/             # SVGs de la marca
│   │   └── transformations/   # Fotos de proyectos reales
│   └── videos/                # Videos web optimizados
├── src/
│   ├── app/                   # Rutas y páginas (Server Components por defecto)
│   ├── components/
│   │   ├── layout/            # Navbar, Footer, WhatsAppButton
│   │   ├── sections/          # Héroes, Grids, Sliders, FAQs, CTA Banners
│   │   └── ui/                # Botones, Modales, Acordeones, Inputs
│   └── data/
│       ├── company.ts         # Teléfonos, licencias, redes, cobertura, slogan
│       ├── services.ts        # Catálogo oficial de servicios, beneficios, FAQs
│       └── testimonials.ts    # Reseñas reales verificadas
```

---

## 2. ESTRATEGIA DE OPTIMIZACIÓN EXTREMA DE VELOCIDAD (PAGESPEED 95-100)

Google PageSpeed Insights simula en móviles un dispositivo de gama media-baja (Moto G4 / Pixel 2) conectado a una red **4G lenta estrangulada** (1.6 Mbps de bajada, 150 ms de latencia RTT). En estas condiciones, cualquier error de carga penaliza gravemente el puntaje.

### A. Eliminación del "Video Trap" en Móviles
> [!CAUTION]
> **El mayor destructor de puntaje móvil**: Poner un `<video>` con `className="hidden md:block"`.
> Aunque esté oculto visualmente con CSS, los navegadores basados en Chromium (Chrome en Android) **analizan las etiquetas `<source>` y descargan megabytes del archivo de video mediante peticiones HTTP Range en segundo plano**. Esto dispara el LCP a más de 9 segundos y desploma la puntuación a 50-65.

**Solución obligatoria**:
Renderizado condicional en React dependiente del viewport real:
```tsx
const [isDesktop, setIsDesktop] = useState(false);

useEffect(() => {
  if (typeof window !== 'undefined') {
    setIsDesktop(window.innerWidth >= 768);
  }
}, []);

return (
  <>
    {/* En móvil se muestra el póster ultraligero instantáneo */}
    <picture>
      <source media="(max-width: 768px)" srcSet="/assets/banners/hero-mobile.webp" />
      <img src="/assets/banners/hero-desktop.webp" alt="Hero" className="..." />
    </picture>

    {/* El video SOLO se monta en el DOM si el cliente es Desktop */}
    {isDesktop && (
      <video ref={videoRef} playsInline muted preload="metadata" className="hidden md:block ...">
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
    )}
  </>
);
```

### B. Optimización del LCP (Largest Contentful Paint < 2.5s)
El LCP casi siempre es la imagen del Hero.
1. **Doble versión obligatoria del Banner Hero (La Regla del Aspect Ratio)**:
   > [!WARNING]
   > **La Trampa de Relación de Aspecto (Aspect Ratio Trap)**: NUNCA utilices un recorte panorámico horizontal (ej. 720 × 216 px, ratio 3.3:1) en un contenedor móvil `h-[100dvh]` con `object-cover`.
   > - El navegador escala la imagen verticalmente casi 4x para llenar los ~850 px de alto del teléfono, recortando el 85% de los laterales y arruinando el encuadre.
   > - Lighthouse analiza los píxeles nativos (0.15 MP) frente al peso (38 KB) y asume un factor de compresión pésimo, reportando la advertencia *"Mejorar la entrega de imágenes: Ahorro estimado de 33 KiB"*.
   - **Versión Móvil**: Encuadre **vertical nativo 9:16** (540 × 960 px o 480 × 854 px), WebP calidad 60-65. **Peso estricto: entre 22 KB y 30 KB**. Encaja natural en la pantalla y aprueba al 100% la entrega de imágenes.
   - **Versión Desktop**: 1920 × 1080 px (o 1920 × 580 px panorámico), WebP calidad 75-80. **Peso: entre 200 KB y 350 KB**.
2. **Precarga en el `<head>` del HTML (`RootLayout`)**:
   Precarga condicionalmente la imagen correspondiente al dispositivo en `src/app/layout.tsx`:
   ```html
   <link rel="preload" as="image" href="/assets/banners/hero-mobile.webp" type="image/webp" media="(max-width: 768px)" fetchPriority="high" />
   <link rel="preload" as="image" href="/assets/banners/hero-desktop.webp" type="image/webp" media="(min-width: 769px)" fetchPriority="high" />
   ```
3. **Atributos en el `<img>` del Hero**:
   - `loading="eager"` (nunca `lazy` en el Hero).
   - `decoding="async"` (permite que el hilo de renderizado pinte el primer fotograma sin esperar la decodificación síncrona).
   - `fetchPriority="high"`.

### C. Eliminación del "Element Render Delay" (De 1190ms a <250ms)
> [!IMPORTANT]
> **El Asesino Invisible del LCP Móvil**: En el desglose de LCP de PageSpeed, puedes ver que el recurso se descarga en apenas 40 ms, pero el tiempo de renderizado se dilata a 1190 ms. Esto se debe a 3 causas principales:

1. **Timers e Intervalos Fuera de Pantalla (Offscreen Main-Thread Starvation)**:
   - Si un componente secundario (ej. un círculo orbital de pasos, un contador animado o un carrusel) ejecuta un `setInterval` cada 50 ms desde el montaje, fuerza 20 re-renderizados de React por segundo.
   - En CPUs móviles con estrangulamiento (throttling), React acapara el hilo principal recalculando estilos durante 3+ segundos.
   - **Solución Obligatoria**: Pausar cualquier loop continuo con `IntersectionObserver` hasta que el componente sea visible:
   ```tsx
   const [isVisible, setIsVisible] = useState(false);
   const containerRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
     const el = containerRef.current;
     if (!el || typeof IntersectionObserver === 'undefined') {
       setIsVisible(true);
       return;
     }
     const observer = new IntersectionObserver(([entry]) => {
       setIsVisible(entry.isIntersecting);
     }, { rootMargin: '100px' });
     observer.observe(el);
     return () => observer.disconnect();
   }, []);

   useEffect(() => {
     if (!isVisible) return; // Cero consumo de CPU durante la carga inicial
     const timer = setInterval(() => { /* animar */ }, 50);
     return () => clearInterval(timer);
   }, [isVisible]);
   ```

2. **Redistribución Forzada (Forced Reflow / Layout Thrashing)**:
   - En `Navbar` o barras superiores, consultar `window.scrollY`, `offsetWidth` o `getBoundingClientRect` dentro de un `useEffect` durante la hidratación fuerza al navegador a recalcular la geometría antes de pintar.
   - **Solución Obligatoria**: Diferir siempre la lectura de scroll inicial mediante `requestAnimationFrame`:
   ```tsx
   useEffect(() => {
     const onScroll = () => setScrolled(window.scrollY > 15);
     window.addEventListener('scroll', onScroll, { passive: true });
     const rafId = requestAnimationFrame(onScroll); // Difiere tras el primer paint
     return () => {
       cancelAnimationFrame(rafId);
       window.removeEventListener('scroll', onScroll);
     };
   }, []);
   ```

### D. Optimización de Fuentes en el Edge (Cloudflare Fonts y Zero Render-Blocking)
1. **Eliminar Preconnects Huérfanos**:
   - Si el sitio corre detrás de Cloudflare con "Cloudflare Fonts" activo, Cloudflare reescribe las fuentes para servirlas desde `/cf-fonts/`.
   - **Nunca incluyas** `<link rel="preconnect" href="https://fonts.googleapis.com">` o `fonts.gstatic.com` si Cloudflare proxifica las fuentes, ya que Lighthouse penalizará las conexiones abiertas que nunca se usaron.
2. **Carga Asíncrona de Hojas de Estilos de Fuentes**:
   - Evita que la hoja de estilos de Google Fonts bloquee el First Contentful Paint (FCP) usando la técnica de cambio de medio:
   ```html
   <link
     href="https://fonts.googleapis.com/css2?family=Fustat:wght@400;600;700;800&family=Source+Serif+4:ital,opsz,wght@0,8..60,600..800&display=swap"
     rel="stylesheet"
     media="print"
     // @ts-ignore
     onLoad="this.media='all'"
   />
   <noscript>
     <link
       href="https://fonts.googleapis.com/css2?family=Fustat:wght@400;600;700;800&family=Source+Serif+4:ital,opsz,wght@0,8..60,600..800&display=swap"
       rel="stylesheet"
     />
   </noscript>
   ```

### E. Desactivación de "Rocket Loader" en Cloudflare
> [!CAUTION]
> Cloudflare suele tener activado por defecto **Rocket Loader** (`rocket-loader.min.js`). Rocket Loader altera los scripts de JavaScript a `type="text/rocketscript"` para retrasar su ejecución hasta después del evento `window.onload`.
> En aplicaciones Next.js y React, esto retrasa la hidratación, rompe event listeners y degrada la interactividad móvil.
> **Acción requerida**: En el panel de Cloudflare ➔ **Speed** ➔ **Optimization** ➔ **Rocket Loader**: poner en **OFF**.

### F. Control de CLS (Cumulative Layout Shift = 0.000)
1. **Dimensiones explícitas y la trampa de Preload en React 19**:
   - En React 19 / Next.js App Router, **cualquier etiqueta `<img>` sin `loading="lazy"` se considera crítica y el compilador inyecta un `<link rel="preload" as="image">` en el `<head>`**.
   - Si el logotipo del Footer o una imagen secundaria no lleva `loading="lazy"`, se precargará en el `<head>`, compitiendo por ancho de banda móvil con el póster LCP del Hero.
   - **Regla Estricta**: Toda imagen secundaria o bajo el pliegue debe incluir:
     ```tsx
     <img src="..." alt="..." width={163} height={44} loading="lazy" decoding="async" />
     ```
2. **Reserva de espacio para fuentes**:
   Usa `display=swap` en Google Fonts y define fallbacks tipográficos (`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif` y `Georgia, serif`) para evitar saltos visuales al renderizar el texto.

### G. Optimización de Tarjetas de Servicios Secundarias
- Las imágenes de tarjetas en grids de servicios se muestran en móvil a un ancho de entre 350 px y 390 px.
- **Dimensiones ideales**: `400 × 250 px` (formato WebP calidad 65).
- **Peso objetivo**: **Entre 13 KB y 20 KB** (nunca más de 30 KB).
- **Atributos**: `loading="lazy" decoding="async" fetchPriority="low"`.
- Esto reduce el peso acumulado de 6 tarjetas de 240 KB a menos de 100 KB.

---

## 3. REGLAS ESTRICTAS DE JERARQUÍA VISUAL, TÍTULOS Y SUBTÍTULOS

El mayor síntoma de un sitio "hecho por IA genérica" es el exceso de emojis, sombras brillantes, neones y falta de ritmo tipográfico. Para un acabado 100% humano y editorial:

### La Fórmula de 3 Capas para Encabezados de Sección:

```
[ CAPA 1: OVERLINE / KICKER / SUBTÍTULO SUPERIOR ]
  - MAYÚSCULAS sostenidas (uppercase)
  - Tamaño: Muy pequeño (text-xs / 12px o text-sm / 14px)
  - Peso: Bold o Extrabold (font-bold / font-extrabold)
  - Espaciado: Tracking amplio (tracking-[0.2em] o tracking-widest)
  - Color: Color de marca / acento (ej. Verde corporativo, Azul marino, Dorado mate)
  - PROHIBIDO: Emojis, cajitas con bordes redondeados tipo pill, fondos llamativos. Debe ser texto limpio.

[ CAPA 2: TITULAR PRINCIPAL (H1 / H2) ]
  - Tamaño fluido usando clamp (ej. clamp(2rem, 5vw, 3.5rem))
  - Tipografía con personalidad: Serif editorial para elegancia y solidez, o Sans geométrica pesada para modernidad técnica.
  - Peso: font-bold o font-extrabold
  - Interlineado: Muy ajustado (leading-tight o leading-[1.1]), nunca interlineados abiertos que separen las líneas del título.
  - Color: Neutro oscuro de alto contraste (ej. #1A292C, #0F172A), nunca negro puro (#000000).

[ CAPA 3: PÁRRAFO DE APOYO / BAJADA ]
  - Tamaño: text-base (16px) a text-lg (18px)
  - Peso: Normal / Regular (font-normal)
  - Interlineado: Cómodo y legible (leading-relaxed o leading-[1.6])
  - Longitud máxima: max-w-2xl o max-w-xl (máximo 65-75 caracteres por línea para confort de lectura).
  - Color: Neutro medio (ej. text-stone-600, text-slate-600).
```

### Ejemplo de Implementación en Tailwind:
```tsx
<div className="text-center max-w-3xl mx-auto mb-16">
  {/* Capa 1: Overline */}
  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#019934] block mb-3">
    Civil Engineering Standards
  </span>

  {/* Capa 2: Título H2 */}
  <h2 className="font-serif-brand text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A292C] tracking-tight leading-[1.15]">
    Architectural Hardscaping Built for Generations
  </h2>

  {/* Capa 3: Bajada */}
  <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
    Every foundation is engineered with 98% Proctor sub-base compaction, laser-guided grades, and lifetime polymeric joint stabilization.
  </p>
</div>
```

---

## 4. SISTEMA DE DISEÑO AGNÓSTICO DE MARCA (MULTI-INDUSTRIA)

Para construir sitios para **cualquier marca** (abogados, clínicas estéticas, constructoras, tech/SaaS, restaurantes), sigue estas reglas de diseño de sistemas:

### A. Paleta Semántica de Colores (Extraer 4 roles clave)
1. **Primary Brand Color**: El color protagonista de la marca para CTAs primarios, overlines y acentos clave.
2. **Neutral Dark (Superficie Oscura & Textos)**: El color para titulares y secciones oscuras (ej. Slate 950 `#020617`, Stone 950 `#0c0a09` o Midnight `#0f172a`).
3. **Neutral Light (Superficie Secundaria)**: Fondo sutil para alternar secciones y crear profundidad visual (ej. Stone 50 `#FAFAF9`, Zinc 50 `#FAFAFA` o Slate 50 `#F8FAFC`).
4. **Surface Pure (Superficie Primaria)**: Blanco puro `#FFFFFF`.

### B. El Ritmo Armónico de Secciones (Alternancia de Contraste)
Una página profesional nunca tiene dos secciones consecutivas con el mismo color de fondo. El ritmo visual debe ser:
$$\text{Hero (Oscuro)} \longrightarrow \text{Editorial (Gris claro)} \longrightarrow \text{Servicios (Blanco)} \longrightarrow \text{Comparativa (Gris claro)} \longrightarrow \text{Testimonios (Blanco)} \longrightarrow \text{CTA Banner (Oscuro)}$$

### C. Coherencia en el Radio Perimetral (Border Radius Identity)
Elige una de las dos identidades de radio y aplícala al **100% de los elementos del sitio** (botones, tarjetas, inputs de formularios, imágenes, modales):
- **Identidad Arquitectónica / Lujo / Brutalista**: **Radio Cero (`rounded-none`)**. Vértices rectos y esquinas afiladas. Transmite ingeniería, precisión, solidez y seriedad.
- **Identidad Moderna / SaaS / Corporativa Suave**: **Radio Redondeado Consistente (`rounded-lg` o `rounded-xl`)**. Transmite cercanía y dinamismo.
> **Regla de oro**: NUNCA mezcles botones redondeados (`rounded-full`) con tarjetas cuadradas (`rounded-none`) en el mismo sitio web.

---

## 5. PROTOCOLO DEL AGENTE: PREGUNTAS OBLIGATORIAS Y REGLA ANTI-INVENCIÓN

> [!IMPORTANT]
> **Directriz fundamental para el Agente**: Está terminantemente prohibido inventar datos corporativos, licencias, reseñas falsas, garantías inexistentes o nombres de fundadores. Antes de redactar o codificar, el agente debe recopilar o solicitar los siguientes parámetros.

### Cuestionario de Onboarding de Marca (Checklist Inicial):

1. **Identidad Básica**:
   - Nombre comercial y razón social exacta.
   - Teléfono principal de contacto y si admiten mensajes directos (WhatsApp/SMS).
   - Correo electrónico de despacho/cotizaciones.
   - Sede física o dirección de oficina principal.
2. **Autoridad y Credenciales Reales**:
   - ¿Qué licencias estatales/oficiales poseen? (ej. CSLB Class B, Colegiaturas, Certificaciones ISO).
   - ¿Años reales en el mercado o año de fundación?
   - ¿Cuál es la garantía escrita real que ofrecen a sus clientes? (¿1 año, 5 años, 25 años, de por vida?).
3. **Catálogo de Servicios Troncales**:
   - Lista exacta de sus 4 a 6 servicios principales (sin inventar servicios que la empresa no realice).
   - ¿Cuál es el proceso de contratación real? (ej. 1: Llamada inicial, 2: Visita técnica / presupuesto 3D, 3: Ejecución).
4. **Cobertura Geográfica Real**:
   - ¿Cuáles son las ciudades, condados o zonas específicas donde prestan servicio? (Evita mencionar ciudades o estados donde no operan).
5. **Activos de Marca Reales**:
   - ¿Tienen logotipo en formato vectorial SVG?
   - ¿Cuentan con banco de fotos propias de trabajos finalizados (Antes y Después)?
   - Si no tienen fotos propias: Declarar explícitamente el uso de fotografías de stock de alta calidad y solicitar su posterior reemplazo por trabajos reales.
6. **Perfiles de Reputación Pública**:
   - Enlaces o puntuaciones reales en plataformas verificadas (Google Business Profile, Yelp, Houzz, Trustpilot).

---

## 6. ESTÁNDARES DE CALIDAD Y OPTIMIZACIÓN DE IMÁGENES Y VIDEOS

El rendimiento y la estética dependen directamente de la preparación de los activos multimedia. No se deben subir imágenes crudas de cámaras fotográficas (5 MB a 15 MB) al repositorio.

### Matriz de Especificaciones Técnicas:

| Tipo de Activo | Formato | Resolución Máxima | Peso Máximo Objetivo | Regla de Implementación |
|---|:---:|:---:|:---:|---|
| **Hero Video (Desktop)** | `.mp4` (H.264/AAC) o `.webm` | 1920 × 1080 px | **< 6 - 8 MB** | Solo en Desktop; silenciado (`muted`), sin pista de audio, bitrate < 3 Mbps. |
| **Hero Poster (Desktop)** | `.webp` | 1920 × 1080 px (o 1920 × 580) | **< 200 - 350 KB** | Calidad 75-80, `loading="eager"`, `fetchPriority="high"`. |
| **Hero Poster (Móvil)** | `.webp` | 540 × 960 px (vertical 9:16) | **< 22 - 30 KB** | Calidad 60-65, `loading="eager"`, `decoding="async"`, `fetchPriority="high"`. |
| **Banners de Sección** | `.webp` | 1920 × 600 px | **< 150 - 250 KB** | Compresión WebP método 6. |
| **Tarjetas de Grid / Catálogo** | `.webp` | 400 × 250 px | **< 13 - 20 KB** | `loading="lazy"`, `decoding="async"`, `fetchPriority="low"`. |
| **Fotos Antes / Después** | `.webp` | 900 × 675 px | **< 80 - 120 KB** | Mismo ratio de aspecto para ambas fotos (4:3 o 16:9). |
| **Logotipos e Iconos** | `.svg` | Vectorial | **< 15 KB** | Con `width`, `height`, y `loading="lazy"` si está en el footer. |

### Script de Optimización de Activos con Python (Pillow):
Generador automático de banner móvil vertical 9:16 y tarjetas comprimidas:
```python
from PIL import Image

def generate_mobile_portrait_hero(input_path, output_path, target_w=540, target_h=960, quality=65):
    """Recorta el centro de una imagen o fotograma 16:9 a formato vertical 9:16 móvil."""
    img = Image.open(input_path)
    if img.mode in ("RGBA", "P"):
        img = img.convert("RGB")
    w, h = img.size
    crop_w = int(h * 9 / 16)
    left = (w - crop_w) // 2
    crop = img.crop((left, 0, left + crop_w, h))
    mobile = crop.resize((target_w, target_h), Image.Resampling.LANCZOS)
    mobile.save(output_path, "WEBP", quality=quality, method=6)

def optimize_card(input_path, output_path, width=400, height=250, quality=65):
    """Comprime tarjetas de catálogo para grids móviles rápidos."""
    img = Image.open(input_path)
    if img.mode in ("RGBA", "P"):
        img = img.convert("RGB")
    card = img.resize((width, height), Image.Resampling.LANCZOS)
    card.save(output_path, "WEBP", quality=quality, method=6)
```

---

## 7. CHECKLIST PRE-DESPLIEGUE Y VALIDACIÓN FINAL

Antes de entregar o publicar un proyecto a producción, ejecuta esta lista de verificación:

- [ ] **Configuración Next.js estática**: `output: 'export'` y `images: { unoptimized: true }` en `next.config.ts`.
- [ ] **Compilación limpia**: `npm run build` genera 0 errores de TypeScript y produce la carpeta estática `out/`.
- [ ] **Sin descarga de video en móviles**: El componente `<video>` se monta únicamente si `isDesktop === true`.
- [ ] **Hero LCP Móvil Vertical 9:16**: Pesa entre 22 KB y 30 KB, con `loading="eager"`, `decoding="async"`, y precarga en `<head>`.
- [ ] **Zero Forced Reflow**: La lectura inicial de `window.scrollY` en la navegación se posterga mediante `requestAnimationFrame`.
- [ ] **Timers secundarios protegidos**: Todo `setInterval` de rotación o animación fuera del pliegue usa `IntersectionObserver` y se apaga cuando no es visible.
- [ ] **Fuentes No Bloqueantes**: Google Fonts se carga con `media="print" onLoad="this.media='all'"`; sin `<link rel="preconnect">` huérfanos si el CDN proxifica fuentes.
- [ ] **Panel Cloudflare verificado**: "Rocket Loader" desactivado (OFF) en Cloudflare Speed > Optimization.
- [ ] **Sin imágenes sin dimensiones**: Cada etiqueta `<img>` y `<svg>` incluye `width` y `height`; imágenes fuera de pantalla tienen `loading="lazy"`.
- [ ] **Tarjetas de Grid ultraligeras**: Cada tarjeta pesa < 20 KB.
- [ ] **Comprobación de PageSpeed Insights**:
  - Desktop: **96 - 100 / 100**.
  - Mobile: **90 - 98 / 100**.
- [ ] **Teléfonos y Enlaces**: Todos los botones de llamada tienen el formato `tel:+18005558873` y los de WhatsApp `https://wa.me/...` sin caracteres inválidos.
- [ ] **Metadatos SEO**: `title`, `description`, `canonical` y OpenGraph configurados correctamente en `layout.tsx`.
