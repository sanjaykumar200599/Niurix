"use client";

type BuildingVideoProps = {
  className?: string;
};

export default function BuildingVideo({ className }: BuildingVideoProps) {
  return (
    <div className={className}>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/assets/homepage/building.png"
        className="h-auto w-full"
        aria-label="Building network architecture showcase"
      >
        <source src="/assets/homepage/Nurix Home Page Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
