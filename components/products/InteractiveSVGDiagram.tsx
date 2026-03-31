"use client";

import Image from "next/image";
import Product8pLegacy from "@/components/products/legacy/Product8pLegacy";
import ProductMolt8pLegacy from "@/components/products/legacy/ProductMolt8pLegacy";
import ProductP4200RLegacy from "@/components/products/legacy/ProductP4200RLegacy";
import ProductT2001Legacy from "@/components/products/legacy/ProductT2001Legacy";

type InteractiveSVGDiagramProps = {
  src: string;
  alt: string;
  productSlug?: string;
};

export default function InteractiveSVGDiagram({ src, alt, productSlug }: InteractiveSVGDiagramProps) {
  if (productSlug === "ONT-P4200R") {
    return <ProductP4200RLegacy />;
  }

  if (productSlug === "ONT-T2001") {
    return <ProductT2001Legacy />;
  }

  if (productSlug === "OLT-SOLT33-8P") {
    return <Product8pLegacy />;
  }

  if (productSlug === "OLT-XGSPON-8P") {
    return <ProductMolt8pLegacy />;
  }

  return (
    <div className="relative h-[320px] w-full tablet:h-[420px] laptop:h-[520px]">
      <Image src={src} alt={alt} fill sizes="100vw" className="object-contain" />
    </div>
  );
}
