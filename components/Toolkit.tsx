"use client";

import Image from "next/image";
import { useState } from "react";
import { FramerStackCard } from "./framer";
import { toolkit } from "@/lib/site";

/**
 * Mirrors the Framer "StackSection" (nodeId AIVi4q8BD): "Our Toolkit" over a
 * 3 × 2 grid of the real Framer Stack Cards (ZYBsXIAxG), each pinned to the
 * brand-logo variant the design uses, with the large purple cube behind.
 */
/**
 * The Framer Stack Card keeps its copy on the "Desktop Flipped" variant
 * (t6maPZddi) and shows only the brand logo on "Desktop" (fmEmcsaJN), so the
 * flip is driven from here on hover / focus.
 */
function ToolkitCard({ card }: { card: (typeof toolkit.cards)[number] }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
      tabIndex={0}
      className="rounded-[32px] outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
    >
      <FramerStackCard
        locale=""
        variant={flipped ? "t6maPZddi" : "fmEmcsaJN"}
        Q3K9AU1Xx={card.logoVariant}
        qU19CQxpY="0"
        i7Dy5tkX2={card.name}
        RKNGwH5H8={`<p>${card.body}</p>`}
        style={{ width: "100%" }}
      />
    </div>
  );
}

export default function Toolkit() {
  return (
    <section
      id="stack"
      className="relative w-full overflow-hidden bg-white px-6 py-[192px]"
    >
      <div className="pointer-events-none absolute top-1/2 left-1/2 hidden h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 opacity-90 lg:block">
        <Image src="/3d/purple-cube-large.png" alt="" width={720} height={720} className="h-full w-full object-contain" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col gap-24">
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
