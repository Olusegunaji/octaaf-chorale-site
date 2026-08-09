"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/site-config";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-line/60 bg-ink/90 backdrop-blur supports-[backdrop-filter]:bg-ink/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-gold/40">
            <Image
              src="/brand/octaaf-logo.jpg"
              alt={`${siteConfig.name} logo`}
              fill
              sizes="44px"
              className="object-cover"
              loading="eager"
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg tracking-wide text-paper">
              Octaaf
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold">
              Chorale Ensemble
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm uppercase tracking-wider transition-colors hover:text-gold ${
                  active ? "text-gold" : "text-paper/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/book"
          className="hidden rounded-full border border-gold/70 px-5 py-2 text-sm uppercase tracking-wider text-gold transition-colors hover:bg-gold hover:text-ink md:inline-block"
        >
          Book Us
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-line text-paper md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-px w-5 bg-paper transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-paper transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-paper transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {open && (
        <nav className="border-t border-ink-line bg-ink px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm uppercase tracking-wider text-paper/90 hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
