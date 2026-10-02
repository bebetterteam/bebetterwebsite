"use client";

import isPropValid from "@emotion/is-prop-valid";
import { MotionConfig } from "unframer";

/**
 * Unframer's bundled framer-motion only drops non-DOM props (motionChild,
 * scopeId, __withFX, parentSize...) when @emotion/is-prop-valid is loaded,
 * and its own require() of it fails inside the ESM bundle. Registering the
 * validator here keeps those Framer props off the DOM, on server and client.
 */
export default function FramerMotionConfig({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <MotionConfig isValidProp={isPropValid}>{children}</MotionConfig>;
}
