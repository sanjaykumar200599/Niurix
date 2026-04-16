"use client";

import { useEffect, useRef, useState } from "react";

type BuildingVideoProps = {
  className?: string;
};

export default function BuildingVideo({ className }: BuildingVideoProps) {
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
    <div ref={wrapperRef} className={className}>
      <video
        autoPlay={shouldLoadVideo}
        loop
        muted
        playsInline
        preload={shouldLoadVideo ? "metadata" : "none"}
        className="h-auto w-full bg-[#f3f3f3]"
        aria-label="Building network architecture showcase"
      >
        {shouldLoadVideo ? <source src="/assets/homepage/Nurix Home Page Video.mp4" type="video/mp4" /> : null}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
