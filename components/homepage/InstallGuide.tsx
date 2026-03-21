"use client";

import { useState } from "react";
import type { HomeData } from "@/lib/content/types";

function DotTrail({ active }: { active: boolean }) {
  return (
    <div className="flex h-12 w-16 items-center justify-center gap-[5px]">
      {Array.from({ length: 3 }).map((_, index) => (
        <span key={index} className={`rounded-full ${active ? "h-2 w-2 bg-brand-orange" : "h-1.5 w-1.5 border border-brand-orange"}`} />
      ))}
    </div>
  );
}

export default function InstallGuide({ steps }: { steps: HomeData["installSteps"] }) {
  const [idx, setIdx] = useState(0);

  return (
    <div className="laptop:ml-20">
      <div className="ml-[0.3rem] flex items-center justify-start">
        {steps.map((_, stepIdx) => (
          <div key={stepIdx} className="flex items-center">
            {stepIdx > 0 ? <DotTrail active={idx >= stepIdx} /> : null}
            <button
              type="button"
              onClick={() => setIdx(stepIdx)}
              className={`h-[35px] w-[35px] rounded-full text-[24px] font-display shadow-[0px_3px_10px_#0000001A] ${
                idx === stepIdx ? "bg-brand-orange text-white" : "bg-white text-gray-500"
              }`}
            >
              {stepIdx + 1}
            </button>
          </div>
        ))}
      </div>

      <div className="h-[9rem] font-body-light">
        <h3 className="mt-4 text-[24px] font-sans font-light text-brand-black [@media(min-width:1025px)_and_(max-width:1366px)]:text-[20px]">
          {steps[idx]?.title}
        </h3>
        <p className="mt-4 w-full text-[16px] font-body-light text-brand-black tablet:text-[18px] laptop:w-[80%] [@media(min-width:1025px)_and_(max-width:1366px)]:w-full [@media(min-width:1025px)_and_(max-width:1366px)]:text-[20px]">
          {steps[idx]?.para}
        </p>
      </div>
    </div>
  );
}
