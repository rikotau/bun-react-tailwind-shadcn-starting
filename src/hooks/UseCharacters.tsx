import type { Character } from "@/interfaces"
import { useEffect, useMemo, useState } from "react"



export const UseCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [search, setSearch] = useState("")  
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters")
    .then((res) => res.json())
    .then((data) => {
      setCharacters(data.items.map((item) => ({
        id: item.id,
        name: item.name,
        image: item.image,
      })))
      setLoading(false)
    })
  },[])
  
  const filteredCharacters = useMemo(() => {
      return characters
        .filter((character) => character.name.toLowerCase().includes(search.toLowerCase()))
    },[characters, search])

  return { filteredCharacters, search, setSearch, loading }
}
