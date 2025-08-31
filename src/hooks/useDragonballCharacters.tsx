import type { DragonballResponse } from "@/types"
import { api } from "@/lib"
import { useQuery } from "@tanstack/react-query"
import type { CharProps, DragonballItem } from "@/interfaces"
import { useMemo } from "react"

export const useDragonballCharacters = ({ name, page, limit }: CharProps) => {
  
  const getDragonballData = async (): Promise<DragonballResponse> => {
    const res = await api.get<DragonballResponse>("/characters", {
      params: {
        page,
        limit,
        ...(name && name.trim() ? { name } : {}),
      },
    })
    return res.data
  }

  const { data, isLoading, isError, error } = useQuery<DragonballResponse>({
    queryKey: ["characters", name, page, limit],
    queryFn: getDragonballData,
  })

  const characters: DragonballItem[] = Array.isArray(data)
    ? data
    : data?.items ?? []

  const totalPages = Array.isArray(data)
    ? 1 
    : data?.meta?.totalPages ?? 0

  const pages = useMemo(() => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }
    const first = 1
    const last = totalPages
    const siblings = [page - 1, page, page + 1].filter(
      (p) => p > first && p < last
    )
    const pagesArr = [first]
    if (siblings[0] > first + 1) pagesArr.push(-1)
    pagesArr.push(...siblings)
    if (siblings[siblings.length - 1] < last - 1) pagesArr.push(-2)
    pagesArr.push(last)
    return pagesArr
  }, [page, totalPages])

  return {
    characters,
    isLoading,
    isError,
    error,
    page,
    limit,
    totalPages,
    pages,
  }
}
