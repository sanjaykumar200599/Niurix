"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { Dispatch, SetStateAction } from "react";
import type { HeaderNavigationItem } from "@/data/site/content";
import type { HeaderMenuKey } from "@/components/header/NavDropdown";

type MobileMenuProps = {
  mobileOpen: boolean;
  mobileSection: HeaderMenuKey | null;
  setMobileSection: Dispatch<SetStateAction<HeaderMenuKey | null>>;
  mobileLinks: Record<HeaderMenuKey, HeaderNavigationItem[]>;
  onNavigate: () => void;
};

export default function MobileMenu({ mobileOpen, mobileSection, setMobileSection, mobileLinks, onNavigate }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {mobileOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 bg-white pt-20 laptop:hidden"
        >
          <div className="h-full overflow-auto px-9 pb-12">
            {(["solutions", "products", "industries"] as HeaderMenuKey[]).map((section) => {
              const open = mobileSection === section;
              return (
                <div key={section} className="border-b border-black/10 py-2">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3"
                    onClick={() => setMobileSection((prev) => (prev === section ? null : section))}
                  >
                    <span className="text-2xl font-display text-brand-black capitalize">{section}</span>
                    <span className={`text-3xl text-brand-orange transition ${open ? "rotate-45" : ""}`}>+</span>
                  </button>

                  <AnimatePresence>
                    {open ? (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden bg-[#FF8948]"
                      >
                        {mobileLinks[section].map((item) => (
                          <Link key={item.href} href={item.href} onClick={onNavigate} className="block px-4 py-3 text-lg text-white">
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}

            <Link href="/software" onClick={onNavigate} className="block border-b border-black/10 py-5 text-2xl font-display text-brand-black">
              Software
            </Link>

            <div className="mt-8 flex justify-center">
              <Link
                href="/contact-us"
                onClick={onNavigate}
                className="rounded-[10px_0px] border-2 border-brand-orange bg-brand-orange px-6 py-2 text-xl font-display text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}