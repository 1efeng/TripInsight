"use client";

import type React from "react";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import enMessages from "../messages/en.json";
import zhMessages from "../messages/zh.json";

type Locale = "en" | "es" | "pt" | "hi" | "zh" | "ko";

/**
 * Keep SurfSense's complete Chinese translation as the upstream baseline, then
 * overlay the vocabulary that defines TripInsight as a travel-research product.
 * This avoids duplicating the large locale file and keeps future upstream syncs
 * manageable.
 */
const tripInsightZhMessages: typeof enMessages = {
	...zhMessages,
	common: {
		...zhMessages.common,
		app_name: "TripInsight",
	},
	auth: {
		...zhMessages.auth,
		register_subtitle: "注册以开始使用 TripInsight",
		cloud_dev_notice: "TripInsight 云版本正在开发中。查看",
	},
	workspace: {
		...zhMessages.workspace,
		create_title: "创建研究空间",
		create_description: "创建研究空间，按目的地、市场或专题组织知识、数据源与研究记录",
		name_placeholder: "例如：日本目的地研究",
		description_placeholder: "这个研究空间要解决什么研究问题？",
		all_workspaces: "所有研究空间",
		no_workspaces: "暂无研究空间",
		create_first_workspace: "创建第一个研究空间以开始目的地研究",
		create_new_workspace: "创建研究空间",
		delete_title: "删除研究空间",
		leave_title: "退出研究空间",
		welcome_title: "开始你的第一次目的地研究",
		welcome_description: "创建研究空间，连接知识与实时数据，沉淀目的地研究和游客洞察。",
		create_first_button: "创建研究空间",
	},
	dashboard: {
		...zhMessages.dashboard,
		title: "研究工作台",
		workspaces: "研究空间",
		documents: "知识库",
		connectors: "数据源",
		chat: "研究",
		no_recent_chats: "暂无最近研究",
		error_loading_space: "加载研究空间失败",
		unknown_workspace: "未知研究空间",
		delete_chat: "删除研究记录",
		delete_workspace: "删除研究空间",
		no_spaces_found: "未找到研究空间",
		create_first_space: "创建第一个研究空间以开始目的地研究",
		your_workspaces: "你的研究空间",
		create_workspace: "创建研究空间",
		add_new_workspace: "添加研究空间",
		surfsense_dashboard: "TripInsight 研究工作台",
		welcome_message: "欢迎来到 TripInsight 研究工作台。",
	},
	nav_menu: {
		...zhMessages.nav_menu,
		chat: "研究",
		sources: "数据源",
		documents: "知识库",
		manage_documents: "管理知识库",
		connectors: "数据源",
		manage_connectors: "管理数据源",
		all_workspaces: "所有研究空间",
	},
	connectors: {
		...zhMessages.connectors,
		title: "数据源",
		subtitle: "管理用于目的地研究的外部服务和实时数据源。",
		add_connector: "添加数据源",
		your_connectors: "已连接的数据源",
		no_connectors: "暂无数据源",
		no_connectors_desc: "连接公开网络、协作工具或业务数据，让研究拥有更完整的证据。",
		add_first: "添加第一个数据源",
	},
	documents: {
		...zhMessages.documents,
		title: "知识库",
		subtitle: "管理攻略、目的地资料、运营文档与历史研究成果。",
		no_documents: "知识库暂无内容",
		empty_upload_files: "上传资料以开始构建旅游知识库",
		search_root: "知识库",
		search_documents: "搜索知识库",
		upload_documents: "上传资料",
	},
	sidebar: {
		...zhMessages.sidebar,
		recents: "最近研究",
		chats: "研究记录",
		shared_chats: "共享研究",
		search_chats: "搜索研究记录...",
		no_chats_found: "未找到研究记录",
		no_shared_chats: "暂无共享研究",
		shared_chat: "共享研究",
		view_all_shared_chats: "查看所有共享研究",
		view_all_chats: "查看所有研究记录",
		no_chats: "开始研究后，记录会显示在这里",
		start_new_chat_hint: "开始新研究",
		error_loading_chats: "加载研究记录时出错",
		chat_deleted: "研究记录已删除",
		error_deleting_chat: "删除研究记录失败",
		chat_archived: "研究记录已归档",
		chat_unarchived: "研究记录已恢复",
		chat_renamed: "研究记录已重命名",
		error_renaming_chat: "重命名研究记录失败",
		rename_chat: "重命名研究记录",
		rename_chat_description: "为这条研究记录输入新名称。",
		chat_title_placeholder: "研究标题",
		no_archived_chats: "暂无已归档研究",
		error_archiving_chat: "归档研究记录失败",
		new_chat: "新建研究",
		select_workspace: "选择研究空间",
		workspace_settings: "研究空间设置",
		see_all_workspaces: "查看所有研究空间",
		connectors: "数据源",
		all_connectors: "所有数据源",
		sources: "来源",
		all_sources: "所有来源",
	},
	public_chat: {
		...zhMessages.public_chat,
		sign_in_prompt: "登录 TripInsight 开始你自己的目的地研究。",
	},
};

/**
 * Dynamically load locale messages on demand.
 * TripInsight is Chinese-first, so Chinese messages are available synchronously.
 */
const loadMessages = async (locale: Locale): Promise<typeof enMessages> => {
	switch (locale) {
		case "es":
			return (await import("../messages/es.json")).default;
		case "hi":
			return (await import("../messages/hi.json")).default;
		case "pt":
			return (await import("../messages/pt.json")).default;
		case "zh":
			return tripInsightZhMessages;
		case "ko":
			return (await import("../messages/ko.json")).default;
		default:
			return enMessages;
	}
};

interface LocaleContextType {
	locale: Locale;
	messages: typeof enMessages;
	setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

// Use a TripInsight-specific key so an old SurfSense locale preference does not
// silently override the Chinese-first product default after the fork.
const LOCALE_STORAGE_KEY = "tripinsight-locale";

const htmlLang = (locale: Locale) => (locale === "zh" ? "zh-CN" : locale);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
	// Chinese is the product default and is loaded synchronously to avoid a
	// post-hydration language flash for first-time users.
	const [locale, setLocaleState] = useState<Locale>("zh");
	const [messages, setMessages] = useState<typeof enMessages>(tripInsightZhMessages);
	const [mounted, setMounted] = useState(false);

	// Restore a TripInsight-specific user preference after mount.
	useEffect(() => {
		setMounted(true);
		if (typeof window === "undefined") return;

		const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
		if (!stored || !(["en", "es", "pt", "hi", "zh", "ko"] as const).includes(stored as Locale)) {
			return;
		}

		const storedLocale = stored as Locale;
		if (storedLocale === "zh") return;

		void loadMessages(storedLocale).then((storedMessages) => {
			setMessages(storedMessages);
			setLocaleState(storedLocale);
		});
	}, []);

	// Update locale and persist to localStorage.
	const setLocale = useCallback(async (newLocale: Locale) => {
		const newMessages = await loadMessages(newLocale);
		setMessages(newMessages);
		setLocaleState(newLocale);
		if (typeof window !== "undefined") {
			localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
			document.documentElement.lang = htmlLang(newLocale);
		}
	}, []);

	useEffect(() => {
		if (typeof window !== "undefined" && mounted) {
			document.documentElement.lang = htmlLang(locale);
		}
	}, [locale, mounted]);

	const contextValue = useMemo(
		() => ({ locale, messages, setLocale }),
		[locale, messages, setLocale]
	);

	return <LocaleContext.Provider value={contextValue}>{children}</LocaleContext.Provider>;
}

export function useLocaleContext() {
	const context = useContext(LocaleContext);
	if (context === undefined) {
		throw new Error("useLocaleContext must be used within a LocaleProvider");
	}
	return context;
}
