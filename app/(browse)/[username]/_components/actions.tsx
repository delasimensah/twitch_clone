"use client";

import { useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import { onFollow, onUnfollow } from "@/actions/follow";

type ActionsProps = {
  isFollowing: boolean;
  userId: string;
};

export const Actions = (props: ActionsProps) => {
  const { isFollowing, userId } = props;

  const [isPending, startTransition] = useTransition();

  const handleFollow = () => {
    startTransition(() => {
      onFollow(userId)
        .then((data) =>
          toast.success(`You are now following ${data.following.username}`)
        )
        .catch(() => toast.error("Something went wrong"));
    });
  };

  const handleUnfollow = () => {
    startTransition(() => {
      onUnfollow(userId)
        .then((data) =>
          toast.success(`You have unfollowed ${data.following.username}`)
        )
        .catch(() => toast.error("Something went wrong"));
    });
  };

  const handleFollowing = () => {
    if (isFollowing) {
      handleUnfollow();
    } else {
      handleFollow();
    }
  };

  return (
    <Button disabled={isPending} onClick={handleFollowing} variant="primary">
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
};
