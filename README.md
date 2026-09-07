# TripInsight

> **AI 旅游研究与目的地情报工作台**  
> AI Travel Research & Destination Intelligence Workspace

TripInsight 面向旅游内容、目的地运营与研究团队，将企业内部知识、历史资料与开放网络实时信息放进同一个 AI Research Workspace，通过 Agent 完成目的地研究、游客反馈洞察、内容选题、研究报告与持续情报监控。

项目基于开源项目 [SurfSense](https://github.com/MODSetter/SurfSense) 二次开发。

TripInsight 的目标不是把 SurfSense 裁剪成一个更小的聊天机器人，而是：

> **保留完整 AI Research Platform 能力，并用旅游行业场景重新组织产品、Agent 行为与默认工作流。**

## 核心定位

TripInsight 解决的不是“帮游客排一个行程”，而是旅游团队每天真实存在的信息研究问题：

- 信息散落在官方站点、搜索、地图评论、社区、视频、社交平台和内部资料里；
- 开放时间、预约政策、交通、价格、热点与用户反馈变化很快；
- 人工搜索、核验、整理和写报告成本高；
- 一次研究结束后，证据与结论很难持续沉淀和复用。

TripInsight 将流程变成：

```text
多源数据
  → AI Research
  → 证据核验
  → 可引用洞察
  → Research Deliverable
  → Knowledge 沉淀
  → Automation 持续监控
```

核心关键词：

**Research · Knowledge · Insight · Automation**

## 三个核心业务场景

### 1. Destination Research — 目的地深度研究

联合知识库、官方资料与开放网络完成多轮研究，形成带引用的 Destination Research Brief / Report。

> 例：调研东京秋季情侣旅行市场，分析热门区域、游客关注点、消费变化与内容机会。

### 2. Traveler Insights — 游客反馈洞察

聚合 Google Maps、Reddit、YouTube、网页、社交内容与历史资料，识别游客反复出现的需求、槽点、正向反馈和新变化。

> 例：最近三个月大阪热门景点的游客主要在抱怨什么？哪些问题值得内容和运营团队关注？

### 3. Destination Monitoring — 目的地情报监控

持续跟踪目的地的开放时间、预约、交通、价格、活动、热点与游客反馈变化，只把值得关注的变化沉淀成 Brief。

> 例：每周跟踪京都目的地信息变化，并保留来源与历史对比。

## 产品结构

TripInsight 可以分成三层：

```text
旅游业务场景
  Destination Research / Traveler Insights / Monitoring
                        ↓
Research Workspace
  新建研究 / 研究记录 / 知识库 / 数据源 / 研究报告 / 自动化 / 调试台
                        ↓
Research Platform
  Agent / RAG / Citation / Connectors / MCP / Deliverables /
  Image Generation / Automation / Collaboration / Playground
```

当前工作台用户可见入口：

```text
新建研究
研究记录
知识库
数据源
研究报告
自动化
调试台
```

内部仍尽量保留 SurfSense 原有 route / domain naming，减少无意义的大规模重构。

## 能力保留策略

TripInsight 不采用“不是核心就删除”的裁剪方式。

### 继续保留的成熟能力

- Knowledge Base
- Hybrid Search / RAG
- Citation
- Agent / Tool Calling
- Live Data Connectors
- MCP
- Reports / Documents / Slides / Spreadsheet
- Podcast / Video
- **Image Generation**
- Automations
- Collaboration / RBAC
- **Playground / 调试台**
- Model Configuration
- Observability

其中：

- **Playground** 已重新作为「调试台」出现在主导航，用于模型、Prompt、Tool、Connector 与 Agent 行为调试；
- **Chat Model + Image Model** 均保留在研究入口，图片生成作为研究成果的辅助视觉能力，而不是产品主卖点。

原则：

> **业务定位要收敛，底层能力不必自废。**

## Research Agent

TripInsight 不重写现有 LangGraph / Deep Agent Runtime，而是在现有系统 Prompt 体系上增加旅游 Research Protocol。

默认行为包括：

- Evidence First
- Citation by Default
- Freshness Matters
- Source Conflict Visibility
- Research Before Deliverable
- No Fabricated Metrics

对于“研究 + 生成报告”的请求，默认链路是：

```text
Research Specialists
  → Evidence / Citation
  → Synthesis
  → Deliverables
  → Artifact
  → 研究报告库
```

普通问题不会强制生成 PDF；只有用户明确要求文件或模板指定交付成果时才进入 Deliverables。

## 技术基础

### Backend

- Python 3.12+
- FastAPI
- PostgreSQL / pgvector
- SQLAlchemy / Alembic
- Redis
- Celery

### AI / Agent

- LangGraph / LangChain
- Deep Agents
- LiteLLM
- Hybrid Search / Rerank
- MCP / Tool Calling
- PostgreSQL Checkpoint

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### Observability

- OpenTelemetry
- PostHog

## 当前产品边界

第一阶段明确不做：

- C 端 AI 行程规划产品
- 机票 / 酒店预订
- OTA 交易链路
- 地图路线规划
- CRM / 完整旅游 CMS
- 社交社区
- 把 TripInsight 做成新的通用 Agent Platform
- 为技术展示而引入额外 Durable Runtime、微服务或 Kubernetes 平台化

注意：

> 不做“通用 Agent Platform”不等于删除 Playground、MCP、模型配置等平台能力；这些能力作为 TripInsight 的高级能力与工程底座继续存在。

现阶段自动化继续优先复用 Celery + Redis + PostgreSQL。

## 当前进度

### 已完成

- [x] TripInsight 产品定位与品牌
- [x] 中文优先核心体验
- [x] Research Workspace 导航语义
- [x] Destination Research / Traveler Insights / Monitoring 模板
- [x] TripInsight Research Protocol
- [x] Research → Evidence → Deliverables → Artifact 协议
- [x] PDF Research Report Demo Path
- [x] Playground 恢复为「调试台」
- [x] Chat Model + Image Model 主入口保留

### 下一阶段

- [ ] Research Eval / Citation Eval
- [ ] Destination Monitoring 真实业务 Demo
- [ ] Research Automation 模板
- [ ] Destination Brief 历史变化对比
- [ ] 多来源旅游数据下的引用质量与 Agent 行为优化

详细产品定义见 [`docs/product.md`](./docs/product.md)。

## Upstream & License

TripInsight is built on top of [MODSetter/SurfSense](https://github.com/MODSetter/SurfSense).

TripInsight 保留并复用 SurfSense 的成熟 Research Platform 能力，并围绕旅游研究场景进行独立产品化与二次开发。

SurfSense 主体代码采用 Apache License 2.0；其 `surfsense_backend/app/proprietary/` 目录有独立许可声明。TripInsight 保留原项目相关版权与许可证信息，不将上游贡献误表述为原创实现。

TripInsight 也不会复刻任何非公开企业内部系统、代码、页面、流程、指标或数据配置。