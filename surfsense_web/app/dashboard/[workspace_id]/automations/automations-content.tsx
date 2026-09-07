"use client";
import { AlertCircle, ShieldAlert } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useLocaleContext } from "@/contexts/LocaleContext";
import { useAutomations } from "@/hooks/use-automations";
import { AutomationsEmptyState } from "./components/automations-empty-state";
import { AutomationsHeader } from "./components/automations-header";
import { AutomationsTable } from "./components/automations-table";
import { useAutomationPermissions } from "./hooks/use-automation-permissions";

interface AutomationsContentProps {
	workspaceId: number;
}

/** Client orchestrator for the workspace automation list. */
export function AutomationsContent({ workspaceId }: AutomationsContentProps) {
	const { locale } = useLocaleContext();
	const isChinese = locale === "zh";
	const { automations, total, loading, error } = useAutomations();
	const perms = useAutomationPermissions();

	if (perms.loading) {
		return (
			<>
				<AutomationsHeader workspaceId={workspaceId} total={0} loading canCreate={false} />
				<AutomationsTable
					automations={[]}
					workspaceId={workspaceId}
					loading
					canUpdate={false}
					canDelete={false}
				/>
			</>
		);
	}

	if (!perms.canRead) {
		return (
			<div className="rounded-lg border border-border/60 bg-muted/20 px-6 py-12 text-center">
				<ShieldAlert className="mx-auto h-10 w-10 text-muted-foreground" aria-hidden />
				<h2 className="mt-3 text-base font-semibold text-foreground">
					{isChinese ? "无权访问" : "Access denied"}
				</h2>
				<p className="mt-1 text-sm text-muted-foreground max-w-md mx-auto">
					{isChinese
						? "你没有查看当前研究空间自动化任务的权限。"
						: "You don't have permission to view automations in this workspace."}
				</p>
			</div>
		);
	}

	if (error) {
		return (
			<>
				<AutomationsHeader
					workspaceId={workspaceId}
					total={0}
					loading={false}
					canCreate={perms.canCreate}
				/>
				<Alert variant="destructive">
					<AlertCircle aria-hidden />
					<AlertDescription>
						{isChinese ? `自动化任务加载失败：${error.message}` : `Couldn't load automations: ${error.message}`}
					</AlertDescription>
				</Alert>
			</>
		);
	}

	if (!loading && automations.length === 0) {
		return (
			<>
				<AutomationsHeader
					workspaceId={workspaceId}
					total={0}
					loading={false}
					canCreate={perms.canCreate}
					showCreateCta={false}
				/>
				<AutomationsEmptyState workspaceId={workspaceId} canCreate={perms.canCreate} />
			</>
		);
	}

	return (
		<>
			<AutomationsHeader
				workspaceId={workspaceId}
				total={total}
				loading={loading}
				canCreate={perms.canCreate}
			/>
			<AutomationsTable
				automations={automations}
				workspaceId={workspaceId}
				loading={loading}
				canUpdate={perms.canUpdate}
				canDelete={perms.canDelete}
			/>
		</>
	);
}
