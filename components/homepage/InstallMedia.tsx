"use client";

import { useEffect, useRef, useState } from "react";

export default function InstallMedia() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const node = wrapperRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapperRef}>
      <video
        autoPlay={shouldLoadVideo}
        loop
        muted
        playsInline
        preload={shouldLoadVideo ? "metadata" : "none"}
        poster="/assets/homepage/Box Together.webp"
        className="h-[220px] w-full bg-white object-contain tablet:h-[320px] laptop:h-auto laptop:aspect-[16/9]"
        aria-label="Easy to install animation"
      >
        {shouldLoadVideo ? <source src="/assets/homepage/Niurixinstall.mp4" type="video/mp4" /> : null}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
