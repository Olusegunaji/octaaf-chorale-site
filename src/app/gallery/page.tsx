import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import { galleryPhotos } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos of Octaaf Chorale Ensemble performing at weddings, church services, concerts and events across Lagos, Nigeria.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="border-b border-ink-line bg-ink-soft py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            Gallery
          </p>
          <h1 className="font-display mt-4 text-balance text-4xl text-paper sm:text-5xl">
            Moments Captured in Song
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-paper/70">
            A look at Octaaf Chorale Ensemble in performance — from
            ceremonies to concerts. Click any photo to view it full size.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <GalleryGrid photos={[...galleryPhotos]} />
      </section>
    </>
  );
}
