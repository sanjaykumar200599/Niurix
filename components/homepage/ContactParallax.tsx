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
        strokeWidth="2.8"
      />
    </svg>
  );
}

export default function ContactParallax() {
  return (
    <section className="px-5 pb-5 pt-3 tablet:px-12 tablet:pb-10 tablet:pt-2 laptop:px-12 laptop:pb-16 laptop:pt-6 [@media(min-width:1600px)_and_(min-height:900px)]:px-[45px]">
      <div
        className="relative mx-auto h-[366px] w-[335px] max-w-full overflow-hidden rounded-tl-[32px] rounded-br-[32px] bg-cover bg-fixed bg-[position:53%_18%] tablet:mx-auto tablet:h-[563.2px] tablet:w-[608px] tablet:max-w-none tablet:bg-center laptop:h-[400px] laptop:w-full laptop:max-w-none laptop:bg-center wide:h-[420px] [@media(min-width:1600px)_and_(min-height:900px)]:h-[514px] [@media(min-width:1600px)_and_(min-height:900px)]:w-[1830px]"
        style={{ backgroundImage: "url('/assets/homepage/Contact.webp')" }}
      >
        <div className="absolute inset-0" />

        <div className="bg-white/10 absolute inset-0 flex items-center px-8 tablet:items-center tablet:justify-center tablet:px-26 tablet:pr-0 laptop:items-start laptop:justify-end laptop:px-0 laptop:pt-28 laptop:pr-88 [@media(min-width:1600px)_and_(min-height:900px)]:items-start [@media(min-width:1600px)_and_(min-height:900px)]:justify-end [@media(min-width:1600px)_and_(min-height:900px)]:pt-34 [@media(min-width:1600px)_and_(min-height:900px)]:pr-50">
          <div className="flex w-full flex-col items-start tablet:w-[80%] tablet:items-center tablet:pt-10 laptop:w-[42%] laptop:max-w-[640px] laptop:items-start laptop:pt-0 [@media(min-width:1600px)_and_(min-height:900px)]:w-[42%] [@media(min-width:1600px)_and_(min-height:900px)]:max-w-[640px]">
            <p className="max-w-[15rem] text-left text-[20px] font-sans leading-[1.15] text-white tablet:max-w-none tablet:text-start tablet:text-[32px] tablet:leading-tight laptop:whitespace-nowrap laptop:text-[42px] laptop:leading-[1.02] wide:text-[32px]">
              Transform Your Network Architecture With Us!
            </p>

            <Link
              href="/contact-us"
              className="mt-5 inline-flex h-[44px] items-center justify-center gap-2 rounded-[10px_0px] bg-brand-orange px-6 text-[16px] font-body-medium !text-white transition hover:bg-[#f54f00] tablet:mt-6 tablet:h-[45px] tablet:-translate-x-30 tablet:px-5 tablet:text-[16px] laptop:mt-14 laptop:h-[44px] laptop:translate-x-0 laptop:px-6 laptop:text-[16px] [@media(min-width:1600px)_and_(min-height:900px)]:mt-14"
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
