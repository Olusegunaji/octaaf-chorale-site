import type { Metadata } from "next";
import Link from "next/link";
import { buildWhatsAppLink, upcomingEvents } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Upcoming Events",
  description:
    "Upcoming events and performances by Octaaf Chorale Ensemble, the Lagos-based professional choral ensemble.",
};

export default function EventsPage() {
  return (
    <>
      <section className="border-b border-ink-line bg-ink-soft py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            Events
          </p>
          <h1 className="font-display mt-4 text-balance text-4xl text-paper sm:text-5xl">
            Upcoming Events
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-paper/70">
            Join us at our next performance.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
        {upcomingEvents.length > 0 ? (
          <div className="grid gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.title + event.isoDate}
                className="rounded-xl border border-ink-line bg-ink-soft p-8"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-gold">
                  {event.date}
                </p>
                <h2 className="font-display mt-3 text-2xl text-paper sm:text-3xl">
                  {event.title}
                </h2>
                <p className="mt-4 leading-relaxed text-paper/70">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-paper/70">
            No upcoming events at the moment — check back soon.
          </p>
        )}

        <div className="mt-16 text-center">
          <p className="text-paper/70">
            Want us to perform at your event?
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/book"
              className="w-full rounded-full bg-gold px-8 py-3.5 text-sm font-medium uppercase tracking-wider text-ink transition-transform hover:scale-105 sm:w-auto"
            >
              Book Us Now
            </Link>
            <a
              href={buildWhatsAppLink(
                "Hello Octaaf Chorale Ensemble, I'd like to know more about your upcoming events.",
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
