"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { nav } from "@/lib/site";

/**
 * Mirrors the Framer "Top Nav" component (nodeId DiSK89Ch4):
 * a floating white 48px pill with a blue "selected" indicator that slides
 * between links, plus a two-line burger that opens a stacked menu on mobile.
 */
export default function TopNav() {
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    // Sub-pages only carry the #contact footer — nothing should look "current".
    if (sections.length < 2) {
      setActive("");
      return;
    }

    const onScroll = () => {
      const probe = window.innerHeight * 0.4;
      let current = sections[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= probe) current = section;
      }
      if (current) setActive(`#${current.id}`);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <div className="pointer-events-auto flex w-full max-w-[1200px] items-start justify-between gap-3 md:justify-center">
        {/* Desktop pill */}
        <nav className="hidden h-12 items-center rounded-3xl bg-white p-[3px] shadow-[0_8px_32px_rgba(0,0,0,0.08)] md:flex">
          {nav.map((item) => {
            const isActive = active === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex h-[42px] items-center rounded-[96px] px-4 text-[15px] font-medium transition-colors duration-300 ${
                  isActive ? "text-white" : "text-black hover:text-brand-blue"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-[96px] bg-brand-blue" />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile wordmark + burger */}
        <Link
          href="#home"
          className="flex h-12 items-center rounded-3xl bg-white px-5 text-[15px] font-bold tracking-[-0.02em] uppercase shadow-[0_8px_32px_rgba(0,0,0,0.08)] md:hidden"
        >
          Bebetter
        </Link>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-12 w-12 items-center justify-center rounded-3xl bg-white shadow-[0_8px_32px_rgba(0,0,0,0.08)] md:hidden"
        >
          <span
            className={`absolute h-px w-7 rounded-[1px] bg-grey-50 transition-transform duration-300 ${
              open ? "rotate-45" : "-translate-y-[5px]"
            }`}
          />
          <span
            className={`absolute h-px w-7 rounded-[1px] bg-grey-50 transition-transform duration-300 ${
              open ? "-rotate-45" : "translate-y-[5px]"
            }`}
          />
        </button>

        {/* Mobile menu */}
        <div
          className={`absolute top-[72px] right-4 left-4 origin-top rounded-3xl bg-white p-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 md:hidden ${
            open
              ? "pointer-events-auto scale-100 opacity-100"
              : "pointer-events-none scale-95 opacity-0"
          }`}
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`flex h-11 items-center rounded-[96px] px-4 text-[16px] font-medium ${
                active === item.href ? "bg-brand-blue text-white" : "text-black"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
