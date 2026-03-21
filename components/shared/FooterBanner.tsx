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

        <div className="absolute inset-0 flex items-center justify-center px-6 tablet:justify-end tablet:px-14 laptop:px-20">
          <div className="w-full max-w-[560px] [@media(min-width:1025px)_and_(max-width:1366px)]:max-w-[480px]">
            <p className="font-display text-[20px] leading-tight text-white tablet:text-[22px] laptop:text-[32px]">Transform Your Network Architecture With Us!</p>
            <Link
              href="/contact-us"
              className="mt-4 inline-flex rounded-[10px_0px] border border-brand-orange bg-brand-orange px-5 py-2 text-[18px] font-sans text-white transition hover:bg-transparent"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
