import { ChatHeaderSkeleton } from "./chat-header-skeleton";
import { ChatListSkeleton } from "./chat-list-skeleton";
import { ChatFormSkeleton } from "./chat-form-skeleton";

export const ChatSkeleton = () => {
  return (
    <div className="flex flex-col border-l border-b pt-0 h-[calc(100vh-80px)] border-2">
      <ChatHeaderSkeleton />

      <ChatListSkeleton />

      <ChatFormSkeleton />
    </div>
  );
};
