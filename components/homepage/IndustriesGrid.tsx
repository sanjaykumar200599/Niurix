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
      <div className="hidden gap-4 px-30 laptop:grid laptop:grid-cols-[58%_20%_20%] wide:gap-8">
        <div className="relative h-[35rem] overflow-hidden rounded-tl-[35px] rounded-br-[35px]">
          <Image src={active.detailImage} alt={active.title} fill sizes="(min-width: 1024px) 58vw, 0px" className="object-cover" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/96 to-white/78 px-6 pb-6 pt-7 wide:px-7 wide:pb-7">
            <h3 className="text-[24px] font-sans text-brand-black wide:text-[28px]">{active.title}</h3>
            <p className="mt-3 max-w-[88%] text-[17px] leading-[1.35] font-body-light text-brand-black wide:mt-4 wide:max-w-[82%] wide:text-[20px]">
              {active.desc}
            </p>
            <Link
              href={`/industries/${active.slug}`}
              className="mt-5 inline-flex min-w-[220px] items-center justify-center gap-3 rounded-[10px_0px] border-2 border-brand-orange bg-brand-orange px-6 py-3 text-[22px] font-sans text-white transition hover:bg-white hover:text-black wide:min-w-[240px] wide:py-3.5"
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
            <Image src={item.cardImage} alt={item.title} fill sizes="(min-width: 1024px) 20vw, 0px" className="object-cover transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/45" />
            <p className="absolute bottom-0 left-4 w-[18rem] origin-top-left -rotate-90 text-left font-body-light text-[26px] leading-none text-white wide:text-[28px]">
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
                <Image src={item.mobileCropImage} alt={item.title} fill sizes="100vw" className="object-cover" />
                <p className="absolute bottom-3 left-4 text-[20px] font-body-light text-white tablet:text-[22px]">{item.title}</p>
              </div>

              {open ? (
                <div className="relative h-[26rem]">
                  <Image src={item.mobileDetailImage} alt={item.title} fill sizes="100vw" className="object-cover" />
                  <div className="absolute inset-x-0 bottom-0 max-h-[45%] bg-white/95 p-5 tablet:p-8">
                    <h3 className="text-[20px] font-display text-brand-black tablet:text-[22px]">{item.title}</h3>
                    <p className="mt-3 w-[95%] text-[16px] font-body-light text-brand-black tablet:w-[90%] tablet:text-[18px]">{item.desc}</p>
                    <Link
                      href={`/industries/${item.slug}`}
                      className="mt-4 inline-flex min-w-[170px] items-center justify-center gap-3 rounded-[10px_0px] border-2 border-brand-orange bg-brand-orange px-5 py-2.5 text-[16px] font-sans text-white tablet:text-[18px]"
                    >
                      <span>Learn More</span>
                      <ArrowRightIcon />
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

