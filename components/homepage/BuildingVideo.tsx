"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type BuildingVideoProps = {
  className?: string;
};

export default function BuildingVideo({ className }: BuildingVideoProps) {
  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1025px)");
    const onChange = (event: MediaQueryListEvent) => setIsLaptop(event.matches);

    setIsLaptop(mediaQuery.matches);
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  return (
    <div className={className}>
      {isLaptop ? (
        <video autoPlay loop muted playsInline preload="metadata" className="h-auto w-full" aria-label="Building network architecture showcase">
          <source src="/assets/homepage/Nurix Home Page Video.mp4" type="video/mp4" />
        </video>
      ) : (
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[20px] bg-white">
          <Image src="/assets/homepage/building.png" alt="Building network architecture" fill sizes="100vw" className="object-cover" />
        </div>
      )}
    </div>
  );
}
