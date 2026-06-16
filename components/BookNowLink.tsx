import type { ReactNode } from "react";
import { HOUSECALL_PRO } from "@/data/integrations";

type BookNowLinkProps = {
  className?: string;
  children: ReactNode;
};

export default function BookNowLink({ className, children }: BookNowLinkProps) {
  return (
    <a
      href={HOUSECALL_PRO.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
