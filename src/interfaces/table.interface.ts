import type { ColumnDef } from "@tanstack/react-table"

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export interface DragonballTableRow {
  id: number | React.ReactNode
  name: string | React.ReactNode
  ki: number | React.ReactNode
  image: string | React.ReactNode
}

export interface UsersTableRow {
  id: number | React.ReactNode
  name: string | React.ReactNode
  email: string | React.ReactNode
  role: string | React.ReactNode
  gender: string | React.ReactNode
  age: number | React.ReactNode
  bio: string | React.ReactNode
  image: string | React.ReactNode
}
