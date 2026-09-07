# TripInsight 产品文档

> **TripInsight — AI 旅游研究与目的地情报工作台**  
> **AI Travel Research & Destination Intelligence Workspace**

## 1. 产品定位

TripInsight 是一个面向 **旅游内容、目的地运营与研究团队** 的 AI Research Workspace。

它将企业内部知识、历史研究资料与开放网络实时信息放进同一个研究工作流，通过 AI Agent 完成：

- 目的地深度研究
- 游客反馈洞察
- 内容选题研究
- 目的地变化监控
- 带引用的研究报告交付

TripInsight 的核心不是“帮游客规划一次旅行”，而是：

> **帮助旅游团队持续理解目的地、理解游客，并把分散的信息转化为可验证、可复用、可持续更新的研究资产。**

产品核心关键词保持为：

**Research · Knowledge · Insight · Automation**

---

## 2. 产品不是“阉割版 SurfSense”

TripInsight 基于开源项目 SurfSense 二次开发，但二次开发策略不是删除 SurfSense 的成熟能力，而是：

```text
完整 AI Research Platform 能力
            ↓
      旅游行业产品化
            ↓
Destination Research / Traveler Insights / Monitoring
```

SurfSense 已经提供了较完整的 Research Platform 基础能力，包括知识库、Agent、开放网络连接器、MCP、成果生成、自动化、协作与开发调试能力。

TripInsight 的工作是：

1. 用旅游行业问题重新定义产品入口；
2. 用旅游研究协议约束 Agent 行为；
3. 用旅游业务语言重新组织 Workspace；
4. 把通用能力组合成可演示、可复用的旅游 Research Workflow；
5. 在不破坏上游成熟能力的前提下做垂直深化。

因此，**非核心能力不等于必须删除的能力**。

例如：

- Playground 保留，并作为 **调试台** 暴露给高级用户 / 开发者；
- 图片模型选择器与图片生成能力保留，可用于旅游研究成果的视觉素材生成；
- Reports / Documents / Slides / Spreadsheet / Podcast / Video 等 Deliverables 能力继续作为成果交付层；
- MCP / REST / Connector 能力继续作为数据与 Agent 工具底座。

TripInsight 的产品收敛发生在 **业务定位和默认工作流**，而不是通过大量删除底层能力实现。

---

## 3. 为什么做 TripInsight

旅游行业的信息研究天然存在几个问题：

1. **来源分散**  
   官方网站、搜索结果、地图评论、社区、视频、社交平台、新闻和企业内部资料彼此割裂。

2. **变化频繁**  
   开放时间、预约规则、交通、价格、活动、热点与游客反馈不断变化。

3. **信息质量不稳定**  
   不同来源可能过期、冲突、缺少上下文，单一来源很难直接作为结论。

4. **人工研究成本高**  
   内容与运营人员需要反复搜索、筛选、核验、整理和总结。

5. **成果难沉淀**  
   一次搜索完成后，来源、判断过程与结论往往散落在聊天、表格和文档中，下一次研究又要重新开始。

TripInsight 希望把流程从：

```text
人工搜索
  → 人工筛选
  → 人工核验
  → 人工总结
  → 手工写报告
  → 过一段时间重新搜索
```

转变为：

```text
多源数据
  → AI Research
  → 证据核验
  → 可引用洞察
  → Research Deliverable
  → Knowledge 沉淀
  → Automation 持续监控
```

---

## 4. 目标用户

### 4.1 核心用户

- 旅游平台内容编辑
- 目的地运营人员
- 内容策略与研究人员
- 市场 / 商业化研究团队
- 需要持续跟踪目的地变化的业务团队

### 4.2 次级用户

- 需要调试 Agent、模型与数据源的内部开发者 / AI 应用工程师
- 需要基于研究结果进一步生成报告、演示文稿或视觉素材的内容生产人员

### 4.3 非核心用户

第一阶段不以普通游客为主要目标用户，也不把 TripInsight 定位成 C 端行程规划助手。

---

## 5. 三层产品结构

TripInsight 按三层理解最清晰。

### Layer 1：旅游业务场景层

这是 TripInsight 的产品价值所在。

```text
Destination Research
Traveler Insights
Destination Monitoring
Content Opportunity Research
```

### Layer 2：Research Workspace 层

这是用户日常工作的产品界面。

```text
新建研究
研究记录
知识库
数据源
研究报告
自动化
调试台
```

### Layer 3：Research Platform 能力层

这是从 SurfSense 继承并继续复用的技术与产品底座。

```text
Agent / Tool Calling / MCP
Hybrid Search / RAG / Citation
Live Data Connectors
Documents / Cloud Sources
Deliverables
Image Generation
Automation
Collaboration / RBAC
Model Configuration
Playground / Debugging
Observability
```

原则：

> **用户首先看到旅游研究产品，系统底层仍然保留完整的 Research Platform 能力。**

---

## 6. 核心业务场景

第一阶段只围绕三个主业务场景建立产品闭环。

### 6.1 Destination Research — 目的地深度研究

示例：

> 调研东京秋季情侣旅行市场，分析近期热门区域、游客关注点、消费变化与潜在内容机会，并生成带引用的研究报告。

典型流程：

```text
研究问题
  ↓
Agent 拆解研究任务
  ↓
选择知识库 + 开放网络数据源
  ↓
多轮搜索 / 抓取 / 检索
  ↓
来源比较与冲突识别
  ↓
补充研究
  ↓
形成证据链与关键发现
  ↓
生成 Research Brief / PDF / PPT 等成果
  ↓
沉淀回 Workspace
```

输出可包括：

- 研究摘要
- 关键发现
- 热门区域 / 主题
- 游客关注点
- 近期变化
- 风险与异常信号
- 内容机会
- 来源与引用

### 6.2 Traveler Insights — 游客反馈洞察

示例：

> 最近三个月，大阪热门景点的游客主要在抱怨什么？哪些问题反复出现？与历史资料相比出现了哪些变化？

研究来源可包括：

- Google Maps 评论
- Reddit / 社区讨论
- YouTube 视频与评论
- 搜索与网页
- 社交平台公开信息
- 企业内部历史资料

目标不是做一个简单的“正负面情感分析”，而是回答：

> **游客到底在关注什么，这些关注点为什么值得业务团队注意？**

典型输出：

- 高频正向反馈
- 高频负向反馈
- 主题聚类
- 用户需求与关注点
- 新出现的问题
- 持续存在的问题
- 可进一步研究的问题
- 内容机会

### 6.3 Destination Monitoring — 目的地情报监控

用户可以为重点目的地创建周期研究任务，例如：

```text
东京 / 京都 / 北京 / 曼谷
        ↓
每日 / 每周自动研究
        ↓
获取最新信息
        ↓
与已有知识和历史 Brief 对比
        ↓
判断是否存在值得关注的变化
        ↓
形成 Destination Brief
```

重点关注：

- 景点开放 / 闭馆变化
- 预约政策变化
- 交通变化
- 价格变化
- 活动与重大事件
- 热门趋势
- 游客集中反馈变化

Automation 的价值不是“定时运行一个 Prompt”，而是：

> **持续发现变化，只把值得业务人员关注的信息沉淀出来。**

---

## 7. 当前 Workspace 信息架构

当前 UI 保留上游内部路由与数据结构，仅重新定义用户可见语义。

```text
Workspace
├── 新建研究      New Chat
├── 研究记录      Chats
├── 知识库        Documents
├── 数据源        Connectors
├── 研究报告      Artifacts / Deliverables
├── 自动化        Automations
└── 调试台        Playground
```

### 7.1 新建研究

研究任务的自然语言入口。

用户可以：

- 直接输入研究问题；
- 使用目的地研究 / 游客洞察 / 情报监控模板；
- 上传研究资料；
- 引用知识库；
- 选择数据源和工具；
- 选择 Chat Model；
- 选择 Image Model。

### 7.2 研究记录

复用现有 Chat Thread 作为 Research Task 容器，不额外创建第二套 Research Task 数据模型。

一个 Thread 可以承载：

- 初始研究问题
- Agent 检索过程
- 多轮追问
- 引用与证据
- 最终研究结论
- 关联研究报告

### 7.3 知识库

管理：

- 内部旅游资料
- 攻略与目的地文档
- 历史研究成果
- 云盘同步资料
- 可复用团队知识

核心能力继续复用 Hybrid Search / Full-text / Semantic Retrieval / Citation。

### 7.4 数据源

面向旅游研究的数据来源入口。

可包括：

- Google Search
- Google Maps
- Reddit
- YouTube
- Instagram / TikTok 等公开来源
- Web Crawl
- 外部 MCP
- 企业内部 Connector

TripInsight 不要求每一种来源都成为独立业务模块，统一通过 Source / Connector / Tool 能力供 Agent 使用。

### 7.5 研究报告

继续复用 SurfSense 的 Artifacts / Deliverables 体系，不再新建 Report Service。

Research 结果可以进一步生成：

- PDF Research Report
- 文档
- Spreadsheet
- PPT / Slides
- Podcast
- Video Overview
- 图片 / 视觉素材

默认原则：

> 普通研究问题优先在 Thread 内直接给出带引用结论；只有用户明确要求文件或研究模板要求交付成果时，才生成 Deliverable。

### 7.6 自动化

用于周期性目的地研究与情报监控。

第一阶段继续使用现有 Celery + Redis + PostgreSQL Automation Runtime，不为了技术展示新增 Durable Runtime。

### 7.7 调试台

Playground 不再隐藏，中文产品名为 **调试台**。

它的定位不是普通业务用户的主工作流，而是高级能力入口，用于：

- 模型验证
- Prompt 调试
- Tool / Connector 调试
- Agent 行为观察
- Research Workflow 验证

保留调试台有两个价值：

1. 方便开发和迭代 Research Agent；
2. 让系统具备清晰的 AI Application Engineering 可观察面。

---

## 8. 图片生成与多模态成果

图片生成不是 TripInsight 的核心业务，但属于应保留的成果生产能力。

当前策略：

- 图片模型选择器保持可见；
- 不删除 Image Generation 能力；
- 将其定位为研究成果的辅助视觉生产，而不是产品主卖点。

典型使用方式：

- 研究报告封面
- 目的地内容配图草案
- Presentation 视觉素材
- 社媒 / 内容选题概念图
- 报告中的说明性视觉

原则：

> **Research 决定“说什么”，Image Generation 帮助“怎么表达”。**

---

## 9. AI Agent 职责边界

### Agent 负责

- 理解研究问题
- 拆解研究任务
- 选择数据源与工具
- 多轮检索
- 判断证据是否充分
- 识别来源冲突
- 决定是否继续补充研究
- 综合证据形成结论
- 将研究结果交给 Deliverables 生成最终成果

### 确定性系统负责

- 用户与 Workspace 权限
- 数据持久化
- 知识库管理
- Connector 配置
- 自动化调度
- 任务状态
- 引用与来源记录
- 文件与 Artifact 管理
- 结果投递

原则：

> **让 Agent 负责研究与判断，让系统负责状态、权限和数据事实。**

---

## 10. Research Agent 默认协议

TripInsight 在现有 Agent Runtime 之上增加旅游 Research Protocol，而不是重写 Agent Graph。

默认要求：

### Evidence First

重要结论尽可能基于本轮真实检索得到的证据，不把模型记忆伪装成实时事实。

### Citation by Default

涉及具体事实、政策、价格、时间、评论与趋势时，默认提供可追溯来源。

### Freshness Matters

旅游事实高度依赖时间，研究需要关注：

- 发布时间
- 事件发生时间
- 数据采集时间
- 与当前日期的距离

### Conflicts Are Visible

不同可信来源冲突时，展示冲突与不确定性，而不是强行输出一个确定答案。

### Research Before Deliverable

对于“研究 + 生成报告”的请求：

```text
Research
  → Evidence / Citation
  → Synthesis
  → Deliverables
  → Artifact
```

不得直接把未经研究的原始问题交给文档生成器。

### No Fabricated Metrics

不得编造：

- 百分比
- 市场规模
- 情感占比
- 增长率
- 排名
- 因果关系

没有足够数据时明确说明证据边界。

---

## 11. 功能保留与裁剪原则

TripInsight 不采用“看到不是核心就删除”的方式做产品收敛。

### 默认保留

如果上游能力满足以下任一条件，默认保留：

- 对 Research 有直接价值；
- 对成果交付有价值；
- 对高级用户 / 开发调试有价值；
- 能作为后续旅游垂直场景的基础能力；
- 删除后会显著增加上游同步与维护成本。

### 可以隐藏

只有当能力：

- 明显干扰核心工作流；
- 普通用户容易误解；
- 当前完全没有使用场景；
- 暴露会带来安全 / 成本 / 合规风险；

才考虑从默认入口隐藏。

### 可以删除

只有当能力：

- 与 TripInsight 永久无关；
- 维护成本显著；
- 与新架构冲突；
- 已有明确替代；

才进行物理删除。

目前 **Playground 和 Image Generation 均不属于删除项，也不再隐藏**。

---

## 12. MVP 优先级

### P0 — 核心产品闭环

- Research Workspace
- 研究任务 / Thread
- AI Research Agent
- 内部知识库检索
- 开放网络研究
- 多来源引用
- Destination Research
- Traveler Insights
- Research Report
- 中文优先核心体验

### P1 — 业务深化

- Destination Monitoring
- Research Automation 模板
- Destination Brief 历史对比
- Research Eval / Citation Eval
- 团队协作场景验证
- 更完整的 Observability

### Supporting Capabilities — 保留但不抢主线

- Playground / 调试台
- Image Generation
- Podcast / Video
- Spreadsheet / Slides
- MCP / REST API
- 高级模型配置

### P2 — 暂不承诺

- 复杂审批工作流
- 重型 Durable Execution
- 大规模企业治理
- 微服务化
- Kubernetes 平台化

---

## 13. 明确不做（Won't Have）

第一阶段不做：

- C 端 AI 行程规划产品
- 机票搜索与预订
- 酒店搜索与预订
- OTA 交易链路
- 地图路线规划
- 完整旅游 CMS
- CRM
- 社交社区
- 把 TripInsight 做成新的通用 Agent Platform
- 为简历堆技术而引入没有业务价值的基础设施

注意：

> **“不做通用 Agent Platform”不等于删除 Playground、MCP、模型配置等平台能力。**

这些能力可以作为 TripInsight 内部和高级用户使用的基础设施存在，但市场与产品主定位仍然是旅游 Research Workspace。

---

## 14. 成功标准

第一阶段不以功能数量为成功标准。

一个完整 Demo 应该能够证明：

1. 用户提出一个真实旅游研究问题；
2. Agent 自动拆解并调用多个来源；
3. 同时利用内部知识与开放网络；
4. 重要结论能够关联来源；
5. Agent 能识别信息不足或来源冲突；
6. 最终形成结构清晰的研究结论；
7. 用户可进一步生成 PDF / Slides 等成果；
8. 研究结果可继续沉淀到 Workspace；
9. 同类问题可通过 Automation 持续监控。

### AI 质量指标

逐步建立：

- Citation Accuracy
- Evidence Groundedness
- Source Coverage
- Freshness Accuracy
- Research Task Success Rate
- Retrieval Recall
- Tool Selection Accuracy
- Hallucination Rate

### 工程指标

关注：

- Agent 首字 / 首事件延迟
- Research 总耗时
- Tool 调用成功率
- Connector 成功率
- Token / Cost
- Automation 成功率
- Deliverable 生成成功率

---

## 15. 产品设计原则

### Research over Chat

Chat 是交互方式，Research 才是核心价值。

### Evidence over Fluent Answer

优先可信与可核验，不追求没有证据的流畅长回答。

### Workspace over One-shot Answer

研究结果应该沉淀、复用、追问和持续更新。

### Insight over Generic Content Generation

优先发现事实、变化、用户需求与机会，再决定是否生成内容。

### Vertical Product over Generic Platform

底层能力可以完整，用户看到的默认工作流必须是旅游行业问题。

### Reuse over Rewrite

优先复用 SurfSense 已有成熟能力；只有明确业务价值时才做重构或替换。

### Product Value over Infrastructure Complexity

第一阶段不以 Durable Execution、微服务或 Kubernetes 等基础设施能力作为项目卖点。

---

## 16. 与 SurfSense 的关系

TripInsight 基于 [MODSetter/SurfSense](https://github.com/MODSetter/SurfSense) 开源项目进行二次开发。

TripInsight 保留并复用上游成熟能力，包括但不限于：

- Knowledge Base
- Hybrid Search / RAG
- Citation
- Agent / Tool Calling
- Live Data Connectors
- MCP
- Deliverables / Artifacts
- Image Generation
- Automations
- Collaboration
- Playground

二次开发重点是：

- 旅游行业产品定位
- 中文优先体验
- Research Workspace 信息架构
- 旅游 Research Agent Protocol
- Destination Research / Traveler Insights / Monitoring
- 研究到报告的完整交付链路
- 后续 Research Eval 与业务质量验证

TripInsight 不把 SurfSense 上游贡献包装成原创实现，并保留相关版权与许可证信息。

同时，TripInsight 是一个独立设计的公开项目，不复刻任何非公开企业内部系统、代码、页面、流程、指标或数据配置。

---

## 17. 当前阶段

### 已完成

- TripInsight 产品定位与品牌
- 中文优先核心体验
- Research Workspace 导航语义
- Destination / Traveler / Monitoring 三类研究模板
- TripInsight Research Protocol
- Research → Evidence → Deliverables → Artifact 协议
- PDF Research Report Demo Path
- Playground 恢复为「调试台」
- Chat Model + Image Model 主入口保留

### 下一阶段

优先投入真正能提升产品质量的工作：

1. Research Eval / Citation Eval；
2. Destination Monitoring 的真实业务 Demo；
3. Research Automation 模板；
4. 研究历史变化对比；
5. 真实多来源旅游数据下的 Agent 行为与引用质量优化。

暂不把精力投入到新的 Durable Runtime 或平台化重构。