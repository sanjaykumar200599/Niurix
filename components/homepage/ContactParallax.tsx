import Link from "next/link";

export default function ContactParallax() {
  return (
    <section className="p-5 tablet:px-20 tablet:pb-5 tablet:pt-0 laptop:p-[45px] [@media(min-width:1025px)_and_(max-width:1366px)]:p-[120px]">
      <div
        className="relative h-[55vh] rounded-tl-[32px] rounded-br-[32px] bg-cover bg-center laptop:bg-fixed"
        style={{ backgroundImage: "url('/assets/homepage/Contact.webp')" }}
      >
        <div className="absolute left-1/2 top-[39%] w-[70%] -translate-x-1/2 tablet:left-auto tablet:right-20 tablet:top-64 tablet:w-[calc(100%_-_15rem)] tablet:translate-x-0 laptop:right-[5rem] laptop:top-[8rem] laptop:w-[calc(100%_-_66rem)] [@media(min-width:1025px)_and_(max-width:1366px)]:left-[30%] [@media(min-width:1025px)_and_(max-width:1366px)]:top-[45%] [@media(min-width:1025px)_and_(max-width:1366px)]:w-[60%] [@media(min-width:1025px)_and_(max-width:1366px)]:-translate-x-[50px] [@media(min-width:1367px)_and_(max-width:1600px)]:right-[13rem] [@media(min-width:1367px)_and_(max-width:1600px)]:top-[24rem] [@media(min-width:1367px)_and_(max-width:1600px)]:w-[calc(100%_-_35rem)]">
          <p className="text-[20px] font-sans text-white tablet:text-[22px] laptop:text-[32px]">Transform Your Network Architecture With Us!</p>

          <Link
            href="/contact-us"
            className="absolute top-16 mt-0 inline-flex w-28 items-center justify-center rounded-[10px_0px] bg-brand-orange px-3 py-2 text-[16px] font-sans text-white transition hover:bg-white hover:text-black tablet:left-4 tablet:top-28"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
