"use client";

import Image from "next/image";

type InteractiveSVGDiagramProps = {
  src: string;
  alt: string;
};

export default function InteractiveSVGDiagram({ src, alt }: InteractiveSVGDiagramProps) {
  return (
    <div className="relative h-[320px] w-full tablet:h-[420px] laptop:h-[520px]">
      <Image src={src} alt={alt} fill className="object-contain" />
    </div>
  );
}
