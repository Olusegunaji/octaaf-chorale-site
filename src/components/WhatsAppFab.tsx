import { buildWhatsAppLink, defaultWhatsAppMessage } from "@/lib/site-config";

export default function WhatsAppFab() {
  return (
    <a
      href={buildWhatsAppLink(defaultWhatsAppMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
    >
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.42.71 4.673 1.936 6.567L4 29l7.62-1.912A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75c-1.98 0-3.83-.55-5.41-1.5l-.388-.23-4.523 1.135 1.207-4.41-.253-.404A9.71 9.71 0 0 1 5.25 15c0-5.93 4.823-10.75 10.754-10.75S26.758 9.07 26.758 15 21.936 24.75 16.004 24.75Zm5.938-8.06c-.325-.163-1.923-.95-2.222-1.058-.298-.108-.516-.163-.733.163-.217.325-.842 1.058-1.032 1.276-.19.217-.38.244-.705.081-.325-.163-1.372-.505-2.613-1.611-.966-.861-1.618-1.925-1.808-2.25-.19-.325-.02-.5.143-.663.146-.146.325-.38.488-.57.163-.19.217-.325.325-.542.108-.217.054-.407-.027-.57-.081-.163-.733-1.766-1.005-2.419-.264-.634-.532-.548-.733-.558l-.624-.011c-.217 0-.57.081-.868.407-.298.325-1.14 1.113-1.14 2.717 0 1.604 1.167 3.153 1.33 3.37.163.217 2.296 3.506 5.562 4.917.777.335 1.383.535 1.856.685.78.248 1.489.213 2.05.13.625-.093 1.923-.786 2.194-1.545.271-.759.271-1.41.19-1.546-.081-.135-.298-.217-.624-.38Z" />
      </svg>
      <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-md bg-ink px-3 py-1.5 text-sm text-paper opacity-0 shadow-md ring-1 ring-ink-line transition-opacity group-hover:opacity-100">
        Chat on WhatsApp
      </span>
    </a>
  );
}
