import type { CharacterProps } from "@/interfaces"
import { Skeleton } from "@/components/ui"
import { DataTable } from "./data-table"
import { columns } from "./columns"
import { CustomPagination } from "../Pagination"

export const UsersTable = ({
  users,
  isLoading,
  page,
  totalPages,
  setPage,

  limit,
}) => {
  const skeletonRows = Array.from({ length: limit }).map((_, i) => ({
    id: <Skeleton key={`id-${i}`} className="h-4 w-8" />,
    name: <Skeleton key={`name-${i}`} className="h-4 w-12" />,
    email: <Skeleton key={`email-${i}`} className="h-4 w-12" />,
    role: <Skeleton key={`role-${i}`} className="h-4 w-12" />,
    gender: <Skeleton key={`gender-${i}`} className="h-4 w-12" />,
    age: <Skeleton key={`age-${i}`} className="h-4 w-12" />,
    bio: <Skeleton key={`bio-${i}`} className="h-4 w-12" />,
    image: <Skeleton key={`photo-${i}`} className="h-12 w-12 rounded" />,
  }))

  return (
    <div className="space-y-6">
      {/* Table */}
      <div className="rounded-xl border bg-card shadow-sm">
        <DataTable
          columns={columns}
          data={isLoading ? skeletonRows : users}
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
