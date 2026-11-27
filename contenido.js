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
  // EJEMPLO (borra las dos barras // de cada línea para usarlo):
  // {
  //   archivo: "archivos/histologia/antoni-a-he-40x.png",
  //   titulo: "Áreas de Antoni A (H&E, 40×)",
  //   descripcion: "Células alargadas muy juntas que a veces se alinean en empalizada.",
  //   credito: "Laboratorio de Histología, Universidad de Guanajuato",
  //   enlace: ""
  // },
];


/* ---------------------------------------------------------------------
   PESTAÑA «IMAGENOLOGÍA» (resonancias, tomografías, etc.)
   Mismos campos que en Histología.
   --------------------------------------------------------------------- */
const IMAGENOLOGIA = [
  {
    archivo: "archivos/imagenologia/rm-axial-t1-gadolinio.png",
    titulo: "Resonancia magnética axial T1 con gadolinio",
    descripcion: "Masa en el ángulo pontocerebeloso izquierdo (flecha): el lugar típico donde crece el schwannoma vestibular. Es la Figura 1 del póster.",
    credito: "Caso cortesía de Mostafa Elfeky, Radiopaedia.org, rID: 163841 (CC BY-NC-SA 3.0)",
    enlace: "https://radiopaedia.org/cases/163841"
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
