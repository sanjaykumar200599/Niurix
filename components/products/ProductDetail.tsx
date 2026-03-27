"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import InteractiveSVGDiagram from "@/components/products/InteractiveSVGDiagram";
import type { ProductContent } from "@/lib/content/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProductDetail({ product }: { product: ProductContent }) {
  const [tab, setTab] = useState<"spec" | "dim">("spec");
  const isOlt = product.type === "OLT";
  const isXgspon8p = product.slug === "OLT-XGSPON-8P";
  const isP4200R = product.slug === "ONT-P4200R";
  const rows = useMemo(() => (tab === "spec" ? product.specifications : product.dimensions), [product, tab]);

  return (
    <div className="w-full">
      <section className="relative h-[420px] tablet:h-[560px] laptop:h-[760px]">
        <Image src={product.heroImage} alt={product.overviewTitle} fill className="hidden object-cover tablet:block" priority />
        <Image
          src={product.heroImageMobile}
          alt={product.overviewTitle}
          fill
          className={isXgspon8p ? "bg-[#f2f2f2] object-contain object-top tablet:hidden" : "object-cover tablet:hidden"}
          priority
        />
      </section>

      <section className="px-9 pb-0 pt-4 tablet:px-[78px] laptop:px-[120px] laptop:pt-20">
        <h2
          className={`nx-rich text-[28px] font-display leading-tight text-brand-black tablet:text-[34px] ${
            isOlt ? "laptop:text-[56px] laptop:leading-[1.05]" : "laptop:text-5xl"
          }`}
          dangerouslySetInnerHTML={{ __html: product.overviewHeadingHtml }}
        />

        <div className="mt-5 flex flex-col-reverse items-center gap-6 tablet:mt-8 laptop:flex-row laptop:justify-between">
          <div className="w-full laptop:w-[35%]">
            <h1 className="text-center text-[30px] font-display text-brand-black tablet:text-[40px] laptop:text-left laptop:text-5xl">
              {product.overviewTitle}
            </h1>
            <div
              className="mt-4 whitespace-pre-line text-base leading-7 text-brand-black tablet:text-lg laptop:text-xl"
              dangerouslySetInnerHTML={{ __html: product.overviewParaHtml }}
            />

            <div className="mt-8 flex justify-center laptop:justify-start">
              <Link
                href="/contact-us"
                className="inline-flex rounded-[10px_0px] border-2 border-brand-orange bg-brand-orange px-6 py-2 text-lg font-display text-white transition hover:bg-white hover:text-brand-black"
              >
                Get in touch
              </Link>
            </div>
          </div>

          <div className="w-full laptop:w-[60%]">
            <Image
              src={product.overviewImage}
              alt={product.overviewTitle}
              width={1400}
              height={900}
              className="hidden h-auto w-full rounded-tl-[45px] tablet:block"
            />
            <Image
              src={product.overviewImageMobile}
              alt={product.overviewTitle}
              width={900}
              height={700}
              className="h-auto w-full rounded-tl-[30px] tablet:hidden"
            />
          </div>
        </div>
      </section>

      <section className="px-9 pb-0 pt-12 tablet:px-[78px] tablet:pt-16 laptop:px-[120px] laptop:pt-32">
        <h2
          className="nx-rich flex min-h-[80px] items-center justify-center text-center text-[28px] font-display leading-tight text-brand-black tablet:min-h-[100px] tablet:text-[34px] laptop:min-h-[120px] laptop:text-5xl"
          dangerouslySetInnerHTML={{ __html: product.connectHeadingHtml }}
        />

        <div className="flex flex-col gap-6 laptop:flex-row laptop:items-center laptop:justify-between laptop:px-12">
          <div className="w-full laptop:w-[45%]">
            <div className={isP4200R ? "w-full" : "relative h-[300px] w-full tablet:h-[420px] laptop:h-[520px]"}>
              <InteractiveSVGDiagram
                src={product.componentImage}
                alt={`${product.overviewTitle} component`}
                productSlug={product.slug}
              />
            </div>
          </div>

          <div className="w-full text-base leading-7 text-brand-black tablet:text-lg laptop:w-[45%] laptop:text-xl">
            <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: product.connectParaHtml }} />
          </div>
        </div>
      </section>

      <section className="mt-12 px-9 tablet:mt-16 tablet:px-[78px] laptop:mt-24 laptop:px-[120px]">
        <div className="relative h-[320px] overflow-hidden tablet:h-[420px] laptop:h-[520px]">
          <Image src={product.detailImage} alt={product.detailTitle} fill className="hidden object-cover tablet:block" />
          <Image
            src={product.detailImageMobile}
            alt={product.detailTitle}
            fill
            className={isXgspon8p ? "bg-[#f2f2f2] object-contain object-top tablet:hidden" : "object-cover tablet:hidden"}
          />
          <h2 className="absolute left-4 top-4 w-[80%] text-[28px] font-display leading-tight text-white tablet:left-10 tablet:top-10 tablet:w-[60%] tablet:text-[34px] laptop:left-28 laptop:top-16 laptop:w-[40%] laptop:text-5xl">
            {product.detailTitle}
          </h2>
        </div>

        <div className="mt-[-2px] flex flex-col justify-between gap-5 bg-[#f3f3f3] px-6 py-6 tablet:px-10 tablet:py-8 laptop:h-48 laptop:flex-row laptop:items-center laptop:px-12">
          {product.highlights.map((item) => (
            <article key={item.title} className="w-full laptop:w-[30%]">
              <h3 className="text-lg font-display text-brand-orange tablet:text-xl laptop:text-2xl">{item.title}</h3>
              <p className="mt-2 text-base leading-7 text-brand-black tablet:text-lg">{item.para}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 flex w-full flex-col-reverse tablet:mt-16 laptop:mt-24 laptop:flex-row">
        <div className="w-full bg-[#f3f3f3] laptop:w-[45%]">
          <div className="flex h-full flex-col justify-center px-10 py-10 tablet:px-20 tablet:py-16 laptop:min-h-[50rem] laptop:px-24">
            <h2 className="mb-8 text-[30px] font-display leading-tight text-brand-black tablet:text-[34px] laptop:text-5xl">
              General Product Specifications of Niurix {product.model}
            </h2>

            <div className="flex w-full justify-between">
              <button
                type="button"
                onClick={() => setTab("spec")}
                className={`border-b-[3px] pb-1 text-[26px] font-display tablet:text-[30px] ${
                  tab === "spec" ? "border-brand-orange text-brand-orange" : "border-transparent text-brand-black/30"
                }`}
              >
                {product.specificationHeading}
              </button>
              <button
                type="button"
                onClick={() => setTab("dim")}
                className={`border-b-[3px] pb-1 text-[26px] font-display tablet:text-[30px] ${
                  tab === "dim" ? "border-brand-orange text-brand-orange" : "border-transparent text-brand-black/30"
                }`}
              >
                {product.dimensionsHeading}
              </button>
            </div>

            <div className="mt-8 space-y-3">
              {rows.map((row) => (
                <div key={row.title} className="flex w-full justify-between gap-6 text-base tablet:text-lg laptop:text-xl">
                  <p className="w-[58%] text-brand-black">{row.title}</p>
                  <p className="w-[38%] text-brand-black">{row.value}</p>
                </div>
              ))}
            </div>

            {product.pdf ? (
              <a
                href={product.pdf}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-[10px_0px] border-2 border-brand-orange bg-brand-orange px-5 py-2 text-lg font-display text-white transition hover:bg-white hover:text-brand-black"
              >
                Download
              </a>
            ) : null}
          </div>
        </div>

        <div className="w-full laptop:h-[60rem] laptop:w-[55%]">
          <Swiper modules={[Pagination, Navigation]} navigation pagination={{ clickable: true }} loop className="h-[420px] tablet:h-[640px] laptop:h-full">
            {product.specSlides.map((slide) => (
              <SwiperSlide key={slide}>
                <div className="relative h-full w-full">
                  <Image src={slide} alt={`${product.overviewTitle} spec`} fill className="object-cover" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {product.youtubeEmbed ? (
        <section className="mt-8 px-7 tablet:px-20 laptop:mt-32 laptop:px-72">
          <iframe
            className="h-[240px] w-full tablet:h-[420px] laptop:h-[800px]"
            src={product.youtubeEmbed}
            title={`${product.overviewTitle} video`}
            allowFullScreen
          />
        </section>
      ) : null}
    </div>
  );
}
