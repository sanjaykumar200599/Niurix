import React from "react";

type BuildingVideoProps = {
  className?: string;
};

export default function BuildingVideo({ className }: BuildingVideoProps) {
  return (
    <div className={className}>
      <video autoPlay loop muted playsInline className="h-auto w-full">
        <source src="/assets/homepage/Nurix Home Page Video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
