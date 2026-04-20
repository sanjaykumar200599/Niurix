"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Parallax } from "swiper/modules";
import type { HomeData } from "@/lib/content/types";

export default function HeroBanner({ banners }: { banners: HomeData["banners"] }) {
  return (
    <div className="homepage-swiper relative">
      <Swiper modules={[Pagination, Parallax]} speed={600} parallax pagination={{ clickable: true }}>
        {banners.map((item, index) => {
          const mobilePara = item.para.replace("Multiple Services", "Multiple Services");
          const isFirstSlide = index === 0;

          return (
            <SwiperSlide key={item.solutionSlug}>
              <div className="relative h-176 overflow-hidden tablet:h-256 laptop:h-272 [@media(min-width:768px)_and_(max-width:1024px)_and_(orientation:landscape)]:h-192 [@media(min-width:1025px)_and_(max-width:1366px)]:h-240">
                <div className="absolute inset-0 hidden tablet:block" data-swiper-parallax="-23%">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 767px) 0px, 100vw"
                    priority={isFirstSlide}
                    fetchPriority={isFirstSlide ? "high" : "auto"}
                    className="object-cover scale-100 object-[42%_44%] brightness-[1.1] laptop:scale-[1.00] laptop:object-[15%_25%]"
                  />
                </div>

                <div className="absolute inset-0 tablet:hidden" data-swiper-parallax="-23%">
                  <Image
                    src={item.imageMobile}
                    alt={item.title}
                    fill
                    sizes="(max-width: 767px) 100vw, 0px"
                    priority={isFirstSlide}
                    fetchPriority={isFirstSlide ? "high" : "auto"}
                    className="object-cover scale-100 object-[42%_44%] brightness-[1.1] laptop:scale-[1.06] laptop:object-[15%_25%]"
                  />
                </div>

                <div className="absolute inset-0 bg-black/16 laptop:bg-black/12" />

                <div
                  className="absolute inset-x-0 top-44 z-10 flex flex-col items-start px-6 text-left text-white tablet:top-112 tablet:items-center tablet:px-19.5 tablet:text-center laptop:top-96 laptop:px-30 [@media(min-width:768px)_and_(max-width:1024px)_and_(orientation:landscape)]:top-80"
                  data-swiper-parallax="-300"
                >
                  <h1 className="max-w-[20rem] text-[30px] font-display leading-[1.12] tablet:max-w-5xl tablet:text-[34px] tablet:leading-tight laptop:text-[48px] pb-6">
                    {item.title}
                  </h1>

                  <p className="mt-5 max-w-[24rem] whitespace-pre-line text-[16px] leading-[1.3] font-body-light tablet:hidden">
                    {mobilePara}
                  </p>

                  <p className="mt-3 hidden max-w-4xl text-lg leading-normal font-body-light tablet:block laptop:mt-5 laptop:text-[20px] pb-2">
                    {item.para}
                  </p>

                  <Link
                    href={`/solutions/${item.solutionSlug}`}
                    className="mt-10 inline-flex self-center rounded-[10px_0px] border-2 border-brand-orange bg-transparent px-6 py-1 text-base font-body-light text-white transition hover:bg-brand-orange hover:text-black tablet:mt-5 tablet:self-auto tablet:text-lg laptop:mt-7 laptop:text-[20px]"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
