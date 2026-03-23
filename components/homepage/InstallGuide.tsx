"use client";

import { useState } from "react";
import type { HomeData } from "@/lib/content/types";

function DotTrail({ active }: { active: boolean }) {
  return (
    <div className="flex h-12 w-14 items-center justify-center gap-1.5 tablet:w-16 laptop:w-[3.75rem]">
      {Array.from({ length: 3 }).map((_, index) => (
        <span
          key={index}
          className={active ? "h-2 w-2 rounded-full bg-brand-orange" : "h-2 w-2 rounded-full border border-brand-orange/70 bg-white"}
        />
      ))}
    </div>
  );
}

export default function InstallGuide({ steps }: { steps: HomeData["installSteps"] }) {
  const [idx, setIdx] = useState(0);

  return (
    <div className="laptop:ml-14 wide:ml-20">
      <div className="ml-[0.2rem] flex items-center justify-start">
        {steps.map((_, stepIdx) => (
          <div key={stepIdx} className="flex items-center">
            {stepIdx > 0 ? <DotTrail active={idx >= stepIdx} /> : null}
            <button
              type="button"
              onClick={() => setIdx(stepIdx)}
              className={`flex h-11 w-11 items-center justify-center rounded-full text-[22px] font-display shadow-[0px_3px_10px_#0000001A] transition tablet:h-12 tablet:w-12 tablet:text-[24px] ${
                idx === stepIdx ? "bg-brand-orange text-white" : "bg-white text-[#8A8A8A]"
              }`}
            >
              {stepIdx + 1}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-5 min-h-[12rem] font-body-light tablet:min-h-[13rem] laptop:min-h-[14rem]">
        <h3 className="text-[24px] font-sans font-light text-brand-black tablet:text-[28px] [@media(min-width:1025px)_and_(max-width:1366px)]:text-[22px]">
          {steps[idx]?.title}
        </h3>
        <p className="mt-5 w-full text-[16px] leading-[1.65] font-body-light text-brand-black tablet:text-[18px] laptop:w-[84%] [@media(min-width:1025px)_and_(max-width:1366px)]:w-[96%] [@media(min-width:1025px)_and_(max-width:1366px)]:text-[18px]">
          {steps[idx]?.para}
        </p>
      </div>
    </div>
  );
}
