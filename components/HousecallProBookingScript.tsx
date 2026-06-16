"use client";

import Script from "next/script";
import { HOUSECALL_PRO } from "@/data/integrations";

export default function HousecallProBookingScript() {
  return (
    <Script
      id="housecall-pro-booking"
      src={HOUSECALL_PRO.bookingScriptUrl}
      strategy="lazyOnload"
      async
    />
  );
}
