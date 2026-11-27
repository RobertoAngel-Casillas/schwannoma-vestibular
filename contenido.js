/* =====================================================================
   CONTENIDO.JS — LISTAS DE ARCHIVOS DE LA PÁGINA
   ---------------------------------------------------------------------
   Este es el archivo que más vas a editar. Aquí se dice qué archivos
   aparecen en las pestañas Póster, Histología, Imagenología y
   Herramientas. La página los acomoda sola: no hay que tocar el HTML.

   CÓMO AGREGAR UN ARCHIVO
   1. Sube el archivo a su carpeta dentro de "archivos/"
      (por ejemplo: archivos/histologia/antoni-a.png).
   2. Copia uno de los bloques { ... } de la lista que corresponda,
      pégalo debajo y cambia los datos.
   3. Guarda y recarga la página.

   FORMATOS QUE ACEPTA: .png, .jpg, .svg y .pdf
   - Las imágenes (PNG, JPG, SVG) se ven en miniatura; al tocarlas se
     abren en grande.
   - Los PDF se muestran como una tarjeta con botón para abrirlos.

   REGLAS PARA QUE NO SE ROMPA
   - Cada texto va entre comillas "así".
   - Cada bloque { ... } termina con una coma.
   - El nombre del archivo debe ser idéntico al que subiste
     (mayúsculas, acentos y extensión incluidos). Mejor usar nombres
     sin espacios ni acentos: "corte-he-10x.png".
   - Si un archivo no se encuentra, la página muestra un aviso en rojo
     con la ruta que buscó, para que veas qué corregir.
   - Las líneas que empiezan con // son comentarios: la página las
     ignora. Sirven de ejemplo.
   ===================================================================== */


/* ---------------------------------------------------------------------
   PESTAÑA «PÓSTER»
   archivo:     el póster completo (PDF recomendado; también PNG o SVG).
   vistaPrevia: opcional. Una imagen PNG del póster para celulares, que
                a veces no muestran el PDF dentro de la página. Si no
                tienes, déjalo como "".
   --------------------------------------------------------------------- */
const POSTER = {
  archivo: "archivos/poster/poster.pdf",
  vistaPrevia: "",
  titulo: "Fisiopatología, presentación clínica y abordaje quirúrgico de los schwannomas vestibulares"
};


/* ---------------------------------------------------------------------
   PESTAÑA «HISTOLOGÍA»
   archivo:     ruta del archivo.
   titulo:      nombre corto de la imagen.
   descripcion: qué se ve, explicado para cualquier persona.
   credito:     de dónde salió la imagen (laboratorio, autor, licencia).
   enlace:      opcional, página de donde salió la imagen.
   --------------------------------------------------------------------- */
const HISTOLOGIA = [
 {
    archivo: "archivos/histologia/imagen-1.jpg",
    titulo: "Vista general de un Schwannoma vestibular. (H&E)",
    descripcion: "Corte histológico general de un Schwannoma.",
    credito: "Pathology Outlines",
    enlace: "https://www.pathologyoutlines.com/topic/cnstumorschwannoma.html"
  },
  {
    archivo: "archivos/histologia/imagen-2.png",
    titulo: "Patrones de Antoni A y Antoni B. (H&E)",
    descripcion: "Corte histológico de schwannoma que muestra áreas celulares Antoni A con cuerpos de Verocay (VB) y áreas hipocelulares Antoni B (AB)",
    credito: "Deviprasad Dosemane et al.",
    enlace: "https://www.researchgate.net/figure/Histological-picture-showing-characteristic-features-of-schwannoma-consisting-of-Antony-A_fig5_352247453"
  },
  {
    archivo: "archivos/histologia/imagen-3.png",
    titulo: "Patrones de Verocay. (H&E)",
    descripcion: "Corte histológico de schwannoma (tinción H&E) con patrón bifásico característico: zonas hipercelulares Antoni A compuestas por fascículos de células fusiformes y áreas hipocelulares Antoni B de matriz mixoide laxa.",
    credito: "Dra. Saranya Singaravel",
    enlace: "https://ilovepathology.com/pathology-of-schwannoma/"
  },
];


/* ---------------------------------------------------------------------
   PESTAÑA «IMAGENOLOGÍA» (resonancias, tomografías, etc.)
   Mismos campos que en Histología.
   --------------------------------------------------------------------- */
const IMAGENOLOGIA = [
  {
    archivo: "archivos/imagenologia/rm-axial-t1-gadolinio.pn",
    titulo: "Resonancia magnética axial T1 con gadolinio",
    descripcion: "Masa en el ángulo pontocerebeloso izquierdo (flecha): el lugar típico donde crece el schwannoma vestibular. Es la Figura 1 del póster.",
    credito: "Caso cortesía de Mostafa Elfeky, Radiopaedia.org, rID: 163841 (CC BY-NC-SA 3.0)",
    enlace: "https://radiopaedia.org/cases/163841"
  },
  {
    archivo: "archivos/imagenologia/tac-1.jpg",
    titulo: "Schwannoma vestibular en el ángulo pontocerebeloso",
    descripcion: "En la resonancia axial de referencia se observa una lesión ocupante en el ángulo pontocerebeloso, región clave al analizar el acceso y la exposición quirúrgica de los schwannomas vestibulares.",
    credito: "Health Jade",
    enlace: "https://healthjade.com/schwannoma/"
  },
  {
    archivo: "archivos/imagenologia/tac-2.jpg",
    titulo: "Schwannoma vestibular izquierdo en resonancia magnética",
    descripcion: "Resonancia magnética cerebral en secuencia T1 sagital que muestra una masa heterogénea hipointensa ocupando el ángulo pontocerebeloso izquierdo.",
    credito: "The Johns Hopkins University",
    enlace: "https://radiopaedia.org/cases/163841https://www.ctisus.com/teachingfiles/cases/neuro-mr/351289"
  },
];


/* ---------------------------------------------------------------------
   PESTAÑA «HERRAMIENTAS» (declaración de lo que usamos)
   nombre: nombre de la página o programa.
   uso:    para qué lo usamos.
   logo:   ruta del logo (SVG o PNG) en archivos/herramientas/.
           Si el logo no está, se muestra la inicial del nombre.
   enlace: opcional, sitio oficial.
   Revisen la lista: quiten lo que no usaron y agreguen lo que falte.
   --------------------------------------------------------------------- */
const HERRAMIENTAS = [
  {
    nombre: "PubMed",
    uso: "Búsqueda de las revisiones sistemáticas",
    logo: "archivos/herramientas/pubmed.svg",
    enlace: "https://pubmed.ncbi.nlm.nih.gov/"
  },
  {
    nombre: "Europe PMC",
    uso: "Revisión de los artículos que citan a las revisiones incluidas",
    logo: "archivos/herramientas/europepmc.svg",
    enlace: "https://europepmc.org/"
  },
  {
    nombre: "Figma",
    uso: "Diseño del póster y de las figuras",
    logo: "archivos/herramientas/figma.svg",
    enlace: "https://www.figma.com/"
  },
  {
    nombre: "Radiopaedia",
    uso: "Imagen de resonancia magnética",
    logo: "archivos/herramientas/radiopaedia.svg",
    enlace: "https://radiopaedia.org/"
  },
  {
    nombre: "GitHub Pages",
    uso: "Publicación de esta página",
    logo: "archivos/herramientas/github.svg",
    enlace: "https://pages.github.com/"
  },
];
