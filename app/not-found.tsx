import Link from "next/link";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-8 px-6 text-center">
      <span className="t-wordmark text-brand-blue">404</span>
      <h1 className="t-h1">This page moved, or never existed</h1>
      <p className="t-body-big max-w-[520px] text-grey-30">
        Let&apos;s get you back to something useful.
      </p>
      <Button label="Back home" href="/" icon="ArrowLeft" />
      <Link href="/#contact" className="t-span-muted text-grey-50 underline">
        Or talk to us
      </Link>
    </main>
  );
}
