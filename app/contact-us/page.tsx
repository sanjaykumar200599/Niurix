import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/contact-us/ContactForm";
import { toMetadata } from "@/data/site/seo";

const seo = {
  title: "Contact Us | Niurix",
  description: "Want to know more about our products? Get in touch with Niurix.",
  canonicalPath: "/contact-us",
  previewImage: "/assets/contactus/banner.webp",
};

export const metadata: Metadata = toMetadata(seo);

export default function ContactUsPage() {
  return (
    <div>
      <section className="relative">
        <div className="relative h-[680px] tablet:h-[520px] laptop:h-[850px]">
          <Image src="/assets/contactus/banner.webp" alt="Contact banner" fill sizes="(max-width: 767px) 0px, 100vw" className="hidden object-cover tablet:block" priority />
          <Image src="/assets/contactus/Contact banner mobile.webp" alt="Contact banner" fill sizes="(max-width: 767px) 100vw, 0px" className="object-cover tablet:hidden" priority />
        </div>

        <p
          className="absolute left-9 right-9 top-1/2 -translate-y-1/2 font-sans text-[28px] font-normal leading-[1.35] text-white
          tablet:left-[80px] tablet:right-auto tablet:top-0 tablet:w-[70%] tablet:translate-y-0 tablet:font-display tablet:text-[36px] tablet:font-semibold tablet:leading-snug tablet:flex tablet:h-full tablet:items-center
          laptop:left-[120px] laptop:w-[47%] laptop:text-[44px]"
        >
          <span className="tablet:hidden">
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
          <span className="hidden tablet:inline">
            Want to know more about our product? Have any query? Or just simply want to say hello! We would love to hear from you.
          </span>
        </p>
      </section>

      <section className="relative mb-28 tablet:mb-16">
        <div className="absolute inset-0 hidden tablet:block">
          <Image src="/assets/contactus/Contact backgr.webp" alt="Contact background" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 tablet:hidden">
          <Image src="/assets/contactus/Contact back g mobile.webp" alt="Contact background" fill sizes="100vw" className="object-cover" />
        </div>

        <div className="relative px-9 pb-28 pt-12 tablet:px-20 tablet:pb-28 tablet:pt-14 laptop:px-[120px] laptop:pb-20 laptop:pt-[90px]">
          <h1 className="text-[30px] font-display text-brand-black tablet:text-[42px] laptop:text-[44px]">
            <span className="text-brand-orange">Contact</span> Us
          </h1>

          <p className="mt-4 w-full text-base font-normal leading-[1.55] text-brand-black/80 tablet:w-[90%] tablet:text-lg laptop:w-[43%] laptop:text-[20px]">
            Niurix is headquartered at the beautiful city of Illinois, USA. To contact us, use any of the below means and we will always be available to assist you.
          </p>

          <div className="mt-10 grid gap-y-8 tablet:grid-cols-2 tablet:gap-x-12 laptop:w-[42%] laptop:grid-cols-[1fr_1fr] laptop:gap-x-16">
            <div>
              <p className="text-xl font-display tablet:text-2xl">Address</p>
              <p className="mt-2 whitespace-pre-line text-base leading-[1.4] text-brand-black/90 tablet:text-lg"><><span className="tablet:hidden">{"2130 Foster Ave\nWheeling IL,\n60090 USA"}</span><span className="hidden whitespace-pre-line tablet:inline">{"2130\nFoster\nAve\nWheeling\nIL, 60090\nUSA"}</span></></p>
            </div>

            <div>
              <div className="mb-7">
                <p className="text-xl font-display tablet:text-2xl">Contact No.</p>
                <p className="text-base text-brand-black tablet:text-lg">+1 847-957-6900</p>
              </div>
              <div>
                <p className="text-xl font-display tablet:text-2xl">Email ID</p>
                <p className="text-base text-brand-black tablet:text-lg">salesinfo@niurix.com</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[-9rem] left-1/2 h-[13.5rem] w-[18rem] -translate-x-1/2 tablet:bottom-[-5rem] tablet:h-[17rem] tablet:w-[23rem] laptop:bottom-[-12rem] laptop:left-auto laptop:right-[2%] laptop:top-auto laptop:h-[28rem] laptop:w-[48rem] laptop:translate-x-0">
            <Image src="/assets/contactus/Product.webp" alt="Product" width={820} height={560} className="h-full w-full object-contain" />
          </div>
        </div>
      </section>

      <section className="px-9 pb-8 pt-2 tablet:px-20 tablet:pb-12 tablet:pt-4 laptop:px-[120px] laptop:pb-36 laptop:pt-20">
        <div className="flex flex-col gap-8 laptop:flex-row laptop:justify-between">
          <div className="w-full border-b border-[#d6d6d6] pb-8 laptop:w-[70%] laptop:border-b-0 laptop:border-r laptop:pb-0 laptop:pr-8">
            <h2 className="mt-4 text-[30px] font-display text-brand-black tablet:mt-5 tablet:text-[42px] laptop:mt-10 laptop:text-[44px]">
              <span className="text-brand-orange">Get in</span> Touch
            </h2>
            <p className="mt-4 w-full text-base font-normal leading-[1.6] text-brand-black/75 tablet:w-[85%] tablet:text-lg laptop:text-[20px]">
              Let&apos;s connect. Your feedback, questions, and ideas matter to us and we are there to provide answers and support. Enter your details in the form below and we will be in touch with you as soon as possible.
            </p>

            <div className="mt-8 w-full laptop:w-[96%]">
              <ContactForm />
            </div>
          </div>

          <aside className="w-full laptop:flex laptop:w-[25%] laptop:items-center">
            <div className="w-full rounded-tl-[30px] rounded-br-[30px] border border-[#ff5b0299] px-8 py-8 shadow-[0px_3px_30px_#ff5b0233]">
              <div className="mb-6 flex items-center gap-4">
                <Image src="/assets/contactus/Layer 2.svg" alt="Support icon" width={50} height={46} className="h-auto w-auto" />
                <p className="text-xl font-display whitespace-nowrap tablet:text-2xl">Technical support</p>
              </div>

              <div className="mb-7">
                <p className="text-lg font-display tablet:text-xl">Contact No.</p>
                <p className="text-base text-brand-black tablet:text-lg">+1 847-957-6900</p>
              </div>

              <div>
                <p className="text-lg font-display tablet:text-xl">Email ID</p>
                <p className="text-base text-brand-black tablet:text-lg">support@niurix.com</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="mb-8 px-9 tablet:px-20 laptop:px-[120px]">
        <div className="overflow-hidden rounded-tl-[20px] rounded-br-[20px]">
          <Image src="/assets/contactus/all product.webp" alt="All products" width={1400} height={500} className="hidden h-auto w-full tablet:block" />
          <Image src="/assets/contactus/all product mobile.webp" alt="All products" width={900} height={560} className="h-auto w-full tablet:hidden" />
        </div>
      </section>
    </div>
  );
}



