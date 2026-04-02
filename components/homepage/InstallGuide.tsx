"use client";

import { useState } from "react";
import type { HomeData } from "@/lib/content/types";

function DotTrail({ active }: { active: boolean }) {
  return (
    <div className="flex h-9 w-11 items-center justify-center gap-1 tablet:w-15 laptop:h-12 laptop:w-16">
      {Array.from({ length: 3 }).map((_, index) => (
        <span
          key={index}
          className={active ? "h-1.5 w-1.5 rounded-full bg-brand-orange tablet:h-2 tablet:w-2" : "h-1.5 w-1.5 rounded-full border border-brand-orange/70 bg-white tablet:h-2 tablet:w-2"}
        />
      ))}
    </div>
  );
}

export default function InstallGuide({ steps }: { steps: HomeData["installSteps"] }) {
  const [idx, setIdx] = useState(0);

  return (
    <div className="laptop:ml-20 wide:ml-22">
      <div className="ml-1.5 flex items-center justify-start tablet:ml-[0.2rem]">
        {steps.map((_, stepIdx) => (
          <div key={stepIdx} className="flex items-center">
            {stepIdx > 0 ? <DotTrail active={idx >= stepIdx} /> : null}
            <button
              type="button"
              onClick={() => setIdx(stepIdx)}
              className={`flex h-8 w-8 items-center justify-center rounded-full text-[16px] font-display shadow-[0px_3px_10px_#0000001A] transition tablet:h-12 tablet:w-12 tablet:text-[24px] laptop:h-[52px] laptop:w-[52px] laptop:text-[26px] ${
                idx === stepIdx ? "bg-brand-orange text-white" : "bg-white text-[#8A8A8A]"
              }`}
            >
              {stepIdx + 1}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 min-h-[12rem] pl-1.5 font-body-light tablet:min-h-[13rem] tablet:pl-0 laptop:min-h-[14rem]">
        <h3 className="text-[24px] font-sans font-light text-brand-black tablet:text-[28px] laptop:text-[30px] [@media(min-width:1025px)_and_(max-width:1366px)]:text-[28px]">
          {steps[idx]?.title}
        </h3>
        <p className="mt-4 w-full text-[16px] leading-[1.6] font-body-light text-brand-black tablet:text-[18px] laptop:w-[82%] laptop:text-[20px] [@media(min-width:1025px)_and_(max-width:1366px)]:w-[92%] [@media(min-width:1025px)_and_(max-width:1366px)]:text-[20px]">
          {steps[idx]?.para}
        </p>
      </div>
    </div>
  );
}
