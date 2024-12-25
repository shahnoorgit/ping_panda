import CreateEvenetCategoryModal from "@/components/createEvenetCategoryModal"
import { Button } from "@/components/ui/button"
import Card from "@/components/ui/card"
import { client } from "@/lib/client"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const DashboardEmptyState = () => {
  const queryClient = useQueryClient()
  const { mutate: insertQuickstartCategory, isPending } = useMutation({
    mutationFn: async () => {
      await client.category.insertQuilstartCategory.$post()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-event-category"] })
    },
  })
  return (
    <Card className=" flex flex-col items-center justify-center rounded-2xl flex-1 text-center p-6">
      <div className=" flex justify-center w-full ">
        <img
          className="size-48 -mt-24 "
          alt="no-category"
          src="/brand-asset-wave.png"
        />
      </div>
      <h1 className="mt-2 text-xl/8 font-medium tracking-tight text-gray-900">
        No Categories Yet
      </h1>
      <p className="text-sm/6 text-gray-600 max-w-prose mt-2 mb-8">
        Start tracking events by creating your first category.
      </p>
      <div className=" flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Button
          disabled={isPending}
          variant={"outline"}
          className=" flex items-center space-x-2 w-full sm:w-auto"
          onClick={() => insertQuickstartCategory()}
        >
          <span className=" size-5">🚀</span>
          <span>{isPending ? "creating" : "Quickstart"}</span>
        </Button>
        <CreateEvenetCategoryModal containerClassName=" w-full sm:w-auto">
          <Button className=" flex items-center space-x-2 w-full sm:w-auto">
            <span>Add category</span>
          </Button>
        </CreateEvenetCategoryModal>
      </div>
    </Card>
  )
}

export default DashboardEmptyState