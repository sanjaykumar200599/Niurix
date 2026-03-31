import Link from "next/link";

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 12.24 21.48" className="h-4 w-4" fill="none" aria-hidden>
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
    <section className="px-5 pb-5 pt-3 tablet:px-12 tablet:pb-10 tablet:pt-2 laptop:px-20 laptop:pb-16 laptop:pt-6">
      <div
        className="relative h-[250px] overflow-hidden rounded-tl-[32px] rounded-br-[32px] bg-cover bg-center tablet:h-[320px] laptop:h-[400px] laptop:bg-fixed wide:h-[440px]"
        style={{ backgroundImage: "url('/assets/homepage/Contact.webp')" }}
      >
        <div className="absolute inset-0 flex items-center justify-center tablet:justify-end tablet:pr-14 laptop:pr-20">
          <div className="flex w-full flex-col items-center tablet:w-[58%] tablet:items-start">
            <p className="whitespace-nowrap text-center text-[18px] font-sans leading-tight text-white tablet:text-[22px] laptop:text-[30px] laptop:leading-[1.1] wide:text-[36px]">
              Transform Your Network Architecture With Us!
            </p>

            <Link
              href="/contact-us"
              className="mt-5 inline-flex h-[44px] items-center justify-center gap-2 rounded-[10px_0px] bg-brand-orange px-6 text-[15px] font-sans !text-white transition hover:bg-[#f54f00] tablet:mt-6 tablet:h-[48px] tablet:px-7 tablet:text-[16px] laptop:mt-7 laptop:h-[54px] laptop:px-8 laptop:text-[18px]"
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