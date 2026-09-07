"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLocaleContext } from "@/contexts/LocaleContext";

interface AutomationsHeaderProps {
	workspaceId: number;
	total: number;
	loading: boolean;
	canCreate: boolean;
	/**
	 * Render the header's Create CTA. Defaults to true; the empty state owns
	 * the primary CTA on its own card, so the orchestrator turns this off
	 * there to avoid a duplicate button.
	 */
	showCreateCta?: boolean;
}

/**
 * Product-facing automation header. Internally this remains SurfSense's
 * automation runtime; TripInsight presents it as scheduled destination research
 * and intelligence monitoring rather than introducing a second workflow system.
 */
export function AutomationsHeader({
	workspaceId,
	total,
	loading,
	canCreate,
	showCreateCta = true,
}: AutomationsHeaderProps) {
	const { locale } = useLocaleContext();
	const isChinese = locale === "zh";

	return (
		<div className="flex items-start justify-between gap-4 flex-wrap">
			<div>
				<div className="flex items-baseline gap-3">
					<h1 className="text-xl md:text-2xl font-semibold text-foreground">
						{isChinese ? "自动化" : "Automations"}
					</h1>
					{!loading && (
						<span className="text-sm text-muted-foreground">
							{isChinese
								? `${total} 个任务`
								: `${total} ${total === 1 ? "automation" : "automations"}`}
						</span>
					)}
				</div>
				<p className="mt-1.5 max-w-xl text-sm text-muted-foreground">
					{isChinese
						? "定期执行目的地研究、变化检查和情报 Brief，让需要持续跟踪的信息自动更新。"
						: "Schedule destination research, change checks, and intelligence briefs so recurring research stays current."}
				</p>
			</div>
			{canCreate && showCreateCta && (
				<div className="flex items-center gap-2">
					<Button
						asChild
						size="sm"
						variant="ghost"
						className="justify-start rounded-md bg-muted px-3 hover:bg-accent"
					>
						<Link href={`/dashboard/${workspaceId}/automations/new`}>
							{isChinese ? "手动创建" : "Create manually"}
						</Link>
					</Button>
					<Button asChild size="sm">
						<Link href={`/dashboard/${workspaceId}/new-chat`}>
							{isChinese ? "让 AI 创建" : "Create with AI"}
						</Link>
					</Button>
				</div>
			)}
		</div>
	);
}
