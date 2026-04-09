"use client";

import { useMemo, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { submitContact } from "@/data/actions/contact";
import type { ContactActionResult } from "@/lib/validation/contact";

const initialState: ContactActionResult = { ok: false, message: "" };

type PhoneCountry = {
  dialCode?: string;
};

export default function ContactForm() {
  const [state, setState] = useState<ContactActionResult>(initialState);
  const [pending, setPending] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedDialCode, setSelectedDialCode] = useState("1");

  const messageClass = useMemo(() => (state.ok ? "text-green-700" : "text-red-600"), [state.ok]);
  const hasLocalPhoneNumber = useMemo(() => {
    const digits = phoneNumber.replace(/\D/g, "");
    if (!digits) return false;
    if (!selectedDialCode) return digits.length > 0;
    if (!digits.startsWith(selectedDialCode)) return digits.length > 0;
    return digits.slice(selectedDialCode.length).length > 0;
  }, [phoneNumber, selectedDialCode]);

  const handlePhoneChange = (value: string, country: PhoneCountry, _event: unknown, formattedValue: string) => {
    setSelectedDialCode(country?.dialCode ?? "");
    setPhoneNumber(formattedValue ?? value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    setState(initialState);

    const form = e.currentTarget;
    const result = await submitContact({
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phoneNumber: phoneNumber.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    });

    setState(result);
    setPending(false);

    if (result.ok) {
      form.reset();
      setPhoneNumber("");
      setSelectedDialCode("1");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="grid gap-4 laptop:grid-cols-2 laptop:gap-5">
        <div className="laptop:max-w-[310px]">
          <input
            name="name"
            placeholder="Name"
            className="h-[47px] w-full rounded-[10px_0px] border border-black/20 px-4 text-base font-normal text-black/55 placeholder:text-black/28 focus:border-black/30 focus:outline-none focus:ring-0"
          />
          {state.fieldErrors?.name ? <p className="mt-1 text-sm text-black">{state.fieldErrors.name}</p> : null}
        </div>

        <div className="contact-phone-wrap laptop:max-w-[400px]">
          <PhoneInput
            country="us"
            enableSearch={true}
            value={phoneNumber}
            onChange={handlePhoneChange}
            placeholder="Phone Number"
            inputClass={hasLocalPhoneNumber ? "contact-phone-input-filled" : "contact-phone-input-empty"}
            inputProps={{ id: "phoneNumber", "aria-label": "Phone Number" }}
          />
        </div>

        <div className="laptop:col-start-1 laptop:col-end-2 laptop:max-w-[310px]">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="h-[47px] w-full rounded-[10px_0px] border border-black/20 px-4 text-base font-normal text-black/55 placeholder:text-black/28 focus:border-black/30 focus:outline-none focus:ring-0"
          />
          {state.fieldErrors?.email ? <p className="mt-1 text-sm text-black">{state.fieldErrors.email}</p> : null}
        </div>

        <div className="laptop:col-span-2">
          <textarea
            name="message"
            placeholder="Message"
            rows={3}
            className="h-[56px] w-full rounded-[10px_0px] border border-black/20 px-4 py-3 text-base font-normal text-black/55 placeholder:text-black/28 focus:border-black/30 focus:outline-none focus:ring-0"
          />
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button
          type="submit"
          disabled={pending}
          className="cursor-pointer rounded-[10px_0px] border-2 border-brand-orange bg-brand-orange px-6 py-2 text-lg font-display text-white disabled:opacity-60"
        >
          {pending ? "Submitting..." : "Submit"}
        </button>
      </div>

      {state.message ? <p className={`mt-4 text-center text-sm ${messageClass}`}>{state.message}</p> : null}
    </form>
  );
}