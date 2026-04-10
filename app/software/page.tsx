import type { Metadata } from "next";
import FooterBanner from "@/components/shared/FooterBanner";
import SoftwarePage from "@/components/software/SoftwarePage";
import { softwareContent } from "@/data/site/content";
import { toMetadata } from "@/data/site/seo";

export const metadata: Metadata = toMetadata({
  ...softwareContent.seo,
  canonicalPath: "/software",
  previewImage: softwareContent.heroImage,
});

export default function SoftwareRoutePage() {
  return (
    <div>
      <SoftwarePage software={softwareContent} />
      <FooterBanner />
    </div>
  );
}
