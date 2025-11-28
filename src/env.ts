import { z } from 'zod'
import 'dotenv/config'

const envSchema = z.object({
  PORT: z.coerce.number().default(3000),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_DATABASE: z.string(),
  DB_HOST: z.string(),
  DB_PORT: z.coerce.number().default(5433),
  DB_TYPE: z.string(),
  // DB_SCHEMA: z.string(),
  DB_MAX_POOL: z.coerce.number().default(10),
  DB_MIN_POOL: z.coerce.number().default(2),
  DB_VERBOSE: z.string(),
  SCRIPTS_FOLDER: z.string(),
  MODELS_FOLDER: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('Invalid environment variables!', _env.error.format())

  throw new Error('Invalid environment variables!')
}

export const env = _env.data
