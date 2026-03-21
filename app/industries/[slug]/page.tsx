import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FooterBanner from "@/components/shared/FooterBanner";
import IndustryDetail from "@/components/industries/IndustryDetail";
import { getIndustryBySlug, industries } from "@/data/site/content";
import { toMetadata } from "@/data/site/seo";

export const revalidate = 86400;
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams(): Array<{ slug: string }> {
  return industries.map((item) => ({ slug: item.slug }));
}

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return toMetadata(industry.seo);
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  return (
    <div>
      <IndustryDetail industry={industry} />
      <FooterBanner />
    </div>
  );
}

