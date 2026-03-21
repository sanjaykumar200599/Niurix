"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { HomeData } from "@/lib/content/types";

export default function IndustriesGrid({ industries }: { industries: HomeData["industries"] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = useMemo(() => industries[activeIndex] ?? industries[0], [activeIndex, industries]);

  if (!active) return null;

  return (
    <div>
      <div className="hidden gap-8 px-30 laptop:flex">
        {industries.map((item, index) => (
          <button
            key={item.slug}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="relative h-[35rem] w-[15rem] shrink-0 cursor-pointer overflow-hidden"
          >
            <Image src={item.cardImage} alt={item.title} fill className="object-cover" />
            <p className="absolute bottom-0 left-4 w-[18rem] origin-top-left -rotate-90 text-left text-[28px] font-body-light text-white">{item.title}</p>
          </button>
        ))}

        <div className="relative h-[35rem] w-[50rem] overflow-hidden [@media(min-width:1025px)_and_(max-width:1366px)]:w-[25rem] [@media(min-width:1367px)_and_(max-width:1600px)]:w-[34%] [@media(min-width:1367px)_and_(max-width:1600px)]:min-w-[34%]">
          <Image src={active.detailImage} alt={active.title} fill className="object-cover rounded-tl-[35px] rounded-br-[35px]" />
          <div className="absolute inset-x-0 bottom-0 max-h-[46%] bg-white/95 px-5 py-5 [@media(min-width:1025px)_and_(max-width:1366px)]:max-h-[40%]">
            <h3 className="text-[28px] font-display text-brand-black">{active.title}</h3>
            <p className="mt-4 text-[20px] font-body-light text-brand-black">{active.desc}</p>
            <Link
              href={`/industries/${active.slug}`}
              className="mt-4 inline-flex w-[20%] min-w-[190px] items-center justify-center rounded-[10px_0px] border-2 border-brand-orange bg-brand-orange px-4 py-2 text-[20px] font-sans text-white transition hover:bg-white hover:text-black"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <div className="space-y-4 px-9 tablet:px-20 laptop:hidden">
        {industries.map((item, index) => {
          const open = index === activeIndex;
          return (
            <button key={item.slug} type="button" onClick={() => setActiveIndex(index)} className="relative block w-full overflow-hidden text-left">
              <div className="relative h-32 tablet:h-48">
                <Image src={item.mobileCropImage} alt={item.title} fill className="object-cover" />
                <p className="absolute bottom-3 left-4 text-[20px] font-body-light text-white tablet:text-[22px]">{item.title}</p>
              </div>

              {open ? (
                <div className="relative h-[26rem]">
                  <Image src={item.mobileDetailImage} alt={item.title} fill className="object-cover" />
                  <div className="absolute inset-x-0 bottom-0 max-h-[45%] bg-white/95 p-5 tablet:p-8">
                    <h3 className="text-[20px] font-display text-brand-black tablet:text-[22px]">{item.title}</h3>
                    <p className="mt-3 w-[95%] text-[16px] font-body-light text-brand-black tablet:w-[90%] tablet:text-[18px]">{item.desc}</p>
                    <Link
                      href={`/industries/${item.slug}`}
                      className="mt-4 inline-flex w-[40%] min-w-[140px] items-center justify-center rounded-[10px_0px] border-2 border-brand-orange bg-brand-orange px-4 py-2 text-[16px] font-sans text-white tablet:w-[22%] tablet:text-[18px]"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
