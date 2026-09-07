import Link from "next/link";
import { FramerButton } from "@/components/framer";

export default function NotFound() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-8 px-6 text-center">
      <span className="t-wordmark text-brand-blue">404</span>
      <h1 className="t-h1">This page moved, or never existed</h1>
      <p className="t-body-big max-w-[520px] text-grey-30">
        Let&apos;s get you back to something useful.
      </p>
      <FramerButton
        locale=""
        variant="Cu4LsuqKq"
        O1r1SHWDe="Back home"
        YAeBepFkC="ArrowLeft"
        bGXKran9l="/"
        IzpkIlCCL="rgb(255, 255, 255)"
        E3sMJqdyg="rgb(67, 96, 255)"
        jbqbpFWTR="rgb(67, 96, 255)"
        iiNMG_vXP="rgb(255, 255, 255)"
        IJooVlaof="Back"
      />
      <Link href="/#contact" className="t-span-muted text-grey-50 underline">
        Or talk to us
      </Link>
    </main>
  );
}
