import type { OccasionIconId } from "@/lib/site-config";

const paths: Record<OccasionIconId, React.ReactNode> = {
  wedding: (
    <>
      <circle cx="9.5" cy="14.5" r="5" />
      <circle cx="16.5" cy="14.5" r="5" />
      <path d="M13 6.5 9.5 9.5M13 6.5l3.5 3M13 6.5V4" />
    </>
  ),
  gala: (
    <>
      <path d="M4 6h16l-2.5 5a5.5 5.5 0 0 1-11 0L4 6Z" />
      <path d="M12 16.5V20M8.5 20h7" />
      <path d="M4 6c0 1.5 1.5 2.5 3 2M20 6c0 1.5-1.5 2.5-3 2" />
    </>
  ),
  concert: (
    <>
      <circle cx="8" cy="17.5" r="2.5" />
      <path d="M10.5 17.5V5.5L19 4v10" />
      <circle cx="16.5" cy="16" r="2.5" />
      <path d="M4 20.5c1.2-1.5 2.8-1.5 4 0M16 20.5c1.2-1.5 2.8-1.5 4 0" opacity=".6" />
    </>
  ),
  church: (
    <>
      <path d="M12 3v3M10.5 4.5h3" />
      <path d="M12 6l7 6h-3v9H8v-9H5l7-6Z" />
      <path d="M12 12v3M10.5 13.5h3" />
    </>
  ),
  cultural: (
    <>
      <path d="M8 5.5c0-1 1-1.5 2-1.5h4c1 0 2 .5 2 1.5v3c0 1-1 1.5-2 1.5H10c-1 0-2-.5-2-1.5v-3Z" />
      <path d="M9.5 10v9.5M14.5 10v9.5" />
      <path d="M7 19.5h10" />
      <path d="M9.5 14.5h5" opacity=".6" />
    </>
  ),
  private: (
    <>
      <rect x="4.5" y="10" width="15" height="10" rx="1" />
      <path d="M4.5 14h15" />
      <path d="M12 10v10" />
      <path d="M12 10c-1.8 0-3.2-1.1-3.2-3S10.2 4 12 6c1.8-2 3.2-1 3.2 1s-1.4 3-3.2 3Z" />
    </>
  ),
};

export default function OccasionIcon({ icon }: { icon: OccasionIconId }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
      aria-hidden="true"
    >
      {paths[icon]}
    </svg>
  );
}
