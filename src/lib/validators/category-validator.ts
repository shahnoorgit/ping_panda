import { z } from "zod"

export const CATEGORY_NAME_VALIDATOR = z
  .string()
  .min(1, "category name is required")
  .regex(
    /^[a-zA-Z0-9-]+$/,
    "category name can only contain letters, numbers, and hyphens"
  )
