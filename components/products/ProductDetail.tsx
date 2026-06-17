"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
  const isLegacyDiagram = isP4200R || isT2001 || isSolt33_8p || isXgspon8p;
  const splitSimplerConnectivity = product.detailTitle.includes("Simpler Connectivity");
  return (
    <div className="w-full">
      <section className="relative mx-auto h-[813.21px] w-[375.2px] tablet:-mt-[72px] tablet:h-[800px] tablet:w-full [@media(width:768px)]:w-[768px] laptop:mt-0 laptop:h-[860px] laptop:w-full [@media(min-width:1600px)_and_(min-height:900px)]:h-[1080px]">
        <Image src={product.heroImage} alt={product.overviewTitle} fill sizes="(max-width: 1023px) 0px, 100vw" className="hidden object-cover laptop:block" priority />
        <div className="absolute inset-0 hidden overflow-hidden tablet:block laptop:hidden">
          <div className="relative h-full w-full tablet:scale-y-[1.85] laptop:scale-y-100 [@media(width:1024px)]:scale-y-[1.4]">
            <Image
              src={product.heroImage}
              alt={product.overviewTitle}
              fill
              sizes="(max-width: 767px) 0px, (max-width: 1023px) 100vw, 0px"
              className="object-contain object-center"
              priority
            />
          </div>
        </div>
        <Image
          src={product.heroImageMobile}
          alt={product.overviewTitle}
          fill
          sizes="(max-width: 767px) 100vw, 0px"
          className="object-cover tablet:hidden scale-[1.00] -translate-y-18"
          priority
        />
      </section>

      <section className="px-9 pb-0 pt-0 tablet:px-[78px] tablet:pt-8 laptop:px-0 laptop:pt-30">
        <h2
          className={`nx-rich mb-8 text-[20px] font-body-medium leading-tight text-[#000000] tablet:mb-0 tablet:text-[28px] laptop:px-[120px] ${
            isOlt ? "laptop:text-[48px] laptop:leading-[1.05]" : "laptop:text-[40px]"
          }`}
          dangerouslySetInnerHTML={{ __html: product.overviewHeadingHtml }}
        />

        <div className="mt-0 flex flex-col-reverse items-center gap-4 tablet:mt-8 tablet:gap-6 laptop:flex-row laptop:items-start laptop:justify-between laptop:pl-[120px] ">
          <div className="w-full laptop:w-[28%] laptop:max-w-[480px] laptop:pt-10 [@media(min-width:1600px)_and_(min-height:900px)]:w-[480px] [@media(min-width:1600px)_and_(min-height:900px)]:max-w-[480px] [@media(min-width:1600px)_and_(min-height:900px)]:pt-45">
            <h1 className="text-center text-[18px] font-sans text-brand-black tablet:text-[20px] laptop:text-left laptop:text-[24px]">
              {product.overviewTitle}
            </h1>
            <div
              className="mt-3 whitespace-pre-line text-left text-[16px] font-body-light leading-[1.35] text-color-brand-black/80 tablet:mt-4 tablet:text-lg tablet:leading-[1.35] laptop:text-[20px] laptop:leading-[1.45]"
              dangerouslySetInnerHTML={{ __html: product.overviewParaHtml }}
            />

            <div className="mt-6 flex justify-center laptop:mt-8 laptop:justify-start">
              <Link
                href="/contact-us"
                className="group inline-flex rounded-[10px_0px] border-2 border-brand-orange bg-brand-orange pl-2 pr-14 py-2 text-[20px] font-sans leading-tight text-white transition-colors duration-200 hover:bg-white hover:text-brand-black tablet:px-3 laptop:pl-2 laptop:pr-14 laptop:text-[20px] [@media(min-width:1600px)_and_(min-height:900px)]:py-2.5 [@media(min-width:1600px)_and_(min-height:900px)]:px-6 [@media(min-width:1600px)_and_(min-height:900px)]:pr-6"
              >
                <span className="text-white transition-colors duration-200 group-hover:text-brand-black ">
                  <span className="block tablet:inline">Get in</span>
                  <span className="block tablet:ml-1 tablet:inline">touch</span>
                </span>
              </Link>
            </div>
          </div>

          <div className="relative h-[293.02px] w-[303.2px] overflow-hidden rounded-tl-[30px] tablet:h-[449px] tablet:w-[608px] tablet:rounded-tl-[45px] laptop:h-auto laptop:w-[min(72vw,1181px)] laptop:aspect-[1181/874] laptop:self-start laptop:min-h-0 [@media(min-width:1600px)_and_(min-height:900px)]:h-[874px] [@media(min-width:1600px)_and_(min-height:900px)]:w-[1181px] [@media(width:1024px)]:h-[639.4px] [@media(width:1024px)]:w-[864px]">
            <Image
              src={product.overviewImage}
              alt={product.overviewTitle}
              fill
              sizes="(max-width: 767px) 0px, (max-width: 1023px) 100vw, (min-width: 1920px) 1181px, 76vw"
              className="hidden object-contain object-center tablet:block ["
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

      <section className="px-9 pb-5 pt-8 tablet:px-[78px] tablet:pt-12 laptop:px-[120px] laptop:pt-24 [@media(min-width:1600px)_and_(min-height:900px)]:pb-20">
        <h2
          className="nx-rich mb-6 flex min-h-[52px] items-center justify-center whitespace-nowrap text-center text-[20px] font-body-medium font-normal leading-tight tracking-normal text-brand-black tablet:mb-10 tablet:min-h-[78px] tablet:whitespace-normal tablet:text-[28px] laptop:mb-12 laptop:min-h-[88px] laptop:text-[40px]"
          dangerouslySetInnerHTML={{ __html: product.connectHeadingHtml }}
        />

        <div className="flex flex-col gap-3 laptop:flex-row laptop:items-center laptop:justify-between laptop:px-12 [@media(min-width:1600px)_and_(min-height:900px)]:justify-start [@media(min-width:1600px)_and_(min-height:900px)]:gap-30 ">
          <div className="w-full laptop:w-[50%] laptop:flex laptop:justify-start">
            <div
              className={
                isLegacyDiagram
                  ? "w-fit max-w-[830px] [@media(min-width:1600px)_and_(min-height:900px)]:origin-top-left [@media(min-width:1600px)_and_(min-height:900px)]:scale-[1.12] [@media(width:1024px)]:w-[844px] [@media(width:1024px)]:max-w-[844px] "
                  : "relative h-[300px] w-full tablet:h-[420px] laptop:h-[520px]  cursor-default"
              }
            >
              <InteractiveSVGDiagram
                src={product.componentImage}
                alt={`${product.overviewTitle} component`}
                productSlug={product.slug}
              />
            </div>
          </div>

          <div className="w-full pt-1 text-left text-[16px] font-body-light leading-[1.35] text-[#1D1D1D] tablet:pt-4 tablet:text-lg tablet:leading-[1.35] laptop:w-[38%] laptop:pt-0 laptop:self-center laptop:text-[20px] laptop:leading-[1.32] [@media(min-width:1600px)_and_(min-height:900px)]:w-[38%] [@media(min-width:1600px)_and_(min-height:900px)]:mt-22 [@media(min-width:1600px)_and_(min-height:900px)]:pr-4 !cursor-default">
            <div className="whitespace-pre-wrap select-none" dangerouslySetInnerHTML={{ __html: product.connectParaHtml }} />
          </div>
        </div>
      </section>

      <section className="mt-15 px-9 tablet:mt-16 tablet:px-[78px] laptop:mt-24 laptop:px-[120px]">
        <div className="relative mx-auto h-[320px] w-[303.2px] overflow-hidden bg-[#bdbdbd] tablet:h-[560px] tablet:w-full tablet:aspect-auto laptop:h-[660px] [@media(min-width:1600px)_and_(min-height:900px)]:h-[838px]">
          <Image src={product.detailImage} alt={product.detailTitle} fill sizes="100vw" className="hidden object-cover tablet:block tablet:object-contain tablet:scale-x-[1.0] tablet:scale-y-[1.85]  laptop:object-cover laptop:scale-100" />
          <Image
            src={product.detailImageMobile}
            alt={product.detailTitle}
            fill
            sizes="(max-width: 1023px) 100vw, 0px"
            className="object-contain object-center scale-x-[1.00] scale-y-[1.76] tablet:hidden"
          />
          <h2 className="absolute left-4 top-5 z-10 w-[76%] pb-2 text-[20px] font-sans leading-tight text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.5)] tablet:left-10 tablet:top-12 tablet:w-[74%] tablet:pb-0 tablet:text-[28px] tablet:[text-shadow:none] laptop:left-28 laptop:top-16 laptop:w-[42%] laptop:text-4xl[@media(min-width:1600px)_and_(min-height:900px)]:text-[40px]">
            {splitSimplerConnectivity ? (
              <>
                <span className="tablet:hidden">
                  The Twist Towards 
                  <br />
                  <span className="whitespace-nowrap ">Simpler Connectivity</span>
                </span>
                <span className="hidden tablet:inline laptop:hidden">{product.detailTitle}</span>
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
              <h3 className="text-[16px] font-body-light text-brand-orange tablet:text-[18px] tablet:font-display laptop:font-body-light laptop:text-[20px] [@media(width:1024px)]:font-body-light">{item.title}</h3>
              <p className="mt-1 text-base font-body-light leading-[1.35] laptop:text-xl text-[#000000] tablet:mt-1 tablet:text-lg tablet:leading-[1.35]">{item.para}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 flex w-full flex-col-reverse tablet:mt-16 laptop:mt-24 laptop:flex-row laptop:items-stretch">
        <div className="w-full p-2 tablet:p-0 bg-[#f3f3f3] laptop:w-[45%]">
          <div className="flex h-full flex-col justify-start px-10 pb-10 pt-8 tablet:px-[72px] tablet:pb-16 tablet:pt-28 laptop:min-h-[50rem] laptop:px-24 laptop:pt-30 laptop:ml-12">
            <h2 className="mb-8 text-[20px] font-sans leading-tight text-brand-black tablet:text-[22px] laptop:text-[28px] [@media(min-width:1600px)_and_(min-height:900px)]:w-[92%]">
              {product.specTitle}
            </h2>

            <div className="flex w-full justify-between tablet:justify-start tablet:gap-[10.5rem] laptop:justify-start laptop:gap-12 [@media(min-width:1600px)_and_(min-height:900px)]:gap-40 [@media(width:1024px)]:gap-84">
              <button
                type="button"
                onClick={() => setTab("spec")}
                className={`border-b-[3px] pb-1 text-[20px] font-body-medium tablet:text-[22px] laptop:w-[170px] laptop:text-left laptop:text-[28px] ${
                  tab === "spec" ? "border-brand-orange text-brand-orange" : "border-transparent text-brand-black/30"
                }`}
              >
                {product.specificationHeading}
              </button>
              <button
                type="button"
                onClick={() => setTab("dim")}
                className={`border-b-[3px] pb-1 text-[20px]  font-body-medium tablet:text-[22px] laptop:ml-0 laptop:w-fit laptop:text-left laptop:text-[28px] ${
                  tab === "dim" ? "border-brand-orange text-brand-orange" : "border-transparent text-brand-black/30"
                }`}
              >
                {product.dimensionsHeading}
              </button>
            </div>

            <div className="mt-8 grid font-body-light [grid-template-areas:'stack']">
              <div
                aria-hidden={tab !== "spec"}
                className={`space-y-3 [grid-area:stack] ${tab === "spec" ? "visible" : "invisible pointer-events-none"}`}
              >
                {product.specifications.map((row) => (
                  <div key={`spec-${row.title}`} className="flex w-full gap-6 text-base tablet:text-lg [@media(min-width:768px)_and_(max-width:1024px)]:leading-[1.5] laptop:gap-8 laptop:text-[20px]">
                    <p className="w-[52%] text-brand-black tablet:w-[45%] [@media(min-width:768px)_and_(max-width:1024px)]:leading-[2.25] laptop:w-[35%]">{row.title}</p>
                    <p className="w-[44%] pl-5 text-brand-black tablet:w-[38%] tablet:pl-0 [@media(min-width:768px)_and_(max-width:1024px)]:leading-[1.55] laptop:ml-20 laptop:w-[56%] [@media(min-width:1600px)_and_(min-height:900px)]:w-[22%]">
                      {row.value}
                    </p>
                  </div>
                ))}
              </div>

              <div
                aria-hidden={tab !== "dim"}
                className={`space-y-3 [grid-area:stack] ${tab === "dim" ? "visible" : "invisible pointer-events-none"}`}
              >
                {product.dimensions.map((row) => (
                  <div key={`dim-${row.title}`} className="flex w-full gap-6 text-base tablet:text-lg [@media(min-width:768px)_and_(max-width:1024px)]:leading-[1.5] laptop:gap-8 laptop:text-[20px]">
                    <p className="w-[52%] text-brand-black tablet:w-[45%] [@media(min-width:768px)_and_(max-width:1024px)]:leading-[2.25] laptop:w-[35%]">{row.title}</p>
                    <p className="w-[44%] pl-5 text-brand-black tablet:w-[38%] tablet:pl-0 [@media(min-width:768px)_and_(max-width:1024px)]:leading-[1.55] laptop:ml-20 laptop:w-[56%] [@media(min-width:1600px)_and_(min-height:900px)]:w-[22%]">
                      {row.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {product.pdf ? (
              <>
                <p className="mt-40 text-[16px] font-body-light text-[#1D1D1D] tablet:mt-45 laptop:mt-0 tablet:text-[18px] laptop:text-[20px] [@media(min-width:1600px)_and_(min-height:900px)]:pt-46 laptop:pt-15">
                  <span className="tablet:hidden">
                    Click to download the full
                    <br />
                    specifications
                  </span>
                  <span className="hidden tablet:inline">Click to download the full specifications</span>
                </p>
                <a
                  href={product.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 [@media(min-width:768px)_and_(max-width:1024px)]:mb-8 laptop:mb-15 inline-flex w-fit items-center gap-2 rounded-[10px_0px] border-2 tablet:text-[20px] border-brand-orange bg-brand-orange px-1 py-1 tablet:px-4 tablet:py-[6px] text-[16px] font-sans !text-white transition-colors duration-200 hover:bg-white hover:!text-black [@media(min-width:1600px)_and_(min-height:900px)]:text-[20px] "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-[18.55px] w-[18.02px] shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M12 3v12" />
                    <path d="m7 10 5 5 5-5" />
                    <path d="M5 21h14" />
                  </svg>
                  Download
                </a>
              </>
            ) : null}
          </div>
        </div>

        <div className="mx-auto h-[480px] w-[375px] tablet:h-[832px] tablet:w-full laptop:h-auto laptop:self-stretch laptop:w-[55%]">
          <Swiper modules={[Pagination, Navigation]} navigation pagination={{ clickable: true }} loop className="product-spec-swiper h-full">
            {product.specSlides.map((slide) => (
              <SwiperSlide key={slide}>
                <div className="relative h-full w-full">
                  <Image
                    src={slide}
                    alt={`${product.overviewTitle} spec`}
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-contain scale-x-[1.00] scale-y-[1.51] tablet:scale-x-[1.0] tablet:scale-y-[1.3] tablet:object-contain  laptop:object-cover laptop:scale-x-[0.82] laptop:scale-y-[1.6] wide:scale-x-[1] wide:scale-y-[1] [@media(width:1024px)]:object-cover [@media(width:1024px)]:scale-x-[1.0] [@media(width:1024px)]:scale-y-[1.0] "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {product.youtubeEmbed ? (
        <section className="mt-8 px-7 tablet:px-20 tablet:mt-20 laptop:mt-32 laptop:px-72">
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
