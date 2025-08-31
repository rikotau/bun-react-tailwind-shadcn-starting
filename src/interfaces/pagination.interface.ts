export interface PaginationParams {
  totalPages: number
  currentPage: number
  siblingCount?: number
}

export interface CustomPaginationProps {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
}