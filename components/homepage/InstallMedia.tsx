"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function InstallMedia() {
  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1025px)");
    const onChange = (event: MediaQueryListEvent) => setIsLaptop(event.matches);

    setIsLaptop(mediaQuery.matches);
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  if (!isLaptop) {
    return (
      <div className="relative aspect-[16/9] w-full bg-white">
        <Image
          src="/assets/homepage/Box Together.webp"
          alt="Easy to install preview"
          fill
          sizes="(max-width: 1024px) 100vw, 0px"
          className="object-contain"
        />
      </div>
    );
  }

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      poster="/assets/homepage/Box Together.webp"
      className="aspect-[16/9] w-full bg-white object-contain"
      aria-label="Easy to install animation"
    >
      <source src="/assets/homepage/Niurixinstall.mp4" type="video/mp4" />
      <source src="/assets/homepage/Nurix Home Page Video.mp4" type="video/mp4" />
    </video>
  );
}
