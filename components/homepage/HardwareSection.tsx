import Image from "next/image";
import HardwareAnimation from "@/components/homepage/HardwareAnimation";

type HardwareSectionProps = {
  titleHtml: string;
  items: string[];
};

export default function HardwareSection({ titleHtml, items }: HardwareSectionProps) {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[964px] tablet:h-[80rem] laptop:h-[880px]">
        <div className="absolute inset-0">
          <Image src="/assets/homepage/Box section-1.webp" alt="Hardware background" fill className="hidden object-cover laptop:block" />
          <Image src="/assets/homepage/Box section1-tab.webp" alt="Hardware background" fill className="hidden object-cover tablet:block laptop:hidden" />
          <Image src="/assets/homepage/mobbackground.png" alt="Hardware background" fill className="object-cover tablet:hidden" />
        </div>

        <HardwareAnimation />

        <div className="absolute left-1/2 top-[24rem] z-30 w-[65%] -translate-x-1/2 tablet:top-1/2 tablet:w-full tablet:-translate-y-1/2 laptop:left-auto laptop:right-[65px] laptop:top-[clamp(5.5rem,8vh,8rem)] laptop:w-[34%] laptop:translate-x-0 laptop:translate-y-0 [@media(min-width:1367px)]:w-[30%]">
          <div className="w-[90%] tablet:w-full tablet:px-19.5 laptop:w-[92%] laptop:px-0 [@media(min-width:1367px)]:w-[90%]">
            <h2
              className="nx-rich text-center font-sans text-[32px] leading-tight text-brand-black tablet:text-[40px] laptop:text-left laptop:text-[24px]"
              dangerouslySetInnerHTML={{ __html: titleHtml }}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 tablet:grid-cols-2 tablet:gap-6 tablet:px-19.5 laptop:mt-0 laptop:grid-cols-1 laptop:gap-0 laptop:px-0">
            {items.map((item) => (
              <article
                key={item}
                className="flex h-[120px] items-center justify-center rounded-tl-[16px] rounded-br-[16px] border border-transparent bg-white px-6 text-center shadow-[0px_3px_15px_#0000001F] transition hover:border-brand-orange tablet:h-[130px] laptop:mt-[8%] laptop:h-[9.5rem] laptop:w-[97%]"
              >
                <p className="text-[20px] font-sans leading-tight text-brand-black tablet:text-[24px] laptop:w-[60%] laptop:text-[18px] [@media(min-width:1367px)]:text-[20px]">
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
