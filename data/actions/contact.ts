import { ContactFormInputSchema, type ContactActionResult } from "@/lib/validation/contact";

const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "https://app.sclera.com/alert/acknowledgementEmail";
const DEFAULT_SUCCESS_MESSAGE = "Message has been sent successfully.";
const DEFAULT_ERROR_MESSAGE = "Message not sent! Please try again.";

type UnknownRecord = Record<string, unknown>;

function getMessageFromResponseBody(body: unknown): string | null {
  if (!body) return null;
  if (typeof body === "string") {
    const trimmed = body.trim();
    return trimmed.length ? trimmed : null;
  }
  if (typeof body !== "object") return null;

  const record = body as UnknownRecord;
  const possibleKeys = ["message", "response", "detail", "error", "status", "msg"];

  for (const key of possibleKeys) {
    const value = record[key];
    if (typeof value === "string" && value.trim().length) {
      return value.trim();
    }
  }

  return null;
}

export async function submitContact(data: {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}): Promise<ContactActionResult> {
  const parsed = ContactFormInputSchema.safeParse(data);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { ok: false, message: "", fieldErrors };
  }

  const body: Record<string, string> = {
    name: parsed.data.name,
    email: parsed.data.email,
  };

  if (parsed.data.phoneNumber.trim()) {
    body.phoneNumber = parsed.data.phoneNumber.trim();
  }

  if (parsed.data.message.trim()) {
    body.message = parsed.data.message.trim();
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(body).toString(),
    });

    const contentType = response.headers.get("content-type") ?? "";
    let responseBody: unknown = null;

    if (contentType.includes("application/json")) {
      responseBody = await response.json().catch(() => null);
    } else {
      responseBody = await response.text().catch(() => "");
    }

    const responseMessage = getMessageFromResponseBody(responseBody);

    if (!response.ok) {
      return { ok: false, message: responseMessage ?? DEFAULT_ERROR_MESSAGE };
    }

    return { ok: true, message: responseMessage ?? DEFAULT_SUCCESS_MESSAGE };
  } catch {
    return { ok: false, message: DEFAULT_ERROR_MESSAGE };
  }
}