import { z } from 'zod'

export const questionsSchema = z.array(z.number().refine(n => !isNaN(n)))

type QuestionSchemaType = z.infer<typeof questionsSchema>
