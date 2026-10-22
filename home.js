/* Bebetter — home page sections. Needs core.js. */
boot(() => {
  hero();
  say();
  polaroids();
  fan();
  team();
  services();
  tools();
  faq();
}, { ownIntro: true });

/* ── 1. Hero ───────────────────────────────────────────── */
function hero() {
  const objs = $$(".obj");
  const type = LANG === "th" ? "words" : "words,chars"; // Thai marks can't be split from their base letter
  const chars = $$(".hero-title .split").flatMap((el) => { const s = new SplitText(el, { type }); return LANG === "th" ? s.words : s.chars; });
  if (reduce) return;

  const tl = gsap.timeline({ delay: 0.15 });
  tl.from(".hero-media", { scale: 0.86, borderRadius: 60, duration: 1.4, ease: "expo.out" })
    .from(objs, { scale: 0, rotation: () => gsap.utils.random(-90, 90), duration: 1.2, stagger: 0.07, ease: "back.out(1.6)" }, 0.25)
    .from(chars, { yPercent: 120, rotation: () => gsap.utils.random(-25, 25), opacity: 0, duration: 0.9, stagger: 0.022, ease: "expo.out" }, 0.45)
    .from(".hero-draw", { drawSVG: 0, duration: 1.1, ease: "power2.inOut" }, 1.1)
    .from(".hero-title .stk", { scale: 0, rotation: -120, duration: 0.8, stagger: 0.12, ease: "back.out(2.4)" }, 1.25)
    .add(navIntro(), 0.5)
    .from(".cue", { opacity: 0, duration: 0.6 }, 1.6);

  // idle float + pointer parallax
  objs.forEach((o, i) => {
    if (touch && i % 2) return; // half the idle floats on phones
    gsap.to(o, { y: "+=" + gsap.utils.random(14, 26), rotation: gsap.utils.random(-8, 8), duration: gsap.utils.random(2.6, 4), ease: "sine.inOut", repeat: -1, yoyo: true, delay: i * 0.2 });
  });
  const movers = objs.map((o) => ({ d: +o.dataset.depth, img: o.firstElementChild, x: gsap.quickTo(o.firstElementChild, "x", { duration: 1, ease: "power3" }), y: gsap.quickTo(o.firstElementChild, "y", { duration: 1, ease: "power3" }) }));
  if (!touch) $(".hero").addEventListener("pointermove", (e) => {
    const nx = e.clientX / innerWidth - 0.5, ny = e.clientY / innerHeight - 0.5;
    movers.forEach((m) => { m.x(nx * 60 * m.d); m.y(ny * 40 * m.d); });
  });

  // scroll out: the card shrinks and the objects drift apart
  const out = { trigger: ".hero", start: "top top", end: "bottom top", scrub: true };
  // fromTo + immediateRender:false, otherwise these capture the intro's start state
  const scrub = (el, from, to) => gsap.fromTo(el, from, { ...to, ease: "none", immediateRender: false, scrollTrigger: out });
  scrub(".hero-media", { scale: 1, borderRadius: 22 }, { scale: 0.9, borderRadius: 48 });
  const phone = innerWidth < 810;
  scrub(".hero-title", { yPercent: 0, scale: 1, opacity: 1 }, phone ? { yPercent: -10, scale: 0.9, opacity: 0 } : { yPercent: -60, opacity: 0.2 });
  objs.forEach((o) => scrub(o, { yPercent: 0 }, { yPercent: -80 * +o.dataset.depth }));
}

/* ── 2. Pinned sentence with letters that tumble in ─────── */
function say() {
  const track = $(".say-track");
  const words = (LANG === "th" ? "งานดิจิทัล ดีๆ ไม่ต้อง แพงจน กระเป๋าฉีก" : "good digital work shouldn't cost a fortune").split(" ");
  // grapheme clusters, so a Thai vowel or tone mark stays on its letter
  const seg = new Intl.Segmenter(LANG, { granularity: "grapheme" });
  const graphemes = (w) => [...seg.segment(w)].map((s) => s.segment);
  track.innerHTML = words.map((w) => `<span class="word">${graphemes(w).map((c) => `<span class="char">${c}</span>`).join("")}</span>`).join(" ");

  // stickers ride along inside the sentence
  const extras = [
    { w: 1, html: `<span class="stk" style="width:.75em;height:.75em;top:-.55em;left:42%"><svg><use href="#bolt"/></svg></span>` },
    { w: 2, html: `<svg class="loop draw-loop" viewBox="0 0 240 110" style="left:10%"><path d="M4 106C10 40 70 20 96 50s-6 60-30 40C44 70 80 2 150 6s80 60 84 96m0 0-14-10m14 10 8-14"/></svg>` },
    { w: 3, html: `<span class="tstk th" style="font-size:.2em;top:.9em;left:20%;background:var(--lime);transform:rotate(-8deg)">${LANG === "th" ? "fair prices!" : "ราคาสมเหตุสมผล"}</span>` },
    { w: LANG === "th" ? 4 : 5, html: `<span class="stk" style="width:.8em;height:.8em;top:-.6em;left:-10%"><svg><use href="#smiley"/></svg></span>` },
    { w: LANG === "th" ? 0 : 6, html: `<span class="stk" style="width:.7em;height:.7em;top:.55em;left:55%"><svg><use href="#heart"/></svg></span>` },
  ];
  const wordEls = $$(".word", track);
  extras.forEach((x) => wordEls[x.w]?.insertAdjacentHTML("beforeend", x.html));

  if (reduce) {
    track.style.cssText = "position:relative;white-space:normal;padding:20vh var(--gutter) 0;transform:none;font-size:clamp(56px,9vw,140px)";
    return;
  }

  const chars = $$(".char", track);
  const stickers = $$(".stk, .tstk", track);
  const loop = $(".draw-loop path", track);
  gsap.set(loop, { drawSVG: 0 });
  gsap.set(stickers, { scale: 0 });
  const seed = chars.map((_, i) => ({ y: Math.sin(i * 12.9898) * 0.5 + 0.35, r: Math.cos(i * 78.233) }));
  const shown = new Set();
  const setters = chars.map((c) => ({ y: gsap.quickSetter(c, "y", "px"), r: gsap.quickSetter(c, "rotation", "deg") }));
  // Positions inside the track, measured on refresh only: reading layout on
  // every scroll frame was a main cause of jank on phones.
  let offs = [], stkOffs = [], loopBox = { left: 0, width: 1 };
  const measure = () => {
    const tx = gsap.getProperty(track, "x");
    offs = chars.map((c) => c.offsetLeft + c.parentElement.offsetLeft + c.offsetWidth / 2);
    stkOffs = stickers.map((s) => s.offsetLeft + s.parentElement.offsetLeft);
    const lb = loop.getBoundingClientRect();
    loopBox = { left: lb.left - tx, width: lb.width };
  };

  const st = {
    trigger: ".say",
    start: "top top",
    end: () => "+=" + track.scrollWidth * 0.9,
    pin: true,
    scrub: true,
    invalidateOnRefresh: true,
    onRefresh: measure,
  };
  gsap.to(track, {
    x: () => -(track.scrollWidth - innerWidth * 0.5),
    ease: "none",
    scrollTrigger: st,
    onUpdate() {
      const tx = gsap.getProperty(track, "x"), vw = innerWidth, vh = innerHeight;
      chars.forEach((c, i) => {
        const p = (offs[i] + tx) / vw; // 0..1 across the screen
        let t = gsap.utils.clamp(0, 1, (p - 0.58) / 0.42);
        t = t * t;
        setters[i].y(-t * seed[i].y * vh * (vw < 810 ? 0.2 : 0.38)); // shorter arc on phones so letters stay on screen
        setters[i].r(t * seed[i].r * 75);
      });
      stickers.forEach((s, i) => {
        const on = stkOffs[i] + tx < vw * 0.82;
        if (on !== shown.has(s)) {
          on ? shown.add(s) : shown.delete(s);
          gsap.to(s, { scale: on ? 1 : 0, rotation: on ? 0 : -40, duration: 0.6, ease: on ? "back.out(2.2)" : "power2.in", overwrite: true });
        }
      });
      gsap.set(loop, { drawSVG: "0% " + gsap.utils.clamp(0, 100, ((vw * 0.9 - (loopBox.left + tx)) / (loopBox.width + vw * 0.3)) * 100) + "%" });
    },
  });
  measure();
}

/* ── 3. Polaroids fly in ───────────────────────────────── */
function polaroids() {
  if (reduce) return;
  const cards = $$(".polaroid");
  cards.forEach((c, i) => {
    const r = parseFloat(getComputedStyle(c).getPropertyValue("--r"));
    gsap.set(c, { rotation: r });
    gsap.from(c, {
      y: 340 + i * 60, rotation: r * 4, scale: 0.8, opacity: 0, ease: "power3.out",
      scrollTrigger: { trigger: ".polaroids", start: "top 95%", end: "top 35%", scrub: 1 },
    });
    gsap.to(c, { yPercent: -16 - i * 6, ease: "none", scrollTrigger: { trigger: ".polaroids", start: "top 35%", end: "bottom top", scrub: true } });
  });
  gsap.from(".polaroids .blob", { scale: 0.3, rotation: -120, ease: "none", scrollTrigger: { trigger: ".polaroids", start: "top bottom", end: "center center", scrub: 1 } });
  gsap.from(".chip", { scale: 0, duration: 0.5, stagger: 0.12, ease: "back.out(2.5)", scrollTrigger: { trigger: ".polaroids", start: "top 40%" } });
}

/* ── 4. Fan carousel ───────────────────────────────────── */
function fan() {
  const items = [
    { tag: "social", title: "publio, content on autopilot", img: "assets/projects/publio-poster.jpg", href: "#contact", badge: "own product" },
    { tag: "saas", title: "itsme., link-in-bio builder", img: "assets/projects/itsme-card.jpg", href: "https://itsme.media/", badge: "live" },
    { tag: "mac app", title: "Ghozt, Claude Code in your notch", img: "assets/projects/ghozt-card.jpg", href: "https://ghozt.vercel.app/", badge: "live" },
    { tag: "LINE", title: "LINE OA storefronts & rich menus", img: "assets/projects/line-poster.jpg", href: "#services", badge: "service" },
    { tag: "AI", title: "assistants that answer in your tone", img: "assets/projects/ai-poster.jpg?v=2", href: "#services", badge: "service" },
    { tag: "production", title: "real photos of your real business", img: "assets/projects/production-poster.jpg", href: "#services", badge: "service" },
    { tag: "automation", title: "n8n flows that run while you sleep", img: "assets/projects/automation-poster.jpg", href: "#services", badge: "service" },
  ];
  const fanEl = $(".fan");
  const n = items.length;
  fanEl.innerHTML = items.map((it, i) =>
    `<div class="card" role="group" aria-roledescription="slide" aria-label="${i + 1} ${tr("of")} ${n}: ${tr(it.title)}">` +
    (it.img ? `<img src="${it.img}" alt="${tr(it.title)}"${it.fit ? ` style="object-fit:${it.fit};background:${it.bg}"` : ""} />` : `<div class="tile" style="background:${it.bg};color:${it.fg}"><img src="${it.tile}" alt="" /><b>${tr(it.tag)}</b></div>`) +
    (i === 0 || it.badge !== "service" ? `<span class="badge"><svg viewBox="0 0 100 100"><use href="#spark"/></svg>${tr(it.badge)}</span>` : "") +
    `</div>`
  ).join("");
  const cards = $$(".card", fanEl);
  const tag = $(".work-meta .tag"), title = $(".work-meta h3"), view = $(".work-meta .view");
  let pos = 0, shownIdx = -1;

  const wrapD = (d) => ((((d + n / 2) % n) + n) % n) - n / 2;
  function layout(p, dur = 0) {
    const w = cards[0].offsetWidth;
    cards.forEach((c, i) => {
      const d = wrapD(i - p), a = Math.abs(d);
      gsap.to(c, {
        x: d * w * 0.36 + Math.sign(d) * Math.min(a, 1) * w * 0.18,
        y: a * 26 + (a > 1 ? (a - 1) * 18 : 0),
        rotation: d * 7,
        scale: 1 - Math.min(a, 3) * 0.07,
        zIndex: 100 - Math.round(a * 10),
        autoAlpha: a > 3.2 ? 0 : 1,
        filter: `brightness(${1 - Math.min(a, 3) * 0.12})`,
        duration: dur, ease: "expo.out", overwrite: true,
      });
    });
    const idx = ((Math.round(p) % n) + n) % n;
    if (idx !== shownIdx) {
      shownIdx = idx;
      const it = items[idx];
      gsap.fromTo([tag, title, view], { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, stagger: 0.05, ease: "power3.out", overwrite: true });
      tag.textContent = tr(it.tag); title.textContent = tr(it.title); view.href = it.href;
      $("span", view).textContent = tr(it.href.startsWith("http") ? "Visit site" : it.href === "#contact" ? "Ask us about it" : "See the service");
    }
  }
  const goTo = (p) => { pos = p; layout(pos, 0.9); };
  layout(0);

  $(".fan-nav .prev").onclick = () => goTo(Math.round(pos) - 1);
  $(".fan-nav .next").onclick = () => goTo(Math.round(pos) + 1);
  fanEl.tabIndex = 0;
  fanEl.addEventListener("keydown", (e) => { if (e.key === "ArrowLeft") goTo(Math.round(pos) - 1); if (e.key === "ArrowRight") goTo(Math.round(pos) + 1); });

  // drag with momentum
  let startX = 0, startPos = 0, moved = false, lastX = 0, lastT = 0, vel = 0;
  fanEl.addEventListener("pointerdown", (e) => {
    startX = lastX = e.clientX; lastT = performance.now(); startPos = pos; moved = false; vel = 0;
    fanEl.setPointerCapture(e.pointerId); fanEl.classList.add("dragging");
  });
  fanEl.addEventListener("pointermove", (e) => {
    if (!fanEl.classList.contains("dragging")) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 4) moved = true;
    const now = performance.now();
    vel = (e.clientX - lastX) / Math.max(1, now - lastT); lastX = e.clientX; lastT = now;
    pos = startPos - dx / (cards[0].offsetWidth * 0.55);
    layout(pos, 0.35);
  });
  const end = (e) => {
    if (!fanEl.classList.contains("dragging")) return;
    fanEl.classList.remove("dragging");
    if (!moved) {
      // a tap: bring the tapped card to the front
      const hit = document.elementsFromPoint(e.clientX, e.clientY).find((el) => el.classList?.contains("card"));
      const i = cards.indexOf(hit);
      if (i >= 0) goTo(Math.round(pos) + wrapD(i - Math.round(pos)));
      return;
    }
    goTo(Math.round(pos - vel * 2.2));
  };
  fanEl.addEventListener("pointerup", end);
  fanEl.addEventListener("pointercancel", end);
  addEventListener("resize", () => layout(pos));

  if (reduce) return;
  // the fan opens up as it scrolls into view
  const intro = { p: 0 };
  gsap.from(cards, { y: 300, rotation: 0, x: 0, scale: 0.7, stagger: 0.04, duration: 1.1, ease: "expo.out", scrollTrigger: { trigger: ".fan", start: "top 75%" }, onComplete: () => layout(pos, 0.6), immediateRender: false });
  gsap.from(".work .blob", { scale: 0, rotation: 60, ease: "none", scrollTrigger: { trigger: ".work", start: "top 70%", end: "center center", scrub: 1 } });
}

/* ── 5. Team parallax field ────────────────────────────── */
function team() {
  if (reduce) return;
  // The team is a static grid at every width; only the background blobs drift.
  $$(".field .blob").forEach((el) => {
    gsap.to(el, { y: -+el.dataset.speed * 320, ease: "none", scrollTrigger: { trigger: ".field", start: "top bottom", end: "bottom top", scrub: true } });
  });
  $$(".field .mate").forEach((m) =>
    gsap.from($(".ph", m), { clipPath: "inset(100% 0 0 0 round 16px)", duration: 1.1, ease: "expo.out", scrollTrigger: { trigger: m, start: "top 88%" } })
  );
  $$(".field .stk, .field .tstk").forEach((s) =>
    gsap.from(s, { scale: 0, rotation: "-=40", duration: 0.8, ease: "back.out(2.4)", scrollTrigger: { trigger: s, start: "top 85%" } })
  );
  $$(".field .blob").forEach((b) => gsap.to(b, { rotation: "+=40", ease: "none", scrollTrigger: { trigger: ".field", start: "top bottom", end: "bottom top", scrub: true } }));
}

/* ── 6. Service cards deal in ──────────────────────────── */
function services() {
  if (reduce) return;
  const svcs = $$(".svc");
  gsap.from(svcs, {
    y: (i) => 520 + i * 40, rotation: (i) => (i % 2 ? 24 : -24), opacity: 0, ease: "power3.out", stagger: 0.08,
    scrollTrigger: { trigger: ".deck", start: "top 98%", end: "top 30%", scrub: 1 },
  });
  gsap.from($$(".svc .stk"), { scale: 0, rotation: -60, duration: 0.8, stagger: 0.1, ease: "back.out(2.2)", scrollTrigger: { trigger: ".deck", start: "top 45%" } });
  $$(".svc .stk").forEach((s) => gsap.to(s, { rotation: gsap.utils.random(-12, 12), y: -8, duration: gsap.utils.random(1.6, 2.4), repeat: -1, yoyo: true, ease: "sine.inOut" }));
}

/* ── 7. Toolkit columns ────────────────────────────────── */
function tools() {
  // Official marks (simple-icons; OpenAI from Lobe Icons) in each brand's own colour.
  const keys = ["n8n", "claude", "supabase", "vercel", "line", "github", "cloudflare", "neon", "openai", "figma", "make", "react"];
  // Figma's mark is five colours, which a single-path icon can't carry.
  const figma = '<svg viewBox="0 0 38 57" aria-hidden="true"><path fill="#F24E1E" d="M19 0H9.5a9.5 9.5 0 0 0 0 19H19z"/><path fill="#FF7262" d="M19 0h9.5a9.5 9.5 0 0 1 0 19H19z"/><path fill="#A259FF" d="M9.5 19a9.5 9.5 0 0 0 0 19H19V19z"/><circle fill="#1ABCFE" cx="28.5" cy="28.5" r="9.5"/><path fill="#0ACF83" d="M9.5 38a9.5 9.5 0 1 0 9.5 9.5V38z"/></svg>';
  const list = keys.map((k) => ICONS[k]);
  const tile = (ic, i) => {
    const glyph = keys[i] === "figma" ? figma : `<svg viewBox="${ic.vb}" aria-hidden="true"><path fill="${ic.hex}" d="${ic.path}"/></svg>`;
    return `<div class="tool" style="--brand:${ic.hex}">${glyph}<span>${ic.title}</span></div>`;
  };
  const halves = [list.map((ic, i) => [ic, i]).filter((_, i) => i % 2 === 0), list.map((ic, i) => [ic, i]).filter((_, i) => i % 2 === 1)];
  $$(".col-track").forEach((tr, i) => {
    const html = halves[i].map(([ic, j]) => tile(ic, j)).join("");
    tr.innerHTML = html + html;
    $$(".tool", tr).slice(halves[i].length).forEach((d) => d.setAttribute("aria-hidden", "true"));
    if (reduce) return;
    const up = tr.dataset.dir === "up";
    const tw = gsap.fromTo(tr, { yPercent: up ? 0 : -50 }, { yPercent: up ? -50 : 0, duration: 22, ease: "none", repeat: -1 });
    // scrolling speeds the columns up, then they settle back
    ScrollTrigger.create({
      trigger: ".tools", start: "top bottom", end: "bottom top",
      onUpdate: (self) => gsap.to(tw, { timeScale: 1 + Math.min(Math.abs(self.getVelocity()) / 400, 5), duration: 0.2, overwrite: true, onComplete: () => gsap.to(tw, { timeScale: 1, duration: 1 }) }),
    });
  });
  if (reduce) return;
  gsap.from(".tools-head .blob", { scale: 0.4, rotation: -90, ease: "none", scrollTrigger: { trigger: ".tools", start: "top bottom", end: "center center", scrub: 1 } });
  gsap.from(".tools-head .snap", { scale: 0, rotation: -90, duration: 0.8, ease: "back.out(2.4)", scrollTrigger: { trigger: ".tools", start: "top 50%" } });
}

/* ── FAQ accordion ─────────────────────────────────────── */
function faq() {
  const items = $$(".qa");
  const stickers = ["#spark", "#heart", "#smiley", "#bolt"];
  const tilt = [-1.6, 1.4, -1.1, 1.8, -1.4, 1.2, -1.8];
  const set = (li, open) => {
    const btn = $(".qa-q", li), panel = $(".qa-a", li), card = $(".qa-card", li), i = items.indexOf(li);
    li.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open);
    gsap.to(panel, { height: open ? "auto" : 0, duration: reduce ? 0 : open ? 0.6 : 0.45, ease: open ? "expo.out" : "power3.inOut", overwrite: true,
      onComplete: () => ScrollTrigger.refresh() }); // everything below moved
    gsap.to(card, { rotation: open ? tilt[i] : 0, scale: open ? 1.015 : 1, duration: reduce ? 0 : 0.6, ease: "back.out(1.8)", overwrite: true });
    let stk = $(".stk", li);
    if (open && !stk) {
      li.insertAdjacentHTML("beforeend", `<span class="stk" aria-hidden="true"><svg><use href="${stickers[i % stickers.length]}"/></svg></span>`);
      stk = $(".stk", li);
      if (!reduce) gsap.from(stk, { scale: 0, rotation: -90, duration: 0.6, delay: 0.15, ease: "back.out(2.6)" });
    } else if (!open && stk) {
      gsap.to(stk, { scale: 0, rotation: 60, duration: reduce ? 0 : 0.3, ease: "power2.in", onComplete: () => stk.remove() });
    }
  };
  items.forEach((li) =>
    $(".qa-q", li).addEventListener("click", () => {
      const open = !li.classList.contains("open");
      items.forEach((o) => o !== li && o.classList.contains("open") && set(o, false)); // one open at a time
      set(li, open);
    })
  );
  set(items[0], true);

  if (reduce) return;
  gsap.from(items, { y: 60, opacity: 0, duration: 0.9, stagger: 0.07, ease: "expo.out", scrollTrigger: { trigger: ".qa-list", start: "top 82%" } });
  gsap.from(".faq-head .blob", { scale: 0.3, rotation: -120, ease: "none", scrollTrigger: { trigger: ".faq", start: "top bottom", end: "top 30%", scrub: 1 } });
  gsap.from(".faq-head .tstk", { scale: 0, rotation: -40, duration: 0.8, ease: "back.out(2.4)", scrollTrigger: { trigger: ".faq", start: "top 60%" } });
}
