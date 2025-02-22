"use client";

import ChatContainer from "@/components/chat/ChatContainer";
import Timeline from "@/components/timeline/Timeline";
import { useChat } from "@ai-sdk/react";


export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/generate"
  });

  return (
    <main className="flex min-h-screen w-full h-full flex-col">
      <div className="w-full border-b h-16 flex items-center px-4">
        <h1 className="text-4xl font-bold text-center">nViz.ai</h1>
      </div>
      <div className="flex h-[calc(100vh-140px)] w-full">
        <Timeline messages={messages} />
      </div>
      <div className="">
        <ChatContainer handleSubmit={handleSubmit} input={input} handleInputChange={handleInputChange} />
      </div>
    </main>
  );
}
