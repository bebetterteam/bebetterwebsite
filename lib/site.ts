/**
 * Every string in this file is copied verbatim from the Framer project
 * (page `/`, nodeId augiA20Il) so the coded site matches the design 1:1.
 */

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  tagline: "Digital solutions at a price that makes sense · Bangkok",
  cta: { label: "Get a Free Quote", href: "#contact" },
  ticker: "BEBETTER ",
  // Verbatim from the Framer "Skills List" component (nodeId CLUNp73Ij).
  // NOTE: these strings are leftovers from the original Framer template and read
  // like a personal portfolio rather than Bebetter. Suggested replacement:
  // ["Social Content", "Automation", "LINE Solutions", "AI Systems", "Web & SEO"]
  skills: [
    "UX/UI Expertise",
    "Product Design",
    "Collaborative Team Player",
    "HTML5/CSS3 Mastery",
    "Branding",
  ],
};

export const about = {
  title: "About Us",
  cards: [
    "Bebetter is a digital agency in Bangkok, started in 2026 with one idea: good digital work shouldn't cost a fortune. We build marketing campaigns, content, websites, automations, LINE and AI solutions for SMEs, startups, and individuals, at a price that makes sense for businesses that are still growing.",
    "Two things we care about most. Price: we keep our overhead low and pass it on, so a small shop can afford the same tools a big brand uses. Customization: nothing here is one-size-fits-all. We listen first, then shape the solution around how you actually work.",
    "We're a small team in three parts: Marketing plans your campaigns, Content writes, shoots, and designs, and Dev builds the systems behind it all. We work straightforward and fast, keep things easy to use, and adapt to you, not the other way around.",
  ],
  cta: { label: "Book a Zoom Call", href: "#contact" },
  /**
   * The avatar row under the last card — the one about the three-part team.
   * Photos live in public/team/; `npm run team` squares and orients whatever
   * is dropped in public/team/raw/. Until a file exists the initials in
   * `fallback` show instead. `online: false` puts a person in the greyed-out
   * second group.
   */
  team: [
    { id: 1, src: "/team/phee.jpg", fallback: "PH", tooltip: "Phee", online: true },
    { id: 2, src: "/team/tent.jpg", fallback: "TN", tooltip: "Tent", online: true },
    { id: 3, src: "/team/arty.jpg", fallback: "AR", tooltip: "Arty", online: true },
    { id: 4, src: "/team/joe.jpg", fallback: "JO", tooltip: "Joe", online: true },
    { id: 5, src: "/team/yo.jpg", fallback: "YO", tooltip: "Yo", online: true },
  ],
};

export const toolkit = {
  title: "Our Toolkit",
  /**
   * `logoVariant` picks a logo the Framer Stack Card already carries.
   * `brandLogo` keys into lib/brandLogos.ts for the providers it does not —
   * components/Toolkit.tsx swaps the card's SVG for that mark.
   */
  cards: [
    {
      name: "Automation",
      logoVariant: "HLLidWF8J", // Framer Stack Card logo variant
      body: "n8n, Zapier, and Make are how we connect your tools and remove repetitive work. Orders, leads, reports, and notifications flow on their own, so your team can focus on real work.",
    },
    {
      name: "Custom Code",
      logoVariant: "DNB5Cmd6N",
      brandLogo: "code",
      body: "When no-code is not enough, we build custom SaaS and web apps with React, Node, and cloud services on Google and AWS, designed to scale with your business.",
    },
    {
      name: "Figma",
      logoVariant: "g9BVJZgLX",
      body: "Every system we build starts with a clear design. We use Figma to map user flows, design dashboards and apps, and align with you before anything gets built.",
    },
    {
      name: "AI",
      logoVariant: "l6rXf_TbC",
      body: "We put AI where it saves real time: chat assistants, document processing, data summaries, and smart routing inside your workflows, built with Claude, ChatGPT, and custom models.",
    },
    {
      name: "Supabase",
      logoVariant: "KT4xl58Eu",
      brandLogo: "supabase",
      body: "Postgres with authentication, file storage, and realtime built in. It is our default when a project needs a proper database and user accounts without standing up a backend from scratch.",
    },
    {
      name: "Neon Database",
      logoVariant: "KT4xl58Eu",
      brandLogo: "neon",
      body: "Serverless Postgres that scales to zero and branches like Git. We reach for it when a database should stay cheap while the product is small and grow without a migration later.",
    },
    {
      name: "n8n",
      logoVariant: "KT4xl58Eu",
      brandLogo: "n8n",
      body: "The automation engine we host ourselves. When a workflow touches sensitive data or needs custom code in the middle of it, n8n keeps the whole thing on infrastructure you own.",
    },
    {
      name: "Vercel",
      logoVariant: "KT4xl58Eu",
      brandLogo: "vercel",
      body: "Where the sites and apps we build actually run. Every push deploys, every change gets a preview link you can review, and a global edge network keeps pages fast in Thailand and abroad.",
    },
    {
      name: "GitHub",
      logoVariant: "KT4xl58Eu",
      brandLogo: "github",
      body: "Every line we write for you lives in a repository you own. Full version history, code review before anything merges, and automated checks that run before it reaches production.",
    },
    {
      name: "Cloudflare",
      logoVariant: "KT4xl58Eu",
      brandLogo: "cloudflare",
      body: "DNS, CDN, and protection sitting in front of everything we ship. It keeps your site fast, absorbs bad traffic before it reaches you, and handles certificates so HTTPS just works.",
    },
    {
      name: "AI Agent",
      logoVariant: "KT4xl58Eu",
      brandLogo: "claude",
      body: "Assistants that do the work, not just answer questions. We build agents on Claude that read your documents, update your systems, and hand back to a human at the points that matter.",
    },
  ],
};

export const services = {
  title: "Services",
  sticky: "What we do",
  items: [
    {
      number: "01",
      title: "01 — Social Content & Marketing",
      body: "Monthly content that keeps your brand showing up. We plan the campaign, write Thai captions in your voice, design the visuals, and post on schedule to Facebook, with LINE OA, Instagram, and Google Business as add-ons. You review everything on a shared calendar before it goes live. Powered by publio, our own content system. From ฿3,500 a month.",
      tint: "rgb(189, 255, 92)",
      rotation: -10,
    },
    {
      number: "02",
      title: "02 — Photo, Video & Production",
      body: "Real photos and videos of your real business. Our team comes to your shop, studio, or site to shoot products, spaces, and people, then edits everything into ready-to-post content. Scale it to fit: a single half-day shoot, a full campaign key visual, or a monthly visit that keeps your feed fresh. On-site shoots from ฿6,900.",
      tint: "rgb(252, 97, 41)",
      rotation: 0,
    },
    {
      number: "03",
      title: "03 — Digital Solutions, Automation & LINE",
      body: "Websites, internal tools, and the plumbing between them. We build sites and web apps, connect your tools with automations so orders, leads, and reports move by themselves, and develop on the LINE API: chatbots, rich menus, order flows, and notifications your customers actually use. Whatever the size, we scope it to your budget and ship fast.",
      tint: "rgb(26, 26, 26)",
      rotation: -15,
    },
    {
      number: "04",
      title: "04 — AI Solutions",
      body: "AI where it saves you real time. Customer-service assistants that answer in your tone, document and data processing, content generation trained on your brand, and smart routing inside your workflows. We build with Claude, ChatGPT, and custom models, and we're honest about what AI should and shouldn't do for your business.",
      tint: "rgb(67, 96, 255)",
      rotation: 10,
    },
    {
      number: "05",
      title: "05 — SEO, AEO & Google Business",
      body: "Get found, by people and by AI. SEO keeps your website and articles ranking on Google. AEO (Answer Engine Optimization) makes ChatGPT and other AI assistants recommend your business when customers ask. Google Business keeps your listing, posts, and reviews looking sharp. SEO from ฿4,500 a month, AEO from ฿3,500, Google Business from ฿1,200.",
      tint: "rgb(189, 255, 92)",
      rotation: -5,
    },
  ],
};

/**
 * Prices are the "ใหม่" column of the internal proposal dated 22 Sep 2569.
 * That document marks itself a DRAFT and says the published set is the one
 * dated 21 Sep — these numbers went in on request, so treat them as pending
 * until that set is confirmed.
 *
 * `accent` drives the price text and the button fill inside the Framer card,
 * so it has to be a colour that reads on white — lime is background-only.
 */
export const pricing = {
  title: "Packages & How We Work",

  services: [
    {
      title: "Social Content & Marketing",
      price: "฿5,500",
      priceSuffix: "/ month",
      accent: "rgb(252, 97, 41)",
      description:
        "Monthly content written, designed and posted for you, run on publio — our own content system.",
      lines: [
        "8 posts ฿5,500 · 20 posts ฿10,900 · 30 posts ฿15,900 a month",
        "Content planning and Thai captions in your voice",
        "Visual design for every post",
        "Scheduled posting to Facebook, included",
        "Shared calendar — you approve before anything goes live",
        "Facebook and TikTok ad management ฿6,900 a month",
        "Runs on publio, built and operated by us",
      ],
      cta: { label: "See how publio works", href: "/publio" },
    },
    {
      title: "Photo, Video & Production",
      price: "฿890+",
      priceSuffix: "per piece",
      accent: "rgb(67, 96, 255)",
      description:
        "Real photos and video of your real business, shot on site and edited ready to post.",
      lines: [
        "Half-day shoot at your shop or site ฿9,900",
        "Short video ฿3,900 per clip",
        "Graphic ฿890 per piece",
        "Products, spaces and people, edited and delivered",
        "Scale it to fit: one visit, a campaign, or every month",
      ],
      cta: { label: "Book a shoot", href: "#contact" },
    },
    {
      title: "Digital Solutions & LINE",
      price: "฿1,290+",
      priceSuffix: "one time",
      accent: "rgb(67, 96, 255)",
      description:
        "Websites, LINE storefronts and the plumbing between your tools.",
      lines: [
        "LINE OA storefront setup ฿2,900",
        "LINE OA with Rich Menu ฿3,900",
        "Rich Menu, one set ฿1,290",
        "Landing page ฿9,900",
        "Website up to 5 pages ฿24,900",
        "Includes Pixel, PDPA consent, Live Chat on LINE and Facebook",
        "Basic SEO, team training and 12 months of upkeep",
      ],
      cta: { label: "Scope a build", href: "#contact" },
    },
    {
      title: "AI Solutions",
      price: "฿6,900",
      priceSuffix: "",
      accent: "rgb(67, 96, 255)",
      description:
        "AI where it saves real time — assistants that answer in your tone and menus that route customers.",
      lines: [
        "AI Rich Menu Pro ฿6,900",
        "Extra page ฿1,900 each",
        "Customer-service assistants that answer in your voice",
        "Document and data processing",
        "Built with Claude, ChatGPT and custom models",
      ],
      cta: { label: "Talk it through", href: "#contact" },
    },
    {
      title: "SEO, AEO & Google Business",
      price: "฿2,900+",
      priceSuffix: "/ month",
      accent: "rgb(67, 96, 255)",
      description:
        "Get found by people and by AI. Google rankings, AI recommendations, and a listing that looks sharp.",
      lines: [
        "SEO ฿9,900 a month",
        "AEO ฿12,900 a month — ChatGPT and other assistants recommend you",
        "Google Business management ฿2,900 a month",
        "Google Business profile setup ฿3,500, one time",
        "SEO and AEO together ฿22,800 a month",
      ],
      cta: { label: "Get found", href: "#contact" },
    },
    {
      title: "Custom Project",
      price: "Custom",
      priceSuffix: "",
      accent: "rgb(26, 26, 26)",
      description:
        "Anything digital that is not on this list. Here is how a project with us goes.",
      lines: [
        "A quote back within 3 days",
        "1. Zoom call: you show us the case, we ask about the problem",
        "2. We come back with a solution and a mock-up",
        "3. We agree on timeline and cost, no surprises",
        "4. We deliver, then stay on for maintenance",
        "Scoped to your budget, from small fixes to full systems",
        "Built to be easy for your team to use",
      ],
      cta: { label: "Start a project", href: "#contact" },
    },
  ],

  /** Bundles from the proposal. `saving` is the difference against à la carte. */
  bundles: {
    title: "Bundles",
    note: "Every bundle is 11% off the same services bought separately.",
    items: [
      { name: "Package A", detail: "For a small shop getting started", price: "฿7,500", period: "/ month", alaCarte: "฿8,400", saving: "฿900" },
      { name: "Package B", detail: "The one most shops land on", price: "฿15,900", period: "/ month", alaCarte: "฿17,800", saving: "฿1,900" },
      { name: "Package C", detail: "Everything running at once", price: "฿22,900", period: "/ month", alaCarte: "฿25,700", saving: "฿2,800" },
      { name: "Storefront starter kit", detail: "One-time setup, not a subscription", price: "฿6,500", period: "one time", alaCarte: "฿7,400", saving: "฿900" },
    ],
  },

  /** The full price list — 7 monthly plus 11 one-time line items. */
  alaCarte: {
    title: "Every price, on its own",
    summary: "18 line items — 7 monthly, 11 one time",
    monthly: {
      title: "Monthly",
      rows: [
        ["Page management, 8 posts", "฿5,500"],
        ["Page management, 20 posts", "฿10,900"],
        ["Page management, 30 posts", "฿15,900"],
        ["Facebook / TikTok ad management", "฿6,900"],
        ["Google Business management", "฿2,900"],
        ["SEO", "฿9,900"],
        ["AEO", "฿12,900"],
      ],
    },
    oneTime: {
      title: "One time",
      rows: [
        ["Google Business profile setup", "฿3,500"],
        ["LINE OA storefront setup", "฿2,900"],
        ["LINE OA with Rich Menu", "฿3,900"],
        ["Rich Menu, one set", "฿1,290"],
        ["AI Rich Menu Pro", "฿6,900"],
        ["Extra page, AI Rich Menu", "฿1,900"],
        ["Half-day photo shoot", "฿9,900"],
        ["Short video, per clip", "฿3,900"],
        ["Graphic, per piece", "฿890"],
        ["Landing page", "฿9,900"],
        ["Website, up to 5 pages", "฿24,900"],
      ],
    },
  },

  bookACall: {
    title: "Not sure what you need?",
    body: "Book a free 15-minute Zoom call. Tell us what's slowing you down and we'll come back with a solution and a quote, no strings attached.",
    cta: { label: "Book a Free Call", href: "#contact" },
  },
};

export const projectsSection = {
  title: "Our Work",
};

export const contact = {
  title: "Let's Bebetter",
  body: "Tell us what's slowing you down. We'll come back with a solution and a quote, no strings attached.",
  cta: { label: "Book a Free Call", href: "#contact" },
  location: "Bangkok, Thailand",
};
