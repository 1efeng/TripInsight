import assert from "node:assert/strict";
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
