import * as z from "zod";

export const userValidation = z.object({
  id: z.string(),
  profile_photo: z.string().url().nonempty(),
  name: z
    .string()
    .min(3, { message: "Minimum 3 characters" })
    .max(30, { message: "Maximum 30 characters" }),
  userName: z
    .string()
    .min(3, { message: "Minimum 3 characters" })
    .max(30, { message: "Maximum 30 characters" }),
  bio: z
    .string()
    .min(3, { message: "Minimum 3 characters" })
    .max(1000, { message: "Maximum 1000 characters" }),
});
