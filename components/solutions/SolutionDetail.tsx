import Image from "next/image";
import type { SolutionContent } from "@/lib/content/types";

type SolutionDetailProps = {
  solution: SolutionContent;
};

export default function SolutionDetail({ solution }: SolutionDetailProps) {
  return (
    <>
      <section className="relative">
        <div className="relative h-[320px] tablet:h-[520px]">
          <Image src={solution.heroImage} alt={solution.heroTitle} fill className="hidden object-cover tablet:block" priority />
          <Image src={solution.heroImageMobile} alt={solution.heroTitle} fill className="object-cover tablet:hidden" priority />
        </div>
        <h1 className="absolute left-9 top-[13.5rem] z-10 w-[75%] text-[30px] font-display leading-tight text-white tablet:left-[78px] tablet:top-[12rem] tablet:w-[60%] tablet:text-5xl laptop:left-[120px] laptop:top-[30rem] laptop:w-[50%] laptop:text-6xl wide:top-[28rem]">
          {solution.heroTitle}
        </h1>
      </section>

      <section className="my-12 px-9 tablet:my-12 tablet:px-[78px] laptop:my-24 laptop:px-[120px]">
        <h2
          className="nx-rich whitespace-pre-wrap text-[28px] font-display leading-tight text-brand-black tablet:text-[34px] laptop:w-[65%] laptop:text-5xl"
          dangerouslySetInnerHTML={{ __html: solution.introTitleHtml }}
        />

        <div className="mt-6 flex flex-col-reverse gap-8 laptop:flex-row">
          <div className="flex w-full items-center laptop:w-[40%]">
            <p className="text-base leading-7 text-brand-black/90 tablet:text-lg laptop:text-xl">{solution.introText}</p>
          </div>

          <div className="w-full laptop:w-[60%]">
            <Image src={solution.introImage} alt={solution.heroTitle} width={1200} height={760} className="h-auto w-full" />
          </div>
        </div>
      </section>

      <section className="bg-[#f3f3f3] py-10 tablet:py-14 laptop:py-20">
        <div className="px-9 tablet:px-[78px] laptop:px-[120px]">
          <h2
            className="nx-rich whitespace-pre-wrap text-[28px] font-display leading-tight text-brand-black tablet:text-[34px] laptop:text-5xl"
            dangerouslySetInnerHTML={{ __html: solution.cardsHeadingHtml }}
          />

          <div className="mt-8 grid gap-8 tablet:grid-cols-3 tablet:gap-4 laptop:mt-12 laptop:gap-6">
            {solution.cards.map((card) => (
              <article key={card.number + card.title} className="relative px-4 pt-4 tablet:px-0">
                <p className="absolute left-1/2 top-0 -translate-x-1/2 text-[60px] leading-none font-number text-brand-orange tablet:-top-10 tablet:text-[70px] laptop:-top-14 laptop:text-[90px]">
                  {card.number}
                </p>

                <div className="rounded-tl-[30px] rounded-br-[30px] bg-white px-5 pb-7 pt-14 shadow-[0_0_2px_#00000029] tablet:min-h-[20rem] laptop:min-h-[17rem]">
                  <h3 className="text-center text-2xl font-display text-brand-black tablet:min-h-[4.5rem]">{card.title}</h3>
                  <p className="mt-4 text-base leading-7 text-brand-black/90 tablet:min-h-[8rem] laptop:min-h-[7rem]">{card.para}</p>

                  <div className="mt-6 flex justify-center">
                    <div className="relative h-16 w-16">
                      <Image src={card.image} alt={card.title} fill className="object-contain" />
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
