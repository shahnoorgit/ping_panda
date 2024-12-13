"use client"
import LoadingSpinner from "@/components/LoadingSpinner"
import { client } from "@/lib/client"
import { useQuery } from "@tanstack/react-query"
import React from "react"

const DashboardPageContent = () => {
  const { data: categories, isPending: isventCategoriesLoading } = useQuery({
    queryKey: ["user-event-category"],
    queryFn: async () => {
      const res = await client.category.getEvenetCategory.$get()
      const { categories } = await res.json()
      return categories
    },
  })

  if (isventCategoriesLoading) {
    return (
      <div className=" flex items-center justify-center h-full w-full flex-1">
        <LoadingSpinner />
      </div>
    )
  }

  if (!categories || categories.length === 0) {
    return <div>empty state</div>
  }

  return (
    <ul className=" grid max-w-6xl grid-cols-1 lg:grid-col-2 xl:grid-cols-3 gap-6">
      {categories.map((category) => (
        <li
          className="relative group z-10 transition-all duration-20 hover:-translate-y-0.5:"
          key={category.id}
        >
          <div className=" z-0 absolute rounded-lg bg-white inset-px" />
          <div className=" pointer-events-none ring-1 ring-black/5 z-0 absolute inset-px rounded-l shadow-sm transition-all duration-300 group-hover:shadow-md">
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
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default DashboardPageContent
