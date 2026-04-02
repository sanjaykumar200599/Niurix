import Image from "next/image";
import type { SolutionContent } from "@/lib/content/types";

type SolutionDetailProps = {
  solution: SolutionContent;
};

export default function SolutionDetail({ solution }: SolutionDetailProps) {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="relative h-[820px] tablet:h-[520px] laptop:h-[860px]">
          <Image
            src={solution.heroImage}
            alt={solution.heroTitle}
            fill
            priority
            sizes="100vw"
            className="hidden object-cover object-center tablet:block"
          />
          <Image
            src={solution.heroImageMobile}
            alt={solution.heroTitle}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center tablet:hidden"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* HERO TEXT */}
        <div className="absolute inset-x-0 top-1/2 z-10 -translate-y-1/2 px-9 tablet:top-auto tablet:bottom-16 tablet:translate-y-0 tablet:px-[78px] laptop:bottom-auto laptop:top-1/2 laptop:-translate-y-1/2 laptop:px-[120px]">
          <h1 className="text-[28px] font-display leading-[1.08] tracking-tight text-white tablet:text-[42px] laptop:text-[52px]">
            {solution.heroTitle === "Optimized Fiber-Optic Solution" ? (
              <>
                <span>Optimized Fiber-</span>
                <br className="tablet:hidden" />
                <span>Optic Solution</span>
              </>
            ) : (
              solution.heroTitle
            )}
          </h1>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="my-12 px-9 tablet:my-12 tablet:px-[78px] laptop:my-24 laptop:px-[120px]">
        <h2
          className="nx-rich whitespace-pre-wrap text-[26px] font-display leading-tight text-brand-black tablet:text-[30px] laptop:w-[62%] laptop:text-[30px]"
          dangerouslySetInnerHTML={{ __html: solution.introTitleHtml }}
        />

        <div className="mt-6 flex flex-col-reverse gap-8 laptop:flex-row">
          <div className="flex w-full items-center laptop:w-[40%]">
            <p className="text-base leading-7 text-brand-black/90 tablet:text-lg laptop:text-xl">
              {solution.introText}
            </p>
          </div>

          <div className="w-full laptop:w-[60%]">
            <Image src={solution.introImage} alt={solution.heroTitle} width={1200} height={760} className="h-auto w-full" />
          </div>
        </div>
      </section>

      {/* CARDS SECTION */}
      <section className="bg-[#f3f3f3] py-10 tablet:py-14 laptop:py-[4.5rem]">
        <div className="px-9 tablet:px-[78px] laptop:px-[120px]">
          <h2
            className="nx-rich text-[24px] font-display leading-[1.18] text-brand-black tablet:text-[28px] laptop:text-[26px]"
            dangerouslySetInnerHTML={{ __html: solution.cardsHeadingHtml }}
          />

          <div className="mt-10 grid gap-8 tablet:grid-cols-3 tablet:gap-4 laptop:mt-12 laptop:gap-5">
            {solution.cards.map((card) => (
              <article key={card.number + card.title} className="relative px-4 pt-8 tablet:px-0 laptop:px-0">
                <p className="absolute left-1/2 top-8 -translate-x-1/2 -translate-y-1/2 text-[58px] leading-none font-number text-brand-orange tablet:text-[66px] laptop:text-[82px]">
                  {card.number}
                </p>

                <div className="rounded-tl-[30px] rounded-br-[30px] bg-white px-5 pb-5 pt-12 shadow-[0_0_2px_#00000029] tablet:min-h-[20rem] laptop:min-h-[14.5rem] laptop:px-4 laptop:pb-4 laptop:pt-11">
                  <h3 className="text-center text-[23px] font-display text-brand-black tablet:min-h-[4.4rem] laptop:text-[22px]">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-[19px] leading-[1.55] text-brand-black/90 tablet:min-h-[8rem] laptop:min-h-[6.8rem] laptop:text-[18px] laptop:leading-[1.52]">
                    {card.para}
                  </p>

                  <div className="mt-3 flex justify-center laptop:mt-2">
                    <div className="relative h-16 w-16 laptop:h-14 laptop:w-14">
                      <Image src={card.image} alt={card.title} fill sizes="64px" className="object-contain" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
