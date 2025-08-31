import type { ColumnDef } from "@tanstack/react-table"
import type { DragonballTableRow } from "@/interfaces"

export const columns: ColumnDef<DragonballTableRow>[] = [
  {
    accessorKey: "id",
  header: () => <div className="text-center">ID</div>,
    cell: ({ row }) => (
      <div className="text-sm text-muted-foreground px-2">
        {row.original.id}
      </div>
    ),
  },
  {
    accessorKey: "name",
    header: () => <div className="text-left">Name</div>,
    cell: ({ row }) => (
      <div className="text-left font-medium px-2 whitespace-normal">
        {row.original.name}
      </div>
    ),
  },
  {
    accessorKey: "ki",
    header: "KI",
    cell: ({ row }) => (
      <div className="text-sm px-2 whitespace-normal">
        {row.original.ki}
      </div>
    ),
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const img = row.original.image
      if (typeof img !== "string") return img // skeleton
      return (
        <div className="flex justify-center">
          <img
            src={img}
            alt={String(row.original.name)}
            className="h-32 object-cover"
          />
        </div>
      )
    },
  },
]