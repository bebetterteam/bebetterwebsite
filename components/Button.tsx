"use client";

import Link from "next/link";
import type { CSSProperties } from "react";

type IconName = "ArrowDown" | "ReadCvLogo" | "Phone" | "ArrowRight" | "ArrowLeft";

const ICONS: Record<IconName, string> = {
  ArrowDown:
    "M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z",
  ArrowRight:
    "M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z",
  ArrowLeft:
    "M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z",
  ReadCvLogo:
    "M208,32H80A16,16,0,0,0,64,48V64H48A16,16,0,0,0,32,80V192a32,32,0,0,0,32,32H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H80V48H208ZM64,208a16,16,0,0,1-16-16V80H64Zm40-120a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H112A8,8,0,0,1,104,88Zm0,32a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H112A8,8,0,0,1,104,120Zm0,32a8,8,0,0,1,8-8h40a8,8,0,0,1,0,16H112A8,8,0,0,1,104,152Z",
  Phone:
    "M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46Z",
};

/**
 * Mirrors the Framer "Button" component (nodeId GjHZzzxwD):
 * pill, solid brand fill, label + Phosphor icon, inverting on hover.
 */
export default function Button({
  label,
  href,
  icon = "ArrowRight",
  background = "rgb(67, 96, 255)",
  color = "rgb(255, 255, 255)",
  className = "",
}: {
  label: string;
  href: string;
  icon?: IconName;
  background?: string;
  color?: string;
  className?: string;
}) {
  const vars = {
    "--btn-bg": background,
    "--btn-fg": color,
  } as CSSProperties;

  return (
    <Link
      href={href}
      style={vars}
      className={`group relative inline-flex h-12 shrink-0 items-center gap-2 overflow-hidden rounded-full border border-[var(--btn-bg)] bg-[var(--btn-bg)] px-6 transition-transform duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 ${className}`}
    >
      <span
        aria-hidden
        className="absolute inset-0 origin-bottom scale-y-0 bg-[var(--btn-fg)] transition-transform duration-300 ease-out group-hover:scale-y-100"
      />
      <span className="relative z-10 text-[16px] font-medium whitespace-nowrap text-[var(--btn-fg)] transition-colors duration-300 group-hover:text-[var(--btn-bg)]">
        {label}
      </span>
      <svg
        viewBox="0 0 256 256"
        aria-hidden
        className="relative z-10 h-[18px] w-[18px] shrink-0 fill-[var(--btn-fg)] transition-colors duration-300 group-hover:fill-[var(--btn-bg)]"
      >
        <path d={ICONS[icon]} />
      </svg>
    </Link>
  );
}
