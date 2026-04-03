"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import InteractiveSVGDiagram from "@/components/products/InteractiveSVGDiagram";
import type { ProductContent } from "@/lib/content/types";

export default function ProductDetail({ product }: { product: ProductContent }) {
  const [tab, setTab] = useState<"spec" | "dim">("spec");
  const isOlt = product.type === "OLT";
  const isXgspon8p = product.slug === "OLT-XGSPON-8P";
  const isP4200R = product.slug === "ONT-P4200R";
  const isT2001 = product.slug === "ONT-T2001";
  const isSolt33_8p = product.slug === "OLT-SOLT33-8P";
  const splitSimplerConnectivity = product.detailTitle.includes("Simpler Connectivity");
  const rows = useMemo(() => (tab === "spec" ? product.specifications : product.dimensions), [product, tab]);

  return (
    <div className="w-full">
      <section className="relative h-[720px] tablet:h-[700px] laptop:h-[860px]">
        <Image src={product.heroImage} alt={product.overviewTitle} fill sizes="(max-width: 1023px) 0px, 100vw" className="hidden object-cover laptop:block" priority />
        <Image
          src={product.heroImageMobile}
          alt={product.overviewTitle}
          fill
          sizes="(max-width: 1023px) 100vw, 0px"
          className="object-cover object-[center_30%] laptop:hidden"
          priority
        />
      </section>

      <section className="px-9 pb-0 pt-4 tablet:px-[78px] laptop:px-[120px] laptop:pt-20">
        <h2
          className={`nx-rich text-[24px] font-display leading-tight text-brand-black tablet:text-[30px] ${
            isOlt ? "laptop:text-[48px] laptop:leading-[1.05]" : "laptop:text-[44px]"
          }`}
          dangerouslySetInnerHTML={{ __html: product.overviewHeadingHtml }}
        />

        <div className="mt-5 flex flex-col-reverse items-center gap-4 tablet:mt-8 tablet:gap-6 laptop:flex-row laptop:items-stretch laptop:justify-between">
          <div className="w-full laptop:w-[30%]">
            <h1 className="text-center text-[22px] font-display text-brand-black tablet:text-[28px] laptop:text-left laptop:text-[24px]">
              {product.overviewTitle}
            </h1>
            <div
              className="mt-3 whitespace-pre-line text-left text-[16px] font-normal leading-[1.45] text-brand-black/80 tablet:mt-4 tablet:text-lg tablet:leading-8 laptop:text-xl"
              dangerouslySetInnerHTML={{ __html: product.overviewParaHtml }}
            />

            <div className="mt-6 flex justify-center laptop:mt-8 laptop:justify-start">
              <Link
                href="/contact-us"
                className="group inline-flex flex-col rounded-[10px_0px] border-2 border-brand-orange bg-brand-orange px-6 py-2 text-left text-lg font-display leading-tight text-white transition-colors duration-200 hover:bg-white hover:text-brand-black"
              >
                <span className="text-white transition-colors duration-200 group-hover:text-brand-black">Get in</span>
                <span className="text-white transition-colors duration-200 group-hover:text-brand-black">touch</span>
              </Link>
            </div>
          </div>

          <div className="relative h-[360px] w-full overflow-hidden rounded-tl-[30px] tablet:h-[600px] tablet:rounded-tl-[45px] laptop:h-auto laptop:w-[70%] laptop:self-stretch laptop:min-h-[760px]">
            <Image
              src={product.overviewImage}
              alt={product.overviewTitle}
              fill
              sizes="(max-width: 767px) 0px, (max-width: 1023px) 100vw, 70vw"
              className="hidden object-contain object-center tablet:block"
            />
            <Image
              src={product.overviewImageMobile}
              alt={product.overviewTitle}
              fill
              sizes="(max-width: 1023px) 100vw, 0px"
              className="object-cover object-[center_54%] tablet:hidden"
            />
          </div>
        </div>
      </section>

      <section className="px-9 pb-0 pt-8 tablet:px-[78px] tablet:pt-12 laptop:px-[120px] laptop:pt-16">
        <h2
          className="nx-rich mb-6 flex min-h-[52px] items-center justify-center whitespace-nowrap text-center text-[17px] font-display font-normal leading-tight tracking-normal text-brand-black tablet:mb-10 tablet:min-h-[78px] tablet:whitespace-normal tablet:text-[28px] laptop:mb-12 laptop:min-h-[88px] laptop:text-[40px]"
          dangerouslySetInnerHTML={{ __html: product.connectHeadingHtml }}
        />

        <div className="flex flex-col gap-3 laptop:flex-row laptop:items-start laptop:justify-between laptop:px-12">
          <div className="w-full laptop:w-[45%]">
            <div className={isP4200R || isT2001 || isSolt33_8p || isXgspon8p ? "w-full" : "relative h-[300px] w-full tablet:h-[420px] laptop:h-[520px]"}>
              <InteractiveSVGDiagram
                src={product.componentImage}
                alt={`${product.overviewTitle} component`}
                productSlug={product.slug}
              />
            </div>
          </div>

          <div className="w-full pt-1 text-left text-[16px] font-normal leading-[1.35] text-brand-black/80 tablet:pt-4 tablet:text-lg tablet:leading-8 laptop:w-[42%] laptop:pt-12 laptop:text-lg">
            <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: product.connectParaHtml }} />
          </div>
        </div>
      </section>

      <section className="mt-15 px-9 tablet:mt-16 tablet:px-[78px] laptop:mt-24 laptop:px-[120px]">
        <div className="relative aspect-[4/3] overflow-hidden tablet:h-[520px] tablet:aspect-auto laptop:h-[660px]">
          <Image src={product.detailImage} alt={product.detailTitle} fill sizes="(max-width: 1023px) 0px, 100vw" className="hidden object-cover laptop:block" />
          <Image
            src={product.detailImageMobile}
            alt={product.detailTitle}
            fill
            sizes="(max-width: 1023px) 100vw, 0px"
            className="object-cover object-[center_54%] tablet:hidden"
          />
          <h2 className="absolute left-4 top-5 z-10 w-[76%] pb-2 text-[17px] font-display leading-tight text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.5)] tablet:left-10 tablet:top-12 tablet:w-[64%] tablet:pb-0 tablet:text-[34px] tablet:[text-shadow:none] laptop:left-28 laptop:top-16 laptop:w-[42%] laptop:text-4xl">
            {splitSimplerConnectivity ? (
              <>
                <span className="laptop:hidden">
                  The Twist Towards
                  <br />
                  <span className="whitespace-nowrap">Simpler Connectivity</span>
                </span>
                <span className="hidden laptop:inline">
                  <span className="whitespace-nowrap">The Twist Towards Simpler</span>
                  <br />
                  <span className="whitespace-nowrap">Connectivity</span>
                </span>
              </>
            ) : (
              product.detailTitle
            )}
          </h2>
        </div>

        <div className="mt-[-2px] flex flex-col justify-between gap-5 bg-[#f3f3f3] px-7 py-7 tablet:px-12 tablet:py-10 laptop:h-[220px] laptop:flex-row laptop:items-start laptop:px-14">
          {product.highlights.map((item) => (
            <article key={item.title} className="w-full laptop:w-[30%]">
              <h3 className="text-lg font-display text-brand-orange tablet:text-xl laptop:text-2xl">{item.title}</h3>
              <p className="mt-1 text-base leading-[1.45] text-brand-black tablet:mt-2 tablet:text-lg tablet:leading-7">{item.para}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-28 flex w-full flex-col-reverse tablet:mt-16 laptop:mt-24 laptop:flex-row">
        <div className="w-full bg-[#f3f3f3] laptop:w-[45%]">
          <div className="flex h-full flex-col justify-start px-10 pb-10 pt-8 tablet:px-20 tablet:pb-16 tablet:pt-10 laptop:min-h-[50rem] laptop:px-24 laptop:pt-28">
            <h2 className="mb-8 text-[20px] font-sans leading-tight text-brand-black tablet:text-[26px] laptop:text-[30px]">
              <span className="whitespace-nowrap">General Product Specifications</span>
              <br />
              of Niurix {product.model}
              {product.type === "ONT" ? " ONT" : ""}
            </h2>

            <div className="flex w-full justify-between">
              <button
                type="button"
                onClick={() => setTab("spec")}
                className={`border-b-[3px] pb-1 text-[24px] font-display tablet:text-[28px] laptop:text-[24px] ${
                  tab === "spec" ? "border-brand-orange text-brand-orange" : "border-transparent text-brand-black/30"
                }`}
              >
                {product.specificationHeading}
              </button>
              <button
                type="button"
                onClick={() => setTab("dim")}
                className={`border-b-[3px] pb-1 text-[24px] font-display tablet:text-[28px] laptop:text-[24px] ${
                  tab === "dim" ? "border-brand-orange text-brand-orange" : "border-transparent text-brand-black/30"
                }`}
              >
                {product.dimensionsHeading}
              </button>
            </div>

            <div className="mt-8 min-h-[14rem] space-y-3 tablet:min-h-0">
              {rows.map((row) => (
                <div key={row.title} className="flex w-full justify-between gap-6 text-base tablet:text-lg laptop:text-[20px]">
                  <p className="w-[58%] text-brand-black">{row.title}</p>
                  <p className="w-[38%] text-brand-black">{row.value}</p>
                </div>
              ))}
            </div>

            {product.pdf ? (
              <>
                <p className="mt-12 text-[18px] text-brand-black/75 tablet:mt-8 tablet:text-[20px] laptop:text-[20px]">Click to download the full specifications</p>
                <a
                  href={product.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex w-fit items-center gap-2 rounded-[10px_0px] border-2 border-brand-orange bg-brand-orange px-5 py-[6px] text-lg font-display !text-white transition-colors duration-200 hover:bg-white hover:!text-black"
                >
                  Download
                </a>
              </>
            ) : null}
          </div>
        </div>

        <div className="w-full laptop:h-[52rem] laptop:w-[55%]"> 
          <Swiper modules={[Pagination, Navigation]} navigation pagination={{ clickable: true }} loop className="product-spec-swiper h-[420px] tablet:h-[560px] laptop:h-full">
            {product.specSlides.map((slide) => (
              <SwiperSlide key={slide}>
                <div className="relative h-full w-full">
                  <Image src={slide} alt={`${product.overviewTitle} spec`} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
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






























































































