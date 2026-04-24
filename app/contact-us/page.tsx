import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/contact-us/ContactForm";
import { toMetadata } from "@/data/site/seo";

const seo = {
  title: "Contact Niurix | GPON Fiber Network Solutions",
  description: "Want to know more about our products? Get in touch with Niurix.",
  canonicalPath: "/contact-us",
  previewImage: "/assets/contactus/banner.webp",
};

export const metadata: Metadata = toMetadata(seo);

export default function ContactUsPage() {
  return (
    <div>
      <section className="relative -mt-[72px] mb-6 tablet:mt-0 tablet:mb-0">
        <div className="relative mx-auto h-[813.21px] w-[375.2px] tablet:mx-0 tablet:h-[470px] tablet:w-full laptop:h-[850px] [@media(min-width:1600px)_and_(min-height:900px)]:h-[1080px]">
          <Image src="/assets/contactus/banner.webp" alt="Contact banner" fill sizes="(max-width: 767px) 0px, 100vw" className="hidden object-cover tablet:object-[center_58%] laptop:object-center tablet:block" priority />
          <Image src="/assets/contactus/Contact banner mobile.webp" alt="Contact banner" fill sizes="(max-width: 767px) 100vw, 0px" className="object-cover tablet:hidden" priority />
        </div>
        <p
          className="absolute left-9 right-9 top-83 -translate-y-1/2 font-sans text-[32px] leading-[1.35] text-white tablet:left-[80px] tablet:right-auto tablet:top-0 tablet:w-[70%] tablet:translate-y-0 tablet:font-sans tablet:text-[36px] tablet:leading-snug tablet:flex tablet:h-full tablet:items-center
          laptop:left-[120px] laptop:w-[47%] laptop:text-[48px] [@media(min-width:1600px)_and_(min-height:900px)]:top-82 [@media(min-width:1600px)_and_(min-height:900px)]:bottom-100 [@media(min-width:1600px)_and_(min-height:900px)]:h-auto [@media(min-width:1600px)_and_(min-height:900px)]:w-[56%] [@media(min-width:1600px)_and_(min-height:900px)]:block"
        >
          <span className="tablet:hidden ">
            Want to know more
            <br />
            about our product?
            <br />
            Have any query? Or
            <br />
            just simply want to
            <br />
            say hello! We would
            <br />
            love to hear from
            <br />
            you.
          </span>
          <span className="hidden tablet:inline [@media(min-width:1600px)_and_(min-height:900px)]:hidden">
            Want to know more about our product? Have any query? Or just simply want to say hello! We would love to hear from you.
          </span>
          <span className="hidden [@media(min-width:1600px)_and_(min-height:900px)]:block">
            Want to know more about our product?
            <br />
            Have any query? Or just simply want to
            <br />
            say hello! We would love to hear from
            <br />
            you.
          </span>
        </p>
      </section>

      <section className="relative mt-6 mb-6 tablet:mt-0 tablet:mb-20">
        <div className="absolute inset-0 hidden tablet:block">
          <Image src="/assets/contactus/Contact backgr.webp" alt="Contact background" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 tablet:hidden">
          <Image src="/assets/contactus/Contact back g mobile.webp" alt="Contact background" fill sizes="100vw" className="object-cover" />
        </div>

        <div className="relative px-9 pb-28 pt-12 tablet:px-20 tablet:pb-36 tablet:pt-14 laptop:px-[120px] laptop:pb-20 laptop:pt-[90px]">
          <h1 className="text-[26px] font-sans text-brand-black tablet:text-[29px] laptop:text-[42px]">
            <span className="text-brand-orange">Contact</span> Us
          </h1>

          <p className="mt-2 w-full text-base font-body-light leading-[1.35] text-[#000000] tablet:mt-4 tablet:w-full tablet:text-lg tablet:leading-[1.25] tablet:text-[#000000]  laptop:w-[43%] laptop:text-[20px] laptop:mt-1">
            Niurix is headquartered at the beautiful city of Illinois, USA. To contact us, use any of the below means and we will always be available to assist you.
          </p>

          <div className="mt-8 grid gap-y-7 tablet:mt-10 laptop:w-[48%] laptop:grid-cols-[1fr_1fr] laptop:gap-x-18  [@media(min-width:1600px)_and_(min-height:900px)]:w-[56%]">
            <div>
              <p className="text-[16px] font-body-medium tablet:text-xl laptop:text-[24px]">Address</p>
              <p className="mt-2 font-body-light laptop:text-[20px]
              whitespace-pre-line text-base leading-[1.3] text-[#000000] tablet:text-lg tablet:leading-[1.4] tablet:text-[#000000] "><><span className="tablet:hidden">{"2130 Foster Ave\nWheeling IL,\n60090 USA"}</span><span className="hidden whitespace-pre-line tablet:inline laptop:hidden">{"2130 Foster Ave Wheeling IL,\n60090 USA"}</span><span className="hidden whitespace-pre-line laptop:inline">{"2130\nFoster Ave\nWheeling\nIL, 60090\nUSA"}</span></></p>
            </div>

            <div className="-mt-4 tablet:mt-0">
              <div className="mb-3 tablet:mb-7">
                <p className="text-[16px] font-body-medium tablet:text-xl laptop:text-2xl laptop:text-[24px]">Contact No.</p>
                <p className="text-base font-body-light text-[#000000] tablet:text-[#000000] tablet:text-lg laptop:text-[20px]">+1 847-957-6900</p>
              </div>
              <div>
                <p className="text-[16px] font-body-medium tablet:text-xl laptop:text-[24px] [@media(min-width:1600px)_and_(min-height:900px)]:pt-4">Email ID</p>
                <p className="text-base font-body-light text-[#000000] tablet:text-[#000000] tablet:text-lg laptop:text-[20px]">salesinfo@niurix.com</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[-7.4rem] left-1/2 h-[192px] w-[265px] -translate-x-1/2 tablet:bottom-[-11rem] tablet:left-1/2 tablet:h-[19rem] tablet:w-[27rem] tablet:-translate-x-1/2 laptop:bottom-[-12rem] laptop:left-auto laptop:right-[8%] laptop:top-auto laptop:h-[25rem] laptop:w-[46rem] laptop:translate-x-0">
            <Image
              src="/assets/contactus/Product.webp"
              alt="Product"
              fill
              sizes="(max-width: 767px) 265px, (max-width: 1023px) 432px, 736px"
              className="origin-bottom object-contain scale-y-[1.25] tablet:scale-y-100"
            />
          </div>
        </div>
      </section>

      <section className="mt-22 px-9 pb-8 pt-2 tablet:mt-0 tablet:mb-0 tablet:px-20 tablet:pb-12 tablet:pt-4 laptop:px-[120px] laptop:pb-36 laptop:pt-20">
        <div className="flex flex-col gap-8 laptop:flex-row laptop:justify-between mt-7">
          <div className="w-full border-b border-[#d6d6d6] pb-8 laptop:w-[70%] laptop:border-b-0 laptop:border-r laptop:pb-0 laptop:pr-8">
            <h2 className="mt-1 text-[26px] font-sans text-brand-black tablet:mt-5 tablet:text-[29px] laptop:mt-10 laptop:text-[42px] ">
              <span className="text-brand-orange">Get in</span> Touch
            </h2>
            <p className="mt-4 w-full text-base font-body-light leading-[1.3] text-[#000000] tablet:w-[85%] tablet:text-lg tablet:leading-[1.2] tablet:text-[#000000] laptop:mt-2 laptop:text-[20px] [@media(min-width:1600px)_and_(min-height:900px)]:w-[90%]">
              Let&apos;s connect. Your feedback, questions, and ideas matter to us and we are there to provide answers and support. Enter your details in the form below and we will be in touch with you as soon as possible.
            </p>

            <div className="mt-8 w-full laptop:w-[96%]">
              <ContactForm />
            </div>
          </div>

          <aside className="w-full tablet:flex tablet:justify-center laptop:flex laptop:w-[25%] laptop:items-center laptop:justify-center [@media(min-width:1600px)_and_(min-height:900px)]:items-start">
            <div className="mt-6 w-full tablet:mt-0 tablet:w-[58%] laptop:w-full laptop:max-w-[360px] [@media(min-width:1600px)_and_(min-height:900px)]:my-[63px] [@media(min-width:1600px)_and_(min-height:900px)]:max-w-[420px] rounded-tl-[30px] rounded-br-[30px] border border-[#ff5b0299] px-8 py-8 tablet:px-7 tablet:py-7 laptop:px-8 laptop:py-8 [@media(min-width:1600px)_and_(min-height:900px)]:px-16 [@media(min-width:1600px)_and_(min-height:900px)]:py-8 shadow-[0px_3px_30px_#ff5b0233]">
              <div className="mb-6 flex items-center gap-4">
                <Image
                  src="/assets/contactus/Layer 2.svg"
                  alt="Support icon"
                  width={48}
                  height={46}
                  style={{ width: "47.64px", height: "46px" }}
                  className="max-w-none tablet:hidden"
                />
                <Image src="/assets/contactus/Layer 2.svg" alt="Support icon" width={50} height={46} className="hidden h-auto w-auto tablet:block" />
                <p className="pt-2 max-w-[120px] text-[22px] leading-[1.15] font-sans text-[#000000] whitespace-normal tablet:pt-0 tablet:max-w-none tablet:font-display tablet:text-brand-black tablet:whitespace-nowrap tablet:text-2xl">Technical support</p>
              </div>

              <div className="mb-7">
                <p className="text-[16px] font-body-medium tablet:font-display tablet:text-xl">Contact No.</p>
                <p className="text-base font-body-light text-[#000000] tablet:font-sans tablet:text-brand-black tablet:text-lg">+1 847-957-6900</p>
              </div>

              <div>
                <p className="text-[16px] font-body-medium tablet:font-display tablet:text-xl">Email ID</p>
                <p className="text-base font-body-light text-[#000000] tablet:font-sans tablet:text-brand-black tablet:text-lg">support@niurix.com</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="mt-15 mb-8  px-9 tablet:mt-0 tablet:mb-8 tablet:px-20 laptop:px-[120px]">
        <div className="overflow-hidden rounded-tl-[20px] rounded-br-[20px]">
          <Image src="/assets/contactus/all product.webp" alt="All products" width={1400} height={500} className="hidden h-auto w-full tablet:block" />
          <Image src="/assets/contactus/all product mobile.webp" alt="All products" width={900} height={560} className="h-auto w-full tablet:hidden" />
        </div>
      </section>
    </div>
  );
}
