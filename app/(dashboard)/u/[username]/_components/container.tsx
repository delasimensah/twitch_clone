"use client";

import { useEffect, ReactNode } from "react";
import { useMediaQuery } from "usehooks-ts";

import { useCreatorSidebar } from "@/hooks/store/use-creator-sidebar";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  const { collapsed, onCollapse, onExpand } = useCreatorSidebar(
    (state) => state
  );
  const matches = useMediaQuery(`(max-width: 1024px)`);

  useEffect(() => {
    if (matches) {
      onCollapse();
    } else {
      onExpand();
    }
  }, [matches, onCollapse, onExpand]);

  return (
    <div
      className={cn("flex-1", collapsed ? "ml-[70px]" : "ml-[70px] lg:ml-60")}
    >
      {children}
    </div>
  );
};
