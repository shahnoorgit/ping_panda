import { useQueryClient } from "@tanstack/react-query"
import { PropsWithChildren, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { CATEGORY_NAME_VALIDATOR } from "@/lib/validators/category-validator"

const EVENTS_CATEGORY_VALIDATOR = z.object({
  name: CATEGORY_NAME_VALIDATOR,
  color: z
    .string()
    .min(1, "color is required")
    .regex(/^#[0-9A-F]{6}$/i, "invalid color format"),
  emoji: z.string().email("invalid emoji").optional(),
})

type EventCategoryForm = z.infer<typeof EVENTS_CATEGORY_VALIDATOR>
const CreateEvenetCategoryModal = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false)
  const queryClient = useQueryClient()

  const { register } = useForm<EventCategoryForm>({
    resolver: zodResolver(EVENTS_CATEGORY_VALIDATOR),
  })

  return (
    <>
      <div onClick={() => setIsOpen(true)}>{children}</div>
    </>
  )
}

export default CreateEvenetCategoryModal
