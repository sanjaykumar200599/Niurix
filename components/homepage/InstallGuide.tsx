"use client";

import { useState } from "react";
import type { HomeData } from "@/lib/content/types";

function DotTrail({ active }: { active: boolean }) {
  return (
    <div className="flex h-8 w-10 items-center justify-center gap-1 tablet:w-12 laptop:h-10 laptop:w-14">
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
    <div className="w-full laptop:self-center laptop:pl-4">
      <div className="flex items-center justify-start px-15 tablet:px-2 laptop:px-8 [@media(min-width:1025px)_and_(max-width:1366px)]:px-6
      
      ">
        {steps.map((_, stepIdx) => (
          <div key={stepIdx} className="flex items-center">
            {stepIdx > 0 ? <DotTrail active={idx === stepIdx} /> : null}
            <button
              type="button"
              onClick={() => setIdx(stepIdx)}
              className={`flex h-8 w-8 items-center justify-center rounded-full text-[16px] font-display shadow-[0px_3px_10px_#0000001A] transition tablet:h-10 tablet:w-10 tablet:text-[22px] laptop:h-[44px] laptop:w-[44px] laptop:text-[22px] ${
                idx === stepIdx ? "bg-brand-orange text-white" : "bg-white text-[#8A8A8A]"
              }`}
            >
              {stepIdx + 1}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-5 ml-2 min-h-[11rem] px-1 font-body-light tablet:ml-0 tablet:min-h-[12rem] tablet:px-2 laptop:min-h-[13rem] laptop:px-8 [@media(min-width:1025px)_and_(max-width:1366px)]:px-6">
        <h3 className="text-[18px] font-sans font-light text-brand-black tablet:text-[21px] laptop:text-[16px] [@media(min-width:1025px)_and_(max-width:1366px)]:text-[19px]">
          {steps[idx]?.title}
        </h3>
        <p className="mt-3 w-full text-[16px] leading-[1.35] font-body-light text-[#000000] tablet:text-[15px] laptop:text-[16px] laptop:w-[82%] [@media(min-width:1600px)_and_(min-height:900px)]:w-[82%]">
          {steps[idx]?.para}
        </p>
      </div>
    </div>
  );
}
