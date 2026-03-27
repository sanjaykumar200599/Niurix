"use client";

import Image from "next/image";
import { useState } from "react";

type InteractiveSVGDiagramProps = {
  src: string;
  alt: string;
  productSlug?: string;
};

function Marker({ className, iconSrc, alt, ringClass }: { className: string; iconSrc: string; alt: string; ringClass: string }) {
  return (
    <div className={`absolute ${className}`}>
      <div className={`relative h-[88px] w-[88px] rounded-full bg-white shadow-sm tablet:h-[96px] tablet:w-[96px] ${ringClass}`}>
        <Image src={iconSrc} alt={alt} fill className="p-4 object-contain" />
      </div>
    </div>
  );
}

function P4200RInteractive() {
  // Order matches reference screenshots:
  // 3 = large ONT overlay only (initial)
  // 2 = no lines + plain circles (second)
  // 0 = green lines + green rings
  // 1 = black lines + plain circles
  const [step, setStep] = useState(3);

  const strokeClass =
    step === 0 ? "stroke-[#08C22A]" : step === 1 ? "stroke-[#111111]" : "stroke-transparent";
  const ringClass = step === 0 ? "ring-4 ring-[#08C22A]" : "ring-0";

  const onClick = () => {
    const nextStepMap: Record<number, number> = { 3: 2, 2: 1, 1: 0, 0: 3 };
    setStep((prev) => nextStepMap[prev] ?? 3);
  };

  if (step === 3) {
    return (
      <button
        type="button"
        aria-label="Reset diagram"
        onClick={onClick}
        className="relative mx-auto block aspect-square w-full max-w-[650px] overflow-hidden"
      >
        <Image
          src="/assets/products/ONT-P4200R/Component p4200r.webp"
          alt="Niurix P4200R connectivity map"
          fill
          className="object-contain"
        />
      </button>
    );
  }

  return (
    <button
      type="button"
      aria-label="Advance diagram"
      onClick={onClick}
      className="relative mx-auto block aspect-square w-full max-w-[650px] overflow-hidden"
    >
      <Image
        src="/assets/products/ONT-P4200R/Component p4200r.webp"
        alt="Niurix P4200R connectivity map"
        fill
        className="object-contain"
      />

      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" fill="none" aria-hidden>
        <polyline className={strokeClass} points="15,18 90,18 90,39 81,39" strokeWidth="0.6" />
        <polyline className={strokeClass} points="15,18 15,35 26,35" strokeWidth="0.6" />
        <polyline className={strokeClass} points="62,22 62,79 50,79" strokeWidth="0.6" />
      </svg>

      <div className="absolute left-[50%] top-[14%] -translate-x-1/2 -translate-y-1/2">
        <div className="relative h-[96px] w-[96px] rounded-full bg-[#FF5B02] shadow-sm tablet:h-[102px] tablet:w-[102px]">
          <Image src="/assets/products/ONT-P4200R/product.webp" alt="P4200R" fill className="p-4 object-contain" />
        </div>
      </div>

      <Marker
        className="left-[31%] top-[39%] -translate-x-1/2 -translate-y-1/2"
        iconSrc="/assets/industries/hospitality/telephone.webp"
        alt="Phone"
        ringClass={ringClass}
      />
      <Marker
        className="left-[80%] top-[38%] -translate-x-1/2 -translate-y-1/2"
        iconSrc="/assets/industries/hospitality/IPTV.webp"
        alt="TV"
        ringClass={ringClass}
      />
      <Marker
        className="left-[50%] top-[70%] -translate-x-1/2 -translate-y-1/2"
        iconSrc="/assets/industries/hospitality/wireless.webp"
        alt="Router"
        ringClass={ringClass}
      />
    </button>
  );
}

export default function InteractiveSVGDiagram({ src, alt, productSlug }: InteractiveSVGDiagramProps) {
  if (productSlug === "ONT-P4200R") {
    return <P4200RInteractive />;
  }

  return (
    <div className="relative h-[320px] w-full tablet:h-[420px] laptop:h-[520px]">
      <Image src={src} alt={alt} fill className="object-contain" />
    </div>
  );
}

