/* Bebetter — news index and article pages. Needs core.js and posts.js. */
// th-TH gives the Buddhist-era year Thai readers expect.
const fmtDate = (d) => new Date(d + "T00:00:00").toLocaleDateString(LANG === "th" ? "th-TH" : "en-GB", { day: "numeric", month: "short", year: "numeric" });
// Thai has no spaces between words, so count characters for it.
const readMins = (p) => {
  const text = p.html.replace(/<[^>]+>/g, " ");
  return Math.max(1, Math.round(LANG === "th" ? text.replace(/\s/g, "").length / 600 : text.split(/\s+/).length / 220));
};
// A post in the page language: its `th` block laid over the English fields.
const local = (p) => (LANG === "th" && p.th ? { ...p, ...p.th, link: { ...p.link, label: p.th.link } } : p);
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
// Dated posts newest first; undated ones after them.
const sorted = POSTS.map(local).sort((a, b) => (b.date || "").localeCompare(a.date || ""));
const url = (p) => `post.html?p=${p.slug}`;

function coverHTML(p, extra = "") {
  const c = p.cover;
  // Portrait posters fill the frame; a landscape image (publio) is fitted whole on its background colour.
  const wide = !/poster|-card\./.test(c.img || "");
  return c.img
    ? `<div class="cover ${extra}${wide ? " wide" : ""}" style="--cbg:${c.bg}"><img class="photo" src="${c.img}" alt="" loading="lazy" /></div>`
    : `<div class="cover ${extra}" style="--cbg:${c.bg}"><div class="tile"><img src="${c.tile}" alt="" loading="lazy" /></div></div>`;
}
// The feature box is landscape (16:11); a post can supply its own landscape
// artwork for it (`cover.wide`), otherwise the portrait cover is fitted whole.
function featureCover(p) {
  if (!p.cover.wide) return coverHTML(p);
  return `<div class="cover fill" style="--cbg:${p.cover.bg}"><img class="photo" src="${p.cover.wide}" alt="" /></div>`;
}
function metaHTML(p) {
  return `<div class="meta" style="--tint:${p.tint}"><span class="tag">${p.label}</span>${p.date ? `<time datetime="${p.date}">${fmtDate(p.date)}</time><span aria-hidden="true">·</span>` : ""}<span>${readMins(p)} ${tr("min read")}</span></div>`;
}
function cardHTML(p, i) {
  const r = [-1.2, 0.9, -0.6, 1.3, -1, 0.7][i % 6];
  return `<a class="post-card" href="${url(p)}" data-kind="${p.kind}" data-cursor="read" style="--r:${r}deg">
    ${coverHTML(p)}<span class="go" aria-hidden="true">↗</span>
    ${metaHTML(p)}<h3>${esc(p.title)}</h3><p>${esc(p.excerpt)}</p></a>`;
}

/* ── News index ────────────────────────────────────────── */
function newsPage() {
  const [lead, ...rest] = sorted;
  $(".feature").innerHTML = `
    <a class="cover-link" href="${url(lead)}" data-cursor="read"><span class="tstk new">${tr("new!")}</span>${featureCover(lead)}</a>
    <div>${metaHTML(lead)}<h2 class="heavy">${esc(lead.title)}</h2><p>${esc(lead.excerpt)}</p>
      <a class="read" href="${url(lead)}">${tr("Read the story")} <i aria-hidden="true">→</i></a></div>`;
  const grid = $(".grid");
  grid.innerHTML = rest.map(cardHTML).join("") + `<p class="empty" hidden>${tr("Nothing here yet.")}</p>`;

  // filter chips
  const kinds = { all: rest.length };
  rest.forEach((p) => (kinds[p.kind] = (kinds[p.kind] || 0) + 1));
  const names = { all: "all", product: "products", guide: "guides", free: "free stuff", studio: "studio notes" };
  const chips = $(".chips");
  chips.innerHTML = Object.keys(names).filter((k) => kinds[k]).map((k) =>
    `<button class="chip-btn" aria-pressed="${k === "all"}" data-k="${k}">${tr(names[k])}<span>${kinds[k]}</span></button>`).join("");
  chips.addEventListener("click", (e) => {
    const b = e.target.closest(".chip-btn");
    if (!b) return;
    $$(".chip-btn", chips).forEach((x) => x.setAttribute("aria-pressed", x === b));
    const cards = $$(".post-card", grid);
    const show = cards.filter((c) => b.dataset.k === "all" || c.dataset.kind === b.dataset.k);
    cards.forEach((c) => c.classList.toggle("is-hidden", !show.includes(c)));
    $(".empty", grid).hidden = show.length > 0;
    if (!reduce) gsap.fromTo(show, { y: 40, opacity: 0, scale: 0.96 }, { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.05, ease: "expo.out", overwrite: true });
    ScrollTrigger.refresh();
  });

  if (reduce) return;
  const split = new SplitText(".nw-hero h1 .split", { type: LANG === "th" ? "words" : "chars" }); // Thai: keep marks on their letters
  const chars = LANG === "th" ? split.words : split.chars;
  gsap.timeline({ delay: 0.2 })
    .from(".nw-hero .pill", { y: 20, opacity: 0, duration: 0.6, ease: "expo.out" })
    .from(chars, { yPercent: 110, rotation: () => gsap.utils.random(-20, 20), opacity: 0, duration: 0.9, stagger: 0.025, ease: "expo.out" }, 0.1)
    .from(".nw-hero .draw", { drawSVG: 0, duration: 1, ease: "power2.inOut" }, 0.7)
    .from(".nw-hero .stk", { scale: 0, rotation: -120, duration: 0.8, stagger: 0.12, ease: "back.out(2.4)" }, 0.8)
    .from(".nw-hero .blob", { scale: 0.3, rotation: -90, opacity: 0, duration: 1.2, ease: "expo.out" }, 0.3)
    .from(".nw-hero p, .chip-btn", { y: 24, opacity: 0, duration: 0.7, stagger: 0.05, ease: "expo.out" }, 0.8);
  gsap.from(".feature > *", { y: 80, opacity: 0, rotation: (i) => (i ? 0 : -3), duration: 1.1, stagger: 0.12, ease: "expo.out", scrollTrigger: { trigger: ".feature", start: "top 85%" } });
  gsap.from(".feature .new", { scale: 0, rotation: -90, duration: 0.8, delay: 0.6, ease: "back.out(2.6)", scrollTrigger: { trigger: ".feature", start: "top 85%" } });
  $$(".post-card", grid).forEach((c, i) =>
    gsap.from(c, { y: 120, opacity: 0, rotation: i % 2 ? 4 : -4, duration: 1, delay: (i % 3) * 0.08, ease: "expo.out", scrollTrigger: { trigger: c, start: "top 92%" } })
  );
  bandFx();
}

/* ── Article ───────────────────────────────────────────── */
function postPage() {
  const slug = new URLSearchParams(location.search).get("p");
  const p = sorted.find((x) => x.slug === slug) || sorted[0];
  document.title = `${p.title.split(" — ")[0]} · Bebetter`;
  const main = $("main");
  main.style.setProperty("--tint", p.tint);
  const stickers = ["#heart", "#spark", "#smiley", "#bolt"];
  $(".art-head").innerHTML = `
    <a class="back" href="news.html" data-cursor="click">${tr("← all news")}</a>
    ${metaHTML(p)}
    <h1 class="heavy">${esc(p.title)}</h1>
    <p class="lede">${esc(p.excerpt)}</p>`;
  $(".art-cover").innerHTML = coverHTML(p, p.cover.img && /poster|-card\./.test(p.cover.img) ? "poster" : "") +
    `<span class="stk" aria-hidden="true"><svg style="fill:var(--orange)"><use href="${stickers[POSTS.findIndex((x) => x.slug === p.slug) % stickers.length]}"/></svg></span>`;
  $(".prose").innerHTML = p.html + `<p class="art-cta"><a class="read" href="${p.link.href}">${esc(p.link.label)} <i aria-hidden="true">→</i></a></p>`;
  const others = sorted.filter((x) => x !== p).slice(0, 3);
  $(".more .grid").innerHTML = others.map(cardHTML).join("");

  // share
  const share = $(".share");
  $(".line-share", share).href = "https://social-plugins.line.me/lineit/share?url=" + encodeURIComponent(location.href);
  $(".copy", share).addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(location.href); } catch { /* clipboard blocked: the toast still confirms intent */ }
    gsap.fromTo($(".ok", share), { opacity: 0, x: -6 }, { opacity: 1, x: 0, duration: 0.3, yoyo: true, repeat: 1, repeatDelay: 1.2 });
  });

  // reading progress
  gsap.to(".progress", { scaleX: 1, ease: "none", scrollTrigger: { trigger: ".prose", start: "top 70%", end: "bottom 60%", scrub: true } });

  if (reduce) return;
  const words = new SplitText(".art-head h1", { type: "words" });
  gsap.timeline({ delay: 0.2 })
    .from(".back, .art-head .meta", { y: 20, opacity: 0, duration: 0.6, stagger: 0.08, ease: "expo.out" })
    .from(words.words, { yPercent: 100, opacity: 0, rotation: () => gsap.utils.random(-8, 8), duration: 0.9, stagger: 0.04, ease: "expo.out" }, 0.1)
    .from(".lede", { y: 20, opacity: 0, duration: 0.8, ease: "expo.out" }, 0.5)
    .from(".art-cover .cover", { y: 120, scale: 0.92, rotation: -2, opacity: 0, duration: 1.3, ease: "expo.out" }, 0.4)
    .from(".art-cover .stk", { scale: 0, rotation: -120, duration: 0.8, ease: "back.out(2.4)" }, 1.1);
  gsap.to(".art-cover .cover > *", { yPercent: 8, ease: "none", scrollTrigger: { trigger: ".art-cover", start: "top top", end: "bottom top", scrub: true } });
  $$(".prose blockquote").forEach((q) => gsap.from(q, { rotation: -6, scale: 0.9, opacity: 0, duration: 0.9, ease: "back.out(1.8)", scrollTrigger: { trigger: q, start: "top 85%" } }));
  $$(".prose h2").forEach((h) => gsap.from(h, { y: 30, opacity: 0, duration: 0.8, ease: "expo.out", scrollTrigger: { trigger: h, start: "top 88%" } }));
  $$(".more .post-card").forEach((c, i) => gsap.from(c, { y: 100, opacity: 0, duration: 1, delay: i * 0.08, ease: "expo.out", scrollTrigger: { trigger: ".more .grid", start: "top 90%" } }));
  bandFx();
}

function bandFx() {
  if (!$(".band") || reduce) return;
  gsap.from(".band .stk", { scale: 0, rotation: -90, duration: 0.8, stagger: 0.12, ease: "back.out(2.4)", scrollTrigger: { trigger: ".band", start: "top 75%" } });
  $$(".band .stk").forEach((s) => gsap.to(s, { y: -10, rotation: gsap.utils.random(-14, 14), duration: gsap.utils.random(1.8, 2.6), repeat: -1, yoyo: true, ease: "sine.inOut" }));
}

boot(document.body.dataset.page === "post" ? postPage : newsPage);
