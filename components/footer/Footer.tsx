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
    <footer className="relative w-full">
      <div className="px-9 tablet:px-20 laptop:px-30">
        <div className="border-t-2 border-[#DFDFDF] px-0 py-8 laptop:flex laptop:justify-between laptop:py-8">
          <div className="mb-6 laptop:mb-0 laptop:pt-1">
            <Link href="/" className="inline-flex">
              <Image src="/assets/footer/niurixlogo.svg" alt="Niurix" width={81} height={27} />
            </Link>
          </div>

          <div className="grid gap-6 tablet:grid-cols-2 laptop:w-[88%] laptop:grid-cols-4 laptop:gap-8">
            {sections.map((section) => (
              <div key={section.title}>
                <p className="mb-2 text-[20px] font-sans text-black">{section.title}</p>
                <ul className="space-y-1">
                  {section.links.map(([label, href]) => (
                    <li key={label + href}>
                      <Link href={href} className="text-[16px] font-sans text-black transition hover:text-brand-orange">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-[#707070] py-5 text-center tablet:py-6 laptop:grid laptop:grid-cols-[45%_35%_20%] laptop:items-center laptop:text-left">
          <div className="mb-4 text-[16px] font-sans text-black laptop:mb-0">&copy; 2026 All rights reserved</div>

          <div className="mb-4 flex items-center justify-center gap-10 text-[16px] font-sans text-black laptop:mb-0 laptop:justify-center">
            <Link href="/terms-and-conditions" className="transition hover:text-brand-orange">
              Terms & Conditions
            </Link>
            <Link href="/privacy-policy" className="transition hover:text-brand-orange">
              Privacy Policy
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2.5 text-[16px] leading-none font-sans text-black laptop:justify-end laptop:pr-1">
            <span className="inline-flex items-center leading-none">Find us on</span>
            <a
              href="https://www.linkedin.com/company/niurix/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-6 w-6 items-center justify-center"
            >
              <Image src="/assets/footer/linkedin.svg" alt="LinkedIn" width={20} height={20} className="h-[20px] w-[20px] object-contain" />
            </a>
          </div>
        </div>
      </div>

      <ScrollToTop />
    </footer>
  );
}

