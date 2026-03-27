import Image from "next/image";
import type { SoftwareContent } from "@/lib/content/types";

type SoftwarePageProps = {
  software: SoftwareContent;
};

export default function SoftwarePage({ software }: SoftwarePageProps) {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="relative h-[320px] tablet:h-[520px] laptop:h-[760px]">
          <Image src={software.heroImage} alt="Software banner" fill className="hidden object-cover tablet:block" priority />
          <Image src={software.heroImageMobile} alt="Software banner" fill className="object-cover tablet:hidden" priority />

          <div className="absolute inset-0 bg-black/10" />

          <div className="relative z-10 flex h-full items-end px-9 pb-10 tablet:px-[78px] tablet:pb-16 laptop:px-[120px] laptop:pb-28">
            <h1 className="w-[85%] text-[32px] font-display leading-tight text-white tablet:w-[70%] tablet:text-[34px] laptop:w-[35%] laptop:text-[48px]">
              {software.heroTitle}
            </h1>
          </div>
        </div>
      </section>

      <section className="mt-8 px-9 tablet:px-20 laptop:mt-10 laptop:px-[120px]">
       <h2
          className="nx-rich max-w-[980px] text-[22px] font-display leading-[1.3] text-brand-black tablet:text-[24px] laptop:text-[30px]"
          dangerouslySetInnerHTML={{ __html: software.introTitleHtml }}
        />
        <p className="mt-9 text-base leading-7 text-brand-black/90 tablet:text-lg laptop:text-xl">{software.introText}</p>
      </section>

      <section className="mb-8 mt-10 px-9 tablet:mb-12 tablet:px-20 laptop:mb-16 laptop:mt-[120px] laptop:px-[120px]">
        <div className="grid gap-6 tablet:gap-8 laptop:grid-cols-5 laptop:gap-0">
          {software.features.map((feature) => (
            <article key={feature.id} className="group relative isolate overflow-hidden rounded-tl-[30px] rounded-br-[30px] tablet:rounded-tl-[50px] tablet:rounded-br-[50px]">
              <div className="relative h-[18rem] tablet:h-[19rem] laptop:h-[35rem]">
                <Image src={feature.image} alt={feature.title} fill className="hidden object-cover laptop:block" />
                <Image src={feature.imageMobile} alt={feature.title} fill className="object-cover laptop:hidden" />
                <div className="absolute inset-0 bg-black/35 transition duration-500 laptop:bg-black/20 laptop:group-hover:bg-black/55" />
              </div>

              <div className="absolute inset-0 z-10 flex flex-col px-4 py-5 tablet:px-8 tablet:py-7 laptop:px-5 laptop:py-8">
                <h3 className="max-w-[94%] text-[20px] leading-tight font-display text-brand-orange tablet:text-[30px] laptop:mt-auto laptop:text-[28px] laptop:leading-[1.2] laptop:text-white laptop:transition-all laptop:duration-500 laptop:group-hover:mt-0 laptop:group-hover:text-brand-orange">
                  {feature.title}
                </h3>

                <p className="mt-4 max-w-[96%] text-[16px] leading-[1.45] text-white laptop:mt-0 laptop:text-[20px] laptop:max-h-0 laptop:group-hover:mt-4 laptop:overflow-hidden laptop:opacity-0 laptop:transition-all laptop:duration-500 laptop:group-hover:max-h-[30rem] laptop:group-hover:opacity-90">
                  {feature.para}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
