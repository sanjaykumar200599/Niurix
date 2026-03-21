import Image from "next/image";
import Link from "next/link";
import type { IndustryContent } from "@/lib/content/types";

type IndustryDetailProps = {
  industry: IndustryContent;
};

export default function IndustryDetail({ industry }: IndustryDetailProps) {
  return (
    <>
      <section className="relative">
        <div className="relative h-80 tablet:h-130 laptop:h-190">
          <Image src={industry.heroImage} alt={industry.heroTitle} fill className="hidden object-cover brightness-75 tablet:block" priority />
          <Image src={industry.heroImageMobile} alt={industry.heroTitle} fill className="object-cover brightness-75 tablet:hidden" priority />
        </div>
        <h1 className="absolute left-9 top-68 z-10 w-[80%] text-[30px] font-display leading-tight text-white tablet:left-19.5 tablet:top-48 tablet:w-[80%] tablet:text-5xl laptop:left-30 laptop:top-120 laptop:w-[50%] laptop:text-6xl wide:top-72">
          {industry.heroTitle}
        </h1>
      </section>

      <section className="my-12 px-9 tablet:my-12 tablet:px-19.5 laptop:my-24 laptop:px-30">
        <h2
          className="nx-rich whitespace-pre-wrap text-[28px] font-display leading-tight text-brand-black tablet:text-[34px] laptop:w-[65%] laptop:text-5xl"
          dangerouslySetInnerHTML={{ __html: industry.introTitleHtml }}
        />

        <div className="mt-6 flex flex-col-reverse gap-8 laptop:flex-row laptop:justify-between">
          <div className="flex w-full flex-col justify-center laptop:w-[26%]">
            <p className="text-base leading-7 text-brand-black tablet:text-lg laptop:text-xl">{industry.introText}</p>
            <Link
              href="/contact-us"
              className="mt-6 inline-flex w-fit rounded-[10px_0px] border-2 border-brand-orange bg-brand-orange px-6 py-2 text-lg font-display text-white transition hover:bg-white hover:text-brand-black"
            >
              Get in touch
            </Link>
          </div>

          <div className="w-full laptop:w-[60%]">
            <Image src={industry.introImage} alt={industry.heroTitle} width={1400} height={900} className="h-auto w-full" />
          </div>
        </div>
      </section>

      <section className="mx-11 my-10 rounded-[9px] px-4 py-8 shadow-[0_0_10px_#00000029] tablet:mx-11 tablet:grid tablet:grid-cols-[repeat(auto-fill,minmax(208px,1fr))] tablet:gap-8 tablet:px-6 laptop:mx-30 laptop:flex laptop:flex-wrap laptop:justify-center laptop:gap-12 laptop:px-16 laptop:py-16">
        {industry.devices.map((device) => (
          <article key={device.title} className="mb-4 text-center tablet:mb-0">
            <div className="flex h-24 items-center justify-center">
              <div className="relative h-16 w-16">
                <Image src={device.image} alt={device.title} fill className="object-contain" />
              </div>
            </div>
            <p className="font-display text-base text-brand-black tablet:text-lg">{device.title}</p>
          </article>
        ))}
      </section>

      <section className="my-16 bg-[#f3f3f3] px-9 py-9 tablet:my-16 tablet:px-19.5 tablet:py-12 laptop:relative laptop:mb-24 laptop:mt-60 laptop:h-52 laptop:px-30 laptop:py-10">
        <div className="w-full laptop:w-[40%]">
          <h2 className="text-[28px] font-display leading-tight text-brand-black tablet:text-[34px] laptop:text-5xl">{industry.advantagesTitle}</h2>
          <p className="mt-3 text-base leading-7 text-brand-black tablet:text-lg laptop:text-xl">{industry.advantagesText}</p>
        </div>

        <div className="mt-8 grid gap-4 tablet:grid-cols-2 tablet:gap-6 laptop:absolute laptop:right-[10%] laptop:top-[-40%] laptop:mt-0 laptop:w-[40%] laptop:grid-cols-2">
          {industry.advantagesCards.map((card) => (
            <article key={card.title} className="rounded-tl-2xl rounded-br-2xl bg-white shadow-[0_0_10px_#00000029]">
              <div className="p-4">
                <div className="relative mb-3 h-16 w-16">
                  <Image src={card.image} alt={card.title} fill className="object-contain" />
                </div>
                <h3 className="text-base font-display text-brand-black tablet:text-lg laptop:text-xl">{card.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
