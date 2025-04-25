import { z } from "zod";

export const dateInputSchema = z.object({
  mm: z.coerce.number().gte(1, { message: "invalid month" }),
  yy: z.coerce.number().gte(1900, { message: "invalid Year" }).lt(2025),
});
