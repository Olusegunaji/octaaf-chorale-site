import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildWhatsAppLink, musicDirector } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Music Director",
  description: `Meet ${musicDirector.name}, ${musicDirector.role} of Octaaf Chorale Ensemble, the Lagos-based professional choral ensemble.`,
};

export default function DirectorPage() {
  return (
    <>
      <section className="border-b border-ink-line bg-ink-soft py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            Our Leadership
          </p>
          <h1 className="font-display mt-4 text-balance text-4xl text-paper sm:text-5xl">
            Music Director
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-ink-line">
            <Image
              src={musicDirector.photo}
              alt={`${musicDirector.name}, ${musicDirector.role} of Octaaf Chorale Ensemble`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl text-paper">
              {musicDirector.name}
            </h2>
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-gold">
              {musicDirector.role}
            </p>
            <p className="mt-6 leading-relaxed text-paper/70">
              {musicDirector.bio}
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink-soft to-ink" />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="font-display text-balance text-3xl text-paper sm:text-4xl">
            Let&apos;s make your event unforgettable
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/book"
              className="w-full rounded-full bg-gold px-8 py-3.5 text-sm font-medium uppercase tracking-wider text-ink transition-transform hover:scale-105 sm:w-auto"
            >
              Book Us Now
            </Link>
            <a
              href={buildWhatsAppLink(
                "Hello Octaaf Chorale Ensemble, I'd like to know more about the ensemble.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border border-paper/30 px-8 py-3.5 text-sm font-medium uppercase tracking-wider text-paper transition-colors hover:border-gold hover:text-gold sm:w-auto"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
