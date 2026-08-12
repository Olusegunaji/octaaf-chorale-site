export type ValueIconId = "excellence" | "versatility" | "professionalism" | "community";

const paths: Record<ValueIconId, React.ReactNode> = {
  excellence: (
    <>
      <path d="M12 3.5 14 9l5.5.5-4.2 3.7 1.3 5.3L12 15.7l-4.6 2.8 1.3-5.3-4.2-3.7L10 9l2-5.5Z" />
    </>
  ),
  versatility: (
    <>
      <path d="M4 8h11l-2.2-2.2M15 8l-2.2 2.2" />
      <path d="M20 16H9l2.2-2.2M9 16l2.2 2.2" />
    </>
  ),
  professionalism: (
    <>
      <path d="M12 3v3M8.5 6h7l-1.5 3 1.5 3h-7l1.5-3-1.5-3Z" />
      <path d="M7 21v-5a5 5 0 0 1 10 0v5" />
      <path d="M4 21h16" />
    </>
  ),
  community: (
    <>
      <circle cx="9" cy="9" r="3" />
      <circle cx="16.5" cy="10" r="2.5" />
      <path d="M3.5 19.5c.6-3 2.7-4.5 5.5-4.5s4.9 1.5 5.5 4.5" />
      <path d="M15 15.5c2.2.2 3.7 1.6 4.2 4" />
    </>
  ),
};

export default function ValueIcon({ icon }: { icon: ValueIconId }) {
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
