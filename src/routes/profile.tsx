import { ProfileCard } from '@/components/shared'
import { profileData } from '@/data'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile')({
  component: Profile,
})

function Profile() {
  return (
      <div className="max-w-fit mx-auto min-h-screen">
        <ProfileCard
          name={profileData.name}
          description={profileData.description}
          image={profileData.image}
          socialMedia={profileData.socialMedia}
        />
      </div>
  )
}