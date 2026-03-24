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
};

export default function NavDropdown({ activeDesktopMenu, desktopItems, notchLeft, onNavigate }: NavDropdownProps) {
  if (!activeDesktopMenu || desktopItems.length === 0) {
    return null;
  }

  return (
    <div className="absolute left-0 right-0 top-full z-40 mt-5 rounded-tl-[10px] rounded-br-[10px] bg-white px-8 py-6 shadow-[0px_3px_15px_#00000029]">
      {notchLeft ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-2 z-10 h-4 w-4 -translate-x-1/2 rotate-45 bg-white"
          style={{ left: `${notchLeft}px` }}
        />
      ) : null}

      {activeDesktopMenu === "products" ? (
        <div className="grid h-[17rem] grid-cols-4 gap-7 px-6 py-3">
          {desktopItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className="flex items-center justify-center gap-6 rounded-[10px_0px] bg-[#fbfbfb] px-8 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.02)] transition hover:bg-[#f8f8f8]"
            >
              <div className="relative h-24 w-28 shrink-0 transition duration-300 hover:-translate-y-1">
                <Image src={item.image} alt={item.label} fill className="object-contain" />
              </div>
              <div className="flex flex-col leading-[1.1]">
                <span className="text-[18px] font-sans text-brand-orange">{item.type}</span>
                <span className="mt-1 text-[24px] font-sans text-brand-black">{item.label}</span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className={`grid h-[17rem] gap-7 px-6 py-3 ${activeDesktopMenu === "industries" ? "grid-cols-3" : "grid-cols-4"}`}>
          {desktopItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={onNavigate} className="group relative overflow-hidden rounded-[10px_0px]">
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="h-full w-full object-cover brightness-100 transition duration-500 group-hover:scale-[1.03]"
              />
              <span className="absolute inset-0 bg-black/24 transition-colors duration-300 group-hover:bg-black/18" />
              <span className="relative z-10 flex h-full items-center justify-center px-8 text-center text-[24px] leading-[1.22] text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.3)]">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
