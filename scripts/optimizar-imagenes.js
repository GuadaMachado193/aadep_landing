// Genera versiones livianas de las imágenes clave. Uso: npm run imagenes
// Escribe junto a los originales en public/assets/ y no los modifica.
import sharp from 'sharp';

const A = 'public/assets';

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
];

for (const t of tareas) {
  let img = sharp(t.src).resize(t.resize);
  if (t.format === 'webp') img = img.webp({ quality: 80 });
  if (t.format === 'png') img = img.png({ compressionLevel: 9, palette: true });
  if (t.format === 'jpeg') img = img.jpeg({ quality: 82, mozjpeg: true });
  const info = await img.toFile(t.out);
  console.log(`${t.out}  ${info.width}×${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
}
