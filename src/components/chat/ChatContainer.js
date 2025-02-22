"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AutosizeTextarea } from "@/components/ui/autotextarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

export default function ChatContainer({input, handleInputChange, handleSubmit}) {

  return (
    <div className="h-[76px] py-2 px-4 w-full max-w-3xl mx-auto flex gap-2">
      <form className="relative w-full" onSubmit={handleSubmit}>
        <AutosizeTextarea
          placeholder="Type your message here."
          maxHeight={200}
          className="rounded-xl  pr-14 border-2 border-orange-500 absolute bottom-0"
          value={input}
          onChange={handleInputChange}
        />

        <Button
          size="icon"
          className="rounded-full bg-orange-500 min-w-[40px] absolute right-2.5 bottom-2"
        >
          <Send className="h-3 w-3" />
        </Button>
      </form>
    </div>
  );
}
