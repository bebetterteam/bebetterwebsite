"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useIsPhone } from "@/lib/useIsPhone";
import { nav } from "@/lib/site";
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
  const [menuKey, setMenuKey] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // The export has no route map and loses Framer's section hashes. Repair
  // actual hrefs (including open-in-new-tab), as with the Pricing DOM adapter.
  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    const apply = () => {
      for (const anchor of root.querySelectorAll<HTMLAnchorElement>("a")) {
        // Nav labels use div.framer-text, unlike Pricing's p.framer-text.
        const texts = Array.from(anchor.querySelectorAll(".framer-text"));
        const label = texts[0]?.textContent?.trim();
        const item = nav.find((item) => item.label === label);
        const isContactCta = label === "Sign Up" || label === "Get in touch";
        const href = item ? `/${item.href}` : isContactCta ? "/#contact" : null;
        if (!href) continue;
        if (anchor.getAttribute("href") !== href) anchor.setAttribute("href", href);
        if (isContactCta) {
          for (const text of texts) {
            if (text.textContent !== "Get in touch") text.textContent = "Get in touch";
          }
        }
      }
    };
    apply();
    const observer = new MutationObserver(apply);
    observer.observe(root, {
      childList: true, subtree: true, characterData: true,
      attributes: true, attributeFilter: ["href"],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = SECTIONS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    // Sub-pages carry only the #contact footer — leave the nav on Home there.
    if (sections.length < 2) {
      setActive("home");
      return;
    }

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
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  // Pick the breakpoint variant here rather than through unframer's `variants`
  // map — that path renders every breakpoint behind `.unframer-hidden`, whose
  // CSS this project does not ship, and the nav disappears.
  const isPhone = useIsPhone();

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center">
      <div
        ref={ref}
        className="pointer-events-auto"
        onClickCapture={(event) => {
          const anchor = (event.target as HTMLElement).closest("a");
          const href = anchor?.getAttribute("href");
          if (!href?.startsWith("/#")) return;
          // Framer's handler still closes over its unresolved page ID even
          // after href is repaired. Let the browser follow the real anchor.
          event.stopPropagation();
          if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
          event.preventDefault();
          // Reset Framer's internal open variant and its scroll lock on selection.
          if (isPhone) setMenuKey((key) => key + 1);
          requestAnimationFrame(() => {
            if (window.location.pathname === "/") {
              document.getElementById(href.slice(2))?.scrollIntoView();
              history.replaceState(null, "", href);
            } else {
              window.location.assign(href);
            }
          });
        }}
      >
        <FramerTopNav
          key={menuKey}
          locale=""
          variant={isPhone ? PHONE[active] : DESKTOP[active]}
        />
      </div>
    </div>
  );
}
