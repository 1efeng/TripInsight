import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";
import { getChatExampleCategories } from "../../lib/chat/example-prompts";

test("TripInsight product vocabulary lives in the existing locale files", () => {
	const zh = JSON.parse(readFileSync("messages/zh.json", "utf8"));
	const en = JSON.parse(readFileSync("messages/en.json", "utf8"));

	assert.equal(zh.common.app_name, "TripInsight");
	assert.equal(zh.sidebar.new_chat, "新建研究");
	assert.equal(zh.sidebar.chats, "研究记录");
	assert.equal(zh.sidebar.automations, "自动化");
	assert.equal(zh.sidebar.artifacts, "研究报告");
	assert.equal(zh.sidebar.documents, "知识库");
	assert.equal(zh.sidebar.connectors, "数据源");
	assert.equal(zh.sidebar.playground, "调试台");
	assert.equal(en.sidebar.artifacts, "Research Reports");
	assert.equal(en.sidebar.documents, "Knowledge Base");
});

test("generic sidebar components stay aligned with upstream and contain no product terminology layer", () => {
	assert.equal(existsSync("lib/product-terminology.ts"), false);
	for (const path of [
		"components/layout/ui/sidebar/SidebarButton.tsx",
		"components/layout/ui/sidebar/SidebarSection.tsx",
	]) {
		const source = readFileSync(path, "utf8");
		assert.doesNotMatch(source, /product-terminology|useLocaleContext|getProductLabel/);
	}
});

test("Chinese research entry exposes only the three frozen TripInsight scenarios", () => {
	const categories = getChatExampleCategories("zh");

	assert.deepEqual(
		categories.map((category) => category.id),
		["destination", "traveler-insights", "monitor"]
	);
	assert.deepEqual(
		categories.map((category) => category.label),
		["目的地研究", "游客洞察", "情报监控"]
	);
	assert.ok(categories.every((category) => category.prompts.length >= 3));
});

test("destination research includes one explicit end-to-end PDF report demo", () => {
	const zhDestination = getChatExampleCategories("zh").find(
		(category) => category.id === "destination"
	);
	const enDestination = getChatExampleCategories("en").find(
		(category) => category.id === "destination"
	);

	assert.ok(zhDestination);
	assert.ok(enDestination);
	assert.ok(
		zhDestination.prompts.some(
			(prompt) =>
				prompt.includes("多来源研究") && prompt.includes("PDF") && prompt.includes("研究报告")
		)
	);
	assert.ok(
		enDestination.prompts.some(
			(prompt) =>
				prompt.includes("multi-source research") &&
				prompt.includes("PDF") &&
				prompt.includes("research report")
		)
	);
});

test("English research entry mirrors the same scenario structure", () => {
	const categories = getChatExampleCategories("en");

	assert.deepEqual(
		categories.map((category) => category.id),
		["destination", "traveler-insights", "monitor"]
	);
	assert.deepEqual(
		categories.map((category) => category.label),
		["Destination Research", "Traveler Insights", "Destination Monitoring"]
	);
});

test("research composer header exposes both chat and image model controls", () => {
	const source = readFileSync("components/new-chat/chat-header.tsx", "utf8");

	assert.match(source, /ModelSelector/);
	assert.match(source, /ImageModelSelector/);
});

test("Chinese research composer exposes localized context and model controls", () => {
	const addMenuSource = readFileSync(
		"components/assistant-ui/composer-add-menu-drawer.tsx",
		"utf8"
	);
	const modelSelectorSource = readFileSync("components/new-chat/model-selector.tsx", "utf8");

	for (const label of ["上传研究资料", "知识库", "数据源", "研究工具"]) {
		assert.match(addMenuSource, new RegExp(label));
	}
	for (const label of ["搜索模型", "自动选择", "管理模型", "选择研究模型"]) {
		assert.match(modelSelectorSource, new RegExp(label));
	}
});

test("core thread is localized around research rather than upstream generic chat", () => {
	const source = readFileSync("components/assistant-ui/thread.tsx", "utf8");

	for (const label of [
		"今天想研究什么？",
		"研究目的地、游客反馈或近期变化",
		"添加研究上下文",
		"上传研究资料",
		"数据源",
		"研究工具",
		"开始研究",
	]) {
		assert.match(source, new RegExp(label));
	}
	for (const legacyCopy of [
		"Research the live web, scrape platforms, automate briefs",
		"Connect a chat model to start chatting",
		"Upload files, manage tools and more",
	]) {
		assert.doesNotMatch(source, new RegExp(legacyCopy));
	}
	assert.doesNotMatch(source, /Good morning|Good afternoon|Good evening|Night owl mode/);
});
