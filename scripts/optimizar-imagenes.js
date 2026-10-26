// Genera versiones livianas de las imágenes clave. Uso: npm run imagenes
// Escribe junto a los originales en public/assets/ y no los modifica.
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import sharp from 'sharp';

const A = 'public/assets';
const ANCHOS = [480, 960, 1600];

const tareas = [
  // Escudo: el original mide 1830×2504 y se muestra a 50–80px de alto
  { src: `${A}/aadep-logo.png`, out: `${A}/aadep-logo-160.webp`, resize: { height: 160 }, format: 'webp' },
  // Favicon e ícono de inicio en iPhone
  { src: `${A}/aadep-logo.png`, out: `${A}/aadep-logo-180.png`, resize: { height: 180 }, format: 'png' },
  // Foto del hero en dos anchos más chicos para celulares y tablets (srcset)
  { src: `${A}/grid/aadc_2026.webp`, out: `${A}/grid/aadc_2026-800.webp`, resize: { width: 800 }, format: 'webp' },
  { src: `${A}/grid/aadc_2026.webp`, out: `${A}/grid/aadc_2026-1280.webp`, resize: { width: 1280 }, format: 'webp' },
  // Vista previa al compartir en redes (WhatsApp, Facebook, X): JPG de 1200×630
  { src: `${A}/pablo_echavarria.webp`, out: `${A}/og-aadep.jpg`, resize: { width: 1200, height: 630, fit: 'cover' }, format: 'jpeg' },
  // Logo del Torneo Regional: el original trae un fondo gris de 600×340; se recorta al escudo
  { src: `${A}/ligas/torneo-regional.png`, out: `${A}/ligas/torneo-regional-escudo.png`, extract: { left: 200, top: 50, width: 200, height: 232 }, format: 'png' },
];

for (const t of tareas) {
  let img = sharp(t.src);
  if (t.extract) img = img.extract(t.extract);
  if (t.resize) img = img.resize(t.resize);
  if (t.format === 'webp') img = img.webp({ quality: 80 });
  if (t.format === 'png') img = img.png({ compressionLevel: 9, palette: true });
  if (t.format === 'jpeg') img = img.jpeg({ quality: 82, mozjpeg: true });
  const info = await img.toFile(t.out);
  console.log(`${t.out}  ${info.width}×${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
}

// Fotos de componentes, páginas y datos (galería, Comisión, Curso, novedades): una versión WebP
// por cada ancho de ANCHOS menor al original, y src/fotos.json con medidas y anchos para <Foto>.
const fuentes = ['src/components', 'src/pages', 'src/data']
  .flatMap((dir) => readdirSync(dir).map((f) => readFileSync(`${dir}/${f}`, 'utf8')))
  .join('\n');
const fotos = [...new Set(fuentes.match(/\/assets\/[\w/.-]+\.(?:webp|jpe?g)/gi))]
  // El hero y el escudo tienen sus versiones arriba; los logos de ligas se muestran a 80px
  .filter((src) => !/aadc_2026|aadep-logo|\/ligas\//.test(src))
  // Las rutas de ejemplo en comentarios (o una foto que falta subir) se saltean con aviso
  .filter((src) => existsSync(`public${src}`) || console.warn(`No existe public${src}: se saltea`))
  .sort();

const indice = {};
for (const src of fotos) {
  const meta = await sharp(`public${src}`).metadata();
  // Orientación EXIF 5–8: la foto se muestra girada 90°
  const [w, h] = meta.orientation >= 5 ? [meta.height, meta.width] : [meta.width, meta.height];
  const variantes = ANCHOS.filter((ancho) => ancho < w);
  for (const ancho of variantes) {
    const out = `public${src.replace(/\.[^.]+$/, '')}-${ancho}.webp`;
    await sharp(`public${src}`).rotate().resize({ width: ancho }).webp({ quality: 78 }).toFile(out);
  }
  indice[src] = { w, h, variantes };
}
writeFileSync('src/fotos.json', JSON.stringify(indice, null, 2) + '\n');
console.log(`src/fotos.json  ${fotos.length} fotos`);
