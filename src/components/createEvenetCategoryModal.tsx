"use client"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { PropsWithChildren, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { CATEGORY_NAME_VALIDATOR } from "@/lib/validators/category-validator"
import { Modal } from "./ui/Modal"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { cn } from "@/lib/utils"
import { color } from "framer-motion"
import { Button } from "./ui/button"
import { client } from "@/lib/client"

const COLOR_OPTION = [
  "#FF6B6B", // bg-[#FF6B6B] ring-[#FF6B6B] Bright Red
  "#4ECDC4", // bg-[#4ECDC4] ring-[#4ECDC4] Teal
  "#45B7D1", // bg-[#45B7D1] ring-[#45B7D1] Sky Blue
  "#FFA07A", // bg-[#FFA07A] ring-[#FFA07A] Light Salmon
  "#98D8C8", // bg-[#98D8C8] ring-[#98D8C8] Seafoam Green
  "#FDCB6E", // bg-[#FDCB6E] ring-[#FDCB6E] Mustard Yellow
  "#6C5CE7", // bg-[#6C5CE7] ring-[#6C5CE7] Soft Purple
  "#FF85A2", // bg-[#FF85A2] ring-[#FF85A2] Pink
  "#2ECC71", // bg-[#2ECC71] ring-[#2ECC71] Emerald Green
  "#E17055", // bg-[#E17055] ring-[#E17055] Terracotta
]

const EMOJI_OPTIONS = [
  { emoji: "💰", label: "Money (Sale)" },
  { emoji: "👤", label: "User (Sign-up)" },
  { emoji: "🎉", label: "Celebration" },
  { emoji: "📅", label: "Calendar" },
  { emoji: "🚀", label: "Launch" },
  { emoji: "📢", label: "Announcement" },
  { emoji: "🎓", label: "Graduation" },
  { emoji: "🏆", label: "Achievement" },
  { emoji: "💡", label: "Idea" },
  { emoji: "🔔", label: "Notification" },
]

const EVENTS_CATEGORY_VALIDATOR = z.object({
  name: CATEGORY_NAME_VALIDATOR,
  color: z
    .string()
    .min(1, "color is required")
    .regex(/^#[0-9A-F]{6}$/i, "invalid color format"),
  emoji: z.string().emoji("invalid emoji").optional(),
})

type EventCategoryForm = z.infer<typeof EVENTS_CATEGORY_VALIDATOR>

interface createEventCategoryModal extends PropsWithChildren {
  containerClassName?: string
}
const CreateEvenetCategoryModal = ({
  children,
  containerClassName,
}: createEventCategoryModal) => {
  const [isOpen, setIsOpen] = useState(false)
  const queryClient = useQueryClient()

  const { mutate: createEventCategory, isPending } = useMutation({
    mutationFn: async (data: EventCategoryForm) => {
      await client.category.createEventCategory.$post(data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-event-category"] })
      setIsOpen(false)
    },
  })

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<EventCategoryForm>({
    resolver: zodResolver(EVENTS_CATEGORY_VALIDATOR),
  })

  const onSubmit = (data: EventCategoryForm) => {
    console.log("data", data)
    console.log(data)

    createEventCategory(data)
  }
  const color = watch("color")
  const selectedEmoji = watch("emoji")

  return (
    <>
      <div className={containerClassName} onClick={() => setIsOpen(true)}>
        {children}
      </div>
      <Modal
        className=" max-w-xl p-8"
        setShowModal={setIsOpen}
        showModal={isOpen}
      >
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2 className=" text-lg/7 font-medium tracking-tight text-gray-950">
              New category
            </h2>
            <p className=" text-sm/6 text-gray-600">
              Create a new category to organize your events.
            </p>
          </div>
          <div className=" space-y-5">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                autoFocus
                className="w-full"
                id="name"
                {...register("name")}
                placeholder="e.g. user-signup"
                type="text"
              />
              {errors.name ? (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              ) : null}
            </div>
            <div>
              <Label>Color</Label>
              <div className=" flex flex-wrap gap-3">
                {COLOR_OPTION.map((madeColor) => (
                  <button
                    type="button"
                    key={madeColor}
                    onClick={() => setValue("color", madeColor)}
                    className={cn(
                      `bg-[${madeColor}]`,
                      "size-10 rounded-full ring-2 ring-offset-2 transition-all",
                      color === madeColor
                        ? "ring-brand-700 scale-110"
                        : "ring-transparent hover:scale-105"
                    )}
                  ></button>
                ))}
              </div>
              {errors.color ? (
                <p className=" mt-1 text-sm text-red-500">
                  {errors.color.message}
                </p>
              ) : null}
            </div>
            <div>
              <Label>Emoji</Label>
              <div className=" flex flex-wrap gap-3">
                {EMOJI_OPTIONS.map(({ emoji, label }) => (
                  <button
                    type="button"
                    key={emoji}
                    onClick={() => setValue("emoji", emoji)}
                    className={cn(
                      "size-10 flex items-center justify-center text-xl rounded-md transition-all",
                      selectedEmoji === emoji
                        ? "bg-brand-100 ring-2 ring-brand-700 scale-110"
                        : "bg-brand-100 hover:bg-brand-200"
                    )}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
              {errors.emoji ? (
                <p className=" mt-1 text-sm text-red-500">
                  {errors.emoji.message}
                </p>
              ) : null}
            </div>
          </div>
          <div className=" space-x-3 pt-4 border-t justify-end flex">
            <Button
              type="button"
              variant={"outline"}
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button disabled={isPending} type="submit">
              {isPending ? "Creating..." : "Create Event"}
            </Button>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default CreateEvenetCategoryModal
