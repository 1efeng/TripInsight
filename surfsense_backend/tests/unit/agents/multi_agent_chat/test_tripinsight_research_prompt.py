"""TripInsight product-level guardrails for the main research-agent prompt."""

from __future__ import annotations

import pytest

from app.agents.chat.multi_agent_chat.main_agent.system_prompt.builder.compose import (
    build_main_agent_system_prompt,
)
from app.agents.chat.multi_agent_chat.main_agent.system_prompt.builder.load_md import (
    read_prompt_md,
)

pytestmark = pytest.mark.unit


def _build_prompt(*, use_defaults: bool = True) -> str:
    return build_main_agent_system_prompt(
        registry_subagent_prompt_lines=[],
        use_default_system_instructions=use_defaults,
    )


def test_tripinsight_research_protocol_resource_resolves():
    protocol = read_prompt_md("tripinsight_research_protocol.md")

    assert protocol.strip()
    assert "<tripinsight_research_protocol>" in protocol
    assert "travel-industry research workspace" in protocol
    assert "publication, event, and collection dates" in protocol
    assert "credible sources conflict" in protocol
    assert "Never invent" in protocol
    assert "two-stage task" in protocol
    assert "Only after the research evidence is available" in protocol
    assert "task(deliverables, ...)" in protocol
    assert "Do not create a file for every research question" in protocol


def test_default_main_prompt_uses_tripinsight_identity_and_research_protocol():
    prompt = _build_prompt()

    assert "TripInsight's main research agent" in prompt
    assert "SurfSense's main agent" not in prompt
    assert "<tripinsight_research_protocol>" in prompt


def test_research_protocol_overlays_generic_routing_after_grounding_and_context():
    prompt = _build_prompt()

    kb_index = prompt.index("<knowledge_base_first>")
    dynamic_context_index = prompt.index("<dynamic_context>")
    routing_index = prompt.index("<routing>")
    protocol_index = prompt.index("<tripinsight_research_protocol>")
    specialists_index = prompt.index("<specialists>")

    assert kb_index < dynamic_context_index < routing_index < protocol_index < specialists_index


def test_disabling_default_instructions_also_disables_product_research_protocol():
    prompt = _build_prompt(use_defaults=False)

    assert "TripInsight's main research agent" in prompt
    assert "<tripinsight_research_protocol>" not in prompt
    assert "<knowledge_base_first>" not in prompt
    assert "<core_behavior>" not in prompt
    assert "<routing>" not in prompt


def test_kb_first_does_not_present_upstream_docs_as_tripinsight_docs():
    kb_first = read_prompt_md("kb_first.md")

    assert "TripInsight" in kb_first
    assert "Do not present upstream SurfSense product" in kb_first
    assert "https://www.surfsense.com/docs" not in kb_first
