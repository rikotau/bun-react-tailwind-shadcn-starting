import { UseCharacters } from "@/hooks";
import { ButtonTheme, SearchBar, CharacterCard, Counter } from "@/components/shared";
import "@/public/styles/globals.css";

export function App() {    
      const { filteredCharacters, search, setSearch, loading } = UseCharacters()

  return (
    <div className="grid text-center m-10 gap-2">
      <div className="grid gap-2 md:grid-cols-2">
        <ButtonTheme/>
        <SearchBar input={search} onChange={setSearch}/>
      </div>
      <CharacterCard characters={filteredCharacters} loading={loading}/>
      <div className="md:min-w-1/2 md:mx-auto mt-10">
        <Counter/>
      </div>
    </div>
  );
}

export default App;
