import Link from "next/link";

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 12.24 21.48" className="h-2 w-2" fill="none" aria-hidden>
      <path
        d="M17.24,8.621,8.62,0,0,8.621"
        transform="translate(10.742 2.121) rotate(90)"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function ContactParallax() {
  return (
    <section className="px-5 pb-5 pt-3 tablet:px-12 tablet:pb-10 tablet:pt-2 laptop:px-12 laptop:pb-16 laptop:pt-6">
      <div
        className="relative h-[560px] overflow-hidden rounded-tl-[32px] rounded-br-[32px] bg-cover bg-fixed bg-[position:20%_16%] tablet:h-[320px] tablet:bg-center laptop:h-[960px] laptop:bg-center wide:h-[960px] [@media(min-width:1920px)_and_(min-height:1800px)]:h-[960px]"
        style={{ backgroundImage: "url('/assets/homepage/Contact.webp')" }}
      >
        <div className="absolute inset-0 bg-white/16 tablet:bg-white/8" />

        <div className="absolute inset-0 flex items-center px-6 tablet:items-center tablet:px-0 tablet:justify-end tablet:pr-14 laptop:items-start laptop:justify-end laptop:pt-24 laptop:pr-92 [@media(min-width:1920px)_and_(min-height:1800px)]:items-start [@media(min-width:1920px)_and_(min-height:1800px)]:justify-end [@media(min-width:1920px)_and_(min-height:1800px)]:pt-24 [@media(min-width:1920px)_and_(min-height:1800px)]:pr-62">
          <div className="flex w-full flex-col items-start tablet:w-[58%] tablet:items-start laptop:w-[42%] laptop:max-w-[640px] [@media(min-width:1920px)_and_(min-height:1800px)]:w-[42%] [@media(min-width:1920px)_and_(min-height:1800px)]:max-w-[640px]">
            <p className="max-w-[15rem] text-left text-[20px] font-sans leading-[1.15] text-white tablet:max-w-none tablet:text-[22px] tablet:leading-tight laptop:whitespace-nowrap laptop:text-[42px] laptop:leading-[1.02] wide:text-[35px]">
              Transform Your Network Architecture With Us!
            </p>

            <Link
              href="/contact-us"
              className="mt-5 inline-flex h-[44px] items-center justify-center gap-2 rounded-[10px_0px] bg-brand-orange px-6 text-[15px] font-sans !text-white transition hover:bg-[#f54f00] tablet:mt-6 tablet:h-[48px] tablet:px-7 tablet:text-[16px] laptop:mt-10 laptop:h-[44px] laptop:px-6 laptop:text-[14px] [@media(min-width:1920px)_and_(min-height:1800px)]:mt-10"
            >
              <span className="text-white">Contact us</span>
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
