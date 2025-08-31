import type { CharacterProps } from "@/interfaces"
import { Skeleton } from "@/components/ui"
import { DataTable } from "./data-table"
import { columns } from "./columns"
import { CustomPagination } from "../Pagination"

export const DragonballTable = ({
  characters,
  isLoading,
  page,
  totalPages,
  setPage,
  limit,
}: CharacterProps) => {
  const skeletonRows = Array.from({ length: limit }).map((_, i) => ({
    id: <Skeleton key={`id-${i}`} className="h-4 w-8" />,
    name: <Skeleton key={`name-${i}`} className="h-4 w-24" />,
    ki: <Skeleton key={`ki-${i}`} className="h-4 w-12" />,
    image: <Skeleton key={`image-${i}`} className="h-12 w-12 rounded" />,
  }))

  return (
    <div className="space-y-6">
      {/* Table */}
      <div className="rounded-xl border bg-card shadow-sm">
        <DataTable
          columns={columns}
          data={isLoading ? skeletonRows : characters}
        />
      </div>

      {/* Pagination */}
      <div className="flex justify-center">
        <CustomPagination
          totalPages={totalPages}
          currentPage={page}
          onPageChange={setPage}
        />
      </div>
    </div>
  )
}
