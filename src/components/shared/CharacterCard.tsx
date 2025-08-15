import { Card, CardTitle, Skeleton } from '@/components/ui'
import type { CharacterCardProps } from '@/interfaces'

export const CharacterCard = ({ characters, loading }: CharacterCardProps) => {
  const getSkeletonCount = () => {
    if (window.innerWidth >= 1024) return 10
    if (window.innerWidth >= 768) return 6
    return 2
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {[...Array(getSkeletonCount())].map((_, index) => (
          <Card key={index} className="flex flex-col p-4 gap-2 min-w-44">
            <Skeleton className="h-48 rounded-lg" />
            <Skeleton className="h-3 w-1/2 mt-2 mx-auto" />
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div>
      {characters.length === 0 ? (
        <p className="text-center">Character Not Found...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {characters.map((character) => (
            <Card className="flex flex-col p-4 gap-2" key={character.id}>
              <img
                src={character.image}
                alt={character.name}
                className="h-80 md:h-48 object-contain"
              />
              <CardTitle>{character.name}</CardTitle>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
