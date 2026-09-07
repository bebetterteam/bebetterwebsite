# Bebetter — website

A real, coded implementation of the Bebetter Framer project, built with Next.js.
Every string, colour, type style and section order is taken from the Framer
project through the Framer MCP so the site matches the design.

## Real Framer components (this is the important part)

The animations, variants, hover states, spring transitions and fonts are **not
reimplemented** — they are the actual components from the Framer project,
exported with [unframer](https://github.com/remorses/unframer) (free, open
source; the paid Framer "React Export" plugin is not needed).

```bash
npx unframer          # re-runs the export, reads unframer.json
```

[unframer.json](unframer.json) lists the component URLs; the generated code
lands in [framer/](framer/) and is committed so the build works without network
access. [components/framer.ts](components/framer.ts) re-exports them.

Props are Framer's generated ids (`O1r1SHWDe`, `RKNGwH5H8`, …). Every value
passed comes verbatim from the page XML read through the Framer MCP, so each
instance renders exactly the variant the design uses — for example the Stack
Cards carry the real brand logos and flip to reveal their copy on hover, and
the Button is the outlined pill with its icon reveal, not an approximation.

## Stack

- Next.js 15 (App Router) + React 19, TypeScript
- Tailwind CSS v4 (design tokens mirror the Framer colour/text styles)
- Lenis for the smooth scrolling (Framer's `SmoothScroll` node)
- `unframer` for the real Framer components
- Static export-friendly: every route is prerendered

## Where the Framer design lives in the code

| Framer                                        | Code |
| --------------------------------------------- | ---- |
| Colour styles + text styles                    | [app/globals.css](app/globals.css) (`@theme`, `.t-*`) |
| Page `/` (nodeId `augiA20Il`) copy             | [lib/site.ts](lib/site.ts) |
| CMS collection "Projects" (`kOgwlcBkr`)        | [lib/projects.ts](lib/projects.ts) |
| CMS collection "Legal" (`T0aOdsSzY`)           | [lib/legal.ts](lib/legal.ts) |
| `SmoothScroll` (`fbi4b6Sdg`)                   | [components/SmoothScroll.tsx](components/SmoothScroll.tsx) |
| `Top Nav` (`DiSK89Ch4`)                        | [components/TopNav.tsx](components/TopNav.tsx) |
| `HeroSection` (`ByUyGiiNs`) + `Hero Ticker`    | [components/Hero.tsx](components/Hero.tsx), [components/HeroTicker.tsx](components/HeroTicker.tsx) |
| `AboutSection` (`kiUiztjcw`), 350vh card stack | [components/About.tsx](components/About.tsx) |
| `StackSection` (`AIVi4q8BD`) "Our Toolkit"     | [components/Toolkit.tsx](components/Toolkit.tsx) |
| `ServicesSection` (`lTpVR4yl_`)                | [components/Services.tsx](components/Services.tsx) |
| `PricingSection` (`wdYduEMv9`)                 | [components/Pricing.tsx](components/Pricing.tsx) |
| `ProjectsSection` (`PjXRFN9Ez`)                | [components/Projects.tsx](components/Projects.tsx) |
| `Button` (`GjHZzzxwD`)                         | [components/Button.tsx](components/Button.tsx) |
| The six 3D props                               | [public/3d/](public/3d/) (downloaded from framerusercontent) |

## Not in the Framer project — filled in here

These were missing or unreadable through the MCP and are marked with a comment
in the file that owns them:

1. **Contact section / footer.** Every CTA in Framer links to `/#contact`, but
   the page has only an empty `ContactScrollSection` and the `Footer` component
   could not be read. [components/Contact.tsx](components/Contact.tsx) builds one
   from the project's own type and colour styles. **Replace the placeholder
   email, LINE link and address.**
2. **Logo.** In place. `public/logo-source.png` is the file as supplied (artwork
   on an opaque white background); `npm run logo` knocks the background out and
   splits the symbol from the wordmark:

   | file | used by |
   | --- | --- |
   | `public/logo.png` | full lockup, transparent |
   | `public/logo-mark.png` | symbol only, 512×512 — hero card, footer, favicon |

   To change the logo, replace `logo-source.png` and re-run `npm run logo`.
   [components/Logo.tsx](components/Logo.tsx) falls back to
   `public/logo-placeholder.svg` if a file is missing.
3. **Client avatars.** The `Memoji` component's images were not reachable, so
   the three avatars are brand-coloured circles.
4. **Project / legal images.** Every Image field in the CMS is `null`, so covers
   fall back to a brand gradient with a 3D prop.
5. **Hero skills pill.** The strings are verbatim from Framer but are leftovers
   from the original template ("UX/UI Expertise", …). A suggested Bebetter
   replacement is commented in [lib/site.ts](lib/site.ts).
6. **Legal pages** still carry the template's `cohesion.framer.ai` boilerplate,
   copied verbatim from the CMS. Rewrite before launch.

## Develop

```bash
npm install
npm run dev         # http://localhost:3000
npm run build
npm run framer      # re-export the Framer components (reads unframer.json)
```

### If the page renders unstyled (serif text, no layout)

That is a stale dev-server module graph — it happens after files are added or
deleted while `next dev` is running, and it drops the CSS chunks. Production
builds are unaffected. Fix:

```bash
npm run dev:clean   # rm -rf .next && next dev
```
