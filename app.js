/* =====================================================================
   APP.JS — FUNCIONAMIENTO DE LA PÁGINA
   ---------------------------------------------------------------------
   Normalmente NO necesitas editar este archivo. Hace tres cosas:
     1. Cambia de pestaña (y recuerda la pestaña en la dirección, por
        ejemplo .../#histologia, para poder compartir el enlace).
     2. Dibuja el póster, las galerías y los logos a partir de las
        listas de contenido.js.
     3. Abre las imágenes en grande al tocarlas (visor).
   ===================================================================== */


/* ---------- Utilidades ---------- */

// Atajo para crear elementos: crear("p", "clase", "texto")
function crear(etiqueta, clase, texto) {
  const el = document.createElement(etiqueta);
  if (clase) el.className = clase;
  if (texto) el.textContent = texto;
  return el;
}

// Devuelve "imagen", "pdf" u "otro" según la extensión del archivo
function tipoDeArchivo(ruta) {
  const ext = ruta.split("?")[0].split(".").pop().toLowerCase();
  if (["png", "jpg", "jpeg", "svg", "webp", "gif"].includes(ext)) return "imagen";
  if (ext === "pdf") return "pdf";
  return "otro";
}

// Aviso en rojo cuando un archivo de contenido.js no se encuentra
function avisoFaltante(ruta) {
  const aviso = crear("div", "faltante");
  aviso.append("No se encontró el archivo: ", crear("code", "", ruta));
  aviso.append(crear("small", "", "Revisa que esté en esa carpeta y que el nombre en contenido.js sea idéntico."));
  return aviso;
}

// En internet (no en tu computadora) revisa si un archivo existe; si no, avisa.
// "alFaltar" es opcional: lo que se muestra en lugar del aviso rojo.
function comprobarArchivo(ruta, contenedor, alFaltar) {
  if (!location.protocol.startsWith("http")) return;
  fetch(ruta, { method: "HEAD" })
    .then(r => { if (!r.ok) contenedor.replaceChildren(alFaltar ? alFaltar() : avisoFaltante(ruta)); })
    .catch(() => {});
}

// Ícono genérico de documento para los PDF
function iconoPdf() {
  const span = crear("span", "icono-pdf");
  span.setAttribute("aria-hidden", "true");
  span.innerHTML = '<svg viewBox="0 0 48 60" width="48" height="60"><path d="M4 2h28l12 12v44H4z" fill="#fff" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M32 2v12h12" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><text x="24" y="44" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor" font-family="Montserrat, Arial, sans-serif">PDF</text></svg>';
  return span;
}

// Botón que parece enlace (para abrir o descargar archivos)
function boton(texto, href, descargar) {
  const a = crear("a", "boton", texto);
  a.href = href;
  if (descargar) a.setAttribute("download", "");
  else { a.target = "_blank"; a.rel = "noopener"; }
  return a;
}


/* ---------- 1. Pestañas ---------- */

const pestanas = Array.from(document.querySelectorAll("[role=tab]"));
const paneles = Array.from(document.querySelectorAll("[role=tabpanel]"));

function mostrarPestana(id, enfocar) {
  const existe = paneles.some(p => p.id === id);
  if (!existe) id = paneles[0].id;
  paneles.forEach(p => { p.hidden = p.id !== id; });
  pestanas.forEach(t => {
    const activa = t.getAttribute("aria-controls") === id;
    t.setAttribute("aria-selected", activa);
    t.tabIndex = activa ? 0 : -1;
    if (activa && enfocar) t.focus();
    if (activa) {
      // En celular la barra se desliza de lado: centra la pestaña activa
      const barra = t.parentElement;
      barra.scrollLeft = t.offsetLeft - (barra.clientWidth - t.clientWidth) / 2;
    }
  });
}

// Lee la dirección (#poster, #referencias, o un apartado dentro de una pestaña)
function seguirDireccion() {
  const id = decodeURIComponent(location.hash.slice(1));
  const destino = id && document.getElementById(id);
  if (!destino) return mostrarPestana(paneles[0].id);
  const panel = destino.closest("[role=tabpanel]");
  if (!panel) return;
  mostrarPestana(panel.id);
  if (destino !== panel) destino.scrollIntoView();
  // Si ya habías bajado, sube al inicio de la pestaña nueva
  else if (window.scrollY > panel.offsetTop - 80) panel.scrollIntoView();
}

pestanas.forEach((t, i) => {
  // Las pestañas son enlaces (#poster, #histologia...): al tocarlas cambia la dirección
  // Flechas del teclado para moverse entre pestañas
  t.addEventListener("keydown", e => {
    const paso = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!paso) return;
    const sig = pestanas[(i + paso + pestanas.length) % pestanas.length];
    history.replaceState(null, "", "#" + sig.getAttribute("aria-controls"));
    mostrarPestana(sig.getAttribute("aria-controls"), true);
  });
});
window.addEventListener("hashchange", seguirDireccion);
document.body.classList.add("con-pestanas");   // sin esto, se ven todas las secciones seguidas
seguirDireccion();


/* ---------- 2a. Póster ---------- */

function pintarPoster() {
  const caja = document.getElementById("visor-poster");
  if (!caja) return;
  if (typeof POSTER === "undefined" || !POSTER.archivo) {
    caja.append(crear("p", "vacio", "El póster se agregará aquí muy pronto."));
    return;
  }
  const tipo = tipoDeArchivo(POSTER.archivo);
  const marco = crear("div", "marco-poster");

  if (tipo === "pdf") {
    // En computadora se ve el PDF dentro de la página
    const pdf = document.createElement("object");
    pdf.className = "pdf-incrustado";
    pdf.data = POSTER.archivo + "#view=FitH";
    pdf.type = "application/pdf";
    pdf.setAttribute("aria-label", POSTER.titulo || "Póster");
    pdf.append(crear("p", "nota", "Tu navegador no puede mostrar el PDF aquí. Usa el botón para abrirlo."));
    marco.append(pdf);
    // En celular se ve la vista previa (si existe) porque muchos no muestran PDF
    if (POSTER.vistaPrevia) {
      const img = crear("img", "vista-previa");
      img.src = POSTER.vistaPrevia;
      img.alt = "Vista previa del póster";
      img.addEventListener("click", () => abrirVisor(POSTER.vistaPrevia, POSTER.titulo));
      marco.append(img);
      marco.classList.add("con-vista-previa");
    }
  } else if (tipo === "imagen") {
    const img = crear("img", "poster-imagen");
    img.src = POSTER.archivo;
    img.alt = POSTER.titulo || "Póster";
    img.addEventListener("click", () => abrirVisor(POSTER.archivo, POSTER.titulo));
    img.addEventListener("error", () => marco.replaceChildren(avisoFaltante(POSTER.archivo)));
    marco.append(img);
  }

  const botones = crear("div", "botones");
  botones.append(boton("Abrir en pantalla completa", POSTER.archivo), boton("Descargar", POSTER.archivo, true));
  caja.append(marco, botones);
  // Si el póster aún no se sube, el público ve un aviso amable (no el rojo)
  comprobarArchivo(POSTER.archivo, caja, () => {
    const p = crear("p", "vacio", "El póster todavía no está disponible. Vuelve pronto.");
    p.title = "Se esperaba el archivo " + POSTER.archivo;
    return p;
  });
}


/* ---------- 2b. Galerías (Histología e Imagenología) ---------- */

function pintarGaleria(idContenedor, lista) {
  const caja = document.getElementById(idContenedor);
  if (!caja) return;
  if (!Array.isArray(lista) || lista.length === 0) {
    caja.append(crear("p", "vacio", "Todavía no hay imágenes en esta sección."));
    return;
  }
  lista.forEach(item => {
    const tarjeta = crear("figure", "tarjeta");
    const tipo = tipoDeArchivo(item.archivo);
    const zona = crear("div", "miniatura");

    if (tipo === "imagen") {
      const btn = crear("button", "abrir-imagen");
      btn.type = "button";
      btn.setAttribute("aria-label", "Ver en grande: " + (item.titulo || ""));
      const img = crear("img");
      img.src = item.archivo;
      img.alt = item.titulo || "";
      img.loading = "lazy";
      img.addEventListener("error", () => zona.replaceChildren(avisoFaltante(item.archivo)));
      btn.append(img);
      btn.addEventListener("click", () => abrirVisor(item.archivo, item.titulo, item.descripcion));
      zona.append(btn);
    } else if (tipo === "pdf") {
      const a = crear("a", "abrir-pdf");
      a.href = item.archivo; a.target = "_blank"; a.rel = "noopener";
      a.append(iconoPdf(), crear("span", "", "Abrir PDF"));
      zona.append(a);
      comprobarArchivo(item.archivo, zona);
    } else {
      zona.append(avisoFaltante(item.archivo + " (formato no compatible: usa PNG, SVG o PDF)"));
    }

    const pie = crear("figcaption");
    if (item.titulo) pie.append(crear("b", "", item.titulo));
    if (item.descripcion) pie.append(crear("span", "", item.descripcion));
    if (item.credito) {
      const cred = crear("small", "credito");
      if (item.enlace) {
        const a = crear("a", "", item.credito);
        a.href = item.enlace; a.target = "_blank"; a.rel = "noopener";
        cred.append(a);
      } else cred.textContent = item.credito;
      pie.append(cred);
    }
    tarjeta.append(zona, pie);
    caja.append(tarjeta);
  });
}


/* ---------- 2c. Herramientas (logos) ---------- */

function pintarHerramientas() {
  const caja = document.getElementById("lista-herramientas");
  if (!caja || typeof HERRAMIENTAS === "undefined") return;
  HERRAMIENTAS.forEach(h => {
    const tarjeta = crear(h.enlace ? "a" : "div", "herramienta");
    if (h.enlace) { tarjeta.href = h.enlace; tarjeta.target = "_blank"; tarjeta.rel = "noopener"; }
    const logo = crear("span", "logo");
    if (h.logo) {
      const img = crear("img");
      img.src = h.logo;
      img.alt = "";
      // Si el logo no está, se muestra la inicial
      img.addEventListener("error", () => logo.replaceChildren(crear("span", "inicial", h.nombre.charAt(0))));
      logo.append(img);
    } else {
      logo.append(crear("span", "inicial", h.nombre.charAt(0)));
    }
    const texto = crear("span", "texto");
    texto.append(crear("b", "", h.nombre), crear("small", "", h.uso || ""));
    tarjeta.append(logo, texto);
    caja.append(tarjeta);
  });
}


/* ---------- 3. Visor de imágenes en grande ---------- */

const visor = document.getElementById("visor");

function abrirVisor(ruta, titulo, descripcion) {
  // Navegadores viejos: abre la imagen en otra pestaña
  if (!visor || typeof visor.showModal !== "function") { window.open(ruta, "_blank"); return; }
  visor.querySelector("img").src = ruta;
  visor.querySelector("img").alt = titulo || "";
  visor.querySelector(".visor-titulo").textContent = titulo || "";
  visor.querySelector(".visor-texto").textContent = descripcion || "";
  visor.querySelector(".visor-original").href = ruta;
  visor.showModal();
}

if (visor) {
  visor.querySelector(".cerrar").addEventListener("click", () => visor.close());
  // Tocar fuera de la imagen también cierra
  visor.addEventListener("click", e => { if (e.target === visor) visor.close(); });
}


/* ---------- Arranque ---------- */
pintarPoster();
pintarGaleria("galeria-histologia", typeof HISTOLOGIA !== "undefined" ? HISTOLOGIA : []);
pintarGaleria("galeria-imagenologia", typeof IMAGENOLOGIA !== "undefined" ? IMAGENOLOGIA : []);
pintarHerramientas();
