"use client";

export default function InstallMedia() {
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
      Your browser does not support the video tag.
    </video>
  );
}
