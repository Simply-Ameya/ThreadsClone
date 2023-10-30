import * as z from "zod";

export const threadValidation = z.object({
  accountId: z.string(),
  thread: z.string().min(1, { message: "Thread can not be empty" }),
});

export const commentValidation = z.object({
  thread: z.string().min(1, { message: "Thread can not be empty" }),
});
