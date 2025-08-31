import type { DragonballItem } from "./";

export interface CharacterProps {
  characters: DragonballItem[];
  isLoading: boolean
  page: number
  totalPages: number
  setPage: (page: number) => void
  limit: number
}

export type CharProps = {
  name: string
  page: number
  limit: number
}