const ZH_PRODUCT_LABELS: Record<string, string> = {
	"New Chat": "新建研究",
	新对话: "新建研究",
	Chats: "研究记录",
	对话: "研究记录",
	Recents: "最近研究",
	最近: "最近研究",
	Automations: "自动化",
	Artifacts: "研究报告",
	Connectors: "数据源",
	Documents: "知识库",
	文档: "知识库",
	连接器: "数据源",
	Playground: "调试台",
	"Watch Local Folder": "监控本地资料",
};

const EN_PRODUCT_LABELS: Record<string, string> = {
	"New Chat": "New Research",
	Chats: "Research History",
	Recents: "Recent Research",
	Automations: "Automations",
	Artifacts: "Research Reports",
	Connectors: "Sources",
	Documents: "Knowledge Base",
	Playground: "Playground",
	"Watch Local Folder": "Watch Local Sources",
};

const HIDDEN_PRIMARY_LABELS = new Set<string>();

/**
 * Keep upstream route/domain names stable while presenting TripInsight's
 * travel-research vocabulary in the product UI.
 */
export function getProductLabel(label: string, locale: string): string {
	if (locale === "zh") return ZH_PRODUCT_LABELS[label] ?? label;
	if (locale === "en") return EN_PRODUCT_LABELS[label] ?? label;
	return label;
}

/**
 * Reserve a single product-level switch for entries that may need to be hidden
 * from primary navigation later. TripInsight currently exposes all upstream
 * primary entries, including Playground.
 */
export function isHiddenPrimaryProductLabel(label: string): boolean {
	return HIDDEN_PRIMARY_LABELS.has(label);
}
