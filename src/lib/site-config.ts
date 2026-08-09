export const siteConfig = {
  name: "Octaaf Chorale Ensemble",
  shortName: "Octaaf",
  tagline: "Voices in Perfect Octaves",
  description:
    "Octaaf Chorale Ensemble is a professional choral music ensemble based in Lagos, Nigeria, bringing rich, expertly rehearsed harmony to weddings, concerts, corporate events, church services and cultural celebrations.",
  url: "https://octaaf-chorale-site.vercel.app",
  location: "Lagos, Nigeria",
  whatsappNumber: "2348125953475",
  email: "hello@octaafchorale.com",
  instagram: "https://instagram.com/octaafchorale",
  youtube: "https://youtube.com/@octaafchorale",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/media", label: "Media" },
  { href: "/book", label: "Book Us" },
] as const;

export function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

export const defaultWhatsAppMessage =
  "Hello Octaaf Chorale Ensemble, I'd like to enquire about booking the ensemble for an event.";

export const videos = [
  {
    id: "iOJpuDUXZ7g",
    title: "Octaaf Chorale Ensemble — Performance",
  },
  {
    id: "sSMYj2COKKo",
    title: "Octaaf Chorale Ensemble — Performance",
  },
  {
    id: "yTBKbuVgiuU",
    title: "Octaaf Chorale Ensemble — Performance",
  },
] as const;

export const galleryPhotoCount = 37;

export const galleryPhotos = Array.from({ length: galleryPhotoCount }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return {
    src: `/gallery/photo-${num}.jpg`,
    alt: `Octaaf Chorale Ensemble performing at a live event`,
  };
});

export const eventTypes = [
  {
    title: "Weddings",
    description:
      "Processional, ceremony and reception music that turns your vows into an unforgettable moment.",
  },
  {
    title: "Corporate & Gala Events",
    description:
      "Polished, professional entertainment for product launches, award nights and executive dinners.",
  },
  {
    title: "Concerts & Recitals",
    description:
      "Full-length choral concerts spanning classical, contemporary, gospel and African choral repertoire.",
  },
  {
    title: "Church & Worship Services",
    description:
      "Guest choir performances, cantatas and special anniversary services delivered with reverence and skill.",
  },
  {
    title: "Cultural & Society Events",
    description:
      "Anniversaries, cultural festivals and society functions elevated with live a cappella and accompanied choral music.",
  },
  {
    title: "Private & Special Occasions",
    description:
      "Birthdays, vow renewals, memorials and intimate gatherings set to music tailored to the occasion.",
  },
] as const;
