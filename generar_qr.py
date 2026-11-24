"""
Genera el QR del póster (vectorial y PNG) y una "tarjeta" lista para pegar.

Uso:
    pip install segno cairosvg
    python generar_qr.py https://TU-USUARIO.github.io/schwannoma-vestibular/

Salidas (en la misma carpeta):
    qr_material_suplementario.svg   QR solo, vectorial (editable en Affinity/Illustrator)
    qr_material_suplementario.png   QR solo, 3000 px (para PowerPoint/Canva)
    qr_tarjeta.svg                  QR + texto, vectorial y con texto editable
    qr_tarjeta.png                  QR + texto, 3000 px de ancho
"""
import sys
from pathlib import Path

import segno

if len(sys.argv) < 2:
    sys.exit("Uso: python generar_qr.py https://TU-USUARIO.github.io/schwannoma-vestibular/")
URL = sys.argv[1]

# Colores: módulos casi negros para que cualquier celular lo lea;
# el color de acento (teal de la paleta) va solo en el marco, nunca en el código.
OSCURO = "#1B2A3A"
CLARO = "#FFFFFF"
ACENTO = "#0BA3B2"
TEXTO_SUAVE = "#627997"
FUENTE = "Montserrat, Arial, sans-serif"

TITULO = "MATERIAL SUPLEMENTARIO"
LINEA_1 = "Escanea para ver referencias completas,"
LINEA_2 = "clasificaciones, tablas y algoritmo"

OUT = Path(__file__).resolve().parent

qr = segno.make(URL, error="q", micro=False)  # nivel Q: tolera ~25 % de daño
modulos = qr.symbol_size(scale=1, border=0)[0]
BORDE = 4  # zona de silencio obligatoria (4 módulos)


def ruta_qr(x0, y0, tam):
    """Devuelve un <path> SVG con los módulos oscuros, escalado a `tam` px."""
    m = tam / (modulos + 2 * BORDE)
    partes = []
    for fila, linea in enumerate(qr.matrix):
        for col, valor in enumerate(linea):
            if valor:
                x = x0 + (col + BORDE) * m
                y = y0 + (fila + BORDE) * m
                partes.append(f"M{x:.3f} {y:.3f}h{m:.3f}v{m:.3f}h{-m:.3f}z")
    return f'<path d="{"".join(partes)}" fill="{OSCURO}"/>'


# 1) QR solo (10 cm de lado al abrirlo; se puede escalar sin perder calidad)
qr.save(OUT / "qr_material_suplementario.svg", kind="svg", scale=100 / (modulos + 2 * BORDE),
        border=BORDE, dark=OSCURO, light=CLARO, unit="mm", xmldecl=True,
        title="QR - Material suplementario")
qr.save(OUT / "qr_material_suplementario.png", kind="png", scale=3000 // (modulos + 2 * BORDE),
        border=BORDE, dark=OSCURO, light=CLARO)

# 2) Tarjeta: QR + título + instrucción (viewBox de 1000 x 1260)
W, H = 1000, 1190
QR_TAM = 840
qr_x = (W - QR_TAM) / 2
qr_y = 150
tarjeta = f"""<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="100mm" height="119mm" viewBox="0 0 {W} {H}">
  <title>QR - Material suplementario</title>
  <rect x="0" y="0" width="{W}" height="{H}" rx="36" fill="{CLARO}"/>
  <rect x="6" y="6" width="{W - 12}" height="{H - 12}" rx="32" fill="none" stroke="{ACENTO}" stroke-width="12"/>
  <rect x="0" y="0" width="{W}" height="120" rx="36" fill="{ACENTO}"/>
  <rect x="0" y="60" width="{W}" height="60" fill="{ACENTO}"/>
  <text x="{W / 2}" y="80" text-anchor="middle" font-family="{FUENTE}" font-weight="700"
        font-size="50" letter-spacing="3" fill="{CLARO}">{TITULO}</text>
  {ruta_qr(qr_x, qr_y, QR_TAM)}
  <text x="{W / 2}" y="{qr_y + QR_TAM + 70}" text-anchor="middle" font-family="{FUENTE}"
        font-weight="600" font-size="40" fill="{OSCURO}">{LINEA_1}</text>
  <text x="{W / 2}" y="{qr_y + QR_TAM + 122}" text-anchor="middle" font-family="{FUENTE}"
        font-weight="600" font-size="40" fill="{OSCURO}">{LINEA_2}</text>
</svg>
"""
(OUT / "qr_tarjeta.svg").write_text(tarjeta, encoding="utf-8")

try:
    import cairosvg
    cairosvg.svg2png(bytestring=tarjeta.encode("utf-8"), write_to=str(OUT / "qr_tarjeta.png"),
                     output_width=3000)
except ImportError:
    print("cairosvg no está instalado: se omitió qr_tarjeta.png (el SVG sí se generó).")

print(f"QR versión {qr.version}, nivel {qr.error}, {modulos} módulos -> {URL}")
