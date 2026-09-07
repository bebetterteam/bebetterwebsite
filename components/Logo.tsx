"use client";

import { useState } from "react";

/**
 * Bebetter mark.
 *
 * `public/logo-source.png` is the file as supplied (opaque white background).
 * `public/logo.png` is that file with the background knocked out, and
 * `public/logo-mark.png` is the symbol on its own, without the "BE BETTER"
 * wordmark — both generated from the source, so replacing the source and
 * re-running the same step regenerates them.
 *
 * A plain <img> is used on purpose: next/image would fail the build if the file
 * were missing, and the onError fallback keeps the page intact either way.
 */
export default function Logo({
  variant = "lockup",
  className = "",
  alt = "Bebetter",
}: {
  variant?: "lockup" | "mark";
  className?: string;
  alt?: string;
}) {
  const [src, setSrc] = useState(
    variant === "mark" ? "/logo-mark.png" : "/logo.png",
  );

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
