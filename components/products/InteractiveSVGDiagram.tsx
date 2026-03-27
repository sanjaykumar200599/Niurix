"use client";

import Image from "next/image";
import { useState } from "react";
import Product8pLegacy from "@/components/products/legacy/Product8pLegacy";

type InteractiveSVGDiagramProps = {
  src: string;
  alt: string;
  productSlug?: string;
};

function Marker({ className, iconSrc, alt, ringClass }: { className: string; iconSrc: string; alt: string; ringClass: string }) {
  return (
    <div className={`absolute ${className}`}>
      <div className={`relative h-[62px] w-[62px] rounded-full bg-white shadow-sm tablet:h-[88px] tablet:w-[88px] laptop:h-[96px] laptop:w-[96px] ${ringClass}`}>
        <Image src={iconSrc} alt={alt} fill className="p-3 tablet:p-4 object-contain" />
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
  const ringClass = step === 0 ? "ring-2 tablet:ring-4 ring-[#08C22A]" : "ring-0";

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
        className="relative mx-auto block aspect-square w-full max-w-[650px] overflow-hidden touch-manipulation"
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
      className="relative mx-auto block aspect-square w-full max-w-[650px] overflow-hidden touch-manipulation"
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
        <div className="relative h-[68px] w-[68px] rounded-full bg-[#FF5B02] shadow-sm tablet:h-[96px] tablet:w-[96px] laptop:h-[102px] laptop:w-[102px]">
          <Image src="/assets/products/ONT-P4200R/product.webp" alt="P4200R" fill className="p-3 tablet:p-4 object-contain" />
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

function T2001Interactive() {
  // Order:
  // 3 = large ONT overlay only (initial)
  // 2 = no lines + plain circles
  // 1 = black lines + plain circles
  // 0 = green lines + green rings
  const [step, setStep] = useState(3);

  const strokeClass =
    step === 0 ? "stroke-[#08C22A]" : step === 1 ? "stroke-[#111111]" : "stroke-transparent";
  const ringClass = step === 0 ? "ring-2 tablet:ring-4 ring-[#08C22A]" : "ring-0";

  const onClick = () => {
    const nextStepMap: Record<number, number> = { 3: 2, 2: 1, 1: 0, 0: 3 };
    setStep((prev) => nextStepMap[prev] ?? 3);
  };

  if (step === 3) {
    return (
      <button
        type="button"
        aria-label="Advance T2001 diagram"
        onClick={onClick}
        className="relative mx-auto block aspect-square w-full max-w-[650px] overflow-hidden touch-manipulation"
      >
        <Image
          src="/assets/products/ONT-T2001/Component T2001 v2.png"
          alt="Niurix T2001 connectivity map"
          fill
          className="object-contain"
        />
      </button>
    );
  }

  return (
    <button
      type="button"
      aria-label="Advance T2001 diagram"
      onClick={onClick}
      className="relative mx-auto block aspect-square w-full max-w-[650px] overflow-hidden touch-manipulation"
    >
      <Image
        src="/assets/products/ONT-T2001/Component T2001 v2.png"
        alt="Niurix T2001 connectivity map"
        fill
        className="object-contain"
      />

      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" fill="none" aria-hidden>
        <polyline className={strokeClass} points="8,9 97,9 97,34 84.5,34" strokeWidth="0.6" />
        <polyline className={strokeClass} points="8,9 8,23 24,23" strokeWidth="0.6" />
        <polyline className={strokeClass} points="66,14 66,73 47,73" strokeWidth="0.6" />
      </svg>

      <div className="absolute left-[50%] top-[12.2%] -translate-x-1/2 -translate-y-1/2">
        <div className="relative h-[68px] w-[68px] rounded-full bg-[#FF5B02] shadow-sm tablet:h-[96px] tablet:w-[96px] laptop:h-[102px] laptop:w-[102px]">
          <Image src="/assets/products/ONT-T2001/Product.webp" alt="T2001" fill className="p-3 tablet:p-4 object-contain" />
        </div>
      </div>

      <Marker
        className="left-[31%] top-[36.7%] -translate-x-1/2 -translate-y-1/2"
        iconSrc="/assets/industries/hospitality/telephone.webp"
        alt="Phone"
        ringClass={ringClass}
      />
      <Marker
        className="left-[84%] top-[35.7%] -translate-x-1/2 -translate-y-1/2"
        iconSrc="/assets/industries/hospitality/IPTV.webp"
        alt="TV"
        ringClass={ringClass}
      />
      <Marker
        className="left-[49%] top-[67%] -translate-x-1/2 -translate-y-1/2"
        iconSrc="/assets/industries/hospitality/wireless.webp"
        alt="Router"
        ringClass={ringClass}
      />
    </button>
  );
}

function Xgspon8PInteractive() {
  // Order matches reference screenshots:
  // 0 = small rack (initial)
  // 1 = larger rack
  // 2 = larger rack + side panel
  // 3 = full product overlay
  const [step, setStep] = useState(3);

  const onClick = () => {
    setStep((prev) => (prev + 1) % 4);
  };

  if (step === 3) {
    return (
      <button
        type="button"
        aria-label="Advance XGSPON diagram"
        onClick={onClick}
        className="relative mx-auto block aspect-square w-full max-w-[700px] overflow-hidden touch-manipulation"
      >
        <Image
          src="/assets/products/OLT-XGSPON-8P/Component xgspon-8P.png"
          alt="Niurix OLT XGSPON 8P architecture"
          fill
          className="object-contain"
        />
      </button>
    );
  }

  return (
    <button
      type="button"
      aria-label="Advance XGSPON diagram"
      onClick={onClick}
      className="relative mx-auto block aspect-square w-full max-w-[700px] overflow-hidden touch-manipulation"
    >
      <Image
        src="/assets/products/OLT-XGSPON-8P/Component xgspon-8P.png"
        alt="Niurix OLT XGSPON 8P architecture"
        fill
        className="object-contain"
      />

      {/* Opaque floor patch that hides the large chassis in early steps */}
      <div className="pointer-events-none absolute left-[31.4%] top-[19.8%] h-[61.6%] w-[38.2%] rounded-[2px] bg-[linear-gradient(180deg,#a7adb7_0%,#99a1ae_48%,#8f98a5_100%)]" />
      <div className="pointer-events-none absolute left-[31.4%] top-[19.8%] h-[61.6%] w-[38.2%] rounded-[2px] bg-[repeating-linear-gradient(0deg,transparent_0px,transparent_47px,rgba(117,126,139,0.26)_47px,rgba(117,126,139,0.26)_49px),repeating-linear-gradient(90deg,transparent_0px,transparent_47px,rgba(117,126,139,0.18)_47px,rgba(117,126,139,0.18)_49px)]" />
      <div className="pointer-events-none absolute left-[37%] top-[39%] h-[12%] w-[12%] rounded-full bg-[radial-gradient(circle,rgba(205,211,221,0.55)_0%,rgba(205,211,221,0)_72%)]" />
      <div className="pointer-events-none absolute left-[58%] top-[56%] h-[13%] w-[13%] rounded-full bg-[radial-gradient(circle,rgba(205,211,221,0.5)_0%,rgba(205,211,221,0)_72%)]" />

      <div
        className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
          step === 0 ? "h-[12%] w-[9%]" : "h-[17%] w-[13%]"
        }`}
      >
        <div className="relative h-full w-full rounded-[2px] bg-[linear-gradient(135deg,#073a57_0%,#00131f_100%)] shadow-[0_8px_18px_rgba(0,0,0,0.38)]">
          <div className="absolute inset-y-0 -left-[15%] w-[15%] rounded-l-[2px] bg-[linear-gradient(180deg,#7f8895_0%,#5d6773_100%)]" />
          <span
            className={`absolute left-[50%] top-[24%] -translate-x-1/2 text-center font-serif text-[#5d8191] ${
              step === 0 ? "text-[9px]" : "text-[12px] tablet:text-[14px]"
            }`}
          >
            Rack
          </span>
          <div className="absolute right-[4%] top-[26%] flex flex-col gap-[2px]">
            <span className="h-[2px] w-[6px] rounded-full bg-[#d6e038]" />
            <span className="h-[2px] w-[6px] rounded-full bg-[#d6e038]" />
            <span className="h-[2px] w-[6px] rounded-full bg-[#d6e038]" />
            <span className="h-[2px] w-[6px] rounded-full bg-[#d6e038]" />
          </div>
        </div>
      </div>

      {step === 2 ? (
        <div className="pointer-events-none absolute left-[47%] top-[46%] h-[8.5%] w-[5.5%] -translate-y-1/2 rounded-[2px] bg-[linear-gradient(180deg,#858d98_0%,#6f7783_100%)] opacity-95 shadow-[0_6px_14px_rgba(0,0,0,0.3)] transition-all duration-300" />
      ) : null}
    </button>
  );
}

export default function InteractiveSVGDiagram({ src, alt, productSlug }: InteractiveSVGDiagramProps) {
  if (productSlug === "ONT-P4200R") {
    return <P4200RInteractive />;
  }
  if (productSlug === "ONT-T2001") {
    return <T2001Interactive />;
  }
  if (productSlug === "OLT-SOLT33-8P") {
    return <Product8pLegacy />;
  }
  if (productSlug === "OLT-XGSPON-8P") {
    return <Xgspon8PInteractive />;
  }

  return (
    <div className="relative h-[320px] w-full tablet:h-[420px] laptop:h-[520px]">
      <Image src={src} alt={alt} fill className="object-contain" />
    </div>
  );
}


