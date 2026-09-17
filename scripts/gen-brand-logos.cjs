const si = require("simple-icons");
const fs = require("fs");

const map = { supabase:"siSupabase", neon:"siNeon", n8n:"siN8n", vercel:"siVercel",
              github:"siGithub", cloudflare:"siCloudflare", claude:"siClaude" };

const entries = Object.entries(map).map(([key, k]) => {
  const i = si[k];
  return "  " + key + ": {\n" +
         "    title: " + JSON.stringify(i.title) + ",\n" +
         '    hex: "#' + i.hex + '",\n' +
         "    path: " + JSON.stringify(i.path) + ",\n" +
         "  },";
}).join("\n");

const CODE_PATH = "M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z";

const lines = [
"/**",
" * Provider marks for the Our Toolkit cards whose logo the Framer Stack Card",
" * does not ship (it only carries Chat GPT, Airtable, Figma, Google, Notion,",
" * Zapier and a handful of others).",
" *",
" * Paths come from simple-icons (CC0) with each brand's own hex, so these are",
" * the official marks rather than look-alikes. Regenerate by bumping the",
" * simple-icons devDependency.",
" */",
"",
"export type BrandLogo = {",
"  title: string;",
"  hex: string;",
"  path: string;",
"  viewBox?: string;",
"};",
"",
"export const brandLogos: Record<string, BrandLogo> = {",
entries,
"  // Not a brand: a plain code glyph for the \"Custom Code\" card.",
"  code: {",
'    title: "Custom Code",',
'    hex: "#4360FF",',
'    viewBox: "0 0 256 256",',
"    path: " + JSON.stringify(CODE_PATH) + ",",
"  },",
"};",
"",
"/** Inline SVG markup for a brand mark, sized to fill its container. */",
"export function brandLogoSvg(key: string): string | null {",
"  const logo = brandLogos[key];",
"  if (!logo) return null;",
"  const viewBox = logo.viewBox ?? \"0 0 24 24\";",
"  return (",
"    '<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"' + viewBox +",
"    '\" role=\"img\" aria-label=\"' + logo.title +",
"    '\" style=\"width:100%;height:100%;display:block\" fill=\"' + logo.hex +",
"    '\"><path d=\"' + logo.path + '\"/></svg>'",
"  );",
"}",
""].join("\n");

fs.writeFileSync("lib/brandLogos.ts", lines);
console.log("wrote lib/brandLogos.ts", lines.length, "bytes");
