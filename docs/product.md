# TripInsight 产品文档

> **TripInsight — AI 旅游研究与目的地情报工作台**

## 1. 产品定位

TripInsight 是一个面向旅游内容、目的地运营与研究团队的 **AI Research Workspace**。

它聚合企业内部知识与开放网络实时信息，通过 AI Agent 完成目的地研究、游客反馈洞察、内容选题与持续情报监控，帮助旅游从业者更快地找到可信信息、理解变化并形成可复用的研究成果。

TripInsight 的核心不是“帮游客规划一次旅行”，而是：

> **帮助旅游企业理解目的地、理解游客，并持续生产有依据的研究结论。**

核心关键词：

- **Research** — 深度研究
- **Knowledge** — 旅游知识沉淀
- **Insight** — 游客与目的地洞察
- **Automation** — 持续情报监控

---

## 2. 背景与问题

旅游行业的信息天然具有以下特点：

1. **来源分散**：官方站点、旅游平台、地图评论、社交媒体、视频、新闻与企业内部资料彼此割裂。
2. **变化频繁**：开放时间、预约政策、交通、价格、活动和热门趋势持续变化。
3. **信息质量不稳定**：不同来源可能过期、冲突或缺少上下文。
4. **人工研究成本高**：内容和运营人员需要重复搜索、筛选、验证、整理和总结。
5. **研究成果难沉淀**：一次性的搜索结果和分析结论很难形成团队可复用的知识资产。

TripInsight 希望把这套流程从：

```text
人工搜索 → 人工筛选 → 人工核验 → 人工总结 → 文档沉淀 → 定期重新搜索
```

转变为：

```text
多源数据 → AI Research → 证据核验 → 可引用洞察 → 研究成果 → 持续监控
```

---

## 3. 目标用户

### 3.1 核心用户

- 旅游平台内容编辑
- 目的地运营人员
- 内容策略与研究人员
- 市场与商业化团队

### 3.2 非核心用户

TripInsight 第一阶段不面向普通游客提供 C 端旅行规划服务。

---

## 4. 用户核心任务（Jobs To Be Done）

### JTBD 1：快速完成目的地深度研究

当我要研究一个目的地、主题或旅游趋势时，我希望系统能够自动检索内部资料和开放网络，整理可信来源并给出有引用的研究结论，从而减少大量重复搜索与信息筛选工作。

### JTBD 2：理解游客真实反馈

当我要判断某个目的地、景区或旅游产品近期表现时，我希望系统能够汇总公开评论和内容，识别高频诉求、槽点、好评点与趋势变化，从而发现真实用户需求。

### JTBD 3：发现值得生产的内容

当我要制定旅游内容选题时，我希望系统能够结合近期热点、游客问题、历史内容与知识缺口，给出有依据的内容机会，而不是只依赖经验判断。

### JTBD 4：持续跟踪目的地变化

当我负责一批重点目的地时，我希望系统能够定期研究并发现重要变化，只在值得关注时形成 Brief，从而避免人工反复检查大量信息源。

---

## 5. 核心业务场景

TripInsight 第一阶段只围绕三个核心场景建设。

### 5.1 Destination Research — 目的地深度研究

示例问题：

> 调研东京秋季情侣旅行市场，分析近期热门区域、游客关注点、消费变化和潜在内容机会。

典型流程：

```text
研究问题
  ↓
Agent 拆解研究任务
  ↓
选择内部知识与开放网络数据源
  ↓
多轮检索与补充搜索
  ↓
来源比较 / 信息核验
  ↓
归纳洞察
  ↓
生成带引用的 Destination Research Report
```

研究报告至少包括：

- 研究摘要
- 关键发现
- 热门区域 / 主题
- 游客关注点
- 近期变化
- 高频问题与风险
- 内容机会
- 数据来源与引用

### 5.2 Traveler Insights — 游客反馈洞察

示例问题：

> 最近三个月，大阪热门景点的游客主要在抱怨什么？与此前相比有什么变化？

系统从公开评论、社区、视频内容、网页以及已有知识中提取信息，并形成：

- 高频正向反馈
- 高频负向反馈
- 主题聚类
- 用户关注点
- 趋势变化
- 异常信号
- 可进一步研究的问题

目标不是简单做“情感分析”，而是回答：

> **游客到底在关注什么，以及这些关注点发生了什么变化？**

### 5.3 Destination Monitoring — 目的地情报监控

用户可以为重点目的地创建持续研究任务，例如：

```text
东京 / 京都 / 北京 / 曼谷
        ↓
每日或每周研究
        ↓
发现新信息
        ↓
与已有知识比较
        ↓
判断是否存在重要变化
        ↓
形成 Destination Brief
```

重点关注：

- 景点开放与闭馆变化
- 预约规则变化
- 交通政策变化
- 价格变化
- 新活动与重要事件
- 热门趋势
- 游客集中反馈变化

---

## 6. 产品形态

TripInsight 是 **Research Workspace**，不是单一聊天机器人。

第一阶段的信息架构：

```text
Workspace
├── Research       研究任务与研究报告
├── Knowledge      团队知识库
├── Sources        数据源与引用
├── Insights       游客 / 目的地洞察
├── Automations    持续研究任务
└── Chat           自然语言研究入口
```

### 6.1 Research

用户创建研究任务、查看运行过程、继续追问并沉淀最终报告。

### 6.2 Knowledge

管理内部文档、历史研究结果和可复用知识，让研究不从零开始。

### 6.3 Sources

展示研究过程中使用的数据来源，支持查看来源、时间与引用上下文。

### 6.4 Insights

将研究结果中可复用的结论沉淀为结构化洞察，而不是只存在于一次聊天记录中。

### 6.5 Automations

定期执行固定主题或目的地的研究任务，并生成新的情报 Brief。

### 6.6 Chat

Chat 是研究入口之一，用于快速提问、继续研究和操作 Workspace，但不是整个产品本身。

---

## 7. AI Agent 职责边界

AI Agent 负责概率性、需要判断的工作：

- 理解研究问题
- 拆分研究任务
- 选择数据源和工具
- 多轮检索
- 判断信息是否充分
- 识别来源冲突
- 继续补充研究
- 综合证据形成结论
- 生成结构化研究报告

确定性系统负责：

- 用户与 Workspace 权限
- 数据持久化
- 知识库管理
- 自动化调度
- 任务状态
- 数据源配置
- 引用与来源记录
- 结果投递

原则：

> **让 Agent 负责研究与判断，让系统负责状态、权限和数据事实。**

---

## 8. Research 质量原则

### 8.1 Evidence First

重要结论必须尽可能基于可追溯来源，不允许把模型自身知识伪装成实时事实。

### 8.2 Citation by Default

涉及具体事实、政策、价格、时间、评价趋势等内容时，默认提供来源引用。

### 8.3 Freshness Matters

旅游信息具有明显时效性。研究时需要考虑来源发布时间、采集时间以及与当前日期的距离。

### 8.4 Conflicts Are Visible

不同来源产生冲突时，系统应展示冲突，而不是强行生成一个确定答案。

### 8.5 Research Before Answer

复杂问题优先完成必要研究，再形成结论；不以“快速生成长回答”为目标。

---

## 9. MVP 范围

### P0 — 必须完成

- Workspace
- 研究任务创建与管理
- AI Research Agent
- 内部知识库检索
- 开放网络研究
- 多来源引用
- Research Report
- Destination Research 场景
- Traveler Insights 场景
- 基础研究过程可视化

### P1 — 第二阶段

- Destination Monitoring
- Automation
- Insights 结构化沉淀
- 研究模板
- 团队协作
- Research Eval
- 更完整的 Observability

### P2 — 暂不承诺

- 高级审批工作流
- 复杂跨系统业务流程
- 高级任务恢复机制
- 大规模企业治理能力

---

## 10. 明确不做（Won't Have）

第一阶段明确不做：

- C 端 AI 行程规划
- 机票搜索与预订
- 酒店搜索与预订
- OTA 交易链路
- 地图路线规划
- 完整旅游 CMS
- CRM
- 社交社区
- 通用 AI Agent Platform
- 为展示技术栈而引入复杂基础设施

同时，TripInsight 是一个独立设计和开发的公开项目，不复刻任何非公开企业内部系统、页面、流程、数据或实现细节。

---

## 11. 成功标准

TripInsight 第一阶段不以“功能数量”作为成功标准。

### 产品成功标准

一个用户能够：

1. 创建一个真实旅游研究问题；
2. 让 Agent 自主完成多轮信息搜索；
3. 同时使用内部知识与开放网络；
4. 获得结构清晰、包含来源引用的研究报告；
5. 查看主要研究过程和来源；
6. 将有价值的研究成果继续沉淀到 Workspace。

### AI 质量指标

后续逐步建立：

- Citation Accuracy
- Source Coverage
- Research Task Success Rate
- Retrieval Recall
- Evidence Groundedness
- Freshness Accuracy
- Tool Selection Accuracy
- Hallucination Rate

### 工程指标

- API 延迟
- Agent 首次响应时间
- Research 总耗时
- Tool 调用成功率
- Token 使用量
- 单次 Research 成本
- Automation 成功率

---

## 12. 产品设计原则

### 12.1 Research over Chat

Chat 是入口，Research 才是产品核心。

### 12.2 Insight over Content Generation

优先帮助用户发现事实、变化和机会，而不是批量生成旅游软文。

### 12.3 Workspace over One-shot Answer

研究结果必须能够沉淀、复用和继续研究，而不是一次问答结束后消失。

### 12.4 Real Data over Model Memory

优先使用真实数据源与团队知识，不依赖模型记忆回答实时旅游事实。

### 12.5 Product Value over Infrastructure Complexity

是否增加新技术，首先看它是否解决当前真实产品问题。第一阶段不以 Durable Execution、微服务、Kubernetes 等基础设施能力作为项目目标。

---

## 13. 与 SurfSense 的关系

TripInsight 基于开源项目 SurfSense 进行独立二次开发，并保留其适合 Research Workspace 的基础能力。

二次开发重点不是简单换皮，而是围绕旅游行业重新定义：

- 产品定位
- 用户与业务场景
- Research Agent 行为
- 目的地研究流程
- 游客反馈洞察
- 研究输出结构
- 数据源优先级
- Research Eval
- UI 信息架构

项目将遵循原项目许可证和 attribution 要求。

---

## 14. 当前冻结结论

**项目名称**：TripInsight

**中文定位**：AI 旅游研究与目的地情报工作台

**英文定位**：AI Travel Research & Destination Intelligence Workspace

**产品类型**：B 端 AI Research Application

**核心用户**：旅游内容、目的地运营与研究团队

**核心能力**：Research · Knowledge · Insight · Automation

**核心场景**：Destination Research · Traveler Insights · Destination Monitoring

**第一阶段目标**：先把“研究质量 + 行业场景 + AI 应用工程”做好，不为技术栈增加额外复杂度。
