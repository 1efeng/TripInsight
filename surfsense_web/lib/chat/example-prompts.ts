/**
 * Curated TripInsight research prompts shown on the empty new-research screen.
 *
 * The underlying runtime is still the upstream chat/thread model. These prompts
 * deliberately change only the product-facing research entry so we can keep the
 * Agent runtime and persistence model stable while specializing the experience.
 */

export interface ChatExampleCategory {
	/** Stable id used by the category picker. */
	id: string;
	/** Short, human-readable category label. */
	label: string;
	/** Runnable example research queries. */
	prompts: string[];
}

const ZH_RESEARCH_CATEGORIES: ChatExampleCategory[] = [
	{
		id: "destination",
		label: "目的地研究",
		prompts: [
			"调研东京秋季情侣旅行市场，分析近期热门区域、游客关注点、消费变化和内容机会，并为关键结论附上来源。",
			"研究京都红叶季的最新开放信息、交通变化、热门景点与游客反馈；先完成多来源研究和引用核验，再生成一份可下载的 PDF 目的地研究报告。",
			"对比曼谷、清迈和普吉岛近期游客关注点与消费体验，给出适合内容团队的选题方向。",
		],
	},
	{
		id: "traveler-insights",
		label: "游客洞察",
		prompts: [
			"分析最近三个月大阪热门景点的游客反馈，归纳主要投诉、正向体验和正在上升的关注点。",
			"研究东京热门商圈近期评论，比较排队、服务、价格和夜间体验相关反馈，并标注证据来源。",
			"汇总游客对京都公共交通和热门景点拥挤问题的讨论，提炼高频痛点和内容机会。",
		],
	},
	{
		id: "monitor",
		label: "情报监控",
		prompts: [
			"检查京都近期景点开放时间、预约政策、交通和活动是否有重要变化，并生成变化摘要。",
			"跟踪东京核心景区近期票价、预约规则和临时闭馆信息，指出与历史资料不一致的内容。",
			"研究日本入境旅行近期值得内容团队关注的新政策、热门趋势和游客讨论变化，并给出来源。",
		],
	},
];

const EN_RESEARCH_CATEGORIES: ChatExampleCategory[] = [
	{
		id: "destination",
		label: "Destination Research",
		prompts: [
			"Research Tokyo's autumn couples travel market, including trending neighborhoods, traveler concerns, spending shifts, and content opportunities. Cite the key evidence.",
			"Research Kyoto's latest autumn foliage season updates, transport changes, popular attractions, and traveler feedback. Complete multi-source research and citation checks first, then create a downloadable PDF destination research report.",
			"Compare current traveler interests and spending experiences across Bangkok, Chiang Mai, and Phuket, then suggest content opportunities for a travel team.",
		],
	},
	{
		id: "traveler-insights",
		label: "Traveler Insights",
		prompts: [
			"Analyze traveler feedback for popular Osaka attractions from the last three months and summarize top complaints, positive experiences, and rising concerns.",
			"Research recent reviews of Tokyo's major shopping districts and compare feedback about queues, service, price, and nightlife, with sources.",
			"Summarize traveler discussions about Kyoto public transport and attraction crowding, then extract recurring pain points and content opportunities.",
		],
	},
	{
		id: "monitor",
		label: "Destination Monitoring",
		prompts: [
			"Check whether Kyoto attraction hours, reservation policies, transport, or major events changed recently and produce a sourced change brief.",
			"Track recent ticket price, reservation-rule, and temporary-closure changes for major Tokyo attractions and flag conflicts with existing knowledge.",
			"Research recent Japan inbound-travel policy changes, emerging trends, and traveler discussions that a travel content team should know about, with sources.",
		],
	},
];

export function getChatExampleCategories(locale: string): ChatExampleCategory[] {
	return locale === "zh" ? ZH_RESEARCH_CATEGORIES : EN_RESEARCH_CATEGORIES;
}

// Backward-compatible export for any upstream code that still imports the old
// constant directly. Product UI should prefer getChatExampleCategories(locale).
export const CHAT_EXAMPLE_CATEGORIES = EN_RESEARCH_CATEGORIES;
