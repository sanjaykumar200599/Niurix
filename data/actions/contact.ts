"use server";

import { ContactFormInputSchema, type ContactActionResult } from "@/lib/validation/contact";

const endpoint = process.env.CONTACT_ENDPOINT ?? "https://app.sclera.com/alert/acknowledgementEmail";

export async function submitContact(_: ContactActionResult, formData: FormData): Promise<ContactActionResult> {
  const parsed = ContactFormInputSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phoneNumber: formData.get("phoneNumber"),
    message: formData.get("message"),
    website: formData.get("website"),
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { ok: false, message: "Please review highlighted fields.", fieldErrors };
  }

  if (parsed.data.website) {
    return { ok: true, message: "Message has been sent successfully." };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: parsed.data.name,
        email: parsed.data.email,
        phoneNumber: parsed.data.phoneNumber,
        message: parsed.data.message,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      return { ok: false, message: "Message not sent! Please try again." };
    }

    return { ok: true, message: "Message has been sent successfully." };
  } catch {
    return { ok: false, message: "Message not sent! Please try again." };
  }
}

