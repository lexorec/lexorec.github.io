/* Syndicate the latest posts from javierordonezroman.wordpress.com
   via the WordPress.com public REST API (CORS-enabled). Client-side,
   so new posts appear without rebuilding the site. */
(function () {
  "use strict";

  var SITE = "javierordonezroman.wordpress.com";
  var COUNT = 3;
  var BLOG_URL = "https://javierordonezroman.wordpress.com/";
  var API =
    "https://public-api.wordpress.com/rest/v1.1/sites/" + SITE +
    "/posts/?number=" + COUNT +
    "&fields=ID,date,title,URL,excerpt";

  var list = document.getElementById("blog-list");
  var status = document.getElementById("blog-status");
  if (!list) return;

  // Turn API HTML (titles/excerpts) into plain, collapsed text — never
  // injected as markup, so remote content can't run in the page.
  function toText(html) {
    var el = document.createElement("div");
    el.innerHTML = html || "";
    return (el.textContent || "").replace(/\s+/g, " ").trim();
  }

  function truncate(text, max) {
    if (text.length <= max) return text;
    var cut = text.slice(0, max);
    var lastSpace = cut.lastIndexOf(" ");
    return (lastSpace > 40 ? cut.slice(0, lastSpace) : cut).trim() + "…";
  }

  function formatDate(iso) {
    var d = new Date(iso);
    if (isNaN(d)) return "";
    try {
      return d.toLocaleDateString("es", {
        year: "numeric", month: "long", day: "numeric"
      });
    } catch (e) {
      return d.toISOString().slice(0, 10);
    }
  }

  function fail() {
    if (status) {
      status.textContent = "";
      var a = document.createElement("a");
      a.href = BLOG_URL;
      a.textContent = "No se pudieron cargar las entradas. Visita el blog.";
      status.appendChild(a);
    }
  }

  function render(posts) {
    list.textContent = "";
    posts.forEach(function (post) {
      var li = document.createElement("li");
      li.className = "blog-post";

      var h3 = document.createElement("h3");
      h3.className = "blog-post__title";
      var link = document.createElement("a");
      link.href = post.URL;
      link.textContent = toText(post.title) || "(sin título)";
      h3.appendChild(link);

      var time = document.createElement("time");
      time.className = "blog-post__date";
      time.dateTime = post.date;
      time.textContent = formatDate(post.date);

      li.appendChild(h3);
      li.appendChild(time);

      var excerpt = truncate(toText(post.excerpt), 180);
      if (excerpt) {
        var p = document.createElement("p");
        p.className = "blog-post__excerpt";
        p.textContent = excerpt;
        li.appendChild(p);
      }

      list.appendChild(li);
    });
  }

  fetch(API, { headers: { Accept: "application/json" } })
    .then(function (res) {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.json();
    })
    .then(function (data) {
      var posts = (data && data.posts) || [];
      if (!posts.length) return fail();
      render(posts);
    })
    .catch(fail);
})();
