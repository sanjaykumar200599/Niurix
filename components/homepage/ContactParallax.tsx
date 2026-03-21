import Link from "next/link";

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 12.24 21.48" className="h-3 w-3" fill="none" aria-hidden>
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
    <section className="px-5 py-5 tablet:px-20 tablet:pb-5 tablet:pt-0 laptop:p-[45px] [@media(min-width:1025px)_and_(max-width:1366px)]:p-[120px]">
      <div
        className="relative h-[46vh] min-h-[300px] overflow-hidden rounded-tl-[32px] rounded-br-[32px] bg-cover bg-center laptop:h-[55vh] laptop:bg-fixed"
        style={{ backgroundImage: "url('/assets/homepage/Contact.webp')" }}
      >
        <div className="absolute inset-0 flex items-center justify-center px-6 tablet:justify-end tablet:px-14 laptop:px-20">
          <div className="w-full max-w-[590px] [@media(min-width:1025px)_and_(max-width:1366px)]:max-w-[560px]">
            <p className="text-[20px] font-sans leading-tight text-white tablet:text-[22px] laptop:text-[32px]">Transform Your Network Architecture With Us!</p>

            <Link
              href="/contact-us"
              className="mt-6 inline-flex w-28 items-center justify-center gap-2 rounded-[10px_0px] bg-brand-orange px-3 py-2 text-[16px] font-sans text-white transition hover:bg-white hover:text-black"
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
