import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FooterBanner from "@/components/shared/FooterBanner";
import SolutionDetail from "@/components/solutions/SolutionDetail";
import { getSolutionBySlug, solutions } from "@/data/site/content";
import { toMetadata } from "@/data/site/seo";


export function generateStaticParams(): Array<{ slug: string }> {
  return solutions.map((item) => ({ slug: item.slug }));
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
