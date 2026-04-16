"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

const Product8pLegacy = dynamic(() => import("@/components/products/legacy/Product8pLegacy"), {
  ssr: false,
  loading: () => null,
});
const ProductMolt8pLegacy = dynamic(() => import("@/components/products/legacy/ProductMolt8pLegacy"), {
  ssr: false,
  loading: () => null,
});
const ProductP4200RLegacy = dynamic(() => import("@/components/products/legacy/ProductP4200RLegacy"), {
  ssr: false,
  loading: () => null,
});
const ProductT2001Legacy = dynamic(() => import("@/components/products/legacy/ProductT2001Legacy"), {
  ssr: false,
  loading: () => null,
});

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
      <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-contain" />
    </div>
  );
}
