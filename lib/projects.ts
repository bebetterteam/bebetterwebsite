/**
 * Mirror of the Framer CMS collection "Projects" (id kOgwlcBkr).
 * Draft items are kept but excluded from the public listing, exactly like Framer.
 */

export type Project = {
  slug: string;
  draft: boolean;
  title: string;
  metaDescription: string;
  date: string;
  images: (string | null)[];
  category: string;
  client: string;
  duration: string;
  liveWebsite: string | null;
  buyLink: string | null;
  buyButtonText: string;
  content: string;
};

export const projects: Project[] = [
  {
    slug: "publio",
    draft: false,
    title: "publio — Your AI social content assistant, in your brand's voice",
    metaDescription:
      "publio plans, writes Thai captions, creates images from your real product photos, and auto-posts to Facebook / Instagram / LINE, all in your brand's voice.",
    date: "2026-09-03T00:00:00.000Z",
    images: [null, null, null],
    category: "Product · AI Content System",
    client: "publio by Bebetter",
    duration: "From ฿3,500 / month",
    liveWebsite: "/#contact",
    buyLink: "/#contact",
    buyButtonText: "Book a 15-min demo",
    content: `<h2>Your shop's content, written, designed, and posted</h2><p>publio learns your brand, writes Thai captions in your voice, creates images from your real product photos, and posts to your channels once you approve. Our team runs it for you, so you just review and say yes.</p><blockquote><p>Not a generic AI that knows the internet. An AI that knows your shop.</p></blockquote><h2>The problem</h2><p>Shop owners lose about 5 hours a week to content, usually on Sunday night. Hiring a freelancer costs ฿8,000 a month per platform and the tone still drifts. Generic AI can write a caption, but it doesn't know your products or your brand.</p><p>The real need isn't more content. It's <strong>your content, consistently, without giving up your weekends.</strong></p><h2>How it works</h2><h3>1. Set up your brand once</h3><p>Your voice, words to avoid, image style, logo, and products with real photos. A helper drafts it from your page's past posts.</p><h3>2. Write a one-line brief</h3><p>For example "Promote the new tea latte", then hit Generate.</p><h3>3. Review in about 60 seconds</h3><p>You get a full Thai caption plus an image based on your real product photo.</p><h3>4. Approve</h3><p>publio posts it at the scheduled time. Nothing goes live without your approval.</p><h2>What's inside</h2><h3>Brand DNA</h3><p>Voice, preferred and banned words, image style, colors, logo, and product catalog go into every AI instruction. It sounds like you, not a robot.</p><h3>A calendar you can drag</h3><p>See the whole month at once, color-coded by status. Drag a post to another day in one move.</p><h3>Captions that think in Thai</h3><p>Natural Thai that follows Thai social conventions, not translated English. Headline, body, and call to action in one go.</p><h3>Images from your real products</h3><p>Your actual product photo is the base. publio sets the lighting and scene to match your brand, so customers recognize what they're buying.</p><h3>Templates and multi-channel posting</h3><p>Set a frame once and every post inherits it. Tick "also post here" and publio creates a twin post for each platform.</p><h3>Studio</h3><p>An assistant that fills your calendar with ready-to-review drafts, using Google Trends Thailand and industry news as raw material. You approve what you like and discard the rest.</p><h3>Style references and multi-brand</h3><p>Drop in a post you love and publio recreates the style with your products. Manage several brands in one account, each with its own Brand DNA and calendar.</p><h2>Who it's for</h2><p><strong>SME owners</strong> selling through Facebook, Instagram, and LINE OA with 1–20 products and no marketing team.</p><p><strong>Agencies and freelancers</strong> managing 2–10 client brands who want one dashboard for everyone.</p><p><strong>Not a fit yet:</strong> corporate marketing teams of 10+, B2B businesses that don't use social, or anyone who wants to write every line by hand.</p><h2>Packages</h2><p>Pick how much content you need. Every plan includes content planning, Thai captions, visual design, scheduled posting, and a shared calendar you approve from. Facebook is included in every plan.</p><ul><li><p><strong>Starter</strong>: 8 posts a month, <strong>฿3,500 / month</strong> (about ฿437 per post)</p></li><li><p><strong>Popular, recommended</strong>: 20 posts a month, <strong>฿6,900 / month</strong> (about ฿345 per post)</p></li><li><p><strong>Daily</strong>: 30 posts a month, <strong>฿9,900 / month</strong> (about ฿330 per post)</p></li></ul><h3>Add more channels</h3><ul><li><p><strong>LINE OA</strong> +฿900 / month: same content, re-toned for LINE</p></li><li><p><strong>Instagram</strong> +฿900 / month: hashtags and image ratios adjusted</p></li><li><p><strong>Google Business</strong> +฿1,200 / month: posts, review replies, and listing upkeep</p></li><li><p><strong>TikTok</strong> +฿1,500 / month: short trend-based video (coming soon)</p></li></ul><p>Example: Popular plan + LINE OA + Instagram + Google Business = <strong>฿9,900 / month</strong> for 20 posts across 4 channels, with our team running it.</p><h3>Add-on services</h3><ul><li><p><strong>SEO</strong> +฿4,500 / month: website and article optimization to rank on Google</p></li><li><p><strong>AEO</strong> +฿3,500 / month: get ChatGPT and other AI assistants to recommend your business</p></li><li><p><strong>On-site photo shoot</strong> ฿6,900 per visit: a photographer at your shop, real photos for your content</p></li></ul><h3>Campaigns (priced separately)</h3><ul><li><p><strong>Small campaign</strong> ฿5,900: 5 posts on one theme plus an image set, for a promotion push</p></li><li><p><strong>Large campaign</strong> ฿15,900: 12 posts, key visual, landing page, and a results report</p></li></ul><h2>Getting started</h2><ol><li><p>A 15-minute call about your brand, products, and customers</p></li><li><p>A 30-minute brand setup: logo, voice, products, and your Facebook page</p></li><li><p>Your first content batch, reviewed and approved in the portal</p></li><li><p>publio posts on schedule, with a LINE notification whenever something needs your eyes</p></li></ol><h2>FAQ</h2><p><strong>Does publio post without us seeing it?</strong> No. Every post needs your approval first.</p><p><strong>Are the images random AI images?</strong> No. Your real product photo is the base, staged in your brand's style.</p><p><strong>Does it support TikTok?</strong> Coming soon. Facebook, Instagram, LINE, and Google Business are available today.</p><p><strong>Can I edit captions or images myself?</strong> Yes, every post is editable in the portal, and you can attach your own references.</p><p><strong>How long is a quote valid?</strong> 30 days. Prices may adjust to the final scope after we talk, and work starts once the plan is confirmed and the first cycle is paid.</p><h2>Start with publio</h2><p>Let us take care of your content. You just approve. Book a 15-minute demo or message us on LINE OA.</p>`,
  },
  {
    slug: "sample-project",
    draft: true,
    title:
      "Sample Project — Order Automation for a Retail SME (example, edit or delete)",
    metaDescription:
      "Short 1–2 line description, e.g.: Automated order-to-invoice flow connecting LINE OA, Google Sheets and accounting, saving 10+ hours a week.",
    date: "2026-01-01T00:00:00.000Z",
    images: [null, null, null],
    category: "Automation System",
    client: "Client name",
    duration: "2026 · 3 weeks",
    liveWebsite: "https://example.com",
    buyLink: "/#contact",
    buyButtonText: "Get a similar system",
    content: `<h2>Overview</h2><p>2–3 sentences: who the client is and what system we built.</p><p><strong>Service:</strong> Automation System Design<br><strong>Tools:</strong> n8n, LINE OA, Google Sheets, Notion<br><strong>Team:</strong> Tent, Arty</p><h2>The Challenge</h2><p>The client's problem, e.g. orders came in via LINE and had to be typed into a Sheet and invoiced by hand every time.</p><h2>The Solution</h2><p>What we did: map the process → design the workflow → connect the systems → train the team.</p><h2>The Result</h2><p>Results in numbers, e.g. 10 hours/week of data entry saved, zero missed orders.</p>`,
  },
];

export const publishedProjects = projects.filter((p) => !p.draft);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
