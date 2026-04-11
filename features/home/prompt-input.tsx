"use client";
import { useMemo, useState } from "react";
import type { PromptInputMessage } from "@/components/ai-elements/prompt-input";
import ChatInput from "./chat-input";

export function HomePromptInput() {
  const [text, setText] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (message: PromptInputMessage) => {
    try {
      setIsSubmitting(true);
      const hasText = Boolean(message.text);
      const hasAttachments = Boolean(message.files?.length);
      if (!(hasText || hasAttachments)) {
        return;
      }
      console.log("Submitting message:", message);
    } catch (error) {
      console.error("Error submitting message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  const isSubmitDisabled = useMemo(
    () => !(text.trim() || isSubmitting),
    [text, isSubmitting],
  );
  return (
    <div className="container mx-auto mb-10 max-w-160 lg:max-w-3xl">
      <ChatInput
        handleSubmit={handleSubmit}
        isSubmitDisabled={isSubmitDisabled}
        isSubmitting={isSubmitting}
        setText={setText}
        text={text}
      />
    </div>
  );
}
