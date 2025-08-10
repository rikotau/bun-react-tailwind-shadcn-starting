import {
    Avatar, AvatarFallback, AvatarImage,
    Card, CardContent, CardDescription, CardHeader, CardTitle,
    Button
 } from "@/components/ui"
import type { ProfileData } from "@/interfaces"
import { DynamicIcon } from 'lucide-react/dynamic';

const iconMap = {
  github: "github",
  linkedin: "linkedin",
};

export const ProfileCard = ({
    name,
    description,
    image,
    socialMedia,
}: ProfileData) => {
  return (
    <Card className="flex flex-col md:flex-row items-center p-4 gap-4">
        <Avatar className="size-20">
            <AvatarImage src={image} alt="@riko"/>
            <AvatarFallback>RI</AvatarFallback>
        </Avatar>
        <CardContent className="text-center p-0 md:text-left space-y-1">
            <CardHeader className="p-2 pb-0">
                <CardTitle>
                    {name}
                </CardTitle>
            </CardHeader>
            <CardDescription className="p-2 pt-0">
                {description}
            </CardDescription>
            {socialMedia.map((social) => {
              
            const name = social.name.toLowerCase();
            const iconName = iconMap[name];

                return (
                <Button asChild key={social.name} className="m-1" variant="outline">
                    <a href={social.url} target="_blank" className="inline-flex items-center gap-2">
                        {iconName && <DynamicIcon name={iconName} />}
                        {social.name}
                    </a>
                </Button>
            )
            })}
        </CardContent>
    </Card>
  )
}



