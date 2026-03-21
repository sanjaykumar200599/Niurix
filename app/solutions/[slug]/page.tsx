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
  return solutions.map((item) => ({ slug: item.slug }));
}

type SolutionPageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const solution = getSolutionBySlug(params.slug);
  if (!solution) return {};
  return toMetadata({ ...solution.seo, canonicalPath: `/solutions/${solution.slug}` });
}

export default function SolutionPage({ params }: SolutionPageProps) {
  const solution = getSolutionBySlug(params.slug);
  if (!solution) notFound();

  return (
    <div>
      <SolutionDetail solution={solution} />
      <FooterBanner />
    </div>
  );
}
