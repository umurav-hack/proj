"use client";
import { ArrowUpIcon, BriefcaseBusinessIcon, ListIcon } from "lucide-react";
import {
  Attachment,
  AttachmentPreview,
  AttachmentRemove,
  Attachments,
} from "@/components/ai-elements/attachments";
import {
  PromptInput,
  PromptInputActionAddAttachments,
  PromptInputActionMenu,
  PromptInputActionMenuContent,
  PromptInputActionMenuTrigger,
  PromptInputBody,
  PromptInputButton,
  PromptInputFooter,
  PromptInputHeader,
  type PromptInputMessage,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
  usePromptInputAttachments,
} from "@/components/ai-elements/prompt-input";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PromptInputAttachmentsDisplay = () => {
  const attachments = usePromptInputAttachments();
  if (attachments.files.length === 0) {
    return null;
  }
  return (
    <Attachments variant="inline">
      {attachments.files.map((attachment) => (
        <Attachment
          data={attachment}
          key={attachment.id}
          onRemove={() => attachments.remove(attachment.id)}
        >
          <AttachmentPreview />
          <AttachmentRemove />
        </Attachment>
      ))}
    </Attachments>
  );
};

export default function ChatInput({
  handleSubmit,
  isSubmitting,
  isSubmitDisabled,

  text,
  setText,
}: {
  handleSubmit: (message: PromptInputMessage) => void;
  isSubmitting: boolean;
  isSubmitDisabled: boolean;
  text: string;
  setText: (text: string) => void;
}) {
  return (
    <PromptInput
      className="relative z-10 overflow-hidden rounded-2xl border border-foreground/20 bg-white shadow-none dark:bg-[#232323]"
      globalDrop
      InputClassName="rounded-2xl  shadow-none border-0 "
      multiple
      onSubmit={handleSubmit}
    >
      <PromptInputHeader>
        <PromptInputAttachmentsDisplay />
      </PromptInputHeader>
      <PromptInputBody>
        <PromptInputTextarea
          className="min-h-0 text-base! shadow-none"
          disabled={isSubmitting}
          onChange={(e) => setText(e.target.value)}
          placeholder={"How can I help you today"}
          value={text}
        />
      </PromptInputBody>
      <PromptInputFooter>
        <PromptInputTools className="flex w-full">
          <PromptInputActionMenu>
            <PromptInputActionMenuTrigger
              className="rounded-full text-foreground [&_svg]:stroke-[1.7]"
              tooltip="Add file and more"
            />
            <PromptInputActionMenuContent className="flex min-w-max flex-col">
              <PromptInputActionAddAttachments
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "inline-flex justify-normal py-1.5! pr-8! pl-2.5! font-normal [&_svg]:stroke-[1.8]"
                )}
              />
              <PromptInputButton
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "inline-flex justify-normal gap-1.5 py-1.5! pr-8! pl-2.5! font-normal [&_svg]:stroke-[1.8]"
                )}
              >
                <BriefcaseBusinessIcon className="mr-2 size-4" />
                <span>Add job</span>
              </PromptInputButton>
              <PromptInputButton
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "inline-flex justify-normal gap-1.5 py-1.5! pr-8! pl-2.5! font-normal [&_svg]:stroke-[1.8]"
                )}
              >
                <ListIcon className="mr-2 size-4" />
                <span>Choose candidates</span>
              </PromptInputButton>
            </PromptInputActionMenuContent>
          </PromptInputActionMenu>
          {/* 
          {useWebSearch && (
            <Button
              className="group rounded-full font-normal text-blue-500 hover:bg-blue-50 hover:text-blue-500"
              onClick={() => setUseWebSearch(false)}
              variant={"ghost"}
            >
              <GlobeIcon className="group-hover:hidden" />
              <XIcon className="hidden group-hover:block" />
              Search
            </Button>
          )} */}
        </PromptInputTools>
        <PromptInputSubmit className="rounded-full" disabled={isSubmitDisabled}>
          <ArrowUpIcon className="size-4" />
        </PromptInputSubmit>
      </PromptInputFooter>
    </PromptInput>
  );
}
