# Cafè Lambretto — lloc web

Web estàtic, ràpid i responsive per al **Cafè Lambretto** (Passeig Dr. Pearson, 30 · 25620
Tremp, Pallars Jussà). Fet amb HTML + CSS + JavaScript pur, sense dependències ni pas de
compilació. Català com a idioma principal, amb selector **CA / EN / FR** ja funcionant.

Eslògan: **_Assaboreix cada instant_**

---

## 🚀 Publicar-lo (Vercel o Netlify)

No cal cap build. És una carpeta de fitxers estàtics.

**Netlify**
- _Opció ràpida:_ arrossega la carpeta del projecte a <https://app.netlify.com/drop>.
- _Opció repo:_ connecta el repositori. Build command: _(buit)_ · Publish directory: `.`
  (ja configurat a `netlify.toml`).

**Vercel**
- Importa el repositori a <https://vercel.com/new>. Framework preset: **Other**.
  Sense build command; output = arrel (`vercel.json` ja hi és).

**Domini:** el codi assumeix `https://www.cafelambretto.cat/`. Si el domini final és un
altre, canvia'l a: `index.html` (canonical, Open Graph, Schema.org), `robots.txt` i
`sitemap.xml`. (Cerca `cafelambretto.cat`.)

## 👀 Provar-lo en local

Obrir `index.html` directament al navegador funciona. Per fer-ho “com a producció”:

```bash
python3 -m http.server 8000
# o:  npx serve .
```

Després obre <http://localhost:8000>.

---

## 🗂️ Estructura

```
.
├── index.html            ← tota la pàgina (una sola pàgina amb àncores)
├── 404.html
├── assets/
│   ├── css/styles.css     ← disseny (paleta + tipografia via variables CSS)
│   ├── js/main.js         ← menú mòbil, scroll, animacions, scroll-spy
│   ├── js/i18n.js         ← traduccions CA/EN/FR + selector d'idioma
│   └── img/
│       ├── favicon.svg, favicon-32.png, apple-touch-icon.png, icon-192/512.png
│       ├── og-image.png   ← imatge per compartir a xarxes
│       └── PHOTOS.md      ← 📸 quines fotos necessito i com posar-les
├── site.webmanifest, robots.txt, sitemap.xml
└── netlify.toml, vercel.json
```

## 📸 Fotos

El web funciona ara amb **marcadors** clarament etiquetats. La llista exacta de fotos que
necessito (i com substituir un marcador per una foto real) és a
**[`assets/img/PHOTOS.md`](assets/img/PHOTOS.md)**. Passa-me-les i les col·loco jo.

## 🌍 Idiomes

- El català viu directament a `index.html` (millor per al SEO).
- L'anglès i el francès són a `assets/js/i18n.js` i el selector CA/EN/FR ja funciona
  (recorda l'elecció al navegador).
- **Afegir/editar una llengua:** edita el seu bloc a `TRANSLATIONS` dins `i18n.js`.
- Per a SEO màxim en anglès/francès es poden crear pàgines pròpies `/en/` i `/fr/`;
  al `<head>` ja hi ha les etiquetes `hreflang` a punt per descomentar.

## 🔎 SEO / extres inclosos

- Títol i descripció optimitzats per **“cafeteria Tremp”** i **“cafè Pallars Jussà”**.
- **Open Graph** + Twitter Card amb imatge (`og-image.png`).
- **Schema.org `CafeOrCoffeeShop`** (nom, adreça, geolocalització, horaris, xarxes).
- Favicon (SVG + PNG), `site.webmanifest`, `robots.txt`, `sitemap.xml`.
- Mapa de Google incrustat + botó **“Com arribar”**.

---

## ⚠️ Coses per confirmar (les he deixat com a provisionals)

Aquests punts els he posat amb la millor informació pública que he trobat; **revisa'ls**:

1. **Telèfon:** he posat `+34 642 42 04 42` (a `index.html`, dins Schema.org). Confirma'l
   o dona'm el bo. _(Si vols, també el puc mostrar visible a la secció de Contacte.)_
2. **Horari:** és **orientatiu** (Dl–Ds 09–15 i 18–23; Dg vermut i matí). Ajusta cada dia
   al real a `index.html` (secció “Horaris”) i al bloc `openingHoursSpecification`.
3. **Coordenades del mapa:** aproximades a Tremp. El mapa incrustat i el botó ja apunten a
   l'adreça per text, però si vols el pin exacte dona'm el punt de Google Maps.
4. **Domini final** (veure a dalt).
5. **Fotos** (veure `assets/img/PHOTOS.md`).
