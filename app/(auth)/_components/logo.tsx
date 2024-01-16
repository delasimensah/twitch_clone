import Image from "next/image";

import { cn } from "@/lib/utils";
import { poppins } from "@/lib/fonts";

export const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="bg-white rounded-full p-1">
        <Image src="/spooky.svg" alt="twitch-clone" height="80" width="80" />
      </div>

      <div className={cn("flex flex-col items-center", poppins.className)}>
        <p className="text-xl font-semibold">Twitch Clone</p>

        <p className="text-sm text-muted-foreground">Let&apos; play</p>
      </div>
    </div>
  );
};
