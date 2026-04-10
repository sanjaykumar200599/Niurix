import type { Metadata } from "next";
import PrivacyPolicyContent from "@/components/policy/PrivacyPolicyContent";
import { getPolicyBySlug } from "@/data/site/content";
import { toMetadata } from "@/data/site/seo";

const policy = getPolicyBySlug("privacy-policy");

if (!policy) {
  throw new Error("Missing privacy-policy content.");
}

export const metadata: Metadata = toMetadata({ ...policy.seo, previewImage: "/assets/header/niurixlogo.svg" });

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
