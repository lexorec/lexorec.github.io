# Javier Ordóñez Román — LEXOR Abogados

Sitio personal de Javier Ordóñez Román, abogado en Machala, Ecuador (Estudio Jurídico LEXOR Abogados).
Publicado en **https://lexorec.github.io/**.

Es un sitio Jekyll de una sola página servido por GitHub Pages desde la rama `master`. Todo el texto
editable está en `_data/site.yml` y se puede cambiar desde el navegador con
[Pages CMS](https://app.pagescms.org).

```
_config.yml            URL del sitio y archivos excluidos
_data/site.yml         Contenido: presentación, publicaciones, contacto, textos para buscadores
index.html             Plantilla de la página (Liquid)
404.html               Página "Página no encontrada"
stylesheets/styles.css Estilos (colores y tipografías al inicio)
javascripts/blog.js    Carga las 3 últimas entradas del blog de WordPress
.pages.yml             Formularios de Pages CMS
me-web.jpg / me.jpg    Retrato (versión pequeña en la página; la grande se abre al hacer clic)
lexor-logo.jpg         Logo del estudio
og-image.jpg           Imagen 1200×630 para vistas previas al compartir (WhatsApp, Facebook, X…)
favicon*, icon-*, apple-touch-icon.png, site.webmanifest   Íconos
robots.txt, sitemap.xml                                   Buscadores
```

## Editar el contenido (Pages CMS)

1. Entrar a <https://app.pagescms.org> con la cuenta de GitHub `lexorec`.
2. Abrir el repositorio `lexorec.github.io` (la primera vez hay que instalar la app de Pages CMS en él).
3. Abrir **Contenido del sitio**, editar y pulsar **Save**. Cada guardado es un commit; el sitio se
   actualiza en un minuto aproximadamente.

Secciones editables: *Presentación*, *Publicaciones*, *Contacto*, *Notas del blog* (título de la sección)
y *Buscadores y redes sociales* (título de la página y descripciones).

No se editan desde el CMS (hay que cambiar los archivos directamente):

- **Retrato**: reemplazar `me-web.jpg` (800×800, el que se ve en la página) y `me.jpg` (tamaño completo).
- **Logo, nombre y nombre del estudio**: en `index.html`.
- **Blog**: `javascripts/blog.js` lee `javierordonezroman.wordpress.com` mediante la API pública de
  WordPress.com. Las entradas nuevas aparecen solas cuando publica; no hay que hacer nada.
- **Datos estructurados** (el bloque JSON-LD en `index.html`): el email, la dirección, el blog y Twitter
  salen de `_data/site.yml`; las áreas de práctica y las universidades están escritas en la plantilla.

## Vista previa local

Requiere Ruby 3.3 (`brew install ruby@3.3`):

```bash
bundle install
bundle exec jekyll serve
```

Luego abrir http://localhost:4000.

## Notas

- **Analítica**: Teradive (script al final de `index.html`).
