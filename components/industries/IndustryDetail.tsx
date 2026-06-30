import Image from "next/image";
import Link from "next/link";
import type { IndustryContent } from "@/lib/content/types";

type IndustryDetailProps = {
  industry: IndustryContent;
};

export default function IndustryDetail({ industry }: IndustryDetailProps) {
  const deviceImageSizeClasses: Record<string, string> = {
    router: "h-[21.25px] w-[87.6px] tablet:h-[41px] tablet:w-[169px]",
    olt: "h-[15.55px] w-[87.6px] tablet:h-[38px] tablet:w-[214px]",
    splitter: "h-[25.68px] w-[87.6px] tablet:h-[39px] tablet:w-[133px]",
    "internet traffic": "h-[19.54px] w-[87.6px] tablet:h-[29px] tablet:w-[130px]",
    "1g fiber": "h-[2.11px] w-[87.6px] tablet:h-[18.4px] tablet:w-[207px]",
    "ethernet cable": "h-[3.1px] w-[87.6px] tablet:h-[5px] tablet:w-[141px]",
    ont: "h-[69px] w-[69px] tablet:h-[69px] tablet:w-[69px]",
    iptv: "h-[59.59px] w-[87.6px] tablet:h-[83px] tablet:w-[122px]",
    "access point": "h-[74px] w-[56px] tablet:h-[74px] tablet:w-[56px]",
    telephone: "h-[82px] w-[75px] tablet:h-[82px] tablet:w-[75px]",
    wireless: "h-[38px] w-[75px] tablet:h-[38px] tablet:w-[75px]",
  };

  const getDeviceImageSizeClasses = (title: string) => deviceImageSizeClasses[title.toLowerCase()] ?? "h-[36px] w-[94px] tablet:h-[56px] tablet:w-[144px]";

  const advantagesHeading = industry.advantagesTitle.includes(" Solutions")
    ? industry.advantagesTitle.replace(" Solutions", "\nSolutions")
    : industry.advantagesTitle;

  return (
    <>
      <section className="relative -mt-[72px] tablet:-mt-[72px] laptop:mt-0" data-hero-banner="industries">
        <div className="relative mx-auto h-[100svh] w-full [@media(max-height:700px)]:h-[120svh] tablet:h-[432px] tablet:w-full laptop:h-[860px] [@media(min-width:1600px)_and_(min-height:900px)]:h-[1080px] [@media(width:1024px)]:h-[575px]">
          <Image
            src={industry.heroImage}
            alt={industry.heroTitle}
            fill
            sizes="(max-width: 767px) 0px, 100vw"
            className="hidden object-cover brightness-[0.58] tablet:block tablet:object-top laptop:object-center"
            priority
          />
          <Image
            src={industry.heroImageMobile}
            alt={industry.heroTitle}
            fill
            sizes="(max-width: 767px) 100vw, 0px"
            className="object-cover brightness-[0.6]  object-[50%_0%] tablet:hidden"
            priority
          />
        </div>

        <h1 className="absolute left-9 top-54 z-10 w-[78%] pt-14 text-[32px] font-sans font-normal leading-[1.34] tracking-[-0.01em] text-brand-white tablet:left-[80px] tablet:top-[66%] laptop:top-1/2 tablet:w-[70%] tablet:-translate-y-1/2 tablet:pt-0 tablet:text-[34px] tablet:font-sans laptop:left-[120px] laptop:w-[52%] laptop:text-[48px] [@media(min-width:1600px)_and_(min-height:900px)]:font-sans [@media(min-width:1600px)_and_(min-height:900px)]:font-normal [@media(min-width:1600px)_and_(min-height:900px)]:text-white/95 [@media(min-width:1600px)_and_(min-height:900px)] [@media(width:1024px)]:-translate-y-48">
          {industry.heroTitle}
        </h1>
      </section>

      <section className="my-12 px-9 tablet:my-12 tablet:px-[75px] laptop:my-24 laptop:px-[120px]">
       <h2
          className="nx-rich w-[92%] max-w-[920px] text-[26px] font-body-medium leading-[1.3] text-[#000000] tablet:w-auto tablet:text-[28px] laptop:text-[28px]"
          dangerouslySetInnerHTML={{ __html: industry.introTitleHtml }}
        />

        <div className="mt-3 flex flex-col-reverse gap-8 laptop:mt-4 laptop:flex-row laptop:items-center laptop:justify-between">
          <div className="flex w-full flex-col justify-start laptop:w-[24%]">
            <p className="w-[100%] pb-3 text-[16px] font-body-light leading-[1.4] text-[#000000] tablet:w-full tablet:pb-4 tablet:text-[18px] laptop:text-[20px] [@media(min-width:1600px)_and_(min-height:900px)]:w-[110%]">
              {industry.introText}
            </p>

            <Link
              href="/contact-us"
              className="group mt-6 inline-flex w-fit flex-row items-center gap-1 whitespace-nowrap rounded-[10px_0px] border-2 border-brand-orange  tablet:text-[18px] bg-brand-orange px-4 py-1.5 text-left text-[16px] font-medium leading-tight text-white transition-colors duration-200 hover:bg-white hover:text-brand-black  [@media(min-width:1600px)_and_(min-height:900px)]:py-3 [@media(min-width:1600px)_and_(min-height:900px)]:px-3 [@media(min-width:1600px)_and_(min-height:900px)]:text-[20px] [@media(width:1024px)]:px-10 [@media(width:1024px)]:py-2"
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

      <section className="mx-11 my-10 rounded-[12px] bg-white px-4 py-4 shadow-[0_0_10px_#00000029] tablet:mx-10 tablet:px-6 tablet:py-10 laptop:mx-[120px] laptop:px-6 laptop:py-12 [@media(min-width:1600px)_and_(min-height:900px)]:px-12 [@media(min-width:1600px)_and_(min-height:900px)]:py-10">
        {/* Laptop-only fixed 3-row layout (exclude 1600x900) */}
        <div className="hidden laptop:block [@media(min-width:1600px)_and_(min-height:900px)]:hidden">
          <div className="flex items-start justify-center gap-20 px-10">
            {industry.devices.slice(0, 4).map((device) => (
              <article key={device.title} className="flex w-auto flex-col items-center text-center">
                <div className="flex h-[96px] items-center justify-center">
                  <div className={`relative ${getDeviceImageSizeClasses(device.title)}`}>
                    <Image src={device.image} alt={device.title} fill sizes="220px" className="object-contain" />
                  </div>
                </div>
                <p className="mt-3 font-sans text-[16px] text-brand-black">{device.title}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex items-start justify-center gap-20 px-10">
            {industry.devices.slice(4, 10).map((device) => (
              <article key={device.title} className="flex w-auto flex-col items-center text-center">
                <div className="flex h-[96px] items-center justify-center">
                  <div className={`relative ${getDeviceImageSizeClasses(device.title)}`}>
                    <Image src={device.image} alt={device.title} fill sizes="220px" className="object-contain" />
                  </div>
                </div>
                <p className="mt-3 font-sans text-[16px] text-brand-black">{device.title}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 flex items-start justify-center px-10 pb-4">
            <article className="flex w-auto flex-col items-center text-center">
              <div className="flex h-[96px] items-center justify-center">
                <div className={`relative ${getDeviceImageSizeClasses(industry.devices[10].title)}`}>
                  <Image src={industry.devices[10].image} alt={industry.devices[10].title} fill sizes="220px" className="object-contain" />
                </div>
              </div>
              <p className="mt-3 font-sans text-[16px] text-brand-black">{industry.devices[10].title}</p>
            </article>
          </div>
        </div>

        {/* 1600x900 original layout */}
        <div className="hidden [@media(min-width:1600px)_and_(min-height:900px)]:block">
          <div className="flex items-start justify-center gap-22 px-12">
            {industry.devices.slice(0, 6).map((device) => (
              <article key={device.title} className="flex w-auto flex-col items-center text-center">
                <div className="flex h-[96px] items-center justify-center">
                  <div className={`relative ${getDeviceImageSizeClasses(device.title)}`}>
                    <Image src={device.image} alt={device.title} fill sizes="220px" className="object-contain" />
                  </div>
                </div>
                <p className="mt-3 font-sans text-[16px] text-brand-black">{device.title}</p>
              </article>
            ))}
          </div>
          
          {/* mobile original layout */}
          <div className="mt-6 flex items-start justify-center gap-17 px-20 pb-4">
            {industry.devices.slice(6, 11).map((device) => (
              <article key={device.title} className="flex w-auto flex-col items-center text-center">
                <div className="flex h-[96px] items-center justify-center">
                  <div className={`relative ${getDeviceImageSizeClasses(device.title)}`}>
                    <Image src={device.image} alt={device.title} fill sizes="220px" className="object-contain" />
                  </div>
                </div>
                <p className="mt-3 font-sans text-[16px] text-brand-black">{device.title}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Row 1 */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-8 tablet:grid-cols-2 [@media(width:1024px)]:grid-cols-3 laptop:hidden">
            {industry.devices.map((device) => (
              <article key={device.title} className="flex w-full flex-col items-center text-center">
                <div className="flex h-[90px] items-center justify-center tablet:h-[96px] laptop:h-[96px]">
                  <div className={`relative ${getDeviceImageSizeClasses(device.title)}`}>
                    <Image
                      src={device.image}
                      alt={device.title}
                      fill
                      sizes="220px"
                      className="object-contain"
                    />
                  </div>
                </div>

                <p className="mt-2 font-sans text-[14px] text-brand-black tablet:mt-4 tablet:text-[14px] laptop:text-[18px]">
                  {device.title}
                </p>
              </article>
            ))}
          </div>
      </section>

      <section className="my-16 bg-[#ebebeb] px-9 py-9 tablet:mt-16 tablet:my-0 tablet:pb-20 tablet:px-[80px] tablet:py-12 laptop:relative laptop:mb-24 laptop:mt-64 laptop:min-h-[350px] laptop:px-[120px] laptop:py-10">
        <div className="w-full laptop:w-[48%]">
          <h2 className="pt-10 text-[26px] font-sans font-normal leading-[1.28] text-brand-black tablet:pt-0 tablet:text-[28px] laptop:text-[30px] [@media(min-width:1600px)_and_(min-height:900px)]:text-[28px]  [@media(min-width:1600px)_and_(min-height:900px)]:mt-8">
            <span className="laptop:hidden">{industry.advantagesTitle}</span>
            <span className="hidden whitespace-pre-line laptop:inline [@media(min-width:1600px)_and_(min-height:900px)]:hidden">{advantagesHeading}</span>
            <span className="hidden [@media(min-width:1600px)_and_(min-height:900px)]:inline whitespace-nowrap">{industry.advantagesTitle}</span>
          </h2>

          <p className="mt-4 text-[16px] font-body-light leading-[1.42] text-[#000000] tablet:text-[18px] tablet:leading-[1.35] laptop:leading-[1.62] laptop:max-w-[560px] laptop:text-[20px] [@media(min-width:1600px)_and_(min-height:900px)]:max-w-[630px] [@media(min-width:1600px)_and_(min-height:900px)]:text-[20px] [@media(min-width:1600px)_and_(min-height:900px)]:leading-[1.40]">
            {industry.advantagesText}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-6 tablet:gap-8 laptop:absolute laptop:right-[120px] laptop:top-[-80px] laptop:mt-0 laptop:w-[620px] laptop:grid-cols-2 laptop:gap-9 [@media(min-width:1600px)_and_(min-height:900px)]:right-[150px] [@media(min-width:1600px)_and_(min-height:900px)]:top-[-110px] [@media(min-width:1600px)_and_(min-height:900px)]:w-[780px] [@media(min-width:1600px)_and_(min-height:900px)]:gap-12">
          {industry.advantagesCards.map((card) => (
            <article
              key={card.title}
              className="h-[144px] w-[135.6px] rounded-tl-[18px] rounded-br-[18px] bg-white shadow-[0_0_10px_#00000029] tablet:h-[122px] tablet:w-auto tablet:min-h-0 laptop:min-h-[236px] [@media(min-width:1600px)_and_(min-height:900px)]:min-h-[236px]"
            >
              <div className="w-full p-4 tablet:w-full tablet:p-4 laptop:p-10 [@media(min-width:1600px)_and_(min-height:900px)]:p-10">
                <div className="relative mb-3 h-[32px] w-[32px] tablet:h-[40px] tablet:w-[40px] laptop:h-[80px] laptop:w-[80px]">
                  <Image src={card.image} alt={card.title} fill sizes="80px" className="object-contain" />
                </div>

                <h3 className="text-[16px]  font-sans font-medium leading-[1.3] text-[#000000] tablet:text-[18px] laptop:pt-3 laptop:text-[20px] [@media(min-width:1600px)_and_(min-height:900px)]:pt-5">
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
