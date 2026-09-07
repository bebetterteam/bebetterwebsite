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
  wordmark: "Bebetter",
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
};

export const toolkit = {
  title: "Our Toolkit",
  cards: [
    {
      name: "Automation",
      logoVariant: "HLLidWF8J", // Framer Stack Card logo variant
      body: "n8n, Zapier, and Make are how we connect your tools and remove repetitive work. Orders, leads, reports, and notifications flow on their own, so your team can focus on real work.",
      color: "rgb(252, 97, 41)",
    },
    {
      name: "Figma",
      logoVariant: "g9BVJZgLX", // Framer Stack Card logo variant
      body: "Every system we build starts with a clear design. We use Figma to map user flows, design dashboards and apps, and align with you before anything gets built.",
      color: "rgb(102, 112, 255)",
    },
    {
      name: "Notion",
      logoVariant: "bdjCZtOrK", // Framer Stack Card logo variant
      body: "Notion is our go-to for internal systems: CRM, project tracking, SOPs, and knowledge bases that your whole team can actually use and maintain.",
      color: "rgb(26, 26, 26)",
    },
    {
      name: "AI",
      logoVariant: "l6rXf_TbC", // Framer Stack Card logo variant
      body: "We put AI where it saves real time: chat assistants, document processing, data summaries, and smart routing inside your workflows, built with Claude, ChatGPT, and custom models.",
      color: "rgb(0, 204, 153)",
    },
    {
      name: "Airtable",
      logoVariant: "pIXZjWH9H", // Framer Stack Card logo variant
      body: "When you need a structured database without the enterprise price tag, Airtable lets us build inventory, booking, and operations systems fast and connect them to everything else.",
      color: "rgb(67, 96, 255)",
    },
    {
      name: "Custom Code",
      logoVariant: "DNB5Cmd6N", // Framer Stack Card logo variant
      body: "When no-code is not enough, we build custom SaaS and web apps with React, Node, and cloud services on Google and AWS, designed to scale with your business.",
      color: "rgb(102, 255, 217)",
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
      tint: "rgb(102, 112, 255)",
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
      tint: "rgb(0, 204, 153)",
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
      tint: "rgb(102, 255, 217)",
      rotation: -5,
    },
  ],
};

export const pricing = {
  title: "Packages & How We Work",
  cards: [
    {
      title: "publio · Social Content",
      description:
        "Monthly content, written, designed, and posted for you. Popular plan: 20 posts a month.",
      price: "฿6,900 / mo",
      accent: "rgb(99, 102, 255)",
      lines: [
        "Starter: 8 posts ฿3,500 · Popular: 20 posts ฿6,900 · Daily: 30 posts ฿9,900",
        "Content planning + Thai captions in your voice",
        "Visual design for every post",
        "Scheduled posting to Facebook (included)",
        "Add LINE OA +฿900 · Instagram +฿900 · Google Business +฿1,200",
        "Shared calendar, you approve before it goes live",
        "Add-ons: SEO +฿4,500 · AEO +฿3,500 / mo",
        "On-site photo shoot ฿6,900 per visit",
        "Campaigns: Small ฿5,900 · Large ฿15,900",
      ],
      cta: { label: "See publio", href: "/publio" },
      framer: {
        variant: "mlnrZCeSR",
        kuexjlf9X: "publio · Social Content",
        CddCwPX3r:
          "Monthly content, written, designed, and posted for you. Popular plan: 20 posts a month.",
        KAvDwa2mg: "฿6,900 / mo",
        JWZtJpNMj: "rgb(99, 102, 255)",
        Eq0epDP0Z: "rgb(99, 102, 255)",
        xght6NwMK:
          "Starter: 8 posts ฿3,500 · Popular: 20 posts ฿6,900 · Daily: 30 posts ฿9,900",
        arfNI6SAv: "Content planning + Thai captions in your voice",
        huW14R4sU: "Visual design for every post",
        FUOzMkbUW: "Scheduled posting to Facebook (included)",
        ltSoS7hzq:
          "Add LINE OA +฿900 · Instagram +฿900 · Google Business +฿1,200",
        sXH2L9wod: "Shared calendar, you approve before it goes live",
        GZYXKQ6zh: "Add-ons: SEO +฿4,500 · AEO +฿3,500 / mo",
        RUpRJMeBT: "On-site photo shoot ฿6,900 per visit",
        QYS454DuF: "Campaigns: Small ฿5,900 · Large ฿15,900",
        TQIH2hR27: "/publio",
        jgm1srukt: "rgb(99, 102, 255)",
        tzMLDe9St: "rgb(255, 255, 255)",
      },
    },
    {
      title: "Custom Project",
      description:
        "Websites, automation, LINE, AI, or anything digital. Here's how a project with us goes.",
      price: "Quote in 3 days",
      accent: "rgb(67, 96, 255)",
      lines: [
        "1. Zoom call: you show us the case, we ask about the problem",
        "2. We come back with a solution and a mock-up",
        "3. We agree on timeline and cost, no surprises",
        "4. We deliver, then stay on for maintenance",
        "Scoped to your budget, from small fixes to full systems",
        "Straightforward communication, fast turnaround",
        "Built to be easy for your team to use",
        "Adapted to how you work, not a template",
        "Ongoing maintenance plans available",
      ],
      cta: { label: "Start a project", href: "#contact" },
      framer: {
        variant: "mlnrZCeSR",
        kuexjlf9X: "Custom Project",
        CddCwPX3r:
          "Websites, automation, LINE, AI, or anything digital. Here's how a project with us goes.",
        KAvDwa2mg: "Quote in 3 days",
        JWZtJpNMj: "rgb(67, 96, 255)",
        Eq0epDP0Z: "rgb(67, 96, 255)",
        xght6NwMK: "1. Zoom call: you show us the case, we ask about the problem",
        arfNI6SAv: "2. We come back with a solution and a mock-up",
        huW14R4sU: "3. We agree on timeline and cost, no surprises",
        FUOzMkbUW: "4. We deliver, then stay on for maintenance",
        ltSoS7hzq: "Scoped to your budget, from small fixes to full systems",
        sXH2L9wod: "Straightforward communication, fast turnaround",
        GZYXKQ6zh: "Built to be easy for your team to use",
        RUpRJMeBT: "Adapted to how you work, not a template",
        QYS454DuF: "Ongoing maintenance plans available",
        TQIH2hR27: "/#contact",
        jgm1srukt: "rgb(67, 96, 255)",
        tzMLDe9St: "rgb(255, 255, 255)",
      },
    },
  ],
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
