const PRODUCT_LABELS: Record<string, string> = {
	"New Chat": "新建研究",
	"新对话": "新建研究",
	Chats: "研究记录",
	"对话": "研究记录",
	Recents: "最近研究",
	"最近": "最近研究",
	Automations: "自动化",
	Artifacts: "研究报告",
	Connectors: "数据源",
	Documents: "知识库",
	"文档": "知识库",
	"连接器": "数据源",
	"Watch Local Folder": "监控本地资料",
};

const HIDDEN_PRIMARY_LABELS = new Set(["Playground"]);

/**
 * Keep upstream route/domain names stable while presenting TripInsight's
 * travel-research vocabulary in the product UI.
 */
export function getProductLabel(label: string): string {
	return PRODUCT_LABELS[label] ?? label;
}

/**
 * Upstream developer utilities can stay routable without occupying the primary
 * product navigation used by destination researchers and operations teams.
 */
export function isHiddenPrimaryProductLabel(label: string): boolean {
	return HIDDEN_PRIMARY_LABELS.has(label);
}
