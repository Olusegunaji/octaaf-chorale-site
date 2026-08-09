import Link from "next/link";
import Image from "next/image";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import {
  buildWhatsAppLink,
  eventTypes,
  galleryPhotos,
  siteConfig,
  videos,
} from "@/lib/site-config";

export default function Home() {
  const previewPhotos = galleryPhotos.slice(0, 8);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <Image
          src="/gallery/photo-25.jpg"
          alt="Octaaf Chorale Ensemble performing live on stage"
          fill
          sizes="100vw"
          loading="eager"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink" />
        <div className="relative mx-auto max-w-4xl px-5 py-32 text-center sm:px-8">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">
            {siteConfig.location}
          </p>
          <h1 className="font-display mt-5 text-balance text-4xl font-semibold leading-tight text-paper sm:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-5 text-balance text-lg text-paper/80 sm:text-xl">
            {siteConfig.tagline} — professional choral artistry for weddings,
            concerts, church services and corporate occasions across Lagos
            and beyond.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={buildWhatsAppLink(
                "Hello Octaaf Chorale Ensemble, I'd like to enquire about booking the ensemble for an event.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-gold px-8 py-3.5 text-sm font-medium uppercase tracking-wider text-ink transition-transform hover:scale-105 sm:w-auto"
            >
              Book the Ensemble
            </a>
            <Link
              href="/gallery"
              className="w-full rounded-full border border-paper/30 px-8 py-3.5 text-sm font-medium uppercase tracking-wider text-paper transition-colors hover:border-gold hover:text-gold sm:w-auto"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="mx-auto max-w-5xl px-5 py-24 text-center sm:px-8">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">
          Who We Are
        </p>
        <h2 className="font-display mt-4 text-balance text-3xl text-paper sm:text-4xl">
          A professional choral ensemble, rooted in Lagos
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-balance leading-relaxed text-paper/70">
          Octaaf Chorale Ensemble brings together trained, dedicated voices
          performing classical, contemporary, gospel and African choral
          repertoire. From intimate ceremonies to full-scale productions, we
          rehearse with precision and perform with heart — so every note
          lands exactly where it should.
        </p>
        <Link
          href="/about"
          className="mt-8 inline-block text-sm uppercase tracking-wider text-gold hover:underline"
        >
          Learn more about the ensemble →
        </Link>
      </section>

      {/* What we offer */}
      <section className="bg-ink-soft py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">
              What We Offer
            </p>
            <h2 className="font-display mt-4 text-3xl text-paper sm:text-4xl">
              Music for Every Occasion
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {eventTypes.map((event) => (
              <div
                key={event.title}
                className="rounded-xl border border-ink-line bg-ink p-7 transition-colors hover:border-gold/50"
              >
                <h3 className="font-display text-xl text-gold">
                  {event.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/65">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured video */}
      <section className="mx-auto max-w-4xl px-5 py-24 sm:px-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            Watch &amp; Listen
          </p>
          <h2 className="font-display mt-4 text-3xl text-paper sm:text-4xl">
            Hear Us in Full Voice
          </h2>
        </div>
        <div className="mt-12">
          <YouTubeEmbed videoId={videos[0].id} title={videos[0].title} />
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/media"
            className="text-sm uppercase tracking-wider text-gold hover:underline"
          >
            Watch more performances →
          </Link>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="bg-ink-soft py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">
              Moments
            </p>
            <h2 className="font-display mt-4 text-3xl text-paper sm:text-4xl">
              From Our Recent Performances
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {previewPhotos.map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-square overflow-hidden rounded-lg ring-1 ring-ink-line"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/gallery"
              className="inline-block rounded-full border border-gold/70 px-8 py-3 text-sm uppercase tracking-wider text-gold transition-colors hover:bg-gold hover:text-ink"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink-soft to-ink" />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="font-display text-balance text-3xl text-paper sm:text-4xl">
            Ready to bring Octaaf Chorale Ensemble to your event?
          </h2>
          <p className="mt-4 text-paper/70">
            Tell us your date, venue and vision — we&apos;ll take it from
            there.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/book"
              className="w-full rounded-full bg-gold px-8 py-3.5 text-sm font-medium uppercase tracking-wider text-ink transition-transform hover:scale-105 sm:w-auto"
            >
              Book Us Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
