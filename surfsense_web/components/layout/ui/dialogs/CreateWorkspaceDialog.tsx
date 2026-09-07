"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useAtomValue } from "jotai";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { createWorkspaceMutationAtom } from "@/atoms/workspaces/workspace-mutation.atoms";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { useLocaleContext } from "@/contexts/LocaleContext";
import { cacheKeys } from "@/lib/query-client/cache-keys";
import { queryClient } from "@/lib/query-client/client";

const formSchema = z.object({
	name: z.string().min(1, "请输入研究空间名称"),
	description: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface CreateWorkspaceDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export function CreateWorkspaceDialog({ open, onOpenChange }: CreateWorkspaceDialogProps) {
	const t = useTranslations("workspace");
	const tCommon = useTranslations("common");
	const { locale } = useLocaleContext();
	const isChinese = locale === "zh";
	const router = useRouter();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const { mutateAsync: createWorkspace } = useAtomValue(createWorkspaceMutationAtom);

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			description: "",
		},
	});

	const handleSubmit = async (values: FormValues) => {
		setIsSubmitting(true);
		try {
			const result = await createWorkspace({
				name: values.name,
				description: values.description || "",
			});

			// workspace_created is now emitted server-side (workspaces_routes.py)
			// so PAT/MCP-created workspaces are also counted.

			// Seed the gate's query so it resolves without a loader flash, and
			// route straight to onboarding vs. new-chat on the first hop.
			if (result.llm_setup) {
				queryClient.setQueryData(
					cacheKeys.modelConnections.setupStatus(result.id),
					result.llm_setup
				);
			}
			const isInitialSetup = result.llm_setup?.stage === "initial_setup";
			router.push(
				isInitialSetup ? `/dashboard/${result.id}/onboard` : `/dashboard/${result.id}/new-chat`
			);
		} catch (error) {
			console.error("Failed to create workspace:", error);
			toast.error(
				error instanceof Error
					? error.message
					: isChinese
						? "创建研究空间失败"
						: "Failed to create workspace"
			);
			setIsSubmitting(false);
		}
	};

	const handleOpenChange = (newOpen: boolean) => {
		if (!newOpen) {
			form.reset();
		}
		onOpenChange(newOpen);
	};

	return (
		<Dialog open={open} onOpenChange={handleOpenChange}>
			<DialogContent className="max-w-[90vw] sm:max-w-sm p-4 sm:p-5 select-none data-[state=open]:animate-none data-[state=closed]:animate-none">
				<DialogHeader className="space-y-2 pb-2">
					<div className="flex items-center gap-2 sm:gap-3">
						<div className="flex-1 min-w-0">
							<DialogTitle className="text-base sm:text-lg">
								{isChinese ? "创建研究空间" : t("create_title")}
							</DialogTitle>
							<DialogDescription className="text-xs sm:text-sm mt-0.5">
								{isChinese
									? "按目的地、市场或专题组织知识、数据源与研究记录。"
									: t("create_description")}
							</DialogDescription>
						</div>
					</div>
				</DialogHeader>

				<Form {...form}>
					<form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-3 sm:gap-4">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-sm">{t("name_label")}</FormLabel>
									<FormControl>
										<Input
											placeholder={isChinese ? "例如：日本目的地研究" : t("name_placeholder")}
											{...field}
											autoFocus
											className="text-sm h-9 sm:h-10 select-text"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="description"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-sm">
										{t("description_label")}{" "}
										<span className="text-muted-foreground font-normal">
											({tCommon("optional")})
										</span>
									</FormLabel>
									<FormControl>
										<Input
											placeholder={
												isChinese
													? "例如：沉淀日本目的地资料、游客反馈与周期研究"
													: t("description_placeholder")
											}
											{...field}
											className="text-sm h-9 sm:h-10 select-text"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<DialogFooter className="flex-row justify-end pt-2 sm:pt-3">
							<Button
								type="button"
								variant="secondary"
								onClick={() => handleOpenChange(false)}
								disabled={isSubmitting}
								className="h-8 sm:h-9 text-xs sm:text-sm"
							>
								{tCommon("cancel")}
							</Button>
							<Button
								type="submit"
								disabled={isSubmitting}
								className="h-8 sm:h-9 text-xs sm:text-sm relative"
							>
								<span className={isSubmitting ? "opacity-0" : ""}>
									{isChinese ? "创建研究空间" : t("create_button")}
								</span>
								{isSubmitting && <Spinner size="sm" className="absolute" />}
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
