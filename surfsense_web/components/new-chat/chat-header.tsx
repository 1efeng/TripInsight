"use client";

import { cn } from "@/lib/utils";
import { ModelSelector } from "./model-selector";

interface ChatHeaderProps {
	workspaceId: number;
	className?: string;
	onChatModelSelected?: () => void;
}

export function ChatHeader({ workspaceId, className, onChatModelSelected }: ChatHeaderProps) {
	const selectorClassName = cn(className, "sm:max-w-[180px] sm:min-w-0");

	return (
		<div className="flex min-w-0 shrink items-center gap-2 sm:max-w-[180px]">
			<ModelSelector
				workspaceId={workspaceId}
				className={selectorClassName}
				onChatModelSelected={onChatModelSelected}
			/>
		</div>
	);
}
