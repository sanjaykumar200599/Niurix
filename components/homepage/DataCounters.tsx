import type { HomeData } from "@/lib/content/types";

type DataCountersProps = {
  metrics: HomeData["metrics"];
};

export default function DataCounters({ metrics }: DataCountersProps) {
  return (
    <div className="flex flex-col px-4 items-center justify-around gap-8 tablet:flex-col tablet:gap-16 [@media(min-width:768px)_and_(max-width:1024px)_and_(orientation:landscape)]:flex-row [@media(min-width:768px)_and_(max-width:1024px)_and_(orientation:landscape)]:gap-8 laptop:flex-row laptop:gap-10">
      {metrics.map((metric) => (
        <article key={metric.count + metric.desc} className="flex w-full flex-col items-center tablet:items-center laptop:w-1/4 laptop:items-center">
          <p className="font-number pb-2 text-[32px] leading-none text-brand-orange tablet:pb-4 tablet:text-[80px]">{metric.count}</p>
          <p className="mt-0 w-full whitespace-nowrap text-center text-[16px] font-sans text-brand-black tablet:mt-1 tablet:w-auto tablet:whitespace-normal tablet:text-center tablet:text-[18px] laptop:w-[85%] laptop:text-center laptop:text-[20px]">
            {metric.desc.trim().startsWith("Reduction in") ? (
              <>
                <span className="tablet:hidden">{metric.desc}</span>
                <span className="hidden tablet:inline">Reduction in </span>
                <br className="hidden tablet:block" />
                <span className="hidden tablet:inline">{metric.desc.trim().slice("Reduction in ".length)}</span>
              </>
            ) : (
              metric.desc
            )}
          </p>
        </article>
      ))}
    </div>
  );
}
