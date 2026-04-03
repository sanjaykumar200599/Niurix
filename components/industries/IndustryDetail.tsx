import Image from "next/image";
import Link from "next/link";
import type { IndustryContent } from "@/lib/content/types";

type IndustryDetailProps = {
  industry: IndustryContent;
};

export default function IndustryDetail({ industry }: IndustryDetailProps) {
  const deviceImageSizeClasses: Record<string, string> = {
    router: "h-[50px] w-[158px] tablet:h-[54px] tablet:w-[172px]",
    olt: "h-[48px] w-[166px] tablet:h-[52px] tablet:w-[178px]",
    splitter: "h-[44px] w-[118px] tablet:h-[48px] tablet:w-[130px]",
    "internet traffic": "h-[38px] w-[112px] tablet:h-[42px] tablet:w-[124px]",
    "1g fiber": "h-[12px] w-[158px] tablet:h-[14px] tablet:w-[172px]",
    "ethernet cable": "h-[12px] w-[130px] tablet:h-[14px] tablet:w-[144px]",
    ont: "h-[66px] w-[66px] tablet:h-[74px] tablet:w-[74px]",
    iptv: "h-[74px] w-[114px] tablet:h-[82px] tablet:w-[124px]",
    "access point": "h-[70px] w-[70px] tablet:h-[78px] tablet:w-[78px]",
    telephone: "h-[72px] w-[96px] tablet:h-[80px] tablet:w-[106px]",
    wireless: "h-[42px] w-[88px] tablet:h-[48px] tablet:w-[96px]",
  };

  const getDeviceImageSizeClasses = (title: string) => deviceImageSizeClasses[title.toLowerCase()] ?? "h-[52px] w-[132px] tablet:h-[56px] tablet:w-[144px]";

  const advantagesHeading = industry.advantagesTitle.includes(" Solutions")
    ? industry.advantagesTitle.replace(" Solutions", "\nSolutions")
    : industry.advantagesTitle;

  return (
    <>
      <section className="relative" data-hero-banner="industries">
        <div className="relative h-80 tablet:h-[520px] laptop:h-[860px]">
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

        <h1 className="absolute left-9 top-1/2 z-10 w-[84%] -translate-y-1/2 text-[22px] font-display leading-[1.3] text-white tablet:left-[80px] tablet:w-[70%] tablet:text-[36px] laptop:left-[120px] laptop:w-[52%] laptop:text-[44px]">
          {industry.heroTitle}
        </h1>
      </section>

      <section className="my-12 px-9 tablet:my-12 tablet:px-[80px] laptop:my-20 laptop:px-[120px]">
       <h2
          className="nx-rich max-w-[920px] text-[22px] font-display leading-[1.3] text-brand-black tablet:text-[24px] laptop:text-[28px]"
          dangerouslySetInnerHTML={{ __html: industry.introTitleHtml }}
        />

        <div className="mt-3 flex flex-col-reverse gap-8 laptop:mt-4 laptop:flex-row laptop:items-center laptop:justify-between">
          <div className="flex w-full flex-col justify-start laptop:w-[24%]">
            <p className="pb-3 text-[16px] font-normal leading-[1.6] text-brand-black/80 tablet:pb-4 tablet:text-[17px] laptop:text-[19px]">
              {industry.introText}
            </p>

            <Link
              href="/contact-us"
              className="group mt-6 inline-flex w-fit flex-col rounded-[10px_0px] border-2 border-brand-orange bg-brand-orange px-6 py-2 text-left text-lg font-medium leading-tight text-white transition-colors duration-200 hover:bg-white hover:text-brand-black"
            >
              <span className="text-white transition-colors duration-200 group-hover:text-brand-black">Get in</span>
              <span className="text-white transition-colors duration-200 group-hover:text-brand-black">touch</span>
            </Link>
          </div>

          <div className="w-full laptop:w-[58%]">
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

      <section className="mx-6 my-10 rounded-[12px] bg-white px-6 py-10 shadow-[0_0_10px_#00000029] tablet:mx-10 laptop:mx-[120px] laptop:px-10 laptop:py-12">
        {/* Row 1 */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 tablet:grid-cols-4 laptop:grid-cols-4 laptop:gap-x-8 laptop:gap-y-12 laptop:px-16">
          {industry.devices.slice(0, 4).map((device) => (
            <article key={device.title} className="flex w-full flex-col items-center text-center">
              <div className="flex h-[90px] items-center justify-center tablet:h-[96px] laptop:h-[96px]">
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
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 tablet:grid-cols-3 laptop:grid-cols-6 laptop:gap-x-8 laptop:gap-y-12 laptop:px-6">
          {industry.devices.slice(4, 10).map((device) => (
            <article key={device.title} className="flex w-full flex-col items-center text-center">
              <div className="flex h-[90px] items-center justify-center tablet:h-[96px] laptop:h-[96px]">
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
        <div className="mt-10 flex justify-center">
          <article className="flex flex-col items-center text-center">
            <div className="flex h-[90px] items-center justify-center tablet:h-[96px] laptop:h-[96px]">
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
        <div className="w-full laptop:w-[44%]">
          <h2 className="whitespace-pre-line text-[24px] font-display font-normal leading-[1.28] text-brand-black tablet:text-[28px] laptop:text-[30px]">
            {advantagesHeading}
          </h2>

          <p className="mt-4 text-[17px] font-normal leading-[1.62] text-brand-black/80 tablet:text-[18px] laptop:max-w-[560px] laptop:text-[20px]">
            {industry.advantagesText}
          </p>
        </div>

        <div className="mt-10 grid gap-5 tablet:grid-cols-2 laptop:absolute laptop:right-[120px] laptop:top-[-70px] laptop:mt-0 laptop:w-[620px] laptop:grid-cols-2 laptop:gap-7">
          {industry.advantagesCards.map((card) => (
            <article
              key={card.title}
              className="min-h-[220px] rounded-tl-[18px] rounded-br-[18px] bg-white shadow-[0_0_10px_#00000029]"
            >
              <div className="p-7 laptop:p-8">
                <div className="relative mb-5 h-[64px] w-[64px] laptop:h-[72px] laptop:w-[72px]">
                  <Image src={card.image} alt={card.title} fill sizes="(min-width: 1024px) 72px, 64px" className="object-contain" />
                </div>

                <h3 className="text-[18px] font-sans font-medium leading-[1.35] text-brand-black tablet:text-[20px] laptop:text-[22px]">
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



















