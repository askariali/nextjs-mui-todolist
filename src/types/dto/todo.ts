import { z } from "zod";

export const todoDto = z.object({
  id: z.string(),
  title: z.string(),
  isCompleted: z.boolean(),
  createdAt: z.string(),
});
