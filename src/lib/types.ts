import { z } from "zod";
import { dateInputSchema } from "./zodSchema";
export type MonthYearType = {
  order: number;
  value: string;
}[];
export type DateInputSchemaType = z.infer<typeof dateInputSchema>;
