"use client";
import { AlarmClock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLocaleContext } from "@/contexts/LocaleContext";

interface AutomationsEmptyStateProps {
	workspaceId: number;
	canCreate: boolean;
}

/** Zero-state for recurring research and destination intelligence monitoring. */
export function AutomationsEmptyState({ workspaceId, canCreate }: AutomationsEmptyStateProps) {
	const { locale } = useLocaleContext();
	const isChinese = locale === "zh";

	return (
		<div className="rounded-lg border border-dashed border-border/60 bg-muted/20 px-6 py-12 text-center">
			<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
				<AlarmClock className="h-6 w-6" aria-hidden />
			</div>
			<h3 className="mt-4 text-base font-semibold text-foreground">
				{isChinese ? "还没有自动化研究" : "No research automations yet"}
			</h3>
			<p className="mt-1 text-sm text-muted-foreground max-w-md mx-auto">
				{isChinese
					? "让 TripInsight 定期检查目的地开放信息、预约政策、交通或游客趋势，并生成可追溯的情报摘要。"
					: "Let TripInsight periodically check destination updates, reservation policies, transport, or traveler trends and produce sourced intelligence briefs."}
			</p>
			{canCreate ? (
				<div className="mt-6 flex items-center justify-center gap-2 flex-wrap">
					<Button asChild>
						<Link href={`/dashboard/${workspaceId}/new-chat`}>
							{isChinese ? "让 AI 创建" : "Create with AI"}
						</Link>
					</Button>
					<Button
						asChild
						variant="ghost"
						className="h-10 justify-start rounded-md bg-muted px-3 text-sm hover:bg-accent"
					>
						<Link href={`/dashboard/${workspaceId}/automations/new`}>
							{isChinese ? "手动创建" : "Create manually"}
						</Link>
					</Button>
				</div>
			) : (
				<p className="mt-6 text-xs text-muted-foreground">
					{isChinese
						? "你没有在当前研究空间创建自动化的权限。"
						: "You don't have permission to create automations in this workspace."}
				</p>
			)}
		</div>
	);
}
