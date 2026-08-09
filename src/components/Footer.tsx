import Link from "next/link";
import Image from "next/image";
import { navLinks, siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink-soft">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <span className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-gold/40">
                <Image
                  src="/brand/octaaf-logo.jpg"
                  alt={`${siteConfig.name} logo`}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </span>
              <span className="font-display text-lg text-paper">
                Octaaf Chorale Ensemble
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/60">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-gold">
              Explore
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-paper/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-gold">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-paper/70">
              <li>{siteConfig.location}</li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-gold"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  WhatsApp: +{siteConfig.whatsappNumber}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-ink-line pt-6 text-xs text-paper/40 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p>Lagos, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
