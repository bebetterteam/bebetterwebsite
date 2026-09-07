"use client";

import { useEffect, useRef, useState } from "react";
import { services } from "@/lib/site";

/**
 * Mirrors the Framer "ServicesSection" (nodeId lTpVR4yl_): a sticky
 * "What we do" column on the left and five 100vh service panels on the right,
 * each tinting the section background as it scrolls through.
 */
export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const panels = ref.current?.querySelectorAll<HTMLElement>("[data-panel]");
    if (!panels?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.getAttribute("data-panel")));
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    panels.forEach((panel) => observer.observe(panel));
    return () => observer.disconnect();
  }, []);

  const tint = services.items[activeIndex]?.tint ?? "rgb(255,255,255)";

  return (
    <section
      id="services"
      ref={ref}
      className="relative w-full px-6 py-[192px] transition-colors duration-700 ease-out"
      style={{ backgroundColor: "white" }}
    >
      {/* ServicesScrollSection — the colour that follows the active panel */}
      <div
        className="pointer-events-none absolute inset-0 transition-colors duration-700 ease-out"
        style={{ backgroundColor: tint, opacity: 0.14 }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col gap-24">
        <h2 className="t-h2">{services.title}</h2>

        <div className="flex flex-col md:flex-row md:items-start">
          <div className="md:sticky md:top-24 md:w-[30%] md:self-start md:pr-6">
            <h3 className="t-h3">{services.sticky}</h3>
          </div>

          <div className="mt-10 flex flex-col md:mt-0 md:w-[70%]">
            {services.items.map((item, i) => (
              <div
                key={item.number}
                data-panel={i}
                className="relative flex flex-col justify-start gap-3 border-t border-black/8 py-16 md:h-screen md:border-none md:pt-[146px] md:pr-0 md:pb-6 md:pl-6"
              >
                <h3 className="t-h3">{item.title}</h3>
                <p className="t-body-big">{item.body}</p>

                {/* Services-Graphic — the small rotating 3D chip */}
                <div
                  className="mx-auto mt-10 h-[120px] w-[120px] rounded-[28px] transition-transform duration-700 ease-out md:absolute md:bottom-[72px] md:left-1/2 md:mt-0 md:-translate-x-1/2"
                  style={{
                    background: `linear-gradient(140deg, ${item.tint}, rgba(255,255,255,0.4))`,
                    rotate: `${item.rotation}deg`,
                    boxShadow: `0 24px 60px ${item.tint}40`,
                  }}
                  aria-hidden
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
