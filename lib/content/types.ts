import { z } from "zod";

export const SeoMetaSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  canonicalPath: z.string().min(1),
  noindex: z.boolean().optional().default(false),
});

export type SeoMeta = z.infer<typeof SeoMetaSchema>;

export const SolutionCardSchema = z.object({
  number: z.string(),
  title: z.string(),
  para: z.string(),
  image: z.string(),
});

export const SolutionContentSchema = z.object({
  slug: z.string(),
  legacySlugs: z.array(z.string()).optional().default([]),
  seo: SeoMetaSchema,
  heroTitle: z.string(),
  heroImage: z.string(),
  heroImageMobile: z.string(),
  introTitleHtml: z.string(),
  introText: z.string(),
  introImage: z.string(),
  cardsHeadingHtml: z.string(),
  cards: z.array(SolutionCardSchema),
});

export type SolutionContent = z.infer<typeof SolutionContentSchema>;

export const ProductSpecSchema = z.object({
  title: z.string(),
  value: z.string(),
});

export const ProductSectionHighlightSchema = z.object({
  title: z.string(),
  para: z.string(),
});

export const ProductContentSchema = z.object({
  slug: z.string(),
  legacySlugs: z.array(z.string()).optional().default([]),
  seo: SeoMetaSchema,
  model: z.string(),
  type: z.enum(["ONT", "OLT"]),
  indexable: z.boolean().default(true),
  isLegacy: z.boolean().default(false),
  isStub: z.boolean().default(false),
  heroImage: z.string(),
  heroImageMobile: z.string(),
  overviewHeadingHtml: z.string(),
  overviewTitle: z.string(),
  overviewParaHtml: z.string(),
  overviewImage: z.string(),
  overviewImageMobile: z.string(),
  connectHeadingHtml: z.string(),
  connectParaHtml: z.string(),
  componentImage: z.string(),
  detailImage: z.string(),
  detailImageMobile: z.string(),
  detailTitle: z.string(),
  highlights: z.array(ProductSectionHighlightSchema),
  specTitle: z.string(),
  specificationHeading: z.string(),
  dimensionsHeading: z.string(),
  specifications: z.array(ProductSpecSchema),
  dimensions: z.array(ProductSpecSchema),
  specSlides: z.array(z.string()),
  pdf: z.string().optional(),
  youtubeEmbed: z.string().optional(),
});

export type ProductContent = z.infer<typeof ProductContentSchema>;

export const IndustryDeviceSchema = z.object({
  image: z.string(),
  title: z.string(),
});

export const IndustryCardSchema = z.object({
  image: z.string(),
  title: z.string(),
});

export const IndustryContentSchema = z.object({
  slug: z.string(),
  legacySlugs: z.array(z.string()).optional().default([]),
  seo: SeoMetaSchema,
  heroTitle: z.string(),
  heroImage: z.string(),
  heroImageMobile: z.string(),
  introTitleHtml: z.string(),
  introText: z.string(),
  introImage: z.string(),
  devices: z.array(IndustryDeviceSchema),
  advantagesTitle: z.string(),
  advantagesText: z.string(),
  advantagesCards: z.array(IndustryCardSchema),
});

export type IndustryContent = z.infer<typeof IndustryContentSchema>;

export const SoftwareFeatureSchema = z.object({
  id: z.number(),
  title: z.string(),
  para: z.string(),
  image: z.string(),
  imageMobile: z.string(),
});

export const SoftwareContentSchema = z.object({
  seo: SeoMetaSchema,
  heroTitle: z.string(),
  heroImage: z.string(),
  heroImageMobile: z.string(),
  introTitleHtml: z.string(),
  introText: z.string(),
  features: z.array(SoftwareFeatureSchema),
});

export type SoftwareContent = z.infer<typeof SoftwareContentSchema>;

export const HomeBannerSchema = z.object({
  title: z.string(),
  para: z.string(),
  image: z.string(),
  imageMobile: z.string(),
  solutionSlug: z.string(),
});

export const HomeProductSchema = z.object({
  slug: z.string(),
  name: z.string(),
  type: z.enum(["ONT", "OLT"]),
  desc: z.string(),
  image: z.string(),
});

export const HomeIndustrySchema = z.object({
  slug: z.string(),
  title: z.string(),
  shortTitle: z.string(),
  desc: z.string(),
  cardImage: z.string(),
  detailImage: z.string(),
  mobileCropImage: z.string(),
  mobileDetailImage: z.string(),
});

export const HomeDataSchema = z.object({
  seo: SeoMetaSchema,
  banners: z.array(HomeBannerSchema),
  hardwareTitleHtml: z.string(),
  hardwareItems: z.array(z.string()),
  metrics: z.array(
    z.object({
      count: z.string(),
      desc: z.string(),
    }),
  ),
  products: z.array(HomeProductSchema),
  industries: z.array(HomeIndustrySchema),
  installSteps: z.array(
    z.object({
      title: z.string(),
      para: z.string(),
    }),
  ),
  ctaText: z.string(),
});

export type HomeData = z.infer<typeof HomeDataSchema>;

export const PolicyPageContentSchema = z.object({
  slug: z.enum(["privacy-policy", "terms-and-conditions"]),
  seo: SeoMetaSchema,
  title: z.string(),
  body: z.array(z.string()),
  isStub: z.boolean().default(false),
});

export type PolicyPageContent = z.infer<typeof PolicyPageContentSchema>;
