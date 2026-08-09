import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Octaaf Chorale Ensemble, a professional choral ensemble based in Lagos, Nigeria, performing classical, gospel, contemporary and African choral music.",
};

const values = [
  {
    title: "Musical Excellence",
    description:
      "Every performance is built on disciplined rehearsal, strong technique and genuine musicianship.",
  },
  {
    title: "Versatility",
    description:
      "From classical choral works to gospel, contemporary and African arrangements, we adapt our sound to your event.",
  },
  {
    title: "Professionalism",
    description:
      "Punctual, well-rehearsed and easy to work with — we treat every engagement, large or small, with the same care.",
  },
  {
    title: "Community",
    description:
      "We are a collective of dedicated vocalists who share a love for choral music and for lifting the rooms we sing in.",
  },
];

const repertoire = [
  "Classical & Sacred Choral Works",
  "Gospel & Contemporary Worship",
  "African Choral Arrangements",
  "Wedding Processionals & Recessionals",
  "Contemporary Pop & Soul A Cappella",
  "Cultural & Traditional Selections",
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-ink-line bg-ink-soft py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            About Us
          </p>
          <h1 className="font-display mt-4 text-balance text-4xl text-paper sm:text-5xl">
            Voices in Perfect Octaves
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-ink-line">
            <Image
              src="/gallery/photo-05.jpg"
              alt="Octaaf Chorale Ensemble members in performance robes"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">
              Our Story
            </p>
            <h2 className="font-display mt-4 text-3xl text-paper">
              A Lagos ensemble built on discipline and harmony
            </h2>
            <p className="mt-6 leading-relaxed text-paper/70">
              Octaaf Chorale Ensemble is a professional choral group based in
              Lagos, Nigeria, made up of trained vocalists who come together
              around a shared standard: every performance should be rehearsed
              with rigor and delivered with genuine feeling.
            </p>
            <p className="mt-4 leading-relaxed text-paper/70">
              We perform across weddings, corporate functions, concerts,
              church services and cultural events — bringing a repertoire
              that spans classical choral tradition, gospel, contemporary
              arrangements and African choral music. Whether it&apos;s an
              intimate ceremony or a full-scale production, we tailor our
              sound, size and set list to the occasion.
            </p>
            <p className="mt-4 leading-relaxed text-paper/70">
              Our name reflects what we aim for in every performance: voices
              in perfect octaves, singing as one.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink-soft py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">
              What Guides Us
            </p>
            <h2 className="font-display mt-4 text-3xl text-paper sm:text-4xl">
              Our Values
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-ink-line bg-ink p-6"
              >
                <h3 className="font-display text-lg text-gold">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/65">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            Our Sound
          </p>
          <h2 className="font-display mt-4 text-3xl text-paper sm:text-4xl">
            Repertoire
          </h2>
        </div>
        <ul className="mx-auto mt-12 grid max-w-3xl gap-x-8 gap-y-4 sm:grid-cols-2">
          {repertoire.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 border-b border-ink-line py-3 text-paper/80"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              {item}
            </li>
          ))}
        </ul>
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
