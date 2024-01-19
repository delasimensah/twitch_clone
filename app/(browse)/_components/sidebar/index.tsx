import { Wrapper } from "./wrapper";
import { Toggle } from "./toggle";
import { Following } from "./following";
import { Recommended } from "./recommended";

import { getRecommended } from "@/lib/services/recommended-service";
import { getFollowedUsers } from "@/lib/services/follow-service";

export const Sidebar = async () => {
  const recommended = await getRecommended();
  const following = await getFollowedUsers();

  return (
    <Wrapper>
      <Toggle />

      <div className="space-y-4 pt-4 lg:pt-0">
        <Following data={following} />

        <Recommended data={recommended} />
      </div>
    </Wrapper>
  );
};
