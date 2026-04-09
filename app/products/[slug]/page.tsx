import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FooterBanner from "@/components/shared/FooterBanner";
import ProductDetail from "@/components/products/ProductDetail";
import { getProductBySlug, products } from "@/data/site/content";
import { toMetadata } from "@/data/site/seo";


export function generateStaticParams(): Array<{ slug: string }> {
  const slugs = Array.from(
    new Set(
      products.flatMap((item) => [
        item.slug,
        ...item.legacySlugs,
      ]),
    ),
  );

  return slugs.map((slug) => ({ slug }));
}

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return toMetadata({ ...product.seo, canonicalPath: `/products/${product.slug}`, previewImage: product.heroImage });
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div>
      <ProductDetail product={product} />
      <FooterBanner />
    </div>
  );
}


