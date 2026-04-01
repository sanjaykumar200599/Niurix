import { z } from "zod";

export const ContactFormInputSchema = z.object({
  name: z.string().min(1, "Name is required!").max(100),
  email: z.string().email("Enter a valid email!").max(255),
  phoneNumber: z.string().max(50).optional().default(""),
  message: z.string().max(2000).optional().default(""),
});

export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

export type ContactActionResult = {
  ok: boolean;
  message: string;
  fieldErrors?: Record<string, string>;
};


