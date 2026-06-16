import { HOUSECALL_PRO } from "@/data/integrations";

type HousecallProBookingProps = {
  className?: string;
  title?: string;
};

export default function HousecallProBooking({
  className = "",
  title = "Book service online",
}: HousecallProBookingProps) {
  return (
    <section className={className} aria-label={title}>
      <iframe
        src={HOUSECALL_PRO.bookingUrl}
        title={title}
        className="h-[720px] w-full rounded-[12px] border border-desert-sand bg-white"
        loading="lazy"
      />
    </section>
  );
}
