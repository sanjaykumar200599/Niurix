"use client";

import { useEffect, useMemo, useState } from "react";
import type { HomeData } from "@/lib/content/types";

type DataCountersProps = {
  metrics: HomeData["metrics"];
};

const parseCount = (value: string) => {
  const numeric = Number(value.replace(/[^\d]/g, ""));
  return Number.isFinite(numeric) ? numeric : 0;
};

const formatCount = (template: string, value: number) => {
  if (template.includes("+")) return `${value}+`;
  if (template.includes("%")) return `${value}%`;
  return String(value);
};

export default function DataCounters({ metrics }: DataCountersProps) {
  const targets = useMemo(() => metrics.map((metric) => parseCount(metric.count)), [metrics]);
  const [values, setValues] = useState<number[]>(targets.map(() => 0));

  useEffect(() => {
    const start = performance.now();
    const duration = 900;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValues(targets.map((target) => Math.round(target * progress)));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [targets]);

  return (
    <div className="flex flex-col px-4 items-center justify-around gap-8 tablet:flex-col tablet:gap-16 [@media(min-width:768px)_and_(max-width:1024px)_and_(orientation:landscape)]:flex-row [@media(min-width:768px)_and_(max-width:1024px)_and_(orientation:landscape)]:gap-8 laptop:flex-row laptop:gap-10">
      {metrics.map((metric, index) => (
        <article key={metric.count + metric.desc} className="flex w-full flex-col items-center tablet:items-center laptop:w-1/4 laptop:items-center">
          <p className="font-number pb-4 text-[32px] leading-none text-brand-orange tablet:text-[80px]">{formatCount(metric.count, values[index] ?? 0)}</p>
          <p className="mt-2 w-full text-center text-[16px] font-sans text-brand-black tablet:w-auto tablet:text-center tablet:text-[18px] laptop:w-[85%] laptop:text-center laptop:text-[20px]">
            {metric.desc.trim().startsWith("Reduction in") ? (<>Reduction in <br />{metric.desc.trim().slice("Reduction in ".length)}</>) : (metric.desc)}
          </p>
        </article>
      ))}
    </div>
  );
}