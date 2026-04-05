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

        <div className="absolute inset-0 hidden tablet:flex tablet:items-center tablet:justify-end tablet:px-10 laptop:px-0 laptop:justify-start">
          <div className="flex w-[44%] max-w-[420px] flex-col items-start tablet:pr-4 laptop:w-auto laptop:max-w-[620px] laptop:pr-0 laptop:ml-[42%]">
            <p className="font-display text-[20px] leading-tight text-white tablet:text-[22px] laptop:text-[34px]">
              <span className="laptop:whitespace-nowrap">Transform Your Network Architecture</span> <br /> With Us!
            </p>
            <Link
              href="/contact-us"
              className="mt-3 inline-flex items-center justify-center rounded-[10px_0px] border border-brand-orange bg-brand-orange px-4 py-1.5 text-center text-[16px] font-sans !text-white visited:!text-white transition hover:bg-transparent hover:!text-white laptop:mt-4 laptop:px-5 laptop:py-2 laptop:text-[18px]"
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
              className="mt-4 inline-flex rounded-[10px_0px] border border-brand-orange bg-brand-orange px-4 py-2 text-[16px] font-sans !text-white visited:!text-white transition hover:bg-transparent hover:!text-white"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

