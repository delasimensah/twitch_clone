"use client";

import { useTransition } from "react";
import { toast } from "sonner";

import { Switch } from "@/components/ui/switch";

import { updateStream } from "@/actions/stream";

type ToggleCardProps = {
  label: string;
  value: boolean;
  field: "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly";
};

export const ToggleCard = (props: ToggleCardProps) => {
  const { label, value = false, field } = props;

  const [isPending, startTransition] = useTransition();

  const handleChange = () => {
    startTransition(() => {
      updateStream({ [field]: !value })
        .then(() => toast.success("Chat settings updated!"))
        .catch(() => toast.error("Something went wrong"));
    });
  };

  return (
    <div className="rounded-xl bg-muted p-6">
      <div className="flex items-center justify-between">
        <p className="font-semibold shrink-0">{label}</p>

        <div className="space-y-2">
          <Switch
            disabled={isPending}
            onCheckedChange={handleChange}
            checked={value}
          >
            {value ? "On" : "Off"}
          </Switch>
        </div>
      </div>
    </div>
  );
};
