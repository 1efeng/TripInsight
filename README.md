# TripInsight

> AI 旅游研究与目的地情报工作台

TripInsight 面向旅游内容、目的地运营与研究团队，将站内知识与开放网络实时信息结合，通过 AI Research Agent 完成目的地研究、游客反馈洞察、内容选题与持续情报监控。

项目基于开源项目 [SurfSense](https://github.com/MODSetter/SurfSense) 进行二次开发。TripInsight 保留其成熟的知识库、Agent、连接器、自动化与成果生成能力，并围绕旅游行业研究场景重新设计产品定位、交互与业务能力。

## 为什么做 TripInsight

旅游信息天然具有几个特点：

- **来源分散**：官方站点、地图评论、视频、社区、搜索结果与历史攻略同时存在。
- **变化频繁**：开放时间、预约政策、交通、价格、活动与热点持续变化。
- **验证成本高**：研究人员需要反复搜索、交叉核验并记录来源。
- **内容生产依赖研究**：目的地运营与内容团队需要把原始信息进一步转化为洞察、选题和 Brief。

TripInsight 的目标不是再做一个“AI 行程规划助手”，而是建立一个面向旅游行业研究工作的 AI Workspace。

## 核心场景

### 1. 目的地深度研究

把内部知识、官方资料与开放网络数据放进同一次研究任务，生成带引用的 Destination Research Brief。

示例：

> 调研东京秋季情侣旅行市场，分析近期热门区域、游客关注点、消费变化和内容机会。

### 2. 游客反馈洞察

聚合地图评论、社区讨论、视频内容与历史资料，识别游客高频诉求、核心槽点、正向反馈与趋势变化。

示例：

> 分析最近三个月大阪热门景点的主要投诉与正向反馈，并给出内容选题建议。

### 3. 目的地情报监控

持续监控开放时间、预约政策、交通、价格、活动与热门趋势，让重要变化进入研究工作台并形成可追溯 Brief。

示例：

> 每周跟踪京都目的地信息变化，生成变化摘要并保留全部来源。

## 产品原则

TripInsight 当前围绕四个关键词建设：

**Research · Knowledge · Insight · Automation**

- **Research**：Agent 负责理解问题、拆解任务、连续检索与综合分析。
- **Knowledge**：沉淀内部资料、历史攻略、目的地文档与研究成果。
- **Insight**：从原始信息中形成可验证、可引用、可复用的研究结论。
- **Automation**：把重复的目的地研究与情报跟踪变成持续运行的工作流。

## 当前技术基础

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

## 产品边界

第一阶段明确 **不做**：

- C 端旅游行程规划
- 机票 / 酒店预订
- OTA 交易系统
- 地图路线规划
- CRM / 完整 CMS
- 通用 Agent Platform
- 为技术展示而引入额外的 Durable Runtime

现有 Celery + Redis + PostgreSQL Automation 能力优先满足当前自动化需求。

## 当前改造阶段

### Phase 0 — 产品方向冻结

- [x] 产品定位：AI 旅游研究与目的地情报工作台
- [x] 目标用户：旅游内容、目的地运营与研究团队
- [x] 核心场景：目的地研究 / 游客洞察 / 情报监控
- [x] 产品边界与 Won't-have

### Phase 1 — TripInsight 产品化

- [x] 独立 TripInsight 首页与品牌定位
- [ ] 工作台信息架构调整
- [ ] Research 场景模板
- [ ] 旅游业务示例数据与 Demo
- [ ] 核心模块文案与命名统一

### Phase 2 — 旅游 Research Agent

- [ ] 目的地研究任务模板
- [ ] 多源旅游数据研究流程
- [ ] 研究结果引用与证据核验
- [ ] Traveler Insight 输出结构

### Phase 3 — Destination Intelligence

- [ ] 目的地变化监控
- [ ] Research Automation
- [ ] Destination Brief
- [ ] Research Eval / Citation Eval

详细产品定义见 [`docs/product.md`](./docs/product.md)。

## Upstream & License

TripInsight is built on top of [MODSetter/SurfSense](https://github.com/MODSetter/SurfSense).

SurfSense 主体代码采用 Apache License 2.0；其 `surfsense_backend/app/proprietary/` 目录有独立许可声明。TripInsight 保留原项目相关版权与许可证文件，并在二次开发过程中避免将上游贡献误表述为原创实现。

## Status

TripInsight 正在进行第一阶段产品化改造。
