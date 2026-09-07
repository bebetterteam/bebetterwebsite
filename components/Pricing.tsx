"use client";

import { FramerButton, FramerPricingCard } from "./framer";
import { pricing } from "@/lib/site";

/**
 * Mirrors the Framer "PricingSection" (nodeId wdYduEMv9): two real Framer
 * About Cards (P1Yn6g9EH) driven by the exact props from the design, plus the
 * "Not sure what you need?" book-a-call band.
 */
export default function Pricing() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-[192px]">
      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center gap-24">
        <h2 className="t-h2 w-full">{pricing.title}</h2>

        <div className="grid w-full max-w-[940px] grid-cols-1 items-start gap-6 md:grid-cols-2">
          {pricing.cards.map((card) => (
            <FramerPricingCard
              key={card.title}
              locale=""
              {...card.framer}
              style={{ width: "100%" }}
            />
          ))}
        </div>

        <div className="flex w-full max-w-[800px] flex-col items-start gap-6 rounded-[32px] bg-grey-98 p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="flex flex-col gap-4">
            <h3 className="t-h3 max-w-[600px]">{pricing.bookACall.title}</h3>
            <p className="t-body-big text-left">{pricing.bookACall.body}</p>
          </div>
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
    </section>
  );
}
