import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Book Us",
  description:
    "Book Octaaf Chorale Ensemble for your wedding, concert, corporate event or church service in Lagos, Nigeria. Reach out via WhatsApp or email.",
};

const faqs = [
  {
    q: "How far in advance should we book?",
    a: "We recommend booking at least 4–6 weeks ahead, especially during peak wedding and December seasons, though we do our best to accommodate shorter notice.",
  },
  {
    q: "How many singers perform at an event?",
    a: "Ensemble size is flexible — from a small vocal group to a full choir — depending on your venue, budget and the scale of your event.",
  },
  {
    q: "Do you take song requests?",
    a: "Yes. Share your preferred repertoire, and we'll work it into rehearsal alongside our own recommendations for your event.",
  },
  {
    q: "Do you travel outside Lagos?",
    a: "Yes, we perform outside Lagos for the right engagement. Let us know your location and we'll confirm availability and logistics.",
  },
];

export default function BookPage() {
  return (
    <>
      <section className="border-b border-ink-line bg-ink-soft py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            Book Us
          </p>
          <h1 className="font-display mt-4 text-balance text-4xl text-paper sm:text-5xl">
            Let&apos;s Plan Your Event
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-paper/70">
            Share a few details and we&apos;ll reach out on WhatsApp to
            discuss availability, repertoire and pricing.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-ink-line bg-ink-soft p-6 sm:p-10">
            <h2 className="font-display text-2xl text-paper">
              Event Enquiry
            </h2>
            <p className="mt-2 text-sm text-paper/60">
              Fields marked required help us respond faster.
            </p>
            <div className="mt-8">
              <BookingForm />
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl text-paper">
              Prefer to reach us directly?
            </h2>
            <div className="mt-6 space-y-4">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-ink-line bg-ink-soft p-5 transition-colors hover:border-gold/50"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                  <svg
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.42.71 4.673 1.936 6.567L4 29l7.62-1.912A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75c-1.98 0-3.83-.55-5.41-1.5l-.388-.23-4.523 1.135 1.207-4.41-.253-.404A9.71 9.71 0 0 1 5.25 15c0-5.93 4.823-10.75 10.754-10.75S26.758 9.07 26.758 15 21.936 24.75 16.004 24.75Zm5.938-8.06c-.325-.163-1.923-.95-2.222-1.058-.298-.108-.516-.163-.733.163-.217.325-.842 1.058-1.032 1.276-.19.217-.38.244-.705.081-.325-.163-1.372-.505-2.613-1.611-.966-.861-1.618-1.925-1.808-2.25-.19-.325-.02-.5.143-.663.146-.146.325-.38.488-.57.163-.19.217-.325.325-.542.108-.217.054-.407-.027-.57-.081-.163-.733-1.766-1.005-2.419-.264-.634-.532-.548-.733-.558l-.624-.011c-.217 0-.57.081-.868.407-.298.325-1.14 1.113-1.14 2.717 0 1.604 1.167 3.153 1.33 3.37.163.217 2.296 3.506 5.562 4.917.777.335 1.383.535 1.856.685.78.248 1.489.213 2.05.13.625-.093 1.923-.786 2.194-1.545.271-.759.271-1.41.19-1.546-.081-.135-.298-.217-.624-.38Z" />
                  </svg>
                </span>
                <span>
                  <span className="block text-sm text-paper/60">
                    WhatsApp
                  </span>
                  <span className="block text-paper">
                    +{siteConfig.whatsappNumber}
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 rounded-xl border border-ink-line bg-ink-soft p-5 transition-colors hover:border-gold/50"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold text-ink">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-13Zm2.2.5 7.8 6.4L19.8 6H4.2Zm15.8 1.6-7.5 6.2a1 1 0 0 1-1.28 0L4 7.6V18h16V7.6Z" />
                  </svg>
                </span>
                <span>
                  <span className="block text-sm text-paper/60">Email</span>
                  <span className="block text-paper">{siteConfig.email}</span>
                </span>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-ink-line bg-ink-soft p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/60 text-gold">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
                  </svg>
                </span>
                <span>
                  <span className="block text-sm text-paper/60">
                    Based in
                  </span>
                  <span className="block text-paper">
                    {siteConfig.location}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink-line bg-ink-soft py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="font-display text-center text-3xl text-paper">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 divide-y divide-ink-line">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-6">
                <h3 className="text-paper">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/60">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
