# Página del QR: material suplementario del póster

Página web estática (HTML + un archivo de datos) para publicar en tu propia dirección y apuntar el QR del póster hacia ella.

## Archivos

| Archivo | Qué contiene | Cuándo editarlo |
| --- | --- | --- |
| `index.html` | Textos de la página (resumen, métodos, escalas) y estilos | Cambiar textos, autores, números del PRISMA o colores |
| `datos.js` | Las tablas: revisiones incluidas, referencias y registro de cribado | Agregar, quitar o corregir filas |
| `generar_qr.py` | Script que genera el QR en SVG y PNG | Cuando ya tengas la dirección final |

## Cómo editar

- **Textos:** abre `index.html` en VS Code (o cualquier editor). Cada sección está marcada con un comentario como `<!-- ===== MÉTODOS ===== -->`. Cambia `[Nombres de los autores]` por los nombres reales.
- **Colores:** están al inicio de `index.html`, en el bloque `:root` (`--azul`, `--acento`, etc.). Si cambias uno ahí, cambia en toda la página.
- **Tablas:** en `datos.js`, cada fila es un objeto entre llaves `{ ... }`. Copia uno, pégalo y cambia los valores. El orden de `REVISIONES` define R1, R2, R3…
- **Números del PRISMA:** si repiten el cribado, cámbialos en la sección `Selección de estudios` de `index.html` y actualiza `REGISTRO` en `datos.js`. El resumen del registro se recalcula solo.

## Ver la página en tu computadora

Haz doble clic en `index.html` y se abre en el navegador. Si editas algo, guarda y recarga la página.

## Publicarla gratis con GitHub Pages

1. Crea una cuenta en [github.com](https://github.com) si no tienes.
2. Crea un repositorio nuevo, por ejemplo `schwannoma-vestibular`, y márcalo como **Public**. GitHub Pages gratis requiere que el repositorio sea público.
3. En el repositorio, elige *uploading an existing file* y arrastra `index.html` y `datos.js`. Guarda con *Commit changes*.
4. Ve a **Settings → Pages**. En *Build and deployment*, elige *Deploy from a branch*, rama `main` y carpeta `/ (root)`. Guarda.
5. En uno o dos minutos la página queda en:
   `https://TU-USUARIO.github.io/schwannoma-vestibular/`

Para editar después, abre el archivo en GitHub, da clic en el lápiz, cambia lo que necesites y guarda. La página se actualiza sola en uno o dos minutos y **el QR sigue funcionando**, porque la dirección no cambia.

> No le cambies el nombre al repositorio después de imprimir el póster: el nombre forma parte de la dirección y el QR dejaría de funcionar.

## Generar el QR con la dirección nueva

```bash
pip install segno cairosvg
python generar_qr.py https://TU-USUARIO.github.io/schwannoma-vestibular/
```

Se generan `qr_material_suplementario.svg` (vectorial, para Figma o Affinity) y `.png`, además de una versión con marco (`qr_tarjeta`). Reemplaza el QR del póster con el SVG nuevo y pruébalo con un celular antes de imprimir.
