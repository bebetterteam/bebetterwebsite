"use client";

import { FramerTopNav } from "./framer";

/**
 * The real Framer "Top Nav" component (nodeId DiSK89Ch4) — it carries its own
 * sliding selected pill, hover states and mobile open/closed variants.
 */
export default function TopNav() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center">
      <div className="pointer-events-auto">
        <FramerTopNav.Responsive locale="" />
      </div>
    </div>
  );
}
