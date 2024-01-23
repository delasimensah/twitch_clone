import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { poppins } from "@/lib/fonts";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-4 hover:opacity-75 transition">
        <div className="bg-white rounded-full p-1 mr-12 shrink-0 lg:mr-0 lg:shrink">
          <Image src="/spooky.svg" alt="twitch-clone" height="32" width="32" />
        </div>

        <div className={cn("hidden lg:block", poppins.className)}>
          <p className="text-lg font-semibold">Twitch Clone</p>

          <p className="text-xs text-muted-foreground">Creator dashboard</p>
        </div>
      </div>
    </Link>
  );
};
