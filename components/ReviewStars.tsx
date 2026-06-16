export default function ReviewStars({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex gap-0.5 text-[#F59E0B] ${className}`}
      aria-label="5 out of 5 stars"
      role="img"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  );
}
