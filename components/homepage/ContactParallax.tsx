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
    <section className="px-5 pb-5 pt-3 tablet:px-20 tablet:pb-10 tablet:pt-2 laptop:px-30 laptop:pb-16 laptop:pt-6">
      <div
        className="relative h-[250px] overflow-hidden rounded-tl-[32px] rounded-br-[32px] bg-cover bg-center tablet:h-[320px] laptop:h-[520px] laptop:bg-fixed wide:h-[560px]"
        style={{ backgroundImage: "url('/assets/homepage/Contact.webp')" }}
      >
        <div className="absolute inset-0 flex items-center justify-center px-6 tablet:justify-end tablet:px-14 laptop:px-20">
          <div className="w-full max-w-[640px] text-center tablet:text-left">
            <p className="text-[24px] font-sans leading-tight text-white tablet:text-[30px] laptop:text-[56px] laptop:leading-[1.1] wide:text-[62px]">
              Transform Your Network Architecture With Us!
            </p>

            <Link
              href="/contact-us"
              className="mt-6 inline-flex h-[48px] items-center justify-center gap-2 rounded-[10px_0px] bg-brand-orange px-6 text-[16px] font-sans text-white transition hover:bg-[#f54f00] tablet:h-[52px] tablet:px-7 tablet:text-[18px] laptop:mt-8 laptop:h-[58px] laptop:px-8 laptop:text-[20px]"
            >
              <span>Contact us</span>
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
