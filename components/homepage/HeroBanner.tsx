"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Parallax } from "swiper/modules";
import type { HomeData } from "@/lib/content/types";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroBanner({ banners }: { banners: HomeData["banners"] }) {
  return (
    <div className="homepage-swiper relative">
      <Swiper modules={[Pagination, Parallax]} speed={600} parallax pagination={{ clickable: true }}>
        {banners.map((item) => (
          <SwiperSlide key={item.solutionSlug}>
            <div className="relative h-[34rem] overflow-hidden tablet:h-[64rem] laptop:h-[68rem] [@media(min-width:768px)_and_(max-width:1024px)_and_(orientation:landscape)]:h-[48rem] [@media(min-width:1025px)_and_(max-width:1366px)]:h-[60rem]">
              <div className="absolute inset-0 hidden tablet:block" data-swiper-parallax="-23%">
                <Image src={item.image} alt={item.title} fill priority className="object-cover" />
              </div>

              <div className="absolute inset-0 tablet:hidden" data-swiper-parallax="-23%">
                <Image src={item.imageMobile} alt={item.title} fill priority className="object-cover" />
              </div>

              <div className="absolute inset-0 bg-black/35" />

              <div
                className="absolute inset-x-0 top-[15rem] z-10 flex flex-col items-center px-6 text-center text-white tablet:top-[28rem] tablet:px-19.5 laptop:top-[24rem] laptop:px-30 [@media(min-width:768px)_and_(max-width:1024px)_and_(orientation:landscape)]:top-[20rem]"
                data-swiper-parallax="-300"
              >
                <h1 className="max-w-5xl text-[30px] font-display leading-tight tablet:text-[34px] laptop:text-[48px]">
                  {item.title}
                </h1>

                <p className="mt-3 max-w-4xl text-[16px] font-body-light tablet:text-lg laptop:text-[20px]">
                  {item.para}
                </p>

                <Link
                  href={`/solutions/${item.solutionSlug}`}
                  className="mt-5 inline-flex rounded-[10px_0px] border-2 border-brand-orange bg-transparent px-6 py-1.5 text-base font-sans text-white transition hover:bg-brand-orange hover:text-black tablet:text-lg laptop:text-[20px]"
                >
                  Explore
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}