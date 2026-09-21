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
1. **Doble versión obligatoria del Banner Hero**:
   - **Versión Móvil**: Máximo 750-800 px de ancho, WebP calidad 75-80. **Peso estricto: entre 40 KB y 65 KB**.
   - **Versión Desktop**: 1920 px de ancho, WebP calidad 80. **Peso: entre 200 KB y 380 KB**.
2. **Precarga en el `<head>` del HTML (`RootLayout`)**:
   Precarga condicionalmente la imagen correspondiente al dispositivo en `src/app/layout.tsx`:
   ```html
   <link rel="preload" as="image" href="/assets/banners/hero-mobile.webp" type="image/webp" media="(max-width: 768px)" />
   <link rel="preload" as="image" href="/assets/banners/hero-desktop.webp" type="image/webp" media="(min-width: 769px)" />
   ```
3. **Atributos en el `<img>` del Hero**:
   - `loading="eager"` (nunca `lazy` en el Hero).
   - `decoding="sync"` (para forzar renderizado en el primer frame).
   - `fetchPriority="high"`.

### C. Control de CLS (Cumulative Layout Shift = 0.000)
1. **Dimensiones explícitas**: En todas las etiquetas `<img>` y `<svg>`, define siempre `width` y `height` o utiliza un contenedor con `aspect-ratio` fijo (`aspect-[16/9]`, `aspect-square`).
2. **Reserva de espacio para fuentes**:
   Usa `display=swap` en Google Fonts y define un fallback con métricas similares para evitar saltos tipográficos al cargar la fuente web.

### D. Optimización de TBT (Total Blocking Time < 150ms)
1. **Lazy Loading de sliders y carruseles**: Si tienes un carrusel de 6 diapositivas, **no montes las 6 imágenes pesadas de golpe**. Carga únicamente la imagen activa y sus dos adyacentes (`Math.abs(index - currentIndex) <= 1`).
2. **Scroll Táctil Nativo**: Nunca apliques `touch-action: none` al contenedor raíz en dispositivos móviles; resérvalo para pantallas de escritorio (`md:touch-none`) si usas efectos de scrub interactivo.
3. **Scripts de Terceros**: Analíticas (Google Tag Manager, Facebook Pixel, Cloudflare Insights) deben cargarse con `strategy="lazyOnload"` o retrasarse hasta la primera interacción del usuario.

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
| **Hero Poster (Desktop)** | `.webp` | 1920 × 1080 px (o 1920 × 600) | **< 250 - 350 KB** | Calidad 80-82, `loading="eager"`. |
| **Hero Poster (Móvil)** | `.webp` | 750 × 800 px (o 800 × 600) | **< 45 - 65 KB** | Calidad 75-78, servido en `<picture>` condicional. |
| **Banners de Sección** | `.webp` | 1920 × 600 px | **< 200 - 300 KB** | Compresión WebP método 6. |
| **Tarjetas de Grid / Slider** | `.webp` | 800 × 600 px | **< 80 - 120 KB** | `loading="lazy"`, decodificación asíncrona. |
| **Fotos Antes / Después** | `.webp` | 1000 × 750 px | **< 120 - 160 KB** | Mismo ratio de aspecto para ambas fotos (4:3 o 16:9). |
| **Logotipos e Iconos** | `.svg` | Vectorial | **< 15 KB** | Limpios con SVGO, con `width` y `height` explícitos. |

### Comandos de Optimización Rápida con Python / Pillow:
Para optimizar un lote de banners en la terminal local:
```python
from PIL import Image

def optimize_image(input_path, output_path, max_width=1920, quality=80):
    img = Image.open(input_path)
    if img.mode in ("RGBA", "P"):
        img = img.convert("RGB")
    w, h = img.size
    if w > max_width:
        h = int(h * (max_width / w))
        img = img.resize((max_width, h), Image.Resampling.LANCZOS)
    img.save(output_path, "WEBP", quality=quality, method=6)
```

---

## 7. CHECKLIST PRE-DESPLIEGUE Y VALIDACIÓN FINAL

Antes de entregar o publicar un proyecto a producción, ejecuta esta lista de verificación:

- [ ] **Compilación limpia**: `npm run build` genera 0 errores de TypeScript y produce la carpeta estática `out/`.
- [ ] **No hay video descargándose en móvil**: Inspeccionar en Chrome DevTools con throttling móvil que no se descarguen archivos `.mp4` en el primer segundo de carga.
- [ ] **LCP Móvil optimizado**: El póster de móvil mide menos de 70 KB y está precargado en el `<head>`.
- [ ] **CLS Cero**: No hay saltos bruscos en la barra de navegación ni al cargarse el logo.
- [ ] **Formularios conectados**: Las acciones de cotización envían datos limpios con validación de teléfono y correo.
- [ ] **Comprobación de PageSpeed**:
  - Desktop: **98 - 100 / 100**.
  - Mobile: **90 - 98 / 100**.
- [ ] **Teléfonos y Enlaces**: Todos los botones de llamada tienen el formato `tel:+18005558873` y los de WhatsApp `https://wa.me/...` sin caracteres inválidos.
- [ ] **Metadatos SEO**: `title`, `description`, `canonical` y OpenGraph configurados correctamente en `layout.tsx`.
