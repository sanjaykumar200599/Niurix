"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { HomeData } from "@/lib/content/types";

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 12.24 21.48" className="h-2 w-3" fill="none" aria-hidden>
      <path
        d="M17.24,8.621,8.62,0,0,8.621"
        transform="translate(10.742 2.121) rotate(90)"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2.8"
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
      <div className="hidden gap-8 px-30 laptop:flex">
        {industries.map((item, index) => {
          const isActive = index === activeIndex;

          if (isActive) {
            return (
              <article
                key={item.slug}
                className="relative h-[640px] basis-0 overflow-hidden rounded-tl-[48px] rounded-br-[48px] transition-[flex-basis] duration-500 ease-out laptop:flex-[0_0_58%] [@media(min-width:1600px)_and_(min-height:900px)]:flex-[0_0_960px]"
              >
                <div className="absolute inset-0">
                  <Image
                    src={item.detailImage}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1920px) 960px, (min-width: 1025px) 58vw, 0px"
                    className="object-cover object-[center_20%] transition duration-500"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/98 to-white/88 px-7 pb-5 pt-5">
                  <h3 className="text-[28px] font-sans text-brand-black">{item.title}</h3>
                  <p className="mt-3 max-w-[100%] text-[20px] leading-[1.35] font-body-light text-brand-black">
                    {item.desc}
                  </p>
                  <Link
                    href={`/industries/${item.slug}`}
                    className="mt-3 inline-flex min-w-[200px] items-center justify-between rounded-[10px_0px] border-2 border-brand-orange bg-brand-orange px-7 py-2.5 text-[19px] font-sans !text-white transition hover:bg-white hover:!text-brand-black laptop:px-10 laptop:py-2"
                  >
                    <span className="text-left laptop:-ml-3">Learn More</span>
                    <span>
                      <ArrowRightIcon />
                    </span>
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
              className="group relative h-[640px] basis-0 cursor-pointer overflow-hidden rounded-tl-[46px] rounded-br-[46px] text-left transition-[flex-basis] duration-500 ease-out laptop:flex-[1_1_0] [@media(min-width:1600px)_and_(min-height:900px)]:flex-[0_0_320px]"
            >
              <div className="absolute inset-0">
                <Image
                  src={item.cardImage}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1920px) 320px, (min-width: 1025px) 21vw, 0px"
                  className="object-cover object-[center_10%]"
                />
              </div>
              <div className="absolute inset-0 " />
              <p className="absolute bottom-0 left-7 w-[18rem] origin-top-left -rotate-90 text-left font-body-light text-[28px] leading-none text-white">
                {item.title}
              </p>
            </button>
          );
        })}
      </div>

      <div className="space-y-3 px-5 tablet:space-y-8 tablet:px-20 laptop:hidden">
        {industries.map((item, index) => {
          const open = index === activeIndex;

          if (open) {
            return (
              <article
                key={item.slug}
                className="relative mx-auto h-[483px] w-[303px] max-w-full overflow-hidden rounded-tl-[28px] rounded-br-[28px] border border-black/8 bg-[#f7f7f7] tablet:h-auto tablet:min-h-[36rem] tablet:aspect-[18/10] tablet:w-full tablet:rounded-tl-[34px] tablet:rounded-br-[34px]"
              >
                <div className="absolute inset-0">
                  <Image
                    src={item.mobileDetailImage}
                    alt={item.title}
                    fill
                    sizes="(max-width: 767px) 303px, 100vw"
                    className="object-cover tablet:object-contain tablet:scale-y-[1.00] [@media(min-width:768px)_and_(max-width:1023px)]:scale-x-[1.48] [@media(min-width:821px)_and_(max-width:1024px)]:scale-x-[2.1]"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0  bg-white/95 tablet:bg-transparent tablet:bg-gradient-to-t from-white/98 via-white/95 to-white/90 px-5 pb-4 pt-3 tablet:px-8 tablet:pb-8 tablet:pt-10">
                  <h3 className="text-[20px] font-sans text-brand-black tablet:text-[22px]">{item.title}</h3>
                  <p className="mt-3 text-[16px] leading-[1.4] font-body-light text-brand-black tablet:text-[18px]">{item.desc}</p>
                  <Link
                    href={`/industries/${item.slug}`}
                    className="mt-5 inline-flex min-w-[132px] items-center justify-center gap-1.5 rounded-[10px_0px] border-2 border-brand-orange bg-brand-orange px-3 py-1.5 text-[15px] font-sans !text-white hover:!text-white tablet:min-w-[170px] tablet:gap-3 tablet:px-5 tablet:py-2.5 tablet:text-[18px]"
                  >
                    <span className="text-left">Learn More</span>
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
              className="relative mx-auto block w-[303px] max-w-full overflow-hidden rounded-tl-[28px] rounded-br-[28px] text-left tablet:w-full tablet:rounded-tl-[34px] tablet:rounded-br-[34px]"
            >
              <div className="relative h-[64px] tablet:h-28 [@media(width:1024px)]:h-45">
                <Image src={item.mobileCropImage} alt={item.title} fill sizes="(max-width: 767px) 303px, 100vw" className="object-cover  object-[center_10%]" />
                <div className="absolute inset-0" />
                <p className="absolute bottom-3 left-4 text-[20px] font-body-light text-white tablet:bottom-auto tablet:left-1/2 tablet:top-1/2 tablet:w-full tablet:-translate-x-1/2 tablet:-translate-y-1/2 tablet:pl-4  tablet:text-[22px] [@media(width:1024px)]:translate-y-2">
                  {item.title}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
