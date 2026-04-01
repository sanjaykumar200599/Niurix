"use client";

import Image from "next/image";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { headerNavigation, type HeaderNavigationItem } from "@/data/site/content";
import MobileMenu from "@/components/header/MobileMenu";
import NavDropdown, { type HeaderMenuKey } from "@/components/header/NavDropdown";

type DesktopTab = {
  key: HeaderMenuKey | "software";
  label: string;
  href: string;
  menuKey?: HeaderMenuKey;
};

const desktopTabs: DesktopTab[] = [
  { key: "solutions", label: "Solutions", href: "/solutions", menuKey: "solutions" },
  { key: "products", label: "Products", href: "/products", menuKey: "products" },
  { key: "software", label: "Software", href: "/software" },
  { key: "industries", label: "Industries", href: "/industries", menuKey: "industries" },
];

const mobileLinks = {
  solutions: headerNavigation.solutions,
  products: headerNavigation.products,
  industries: headerNavigation.industries,
};

export default function Header() {
  const shellRef = useRef<HTMLDivElement | null>(null);
  const desktopTriggerRefs = useRef<Partial<Record<HeaderMenuKey, HTMLButtonElement | null>>>({});
  const [scrolled, setScrolled] = useState(false);
  const [activeDesktopMenu, setActiveDesktopMenu] = useState<HeaderMenuKey | null>(null);
  const [dropdownNotchLeft, setDropdownNotchLeft] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<HeaderMenuKey | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!activeDesktopMenu) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (shellRef.current && !shellRef.current.contains(target)) {
        setActiveDesktopMenu(null);
        setDropdownNotchLeft(null);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDesktopMenu(null);
        setDropdownNotchLeft(null);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activeDesktopMenu]);

  useEffect(() => {
    if (!activeDesktopMenu) return;

    const updateNotchPosition = () => {
      const shell = shellRef.current;
      const trigger = desktopTriggerRefs.current[activeDesktopMenu];
      if (!shell || !trigger) return;

      const shellBounds = shell.getBoundingClientRect();
      const triggerBounds = trigger.getBoundingClientRect();
      setDropdownNotchLeft(triggerBounds.left + triggerBounds.width / 2 - shellBounds.left);
    };

    updateNotchPosition();
    window.addEventListener("resize", updateNotchPosition);
    window.addEventListener("scroll", updateNotchPosition, { passive: true });

    return () => {
      window.removeEventListener("resize", updateNotchPosition);
      window.removeEventListener("scroll", updateNotchPosition);
    };
  }, [activeDesktopMenu, scrolled]);

  const closeMenus = () => {
    setMobileOpen(false);
    setMobileSection(null);
    setActiveDesktopMenu(null);
    setDropdownNotchLeft(null);
  };

  const desktopItems = useMemo<HeaderNavigationItem[]>(() => {
    if (!activeDesktopMenu) return [];
    return headerNavigation[activeDesktopMenu];
  }, [activeDesktopMenu]);

  const toggleDesktopMenu = (menuKey: HeaderMenuKey) => {
    setActiveDesktopMenu((prev) => {
      const nextValue = prev === menuKey ? null : menuKey;
      if (!nextValue) {
        setDropdownNotchLeft(null);
      }
      return nextValue;
    });
  };

  return (
    <header className="relative z-50">
      <div
        ref={shellRef}
        className={`fixed z-50 hidden transition-all duration-500 laptop:block ${
          scrolled
            ? "left-0 right-0 top-0 border-b border-black/10 bg-white shadow-[0px_3px_15px_#00000029]"
            : "left-[clamp(56px,7vw,120px)] right-[clamp(56px,7vw,120px)] top-[7%] rounded-tl-[10px] rounded-br-[10px] bg-white shadow-[0px_3px_15px_#00000029]"
        }`}
      >
        <div className={`flex items-center justify-between ${scrolled ? "px-[clamp(40px,8vw,120px)] py-6" : "px-[3.35%] py-6"}`}>
          <Link href="/" className="shrink-0" onClick={closeMenus}>
            <Image src="/assets/header/niurixlogo.svg" alt="Niurix" width={81} height={27} />
          </Link>

          <nav className="ml-8 flex flex-1 items-baseline justify-end pr-10 [@media(min-width:1025px)_and_(max-width:1280px)]:pr-6">
            {desktopTabs.map((tab) => {
              const open = tab.menuKey ? activeDesktopMenu === tab.menuKey : false;

              return (
                <div key={tab.key} className="relative flex items-center justify-center px-4 [@media(min-width:1025px)_and_(max-width:1280px)]:px-2">
                  {tab.menuKey ? (
                    <button
                      type="button"
                      ref={(node) => {
                        desktopTriggerRefs.current[tab.menuKey!] = node;
                      }}
                      className={`whitespace-nowrap text-[clamp(18px,1.25vw,22px)] font-sans transition ${open ? "text-brand-orange" : "text-brand-black hover:text-brand-orange"}`}
                      onClick={() => toggleDesktopMenu(tab.menuKey!)}
                    >
                      {tab.label}
                    </button>
                  ) : (
                    <Link
                      href={tab.href}
                      className="whitespace-nowrap text-[clamp(18px,1.25vw,22px)] font-sans !text-brand-black transition hover:!text-brand-orange"
                      onClick={closeMenus}
                    >
                      {tab.label}
                    </Link>
                  )}
                </div>
              );
            })}

            <Link
              href="/contact-us"
              className="ml-3 min-w-[160px] rounded-[10px_0px] border-2 border-brand-orange bg-brand-orange px-5 py-2.5 text-center text-[clamp(19px,1.25vw,22px)] font-sans !text-white visited:!text-white transition hover:bg-white hover:!text-brand-black [@media(min-width:1025px)_and_(max-width:1280px)]:min-w-[146px] [@media(min-width:1025px)_and_(max-width:1280px)]:px-4"
              onClick={closeMenus}
            >
              Contact Us
            </Link>
          </nav>
        </div>

        <NavDropdown
          activeDesktopMenu={activeDesktopMenu}
          desktopItems={desktopItems}
          notchLeft={dropdownNotchLeft}
          scrolled={scrolled}
          onNavigate={closeMenus}
        />
      </div>

      <div className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-white px-5 py-4 shadow-[0px_3px_15px_#00000029] tablet:px-9 laptop:hidden">
        <div className="flex items-center justify-between">
          <Link href="/" className="shrink-0" onClick={closeMenus}>
            <Image src="/assets/header/niurixlogo.svg" alt="Niurix" width={81} height={27} />
          </Link>
          <Hamburger toggled={mobileOpen} toggle={setMobileOpen} size={22} color="#FF5B02" />
        </div>
      </div>

      <MobileMenu
        mobileOpen={mobileOpen}
        mobileSection={mobileSection}
        setMobileSection={setMobileSection}
        mobileLinks={mobileLinks}
        onNavigate={closeMenus}
      />
    </header>
  );
}









