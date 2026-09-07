"use client";

import Image from "next/image";
import { FramerStackCard } from "./framer";
import { toolkit } from "@/lib/site";

/**
 * Mirrors the Framer "StackSection" (nodeId AIVi4q8BD): "Our Toolkit" over a
 * 3 × 2 grid of the real Framer Stack Cards (ZYBsXIAxG), each pinned to the
 * brand-logo variant the design uses, with the large purple cube behind.
 */
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
            <FramerStackCard
              key={card.name}
              locale=""
              variant="fmEmcsaJN"
              Q3K9AU1Xx={card.logoVariant}
              qU19CQxpY="0"
              i7Dy5tkX2={card.name}
              RKNGwH5H8={`<p>${card.body}</p>`}
              style={{ width: "100%" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
