import { notFound } from "next/navigation";

import { Actions } from "./_components/actions";

import { getUserByUsername } from "@/lib/services/user-service";
import { isFollowingUser } from "@/lib/services/follow-service";

type UserPageProps = {
  params: {
    username: string;
  };
};

const UserPage = async ({ params }: UserPageProps) => {
  const user = await getUserByUsername(params.username);

  if (!user) {
    notFound();
  }

  const isFollowing = await isFollowingUser(user.id);

  // check is following
  return (
    <div className="flex flex-col gap-y-4">
      <p>username: {user.username}</p>
      <p>user ID: {user.id}</p>
      <p>is following: {`${isFollowing}`}</p>
      <Actions userId={user.id} isFollowing={isFollowing} />
    </div>
  );
};

export default UserPage;
