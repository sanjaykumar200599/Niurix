"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { HomeData } from "@/lib/content/types";

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 12.24 21.48" className="h-5 w-5" fill="none" aria-hidden>
      <path
        d="M17.24,8.621,8.62,0,0,8.621"
        transform="translate(10.742 2.121) rotate(90)"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2.4"
      />
    </svg>
  );
}

export default function IndustriesGrid({ industries }: { industries: HomeData["industries"] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = useMemo(() => industries[activeIndex] ?? industries[0], [activeIndex, industries]);
  const sideItems = useMemo(() => industries.filter((_, index) => index !== activeIndex).slice(0, 2), [activeIndex, industries]);

  if (!active) return null;

  return (
    <div>
      <div className="hidden gap-4 px-30 laptop:grid laptop:grid-cols-[58%_20%_20%] [@media(min-width:1367px)]:gap-8">
        <div className="relative h-[35rem] overflow-hidden rounded-tl-[35px] rounded-br-[35px]">
          <Image src={active.detailImage} alt={active.title} fill className="object-cover" />
          <div className="absolute inset-x-0 bottom-0 bg-white/95 px-5 py-5">
            <h3 className="text-[24px] font-sans text-brand-black [@media(min-width:1367px)]:text-[28px]">{active.title}</h3>
            <p className="mt-3 text-[17px] font-body-light leading-snug text-brand-black [@media(min-width:1367px)]:mt-4 [@media(min-width:1367px)]:text-[20px]">
              {active.desc}
            </p>
            <Link
              href={`/industries/${active.slug}`}
              className="mt-4 inline-flex min-w-[150px] items-center justify-center gap-3 rounded-[10px_0px] border-2 border-brand-orange bg-brand-orange px-4 py-2 text-[18px] font-sans text-white transition hover:bg-white hover:text-black [@media(min-width:1367px)]:min-w-[190px] [@media(min-width:1367px)]:text-[20px]"
            >
              <span>Learn More</span>
              <ArrowRightIcon />
            </Link>
          </div>
        </div>

        {sideItems.map((item) => (
          <button
            key={item.slug}
            type="button"
            onClick={() => setActiveIndex(industries.findIndex((entry) => entry.slug === item.slug))}
            className="group relative h-[35rem] overflow-hidden rounded-tl-[35px] rounded-br-[35px]"
          >
            <Image src={item.cardImage} alt={item.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/45" />
            <p className="absolute bottom-0 left-4 w-[18rem] origin-top-left -rotate-90 text-left font-body-light text-[26px] leading-none text-white [@media(min-width:1367px)]:text-[28px]">
              {item.title}
            </p>
          </button>
        ))}
      </div>

      <div className="space-y-4 px-5 tablet:px-20 laptop:hidden">
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
                      className="mt-4 inline-flex w-[45%] min-w-[150px] items-center justify-center rounded-[10px_0px] border-2 border-brand-orange bg-brand-orange px-4 py-2 text-[16px] font-sans text-white tablet:w-[22%] tablet:text-[18px]"
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
