"use client"
import LoadingSpinner from "@/components/LoadingSpinner"
import { Button, buttonVariants } from "@/components/ui/button"
import { Modal } from "@/components/ui/Modal"
import { client } from "@/lib/client"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { format, formatDistanceToNowStrict } from "date-fns"
import { ArrowRight, BarChart2, Clock, Database, Trash2 } from "lucide-react"
import Link from "next/link"
import React, { useState } from "react"
import DashboardEmptyState from "./dashboard-empty-state"

const DashboardPageContent = () => {
  const [deletingCategory, setDeletingcategory] = useState<string | null>(null)
  const queryClient = useQueryClient()
  const { data: categories, isPending: isventCategoriesLoading } = useQuery({
    queryKey: ["user-event-category"],
    queryFn: async () => {
      const res = await client.category.getEvenetCategory.$get()
      const { categories } = await res.json()
      return categories
    },
  })

  const { mutate: deleteCategory, isPending: isDeletingCategory } = useMutation(
    {
      mutationFn: async (name: string) => {
        await client.category.deleteCategory.$post({ name: name })
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [] })
        setDeletingcategory(null)
      },
    }
  )

  if (isventCategoriesLoading) {
    return (
      <div className=" flex items-center justify-center h-full w-full flex-1">
        <LoadingSpinner />
      </div>
    )
  }

  if (!categories || categories.length === 0) {
    return <DashboardEmptyState />
  }

  return (
    <>
      <ul className=" grid max-w-6xl grid-cols-1 lg:grid-col-2 xl:grid-cols-3 gap-6">
        {categories.map((category) => (
          <li
            className="relative group z-10 transition-all duration-20 hover:-translate-y-0.5:"
            key={category.id}
          >
            <div className=" z-0 absolute rounded-lg bg-white inset-px" />
            <div className=" pointer-events-none ring-1 ring-black/5 z-0 absolute inset-px rounded-l shadow-sm transition-all duration-300 group-hover:shadow-xl" />
            <div className=" relative p-6 z-10">
              <div className=" flex items-center gap-4 mb-6">
                <div
                  className="size-12 rounded-full"
                  style={{
                    backgroundColor: category.color
                      ? `#${category.color.toString(16).padStart(6, "0")}`
                      : "#f3f4f6",
                  }}
                />
                <div>
                  <h3 className=" text-lg/7 font-medium tracking-tight text-gray-950">
                    {category.emoji || "📂"}
                    {category.name}
                  </h3>
                  <p className="text-sm/6 text-gray-600">
                    {format(category.createdAt, "MMM d,yyyy")}
                  </p>
                </div>
              </div>
              <div className=" space-y-3 mb-6">
                <div className=" flex items-center text-sm/5 text-gray-600">
                  <Clock className=" size-4 mr-2 text-brand-500" />
                  <span className=" font-medium">Last ping:</span>
                  <span className=" ml-1">
                    {category.lastPing
                      ? formatDistanceToNowStrict(category.lastPing) + "go"
                      : "Never"}
                  </span>
                </div>
              </div>
              <div className=" space-y-3 mb-6">
                <div className=" flex items-center text-sm/5 text-gray-600">
                  <Database className=" size-4 mr-2 text-brand-500" />
                  <span className=" font-medium">Unique fields:</span>
                  <span className=" ml-1">
                    {category.uniqueFieldCount || 0}
                  </span>
                </div>
                <div className=" space-y-3 mb-6">
                  <div className=" flex items-center text-sm/5 text-gray-600">
                    <BarChart2 className=" size-4 mr-2 text-brand-500" />
                    <span className=" font-medium">Event this month:</span>
                    <span className=" ml-1">{category.eventsCount || 0}</span>
                  </div>
                </div>
              </div>
              <div className=" flex items-center justify-between mt-4">
                <Link
                  className={buttonVariants({
                    variant: "outline",
                    size: "sm",
                    className: "flex items-center gap-2 text-sm",
                  })}
                  href={`/dashboard/category/${category.name}`}
                >
                  View all
                  <ArrowRight className="size-4" />
                </Link>
                <Button
                  variant="ghost"
                  onClick={() => setDeletingcategory(category.name)}
                  size="sm"
                  aria-label={`delete ${category.name} category`}
                  className=" text-gray-500 transition-colors hover:text-red-600"
                >
                  <Trash2 className="size-5" />
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Modal
        className="p-8 max-w-md"
        setShowModal={() => setDeletingcategory(null)}
        showModal={!!deletingCategory}
      >
        <div className="space-y-6">
          <div>
            <h2 className=" text-lg/7 font-medium tracking-tight text-gray-950">
              Delete Category
            </h2>
            <p className=" text-sm/6 text-gray-600">
              Are you sure you want to delete a category "{deletingCategory}"?
              This action cannot be undone.
            </p>
          </div>
          <div className="flex justify-end space-x-3 pt-4 border-t">
            <Button variant="outline" onClick={() => setDeletingcategory(null)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              disabled={isDeletingCategory}
              onClick={() =>
                deletingCategory && deleteCategory(deletingCategory)
              }
            >
              {isDeletingCategory ? "Deleting..." : "Delete"}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default DashboardPageContent
