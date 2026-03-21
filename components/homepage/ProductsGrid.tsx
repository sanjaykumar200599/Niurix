"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { HomeData } from "@/lib/content/types";

function ArrowIcon({ direction = "next", disabled = false }: { direction?: "next" | "prev"; disabled?: boolean }) {
  const stroke = disabled ? "#D9D9D9" : "#FF5B02";
  return (
    <svg
      viewBox="0 0 12.242 21.483"
      className={`h-full w-full ${direction === "prev" ? "rotate-180" : ""}`}
      fill="none"
      aria-hidden
    >
      <path
        d="M17.24,8.621,8.62,0,0,8.621"
        transform="translate(10.742 2.121) rotate(90)"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
    </svg>
  );
}

function LearnMoreArrow() {
  return (
    <svg viewBox="0 0 12.242 21.483" className="h-6 w-6" fill="none" aria-hidden>
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

export default function ProductsGrid({ products }: { products: HomeData["products"] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const selected = useMemo(() => products[activeIndex] ?? products[0], [activeIndex, products]);
  const options = useMemo(() => products.filter((_, idx) => idx !== activeIndex), [activeIndex, products]);

  if (!selected) return null;

  const goPrev = () => setActiveIndex((prev) => (prev <= 0 ? 0 : prev - 1));
  const goNext = () => setActiveIndex((prev) => (prev >= products.length - 1 ? products.length - 1 : prev + 1));

  return (
    <div>
      <div className="hidden w-full rounded-tl-[50px] bg-[#ebebeb] laptop:flex">
        <div className="w-[95%]">
          <div className="flex flex-col gap-8 px-5 py-8 laptop:px-10 [@media(min-width:1367px)]:gap-12 [@media(min-width:1367px)]:px-12">
            <p className="-ml-3 font-number text-[110px] leading-none text-white [@media(min-width:1201px)]:text-[150px] [@media(min-width:1367px)]:-ml-7 [@media(min-width:1367px)]:text-[200px]">
              {selected.name}
            </p>

            <div className="flex min-h-[18rem] items-center justify-evenly [@media(min-width:1367px)]:h-[15rem]">
              <div className="flex w-[50%] justify-center">
                <div className="relative h-[220px] w-[300px] [@media(min-width:1367px)]:h-[260px] [@media(min-width:1367px)]:w-[360px]">
                  <Image
                    src={selected.image}
                    alt={selected.name}
                    fill
                    className="object-contain drop-shadow-[2px_64px_10px_rgba(0,0,0,0.1)] transition duration-500 hover:-translate-y-3"
                  />
                </div>
              </div>

              <div className="flex w-[45%] flex-col">
                <h3 className="flex items-center gap-2 text-[24px] font-display text-brand-black [@media(min-width:1367px)]:text-[28px]">
                  {selected.name}
                  <span className="text-brand-orange">({selected.type})</span>
                </h3>
                <p className="mt-4 w-[95%] text-[18px] font-body-light text-brand-black [@media(min-width:1367px)]:w-[80%] [@media(min-width:1367px)]:text-[20px]">
                  {selected.desc}
                </p>
                <Link
                  href={`/products/${selected.slug}`}
                  className="group mt-4 inline-flex h-[86px] w-[150px] items-center justify-between rounded-[10px_0px] border-2 border-brand-orange bg-brand-orange px-4 text-white transition hover:bg-white hover:text-black [@media(min-width:1367px)]:h-[92px] [@media(min-width:1367px)]:w-[160px]"
                >
                  <span className="text-left text-[18px] leading-[1.05] [@media(min-width:1367px)]:text-[20px]">Learn<br />More</span>
                  <LearnMoreArrow />
                </Link>
              </div>
            </div>

            <div className="mt-2 flex w-[95%] justify-end gap-4 [@media(min-width:1367px)]:w-[85%] [@media(min-width:1367px)]:gap-6">
              {options.map((item) => (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => setActiveIndex(products.findIndex((prod) => prod.slug === item.slug))}
                  className="group rounded-[10px_0px] border-2 border-white px-7 py-4 transition hover:border-brand-orange [@media(min-width:1367px)]:px-12 [@media(min-width:1367px)]:py-6"
                >
                  <div className="relative h-10 w-12 [@media(min-width:1367px)]:h-12 [@media(min-width:1367px)]:w-16">
                    <Image src={item.image} alt={item.name} fill className="object-contain transition duration-300 group-hover:-translate-y-1" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex w-[5%] items-center bg-[#e1e1e1]">
          <div className="mx-auto flex flex-col items-center gap-8">
            <button type="button" onClick={goPrev} disabled={activeIndex === 0} className="h-8 w-8">
              <ArrowIcon direction="prev" disabled={activeIndex === 0} />
            </button>
            <button type="button" onClick={goNext} disabled={activeIndex === products.length - 1} className="h-8 w-8">
              <ArrowIcon direction="next" disabled={activeIndex === products.length - 1} />
            </button>
          </div>
        </div>
      </div>

      <div className="relative flex laptop:hidden">
        <div className="w-[95%] rounded-tl-[25px] bg-[#ebebeb] px-5 py-5 tablet:rounded-tl-[40px] tablet:px-10 tablet:py-8">
          <p className="font-number text-[45px] leading-none text-white tablet:text-[100px]">{selected.name}</p>

          <div className="mt-3 flex items-center justify-evenly">
            <button type="button" onClick={goPrev} disabled={activeIndex === 0} className="h-8 w-8 tablet:h-10 tablet:w-10">
              <ArrowIcon direction="prev" disabled={activeIndex === 0} />
            </button>

            <div className="relative h-40 w-40 tablet:h-60 tablet:w-60">
              <Image src={selected.image} alt={selected.name} fill className="object-contain" />
            </div>

            <button type="button" onClick={goNext} disabled={activeIndex === products.length - 1} className="h-8 w-8 tablet:h-10 tablet:w-10">
              <ArrowIcon direction="next" disabled={activeIndex === products.length - 1} />
            </button>
          </div>

          <div className="mt-5 flex flex-col items-center">
            <h3 className="flex items-center gap-1 text-[20px] font-display text-brand-black tablet:text-[22px]">
              {selected.name}
              <span className="text-brand-orange">({selected.type})</span>
            </h3>
            <p className="mt-3 text-center text-[16px] font-body-light text-brand-black tablet:text-[18px]">{selected.desc}</p>
            <Link
              href={`/products/${selected.slug}`}
              className="mt-4 inline-flex items-center justify-center rounded-[10px_0px] border-2 border-brand-orange bg-brand-orange px-4 py-2 text-[16px] font-sans text-white tablet:text-[18px]"
            >
              Learn More
            </Link>
          </div>

          <div className="mt-4 flex justify-around gap-3 tablet:mt-6 tablet:justify-center tablet:gap-8">
            {options.map((item) => (
              <button
                key={item.slug}
                type="button"
                onClick={() => setActiveIndex(products.findIndex((prod) => prod.slug === item.slug))}
                className="rounded-[10px_0px] border-2 border-white px-5 py-3 tablet:px-10 tablet:py-4"
              >
                <div className="relative h-8 w-10 tablet:h-12 tablet:w-16">
                  <Image src={item.image} alt={item.name} fill className="object-contain" />
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="w-[5%] bg-[#e1e1e1]" />
      </div>
    </div>
  );
}
