/* Bebetter — Thai / English.
   English is the source text in the HTML. In Thai mode every text node and
   label whose English text appears in TH below is swapped before the motion
   layer runs, and JS-built copy goes through tr(). Missing entries simply stay
   in English. Load this before core.js. */
const LANG = (() => {
  const q = new URLSearchParams(location.search).get("lang");
  if (q === "th" || q === "en") {
    try { localStorage.setItem("bb-lang", q); } catch { /* private mode: the ?lang param still works */ }
    return q;
  }
  try { const s = localStorage.getItem("bb-lang"); if (s) return s; } catch { /* ignore */ }
  return (navigator.language || "").toLowerCase().startsWith("th") ? "th" : "en";
})();
document.documentElement.lang = LANG;

const TH = {
  // nav + footer
  "work": "ผลงาน",
  "news": "ข่าวสาร",
  "let's talk": "คุยกับเรา",
  "Main": "เมนูหลัก",
  "drag": "ลาก",
  "click": "คลิก",
  "read": "อ่าน",
  "Language": "ภาษา",
  "Be Better, back to top": "Be Better กลับขึ้นด้านบน",
  "Be Better home": "หน้าแรก Be Better",
  "Chat with us on LINE": "แชตกับเราทาง LINE",
  "start a project?": "เริ่มโปรเจกต์?",
  "get a free quote": "ขอใบเสนอราคาฟรี",
  "book a zoom call": "นัดคุยทาง Zoom",
  "office": "ออฟฟิศ",
  "Bangkok,": "กรุงเทพฯ",
  "Thailand": "ประเทศไทย",
  "founded 2026 · SMEs, startups & creators": "ก่อตั้งปี 2026 · SME สตาร์ทอัพ และครีเอเตอร์",
  "contact": "ติดต่อ",
  "add us on LINE*": "แอด LINE เรา*",
  "*small team, quick replies: LINE beats a phone call.": "*ทีมเล็ก ตอบไว ทัก LINE เร็วกว่าโทร",
  "ทักมาเลย!": "say hi!",

  // hero
  "we make": "เราทำ",
  "digital work": "งานดิจิทัล",
  "for": "ให้",
  "the next": "แบรนด์ดัง",
  "big brands": "รุ่นต่อไป",
  "scroll ↓": "เลื่อนลง ↓",

  // pinned sentence
  "Good digital work shouldn't cost a fortune": "งานดิจิทัลดีๆ ไม่ต้องแพงจนกระเป๋าฉีก",
  "Small businesses are online more than ever, and so are their customers. We help SMEs, startups and creators show up on the channels that matter,":
    "ธุรกิจเล็กๆ อยู่บนออนไลน์มากกว่าที่เคย ลูกค้าก็เช่นกัน เราช่วย SME สตาร์ทอัพ และครีเอเตอร์ ให้ไปอยู่ในช่องทางที่ใช่",
  "at a price that makes sense.": "ในราคาที่สมเหตุสมผล",

  // agency
  "an agency built for": "เอเจนซีที่สร้างมาเพื่อ",
  "brands still growing.": "แบรนด์ที่กำลังโต",
  "from Facebook to AI.": "ตั้งแต่ Facebook ยัน AI",
  "price that makes sense": "ราคาที่สมเหตุสมผล",
  "we listen first": "เราฟังก่อนเสมอ",
  "nothing one-size-fits-all": "ไม่มีสูตรเดียวใช้ทุกร้าน",
  "publio, our content system": "publio ระบบคอนเทนต์ของเรา",
  "Tent from the Bebetter team": "เต็นท์ จากทีม Bebetter",
  "itsme., a link-in-bio builder by Bebetter": "itsme. เครื่องมือทำลิงก์ในไบโอจาก Bebetter",
  "Phee from the Bebetter team": "พี จากทีม Bebetter",
  "Marketing plans your campaigns, Content writes, shoots and designs, and Dev builds the systems behind it all. One small team covering the whole spectrum, from Thai captions to LINE chatbots and AI agents.":
    "ฝ่ายการตลาดวางแผนแคมเปญ ฝ่ายคอนเทนต์เขียน ถ่าย และออกแบบ ส่วนฝ่าย Dev สร้างระบบเบื้องหลังทั้งหมด ทีมเล็กๆ ทีมเดียวที่ดูแลครบ ตั้งแต่แคปชันภาษาไทยไปจนถึงแชตบอต LINE และ AI agent",

  // work
  "Our work": "ผลงานของเรา",
  "View project": "ดูโปรเจกต์",
  "Previous project": "โปรเจกต์ก่อนหน้า",
  "Next project": "โปรเจกต์ถัดไป",
  "Visit site": "เข้าชมเว็บไซต์",
  "Ask us about it": "สอบถามเรา",
  "See the service": "ดูบริการ",
  "own product": "ผลิตภัณฑ์ของเรา",
  "live": "เปิดใช้แล้ว",
  "service": "บริการ",
  "of": "จาก",
  "publio, content on autopilot": "publio คอนเทนต์ที่เดินเองได้",
  "itsme., link-in-bio builder": "itsme. ลิงก์ในไบโอที่เป็นตัวคุณ",
  "Ghozt, Claude Code in your notch": "Ghozt บอกสถานะ Claude Code ที่รอยบากจอ",
  "LINE OA storefronts & rich menus": "ร้านค้าบน LINE OA และริชเมนู",
  "assistants that answer in your tone": "ผู้ช่วยที่ตอบลูกค้าด้วยน้ำเสียงแบรนด์คุณ",
  "real photos of your real business": "ภาพจริงจากธุรกิจจริงของคุณ",
  "n8n flows that run while you sleep": "ระบบ n8n ที่ทำงานแม้คุณหลับ",
  "social": "โซเชียล",
  "mac app": "แอป Mac",
  "production": "โปรดักชัน",
  "automation": "ออโตเมชัน",

  // team
  "we are a": "เราคือทีม",
  "small,": "เล็กๆ",
  "future-proof team of 5": "5 คน หัวใจล้ำอนาคต",
  "Bangkok-made": "เมดอินบางกอก",
  "builders. not to brag!": "ไม่ได้อวดนะ!",
  "marketing": "การตลาด",
  "content": "คอนเทนต์",
  "dev": "นักพัฒนา",
  "good vibes": "ใจฟู",
  "สวัสดี": "hello!",
  "join the club": "มาเป็นแก๊งเดียวกัน",
  "your brand": "แบรนด์คุณ",
  "next?": "คิวต่อไป?",
  "let's goooo!": "ลุยยย!",

  // services
  "call us if you": "ทักเรามาเลย ถ้าคุณ",
  "need:": "ต้องการ:",
  "photo & video": "ภาพ & วิดีโอ",
  "digital & LINE": "ดิจิทัล & LINE",
  "AI solutions": "โซลูชัน AI",
  "get found": "ให้คนหาเจอ",
  "Content planning": "วางแผนคอนเทนต์",
  "Thai captions in your voice": "แคปชันไทยในน้ำเสียงแบรนด์คุณ",
  "Visual design for every post": "ออกแบบภาพทุกโพสต์",
  "Scheduled posting": "ตั้งเวลาโพสต์",
  "Shared approval calendar": "ปฏิทินอนุมัติงานร่วมกัน",
  "Facebook & TikTok ads": "ยิงแอด Facebook & TikTok",
  "from ฿3,500 / month": "เริ่ม ฿3,500 / เดือน",
  "On-site shoots": "ถ่ายงานถึงที่ร้าน",
  "Product & space photos": "ภาพสินค้า & บรรยากาศร้าน",
  "Short-form video": "วิดีโอสั้น",
  "Campaign key visuals": "คีย์วิชวลแคมเปญ",
  "Monthly feed refresh": "อัปเดตฟีดทุกเดือน",
  "on-site shoots from ฿6,900": "ถ่ายงานถึงที่ เริ่ม ฿6,900",
  "Websites & web apps": "เว็บไซต์ & เว็บแอป",
  "LINE OA storefronts": "ร้านค้าบน LINE OA",
  "Rich menus & chatbots": "ริชเมนู & แชตบอต",
  "n8n / Make automations": "ระบบอัตโนมัติ n8n / Make",
  "Internal tools": "เครื่องมือใช้ภายในทีม",
  "LINE setup from ฿1,290": "ตั้งค่า LINE เริ่ม ฿1,290",
  "Customer-service assistants": "ผู้ช่วยตอบคำถามลูกค้า",
  "Document & data processing": "จัดการเอกสาร & ข้อมูล",
  "Brand-trained content": "คอนเทนต์ที่เรียนรู้จากแบรนด์คุณ",
  "Smart workflow routing": "ส่งต่องานอัตโนมัติอย่างฉลาด",
  "Claude & ChatGPT builds": "ระบบบน Claude & ChatGPT",
  "scoped to your budget": "วางขอบเขตตามงบของคุณ",
  "AEO for AI answers": "AEO ให้ AI แนะนำคุณ",
  "Posts & reviews": "โพสต์ & รีวิว",
  "SEO from ฿4,500 · AEO from ฿3,500": "SEO เริ่ม ฿4,500 · AEO เริ่ม ฿3,500",

  // toolkit
  "Our toolkit": "เครื่องมือของเรา",
  "proud to build": "ภูมิใจที่ได้",
  "with": "สร้างงานด้วย",
  "these:": "เครื่องมือเหล่านี้",

  // FAQ
  "ถามได้เลย!": "ask away!",
  "questions?": "มีคำถาม?",
  "we've got": "เรามี",
  "answers.": "คำตอบ",
  "The things shop owners ask us before we start. Anything else, ask us on LINE and a real person replies.":
    "เรื่องที่เจ้าของร้านมักถามเราก่อนเริ่มงาน ถ้ามีคำถามอื่น ทักมาทาง LINE ได้เลย มีคนจริงๆ ตอบ",
  "ask us on LINE": "ถามเราทาง LINE",
  "How does a project with you work?": "ทำงานกับ Bebetter มีขั้นตอนยังไง?",
  "Four steps, no surprises:": "4 ขั้นตอน ไม่มีเซอร์ไพรส์:",
  "A Zoom call where you show us the case and we ask about the problem.": "คุยกันทาง Zoom คุณเล่าเคสให้ฟัง เราถามถึงปัญหา",
  "We come back with a solution and a mock-up.": "เรากลับมาพร้อมวิธีแก้และตัวอย่างหน้าตา (mock-up)",
  "We agree on timeline and cost.": "ตกลงระยะเวลาและค่าใช้จ่ายร่วมกัน",
  "We deliver, then stay on for maintenance.": "ส่งมอบงาน แล้วอยู่ดูแลต่อ",
  "How fast do I get a quote?": "ได้ใบเสนอราคาเร็วแค่ไหน?",
  "Within 3 days of our call. Start with a free 15-minute Zoom: tell us what's slowing you down and we come back with a solution and a price, no strings attached. A quote stays valid for 30 days.":
    "ภายใน 3 วันหลังคุยกัน เริ่มจากคุยทาง Zoom ฟรี 15 นาที เล่าให้เราฟังว่าอะไรทำให้งานช้า แล้วเราจะกลับมาพร้อมวิธีแก้และราคา ไม่มีข้อผูกมัด ใบเสนอราคามีอายุ 30 วัน",
  "Do I need to know anything technical?": "ต้องรู้เรื่องเทคนิคไหม?",
  "Not at all. We handle the build: the automations, the AI prompts, the integrations and the hosting. You review, approve and use it. Everything is built to be easy for your team.":
    "ไม่ต้องเลย เราดูแลการสร้างทั้งหมด ทั้งระบบอัตโนมัติ พรอมต์ AI การเชื่อมต่อ และโฮสติ้ง คุณแค่ตรวจ อนุมัติ แล้วใช้งาน ทุกอย่างทำมาให้ทีมคุณใช้ง่าย",
  "Will anything get posted without me seeing it?": "จะมีอะไรโพสต์ไปโดยที่ฉันไม่เห็นไหม?",
  "No. Every post waits for your approval on a shared calendar. And the images aren't random AI pictures: your real product photo is the base, staged in your brand's style.":
    "ไม่มี ทุกโพสต์รอคุณอนุมัติบนปฏิทินที่ใช้ร่วมกัน และภาพก็ไม่ใช่ภาพ AI สุ่มๆ แต่สร้างจากภาพสินค้าจริงของคุณ จัดฉากในสไตล์แบรนด์คุณ",
  "Which channels do you post to?": "โพสต์ลงช่องทางไหนได้บ้าง?",
  "Facebook is included in every plan. LINE OA, Instagram and Google Business are add-ons, each re-toned for that channel. TikTok is coming soon.":
    "ทุกแพ็กเกจมี Facebook ส่วน LINE OA, Instagram และ Google Business เป็นส่วนเสริม ปรับโทนให้เข้ากับแต่ละช่องทาง TikTok เร็วๆ นี้",
  "Who owns what you build?": "งานที่ทำให้ ใครเป็นเจ้าของ?",
  "You do. Every line we write for you lives in a repository you own, with full version history. No lock-in.":
    "คุณเป็นเจ้าของ โค้ดทุกบรรทัดที่เราเขียนให้อยู่ใน repository ของคุณ พร้อมประวัติการแก้ไขครบ ไม่ผูกมัดกับเรา",
  "Can I start small?": "เริ่มจากงานเล็กๆ ได้ไหม?",
  "Yes. One-off jobs like a LINE rich menu or a landing page are fine, and so are monthly plans. If you want several services at once, our bundles come in 11% under buying them separately.":
    "ได้ งานครั้งเดียวอย่างริชเมนู LINE หรือแลนดิ้งเพจก็รับ แพ็กเกจรายเดือนก็มี ถ้าอยากได้หลายบริการพร้อมกัน แพ็กเกจรวมถูกกว่าซื้อแยก 11%",

  // news index
  "news & notes": "ข่าวสาร & บันทึก",
  "fresh from": "ส่งตรงจาก",
  "the studio.": "สตูดิโอ",
  "Product launches, how-tos and free kits from a small team in Bangkok.": "เปิดตัวผลิตภัณฑ์ คู่มือ และของแจกฟรี จากทีมเล็กๆ ในกรุงเทพฯ",
  "Filter posts": "กรองบทความ",
  "Latest post": "บทความล่าสุด",
  "All posts": "บทความทั้งหมด",
  "all": "ทั้งหมด",
  "products": "ผลิตภัณฑ์",
  "guides": "คู่มือ",
  "free stuff": "ของฟรี",
  "studio notes": "บันทึกจากทีม",
  "new!": "ใหม่!",
  "Read the story": "อ่านต่อ",
  "min read": "นาทีในการอ่าน",
  "Nothing here yet.": "ยังไม่มีบทความในหมวดนี้",
  "get the next one": "รับเรื่องถัดไป",
  "on LINE.": "ทาง LINE",
  "Launches, guides and free kits, sent to your LINE chat. No spam, just the good stuff.": "ข่าวเปิดตัว คู่มือ และของแจกฟรี ส่งตรงถึงแชต LINE ไม่มีสแปม มีแต่ของดี",
  "Add Bebetter on LINE": "แอด LINE Bebetter",

  // article
  "← all news": "← ข่าวสารทั้งหมด",
  "Share": "แชร์",
  "share": "แชร์",
  "Copy link": "คัดลอกลิงก์",
  "Share on LINE": "แชร์ทาง LINE",
  "link copied": "คัดลอกลิงก์แล้ว",
  "keep": "อ่าน",
  "reading.": "ต่ออีกนิด",
};

const tr = (en) => (LANG === "th" && TH[en] != null ? TH[en] : en);

if (LANG === "th") {
  // text nodes, keeping the whitespace around them
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) => (n.parentElement.closest("script, style") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((n) => {
    const key = n.nodeValue.trim();
    if (key && TH[key] != null) n.nodeValue = n.nodeValue.replace(key, TH[key]);
  });
  document.querySelectorAll("[aria-label], [alt]").forEach((el) => {
    ["aria-label", "alt"].forEach((a) => {
      const v = el.getAttribute(a);
      if (v && TH[v] != null) el.setAttribute(a, TH[v]);
    });
  });
}

/* EN / TH switch in the nav: reload in the other language, same page and post. */
document.querySelectorAll(".lang-switch button").forEach((b) => {
  b.setAttribute("aria-pressed", b.dataset.lang === LANG);
  b.addEventListener("click", () => {
    if (b.dataset.lang === LANG) return;
    const u = new URL(location.href);
    u.searchParams.set("lang", b.dataset.lang);
    location.href = u.toString();
  });
});
