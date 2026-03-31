"use client";

import Image from "next/image";
import { useState } from "react";

function StepMarker({
  className,
  iconSrc,
  alt,
  green,
}: {
  className: string;
  iconSrc: string;
  alt: string;
  green: boolean;
}) {
  return (
    <div className={`absolute ${className}`}>
      <div className={`relative h-[62px] w-[62px] rounded-full bg-white shadow-sm tablet:h-[88px] tablet:w-[88px] laptop:h-[96px] laptop:w-[96px] ${green ? "t2001-green-ring" : ""}`}>
        <Image src={iconSrc} alt={alt} fill sizes="(min-width: 1024px) 96px, (min-width: 768px) 88px, 62px" className="p-3 tablet:p-4 object-contain t2001-fade" />
      </div>
    </div>
  );
}

export default function ProductT2001Legacy() {
  const [step, setStep] = useState(1);
  const onClick = () => setStep((prev) => (prev === 4 ? 1 : prev + 1));

  const showNodes = step > 1;
  const showLines = step >= 3;
  const green = step === 4;

  return (
    <button type="button" onClick={onClick} aria-label="Advance T2001 SVG diagram" className="t2001-container relative mx-auto block w-full">
      <Image
        src="/assets/products/ONT-T2001/ComponentT2001.svg"
        alt="Niurix T2001 connectivity map"
        fill
        sizes="(min-width: 1024px) 667px, 100vw"
        className="object-contain"
      />

      {showNodes ? (
        <>
          <div className="absolute left-[50%] top-[12.2%] -translate-x-1/2 -translate-y-1/2 t2001-fade">
            <div className="relative h-[68px] w-[68px] rounded-full bg-[#FF5B02] shadow-sm tablet:h-[96px] tablet:w-[96px] laptop:h-[102px] laptop:w-[102px]">
              <Image src="/assets/products/ONT-T2001/Product.webp" alt="T2001" fill sizes="(min-width: 1024px) 102px, (min-width: 768px) 96px, 68px" className="p-3 tablet:p-4 object-contain" />
            </div>
          </div>

          <StepMarker className="left-[31%] top-[36.7%] -translate-x-1/2 -translate-y-1/2" iconSrc="/assets/industries/hospitality/telephone.webp" alt="Phone" green={green} />
          <StepMarker className="left-[84%] top-[35.7%] -translate-x-1/2 -translate-y-1/2" iconSrc="/assets/industries/hospitality/IPTV.webp" alt="TV" green={green} />
          <StepMarker className="left-[49%] top-[67%] -translate-x-1/2 -translate-y-1/2" iconSrc="/assets/industries/hospitality/wireless.webp" alt="Router" green={green} />
        </>
      ) : null}

      {showLines ? (
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" fill="none" aria-hidden>
          <polyline className={`t2001-fade ${green ? "stroke-[#07c900]" : "stroke-[#000000]"}`} points="8,9 97,9 97,34 84.5,34" strokeWidth="0.6" />
          <polyline className={`t2001-fade ${green ? "stroke-[#07c900]" : "stroke-[#000000]"}`} points="8,9 8,23 24,23" strokeWidth="0.6" />
          <polyline className={`t2001-fade ${green ? "stroke-[#07c900]" : "stroke-[#000000]"}`} points="66,14 66,73 47,73" strokeWidth="0.6" />
        </svg>
      ) : null}

      <style jsx>{`
        @keyframes t2001FadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .t2001-fade {
          animation: t2001FadeIn 0.45s ease-in;
        }
        .t2001-container {
          cursor: pointer;
          width: 100%;
          max-width: 650px;
          aspect-ratio: 667.063 / 606.643;
          overflow: hidden;
          touch-action: manipulation;
        }
        .t2001-green-ring {
          box-shadow: 0 0 0 2px #07c900;
        }
        @media (min-width: 768px) {
          .t2001-green-ring {
            box-shadow: 0 0 0 4px #07c900;
          }
        }
      `}</style>
    </button>
  );
}
