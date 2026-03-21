"use client";

import Image from "next/image";

export default function ScrollToTop() {
  return (
    <button
      type="button"
      aria-label="Scroll to top"
      className="fixed bottom-[5%] right-[4%] z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0px_8px_15px_#00000029] transition hover:scale-105 tablet:bottom-[6%] tablet:right-[2.8%] tablet:h-14 tablet:w-14 laptop:bottom-[8%] laptop:right-[1.7%] laptop:h-16 laptop:w-16"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <Image src="/assets/footer/scrolltotop.svg" alt="Scroll to top" width={24} height={24} className="laptop:h-[26px] laptop:w-[26px]" />
    </button>
  );
}
