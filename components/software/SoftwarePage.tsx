import Image from "next/image";
import type { SoftwareContent } from "@/lib/content/types";

type SoftwarePageProps = {
  software: SoftwareContent;
};

export default function SoftwarePage({ software }: SoftwarePageProps) {
  return (
    <>
      <section className="relative -mt-[72px] tablet:-mt-[72px] laptop:mt-0">
        <div className="relative mx-auto h-[813.21px] min-h-[813.21px] w-full tablet:h-[432px]  tablet:min-h-0 tablet:max-h-none tablet:w-full laptop:h-[860px] [@media(min-width:1600px)_and_(min-height:900px)]:h-[1080px]">
          <Image src={software.heroImage} alt="Software banner" fill sizes="(max-width: 767px) 0px, 100vw" className="hidden object-contain [@media(min-width:1024px)_and_(max-width:1366px)]:scale-[1.08]  object-top tablet:block laptop:object-center " priority />
          <Image src={software.heroImageMobile} alt="Software banner" fill sizes="(max-width: 767px) 100vw, 0px" className="origin-top object-cover object-[center_78%] scale-y-[1.0] scale-x-[1.0] tablet:hidden" priority />

          <div className="absolute inset-0 " />

          <div className="relative z-10 flex h-full items-center px-9 tablet:items-end tablet:px-[78px] tablet:pb-24 laptop:px-[120px] laptop:pb-52 [@media(min-width:1600px)_and_(min-height:900px)]:pb-114 ">
            <h1 className="h-[216px] w-full pt-18 text-[32px] font-sans leading-tight text-white [@media(min-width:768px)_and_(max-width:1024px)]:hidden laptop:w-[40%] laptop:max-w-none laptop:text-[48px] [@media(min-width:1600px)_and_(min-height:900px)]:w-[38%] ">
              {software.heroTitle}
            </h1>

            <h1 className="hidden [@media(min-width:768px)_and_(max-width:1024px)]:block [@media(min-width:768px)_and_(max-width:1024px)]:h-auto [@media(min-width:768px)_and_(max-width:1024px)]:w-[80%] [@media(min-width:768px)_and_(max-width:1024px)]:pt-0 [@media(min-width:768px)_and_(max-width:1024px)]:text-[34px] [@media(min-width:768px)_and_(max-width:1024px)]:leading-[1.35] text-white ">
              <span className="[@media(width:1024px)]:hidden">
                 Fiber for the Future: Advancing
                  <br />
                Connectivity and Control for the
                <br />
                 Users Today
              </span>

            <span className="hidden [@media(width:1024px)]:block [@media(width:1024px)]:w-full [@media(width:1024px)]:-translate-y-48">
              Fiber for the Future: Advancing Connectivity and Control for the Users Today
            </span>
            </h1>
          </div>
        </div>
      </section>

      <section className="mt-8 px-9 tablet:px-20 laptop:mt-10 laptop:px-[120px] tablet:pt-4 laptop:pt-0">
       <h2
          className="nx-rich max-w-[980px] text-[20px] font-body-medium leading-[1.3] text-brand-black tablet:text-[22px] laptop:text-[28px] tablet:whitespace-nowrap"
          dangerouslySetInnerHTML={{ __html: software.introTitleHtml }}
        />
        <p className="mt-9 font-body-light text-base leading-5.5 text-brand-black tablet:text-lg tablet:leading-[1.35] laptop:text-xl laptop:leading-7">{software.introText}</p>
      </section>

      <section className="mb-8 mt-10 px-9 tablet:mb-12 tablet:px-20 laptop:mb-16 laptop:mt-[120px] laptop:px-[120px]">
        <div className="grid gap-8 tablet:gap-8 laptop:grid-cols-5 laptop:gap-7 [@media(min-width:1600px)_and_(min-height:900px)]:gap-11">
          {software.features.map((feature) => (
            <article
              key={feature.id}
              className="group relative isolate mx-auto h-[254.08px] w-[303.3px] max-w-full overflow-hidden rounded-tl-[46px] rounded-br-[46px] tablet:mx-0 tablet:mt-8 tablet:h-[16rem] tablet:max-w-none tablet:w-auto tablet:rounded-tl-[50px] tablet:rounded-br-[50px] laptop:mt-0 laptop:h-auto [@media(min-width:1600px)_and_(min-height:900px)]:h-[600px] [@media(min-width:1600px)_and_(min-height:900px)]:w-[300px]"
            >
              <div className="relative h-full tablet:h-[16rem] laptop:h-[35rem] [@media(min-width:1600px)_and_(min-height:900px)]:h-[600px]">
                <Image src={feature.image} alt={feature.title} fill sizes="(max-width: 1023px) 0px, (min-width: 1920px) 300px, 20vw" className="hidden object-cover laptop:block" />
                <Image src={feature.imageMobile} alt={feature.title} fill sizes="(max-width: 1023px) 100vw, 0px" className="object-cover laptop:hidden tablet:scale-x-[2.15] tablet:scale-y-[1.00] tablet:object-contain [@media(width:1024px)]:scale-x-[2.85]" />
                <div className="absolute inset-0 transition duration-500 laptop:bg-transparent laptop:group-hover:bg-black/60" />
              </div>

              <div className="absolute inset-0 z-10 px-4 py-5 tablet:px-8 tablet:py-7 laptop:px-5 laptop:py-8">
                <h3 className="max-w-[100%] font-sans text-[20px] leading-tight text-brand-orange tablet:pt-4 tablet:text-[22px] laptop:absolute laptop:left-5 laptop:right-5 laptop:top-[80%] laptop:pt-0 laptop:text-[28px] laptop:leading-[1.2] laptop:text-white laptop:transition-[top,color] laptop:duration-[600ms] laptop:ease-[cubic-bezier(0.45,-0.35,0.27,1.25)] laptop:group-hover:top-[10%] laptop:group-hover:text-brand-orange laptop:group-hover:ease-[cubic-bezier(0.4,-0.55,0.27,1.35)] [@media(min-width:1025px)_and_(max-width:1366px)]:top-[75%] [@media(min-width:1025px)_and_(max-width:1366px)]:group-hover:top-[5%]">
                  {feature.title}
                </h3>

                <p className="mt-4 max-w-[96%] font-sans text-[16px] leading-[1.35] text-white tablet:pt-4 tablet:text-[18px] laptop:hidden">
                  {feature.para}
                </p>

                <div className="hidden laptop:absolute laptop:left-4 laptop:right-4 laptop:top-[30%] laptop:block">
                  <p className="w-[90%] font-sans text-[20px] leading-[1.35] text-white opacity-0 transition-opacity duration-500 delay-300 group-hover:opacity-80">
                    {feature.para}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
