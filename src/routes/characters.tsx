import { ButtonTheme, CharacterCard, SearchBar } from '@/components/shared'
import { UseCharacters } from '@/hooks'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/characters')({
  component: Characters,
})

function Characters() {
  const { filteredCharacters, search, setSearch, loading } = UseCharacters()
  
  return (
      <div className="grid text-center m-10 gap-2">
        <div className="grid gap-2 md:grid-cols-2">
          <ButtonTheme/>
          <SearchBar input={search} onChange={setSearch}/>
        </div>
        <CharacterCard characters={filteredCharacters} loading={loading}/>
      </div>
  )
}