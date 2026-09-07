"use client";

import { useEffect, useState } from "react";
import { useIsPhone } from "@/lib/useIsPhone";
import { FramerTopNav } from "./framer";

/**
 * The real Framer "Top Nav" component (nodeId DiSK89Ch4). Framer ships one
 * top-level variant per section, so the selected pill is driven by which
 * section is in view rather than by hand-built markup.
 */
const SECTIONS = ["home", "about", "stack", "services", "projects", "contact"];

const DESKTOP: Record<string, string> = {
  home: "yueoFbyAy",
  about: "Aqfa2nIos",
  stack: "bxqxnKUAd",
  services: "rFaaKSvHp",
  projects: "nnN_6RT9K",
  contact: "KO5n37EXt",
};

const PHONE: Record<string, string> = {
  home: "zFRhL2Aml",
  about: "jbnx1_DKr",
  stack: "jLsAWi2X1",
  services: "gFJZAhHc3",
  projects: "sW2yeQEwY",
  contact: "iOZdWESny",
};

export default function TopNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = SECTIONS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    // Sub-pages carry only the #contact footer — leave the nav on Home there.
    if (sections.length < 2) return;

    const onScroll = () => {
      const probe = window.innerHeight * 0.4;
      let current = sections[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= probe) current = section;
      }
      if (current) setActive(current.id);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Pick the breakpoint variant here rather than through unframer's `variants`
  // map — that path renders every breakpoint behind `.unframer-hidden`, whose
  // CSS this project does not ship, and the nav disappears.
  const isPhone = useIsPhone();

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center">
      <div className="pointer-events-auto">
        <FramerTopNav
          locale=""
          variant={isPhone ? PHONE[active] : DESKTOP[active]}
        />
      </div>
    </div>
  );
}
