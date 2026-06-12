import type { Metadata } from "next";
import HeroBanner from "@/components/homepage/HeroBanner";
import HardwareSection from "@/components/homepage/HardwareSection";
import BuildingVideo from "@/components/homepage/BuildingVideo";
import DataCounters from "@/components/homepage/DataCounters";
import ProductsGrid from "@/components/homepage/ProductsGrid";
import IndustriesGrid from "@/components/homepage/IndustriesGrid";
import InstallGuide from "@/components/homepage/InstallGuide";
import InstallMedia from "@/components/homepage/InstallMedia";
import ContactParallax from "@/components/homepage/ContactParallax";
import { homeContent } from "@/data/site/content";
import { toMetadata } from "@/data/site/seo";

export const revalidate = 86400;

export const metadata: Metadata = toMetadata({ ...homeContent.seo, previewImage: "/assets/header/niurixlogo.svg" });

export default function HomePage() {
  return (
    <div>
      <div className="tablet:-mt-[72px] laptop:mt-0">
        <HeroBanner banners={homeContent.banners} />
      </div>

      <HardwareSection titleHtml={homeContent.hardwareTitleHtml} items={homeContent.hardwareItems} />

      <section className="px-5 py-9 tablet:px-19.5 tablet:py-0 laptop:px-30 laptop:py-30">
        <h2 className="mb-8 pl-4 text-[20px] font-body-medium leading-[1.25] text-brand-black tablet:pl-0 tablet:text-center tablet:pt-2 tablet:text-[28px] laptop:mb-16 laptop:text-left [@media(width:1024px)]:text-[31px] laptop:text-[32px] [@media(width:1024px)]:mb-15">
          Transforming Building <span className="text-brand-orange">Network</span>
          <br className="tablet:hidden" />
          <span className="text-brand-orange">Architecture</span> with <span className="text-brand-orange">Fiber</span>
        </h2>

        <div className="grid place-items-center">
          <BuildingVideo className="w-[303.2px] max-w-full aspect-[303.2/170.55] overflow-hidden rounded-[60px] tablet:w-full tablet:aspect-auto tablet:rounded-[20px] laptop:w-[70%] laptop:rounded-[50px]" />
        </div>
      </section>

      <section className="mt-8 bg-[#f3f3f3] px-5 py-12 tablet:mx-20 tablet:my-10 tablet:px-0 tablet:py-16 [@media(min-width:768px)_and_(max-width:1024px)_and_(orientation:landscape)]:mx-19.5 [@media(min-width:768px)_and_(max-width:1024px)_and_(orientation:landscape)]:my-0 [@media(min-width:768px)_and_(max-width:1024px)_and_(orientation:landscape)]:px-19.5 [@media(min-width:768px)_and_(max-width:1024px)_and_(orientation:landscape)]:py-0 laptop:mx-0 laptop:px-30 laptop:py-25">
        <DataCounters metrics={homeContent.metrics} />
      </section>

      <section className="px-5 py-10 tablet:px-20 tablet:py-20 laptop:p-30">
        <h2 className="mb-8 text-[20px] font-body-medium text-[#000000] tablet:text-[28px] laptop:text-[28px]">
          <span className="text-brand-orange">Niurix</span> Products
        </h2>
        <ProductsGrid products={homeContent.products} />
      </section>

      <section className="pb-10 pt-4 tablet:pb-16 tablet:pt-2 laptop:pb-30 laptop:pt-0">
        <h2 className="ml-4 px-5 pb-8 text-[20px] font-body-medium text-brand-black tablet:ml-0 tablet:px-20 tablet:text-[22px] laptop:px-30 laptop:pb-10 laptop:text-[28px]">
          <span className="text-brand-orange">Our</span> Industries
        </h2>
        <IndustriesGrid industries={homeContent.industries} />
      </section>

      <section className="px-5 pb-10 pt-6 tablet:px-20 tablet:pb-16 tablet:pt-4 laptop:px-30 laptop:pb-30 laptop:pt-8">
        <h2 className="mb-8 text-[20px]  font-body-medium text-[#000000] tablet:text-[28px] laptop:text-[28px]">
          <span className="text-brand-orange">Easy To</span> Install
        </h2>

        <div className="grid gap-8 laptop:grid-cols-[60%_40%] laptop:items-center laptop:gap-6 wide:grid-cols-[61%_39%]">
          <div className="overflow-hidden rounded-[32px] border border-black/10 bg-white">
            <InstallMedia />
          </div>
          <InstallGuide steps={homeContent.installSteps} />
        </div>
      </section>

      <ContactParallax />
    </div>
  );
}
