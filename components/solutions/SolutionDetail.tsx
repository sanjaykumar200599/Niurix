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
        <div className="relative h-[360px] tablet:h-[520px] laptop:h-[760px]">
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
        <div className="absolute inset-x-0 bottom-10 z-10 px-9 tablet:bottom-16 tablet:px-[78px] laptop:bottom-[7.5rem] laptop:px-[120px]">
          <h1 className="whitespace-nowrap text-[28px] font-display leading-[1.08] tracking-tight text-white tablet:text-[42px] laptop:text-[52px]">
            {solution.heroTitle}
          </h1>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="my-12 px-9 tablet:my-12 tablet:px-[78px] laptop:my-24 laptop:px-[120px]">
        <h2
          className="nx-rich whitespace-pre-wrap text-[28px] font-display leading-tight text-brand-black tablet:text-[34px] laptop:w-[65%] laptop:text-5xl"
          dangerouslySetInnerHTML={{ __html: solution.introTitleHtml }}
        />

        <div className="mt-6 flex flex-col-reverse gap-8 laptop:flex-row">
          <div className="flex w-full items-center laptop:w-[40%]">
            <p className="text-base leading-7 text-brand-black/90 tablet:text-lg laptop:text-xl">
              {solution.introText}
            </p>
          </div>

          <div className="w-full laptop:w-[60%]">
            <Image
              src={solution.introImage}
              alt={solution.heroTitle}
              width={1200}
              height={760}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* CARDS SECTION */}
      <section className="bg-[#f3f3f3] py-10 tablet:py-14 laptop:py-20">
        <div className="px-9 tablet:px-[78px] laptop:px-[120px]">
          
          {/* FIXED HEADING */}
          <h2
            className="nx-rich whitespace-nowrap text-[26px] font-display leading-[1.18] text-brand-black tablet:text-[32px] laptop:text-[34px]"
            dangerouslySetInnerHTML={{ __html: solution.cardsHeadingHtml }}
          />

          {/* CARDS */}
          <div className="mt-8 grid gap-8 tablet:grid-cols-3 tablet:gap-4 laptop:mt-10 laptop:gap-6">
            {solution.cards.map((card) => (
              <article key={card.number + card.title} className="relative px-4 pt-6 tablet:px-0">
                
                {/* FIXED NUMBERS */}
                <p className="absolute left-1/2 top-0 -translate-x-1/2 text-[52px] leading-none font-number text-brand-orange tablet:-top-8 tablet:text-[64px] laptop:-top-10 laptop:text-[76px]">
                  {card.number}
                </p>

                <div className="rounded-tl-[30px] rounded-br-[30px] bg-white px-5 pb-7 pt-14 shadow-[0_0_2px_#00000029] tablet:min-h-[20rem] laptop:min-h-[17rem]">
                  
                  <h3 className="text-center text-2xl font-display text-brand-black tablet:min-h-[4.5rem]">
                    {card.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-brand-black/90 tablet:min-h-[8rem] laptop:min-h-[7rem]">
                    {card.para}
                  </p>

                  <div className="mt-6 flex justify-center">
                    <div className="relative h-16 w-16">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-contain"
                      />
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