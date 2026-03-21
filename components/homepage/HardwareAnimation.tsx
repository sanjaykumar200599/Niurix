"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Stage = 1 | 2 | 3 | 4 | 5;

const scrollStages = [0, 200, 500, 700, 950] as const;

const layerImages = [
  "/assets/homepage/Box 5.svg",
  "/assets/homepage/Box 4.svg",
  "/assets/homepage/Box 3.svg",
  "/assets/homepage/Box 2.svg",
  "/assets/homepage/Box 1.svg",
] as const;

const zIndexes = ["z-[10]", "z-[9]", "z-[8]", "z-[7]", "z-[6]"] as const;

const stageClasses: Record<Stage, readonly string[]> = {
  1: ["left-[37%]", "left-[22%]", "left-[14%]", "left-[7%]", "left-[2%]"],
  2: ["left-[35%]", "left-[26%]", "left-[22%]", "left-[16%]", "left-[11%]"],
  3: ["left-[33%]", "left-[28%]", "left-[24%]", "left-[18%]", "left-[13%]"],
  4: ["left-[31%]", "left-[29%]", "left-[26%]", "left-[20%]", "left-[16%]"],
  5: ["left-[21%]", "left-[23%]", "left-[23%]", "left-[23%]", "left-[23%]"],
};

export default function HardwareAnimation() {
  const [stage, setStage] = useState<Stage>(1);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= scrollStages[4]) setStage(5);
      else if (scrollY >= scrollStages[3]) setStage(4);
      else if (scrollY >= scrollStages[2]) setStage(3);
      else if (scrollY >= scrollStages[1]) setStage(2);
      else setStage(1);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeClasses = useMemo(() => stageClasses[stage], [stage]);

  return (
    <div className="pointer-events-none absolute left-0 top-[24%] hidden h-[37rem] w-full laptop:block">
      {layerImages.map((image, index) => (
        <Image
          key={image}
          src={image}
          alt=""
          width={700}
          height={700}
          className={`absolute w-auto transition-[left,transform] duration-[3000ms] ease-in-out ${zIndexes[index]} ${activeClasses[index]} ${
            index === 0 ? "top-[-4rem]" : ""
          } ${stage === 5 && index === 0 ? "animate-[box-settle_3s_forwards]" : ""}`}
        />
      ))}
    </div>
  );
}
