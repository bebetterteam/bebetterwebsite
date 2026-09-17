import Link from "next/link";
import Logo from "./Logo";
import { FramerButton } from "./framer";
import { contact, nav } from "@/lib/site";

/**
 * The Framer project links every CTA to /#contact but the home page has no
 * contact section built yet (only an empty ContactScrollSection, nodeId
 * aVJpnPsUq, and an unreadable Footer component, nodeId RFTG7A04t).
 * This section is built to the project's own type and colour styles so the
 * anchors resolve — swap the details below for the real ones.
 */
export default function Contact() {
  return (
    <footer
      id="contact"
      className="relative w-full overflow-hidden bg-dark-10 px-6 pt-[96px] pb-12 text-white md:pt-[160px]"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 md:gap-24">
        <div className="flex flex-col items-center gap-8 text-center">
          <h2 className="t-h1">{contact.title}</h2>
          <p className="t-body-big max-w-[640px] text-white/70">
            {contact.body}
          </p>
          <FramerButton
            locale=""
            variant="DolaGztjE"
            O1r1SHWDe={contact.cta.label}
            YAeBepFkC="Phone"
            bGXKran9l="mailto:hello@bebetter.co.th"
            IzpkIlCCL="rgb(189, 255, 92)"
            E3sMJqdyg="rgb(26, 26, 26)"
            jbqbpFWTR="rgb(26, 26, 26)"
            iiNMG_vXP="rgb(189, 255, 92)"
            IJooVlaof="Back"
          />
        </div>

        <div className="flex flex-col gap-10 border-t border-white/10 pt-12 md:flex-row md:justify-between">
          <div className="flex flex-col items-start gap-4">
            {/* The full lockup carries a black wordmark, which would vanish on
                this dark ground — pair the symbol with the wordmark as text. */}
            <span className="flex items-center gap-4">
              <Logo variant="mark" className="h-12 w-12 object-contain" />
              <span className="t-wordmark text-left">Bebetter</span>
            </span>
            <span className="t-span text-white/50">{contact.location}</span>
          </div>

          <nav className="flex flex-col gap-3">
            <span className="t-span-muted text-white/40">Menu</span>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="t-body-sm text-white/70 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="t-span-muted text-white/40">Get in touch</span>
            <a
              href="mailto:hello@bebetter.co.th"
              className="t-body-sm text-white/70 transition-colors hover:text-white"
            >
              hello@bebetter.co.th
            </a>
            <a
              href="https://line.me"
              className="t-body-sm text-white/70 transition-colors hover:text-white"
            >
              LINE OA
            </a>
            <Link
              href="/legal/privacy-policy"
              className="t-body-sm text-white/70 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/cookie-policy"
              className="t-body-sm text-white/70 transition-colors hover:text-white"
            >
              Cookie Policy
            </Link>
          </div>
        </div>

        <span className="t-span text-white/30">
          © {new Date().getFullYear()} Bebetter. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
