import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/contact-us/ContactForm";
import { toMetadata } from "@/data/site/seo";

const seo = {
  title: "Contact Us | Niurix",
  description: "Want to know more about our products? Get in touch with Niurix.",
  canonicalPath: "/contact-us",
};

export const metadata: Metadata = toMetadata(seo);

export default function ContactUsPage() {
  return (
    <div>
      <section className="relative">
        <div className="relative h-[320px] tablet:h-[520px] laptop:h-[760px]">
          <Image src="/assets/contactus/banner.webp" alt="Contact banner" fill className="hidden object-cover tablet:block" priority />
          <Image src="/assets/contactus/Contact banner mobile.webp" alt="Contact banner" fill className="object-cover tablet:hidden" priority />
        </div>

        <p className="absolute left-9 top-0 flex h-full w-[85%] items-center text-[30px] leading-tight font-display text-white tablet:left-[80px] tablet:w-[70%] tablet:text-5xl laptop:left-[120px] laptop:w-[47%] laptop:text-6xl">
          Want to know more about our product? Have any query? Or just simply want to say hello! We would love to hear from you.
        </p>
      </section>

      <section className="relative mb-16">
        <div className="absolute inset-0 hidden tablet:block">
          <Image src="/assets/contactus/Contact backgr.webp" alt="Contact background" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 tablet:hidden">
          <Image src="/assets/contactus/Contact back g mobile.webp" alt="Contact background" fill className="object-cover" />
        </div>

        <div className="relative px-9 pb-36 pt-12 tablet:px-20 tablet:pb-28 tablet:pt-14 laptop:px-[120px] laptop:pb-20 laptop:pt-[90px]">
          <h1 className="text-[34px] font-display text-brand-black tablet:text-5xl laptop:text-[56px]">
            <span className="text-brand-orange">Contact</span> Us
          </h1>

          <p className="mt-4 w-full text-base text-brand-black tablet:w-[90%] tablet:text-lg laptop:w-[43%] laptop:text-[22px]">
            Niurix is headquartered at the beautiful city of Illinois, USA. To contact us, use any of the below means and we will always be available to assist you.
          </p>

          <div className="mt-8 grid gap-6 tablet:grid-cols-2 laptop:w-[41%] laptop:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-xl font-display tablet:text-2xl">Address</p>
              <p className="mt-1 whitespace-pre-line text-base text-brand-black tablet:text-lg">{"2130 Foster Ave\nWheeling IL, 60090\nUSA"}</p>
            </div>

            <div>
              <div className="mb-4">
                <p className="text-xl font-display tablet:text-2xl">Contact No.</p>
                <p className="text-base text-brand-black tablet:text-lg">+1 847-957-6900</p>
              </div>
              <div>
                <p className="text-xl font-display tablet:text-2xl">Email ID</p>
                <p className="text-base text-brand-black tablet:text-lg">salesinfo@niurix.com</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[-4rem] left-1/2 h-[12rem] w-[16rem] -translate-x-1/2 tablet:bottom-[-4.5rem] tablet:h-[14rem] tablet:w-[19rem] laptop:bottom-auto laptop:left-auto laptop:right-[8%] laptop:top-[57%] laptop:h-auto laptop:w-auto laptop:translate-x-0">
            <Image src="/assets/contactus/Product.webp" alt="Product" width={430} height={360} className="h-full w-full object-contain" />
          </div>
        </div>
      </section>

      <section className="px-9 pb-8 tablet:px-20 tablet:pb-12 laptop:px-[120px] laptop:pb-16">
        <div className="flex flex-col gap-8 laptop:flex-row laptop:justify-between">
          <div className="w-full border-b border-[#d6d6d6] pb-8 laptop:w-[70%] laptop:border-b-0 laptop:border-r laptop:pb-0 laptop:pr-8">
            <h2 className="text-[34px] font-display text-brand-black tablet:text-5xl laptop:text-[56px]">
              <span className="text-brand-orange">Get in</span> Touch
            </h2>
            <p className="mt-4 w-full text-base text-brand-black tablet:w-[85%] tablet:text-lg laptop:text-[22px]">
              Let&apos;s connect. Your feedback, questions, and ideas matter to us and we are there to provide answers and support. Enter your details in the form below and we will be in touch with you as soon as possible.
            </p>

            <div className="mt-8 w-full laptop:w-[90%]">
              <ContactForm />
            </div>
          </div>

          <aside className="w-full laptop:flex laptop:w-[25%] laptop:items-center">
            <div className="w-full rounded-tl-[30px] rounded-br-[30px] border border-[#ff5b0299] px-8 py-8 shadow-[0px_3px_30px_#ff5b0233]">
              <div className="mb-6 flex items-center gap-4">
                <Image src="/assets/contactus/Layer 2.svg" alt="Support icon" width={50} height={46} />
                <p className="text-2xl font-display tablet:text-3xl">Technical support</p>
              </div>

              <div className="mb-4">
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
