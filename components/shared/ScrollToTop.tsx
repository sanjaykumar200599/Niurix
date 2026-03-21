"use client";

import Image from "next/image";

export default function ScrollToTop() {
  return (
    <button
      type="button"
      aria-label="Scroll to top"
      className="fixed bottom-[8%] right-[1.7%] z-40 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0px_8px_15px_#00000029] transition hover:scale-105"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <Image src="/assets/footer/scrolltotop.svg" alt="Scroll to top" width={26} height={26} />
    </button>
  );
}
