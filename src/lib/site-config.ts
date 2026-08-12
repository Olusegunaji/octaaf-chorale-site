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
  instagram: "https://www.instagram.com/oct_aaf/",
  youtube: "https://youtube.com/@octaafchorale",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/media", label: "Media" },
  { href: "/events", label: "Events" },
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

export const musicDirector = {
  name: "Mr Tope Olagunju",
  role: "Music Director",
  photo: "/team/tope-olagunju.jpg",
  bio: "Tope Olagunju is the Music Director of Octaaf Chorale Ensemble, leading the ensemble's rehearsals, arrangements and performances across weddings, concerts, church services and corporate events. With a strong foundation in organ and choral direction, he shapes the ensemble's sound — from classical and sacred choral works to gospel and contemporary arrangements — bringing discipline, precision and heart to every performance.",
} as const;

export const upcomingEvents = [
  {
    title: "Christmas Concert",
    date: "Sunday, 6th December 2026",
    isoDate: "2026-12-06",
    description:
      "Join Octaaf Chorale Ensemble for an evening of festive choral music celebrating the season.",
  },
] as const;

export const eventTypes = [
  {
    title: "Weddings",
    icon: "wedding",
    description:
      "Processional, ceremony and reception music that turns your vows into an unforgettable moment.",
  },
  {
    title: "Corporate & Gala Events",
    icon: "gala",
    description:
      "Polished, professional entertainment for product launches, award nights and executive dinners.",
  },
  {
    title: "Concerts & Recitals",
    icon: "concert",
    description:
      "Full-length choral concerts spanning classical, contemporary, gospel and African choral repertoire.",
  },
  {
    title: "Church & Worship Services",
    icon: "church",
    description:
      "Guest choir performances, cantatas and special anniversary services delivered with reverence and skill.",
  },
  {
    title: "Cultural & Society Events",
    icon: "cultural",
    description:
      "Anniversaries, cultural festivals and society functions elevated with live a cappella and accompanied choral music.",
  },
  {
    title: "Private & Special Occasions",
    icon: "private",
    description:
      "Birthdays, vow renewals, memorials and intimate gatherings set to music tailored to the occasion.",
  },
] as const;

export type OccasionIconId = (typeof eventTypes)[number]["icon"];
