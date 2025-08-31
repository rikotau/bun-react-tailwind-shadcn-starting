import type { PaginationParams } from "@/interfaces";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Generate pagination range with ellipsis (...)
// Example: 1 ... 4 5 6 ... 20

export function getPaginationRange({
  totalPages,
  currentPage,
  siblingCount = 1,
}: PaginationParams): (number | "...")[] {
  const totalNumbers = siblingCount * 2 + 5

  if (totalPages <= totalNumbers) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  const leftSibling = Math.max(currentPage - siblingCount, 2) // minimal page 2
  const rightSibling = Math.min(currentPage + siblingCount, totalPages - 1) // maksimal sebelum last

  const showLeftEllipsis = leftSibling > 2
  const showRightEllipsis = rightSibling < totalPages - 1

  const range: (number | "...")[] = []

  range.push(1) // always first

  if (showLeftEllipsis) {
    range.push("...")
  }

  for (let i = leftSibling; i <= rightSibling; i++) {
    range.push(i)
  }

  if (showRightEllipsis) {
    range.push("...")
  }

  range.push(totalPages) // always last

  return range
}
