"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "./Button";
import HeroTicker from "./HeroTicker";
import { hero } from "@/lib/site";

/** The six 3D props from the Framer "3d-elements" frame (nodeId PNRWhgVVX). */
const SHAPES = [
  { src: "/3d/orange-pyramid.png", alt: "", style: { top: 0, left: 80, transform: "rotate(10deg)" }, z: 1, drift: 26 },
  { src: "/3d/purple-sphere.png", alt: "", style: { left: 0, top: "50%", marginTop: -140 }, z: 2, drift: -34 },
  { src: "/3d/blue-cylinder.png", alt: "", style: { bottom: 0, left: 80, transform: "rotate(-55deg)" }, z: 1, drift: 30 },
  { src: "/3d/turquoise-star.png", alt: "", style: { top: 0, right: 80 }, z: 2, drift: -28 },
  { src: "/3d/green-element.png", alt: "", style: { right: 0, top: "50%", marginTop: -140 }, z: 1, drift: 32 },
  { src: "/3d/yellow-cube.png", alt: "", style: { right: 80, bottom: 0 }, z: 2, drift: -24 },
] as const;

function SkillsPill() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % hero.skills.length),
      2200,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute -top-11 left-1/2 h-8 w-[270px] -translate-x-1/2 overflow-hidden rounded-3xl bg-white px-3 shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
      <div
        className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: `translateY(-${index * 32}px)` }}
      >
        {hero.skills.map((skill) => (
          <span
            key={skill}
            className="flex h-8 shrink-0 items-center justify-center text-[14px] font-medium whitespace-nowrap"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Mirrors the Framer "Memoji" component (nodeId kpE6gFYsF) — client avatars. */
function Memoji({ offset, from, to }: { offset: number; from: string; to: string }) {
  return (
    <span
      className="absolute top-1/2 h-9 w-9 -translate-y-1/2 rounded-full border-2 border-white"
      style={{
        left: offset,
        background: `linear-gradient(140deg, ${from}, ${to})`,
      }}
      aria-hidden
    />
  );
}

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
        <HeroTicker text={hero.ticker} />

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
                alt={shape.alt}
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
          {/* Wordmark — Framer text node "Bebetter", top -114px */}
          <span className="absolute -top-[114px] left-1/2 -translate-x-1/2 text-[16px] font-medium whitespace-nowrap">
            {hero.wordmark}
          </span>

          <SkillsPill />

          {/* 280 × 280 glass card, radius 48 */}
          <div className="flex h-[220px] w-[220px] items-center justify-center rounded-[38px] bg-white/72 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.10)] backdrop-blur-xl md:h-[280px] md:w-[280px] md:rounded-[48px]">
            <span className="text-[60px] leading-none font-extrabold tracking-[-0.03em] text-brand-blue uppercase md:text-[76px]">
              Bb
            </span>
          </div>

          {/* Clients row — 3 avatars + tagline, bottom -60px */}
          <div className="absolute -bottom-[104px] left-1/2 flex w-[92vw] max-w-[440px] -translate-x-1/2 flex-col items-center gap-3 md:-bottom-[60px] md:block md:h-9">
            <span className="relative block h-9 w-[92px] md:absolute md:inset-y-0 md:left-0">
              <Memoji offset={0} from="rgb(102,112,255)" to="rgb(67,96,255)" />
              <Memoji offset={28} from="rgb(102,255,217)" to="rgb(0,204,153)" />
              <Memoji offset={56} from="rgb(252,97,41)" to="rgb(252,140,41)" />
            </span>
            <span className="t-span text-center text-grey-30 md:absolute md:top-1/2 md:right-0 md:max-w-[320px] md:-translate-y-1/2 md:text-right">
              {hero.tagline}
            </span>
          </div>

          {/* CTA — bottom -168px */}
          <div className="absolute -bottom-[210px] left-1/2 -translate-x-1/2 md:-bottom-[168px]">
            <Button
              label={hero.cta.label}
              href={hero.cta.href}
              icon="ArrowDown"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
