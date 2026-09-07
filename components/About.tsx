"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { about } from "@/lib/site";

/**
 * Mirrors the Framer "AboutSection" (nodeId kiUiztjcw): a 350vh scroll stage
 * where the "About Us" heading and two 3D props stay pinned while three cards
 * stack on top of each other, one per viewport of scroll.
 */
export default function About() {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const travel = height - window.innerHeight;
      setProgress(travel <= 0 ? 0 : Math.min(Math.max(-top / travel, 0), 1));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="relative h-[350vh] w-full rounded-3xl bg-white"
    >
      {/* Pinned content: heading + the two 3D props */}
      <div className="sticky top-0 flex h-screen w-full items-start justify-center overflow-hidden py-[192px]">
        <div
          className="pointer-events-none absolute top-1/2 left-[120px] hidden h-[640px] w-[640px] lg:block"
          style={{ translate: `${progress * -80}px -50%`, opacity: 0.9 }}
        >
          <Image
            src="/3d/purple-cube.png"
            alt=""
            width={640}
            height={640}
            className="h-full w-full object-contain"
          />
        </div>
        <div
          className="pointer-events-none absolute top-1/2 right-[120px] hidden h-[640px] w-[640px] rotate-[10deg] lg:block"
          style={{ translate: `${progress * 80}px -50%`, opacity: 0.9 }}
        >
          <Image
            src="/3d/blue-pyramid.png"
            alt=""
            width={640}
            height={640}
            className="h-full w-full object-contain"
          />
        </div>
        <h2 className="t-h2 relative z-10 mx-auto w-full max-w-[1200px]">{about.title}</h2>
      </div>

      {/* Three stacked cards, one per 100vh of the stage */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[350vh]">
        {about.cards.map((copy, i) => {
          const isLast = i === about.cards.length - 1;
          // Each card owns one viewport of the stage. Sticky flow already slides
          // the next card up over the previous one, so the cards stay opaque and
          // uniform in height instead of cross-fading (which would show both).
          return (
            <div
              key={i}
              className="sticky top-0 flex h-screen w-full items-center justify-center px-6"
            >
              <div className="pointer-events-auto relative flex min-h-[480px] w-full max-w-[900px] flex-col justify-center rounded-[32px] border border-black/5 bg-white p-8 shadow-[0_24px_80px_rgba(0,0,0,0.12)] md:min-h-[420px] md:p-12">
                <span className="t-span-muted mb-6 block text-grey-50">
                  {String(i + 1).padStart(2, "0")} / 0{about.cards.length}
                </span>
                <p className="t-body-big">{copy}</p>
                {isLast && (
                  <div className="mt-10">
                    <Button
                      label={about.cta.label}
                      href={about.cta.href}
                      icon="ReadCvLogo"
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
