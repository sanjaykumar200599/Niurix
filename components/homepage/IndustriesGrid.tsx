"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
  const hasItems = industries.length > 0;
  if (!hasItems) return null;

  return (
    <div>
      <div className="hidden gap-4 px-30 laptop:flex wide:gap-8">
        {industries.map((item, index) => {
          const isActive = index === activeIndex;

          if (isActive) {
            return (
              <article
                key={item.slug}
                className="relative h-[640px] basis-0 overflow-hidden rounded-tl-[35px] rounded-br-[35px] transition-[flex-basis] duration-500 ease-out laptop:flex-[0_0_960px]"
              >
                <Image
                  src={item.detailImage}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1025px) 960px, 0px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/96 to-white/78 px-6 pb-4 pt-5 wide:px-7 wide:pb-5">
                  <h3 className="text-[22px] font-sans text-brand-black wide:text-[28px]">{item.title}</h3>
                  <p className="mt-2 max-w-[88%] text-[15px] leading-[1.35] font-body-light text-brand-black wide:mt-3 wide:max-w-[92%] wide:text-[20px]">
                    {item.desc}
                  </p>
                  <Link
                    href={`/industries/${item.slug}`}
                    className="mt-3 inline-flex min-w-[200px] items-center justify-center gap-3 rounded-[10px_0px] border-2 border-brand-orange bg-brand-orange px-6 py-2 text-[19px] font-sans !text-white transition hover:bg-white hover:!text-brand-black wide:min-w-[220px] wide:px-7 wide:py-2.5"
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
              className="group relative h-[640px] basis-0 overflow-hidden rounded-tl-[35px] rounded-br-[35px] text-left transition-[flex-basis] duration-500 ease-out laptop:flex-[0_0_320px]"
            >
              <Image
                src={item.cardImage}
                alt={item.title}
                fill
                sizes="(min-width: 1025px) 320px, 0px"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/25" />
              <p className="absolute bottom-0 left-4 w-[18rem] origin-top-left -rotate-90 text-left font-body-light text-[26px] leading-none text-white wide:text-[28px]">
                {item.title}
              </p>
            </button>
          );
        })}
      </div>

      <div className="space-y-3 px-5 tablet:px-20 laptop:hidden">
        {industries.map((item, index) => {
          const open = index === activeIndex;

          if (open) {
            return (
              <article key={item.slug} className="relative mx-auto w-[303px] max-w-full overflow-hidden rounded-tl-[28px] rounded-br-[28px] border border-black/8 bg-[#f7f7f7] tablet:w-full">
                <div className="relative h-[483px] w-full tablet:h-auto tablet:aspect-[16/10]">
                  <Image src={item.mobileDetailImage} alt={item.title} fill sizes="(max-width: 767px) 303px, 100vw" className="object-cover" />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-white/95 px-5 pb-4 pt-3 tablet:static tablet:bg-[#f7f7f7] tablet:px-8 tablet:pb-8 tablet:pt-6">
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
              className="relative mx-auto block w-[303px] max-w-full overflow-hidden rounded-tl-[28px] rounded-br-[28px] text-left tablet:w-full"
            >
              <div className="relative h-[64px] tablet:h-48">
                <Image src={item.mobileCropImage} alt={item.title} fill sizes="(max-width: 767px) 303px, 100vw" className="object-cover" />
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
