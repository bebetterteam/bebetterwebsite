"use client";

import { useEffect, useRef } from "react";
import { FramerButton, FramerPricingCard } from "./framer";
import { pricing } from "@/lib/site";

type Service = (typeof pricing.services)[number];

/**
 * The Framer pricing card (P1Yn6g9EH) takes its nine feature lines as nine
 * separate props, and its CTA label and the "/month" after the price are plain
 * text nodes baked into the component with no property control. So the props
 * are mapped from one object here, and the two baked strings — plus any unused
 * feature row — are patched after render.
 */
const LINE_PROPS = [
  "xght6NwMK",
  "arfNI6SAv",
  "huW14R4sU",
  "FUOzMkbUW",
  "ltSoS7hzq",
  "sXH2L9wod",
  "GZYXKQ6zh",
  "RUpRJMeBT",
  "QYS454DuF",
] as const;

function framerProps(service: Service) {
  const lines = Object.fromEntries(
    LINE_PROPS.map((prop, i) => [prop, service.lines[i] ?? ""]),
  );

  return {
    variant: "mlnrZCeSR",
    kuexjlf9X: service.title,
    CddCwPX3r: service.description,
    KAvDwa2mg: service.price,
    JWZtJpNMj: service.accent,
    Eq0epDP0Z: service.accent,
    jgm1srukt: service.accent,
    tzMLDe9St: "rgb(255, 255, 255)",
    TQIH2hR27: service.cta.href,
    ...lines,
  };
}

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
      // A card with fewer than nine features leaves empty rows behind. Hide
      // the row's own container — its parent is the whole feature list.
      // Set display both ways so a row that fills in later comes back.
      for (const node of root.querySelectorAll<HTMLElement>("p.framer-text")) {
        const row = node.closest<HTMLElement>("[class*='-container']");
        if (!row) continue;
        row.style.display = node.textContent?.trim() ? "" : "none";
      }
    };

    apply();
    const observer = new MutationObserver(apply);
    observer.observe(root, {
      childList: true,
      subtree: true,
      characterData: true,
    });
    return () => observer.disconnect();
  }, [ref, ctaLabel, priceSuffix]);
}

function ServiceCard({ service }: { service: Service }) {
  const ref = useRef<HTMLDivElement>(null);
  useFramerCardText(ref, service.cta.label, service.priceSuffix);

  return (
    <div
      ref={ref}
      className="w-full lg:w-[calc((100%-48px)/3)] md:w-[calc((100%-24px)/2)]"
    >
      <FramerPricingCard
        locale=""
        {...framerProps(service)}
        style={{ width: "100%" }}
      />
    </div>
  );
}

function Bundles() {
  const { title, note, items } = pricing.bundles;

  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="t-h3">{title}</h3>
        <p className="t-body-sm text-grey-30">{note}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {items.map((bundle) => (
          <div
            key={bundle.name}
            className="flex w-full flex-col gap-3 rounded-[32px] border border-black/6 bg-white p-8 shadow-[0_16px_48px_rgba(0,0,0,0.06)] md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-72px)/4)]"
          >
            <span className="t-span-muted text-grey-50">{bundle.name}</span>
            <span className="t-h3 text-brand-blue">
              {bundle.price}
              <span className="t-body-sm ml-1 text-grey-50">
                {bundle.period}
              </span>
            </span>
            <p className="t-body-sm text-grey-30">{bundle.detail}</p>
            <span className="t-span mt-auto pt-4 text-grey-50">
              Separately {bundle.alaCarte} — save {bundle.saving}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PriceList() {
  const { title, summary, monthly, oneTime } = pricing.alaCarte;

  return (
    <details className="w-full rounded-[32px] border border-black/6 bg-white p-8 md:p-10">
      <summary className="t-h3 cursor-pointer list-none marker:content-none">
        {title}
        <span className="t-body-sm mt-2 block font-normal text-brand-blue">
          {summary}
        </span>
      </summary>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
        {[monthly, oneTime].map((group) => (
          <div key={group.title} className="flex flex-col gap-4">
            <span className="t-span-muted text-grey-50">{group.title}</span>
            <dl className="flex flex-col">
              {group.rows.map(([item, price]) => (
                <div
                  key={item}
                  className="flex items-baseline justify-between gap-4 border-b border-black/6 py-3 last:border-none"
                >
                  <dt className="t-body-sm text-grey-30">{item}</dt>
                  <dd className="t-body-sm whitespace-nowrap">{price}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </details>
  );
}

/**
 * Mirrors the Framer "PricingSection" (nodeId wdYduEMv9), rebuilt around one
 * card per service instead of the original two.
 */
export default function Pricing() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-[96px] md:py-[192px]">
      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center gap-12 md:gap-24">
        <h2 className="t-h2 w-full">{pricing.title}</h2>

        <div className="flex w-full flex-wrap justify-center gap-6">
          {pricing.services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        <Bundles />

        <PriceList />

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
