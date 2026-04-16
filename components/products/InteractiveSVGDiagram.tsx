"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import type { ReactNode } from "react";

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

type DiagramErrorBoundaryProps = {
  fallback: ReactNode;
  children: ReactNode;
};

type DiagramErrorBoundaryState = {
  hasError: boolean;
};

class DiagramErrorBoundary extends React.Component<DiagramErrorBoundaryProps, DiagramErrorBoundaryState> {
  constructor(props: DiagramErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error("Interactive diagram failed to render, using static fallback.", error);
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

function StaticDiagram({ src, alt }: Pick<InteractiveSVGDiagramProps, "src" | "alt">) {
  return (
    <div className="relative h-[320px] w-full tablet:h-[420px] laptop:h-[520px]">
      <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-contain" />
    </div>
  );
}

export default function InteractiveSVGDiagram({ src, alt, productSlug }: InteractiveSVGDiagramProps) {
  const fallback = <StaticDiagram src={src} alt={alt} />;

  if (productSlug === "ONT-P4200R") {
    return (
      <DiagramErrorBoundary fallback={fallback}>
        <ProductP4200RLegacy />
      </DiagramErrorBoundary>
    );
  }

  if (productSlug === "ONT-T2001") {
    return (
      <DiagramErrorBoundary fallback={fallback}>
        <ProductT2001Legacy />
      </DiagramErrorBoundary>
    );
  }

  if (productSlug === "OLT-SOLT33-8P") {
    return (
      <DiagramErrorBoundary fallback={fallback}>
        <Product8pLegacy />
      </DiagramErrorBoundary>
    );
  }

  if (productSlug === "OLT-XGSPON-8P") {
    return (
      <DiagramErrorBoundary fallback={fallback}>
        <ProductMolt8pLegacy />
      </DiagramErrorBoundary>
    );
  }

  return fallback;
}
