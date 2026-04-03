"use client";

import { useActionState, useMemo } from "react";
import { submitContact } from "@/data/actions/contact";
import type { ContactActionResult } from "@/lib/validation/contact";

const initialState: ContactActionResult = { ok: false, message: "" };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  const messageClass = useMemo(() => (state.ok ? "text-green-700" : "text-red-600"), [state.ok]);

  return (
    <form action={formAction} className="w-full">
      <div className="grid gap-4 laptop:grid-cols-2 laptop:gap-5">
        <div className="laptop:max-w-[310px]">
          <input
            name="name"
            placeholder="Name"
            className="h-[47px] w-full rounded-[10px_0px] border border-black/30 px-4 text-base placeholder:text-black/28"
          />
          {state.fieldErrors?.name ? <p className="mt-1 text-sm text-black">{state.fieldErrors.name}</p> : null}
        </div>

        <div className="laptop:max-w-[400px] pl-18">
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            className="h-[47px] w-full rounded-[10px_0px] border border-black/30 px-4 text-base placeholder:text-black/28"
          />
        </div>

        <div className="laptop:col-start-1 laptop:col-end-2 laptop:max-w-[310px]">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="h-[47px] w-full rounded-[10px_0px] border border-black/30 px-4 text-base placeholder:text-black/28"
          />
          {state.fieldErrors?.email ? <p className="mt-1 text-sm text-black">{state.fieldErrors.email}</p> : null}
        </div>

        <div className="laptop:col-span-2">
          <textarea
            name="message"
            placeholder="Message"
            rows={3}
            className="h-[56px] w-full rounded-[10px_0px] border border-black/30 px-4 py-3 text-base placeholder:text-black/28"
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