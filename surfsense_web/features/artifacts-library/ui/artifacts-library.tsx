"use client";

import { FileText, RefreshCw, TriangleAlert } from "lucide-react";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { useLocaleContext } from "@/contexts/LocaleContext";
import { artifactChatHref } from "@/features/chat-artifacts/lib/artifact-deep-link";
import { useLibraryArtifacts } from "../hooks/use-library-artifacts";
import { useLibraryDeliverableJobs } from "../hooks/use-library-deliverable-jobs";
import { useLibraryPodcastRuns } from "../hooks/use-library-podcast-runs";
import { useLibraryVideoRuns } from "../hooks/use-library-video-runs";
import { ArtifactCard } from "./artifact-card";

const SKELETON_KEYS = ["s1", "s2", "s3", "s4", "s5", "s6"];

function LoadingState() {
	return (
		<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
			{SKELETON_KEYS.map((key) => (
				<div key={key} className="h-28 animate-pulse rounded-xl border bg-muted/40" />
			))}
		</div>
	);
}

function ErrorState({ onRetry }: { onRetry: () => void }) {
	const { locale } = useLocaleContext();
	const isChinese = locale === "zh";

	return (
		<div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed py-20 text-center">
			<span className="flex size-12 items-center justify-center rounded-full bg-destructive/10 text-destructive">
				<TriangleAlert className="size-6" />
			</span>
			<div>
				<p className="font-medium text-foreground">
					{isChinese ? "研究成果加载失败" : "Couldn't load research outputs"}
				</p>
				<p className="mt-1 text-sm text-muted-foreground">
					{isChinese
						? "获取当前研究空间的成果时出现问题。"
						: "Something went wrong fetching this workspace's research outputs."}
				</p>
			</div>
			<Button variant="outline" size="sm" onClick={onRetry}>
				<RefreshCw className="size-4" />
				{isChinese ? "重试" : "Retry"}
			</Button>
		</div>
	);
}

function EmptyState() {
	const { locale } = useLocaleContext();
	const isChinese = locale === "zh";

	return (
		<div className="rounded-lg border border-dashed border-border/60 bg-muted/20 px-6 py-12 text-center">
			<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
				<FileText className="h-6 w-6" aria-hidden />
			</div>
			<h3 className="mt-4 text-base font-semibold text-foreground">
				{isChinese ? "还没有研究报告" : "No research reports yet"}
			</h3>
			<p className="mt-1 text-sm text-muted-foreground max-w-md mx-auto">
				{isChinese
					? "研究过程中生成的报告、演示和其他可交付成果会沉淀在这里，并保留与原研究记录的关联。"
					: "Reports, presentations, and other deliverables generated during research will appear here and stay linked to their source research."}
			</p>
		</div>
	);
}

export function ArtifactsLibrary({ workspaceId }: { workspaceId: number }) {
	const { locale } = useLocaleContext();
	const isChinese = locale === "zh";
	const { artifacts, loading, error, refresh } = useLibraryArtifacts(workspaceId);
	const liveVideoRuns = useLibraryVideoRuns(workspaceId);
	const livePodcastRuns = useLibraryPodcastRuns(workspaceId);
	const liveDeliverableJobs = useLibraryDeliverableJobs(workspaceId);

	// Delivered media comes from the Artifact API (react-query); in-flight and
	// failed runs arrive by push from Zero. Merge newest-first.
	const merged = useMemo(
		() =>
			[...artifacts, ...liveVideoRuns, ...livePodcastRuns, ...liveDeliverableJobs].sort(
				(a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
			),
		[artifacts, liveVideoRuns, livePodcastRuns, liveDeliverableJobs]
	);

	return (
		<div className="w-full min-w-0 max-w-full space-y-6 overflow-x-hidden">
			<header className="flex items-start justify-between gap-4 flex-wrap">
				<div>
					<div className="flex items-baseline gap-3">
						<h1 className="text-xl md:text-2xl font-semibold text-foreground">
							{isChinese ? "研究报告" : "Research Reports"}
						</h1>
						{!loading && merged.length > 0 ? (
							<p className="whitespace-nowrap text-sm text-muted-foreground">
								{isChinese
									? `${merged.length} 项成果`
									: `${merged.length} ${merged.length === 1 ? "output" : "outputs"}`}
							</p>
						) : null}
					</div>
					<p className="mt-1.5 text-sm text-muted-foreground">
						{isChinese
							? "集中查看目的地研究生成的报告和可交付成果。"
							: "Review reports and deliverables generated from destination research."}
					</p>
				</div>
			</header>

			{loading ? (
				<LoadingState />
			) : error ? (
				<ErrorState onRetry={() => refresh()} />
			) : merged.length === 0 ? (
				<EmptyState />
			) : (
				<div className="grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-3">
					{merged.map((artifact) => (
						<ArtifactCard
							key={artifact.key}
							artifact={artifact}
							href={artifactChatHref(workspaceId, artifact.sourceThreadId, artifact.artifactId)}
						/>
					))}
				</div>
			)}
		</div>
	);
}
