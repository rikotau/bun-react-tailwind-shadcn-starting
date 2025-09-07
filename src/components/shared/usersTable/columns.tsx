import type { ColumnDef } from "@tanstack/react-table"
import type { UsersTableRow } from "@/interfaces"

export const columns: ColumnDef<UsersTableRow>[] = [
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
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <div className="text-sm px-2 whitespace-normal">
        {row.original.email}
      </div>
    ),
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => (
      <div className="text-sm px-2 whitespace-normal">
        {row.original.role}
      </div>
    ),
  },
  {
    accessorKey: "gender",
    header: "Gender",
    cell: ({ row }) => (
      <div className="text-sm px-2 whitespace-normal">
        {row.original.gender}
      </div>
    ),
  },
  {
    accessorKey: "age",
    header: "Age",
    cell: ({ row }) => (
      <div className="text-sm px-2 whitespace-normal">
        {row.original.age}
      </div>
    ),
  },
  {
    accessorKey: "bio",
    header: "Bio",
    cell: ({ row }) => (
      <div className="text-sm px-2 whitespace-normal">
        {row.original.bio}
      </div>
    ),
  },
  {
    accessorKey: "photo",
    header: "Photo",
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