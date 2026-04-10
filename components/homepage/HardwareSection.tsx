import Image from "next/image";
import HardwareAnimation from "@/components/homepage/HardwareAnimation";

type HardwareSectionProps = {
  titleHtml: string;
  items: string[];
};

export default function HardwareSection({ titleHtml, items }: HardwareSectionProps) {
  return (
    <section className="relative w-full overflow-hidden laptop:overflow-visible">
      <div className="relative tablet:hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/homepage/mobbackground.png"
            alt="Hardware background"
            fill
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>

        <div className="relative z-20 px-5 pb-10 pt-6">
          <h2
            className="nx-rich mx-auto max-w-[20rem] text-center font-sans text-[22px] leading-[1.24] text-brand-black"
            dangerouslySetInnerHTML={{ __html: titleHtml }}
          />

          <div className="mt-[22rem] grid grid-cols-1 gap-3.5">
            {items.map((item) => (
              <article
                key={item}
                className="mx-auto flex h-[96px] w-[86%] items-center justify-center rounded-tl-[16px] rounded-br-[16px] border border-transparent bg-white px-5 text-center shadow-[0px_3px_15px_#0000001F]"
              >
                <p className="text-[14px] font-sans leading-[1.3] text-brand-black">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="relative hidden h-[64rem] tablet:block laptop:hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/homepage/Box section1-tab.webp"
            alt="Hardware background"
            fill
            sizes="(min-width: 768px) and (max-width: 1023px) 100vw, 0px"
            className="object-contain object-top scale-[2.1] origin-top"
          />
        </div>

        <div className="absolute inset-x-0 top-[35.5rem] z-20 px-19.5">
          <h2
            className="nx-rich mx-auto max-w-[42rem] text-center font-sans text-[22px] leading-[1.2] text-brand-black"
            dangerouslySetInnerHTML={{ __html: titleHtml }}
          />

          <div className="mt-8 grid grid-cols-2 gap-5">
            {items.map((item) => (
              <article
                key={item}
                className="flex h-[110px] items-center justify-center rounded-tl-[16px] rounded-br-[16px] border border-transparent bg-white px-6 text-center shadow-[0px_3px_15px_#0000001F]"
              >
                <p className="text-[15px] font-sans leading-[1.3] text-brand-black">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="relative hidden h-[900px] laptop:block wide:h-[940px]">
        <div className="absolute inset-0">
          <Image
            src="/assets/homepage/Box section-1.webp"
            alt="Hardware background"
            fill
            sizes="(max-width: 1023px) 0px, 100vw"
            className="object-cover"
          />
        </div>

        <HardwareAnimation />

        <div className="absolute left-1/2 top-[4rem] z-40 w-full -translate-x-1/2 tablet:-translate-y-0 laptop:left-auto laptop:right-[78px] laptop:top-[40%] laptop:w-[34%] laptop:translate-x-0 laptop:-translate-y-1/2 wide:right-[86px] wide:w-[31%] [@media(min-width:1920px)_and_(min-height:1800px)]:top-[40%] [@media(min-width:1920px)_and_(min-height:1800px)]:-translate-y-1/2">
          <div className="w-full px-19.5 laptop:px-0">
            <h2
              className="nx-rich text-left font-sans text-[30px] leading-[1.22] text-brand-black laptop:w-[95%] laptop:text-[28px] laptop:leading-[1.24]"
              dangerouslySetInnerHTML={{ __html: titleHtml }}
            />
          </div>

          <div className="mt-[28rem] grid grid-cols-4 gap-5 px-19.5 laptop:mt-[4rem] laptop:grid-cols-2 laptop:gap-4 laptop:px-0 [@media(min-width:1920px)_and_(min-height:1800px)]:mt-[4rem] [@media(min-width:1920px)_and_(min-height:1800px)]:grid-cols-2 [@media(min-width:1920px)_and_(min-height:1800px)]:gap-4">
            {items.map((item) => (
              <article
                key={item}
                className="flex items-center justify-center rounded-tl-[16px] rounded-br-[16px] border border-transparent bg-white px-6 text-center shadow-[0px_3px_15px_#0000001F] transition hover:border-brand-orange tablet:h-[120px] laptop:h-[8.8rem] laptop:w-full [@media(min-width:1920px)_and_(min-height:1800px)]:!mt-0 [@media(min-width:1920px)_and_(min-height:1800px)]:!h-[8.8rem]"
              >
                <p className="text-[20px] font-sans leading-[1.3] text-brand-black laptop:w-[80%] laptop:text-[18px]">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}