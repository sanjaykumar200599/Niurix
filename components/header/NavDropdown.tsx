"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { HeaderNavigationItem } from "@/data/site/content";

export type HeaderMenuKey = "solutions" | "products" | "industries";

type NavDropdownProps = {
  activeDesktopMenu: HeaderMenuKey | null;
  desktopItems: HeaderNavigationItem[];
  onNavigate: () => void;
};

export default function NavDropdown({ activeDesktopMenu, desktopItems, onNavigate }: NavDropdownProps) {
  return (
    <AnimatePresence>
      {activeDesktopMenu && desktopItems.length > 0 ? (
        <motion.div
          key={activeDesktopMenu}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.18 }}
          className="absolute left-0 right-0 top-full z-40 h-[14.688rem] rounded-tl-[10px] rounded-br-[10px] bg-white shadow-[0px_3px_15px_#00000029]"
        >
          <div className="flex h-full items-center px-[0.3rem] pl-16">
            {desktopItems.map((item) =>
              activeDesktopMenu === "products" ? (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onNavigate}
                  className="mr-8 flex h-[85%] w-[22.5%] items-center justify-center gap-8 rounded-[10px_0px] bg-[#FBFBFB]"
                >
                  <div className="relative h-20 w-24 transition duration-300 hover:-translate-y-2">
                    <Image src={item.image} alt={item.label} fill className="object-contain" />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-base font-sans text-brand-orange">{item.type}</span>
                    <span className="text-[20px] font-sans text-brand-black">{item.label}</span>
                  </div>
                </Link>
              ) : (
                <Link key={item.href} href={item.href} onClick={onNavigate} className="group relative mr-8 h-[12.5rem] w-0 grow overflow-hidden">
                  <div className="relative h-full w-full overflow-hidden rounded-[10px_0px]">
                    <Image src={item.image} alt={item.label} fill className="object-cover transition duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/35" />
                    <p className="absolute bottom-4 left-1/2 w-[90%] -translate-x-1/2 text-center text-[20px] font-sans text-white">{item.label}</p>
                  </div>
                </Link>
              ),
            )}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
