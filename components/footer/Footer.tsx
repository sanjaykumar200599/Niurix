import Image from "next/image";
import Link from "next/link";
import ScrollToTop from "@/components/shared/ScrollToTop";

const sections = [
  {
    title: "Solutions",
    links: [
      ["Optimized Fiber Optic Solution", "/solutions/optimized-fiber-optic-solution"],
      ["Fiber's Edge Over Copper", "/solutions/fibers-edge-over-copper"],
      ["Scalable and Future Ready Design", "/solutions/scalable-and-future-ready-design"],
      ["Configurations and Personalized Support", "/solutions/configurations-and-personalized-support"],
    ],
  },
  {
    title: "Products",
    links: [
      ["P4200R", "/products/ONT-P4200R"],
      ["T2001", "/products/ONT-T2001"],
      ["SOLT33-08P", "/products/OLT-SOLT33-8P"],
      ["MOLT-XGSPON 8P", "/products/OLT-XGSPON-8P"],
    ],
  },
  {
    title: "Software",
    links: [
      ["Centralized Login and Access control", "/software"],
      ["Streamlined ONT and OLT", "/software"],
      ["Real-time ONT Monitoring", "/software"],
      ["Network Topology Visualization", "/software"],
      ["Remote Monitoring and Management", "/software"],
    ],
  },
  {
    title: "Industries",
    links: [
      ["Hospitality", "/industries/hospitality"],
      ["Corporate Workspaces", "/industries/corporate-workspaces"],
      ["Student Living", "/industries/student-living"],
    ],
  },
] as const;

export default function Footer() {
  return (
    <footer className="relative w-full pt-3 pb-8 laptop:pt-4 laptop:pb-10">
      <div className="px-9 pl-12 tablet:px-20 laptop:px-30">

        <div className="border-t-2 border-[#DFDFDF] pt-7 pb-12 laptop:flex laptop:items-start laptop:justify-between laptop:pt-7 laptop:pb-16">
          
          <div className="mb-3 shrink-0 tablet:mb-6 laptop:mb-0 laptop:pt-[2px] laptop:w-[140px] laptop:mr-18 tablet:pl-3 laptop:pl-0 [@media(min-width:1600px)]:w-[200px] [@media(min-width:1600px)]:mr-46 [@media(min-width:1080px)]:w-[180px] [@media(min-width:1080px)]:mr-24">
            <Link href="/" className="inline-flex">
              <Image
                src="/assets/footer/niurixlogo.svg"
                alt="Niurix"
                width={81}
                height={26}
                className="h-[26px] w-[81px] tablet:h-[26.43px] tablet:w-[80.54px] laptop:h-[25px] laptop:w-[80px]"
              />
            </Link>
          </div>

          <div className="grid gap-y-4 tablet:gap-y-2 tablet:pl-3 laptop:flex-1 laptop:pl-0 laptop:pb-0 tablet:pb-12 laptop:grid-cols-[1.22fr_0.7fr_1.05fr_0.72fr] laptop:gap-x-6 [@media(min-width:1600px)]:grid-cols-[1fr_0.7fr_1fr_0.7fr] [@media(min-width:1600px)]:pl-18">
            {sections.map((section) => (
              <div key={section.title} className="min-w-0">
                <p className="pt-4 mb-4 laptop:pt-4 tablet:pt-5 text-[16px] laptop:text-[20px] leading-none font-sans font-semibold text-black tablet:mb-6 tablet:text-[18px] tablet:font-semibold laptop:font-medium">
                  {section.title}
                </p>

                <ul className="space-y-[10px]">
                  {section.links.map(([label, href]) => {
                    const isSoftwareFirst =
                      section.title === "Software" &&
                      label === "Centralized Login and Access control";

                    return (
                      <li key={label + href}>
                        <Link
                          href={href}
                          className={`block text-[14px] leading-[1.28] font-sans text-black transition hover:text-brand-orange tablet:text-[16px] ${
                            isSoftwareFirst ? "laptop:whitespace-nowrap" : ""
                          }`}
                        >
                          {label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-[#707070] pt-6 pb-2 laptop:grid laptop:grid-cols-[1fr_auto_1fr] laptop:items-center laptop:pt-6 laptop:pb-3">
          
          <div className="mb-4 text-center text-[14px]
          laptop:text-[16px] tablet:text-[16px] leading-none font-sans text-black laptop:mb-0 laptop:text-left">
            &copy; 2026 All rights reserved
          </div>

          <div className="mb-4 flex flex-nowrap items-center justify-center gap-10 whitespace-nowrap text-[14px]  laptop:text-[16px] tablet:text-[16px] leading-none font-sans text-black laptop:mb-0 tablet:p-5 tablet:gap-45 laptop:p-0 laptop:gap-14 [@media(min-width:1400px)]:gap-30   [@media(min-width:1400px)]:ml-32">
            <Link href="/terms-and-conditions" className="transition hover:text-brand-orange">
              Terms & Conditions
            </Link>
            <Link href="/privacy-policy" className="transition hover:text-brand-orange">
              Privacy Policy
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 text-[14px]  laptop:text-[16px] tablet:text-[16px] leading-none font-sans text-black tablet:flex-col tablet:gap-8 laptop:gap-2.5 laptop:flex-row laptop:justify-end [@media(min-width:1400px)]:mr-8 [@media(min-width:1400px)]:gap-5">
            <span>Find us on</span>
            <a
              href="https://www.linkedin.com/company/niurix/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-6 w-6 items-center justify-center"
            >
              <Image
                src="/assets/footer/linkedin.svg"
                alt="LinkedIn"
                width={20}
                height={20}
                className="h-[20px] w-[20px] object-contain"
              />
            </a>
          </div>
        </div>
      </div>

      <ScrollToTop />
    </footer>
  );
}
