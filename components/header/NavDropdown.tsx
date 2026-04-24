"use client";

import Image from "next/image";
import Link from "next/link";
import type { HeaderNavigationItem } from "@/data/site/content";

export type HeaderMenuKey = "solutions" | "products" | "industries";

type NavDropdownProps = {
  activeDesktopMenu: HeaderMenuKey | null;
  desktopItems: HeaderNavigationItem[];
  notchLeft: number | null;
  onNavigate: () => void;
  scrolled: boolean;
};

export default function NavDropdown({ activeDesktopMenu, desktopItems, notchLeft, onNavigate, scrolled }: NavDropdownProps) {
  if (!activeDesktopMenu || desktopItems.length === 0) {
    return null;
  }

  const productImageSizes = [
    { width: 124, height: 102 },
    { width: 141, height: 124 },
    { width: 130, height: 63 },
    { width: 141, height: 88 },
  ] as const;

  return (
    <div className="absolute left-0 right-0 top-full z-40 mt-3">
      {notchLeft ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-2 z-10 h-4 w-4 -translate-x-1/2 rotate-45 bg-white"
          style={{ left: `${notchLeft}px` }}
        />
      ) : null}

      <div
        className={`bg-white px-6 py-4 shadow-[0px_3px_15px_#00000029] ${
          scrolled ? "mx-[clamp(56px,7vw,120px)] rounded-tl-[10px] rounded-br-[10px]" : "rounded-tl-[10px] rounded-br-[10px]"
        }`}
      >
        {activeDesktopMenu === "products" ? (
          <div className="grid h-[13rem] grid-cols-[repeat(4,275px)] justify-center gap-4 px-2 py-2 [@media(min-width:1025px)_and_(max-width:1280px)]:grid-cols-[repeat(4,230px)] [@media(min-width:1440px)]:grid-cols-[repeat(4,300px)] [@media(min-width:1700px)]:grid-cols-[repeat(4,330px)]">
            {desktopItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onNavigate}
                className="flex items-center justify-center gap-5 rounded-[10px_0px] bg-[#fbfbfb] px-6 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.02)] transition hover:bg-[#f8f8f8]"
              >
                <div
                  className="relative shrink-0 transition duration-300 hover:-translate-y-1"
                  style={{
                    width: `${productImageSizes[index]?.width ?? 124}px`,
                    height: `${productImageSizes[index]?.height ?? 102}px`,
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    sizes={`${productImageSizes[index]?.width ?? 124}px`}
                    className="object-contain"
                  />
                </div>

                <div
                  className={`flex flex-col leading-[1.08] ${
                    item.href === "/products/OLT-XGSPON-8P" ? "max-w-[132px]" : ""
                  }`}
                >
                  <span className="text-[15px] font-sans text-brand-orange">{item.type}</span>
                  <span className="mt-1 break-words text-[20px] font-sans text-brand-black">{item.label}</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div
            className={`grid py-2 ${
              activeDesktopMenu === "solutions"
                ? "h-[14rem] grid-cols-4 gap-7 px-4 [@media(min-width:1025px)_and_(max-width:1280px)]:gap-6 [@media(min-width:1025px)_and_(max-width:1280px)]:px-3"
                : "h-[14rem] grid-cols-3 gap-7 px-4 [@media(min-width:1025px)_and_(max-width:1280px)]:gap-6"
            }`}
          >
            {desktopItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onNavigate}
                className="group relative overflow-hidden rounded-[10px_0px]"
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  sizes="(min-width: 1024px) 20vw, 0px"
                  className="h-full w-full object-contain scale-x-[1.28] transition duration-500 group-hover:scale-y-[1.08]"
                />
                <span className="absolute inset-0 transition-colors duration-300 group-hover" />
                <span className="relative z-10 flex h-full items-center justify-center px-6 text-center text-[20px] leading-[1.2] text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.3)]">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
