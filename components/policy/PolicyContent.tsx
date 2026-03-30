import type { PolicyPageContent } from "@/lib/content/types";

type PolicyContentProps = {
  page: PolicyPageContent;
};

export default function PolicyContent({ page }: PolicyContentProps) {
  return (
    <section className="bg-[#ececec] px-9 py-10 tablet:px-20 tablet:py-12 laptop:px-[120px] laptop:py-16">
      <div className="mx-auto max-w-[1320px]">
        <h1 className="text-center font-sans text-[32px] leading-tight text-brand-orange tablet:text-[40px] laptop:text-[48px]">
          {page.title}
        </h1>

        <div className="mt-8 space-y-5 text-[16px] leading-7 text-[#393f4a] tablet:text-[18px] tablet:leading-8 laptop:text-[20px] laptop:leading-9">
          {page.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
