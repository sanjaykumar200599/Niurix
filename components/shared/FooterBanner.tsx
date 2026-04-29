import Image from "next/image";
import Link from "next/link";

export default function FooterBanner() {
  return (
    <section className="px-5 py-9 tablet:px-20 tablet:py-20 laptop:p-[120px]">
      <div className="relative mx-auto h-[414.31px] w-[303.3px] overflow-hidden rounded-tl-[30px] rounded-br-[30px] tablet:h-auto tablet:w-full">
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
          className="h-full w-full object-cover tablet:hidden"
        />

        <div className="absolute inset-0 hidden tablet:flex tablet:items-center tablet:justify-end tablet:px-10 laptop:px-0 laptop:justify-end laptop:pr-51 [@media(min-width:1600px)_and_(min-height:900px)]:justify-end [@media(min-width:1600px)_and_(min-height:900px)]:pr-51">
          <div className="flex w-[44%] max-w-[420px] flex-col items-start tablet:w-[45%] tablet:max-w-[450px] tablet:pr-4 laptop:ml-0 laptop:w-[36%] laptop:max-w-[520px] laptop:pr-0 [@media(min-width:1600px)_and_(min-height:900px)]:ml-0 [@media(min-width:1600px)_and_(min-height:900px)]:w-[36%] [@media(min-width:1600px)_and_(min-height:900px)]:max-w-[520px]">
            <p className="font-sans text-[20px] leading-tight text-white tablet:text-[22px] laptop:text-[28px]">
              <span className="hidden tablet:inline-block tablet:w-[17.5rem] laptop:hidden">
                Transform Your Network
                <br />
                Architecture With Us!
              </span>
              <span className="hidden laptop:inline">
                <span className="whitespace-nowrap">Transform Your Network Architecture</span>
                <br />
                With Us!
              </span>
            </p>
            <Link
              href="/contact-us"
              className="mt-3 inline-flex items-center justify-center rounded-[10px_0px] border border-brand-orange bg-brand-orange px-3 py-1.5 text-center text-[16px] font-sans !text-white visited:!text-white transition hover:bg-transparent hover:!text-white laptop:mt-4 tablet:text-[18px] laptop:px-5 laptop:py-2 laptop:text-[18px]"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 flex h-[42%] items-start justify-start px-8 pt-10 tablet:hidden">
          <div className="w-full max-w-[15.25rem] pl-3.5">
            <p className="font-sans text-[20px] leading-[1.28] text-white">
              Transform Your Network
              <br />
              Architecture With Us!
            </p>
            <Link
              href="/contact-us"
              className="mt-4 inline-flex items-center justify-center rounded-[10px_0px] border border-brand-orange bg-brand-orange px-1.5 py-1.5 text-[16px] leading-none font-sans !text-white visited:!text-white transition hover:bg-transparent hover:!text-white"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
