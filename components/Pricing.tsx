"use client";

import { useEffect, useRef } from "react";
import { FramerButton, FramerPricingCard } from "./framer";
import { pricing } from "@/lib/site";

/**
 * The Framer pricing card (P1Yn6g9EH) exposes props for the plan type, price,
 * link, colours and the nine feature lines — but its CTA label ("Purchase
 * Plan") and the "/month" suffix after the price are plain text nodes baked
 * into the component, with no property control. Until those are edited in
 * Framer itself, patch the two nodes after render.
 */
function useFramerCardText(
  ref: React.RefObject<HTMLDivElement | null>,
  ctaLabel: string,
  priceSuffix: string,
) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const apply = () => {
      for (const node of root.querySelectorAll<HTMLElement>("p.framer-text")) {
        const text = node.textContent?.trim();
        if (text === "Purchase Plan") node.textContent = ctaLabel;
        else if (text === "/month") {
          if (priceSuffix) node.textContent = priceSuffix;
          else node.style.display = "none";
        }
      }
    };

    apply();
    // The card re-renders on hover/variant changes, so keep the patch applied.
    const observer = new MutationObserver(apply);
    observer.observe(root, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, [ref, ctaLabel, priceSuffix]);
}

function PricingCard({ card }: { card: (typeof pricing.cards)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  useFramerCardText(ref, card.ctaLabel, card.priceSuffix);

  return (
    <div ref={ref} className="w-full">
      <FramerPricingCard locale="" {...card.framer} style={{ width: "100%" }} />
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-[96px] md:py-[192px]">
      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center gap-12 md:gap-24">
        <h2 className="t-h2 w-full">{pricing.title}</h2>

        <div className="grid w-full max-w-[940px] grid-cols-1 items-start gap-6 md:grid-cols-2">
          {pricing.cards.map((card) => (
            <PricingCard key={card.title} card={card} />
          ))}
        </div>

        <div className="flex w-full max-w-[800px] flex-col items-start gap-6 rounded-[32px] bg-lime p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="flex flex-col gap-6">
            <h3 className="t-h3 max-w-[600px]">{pricing.bookACall.title}</h3>
            <p className="t-body-big text-left">{pricing.bookACall.body}</p>
          </div>
          {/* Framer components size themselves — never let flex shrink them. */}
          <div className="shrink-0">
            <FramerButton
              locale=""
              variant="DolaGztjE"
              O1r1SHWDe={pricing.bookACall.cta.label}
              YAeBepFkC="Phone"
              bGXKran9l={pricing.bookACall.cta.href}
              IzpkIlCCL="rgb(255, 255, 255)"
              E3sMJqdyg="rgb(67, 96, 255)"
              jbqbpFWTR="rgb(67, 96, 255)"
              iiNMG_vXP="rgb(255, 255, 255)"
              IJooVlaof="Back"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
