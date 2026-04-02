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
      ["SOLT33- 8P", "/products/OLT-SOLT33-8P"],
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
      <div className="px-9 tablet:px-20 laptop:px-30">

        {/* TOP SECTION */}
        <div className="border-t-2 border-[#DFDFDF] pt-7 pb-12 laptop:flex laptop:items-start laptop:justify-between laptop:gap-10 laptop:pt-7 laptop:pb-16">
          
          {/* LOGO */}
          <div className="mb-6 shrink-0 laptop:mb-0 laptop:w-[156px] laptop:pr-20 laptop:pt-[2px]">
            <Link href="/" className="inline-flex">
              <Image
                src="/assets/footer/niurixlogo.svg"
                alt="Niurix"
                width={124}
                height={41}
                className="h-[33px] w-[100px] tablet:h-[37px] tablet:w-[112px] laptop:h-[41px] laptop:w-[124px]"
              />
            </Link>
          </div>

          {/* LINKS */}
          <div className="grid gap-y-6 tablet:grid-cols-2 tablet:gap-x-10 laptop:flex-1 laptop:grid-cols-[1.22fr_0.7fr_1.05fr_0.72fr] laptop:gap-x-6">
            {sections.map((section) => (
              <div key={section.title} className="min-w-0">
                <p className="mb-3 text-[18px] leading-none font-display text-black tablet:mb-4 tablet:text-[20px]">
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
                          className={`block text-[15px] leading-[1.28] font-sans text-black transition hover:text-brand-orange tablet:text-[16px] ${
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

        {/* BOTTOM SECTION */}
        <div className="border-t border-[#707070] pt-6 pb-2 laptop:grid laptop:grid-cols-[1fr_auto_1fr] laptop:items-center laptop:pt-6 laptop:pb-3">
          
          <div className="mb-4 text-center text-[16px] leading-none font-sans text-black laptop:mb-0 laptop:text-left">
            &copy; 2026 All rights reserved
          </div>

          <div className="mb-4 flex items-center justify-center gap-10 text-[16px] leading-none font-sans text-black laptop:mb-0">
            <Link href="/terms-and-conditions" className="transition hover:text-brand-orange">
              Terms & Conditions
            </Link>
            <Link href="/privacy-policy" className="transition hover:text-brand-orange">
              Privacy Policy
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2.5 text-[16px] leading-none font-sans text-black laptop:justify-end">
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
