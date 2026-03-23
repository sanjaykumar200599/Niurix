import Image from "next/image";
import HardwareAnimation from "@/components/homepage/HardwareAnimation";

type HardwareSectionProps = {
  titleHtml: string;
  items: string[];
};

export default function HardwareSection({ titleHtml, items }: HardwareSectionProps) {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[964px] tablet:h-[80rem] laptop:h-[900px] wide:h-[940px]">
        <div className="absolute inset-0">
          <Image src="/assets/homepage/Box section-1.webp" alt="Hardware background" fill className="hidden object-cover laptop:block" />
          <Image src="/assets/homepage/Box section1-tab.webp" alt="Hardware background" fill className="hidden object-cover tablet:block laptop:hidden" />
          <Image src="/assets/homepage/mobbackground.png" alt="Hardware background" fill className="object-cover tablet:hidden" />
        </div>

        <HardwareAnimation />

        <div className="absolute left-1/2 top-[2rem] z-30 w-[82%] -translate-x-1/2 tablet:top-[4rem] tablet:w-full tablet:-translate-y-0 laptop:left-auto laptop:right-[64px] laptop:top-[3.25rem] laptop:w-[34%] laptop:translate-x-0 laptop:translate-y-0 wide:right-[72px] wide:top-[3.25rem] wide:w-[31%]">
          <div className="w-full px-5 tablet:px-19.5 laptop:px-0">
            <h2
              className="nx-rich text-center font-sans text-[30px] leading-tight text-brand-black tablet:text-left tablet:text-[34px] laptop:text-left laptop:text-[33px] laptop:leading-[1.18] wide:text-[39px]"
              dangerouslySetInnerHTML={{ __html: titleHtml }}
            />
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 px-5 tablet:grid-cols-2 tablet:gap-5 tablet:px-19.5 laptop:mt-6 laptop:grid-cols-1 laptop:gap-4 laptop:px-0 wide:mt-7 wide:gap-5">
            {items.map((item) => (
              <article
                key={item}
                className="flex h-[120px] items-center justify-center rounded-tl-[16px] rounded-br-[16px] border border-transparent bg-white px-6 text-center shadow-[0px_3px_15px_#0000001F] transition hover:border-brand-orange tablet:h-[120px] laptop:h-[9rem] laptop:w-full wide:h-[9.8rem]"
              >
                <p className="text-[20px] font-sans leading-tight text-brand-black tablet:text-[20px] laptop:w-[80%] laptop:text-[16px] wide:text-[18px]">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
