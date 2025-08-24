import type { DragonballData, DragonballItem } from "@/interfaces"
import { api } from "@/lib"
import { useEffect, useMemo, useState } from "react"



export const UseCharacters = () => {
  const [dragonball, setDragonball] = useState<DragonballData | null>(null)
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)

  const getDragonballData = async (): Promise<DragonballData | null> => {
    try {
      const res =await api.get<DragonballData>("/characters")
      const dragonballData = res.data
      if (dragonballData) {
        setDragonball(dragonballData);
      }
    } catch (error) {
      console.error("Error fetching Dragon Ball data: ", error);
    } finally {
      setLoading(false)
    }
    return null;
  }
  
useEffect(() => {
  getDragonballData();
}, [])

  const characters: DragonballItem[] = dragonball?.items ?? []
  
  const filteredCharacters = useMemo(() => {
    return characters
      .filter((character) => character.name.toLowerCase().includes(search.toLowerCase()))
    }, [characters, search])

  return { filteredCharacters, search, setSearch, loading }
}
