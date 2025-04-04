import { z } from 'zod';
import { createTaskSchema } from './create-task-schema.js';
export const updateTaskParamsSchema = z.object({
    id: z.string().min(24, { message: 'O id padrão deve conter 24 caracteres.' })
});
export const updateTaskBodySchema = z.object({ ...createTaskSchema.shape });
