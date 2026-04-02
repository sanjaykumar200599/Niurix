"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { HomeData } from "@/lib/content/types";

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 12.24 21.48" className="h-4 w-4" fill="none" aria-hidden>
      <path
        d="M17.24,8.621,8.62,0,0,8.621"
        transform="translate(10.742 2.121) rotate(90)"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2.1"
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
      <div className="hidden gap-4 px-30 laptop:grid laptop:grid-cols-[58%_19%_18%] wide:gap-8">
        <div className="relative h-[36rem] overflow-hidden rounded-tl-[35px] rounded-br-[35px]">
          <Image
            src={active.detailImage}
            alt={active.title}
            fill
            sizes="(min-width: 1024px) 58vw, 0px"
            className={`object-cover ${active.slug === "hospitality" ? "object-[50%_72%]" : "object-center"}`}
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/96 to-white/78 px-6 pb-6 pt-7 wide:px-7 wide:pb-7">
            <h3 className="text-[24px] font-sans text-brand-black wide:text-[28px]">{active.title}</h3>
            <p className="mt-3 max-w-[88%] text-[17px] leading-[1.35] font-body-light text-brand-black wide:mt-4 wide:max-w-[82%] wide:text-[20px]">
              {active.desc}
            </p>
            <Link
              href={`/industries/${active.slug}`}
              className="mt-5 inline-flex min-w-[240px] items-center justify-center gap-3 rounded-[10px_0px] border-2 border-brand-orange bg-brand-orange px-8 py-3 text-[22px] font-sans !text-white transition hover:bg-white hover:!text-brand-black wide:min-w-[255px] wide:px-9 wide:py-3.5"
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
            className="group relative h-[36rem] overflow-hidden rounded-tl-[35px] rounded-br-[35px]"
          >
            <Image src={item.cardImage} alt={item.title} fill sizes="(min-width: 1024px) 20vw, 0px" className="object-cover transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/45" />
            <p className="absolute bottom-0 left-4 w-[18rem] origin-top-left -rotate-90 text-left font-body-light text-[26px] leading-none text-white wide:text-[28px]">
              {item.title}
            </p>
          </button>
        ))}
      </div>

      <div className="space-y-3 px-5 tablet:px-20 laptop:hidden">
        {industries.map((item, index) => {
          const open = index === activeIndex;

          if (open) {
            return (
              <article key={item.slug} className="overflow-hidden rounded-tl-[28px] rounded-br-[28px] border border-black/8 bg-[#f7f7f7]">
                <div className="relative aspect-[16/10] w-full">
                  <Image src={item.mobileDetailImage} alt={item.title} fill sizes="100vw" className="object-cover" />
                </div>
                <div className="px-5 pb-4 pt-3 tablet:px-8 tablet:pb-8 tablet:pt-6">
                  <h3 className="text-[20px] font-display text-brand-black tablet:text-[22px]">{item.title}</h3>
                  <p className="mt-3 text-[16px] leading-[1.4] font-body-light text-brand-black tablet:text-[18px]">{item.desc}</p>
                  <Link
                    href={`/industries/${item.slug}`}
                    className="mt-5 inline-flex min-w-[170px] items-center justify-center gap-3 rounded-[10px_0px] border-2 border-brand-orange bg-brand-orange px-5 py-2.5 text-[16px] font-sans !text-white hover:!text-white tablet:text-[18px]"
                  >
                    <span>Learn More</span>
                    <ArrowRightIcon />
                  </Link>
                </div>
              </article>
            );
          }

          return (
            <button
              key={item.slug}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="relative block w-full overflow-hidden rounded-tl-[28px] rounded-br-[28px] text-left"
            >
              <div className="relative h-36 tablet:h-48">
                <Image src={item.mobileCropImage} alt={item.title} fill sizes="100vw" className="object-cover" />
                <div className="absolute inset-0 bg-black/35" />
                <p className="absolute bottom-3 left-4 text-[20px] font-body-light text-white tablet:text-[22px]">{item.title}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
