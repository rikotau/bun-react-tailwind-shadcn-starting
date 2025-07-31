import "@/public/styles/globals.css";
import { ProfileCard } from "./components/shared";
import { profileData } from "./data";

export function App() {

  return (
    <div className="text-center">
      <ProfileCard
        name={profileData.name}
        description={profileData.description}
        image={profileData.image}
        socialMedia={profileData.socialMedia}
      />
    </div>
  );
}

export default App;
