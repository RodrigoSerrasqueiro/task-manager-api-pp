import { z } from 'zod';

export const changeTaskCompletionSchema = z.object({
  id: z.string().min(24, { message: 'O id deve conter 24 caracteres.' })
});
