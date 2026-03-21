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
      ["G2410", "/products/ONT-G2410"],
      ["SOLT33-8P", "/products/OLT-SOLT33-8P"],
      ["SOLT33-16P", "/products/OLT-SOLT33-16P"],
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
      ["Residential Real Estate", "/industries/residential-real-estate"],
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

        <div className="flex flex-col border-t border-[#707070] py-5 text-center tablet:py-6 laptop:flex-row laptop:items-center laptop:text-left">
          <div className="mb-4 w-full text-[16px] font-sans text-black laptop:mb-0 laptop:w-[45%]">&copy; 2026 All rights reserved</div>

          <div className="flex w-full flex-col items-center gap-4 laptop:w-[55%] laptop:flex-row laptop:justify-between">
            <div className="flex items-center gap-10 text-[16px] font-sans text-black">
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
            </div>

            <div className="flex items-center gap-3 text-[16px] font-sans text-black">
              <span>Find us on</span>
              <a href="https://www.linkedin.com/company/niurix/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Image src="/assets/footer/linkedin.svg" alt="LinkedIn" width={22} height={21} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <ScrollToTop />
    </footer>
  );
}
