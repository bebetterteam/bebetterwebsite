"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FramerStackCard } from "./framer";
import { useIsPhone } from "@/lib/useIsPhone";
import { brandLogoSvg } from "@/lib/brandLogos";
import { toolkit } from "@/lib/site";

/**
 * The Framer Stack Card (ZYBsXIAxG) only ships logos for a fixed set of tools —
 * Chat GPT, Airtable, Figma, Framer, Google, Notion, Zapier and a few more.
 * For the providers it does not carry (Supabase, Neon, n8n, Vercel, GitHub,
 * Cloudflare, Claude) the card renders with a stand-in variant and its SVG slot
 * is swapped for the official mark from lib/brandLogos.ts.
 */
function useBrandLogoSwap(
  ref: React.RefObject<HTMLDivElement | null>,
  brandLogo: string | undefined,
) {
  useEffect(() => {
    const root = ref.current;
    if (!root || !brandLogo) return;

    const markup = brandLogoSvg(brandLogo);
    if (!markup) return;

    const apply = () => {
      for (const slot of root.querySelectorAll<HTMLElement>(".svgContainer")) {
        if (slot.dataset.brand === brandLogo) continue;
        slot.dataset.brand = brandLogo;
        slot.innerHTML = markup;
      }
    };

    apply();
    // The card swaps variants on flip, which remounts the SVG slot.
    const observer = new MutationObserver(apply);
    observer.observe(root, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [ref, brandLogo]);
}

function ToolkitCard({ card }: { card: (typeof toolkit.cards)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);
  const isPhone = useIsPhone();

  useBrandLogoSwap(ref, "brandLogo" in card ? card.brandLogo : undefined);

  // Framer ships four variants: Desktop / Desktop Flipped / Mobile / Mobile - Fliped.
  const variant = isPhone
    ? flipped
      ? "ARkixROtZ"
      : "KgkFODpCb"
    : flipped
      ? "t6maPZddi"
      : "fmEmcsaJN";

  return (
    <div
      ref={ref}
      onMouseEnter={() => !isPhone && setFlipped(true)}
      onMouseLeave={() => !isPhone && setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
      // Phones have no hover, so the copy would never be reachable without this.
      onClick={() => setFlipped((v) => !v)}
      role="button"
      aria-pressed={flipped}
      aria-label={`${card.name} — show details`}
      tabIndex={0}
      className="cursor-pointer rounded-[32px] outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
    >
      <FramerStackCard
        locale=""
        variant={variant}
        Q3K9AU1Xx={card.logoVariant}
        qU19CQxpY="0"
        i7Dy5tkX2={card.name}
        RKNGwH5H8={`<p>${card.body}</p>`}
        style={{ width: "100%" }}
      />
    </div>
  );
}

/**
 * Mirrors the Framer "StackSection" (nodeId AIVi4q8BD): "Our Toolkit" over a
 * grid of the real Framer Stack Cards, with the large purple cube behind.
 */
export default function Toolkit() {
  return (
    <section
      id="stack"
      className="relative w-full overflow-hidden bg-white py-[96px] md:py-[192px]"
    >
      <div className="pointer-events-none absolute top-1/2 left-1/2 hidden h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 opacity-90 lg:block">
        <Image src="/3d/purple-cube-large.png" alt="" width={720} height={720} className="h-full w-full object-contain" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col gap-12 md:gap-24">
        <h2 className="t-h2">{toolkit.title}</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {toolkit.cards.map((card) => (
            <ToolkitCard key={card.name} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
