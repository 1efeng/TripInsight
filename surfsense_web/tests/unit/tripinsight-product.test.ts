import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { getChatExampleCategories } from "../../lib/chat/example-prompts";
import {
	getProductLabel,
	isHiddenPrimaryProductLabel,
} from "../../lib/product-terminology";

test("Chinese primary navigation uses TripInsight research vocabulary", () => {
	assert.equal(getProductLabel("New Chat", "zh"), "新建研究");
	assert.equal(getProductLabel("Chats", "zh"), "研究记录");
	assert.equal(getProductLabel("Documents", "zh"), "知识库");
	assert.equal(getProductLabel("Connectors", "zh"), "数据源");
	assert.equal(getProductLabel("Artifacts", "zh"), "研究报告");
	assert.equal(getProductLabel("Automations", "zh"), "自动化");
});

test("English navigation remains usable after the Chinese-first fork", () => {
	assert.equal(getProductLabel("New Chat", "en"), "New Research");
	assert.equal(getProductLabel("Documents", "en"), "Knowledge Base");
	assert.equal(getProductLabel("Connectors", "en"), "Sources");
	assert.equal(getProductLabel("Artifacts", "en"), "Research Reports");
});

test("developer playground is hidden from the primary product navigation", () => {
	assert.equal(isHiddenPrimaryProductLabel("Playground"), true);
	assert.equal(isHiddenPrimaryProductLabel("Automations"), false);
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
	const zhDestination = getChatExampleCategories("zh").find((category) => category.id === "destination");
	const enDestination = getChatExampleCategories("en").find((category) => category.id === "destination");

	assert.ok(zhDestination);
	assert.ok(enDestination);
	assert.ok(
		zhDestination.prompts.some(
			(prompt) => prompt.includes("多来源研究") && prompt.includes("PDF") && prompt.includes("研究报告")
		)
	);
	assert.ok(
		enDestination.prompts.some(
			(prompt) => prompt.includes("multi-source research") && prompt.includes("PDF") && prompt.includes("research report")
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

test("research composer header keeps the primary surface focused on research", () => {
	const source = readFileSync("components/new-chat/chat-header.tsx", "utf8");

	assert.match(source, /ModelSelector/);
	assert.doesNotMatch(source, /ImageModelSelector/);
});

test("Chinese research composer exposes localized context and model controls", () => {
	const addMenuSource = readFileSync("components/assistant-ui/composer-add-menu-drawer.tsx", "utf8");
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
	assert.doesNotMatch(source, /Research the live web, scrape platforms, automate briefs/);
	assert.doesNotMatch(source, /Good morning|Good afternoon|Good evening|Night owl mode/);
});
