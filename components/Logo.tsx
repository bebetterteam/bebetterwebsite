"use client";

import { useState } from "react";

/**
 * Bebetter mark.
 *
 * Drop the real file at `public/logo.png` (or `.svg` — set `src` below) and it
 * is picked up with no code change. Until then this falls back to the
 * placeholder in `public/logo-placeholder.svg`.
 *
 * A plain <img> is used on purpose: next/image would fail the build while the
 * file is missing, and the onError fallback keeps the page intact either way.
 */
export default function Logo({
  className = "",
  alt = "Bebetter",
}: {
  className?: string;
  alt?: string;
}) {
  const [src, setSrc] = useState("/logo.png");

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setSrc("/logo-placeholder.svg")}
    />
  );
}
