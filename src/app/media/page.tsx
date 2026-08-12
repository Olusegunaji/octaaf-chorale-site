import type { Metadata } from "next";
import Link from "next/link";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { siteConfig, videos } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Watch Octaaf Chorale Ensemble perform. Video highlights from live performances by the Lagos-based professional choral ensemble.",
};

export default function MediaPage() {
  return (
    <>
      <section className="border-b border-ink-line bg-ink-soft py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            Media
          </p>
          <h1 className="font-display mt-4 text-balance text-4xl text-paper sm:text-5xl">
            Watch Us Perform
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-paper/70">
            Video highlights from Octaaf Chorale Ensemble performances.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          {videos.map((video) => (
            <div key={video.id}>
              <YouTubeEmbed videoId={video.id} title={video.title} />
              <h3 className="font-display mt-4 text-lg text-paper">
                {video.title}
              </h3>
              <p className="mt-1 text-sm text-paper/60">{video.credit}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-paper/70">
            Subscribe to our channel for more performances.
          </p>
          <a
            href={siteConfig.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block rounded-full border border-gold/70 px-8 py-3 text-sm uppercase tracking-wider text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            Visit Our YouTube Channel
          </a>
        </div>
      </section>

      <section className="border-t border-ink-line bg-ink-soft py-16">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="font-display text-3xl text-paper">
            Want us at your next event?
          </h2>
          <div className="mt-8">
            <Link
              href="/book"
              className="inline-block rounded-full bg-gold px-8 py-3.5 text-sm font-medium uppercase tracking-wider text-ink transition-transform hover:scale-105"
            >
              Book Us Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
