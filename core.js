/* Bebetter — shared motion layer (every page). GSAP 3.13 (ScrollTrigger, SplitText, DrawSVG,
   Draggable, Inertia) driven by Lenis smooth scroll. */
gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin, Draggable, InertiaPlugin);

const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* Burst sticker: 14-point star */
$$("polygon[data-burst]").forEach((p) => {
  const pts = [];
  for (let i = 0; i < 28; i++) {
    const a = (i / 28) * Math.PI * 2 - Math.PI / 2;
    const r = i % 2 ? 30 : 49 - (i % 4) * 2;
    pts.push((50 + Math.cos(a) * r).toFixed(1) + "," + (50 + Math.sin(a) * r).toFixed(1));
  }
  p.setAttribute("points", pts.join(" "));
});

/* ── Smooth scroll ─────────────────────────────────────── */
// Phones: the address bar showing/hiding resizes the viewport on every scroll
// direction change; recalculating pins then makes the page jump. Ignore it.
const touch = matchMedia("(hover: none), (pointer: coarse)").matches;
ScrollTrigger.config({ ignoreMobileResize: true });
let lenis = null;
if (!reduce) {
  lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}
$$('a[href^="#"]').forEach((a) =>
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    const el = id === "#top" ? document.body : $(id);
    if (!el) return;
    e.preventDefault();
    lenis ? lenis.scrollTo(el, { duration: 1.4 }) : el.scrollIntoView();
  })
);

/* ── Header colour over dark sections ──────────────────── */
// Created after the pinned section so the start/end values include its spacer.
function headerTheme() {
  const hdr = $(".hdr");
  let darks = [];
  darks = $$('[data-theme="dark"]').map((sec) =>
    ScrollTrigger.create({ trigger: sec, start: "top 50px", end: "bottom 50px", onToggle: sync })
  );
  function sync(self) { hdr.classList.toggle("on-dark", self.isActive || darks.some((st) => st !== self && st.isActive)); }
}

/* ── Custom cursor label ───────────────────────────────── */
// Bound after the page has rendered, so cards built in JS get it too.
function cursor() {
  if (!finePointer) return;
  const cur = $(".cursor");
  const cx = gsap.quickTo(cur, "x", { duration: 0.35, ease: "power3" });
  const cy = gsap.quickTo(cur, "y", { duration: 0.35, ease: "power3" });
  addEventListener("pointermove", (e) => { cx(e.clientX); cy(e.clientY); });
  $$("[data-cursor], .dstk").forEach((el) => {
    el.addEventListener("pointerenter", () => {
      cur.textContent = tr(el.dataset.cursor || "drag");
      gsap.to(cur, { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(2)" });
    });
    el.addEventListener("pointerleave", () => gsap.to(cur, { scale: 0, opacity: 0, duration: 0.2 }));
  });
}

/* ── Nav: logo draws itself, hides on the way down ─────── */
function navIntro() {
  const strokes = $$(".hdr-logo .mark path"), dot = $(".hdr-logo .mark circle"), letters = $$(".hdr-logo .word span");
  return gsap.timeline()
    .from([".hdr-work", ".hdr-news", ".hdr-talk"], { y: -50, opacity: 0, duration: 0.9, stagger: 0.1, ease: "expo.out" }, 0)
    .from(strokes, { drawSVG: 0, duration: 0.9, stagger: 0.25, ease: "power2.inOut" }, 0)
    .from(dot, { scale: 0, transformOrigin: "50% 50%", duration: 0.6, ease: "back.out(3)" }, 0.9)
    .from(letters, { yPercent: 110, duration: 0.7, stagger: 0.035, ease: "expo.out" }, 0.4);
}
function nav() {
  const logo = $(".hdr-logo");
  const strokes = $$(".mark path", logo), dot = $(".mark circle", logo);
  if (!reduce) {
    logo.addEventListener("pointerenter", () => {
      gsap.fromTo(strokes, { drawSVG: "0%" }, { drawSVG: "100%", duration: 0.7, stagger: 0.15, ease: "power2.inOut", overwrite: true });
      gsap.fromTo(dot, { scale: 0 }, { scale: 1, transformOrigin: "50% 50%", duration: 0.5, delay: 0.5, ease: "back.out(3)", overwrite: true });
    });
  }
  // slide away while reading down, come back on any upward scroll
  const hdr = $(".hdr");
  let hidden = false;
  hdr.classList.toggle("is-solid", scrollY > innerHeight * 0.85); // e.g. a reload that restores scroll
  ScrollTrigger.create({
    start: 0, end: "max",
    onUpdate(self) {
      hdr.classList.toggle("is-solid", self.scroll() > innerHeight * 0.85);
      const hide = self.direction === 1 && self.scroll() > innerHeight * 0.6;
      if (hide === hidden) return;
      hidden = hide;
      gsap.to(hdr, { yPercent: hide ? -110 : 0, duration: hide ? 0.45 : 0.6, ease: hide ? "power2.in" : "expo.out", overwrite: true });
    },
  });
}

/* ── Word reveals on big headings ──────────────────────── */
function reveals() {
  $$("h2").forEach((h) => {
    const parts = $$(".reveal", h);
    if (!parts.length) return;
    const words = parts.flatMap((p) => new SplitText(p, { type: "words" }).words);
    if (reduce) return;
    gsap.from(words, {
      yPercent: 70, rotation: () => gsap.utils.random(-8, 8), opacity: 0, duration: 0.9, stagger: 0.05, ease: "expo.out",
      scrollTrigger: { trigger: h, start: "top 82%" },
    });
    if ($$(".stk", h).length) gsap.from($$(".stk", h), { scale: 0, rotation: -90, duration: 0.8, delay: 0.5, ease: "back.out(2.2)", scrollTrigger: { trigger: h, start: "top 82%" } });
  });
}

/* ── Hand-drawn marks ──────────────────────────────────── */
function drawings() {
  if (reduce) return;
  $$(".draw:not(.hero-draw)").forEach((p) =>
    gsap.from(p, { drawSVG: 0, duration: 1.2, delay: 0.45, ease: "power2.inOut", scrollTrigger: { trigger: p.closest("h2") || p, start: "top 80%" } })
  );
  $$(".draw-scroll path").forEach((p) =>
    gsap.from(p, { drawSVG: 0, ease: "none", scrollTrigger: { trigger: p.closest("svg"), start: "top 90%", end: "top 40%", scrub: 1 } })
  );
  // link underlines redraw on hover
  $$(".view, .fgrid .ul").forEach((a) => {
    const p = $("path", a);
    a.addEventListener("pointerenter", () => gsap.fromTo(p, { drawSVG: "0%" }, { drawSVG: "100%", duration: 0.6, ease: "power2.out" }));
  });
}

/* ── 8. Footer ─────────────────────────────────────────── */
function footer() {
  const chars = new SplitText(".giant", { type: "chars" }).chars;
  Draggable.create(".dstk", { type: "x,y", bounds: ".panel", inertia: true, zIndexBoost: true,
    onPress() { gsap.to(this.target, { scale: 1.12, duration: 0.2 }); },
    onRelease() { gsap.to(this.target, { scale: 1, duration: 0.5, ease: "elastic.out(1,0.4)" }); },
  });
  if (reduce) return;
  const st = { trigger: ".panel", start: "top 60%" };
  gsap.from(chars, { yPercent: 100, rotation: () => gsap.utils.random(-20, 20), duration: 1.1, stagger: 0.05, ease: "expo.out", scrollTrigger: st });
  gsap.from(".dstk", { y: -500, rotation: () => gsap.utils.random(-180, 180), opacity: 0, duration: 1.4, stagger: 0.09, delay: 0.3, ease: "bounce.out", scrollTrigger: st });
  gsap.from(".fgrid > div", { y: 40, opacity: 0, duration: 0.9, stagger: 0.1, ease: "expo.out", scrollTrigger: { trigger: ".panel", start: "top 80%" } });
}

/* ── Boot ──────────────────────────────────────────────── */
// Each page passes its own setup; `ownIntro` means the page plays navIntro()
// inside its own opening timeline (the home hero does).
function boot(pageInit, { ownIntro = false } = {}) {
  Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 2500))]).then(() => {
    if (!ownIntro && !reduce) navIntro();
    pageInit();
    reveals();
    drawings();
    footer();
    headerTheme();
    nav();
    cursor();
    ScrollTrigger.refresh();
  });
}
