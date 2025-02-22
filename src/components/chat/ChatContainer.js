"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AutosizeTextarea } from "@/components/ui/autotextarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { useState } from "react";

export default function ChatContainer({ handleSubmit }) {
  const [input, setInput] = useState("")
  return (
    <div className="h-[76px] py-2 px-4 w-full max-w-3xl mx-auto flex gap-2">
      <div className="relative w-full" >
        <AutosizeTextarea
          placeholder="Type your message here."
          maxHeight={200}
          className="rounded-xl  pr-14 border-2 border-orange-500 absolute bottom-0"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <Button
          size="icon"
          className="rounded-full bg-orange-500 min-w-[40px] absolute right-2.5 bottom-2" onClick={() => handleSubmit(input)}
        >
          <Send className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
}
