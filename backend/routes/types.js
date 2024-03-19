import { z } from "zod";

const createToDoValidationSchema = z.object({
    title: z.string(),
    description: z.string()
});

const markCompletedToDoValidationSchema = z.object({
    id: z.string()
})

export { createToDoValidationSchema, markCompletedToDoValidationSchema };