import Image from "next/image";
import type { SoftwareContent } from "@/lib/content/types";

type SoftwarePageProps = {
  software: SoftwareContent;
};

function renderSoftwareHeroTitle(title: string) {
  if (title !== "Fiber for the Future: Advancing Connectivity and Control for the Users Today.") {
    return title;
  }

  return (
    <>
      <span className="[@media(min-width:1920px)_and_(min-height:1080px)]:hidden">
        <span className="block whitespace-nowrap tablet:inline">Fiber for the Future:</span>{" "}
        <span className="block whitespace-nowrap tablet:inline tablet:whitespace-normal laptop:block laptop:whitespace-nowrap [@media(min-width:1920px)_and_(min-height:1080px)]:inline">Advancing</span>{" "}
        <span className="block whitespace-nowrap tablet:inline tablet:whitespace-normal laptop:block laptop:whitespace-nowrap [@media(min-width:1920px)_and_(min-height:1080px)]:inline">Connectivity and</span>{" "}
        <span className="block whitespace-nowrap tablet:inline tablet:whitespace-normal laptop:block laptop:whitespace-nowrap [@media(min-width:1920px)_and_(min-height:1080px)]:inline">Control for the Users</span>{" "}
        <span className="block tablet:inline [@media(min-width:1920px)_and_(min-height:1080px)]:whitespace-nowrap">Today.</span>
      </span>

      <span className="hidden [@media(min-width:1920px)_and_(min-height:1080px)]:block">
        <span className="block whitespace-nowrap">Fiber for the Future: Advancing</span>
        <span className="block whitespace-nowrap">Connectivity and Control for</span>
        <span className="block whitespace-nowrap">the Users Today.</span>
      </span>
    </>
  );
}

export default function SoftwarePage({ software }: SoftwarePageProps) {
  return (
    <>
      <section className="relative -mt-[72px] overflow-hidden tablet:mt-0">
        <div className="relative mx-auto h-[813.21px] w-[375.2px] tablet:h-[520px] tablet:w-full laptop:h-[860px] [@media(min-width:1920px)_and_(min-height:1080px)]:h-[1080px]">
          <Image src={software.heroImage} alt="Software banner" fill sizes="(max-width: 767px) 0px, 100vw" className="hidden object-cover tablet:block" priority />
          <Image src={software.heroImageMobile} alt="Software banner" fill sizes="(max-width: 767px) 100vw, 0px" className="origin-top object-cover object-[center_78%] scale-y-[1.0] scale-x-[1.0] tablet:hidden" priority />

          <div className="absolute inset-0 bg-black/10" />

          <div className="relative z-10 flex h-full items-center px-9 tablet:items-end tablet:px-[78px] tablet:pb-16 laptop:px-[120px] laptop:pb-28 [@media(min-width:1920px)_and_(min-height:1080px)]:pb-105">
            <h1 className="h-[216px] w-[318.91px] pt-18 text-[32px] font-sans leading-tight text-white tablet:h-auto tablet:w-[70%] tablet:pt-0 tablet:text-[34px] laptop:w-[35%] laptop:text-[48px] [@media(min-width:1920px)_and_(min-height:1080px)]:w-[42%]">
              {renderSoftwareHeroTitle(software.heroTitle)}
            </h1>
          </div>
        </div>
      </section>

      <section className="mt-8 px-9 tablet:px-20 laptop:mt-10 laptop:px-[120px]">
       <h2
          className="nx-rich max-w-[980px] text-[20px] font-body-medium leading-[1.3] text-brand-black tablet:text-[24px] laptop:text-[28px]"
          dangerouslySetInnerHTML={{ __html: software.introTitleHtml }}
        />
        <p className="mt-9 font-body-light text-base leading-5.5 text-brand-black tablet:text-lg tablet:leading-7 laptop:text-xl laptop:leading-7">{software.introText}</p>
      </section>

      <section className="mb-8 mt-10 px-9 tablet:mb-12 tablet:px-20 laptop:mb-16 laptop:mt-[120px] laptop:px-[120px] ">
        <div className="grid gap-8 tablet:gap-8 laptop:grid-cols-5 laptop:gap-7 [@media(min-width:1920px)_and_(min-height:1080px)]:gap-11">
          {software.features.map((feature) => (
            <article key={feature.id} className="group relative isolate mx-auto h-[254.08px] w-[303.3px] max-w-full tablet:max-w-none overflow-hidden rounded-tl-[46px] rounded-br-[46px] tablet:mx-0 tablet:h-auto tablet:w-auto tablet:rounded-tl-[50px] tablet:rounded-br-[50px] [@media(min-width:1920px)_and_(min-height:1080px)]:h-[600px] [@media(min-width:1920px)_and_(min-height:1080px)]:w-[300px]">
              <div className="relative h-full tablet:h-[19rem] laptop:h-[35rem] [@media(min-width:1920px)_and_(min-height:1080px)]:h-[600px]">
                <Image src={feature.image} alt={feature.title} fill sizes="(max-width: 1023px) 0px, (min-width: 1920px) 300px, 20vw" className="hidden object-cover laptop:block" />
                <Image src={feature.imageMobile} alt={feature.title} fill sizes="(max-width: 1023px) 100vw, 0px" className="object-cover laptop:hidden" />
                <div className="absolute inset-0 transition duration-500 tablet:bg-black/35 laptop:bg-black/20 laptop:group-hover:bg-black/55" />
              </div>

              <div className="absolute inset-0 z-10 flex flex-col px-4 py-5 tablet:px-8 tablet:py-7 laptop:px-5 laptop:py-8">
                <h3 className="max-w-[100%] text-[20px] leading-tight font-sans text-brand-orange tablet:text-[30px] laptop:mt-auto laptop:text-[28px] laptop:leading-[1.2] laptop:text-white laptop:transition-all laptop:duration-500 laptop:group-hover:mt-0 laptop:group-hover:text-brand-orange">
                  {feature.title}
                </h3>

                <p className="mt-4 max-w-[96%] text-[16px] font-sans leading-[1.35] text-white laptop:mt-0 laptop:text-[20px] laptop:max-h-0 laptop:group-hover:mt-4 laptop:overflow-hidden laptop:opacity-0 laptop:transition-all laptop:duration-500 laptop:group-hover:max-h-[30rem] laptop:group-hover:opacity-90">
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
