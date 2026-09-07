"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FramerAboutCard, FramerButton } from "./framer";
import { about } from "@/lib/site";

/**
 * Mirrors the Framer "AboutSection" (nodeId kiUiztjcw): a 350vh scroll stage
 * where the "About Us" heading and two 3D props stay pinned while three
 * Framer About Cards (bVnN9SXLU) stack on top of each other.
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
      <div className="sticky top-0 flex h-screen w-full items-start justify-center overflow-hidden py-[192px]">
        <div
          className="pointer-events-none absolute top-1/2 left-[120px] hidden h-[640px] w-[640px] lg:block"
          style={{ translate: `${progress * -80}px -50%`, opacity: 0.9 }}
        >
          <Image src="/3d/purple-cube.png" alt="" width={640} height={640} className="h-full w-full object-contain" />
        </div>
        <div
          className="pointer-events-none absolute top-1/2 right-[120px] hidden h-[640px] w-[640px] rotate-[10deg] lg:block"
          style={{ translate: `${progress * 80}px -50%`, opacity: 0.9 }}
        >
          <Image src="/3d/blue-pyramid.png" alt="" width={640} height={640} className="h-full w-full object-contain" />
        </div>
        <h2 className="t-h2 relative z-10 mx-auto w-full max-w-[1200px]">
          {about.title}
        </h2>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[350vh]">
        {about.cards.map((copy, i) => (
          <div
            key={i}
            className="sticky top-0 flex h-screen w-full flex-col items-center justify-center gap-10 px-6"
          >
            <div className="pointer-events-auto w-full max-w-[900px]">
              <FramerAboutCard
                locale=""
                variant="b2FfyB3ek"
                wcaH6B2vy={`<p>${copy}</p>`}
                style={{ width: "100%" }}
              />
            </div>
            {i === about.cards.length - 1 && (
              <div className="pointer-events-auto">
                <FramerButton
                  locale=""
                  variant="DolaGztjE"
                  O1r1SHWDe={about.cta.label}
                  YAeBepFkC="ReadCvLogo"
                  bGXKran9l={about.cta.href}
                  IzpkIlCCL="rgb(255, 255, 255)"
                  E3sMJqdyg="rgb(67, 96, 255)"
                  jbqbpFWTR="rgb(67, 96, 255)"
                  iiNMG_vXP="rgb(255, 255, 255)"
                  IJooVlaof="Back"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
