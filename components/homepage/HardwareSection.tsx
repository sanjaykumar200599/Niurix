import Image from "next/image";
import HardwareAnimation from "@/components/homepage/HardwareAnimation";

type HardwareSectionProps = {
  titleHtml: string;
  items: string[];
};

export default function HardwareSection({ titleHtml, items }: HardwareSectionProps) {
  const getLaptopCardText = (item: string) => {
    if (item === "End to end Gpon solution") {
      return "End to end\nGpon solution";
    }

    if (item === "High Throughput and Low latency") {
      return "High\nThroughput and\nLow latency";
    }

    return item;
  };

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

        <div className="relative z-20 px-5 pb-10 pt-10">
          <h2 className="ml-[2.35rem] mr-auto max-w-[20rem] text-left font-sans text-[20px] leading-[1.34] text-brand-black">
            Empower Spaces with
            <br />
            <span className="whitespace-nowrap">
              <span className="text-brand-orange">High-Performance</span> GPON
            </span>
            <br />
            <span className="text-brand-orange">Fiber Solutions</span>
          </h2>

          <div className="mt-[22rem] grid grid-cols-1 gap-6 mb-[60px]">
            {items.map((item) => (
              <article
                key={item}
                className="mx-auto flex h-[73px] w-[262px] items-center justify-center rounded-tl-[16px] rounded-br-[16px] border border-transparent bg-white px-5 text-center shadow-[0px_3px_15px_#0000001F]"
              >
                <p className="text-[10.4px] font-sans leading-[1.3] text-brand-black">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="relative hidden h-[1280px] tablet:block laptop:hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/homepage/mobbackground.png"
            alt="Hardware background"
            fill
            sizes="(min-width: 768px) and (max-width: 1023px) 100vw, 0px"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-x-0 top-[42rem] z-20 px-19.5 [@media(width:1024px)]:top-[40rem] [@media(width:1024px)]:px-12">
          <h2 className="mx-auto max-w-[44rem] text-center font-sans text-[28px] leading-[1.2] text-brand-black [@media(width:1024px)]:max-w-none [@media(width:1024px)]:whitespace-nowrap [@media(min-width:768px)_and_(max-width:1023px)]:-translate-x-6">
            <span className="whitespace-nowrap">
              Empower Spaces with <span className="text-brand-orange">High-Performance</span> GPON{" "}
              <span className="text-brand-orange">Fiber</span>
            </span>
            <br className="[@media(width:1024px)]:hidden" />
            <span className="text-brand-orange [@media(width:1024px)]:inline"> Solutions</span>
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-5 [@media(width:1024px)]:mx-auto [@media(width:1024px)]:max-w-[860px] [@media(width:1024px)]:grid-cols-3 [@media(width:1024px)]:gap-4">
            {items.map((item) => (
              <article
                key={item}
                className={`flex h-[110px] items-center justify-center rounded-tl-[16px] rounded-br-[16px] border border-transparent bg-white px-6 text-center shadow-[0px_3px_15px_#0000001F] [@media(width:1024px)]:h-[114px] [@media(width:1024px)]:px-12 ${item === items[3] ? "[@media(width:1024px)]:col-start-1" : ""}`}
              >
                <p className="text-[15px] font-sans tablet:text-[24px] leading-[1.3] text-brand-black">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="relative hidden h-[900px] laptop:block [@media(min-width:1600px)_and_(min-height:900px)]:h-[880px]">
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

        <div className="absolute left-1/2 top-[4rem] z-40 w-full -translate-x-1/2 tablet:-translate-y-0 laptop:left-auto laptop:right-[85px] laptop:top-[42%] laptop:w-[28%] laptop:translate-x-0 laptop:-translate-y-1/2 [@media(min-width:1600px)_and_(min-height:900px)]:right-[72px] [@media(min-width:1600px)_and_(min-height:900px)]:top-[41%] [@media(min-width:1600px)_and_(min-height:900px)]:w-[596px]">
          <div className="w-full px-19.5 laptop:px-0">
            <h2
              className="nx-rich text-left font-sans text-[30px] leading-[1.22] text-[#000000] laptop:w-full laptop:text-[20px] laptop:leading-[1.24] laptop:[&_br]:block [@media(min-width:1600px)_and_(min-height:900px)]:text-[24px]"
              dangerouslySetInnerHTML={{ __html: titleHtml }}
            />
          </div>

          <div className="mt-[28rem] grid grid-cols-2 gap-4 px-19.5 laptop:mt-4 laptop:grid-cols-2 laptop:gap-x-2.5 laptop:gap-y-5.5 laptop:px-0 [@media(min-width:1600px)_and_(min-height:900px)]:gap-x-2.5">
            {items.map((item) => (
              <article
                key={item}
                className="flex items-center justify-center rounded-tl-[16px] rounded-br-[16px] border border-transparent bg-white px-3 text-center shadow-[0px_3px_15px_#0000001F] transition hover:border-brand-orange tablet:h-[120px] laptop:h-[8.7rem] laptop:w-full [@media(min-width:1600px)_and_(min-height:900px)]:h-[153px] [@media(min-width:1600px)_and_(min-height:900px)]:w-[280px]"
              >
                <p className="text-[20px] font-sans leading-[1.25] text-black laptop:w-[90%] laptop:font-sans laptop:text-[20px] laptop:text-black laptop:whitespace-pre-line [@media(min-width:1600px)_and_(min-height:900px)]:whitespace-normal [@media(min-width:1600px)_and_(min-height:900px)]:w-[75%]">
                  {getLaptopCardText(item)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
