"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    __niurixGtmLoaded?: boolean;
    dataLayer?: unknown[];
  }
}

type DeferredAnalyticsProps = {
  gtmId: string;
};

export default function DeferredAnalytics({ gtmId }: DeferredAnalyticsProps) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (!gtmId) return;

    const triggerLoad = () => setShouldLoad(true);
    const timer = window.setTimeout(triggerLoad, 8000);
    const events: Array<keyof WindowEventMap> = ["scroll", "mousemove", "keydown", "touchstart", "click"];

    for (const eventName of events) {
      window.addEventListener(eventName, triggerLoad, { passive: true, once: true });
    }

    return () => {
      window.clearTimeout(timer);
      for (const eventName of events) {
        window.removeEventListener(eventName, triggerLoad);
      }
    };
  }, [gtmId]);

  if (!gtmId) return null;

  return (
    <>
      {shouldLoad ? (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){
            if (w.__niurixGtmLoaded) return;
            w.__niurixGtmLoaded = true;
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
      ) : null}

      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
}
