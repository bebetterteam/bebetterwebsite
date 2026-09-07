"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FramerButton,
  FramerHeroTicker,
  FramerMemoji,
  FramerSkillsList,
} from "./framer";
import Logo from "./Logo";
import { hero } from "@/lib/site";

/** The six 3D props from the Framer "3d-elements" frame (nodeId PNRWhgVVX). */
const SHAPES = [
  { src: "/3d/orange-pyramid.png", style: { top: 0, left: 80, rotate: "10deg" }, z: 1, drift: 26 },
  { src: "/3d/purple-sphere.png", style: { left: 0, top: "50%", marginTop: -140 }, z: 2, drift: -34 },
  { src: "/3d/blue-cylinder.png", style: { bottom: 0, left: 80, rotate: "-55deg" }, z: 1, drift: 30 },
  { src: "/3d/turquoise-star.png", style: { top: 0, right: 80 }, z: 2, drift: -28 },
  { src: "/3d/green-element.png", style: { right: 0, top: "50%", marginTop: -140 }, z: 1, drift: 32 },
  { src: "/3d/yellow-cube.png", style: { right: 80, bottom: 0 }, z: 2, drift: -24 },
] as const;

export default function Hero() {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const onScroll = () =>
      setScrolled(Math.min(window.scrollY / window.innerHeight, 1));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-visible">
        {/* Framer "Hero Ticker" (rEXB_BAtk), inset -24px like the design */}
        <div className="hero-ticker pointer-events-none absolute inset-x-[-24px] top-1/2 -translate-y-1/2 overflow-hidden">
          <FramerHeroTicker locale="" title={hero.ticker} style={{ width: "100%" }} />
        </div>

        {/* 3d-elements — 1100 × 700 frame of six floating props */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[700px] w-[1100px] -translate-x-1/2 -translate-y-1/2 scale-[0.34] sm:scale-[0.55] md:scale-[0.8] lg:scale-100">
          {SHAPES.map((shape) => (
            <div
              key={shape.src}
              className="absolute h-[280px] w-[280px]"
              style={{
                ...shape.style,
                zIndex: shape.z,
                translate: `0 ${scrolled * shape.drift}px`,
                opacity: 1 - scrolled * 0.65,
                transition: "translate 120ms linear, opacity 120ms linear",
              }}
            >
              <Image
                src={shape.src}
                alt=""
                width={280}
                height={280}
                priority
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Profile */}
        <div className="relative z-20 flex flex-col items-center">
          <span className="absolute -top-[114px] left-1/2 -translate-x-1/2 text-[16px] font-medium whitespace-nowrap">
            {hero.wordmark}
          </span>

          {/* Framer "Skills List" (CLUNp73Ij), Variant 1 — top -44px, 283px wide */}
          <div className="absolute -top-11 left-1/2 -translate-x-1/2">
            <FramerSkillsList
              locale=""
              variant="xVFUGGmVI"
              style={{ width: 283, height: 32 }}
            />
          </div>

          {/* 280 × 280 glass card, radius 48 */}
          <div className="flex h-[220px] w-[220px] items-center justify-center rounded-[38px] bg-white/72 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.10)] backdrop-blur-xl md:h-[280px] md:w-[280px] md:rounded-[48px]">
            <Logo variant="mark" className="h-[58%] w-[58%] object-contain" />
          </div>

          {/* Clients row — Framer "Memoji" (kpE6gFYsF) ×3 + tagline */}
          <div className="absolute -bottom-[104px] left-1/2 flex w-[92vw] max-w-[440px] -translate-x-1/2 flex-col items-center gap-3 md:-bottom-[60px] md:block md:h-9">
            <span className="relative block h-9 w-[92px] md:absolute md:inset-y-0 md:left-0">
              {[0, 28, 56].map((offset) => (
                <span
                  key={offset}
                  className="absolute top-1/2 -translate-y-1/2"
                  style={{ left: offset }}
                >
                  <FramerMemoji locale="" />
                </span>
              ))}
            </span>
            <span className="t-span text-center text-grey-30 md:absolute md:top-1/2 md:right-0 md:max-w-[320px] md:-translate-y-1/2 md:text-right">
              {hero.tagline}
            </span>
          </div>

          {/* Framer "Button" (GjHZzzxwD), Desktop variant — bottom -168px */}
          <div className="absolute -bottom-[210px] left-1/2 -translate-x-1/2 md:-bottom-[168px]">
            <FramerButton
              locale=""
              variant="X4VGbMEbN"
              O1r1SHWDe={hero.cta.label}
              YAeBepFkC="ArrowDown"
              bGXKran9l={hero.cta.href}
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
