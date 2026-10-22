# Bebetter website

Static site: plain HTML, CSS and JavaScript, no build step.

- `index.html` – home page, `news.html` – news index, `post.html?p=<slug>` – article
- `styles.css` – shared styles, `blog.css` – news/article styles
- `core.js` – shared motion (Lenis smooth scroll, nav, footer, reveals); `home.js` and `blog.js` – page sections
- `posts.js` – the news posts (English fields plus a `th` block per post)
- `i18n.js` – Thai translations; the EN/TH switch in the nav reloads the page with `?lang=th|en`
- Animation: GSAP 3.13 (ScrollTrigger, SplitText, DrawSVG, Draggable, Inertia) and Lenis 1.3.1, loaded from jsDelivr

Run locally: `python3 -m http.server 4747` in this folder, then open http://localhost:4747.

Deploys on Vercel as a static site; `vercel.json` turns off the framework preset and the build step.
