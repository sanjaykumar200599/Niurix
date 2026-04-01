import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FooterBanner from "@/components/shared/FooterBanner";
import SolutionDetail from "@/components/solutions/SolutionDetail";
import { getSolutionBySlug, solutions } from "@/data/site/content";
import { toMetadata } from "@/data/site/seo";

export const revalidate = 86400;
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams(): Array<{ slug: string }> {
  const slugs = Array.from(
    new Set(
      solutions.flatMap((item) => [
        item.slug,
        item.slug.toLowerCase(),
        ...item.legacySlugs,
        ...item.legacySlugs.map((legacy) => legacy.toLowerCase()),
      ]),
    ),
  );

  return slugs.map((slug) => ({ slug }));
}

type SolutionPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};
  return toMetadata({ ...solution.seo, canonicalPath: `/solutions/${solution.slug}`, previewImage: solution.heroImage });
}

export default async function SolutionPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  return (
    <div>
      <SolutionDetail solution={solution} />
      <FooterBanner />
    </div>
  );
}

