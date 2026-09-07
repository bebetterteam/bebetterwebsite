import Button from "./Button";
import { pricing } from "@/lib/site";

/**
 * Mirrors the Framer "PricingSection" (nodeId wdYduEMv9): two package cards
 * plus the "Not sure what you need?" book-a-call band.
 */
export default function Pricing() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-[192px]">
      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center gap-24">
        <h2 className="t-h2 w-full">{pricing.title}</h2>

        <div className="grid w-full max-w-[940px] grid-cols-1 gap-6 md:grid-cols-2">
          {pricing.cards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col rounded-[32px] border border-black/6 bg-white p-8 shadow-[0_16px_48px_rgba(0,0,0,0.08)]"
            >
              <span
                className="t-span-muted mb-4"
                style={{ color: card.accent }}
              >
                {card.price}
              </span>
              <h3 className="t-h3 mb-3">{card.title}</h3>
              <p className="t-body-sm mb-8 text-grey-30">{card.description}</p>

              <ul className="mb-10 flex flex-col gap-3">
                {card.lines.map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <svg
                      viewBox="0 0 256 256"
                      aria-hidden
                      className="mt-[3px] h-[18px] w-[18px] shrink-0"
                      style={{ fill: card.accent }}
                    >
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                    </svg>
                    <span className="t-body-sm text-grey-30">{line}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Button
                  label={card.cta.label}
                  href={card.cta.href}
                  icon="ArrowRight"
                  background={card.accent}
                />
              </div>
            </article>
          ))}
        </div>

        <div className="flex w-full max-w-[800px] flex-col items-start gap-6 rounded-[32px] bg-grey-98 p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="flex flex-col gap-4">
            <h3 className="t-h3 max-w-[600px]">{pricing.bookACall.title}</h3>
            <p className="t-body-big text-left">{pricing.bookACall.body}</p>
          </div>
          <Button
            label={pricing.bookACall.cta.label}
            href={pricing.bookACall.cta.href}
            icon="Phone"
          />
        </div>
      </div>
    </section>
  );
}
