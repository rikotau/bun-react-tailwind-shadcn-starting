export interface Character {
  id: string;
  name: string;
  image: string;
}

export interface CharacterCardProps {
  characters: Character[];
  loading: boolean;
}