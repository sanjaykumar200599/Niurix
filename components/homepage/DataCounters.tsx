import type { HomeData } from "@/lib/content/types";

type DataCountersProps = {
  metrics: HomeData["metrics"];
};

export default function DataCounters({ metrics }: DataCountersProps) {
  const isFasterIncidentMetric = (desc: string) => desc.trim() === "Faster Incident Detection and Resolution";

  const renderReductionLabel = (desc: string) => {
    const trimmed = desc.trim();
    const prefix = "Reduction in ";
    if (!trimmed.startsWith(prefix)) return desc;

    const remainder = trimmed.slice(prefix.length).trim();
    const lastSpaceIndex = remainder.lastIndexOf(" ");

    if (lastSpaceIndex === -1) {
      return (
        <>
          <span className="hidden tablet:inline laptop:hidden">{`${prefix.trimEnd()} ${remainder}`}</span>
          <span className="hidden laptop:inline whitespace-nowrap">{prefix.trimEnd()}</span>
          <br className="hidden laptop:block" />
          <span className="hidden laptop:inline">{remainder}</span>
        </>
      );
    }

    const firstLineRemainder = remainder.slice(0, lastSpaceIndex);
    const lastWord = remainder.slice(lastSpaceIndex + 1);

    return (
      <>
        <span className="hidden tablet:inline laptop:hidden">{trimmed}</span>

        <span className="hidden laptop:inline whitespace-nowrap">{`${prefix}${firstLineRemainder}`}</span>
        <br className="hidden laptop:block" />
        <span className="hidden laptop:inline">{lastWord}</span>
      </>
    );
  };

  return (
    <div className="flex flex-col px-4 items-center justify-around gap-8 tablet:flex-col tablet:gap-16 [@media(min-width:768px)_and_(max-width:1024px)_and_(orientation:landscape)]:flex-row [@media(min-width:768px)_and_(max-width:1024px)_and_(orientation:landscape)]:gap-8 laptop:flex-row laptop:gap-16 [@media(width:1024px)]:py-6">
      {metrics.map((metric) => (
        <article key={metric.count + metric.desc} className="flex w-full flex-col items-center tablet:items-center laptop:w-1/4 laptop:items-center laptop:pl-10">
          <p className="font-number pb-2 text-[32px] leading-none text-brand-orange tablet:pb-4 tablet:text-[80px]">{metric.count}</p>
          <p className="mt-0 w-full whitespace-nowrap tablet:text-[20px] text-center text-[16px] font-sans text-[#000000] tablet:mt-1 tablet:w-auto tablet:whitespace-nowrap tablet:py-3 tablet:text-center laptop:w-[85%] laptop:whitespace-normal laptop:py-0 laptop:text-center laptop:text-[20px]">
            {metric.desc.trim().startsWith("Reduction in") ? (
              <>
                <span className="tablet:hidden">{metric.desc}</span>
                {renderReductionLabel(metric.desc)}
              </>
            ) : isFasterIncidentMetric(metric.desc) ? (
              <>
                <span className="tablet:hidden">{metric.desc}</span>
                <span className="hidden tablet:inline laptop:hidden">{metric.desc}</span>
                <span className="hidden laptop:inline whitespace-nowrap">Faster Incident Detection and</span>
                <br className="hidden laptop:block" />
                <span className="hidden laptop:inline">Resolution</span>
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
