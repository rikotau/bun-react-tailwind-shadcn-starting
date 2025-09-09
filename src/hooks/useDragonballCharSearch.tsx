import { useNavigate, useSearch } from '@tanstack/react-router'
import { Route } from '@/routes/characters'
import type { CharProps } from '@/interfaces'

export function useDragonballCharSearch() {
  const search = useSearch({ from: Route.id })
  const navigate = useNavigate()

  const update = (newSearch: Partial<typeof search>) => {
  navigate({
    to: Route.fullPath,
    search: (prev: CharProps) => ({
      ...prev,
      ...newSearch,
    }),
  })
}

  return {
    ...search,
    update,
  }
}
