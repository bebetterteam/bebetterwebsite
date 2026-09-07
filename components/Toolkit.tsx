"use client";

import Image from "next/image";
import { toolkit } from "@/lib/site";

/**
 * Mirrors the Framer "StackSection" (nodeId AIVi4q8BD): the "Our Toolkit"
 * heading over a 3 × 2 grid of Stack Cards, with a large purple cube pinned
 * behind the grid.
 */
export default function Toolkit() {
  return (
    <section
      id="stack"
      className="relative w-full overflow-hidden bg-white px-6 py-[192px]"
    >
      <div className="pointer-events-none absolute top-1/2 left-1/2 hidden h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 opacity-90 lg:block">
        <Image
          src="/3d/purple-cube-large.png"
          alt=""
          width={720}
          height={720}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col gap-24">
        <h2 className="t-h2">{toolkit.title}</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {toolkit.cards.map((card) => (
            <article
              key={card.name}
              className="group flex flex-col gap-4 rounded-[32px] bg-white/85 p-8 shadow-[0_16px_48px_rgba(0,0,0,0.08)] backdrop-blur-md transition-transform duration-300 ease-out hover:-translate-y-1"
            >
              <span
                className="flex h-12 w-12 items-center justify-center rounded-2xl text-[18px] font-bold text-white"
                style={{ background: card.color }}
                aria-hidden
              >
                {card.name.charAt(0)}
              </span>
              <h3 className="t-h3">{card.name}</h3>
              <p className="t-body-sm text-grey-30">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
