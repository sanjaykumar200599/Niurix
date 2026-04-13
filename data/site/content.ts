import { assetPath } from "@/lib/content/asset-path";
import {
  HomeDataSchema,
  IndustryContentSchema,
  PolicyPageContentSchema,
  ProductContentSchema,
  SolutionContentSchema,
  SoftwareContentSchema,
  type HomeData,
  type IndustryContent,
  type PolicyPageContent,
  type ProductContent,
  type SolutionContent,
  type SoftwareContent,
} from "@/lib/content/types";
import { homePage } from "@/lib/content/source/homepage/homepage";
import { software } from "@/lib/content/source/software/software";
import { optimized_fiber_optic_solution } from "@/lib/content/source/solutions/optimized_fiber_optic_solution";
import { fibers_edge_over_copper } from "@/lib/content/source/solutions/fibers_edge_over_copper";
import { scalable_and_future_ready_design } from "@/lib/content/source/solutions/scalable_and_future_ready_design";
import { configurations_and_personalized_support } from "@/lib/content/source/solutions/configurations_and_personalized_support";
import { ont_p4200r } from "@/lib/content/source/products/ont_p4200r";
import { ont_t2001 } from "@/lib/content/source/products/ont_t2001";
import { olt_solt33_08p } from "@/lib/content/source/products/olt_solt33_08p";
import { olt_xgspon_8p } from "@/lib/content/source/products/olt_xgspon_8p";
import { hospitality } from "@/lib/content/source/industries/hospitality";
import { corporate_workspaces } from "@/lib/content/source/industries/corporate_workspaces";
import { residential_real_estate } from "@/lib/content/source/industries/residential_real_estate";
import { student_living } from "@/lib/content/source/industries/student_living";

type ProductType = ProductContent["type"];

type LegacySolutionSource = {
  meta_description: string;
  section1: {
    banner: string;
    banner_mobile: string;
    title: string;
  };
  section2: {
    heading: string;
    para: string;
    img: string;
  };
  section3: {
    card_heading: string;
    cards: Array<{
      number: string;
      title: string;
      para: string;
      img: string;
    }>;
  };
};

type LegacyProductSpec = {
  title: string;
  value: string;
};

type LegacyProductSpecSection = {
  specifications: string;
  dimension: string;
  specification: LegacyProductSpec[];
  dimensions: LegacyProductSpec[];
  pdf?: string;
};

type LegacyProductSource = {
  meta_description: string;
  section1: {
    background_img: string;
    background_img_mobile: string;
  };
  section2: {
    mainHeading: string;
    subHeading: string;
    para: string;
    background_img1: string;
    background_img1_mobile: string;
  };
  section3: {
    mainHeading: string;
    para1: string;
    background_img: string;
  };
  section4: {
    background_img: string;
    background_img_mobile: string;
    title: string;
    text_content_groups: Array<{
      title: string;
      para: string;
    }>;
  };
  section5: LegacyProductSpecSection[];
  swipper: {
    img1: string;
    img2: string;
    img3: string;
    img4: string;
  };
};

type LegacyIndustrySource = {
  meta_description: string;
  section1: {
    banner_img: string;
    banner_img_mobile: string;
    title: string;
  };
  section2: {
    img: string;
    title: string;
    desc: string;
  };
  section3: Array<{
    device_img: string;
    device_title: string;
  }>;
  section4: {
    title: string;
    desc: string;
    cards: Array<{
      cards_img: string;
      cards_title: string;
    }>;
  };
};

type LegacySoftwareSource = {
  meta_description: string;
  section1: {
    title: string;
  };
  section2: {
    title: string;
    para: string;
    cards: Array<{
      id: number;
      card_title: string;
      card_para: string;
      card_img: string;
      card_img_mobile: string;
    }>;
  };
};

type LegacyHomePageSource = {
  meta_description: string;
  banner_content: Array<{
    img: string;
    img_mobile: string;
    url: string;
    title: string;
    para: string;
  }>;
  hw_cards: {
    hwcard_items: Array<{
      text: string;
    }>;
  };
  data_count: Array<{
    count: string;
    desc: string;
  }>;
  install_content: Array<{
    title: string;
    para: string;
  }>;
};

export const gtmId = "GTM-NQSKDZ7";
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://niurix.vercel.app/";

const legacySolutions = [
  {
    slug: "optimized-fiber-optic-solution",
    folder: "optimized_fiber_optic_solution",
    data: optimized_fiber_optic_solution as LegacySolutionSource,
  },
  {
    slug: "fibers-edge-over-copper",
    folder: "fibers_edge_over_copper",
    data: fibers_edge_over_copper as LegacySolutionSource,
  },
  {
    slug: "scalable-and-future-ready-design",
    folder: "scalable_and_future_ready_design",
    data: scalable_and_future_ready_design as LegacySolutionSource,
  },
  {
    slug: "configurations-and-personalized-support",
    folder: "configurations_and_personalized_support",
    data: configurations_and_personalized_support as LegacySolutionSource,
  },
] as const;

export const canonicalSolutionSlugs = legacySolutions.map((item) => item.slug);

export const solutions: SolutionContent[] = legacySolutions.map(({ slug, folder, data }) =>
  SolutionContentSchema.parse({
    slug,
    seo: {
      title: `${data.section1.title}`,
      description: data.meta_description,
      canonicalPath: `/solutions/${slug}`,
    },
    heroTitle: data.section1.title,
    heroImage: assetPath("assets", "solutions", folder, `${data.section1.banner}.webp`),
    heroImageMobile: assetPath("assets", "solutions", "mobile_banners", folder, `${data.section1.banner_mobile}.webp`),
    introTitleHtml: data.section2.heading,
    introText: data.section2.para,
    introImage: assetPath("assets", "solutions", folder, `${data.section2.img}.webp`),
    cardsHeadingHtml: data.section3.card_heading,
    cards: data.section3.cards.map((card) => ({
      number: card.number,
      title: card.title,
      para: card.para,
      image: assetPath("assets", "solutions", folder, `${card.img}.webp`),
    })),
  }),
);

type BaseProductSeed = {
  slug: string;
  type: ProductType;
  data: LegacyProductSource;
  folder: string;
  legacy: boolean;
};

const baseProductSeeds: BaseProductSeed[] = [
  { slug: "ONT-P4200R", type: "ONT", data: ont_p4200r as LegacyProductSource, folder: "ONT-P4200R", legacy: false },
  { slug: "OLT-SOLT33-8P", type: "OLT", data: olt_solt33_08p as LegacyProductSource, folder: "OLT-SOLT33-8P", legacy: false },
  { slug: "ONT-T2001", type: "ONT", data: ont_t2001 as LegacyProductSource, folder: "ONT-T2001", legacy: true },
  { slug: "OLT-XGSPON-8P", type: "OLT", data: olt_xgspon_8p as LegacyProductSource, folder: "OLT-XGSPON-8P", legacy: false },
];

const baseProducts: ProductContent[] = baseProductSeeds.map(({ slug, type, data, folder, legacy }) => {
  const section5 = data.section5[0];
  if (!section5) {
    throw new Error(`Product data for ${slug} is missing section5[0]`);
  }

  return ProductContentSchema.parse({
    slug,
    seo: {
      title: `${data.section2.subHeading}`,
      description: data.meta_description,
      canonicalPath: `/products/${slug}`,
      noindex: legacy,
    },
    model: data.section2.subHeading.replace("Niurix ", ""),
    type,
    indexable: !legacy,
    isLegacy: legacy,
    heroImage: assetPath("assets", "products", folder, `${data.section1.background_img}.webp`),
    heroImageMobile: assetPath("assets", "products", "mobile_banners", folder, `${data.section1.background_img_mobile}.webp`),
    overviewHeadingHtml: data.section2.mainHeading,
    overviewTitle: data.section2.subHeading,
    overviewParaHtml: data.section2.para,
    overviewImage: assetPath("assets", "products", folder, `${data.section2.background_img1}.webp`),
    overviewImageMobile: assetPath("assets", "products", "mobile_banners", folder, `${data.section2.background_img1_mobile}.webp`),
    connectHeadingHtml: data.section3.mainHeading,
    connectParaHtml: data.section3.para1,
    componentImage:
      slug === "ONT-T2001" || slug === "OLT-XGSPON-8P"
        ? assetPath("assets", "products", folder, `${data.section3.background_img}.svg`)
        : assetPath("assets", "products", folder, `${data.section3.background_img}.webp`),
    detailImage: assetPath("assets", "products", folder, `${data.section4.background_img}.webp`),
    detailImageMobile: assetPath("assets", "products", "mobile_banners", folder, `${data.section4.background_img_mobile}.webp`),
    detailTitle: data.section4.title,
    highlights: data.section4.text_content_groups,
    specificationHeading: section5.specifications,
    dimensionsHeading: section5.dimension,
    specifications: section5.specification,
    dimensions: section5.dimensions,
    specSlides: [data.swipper.img1, data.swipper.img2, data.swipper.img3, data.swipper.img4].map((img) =>
      assetPath("assets", "products", folder, `${img}.webp`),
    ),
    pdf: section5.pdf ? assetPath("assets", "products", "pdfs", `${section5.pdf}.pdf`) : undefined,
    youtubeEmbed: slug === "ONT-P4200R" ? "https://www.youtube.com/embed/1gxsPJekHSI" : undefined,
  });
});
const requiredProduct = (slug: string): ProductContent => {
  const product = baseProducts.find((item) => item.slug === slug);
  if (!product) {
    throw new Error(`Missing expected product seed: ${slug}`);
  }
  return product;
};

export const canonicalProductSlugs = ["ONT-P4200R", "ONT-T2001", "OLT-SOLT33-8P", "OLT-XGSPON-8P"] as const;
export const legacyProductSlugs = ["ONT-T2001"] as const;

export const products: ProductContent[] = [
  requiredProduct("ONT-P4200R"),
  requiredProduct("OLT-SOLT33-8P"),
  requiredProduct("OLT-XGSPON-8P"),
  requiredProduct("ONT-T2001"),
];

const mappedIndustries = [
  {
    slug: "hospitality",
    legacy: "hospitality-solutions",
    data: hospitality as LegacyIndustrySource,
    folder: "hospitality",
  },
  {
    slug: "corporate-workspaces",
    legacy: "corporate-workspaces-solutions",
    data: corporate_workspaces as LegacyIndustrySource,
    folder: "corporate_workspaces",
  },
  {
    slug: "residential-real-estate",
    legacy: "residential-real-estate-solutions",
    data: residential_real_estate as LegacyIndustrySource,
    folder: "residential_real_estate",
  },
  {
    slug: "student-living",
    legacy: "student-living-solutions",
    data: student_living as LegacyIndustrySource,
    folder: "student_living",
  },
] as const;

export const canonicalIndustrySlugs = mappedIndustries.map((item) => item.slug);
export const legacyIndustrySlugs = mappedIndustries.map((item) => item.legacy);

export const industries: IndustryContent[] = mappedIndustries.map(({ slug, legacy, data, folder }) =>
  IndustryContentSchema.parse({
    slug,
    legacySlugs: [legacy],
    seo: {
      title: `${data.section1.title}`,
      description: data.meta_description,
      canonicalPath: `/industries/${slug}`,
    },
    heroTitle: data.section1.title,
    heroImage: assetPath("assets", "industries", folder, `${data.section1.banner_img}.webp`),
    heroImageMobile: assetPath("assets", "industries", "mobile_banners", folder, `${data.section1.banner_img_mobile}.webp`),
    introTitleHtml: data.section2.title,
    introText: data.section2.desc,
    introImage: assetPath("assets", "industries", folder, `${data.section2.img}.webp`),
    devices: data.section3.map((device) => ({
      image: assetPath("assets", "industries", folder, `${device.device_img}.webp`),
      title: device.device_title,
    })),
    advantagesTitle: data.section4.title,
    advantagesText: data.section4.desc,
    advantagesCards: data.section4.cards.map((card) => ({
      image: assetPath("assets", "industries", folder, `${card.cards_img}.webp`),
      title: card.cards_title,
    })),
  }),
);

const softwareData = software as LegacySoftwareSource;

export const softwareContent: SoftwareContent = SoftwareContentSchema.parse({
  seo: {
    title: "GPON Network Monitoring & Management Software | Niurix",
    description: softwareData.meta_description,
    canonicalPath: "/software",
  },
  heroTitle: softwareData.section1.title,
  heroImage: assetPath("assets", "software", "Banner.webp"),
  heroImageMobile: assetPath("assets", "software", "Software banner Mobile.webp"),
  introTitleHtml: softwareData.section2.title,
  introText: softwareData.section2.para,
  features: softwareData.section2.cards.map((feature) => ({
    id: feature.id,
    title: feature.card_title,
    para: feature.card_para,
    image: assetPath("assets", "software", `${feature.card_img}.webp`),
    imageMobile: assetPath("assets", "software", `${feature.card_img_mobile}.webp`),
  })),
});

const homePageData = homePage as LegacyHomePageSource;

export const homeContent: HomeData = HomeDataSchema.parse({
  seo: {
    title: "GPON Fiber Networking Solutions for Modern Building | Niurix",
    description: homePageData.meta_description,
    canonicalPath: "/",
  },
  banners: homePageData.banner_content.map((banner) => ({
    title: banner.title,
    para: banner.para,
    image: assetPath("assets", "homepage", `${banner.img}.webp`),
    imageMobile: assetPath("assets", "homepage", "mobileBanners", `${banner.img_mobile}.webp`),
    solutionSlug: banner.url,
  })),
  hardwareTitleHtml:
    "Empower Spaces with <span class='text-brand-orange'>High-Performance</span> GPON <span class='text-brand-orange'>Fiber Solutions</span>",
  hardwareItems: homePageData.hw_cards.hwcard_items.map((item) => item.text),
  metrics: homePageData.data_count,
  products: [
    {
      slug: "ONT-P4200R",
      name: "P4200R",
      type: "ONT",
      desc: "The Niurix P4200R (Optical Network Terminal) is a full-feature ONT exclusively designed for triple-play services (internet, television, and voice). Typically consisting of 4 Gigabit Ethernet(GbE)/PoE ports can be used extensively for connecting multiple devices over the internet.",
      image: assetPath("assets", "homepage", "P4200R.webp"),
    },
    {
      slug: "ONT-T2001",
      name: "T2001",
      type: "ONT",
      desc: "The Niurix T2001 ONT (Optical Network Terminal) is a lightweight, compact, and high-performance networking device built to bridge communication between modern infrastructure and end users while delivering stable high-speed access.",
      image: assetPath("assets", "homepage", "T2001.webp"),
    },
    {
      slug: "OLT-SOLT33-8P",
      name: "SOLT33-8P",
      type: "OLT",
      desc: "The Niurix SOLT33-8P is an Optical Line Terminal (OLT) designed for GPON networks serving up to 128 Optical Network Terminals (ONTs) per PON port. It includes eight GPON ports, 4 GE optical/electrical uplink ports, and two 10 Gigabit Ethernet uplink ports.",
      image: assetPath("assets", "homepage", "SOLT33-08P.webp"),
    },
    {
      slug: "OLT-XGSPON-8P",
      name: "XGSPON-8P",
      type: "OLT",
      desc: "The Niurix XGSPON-8P is a high-capacity Optical Line Terminal engineered for large-scale FTTH/FTTB deployments with higher throughput, low-latency transport, and future-ready multi-tenant network expansion.",
      image: assetPath("assets", "homepage", "XGSPON 8P.webp"),
    },
  ],
  industries: [
    {
      slug: "hospitality",
      title: "Hospitality",
      shortTitle: "Hospitality",
      desc: "Catering to exceptional guest experiences: pioneering next-gen networking solutions to redefine hospitality.",
      cardImage: assetPath("assets", "homepage", "hospitality-industries-cropped.webp"),
      detailImage: assetPath("assets", "homepage", "Hospitality.webp"),
      mobileCropImage: assetPath("assets", "homepage", "Hosp 1 home.webp"),
      mobileDetailImage: assetPath("assets", "homepage", "Hosp 2 home.webp"),
    },
    {
      slug: "corporate-workspaces",
      title: "Corporate Workspaces",
      shortTitle: "Corporate Workspaces",
      desc: "Corporate workspaces that work: reimagine connectivity solutions for the modern workforce.",
      cardImage: assetPath("assets", "homepage", "corporate-industries-cropped.webp"),
      detailImage: assetPath("assets", "homepage", "Corporate.webp"),
      mobileCropImage: assetPath("assets", "homepage", "corp 1 home.webp"),
      mobileDetailImage: assetPath("assets", "homepage", "Corp 2 home.webp"),
    },
    {
      slug: "student-living",
      title: "Student Living",
      shortTitle: "Student Living",
      desc: "Fiber optic solutions for learning: get the speed students need to succeed.",
      cardImage: assetPath("assets", "homepage", "student-living-cropped.webp"),
      detailImage: assetPath("assets", "homepage", "Student living.webp"),
      mobileCropImage: assetPath("assets", "homepage", "student 1 home.webp"),
      mobileDetailImage: assetPath("assets", "homepage", "Student 2 home.webp"),
    },
  ],
  installSteps: homePageData.install_content,
  ctaText: "Transform Your Network Architecture With Us!",
});

export const policyPages: PolicyPageContent[] = [
  PolicyPageContentSchema.parse({
    slug: "privacy-policy",
    seo: {
      title: "Niurix - Privacy Policy",
      description: "Read how Niurix collects, uses, and protects personal information.",
      canonicalPath: "/privacy-policy",
    },
    title: "Privacy Policy",
    isStub: false,
    body: [
      "Niurix respects your privacy and is committed to safeguarding personal information shared through our website, product inquiries, and support channels.",
      "This Privacy Policy describes what information we collect, how we use it to provide and improve our services, and what controls are available to you.",
      "We may collect contact details such as your name, email address, phone number, company information, and any information you provide through forms, calls, or direct communications.",
      "We also collect technical and usage information such as browser type, IP address, pages visited, referral source, and interaction data to maintain security, monitor performance, and improve user experience.",
      "Niurix uses collected information to respond to requests, process business inquiries, provide customer support, improve products and website functionality, and share relevant service updates.",
      "Where required by applicable law, we rely on legal bases such as consent, legitimate business interests, contractual necessity, and legal obligations for processing personal data.",
      "We do not sell personal information. We may share information with trusted service providers who support hosting, analytics, communications, and operations under appropriate confidentiality and security obligations.",
      "Information may be retained only for as long as needed for legitimate business, legal, accounting, or compliance purposes, after which it is securely deleted or anonymized where feasible.",
      "You may request access, correction, deletion, or limitation of your personal information, and you may withdraw consent where processing is based on consent, subject to applicable legal requirements.",
      "For privacy-related questions or requests, please contact Niurix through the official contact channels listed on our website. We may update this policy periodically, and continued use of our site reflects acceptance of any updated terms.",
    ],
  }),
  PolicyPageContentSchema.parse({
    slug: "terms-and-conditions",
    seo: {
      title: "Niurix - Terms And Conditions",
      description: "Terms and conditions governing the use of Niurix websites and services.",
      canonicalPath: "/terms-and-conditions",
    },
    title: "Terms and Conditions",
    isStub: false,
    body: [
      "By accessing or using Niurix websites, products, and related services, you agree to comply with these Terms and Conditions and all applicable laws and regulations.",
      "You are responsible for ensuring that information provided to Niurix is accurate and current, and for using our website and services only for lawful and authorized business purposes.",
      "All content on this site, including text, visuals, technical material, logos, and trademarks, is owned by Niurix or used under license and may not be copied, modified, or distributed without prior written permission.",
      "Product descriptions, specifications, and availability are provided for general information and may be updated, revised, or discontinued without prior notice.",
      "You agree not to misuse the website, attempt unauthorized access, interfere with platform operations, transmit harmful code, or engage in any activity that could damage Niurix systems or other users.",
      "Where services involve third-party platforms or integrations, additional third-party terms may apply, and Niurix is not responsible for independent third-party policies or service interruptions outside our control.",
      "Niurix makes reasonable efforts to maintain accurate and reliable information, but the website and related content are provided on an as-is and as-available basis without warranties of uninterrupted operation.",
      "To the maximum extent permitted by law, Niurix is not liable for indirect, incidental, special, consequential, or punitive damages arising from use of or inability to use the website or services.",
      "Niurix may suspend or terminate access where there is suspected misuse, legal non-compliance, or violation of these terms.",
      "We may revise these Terms and Conditions from time to time. Continued use of Niurix websites or services after updates are published constitutes acceptance of the revised terms.",
    ],
  }),
];

const normalizeSlug = (slug: string) => decodeURIComponent(slug).trim().toLowerCase();

export const getSolutionBySlug = (slug: string) => {
  const normalizedSlug = normalizeSlug(slug);
  return solutions.find(
    (item) =>
      normalizeSlug(item.slug) === normalizedSlug ||
      item.legacySlugs.some((legacySlug) => normalizeSlug(legacySlug) === normalizedSlug),
  );
};

export const getProductBySlug = (slug: string) => {
  const normalizedSlug = normalizeSlug(slug);
  return products.find(
    (item) =>
      normalizeSlug(item.slug) === normalizedSlug ||
      item.legacySlugs.some((legacySlug) => normalizeSlug(legacySlug) === normalizedSlug),
  );
};

export const getIndustryBySlug = (slug: string) => {
  const normalizedSlug = normalizeSlug(slug);
  return industries.find(
    (item) =>
      normalizeSlug(item.slug) === normalizedSlug ||
      item.legacySlugs.some((legacySlug) => normalizeSlug(legacySlug) === normalizedSlug),
  );
};

export const getPolicyBySlug = (slug: string) =>
  policyPages.find((item) => item.slug === slug);

export type HeaderNavigationItem = {
  label: string;
  href: string;
  image: string;
  type?: ProductType;
};

export const headerNavigation: {
  solutions: HeaderNavigationItem[];
  products: HeaderNavigationItem[];
  industries: HeaderNavigationItem[];
} = {
  solutions: [
    {
      label: "Optimized Fiber-Optic Solution",
      href: "/solutions/optimized-fiber-optic-solution",
      image: "/assets/header/solutions/Optimized Fiber-Optic Solution.webp",
    },
    {
      label: "Fiber's Edge Over Copper",
      href: "/solutions/fibers-edge-over-copper",
      image: "/assets/header/solutions/Fibers Edge Over Copper.webp",
    },
    {
      label: "Scalable and Future Ready Design",
      href: "/solutions/scalable-and-future-ready-design",
      image: "/assets/header/solutions/Scalable and Future-Ready Design.webp",
    },
    {
      label: "Configurations and Personalized Support",
      href: "/solutions/configurations-and-personalized-support",
      image: "/assets/header/solutions/Configurations and Personalized Support.webp",
    },
  ],
  products: [
    {
      label: "P4200R",
      type: "ONT",
      href: "/products/ONT-P4200R",
      image: "/assets/header/products/ONT P4200r.webp",
    },
    {
      label: "T2001",
      type: "ONT",
      href: "/products/ONT-T2001",
      image: "/assets/products/ONT-T2001/Product.webp",
    },
    {
      label: "SOLT33-8P",
      type: "OLT",
      href: "/products/OLT-SOLT33-8P",
      image: "/assets/header/products/OLT SOLT33- 08P.webp",
    },
    {
      label: "XGSPON-8P",
      type: "OLT",
      href: "/products/OLT-XGSPON-8P",
      image: "/assets/products/OLT-XGSPON-8P/Product.webp",
    },
  ],
  industries: [
    {
      label: "Hospitality",
      href: "/industries/hospitality",
      image: "/assets/header/industries/HOSPITALITY.webp",
    },
    {
      label: "Corporate Workspaces",
      href: "/industries/corporate-workspaces",
      image: "/assets/header/industries/CORPORATE.webp",
    },
    {
      label: "Student Living",
      href: "/industries/student-living",
      image: "/assets/header/industries/Student living.webp",
    },
  ],
};
