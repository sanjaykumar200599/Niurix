import type { Metadata } from "next";
import TermsAndConditionsContent from "@/components/policy/TermsAndConditionsContent";
import { getPolicyBySlug } from "@/data/site/content";
import { toMetadata } from "@/data/site/seo";

const policy = getPolicyBySlug("terms-and-conditions");

if (!policy) {
  throw new Error("Missing terms-and-conditions content.");
}

export const metadata: Metadata = toMetadata({ ...policy.seo, previewImage: "/assets/header/niurixlogo.svg" });

export default function TermsAndConditionsPage() {
  return <TermsAndConditionsContent />;
}
