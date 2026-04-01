"use client";

import { useActionState, useMemo, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { submitContact } from "@/data/actions/contact";
import type { ContactActionResult } from "@/lib/validation/contact";

const initialState: ContactActionResult = { ok: false, message: "" };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const [phone, setPhone] = useState("");

  const messageClass = useMemo(() => (state.ok ? "text-green-700" : "text-red-600"), [state.ok]);

  return (
    <form action={formAction} method="post" className="w-full">
      <div className="grid gap-4 laptop:grid-cols-2">
        <div>
          <input name="name" placeholder="Name" className="h-[47px] w-full rounded-[10px_0px] border border-black/40 px-4 text-base" />
          {state.fieldErrors?.name ? <p className="mt-1 text-sm text-black">{state.fieldErrors.name}</p> : null}
        </div>

        <div>
          <PhoneInput
            country="us"
            value={phone}
            onChange={(value, _c, _e, formatted) => setPhone(formatted)}
            inputProps={{ name: "phoneNumber" }}
            containerClass="w-full"
            inputClass="!h-[47px] !w-full !rounded-[10px_0px] !border-black/40 !text-base"
          />
        </div>
      </div>

      <div className="mt-5">
        <input type="email" name="email" placeholder="Email" className="h-[47px] w-full rounded-[10px_0px] border border-black/40 px-4 text-base" />
        {state.fieldErrors?.email ? <p className="mt-1 text-sm text-black">{state.fieldErrors.email}</p> : null}
      </div>

      <div className="mt-5">
        <textarea
          name="message"
          placeholder="Message"
          rows={3}
          className="h-[76px] w-full rounded-[10px_0px] border border-black/40 px-4 py-3 text-base"
        />
      </div>

      <div className="mt-8 flex justify-center">
        <button
          type="submit"
          disabled={pending}
          className="rounded-[10px_0px] border-2 border-brand-orange bg-brand-orange px-6 py-2 text-lg font-display text-white transition disabled:opacity-60"
        >
          {pending ? "Submitting..." : "Submit"}
        </button>
      </div>

      {state.message ? <p className={`mt-4 text-center text-sm ${messageClass}`}>{state.message}</p> : null}
    </form>
  );
}
