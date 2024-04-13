import { Hint } from "@/components/hint";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AvatarProps {
  src?: string;
  name?: string;
  fallBack?: string;
  borderColor?: string;
}

export const UserAvatar = ({
  src,
  name,
  fallBack,
  borderColor,
}: AvatarProps) => {
  return (
    <Hint label={name || "Teammate"} side="bottom" sideOffset={18}>
      <Avatar className="h-8 w-8 border-2" style={{ borderColor }}>
        <AvatarImage src={src} />
        <AvatarFallback className="text-sm font-semibold">
          {fallBack}
        </AvatarFallback>
      </Avatar>
    </Hint>
  );
};
