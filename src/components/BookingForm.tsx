"use client";

import { useState, type FormEvent } from "react";
import { buildWhatsAppLink, eventTypes } from "@/lib/site-config";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [eventType, setEventType] = useState<string>(eventTypes[0].title);
  const [eventDate, setEventDate] = useState("");
  const [venue, setVenue] = useState("");
  const [details, setDetails] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const lines = [
      "Hello Octaaf Chorale Ensemble, I'd like to book the ensemble.",
      "",
      `Name: ${name}`,
      `Event type: ${eventType}`,
      eventDate ? `Event date: ${eventDate}` : null,
      venue ? `Venue / Location: ${venue}` : null,
      details ? `Additional details: ${details}` : null,
    ].filter(Boolean);

    window.open(buildWhatsAppLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  const inputClasses =
    "w-full rounded-lg border border-ink-line bg-ink px-4 py-3 text-paper placeholder:text-paper/40 focus:border-gold focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm text-paper/70">
          Your Name
        </label>
        <input
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Doe"
          className={inputClasses}
        />
      </div>

      <div>
        <label
          htmlFor="eventType"
          className="mb-2 block text-sm text-paper/70"
        >
          Event Type
        </label>
        <select
          id="eventType"
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          className={inputClasses}
        >
          {eventTypes.map((event) => (
            <option key={event.title} value={event.title}>
              {event.title}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="eventDate"
            className="mb-2 block text-sm text-paper/70"
          >
            Event Date
          </label>
          <input
            id="eventDate"
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="venue" className="mb-2 block text-sm text-paper/70">
            Venue / Location
          </label>
          <input
            id="venue"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            placeholder="e.g. Victoria Island, Lagos"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="details" className="mb-2 block text-sm text-paper/70">
          Tell us more
        </label>
        <textarea
          id="details"
          rows={4}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Guest count, preferred repertoire, duration, budget range, etc."
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-sm font-medium uppercase tracking-wider text-ink transition-transform hover:scale-[1.02]"
      >
        <svg
          viewBox="0 0 32 32"
          fill="currentColor"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.42.71 4.673 1.936 6.567L4 29l7.62-1.912A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75c-1.98 0-3.83-.55-5.41-1.5l-.388-.23-4.523 1.135 1.207-4.41-.253-.404A9.71 9.71 0 0 1 5.25 15c0-5.93 4.823-10.75 10.754-10.75S26.758 9.07 26.758 15 21.936 24.75 16.004 24.75Zm5.938-8.06c-.325-.163-1.923-.95-2.222-1.058-.298-.108-.516-.163-.733.163-.217.325-.842 1.058-1.032 1.276-.19.217-.38.244-.705.081-.325-.163-1.372-.505-2.613-1.611-.966-.861-1.618-1.925-1.808-2.25-.19-.325-.02-.5.143-.663.146-.146.325-.38.488-.57.163-.19.217-.325.325-.542.108-.217.054-.407-.027-.57-.081-.163-.733-1.766-1.005-2.419-.264-.634-.532-.548-.733-.558l-.624-.011c-.217 0-.57.081-.868.407-.298.325-1.14 1.113-1.14 2.717 0 1.604 1.167 3.153 1.33 3.37.163.217 2.296 3.506 5.562 4.917.777.335 1.383.535 1.856.685.78.248 1.489.213 2.05.13.625-.093 1.923-.786 2.194-1.545.271-.759.271-1.41.19-1.546-.081-.135-.298-.217-.624-.38Z" />
        </svg>
        Send via WhatsApp
      </button>
      <p className="text-center text-xs text-paper/40">
        This opens WhatsApp with your details pre-filled — nothing is sent
        until you hit send in WhatsApp.
      </p>
    </form>
  );
}
