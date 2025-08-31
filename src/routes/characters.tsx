import { ButtonTheme, DragonballTable, SearchBar } from '@/components/shared'
import { useDragonballCharacters } from '@/hooks'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useDragonballCharSearch } from '@/hooks'

export const Route = createFileRoute('/characters')({
  component: Characters,
  validateSearch: (search) => ({
    name: (search.name as string) ?? '',
    page: search.page !== undefined ? Number(search.page) : 1,
    limit: search.limit !== undefined ? Number(search.limit) : 10,
}),
})

function Characters() {
  const { name, page, limit, update } = useDragonballCharSearch()
  const navigate = useNavigate()

  const { characters, isLoading, totalPages } = useDragonballCharacters({ name, page, limit })


  return (
    <div className="grid m-10 gap-2 text-center">
      <div className="grid gap-2 md:grid-cols-2">
        <ButtonTheme/>
        <SearchBar
          input={name}
          onChange={(value) =>
            navigate({
            to: Route.fullPath,
            search: (prev) => ({
                  ...prev,
                  name: value,
                  page: 1,
              limit: prev.limit ?? 10,
            }),
          })
          }
        />
      </div>
      <DragonballTable 
        characters={characters}
        isLoading={isLoading}
        page={page}
        totalPages={totalPages}
        setPage={(newPage) => update({ page: newPage })}
        limit={limit}
      />
    </div>
  )
}
