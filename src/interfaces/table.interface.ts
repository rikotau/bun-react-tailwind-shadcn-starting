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
