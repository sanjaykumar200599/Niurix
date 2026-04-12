import Image from "next/image";
import Link from "next/link";
import type { IndustryContent } from "@/lib/content/types";

type IndustryDetailProps = {
  industry: IndustryContent;
};

export default function IndustryDetail({ industry }: IndustryDetailProps) {
  const deviceImageSizeClasses: Record<string, string> = {
    router: "h-[34px] w-[112px] tablet:h-[41px] tablet:w-[169px]",
    olt: "h-[32px] w-[118px] tablet:h-[38px] tablet:w-[214px]",
    splitter: "h-[30px] w-[86px] tablet:h-[39px] tablet:w-[133px]",
    "internet traffic": "h-[26px] w-[76px] tablet:h-[29px] tablet:w-[130px]",
    "1g fiber": "h-[8px] w-[110px] tablet:h-[18.4px] tablet:w-[207px]",
    "ethernet cable": "h-[8px] w-[94px] tablet:h-[5px] tablet:w-[141px]",
    ont: "h-[46px] w-[46px] tablet:h-[69px] tablet:w-[69px]",
    iptv: "h-[50px] w-[80px] tablet:h-[83px] tablet:w-[122px]",
    "access point": "h-[46px] w-[46px] tablet:h-[74px] tablet:w-[56px]",
    telephone: "h-[50px] w-[68px] tablet:h-[82px] tablet:w-[75px]",
    wireless: "h-[28px] w-[60px] tablet:h-[38px] tablet:w-[75px]",
  };

  const getDeviceImageSizeClasses = (title: string) => deviceImageSizeClasses[title.toLowerCase()] ?? "h-[36px] w-[94px] tablet:h-[56px] tablet:w-[144px]";

  const advantagesHeading = industry.advantagesTitle.includes(" Solutions")
    ? industry.advantagesTitle.replace(" Solutions", "\nSolutions")
    : industry.advantagesTitle;

  return (
    <>
      <section className="relative" data-hero-banner="industries">
        <div className="relative h-[660px] tablet:h-[460px] laptop:h-[860px] [@media(min-width:1920px)_and_(min-height:1800px)]:h-[1080px]">
          <Image
            src={industry.heroImage}
            alt={industry.heroTitle}
            fill
            sizes="(max-width: 767px) 0px, 100vw"
            className="hidden object-cover brightness-[0.58] tablet:block"
            priority
          />
          <Image
            src={industry.heroImageMobile}
            alt={industry.heroTitle}
            fill
            sizes="(max-width: 767px) 100vw, 0px"
            className="object-cover brightness-[0.58] tablet:hidden"
            priority
          />
        </div>

        <h1 className="absolute left-9 top-44 z-10 w-[75%] text-[30px] font-sans font-normal leading-[1.34] tracking-[-0.01em] text-white tablet:left-[80px] tablet:top-1/2 tablet:w-[70%] tablet:-translate-y-1/2 tablet:text-[36px] tablet:font-display laptop:left-[120px] laptop:w-[52%] laptop:text-[48px] [@media(min-width:1920px)_and_(min-height:1800px)]:font-sans [@media(min-width:1920px)_and_(min-height:1800px)]:font-normal [@media(min-width:1920px)_and_(min-height:1800px)]:text-white/95 [@media(min-width:1920px)_and_(min-height:1800px)] pt-14">
          {industry.heroTitle}
        </h1>
      </section>

      <section className="my-12 px-9 tablet:my-12 tablet:px-[80px] laptop:my-24 laptop:px-[120px]">
       <h2
          className="nx-rich max-w-[920px] text-[22px] font-display leading-[1.3] text-brand-black tablet:text-[24px] laptop:text-[28px]"
          dangerouslySetInnerHTML={{ __html: industry.introTitleHtml }}
        />

        <div className="mt-3 flex flex-col-reverse gap-8 laptop:mt-4 laptop:flex-row laptop:items-center laptop:justify-between">
          <div className="flex w-full flex-col justify-start laptop:w-[24%]">
            <p className="pb-3 text-[16px] font-normal leading-[1.4] text-brand-black/80 tablet:pb-4 tablet:text-[17px] laptop:text-[20px] [@media(min-width:1920px)_and_(min-height:1800px)] w-[110%]">
              {industry.introText}
            </p>

            <Link
              href="/contact-us"
              className="group mt-6 inline-flex w-fit flex-row items-center gap-1 whitespace-nowrap rounded-[10px_0px] border-2 border-brand-orange bg-brand-orange px-6 py-2 text-left text-lg font-medium leading-tight text-white transition-colors duration-200 hover:bg-white hover:text-brand-black"
            >
              <span className="text-white transition-colors duration-200 group-hover:text-brand-black">Get in touch</span>
            </Link>
          </div>

          <div className="w-full laptop:w-[60%]">
            <Image
              src={industry.introImage}
              alt={industry.heroTitle}
              width={1400}
              height={900}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section className="mx-6 my-10 rounded-[12px] bg-white px-6 py-10 shadow-[0_0_10px_#00000029] tablet:mx-10 laptop:mx-[120px] laptop:px-6 laptop:py-12 [@media(min-width:1920px)_and_(min-height:1800px)]:px-12 [@media(min-width:1920px)_and_(min-height:1800px)]:py-10">
        {/* Laptop-only fixed 3-row layout (exclude 1920x1800) */}
        <div className="hidden laptop:block [@media(min-width:1920px)_and_(min-height:1800px)]:hidden">
          <div className="grid grid-cols-4 gap-x-2 gap-y-12 px-20">
            {industry.devices.slice(0, 4).map((device) => (
              <article key={device.title} className="flex w-full flex-col items-center text-center">
                <div className="flex h-[96px] items-center justify-center">
                  <div className={`relative ${getDeviceImageSizeClasses(device.title)}`}>
                    <Image src={device.image} alt={device.title} fill sizes="220px" className="object-contain" />
                  </div>
                </div>
                <p className="mt-3 font-display text-[17px] text-brand-black">{device.title}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-6 gap-x-5 gap-y-10 pl-12 pr-8">
            {industry.devices.slice(4, 10).map((device) => (
              <article key={device.title} className="flex w-full flex-col items-center text-center">
                <div className="flex h-[96px] items-center justify-center">
                  <div className={`relative ${getDeviceImageSizeClasses(device.title)}`}>
                    <Image src={device.image} alt={device.title} fill sizes="220px" className="object-contain" />
                  </div>
                </div>
                <p className="mt-3 font-display text-[17px] text-brand-black">{device.title}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-3 px-8 pb-4">
            <article className="col-start-2 flex w-full flex-col items-center text-center">
              <div className="flex h-[96px] items-center justify-center">
                <div className={`relative ${getDeviceImageSizeClasses(industry.devices[10].title)}`}>
                  <Image src={industry.devices[10].image} alt={industry.devices[10].title} fill sizes="220px" className="object-contain" />
                </div>
              </div>
              <p className="mt-3 font-display text-[17px] text-brand-black">{industry.devices[10].title}</p>
            </article>
          </div>
        </div>

        {/* 1920x1800 original layout */}
        <div className="hidden [@media(min-width:1920px)_and_(min-height:1800px)]:block">
          <div className="grid grid-cols-6 gap-x-10 gap-y-10 px-8">
            {industry.devices.slice(0, 6).map((device) => (
              <article key={device.title} className="flex w-full flex-col items-center text-center">
                <div className="flex h-[96px] items-center justify-center">
                  <div className={`relative ${getDeviceImageSizeClasses(device.title)}`}>
                    <Image src={device.image} alt={device.title} fill sizes="220px" className="object-contain" />
                  </div>
                </div>
                <p className="mt-3 font-display text-[17px] text-brand-black">{device.title}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 flex items-start justify-center gap-17 px-20 pb-4">
            {industry.devices.slice(6, 11).map((device) => (
              <article key={device.title} className="flex w-auto flex-col items-center text-center">
                <div className="flex h-[96px] items-center justify-center">
                  <div className={`relative ${getDeviceImageSizeClasses(device.title)}`}>
                    <Image src={device.image} alt={device.title} fill sizes="220px" className="object-contain" />
                  </div>
                </div>
                <p className="mt-3 font-display text-[17px] text-brand-black">{device.title}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 tablet:grid-cols-2 laptop:hidden">
          {industry.devices.slice(0, 4).map((device) => (
            <article key={device.title} className="flex w-full flex-col items-center text-center">
              <div className="flex h-[76px] items-center justify-center tablet:h-[96px] laptop:h-[96px]">
                <div className={`relative ${getDeviceImageSizeClasses(device.title)}`}>
                  <Image src={device.image} alt={device.title} fill sizes="220px" className="object-contain" />
                </div>
              </div>
              <p className="mt-4 font-display text-[16px] text-brand-black tablet:text-[17px] laptop:text-[18px]">
                {device.title}
              </p>
            </article>
          ))}
        </div>

        {/* Row 2 */}
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 tablet:grid-cols-2 laptop:hidden">
          {industry.devices.slice(4, 10).map((device) => (
            <article key={device.title} className="flex w-full flex-col items-center text-center">
              <div className="flex h-[76px] items-center justify-center tablet:h-[96px] laptop:h-[96px]">
                <div className={`relative ${getDeviceImageSizeClasses(device.title)}`}>
                  <Image src={device.image} alt={device.title} fill sizes="220px" className="object-contain" />
                </div>
              </div>
              <p className="mt-4 font-display text-[16px] text-brand-black tablet:text-[17px] laptop:text-[18px]">
                {device.title}
              </p>
            </article>
          ))}
        </div>

        {/* Row 3 */}
        <div className="mt-10 grid grid-cols-2 laptop:hidden">
          <article className="col-start-1 justify-self-center flex w-full max-w-[50%] flex-col items-center text-center tablet:max-w-none laptop:w-auto">
            <div className="flex h-[76px] items-center justify-center tablet:h-[96px] laptop:h-[96px]">
              <div className={`relative ${getDeviceImageSizeClasses(industry.devices[10].title)}`}>
                <Image src={industry.devices[10].image} alt={industry.devices[10].title} fill sizes="220px" className="object-contain" />
              </div>
            </div>
            <p className="mt-4 font-display text-[16px] text-brand-black tablet:text-[17px] laptop:text-[18px]">
              {industry.devices[10].title}
            </p>
          </article>
        </div>
      </section>

      <section className="my-16 bg-[#f3f3f3] px-9 py-9 tablet:my-16 tablet:px-[80px] tablet:py-12 laptop:relative laptop:mb-34 laptop:mt-44 laptop:min-h-[300px] laptop:px-[120px] laptop:py-10">
        <div className="w-full laptop:w-[48%]">
          <h2 className="text-[24px] font-display font-normal leading-[1.28] text-brand-black tablet:text-[28px] laptop:text-[30px]">
            <span className="laptop:hidden">{industry.advantagesTitle}</span>
            <span className="hidden whitespace-pre-line laptop:inline [@media(min-width:1920px)_and_(min-height:1800px)]:hidden">{advantagesHeading}</span>
            <span className="hidden [@media(min-width:1920px)_and_(min-height:1800px)]:inline whitespace-nowrap">{industry.advantagesTitle}</span>
          </h2>

          <p className="mt-4 text-[17px] font-normal leading-[1.62] text-brand-black/80 tablet:text-[18px] laptop:max-w-[560px] laptop:text-[20px] [@media(min-width:1920px)_and_(min-height:1800px)]:max-w-[690px] [@media(min-width:1920px)_and_(min-height:1800px)]:text-[18px] [@media(min-width:1920px)_and_(min-height:1800px)]:leading-[1.55]">
            {industry.advantagesText}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-6 tablet:gap-5 laptop:absolute laptop:right-[120px] laptop:top-[-70px] laptop:mt-0 laptop:w-[620px] laptop:grid-cols-2 laptop:gap-7 [@media(min-width:1920px)_and_(min-height:1800px)]:right-[180px] [@media(min-width:1920px)_and_(min-height:1800px)]:w-[640px] [@media(min-width:1920px)_and_(min-height:1800px)]:gap-8">
          {industry.advantagesCards.map((card) => (
            <article
              key={card.title}
              className="min-h-[170px] rounded-tl-[18px] rounded-br-[18px] bg-white shadow-[0_0_10px_#00000029] tablet:min-h-[168px] laptop:min-h-[220px] [@media(min-width:1920px)_and_(min-height:1800px)]:min-h-[236px]"
            >
              <div className="p-5 tablet:p-7 laptop:p-8 [@media(min-width:1920px)_and_(min-height:1800px)]:p-10">
                <div className="relative mb-3 h-[52px] w-[52px] tablet:mb-3 tablet:h-[56px] tablet:w-[56px] laptop:h-[72px] laptop:w-[72px]">
                  <Image src={card.image} alt={card.title} fill sizes="(min-width: 1024px) 72px, 64px" className="object-contain" />
                </div>

                <h3 className="text-[13px] font-sans font-medium leading-[1.3] text-brand-black tablet:text-[18px] laptop:text-[22px]">
                  {card.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
