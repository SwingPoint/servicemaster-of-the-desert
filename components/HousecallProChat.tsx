"use client";

import Script from "next/script";
import { HOUSECALL_PRO } from "@/data/integrations";

export default function HousecallProChat() {
  return (
    <Script
      id="housecall-pro-chat-bubble"
      src="https://chat.housecallpro.com/proChat.js"
      strategy="lazyOnload"
      data-color={HOUSECALL_PRO.chatColor}
      data-organization={HOUSECALL_PRO.organizationId}
      data-type="lazy"
    />
  );
}
