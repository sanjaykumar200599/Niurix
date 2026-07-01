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
          <div className="h-full overflow-auto px-9 pb-8 tablet:pl-[76px] tablet:pr-9">
            {(["solutions", "products"] as HeaderMenuKey[]).map((section) => {
              const open = mobileSection === section;
              return (
                <div key={section} className="py-1">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3"
                    onClick={() => setMobileSection((prev) => (prev === section ? null : section))}
                  >
                    <span className="text-[26px]  font-sans text-brand-black capitalize tablet:text-[28px]">{section}</span>
                    <span className={`text-[30px] text-brand-orange transition tablet:mr-12 ${open ? "rotate-45" : ""}`}>+</span>
                  </button>

                  <AnimatePresence>
                    {open ? (
                     <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: {
                            height: { duration: 0.05 },
                            opacity: { duration: 0.05 },
                          },
                        }}
                        transition={{
                          height: {
                            duration: 0.9,
                            ease: "easeInOut",
                          },
                          opacity: {
                            duration: 0.2,
                          },
                        }}
                        className="-mx-9 overflow-hidden bg-[#FF8948] tablet:ml-[-76px] tablet:mr-[-2.25rem]"
                      >
                        {mobileLinks[section].map((item) => (
                          <Link key={item.href} href={item.href} onClick={onNavigate} className="block px-9 py-3 text-[20px] !text-white tablet:pl-[76px] tablet:pr-9 tablet:text-[22px]">
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}

            <Link href="/software" onClick={onNavigate} className="block py-3 text-[26px] font-sans text-brand-black tablet:text-[28px]">
              Software
            </Link>

            <div className="py-1">
              <button
                type="button"
                className="flex w-full items-center justify-between py-3"
                onClick={() => setMobileSection((prev) => (prev === "industries" ? null : "industries"))}
              >
                <span className="text-[26px] font-sans text-brand-black capitalize tablet:text-[28px]">industries</span>
                <span className={`text-3xl text-brand-orange transition tablet:mr-12 ${mobileSection === "industries" ? "rotate-45" : ""}`}>+</span>
              </button>

              <AnimatePresence>
                {mobileSection === "industries" ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.05 },
                        opacity: { duration: 0.05 },
                      },
                    }}
                    transition={{
                      height: {
                        duration: 0.9,
                        ease: "easeInOut",
                      },
                      opacity: {
                        duration: 0.2,
                      },
                    }}
                    className="-mx-9 overflow-hidden bg-[#FF8948] tablet:ml-[-76px] tablet:mr-[-2.25rem]"
                  >
                    {mobileLinks.industries.map((item) => (
                      <Link key={item.href} href={item.href} onClick={onNavigate} className="block px-9 py-3 text-lg !text-white tablet:pl-[76px] tablet:pr-9 tablet:text-[22px]">
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            <div className="mt-3 flex justify-center">
              <Link
                href="/contact-us"
                onClick={onNavigate}
                className="rounded-[10px_0px] border-2 border-brand-orange bg-brand-orange px-6 py-2 text-[20px] font-sans !text-white"
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
