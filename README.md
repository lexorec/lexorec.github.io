# Javier Ordóñez Román — LEXOR Abogados

Personal site of Javier Ordóñez Román, lawyer in Machala, Ecuador (Estudio Jurídico LEXOR Abogados).
Live at **https://lexorec.github.io/**.

A one-page Jekyll site served by GitHub Pages from the `master` branch. All editable text lives in
`_data/site.yml` and can be edited in the browser through [Pages CMS](https://app.pagescms.org).

```
_config.yml            Site URL and files excluded from the build
_data/site.yml         Page content: bio, publications, contact, SEO texts
index.html             Page template (Liquid)
404.html               "Página no encontrada" page
stylesheets/styles.css Styles (color and font tokens at the top)
javascripts/blog.js    Loads the 3 latest posts from the WordPress blog
.pages.yml             Pages CMS form definition
me-web.jpg / me.jpg    Portrait (small version shown, full size opens on click)
lexor-logo.jpg         Firm logo
og-image.jpg           1200×630 image for link previews (WhatsApp, Facebook, X…)
favicon*, icon-*, apple-touch-icon.png, site.webmanifest   Icons
robots.txt, sitemap.xml                                   Search engines
```

## Editing content (Pages CMS)

1. Go to https://app.pagescms.org and sign in with the GitHub account `lexorec`.
2. Open the `lexorec.github.io` repository (install the Pages CMS GitHub app on it the first time).
3. Open **Contenido del sitio**, edit, and **Save**. Each save is a commit; the site updates in about a minute.

Editable sections: *Presentación* (bio), *Publicaciones*, *Contacto*, *Notas del blog* (section title)
and *Buscadores y redes sociales* (page title and descriptions).

Not editable from the CMS (edit the files directly):

- **Portrait**: replace both `me-web.jpg` (800×800, shown on the page) and `me.jpg` (full size).
- **Logo, name heading and firm name**: in `index.html`.
- **Blog source**: `javascripts/blog.js` reads `javierordonezroman.wordpress.com` through the public
  WordPress.com API. Posts appear automatically when he publishes; nothing to do here.
- **Structured data** (the JSON-LD block in `index.html`) takes email, address, blog and Twitter from
  `_data/site.yml`; areas of practice and universities are written in the template.

## Local preview

Needs Ruby 3.3 (`brew install ruby@3.3`):

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.
