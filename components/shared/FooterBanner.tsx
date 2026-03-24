import Image from "next/image";
import Link from "next/link";

export default function FooterBanner() {
  return (
    <section className="px-5 py-9 tablet:px-20 tablet:py-20 laptop:p-[120px]">
      <div className="relative overflow-hidden rounded-tl-[30px] rounded-br-[30px]">
        <Image
          src="/assets/FooterBanner/footer_banner.png"
          alt="Get in touch"
          width={1600}
          height={520}
          className="hidden h-auto w-full tablet:block"
        />
        <Image
          src="/assets/FooterBanner/mobile_banner.png"
          alt="Get in touch"
          width={900}
          height={500}
          className="h-auto w-full tablet:hidden"
        />

        <div className="absolute inset-0 hidden tablet:flex tablet:items-center">
          <div className="ml-[52%] flex flex-col items-start">
            <p className="font-display text-[20px] leading-tight text-white tablet:text-[28px] laptop:text-[34px]">
              Transform Your Network Architecture <br /> With Us!
            </p>
            <Link
              href="/contact-us"
              className="mt-4 inline-flex rounded-[10px_0px] border border-brand-orange bg-brand-orange px-5 py-2 text-[18px] font-sans text-white transition hover:bg-transparent"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 flex items-end justify-start px-8 pb-7 tablet:hidden">
          <div className="w-[88%]">
            <p className="font-display text-[20px] leading-tight text-white">
              Transform Your Network Architecture With Us!
            </p>
            <Link
              href="/contact-us"
              className="mt-4 inline-flex rounded-[10px_0px] border border-brand-orange bg-brand-orange px-4 py-2 text-[16px] font-sans text-white transition hover:bg-transparent"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}