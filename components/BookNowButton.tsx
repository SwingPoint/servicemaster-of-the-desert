import type { AnchorHTMLAttributes, ReactNode } from "react";
import { HOUSECALL_PRO } from "@/data/integrations";

type BookNowButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export default function BookNowButton({
  className = "",
  children,
  ...props
}: BookNowButtonProps) {
  return (
    <a
      href={HOUSECALL_PRO.bookingPageUrl}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}
