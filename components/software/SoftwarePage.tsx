import Image from "next/image";
import type { SoftwareContent } from "@/lib/content/types";

type SoftwarePageProps = {
  software: SoftwareContent;
};

export default function SoftwarePage({ software }: SoftwarePageProps) {
  return (
    <>
      <section className="relative">
        <div className="relative h-[320px] tablet:h-[520px] laptop:h-[760px]">
          <Image src={software.heroImage} alt="Software banner" fill className="hidden object-cover tablet:block" priority />
          <Image src={software.heroImageMobile} alt="Software banner" fill className="object-cover tablet:hidden" priority />
        </div>

        <h1 className="absolute left-9 top-[23rem] z-10 w-[85%] text-[30px] font-display leading-tight text-white tablet:left-[80px] tablet:top-[12rem] tablet:w-[70%] tablet:text-5xl laptop:left-[120px] laptop:top-[30rem] laptop:w-[35%] laptop:text-6xl">
          {software.heroTitle}
        </h1>
      </section>

      <section className="mt-8 px-9 tablet:px-20 laptop:mt-10 laptop:px-[120px]">
        <h2 className="nx-rich whitespace-pre-wrap text-[28px] font-display leading-tight text-brand-black tablet:text-[34px] laptop:text-5xl" dangerouslySetInnerHTML={{ __html: software.introTitleHtml }} />
        <p className="mt-4 text-base leading-7 text-brand-black/90 tablet:text-lg laptop:text-xl">{software.introText}</p>
      </section>

      <section className="mb-8 mt-10 px-9 tablet:mb-12 tablet:px-20 laptop:mb-16 laptop:mt-[120px] laptop:px-[120px]">
        <div className="grid gap-6 tablet:gap-8 laptop:grid-cols-5 laptop:gap-4">
          {software.features.map((feature) => (
            <article key={feature.id} className="group relative overflow-hidden">
              <div className="relative h-[18rem] tablet:h-[17rem] laptop:h-[35rem]">
                <Image src={feature.image} alt={feature.title} fill className="hidden rounded-tl-[50px] rounded-br-[50px] object-cover transition duration-500 group-hover:brightness-40 laptop:block" />
                <Image src={feature.imageMobile} alt={feature.title} fill className="rounded-tl-[30px] rounded-br-[30px] object-cover tablet:rounded-tl-[50px] tablet:rounded-br-[50px] laptop:hidden" />
              </div>

              <h3 className="absolute left-4 right-4 top-[10%] z-10 text-[24px] leading-tight font-display text-brand-orange tablet:left-8 tablet:right-8 tablet:text-[30px] laptop:top-[80%] laptop:text-white laptop:transition-all laptop:duration-500 laptop:group-hover:top-[10%] laptop:group-hover:text-brand-orange">
                {feature.title}
              </h3>

              <div className="absolute inset-x-4 top-[38%] z-10 tablet:inset-x-8 tablet:top-[40%] laptop:top-[30%]">
                <p className="text-sm leading-6 text-white tablet:text-base laptop:opacity-0 laptop:transition laptop:duration-500 laptop:group-hover:opacity-90">{feature.para}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
