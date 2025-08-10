import type { ProfileData } from "@/interfaces"
import profilePicture from "@/public/images/profile-picture.jpg"

export const profileData: ProfileData = {
    name: "Riko Taufiqurrohman",
    description: "Livelong learner.",
    image: profilePicture,
    socialMedia: [
        {
            "name": "LinkedIn",
            "url": "https://www.linkedin.com/in/rikotau/"
        },
        {
            "name": "GitHub",
            "url": "https://www.github.com/rikotau/"
        },
    ],
}