"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { HOUSECALL_PRO } from "@/data/integrations";

declare global {
  interface Window {
    HCPWidget?: {
      openModal: () => void;
    };
  }
}

type BookNowButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function BookNowButton({
  className = "",
  children,
  type = "button",
  onClick,
  ...props
}: BookNowButtonProps) {
  return (
    <button
      type={type}
      data-token={HOUSECALL_PRO.bookingToken}
      data-orgname={HOUSECALL_PRO.bookingOrgName}
      className={`hcp-button ${className}`.trim()}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          window.HCPWidget?.openModal();
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
}
