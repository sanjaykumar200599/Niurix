"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

function isActiveGroup(pathname: string, key: DesktopTab["key"]) {
  if (key === "software") return pathname.startsWith("/software") || pathname.startsWith("/gpon-software");
  if (key === "solutions") return pathname.startsWith("/solutions") || pathname.startsWith("/solution");
  if (key === "products") return pathname.startsWith("/products") || pathname.startsWith("/product");
  return pathname.startsWith("/industries");
}

export default function Header() {
  const pathname = usePathname();
  const shellRef = useRef<HTMLDivElement | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeDesktopMenu, setActiveDesktopMenu] = useState<HeaderMenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<HeaderMenuKey | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 850);
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
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveDesktopMenu(null);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activeDesktopMenu]);

  const closeMenus = () => {
    setMobileOpen(false);
    setMobileSection(null);
    setActiveDesktopMenu(null);
  };

  const desktopItems = useMemo<HeaderNavigationItem[]>(() => {
    if (!activeDesktopMenu) return [];
    return headerNavigation[activeDesktopMenu];
  }, [activeDesktopMenu]);

  const toggleDesktopMenu = (menuKey: HeaderMenuKey) => {
    setActiveDesktopMenu((prev) => (prev === menuKey ? null : menuKey));
  };

  return (
    <header className="relative z-50">
      <div
        ref={shellRef}
        className={`fixed z-50 hidden transition-all duration-500 laptop:block ${
          scrolled
            ? "left-0 right-0 top-0 border-b border-black/10 bg-white shadow-[0px_3px_15px_#00000029]"
            : "left-[120px] right-[120px] top-[7%] rounded-tl-[10px] rounded-br-[10px] bg-white shadow-[0px_3px_15px_#00000029]"
        }`}
      >
        <div className={`flex items-center justify-between ${scrolled ? "px-[120px] py-6" : "px-[3.35%] py-6"}`}>
          <Link href="/" className="shrink-0" onClick={closeMenus}>
            <Image src="/assets/header/niurixlogo.svg" alt="Niurix" width={81} height={27} priority />
          </Link>

          <nav className="flex items-center gap-0">
            {desktopTabs.map((tab) => {
              const active = isActiveGroup(pathname, tab.key);
              const open = tab.menuKey ? activeDesktopMenu === tab.menuKey : false;

              return (
                <div key={tab.key} className="relative flex w-32 items-center justify-center">
                  {tab.menuKey ? (
                    <button
                      type="button"
                      className={`text-[20px] font-sans transition ${active || open ? "text-brand-orange" : "text-brand-black hover:text-brand-orange"}`}
                      onClick={() => toggleDesktopMenu(tab.menuKey!)}
                    >
                      {tab.label}
                    </button>
                  ) : (
                    <Link
                      href={tab.href}
                      className={`text-[20px] font-sans transition ${active ? "text-brand-orange" : "text-brand-black hover:text-brand-orange"}`}
                      onClick={closeMenus}
                    >
                      {tab.label}
                    </Link>
                  )}

                  {open ? (
                    <Image
                      src="/assets/header/Divarrow.svg"
                      alt=""
                      width={33}
                      height={11}
                      className="pointer-events-none absolute bottom-[-28px] left-1/2 z-10 -translate-x-1/2"
                    />
                  ) : null}
                </div>
              );
            })}

            <Link
              href="/contact-us"
              className="min-w-[180px] rounded-[10px_0px] border-2 border-brand-orange bg-brand-orange px-[23px] py-[9px] text-center text-[20px] font-sans text-white transition hover:bg-white hover:text-black"
              onClick={closeMenus}
            >
              Contact Us
            </Link>
          </nav>
        </div>

        <NavDropdown activeDesktopMenu={activeDesktopMenu} desktopItems={desktopItems} onNavigate={closeMenus} />
      </div>

      <div className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-white px-9 py-4 shadow-[0px_3px_15px_#00000029] laptop:hidden">
        <div className="flex items-center justify-between">
          <Link href="/" className="shrink-0" onClick={closeMenus}>
            <Image src="/assets/header/niurixlogo.svg" alt="Niurix" width={81} height={27} priority />
          </Link>
          <Hamburger toggled={mobileOpen} toggle={setMobileOpen} size={24} color="#FF5B02" />
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

