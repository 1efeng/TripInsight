import {
	ArrowRight,
	Binoculars,
	BookOpenCheck,
	Bot,
	ChartNoAxesCombined,
	CircleCheck,
	Globe2,
	Quote,
	Radar,
	Route,
	SearchCheck,
	Sparkles,
} from "lucide-react";
import Link from "next/link";

const scenarios = [
	{
		icon: Binoculars,
		title: "目的地深度研究",
		description:
			"把站内知识、官方信息和开放网络数据放进同一次研究任务，输出可追溯的目的地研究报告。",
		example: "例如：东京秋季情侣旅行市场、热门区域、消费变化与内容机会。",
	},
	{
		icon: ChartNoAxesCombined,
		title: "游客反馈洞察",
		description: "聚合评论、视频、社区讨论和历史内容，识别高频诉求、槽点、趋势变化与潜在内容选题。",
		example: "例如：最近三个月大阪热门景点的主要投诉与正向反馈。",
	},
	{
		icon: Radar,
		title: "目的地情报监控",
		description: "持续关注开放时间、预约政策、交通、价格和热门趋势，让重要变化自动进入研究工作台。",
		example: "例如：每周生成京都目的地变化 Brief，并保留全部来源。",
	},
];

const capabilities = [
	{
		icon: Globe2,
		title: "开放网络研究",
		description: "从搜索、网页、地图、视频和社区等公开来源获取实时旅游信息。",
	},
	{
		icon: BookOpenCheck,
		title: "旅游知识库",
		description: "沉淀攻略、目的地资料、运营文档与历史研究成果，支持混合检索。",
	},
	{
		icon: Quote,
		title: "证据与引用",
		description: "研究结论绑定来源，让内容团队可以快速核验，而不是只相信模型输出。",
	},
	{
		icon: Bot,
		title: "Research Agent",
		description: "自动拆解问题、选择数据源、连续检索、比较证据并整理研究结论。",
	},
];

const researchSteps = [
	{
		icon: Route,
		label: "理解任务",
		description: "拆解研究目标与关键问题",
	},
	{
		icon: SearchCheck,
		label: "检索证据",
		description: "联合知识库与开放网络",
	},
	{
		icon: Sparkles,
		label: "形成洞察",
		description: "比较、归纳并识别变化",
	},
	{
		icon: CircleCheck,
		label: "交付结果",
		description: "生成带引用的 Research Brief",
	},
];

export function TripInsightHome() {
	return (
		<div className="min-h-screen bg-[#f7f8fa] text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
			<header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f8fa]/90 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/90">
				<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
					<Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
						<span className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
							<Globe2 className="h-5 w-5" />
						</span>
						<span className="text-lg">TripInsight</span>
					</Link>

					<nav className="hidden items-center gap-7 text-sm text-zinc-600 md:flex dark:text-zinc-300">
						<a href="#scenarios" className="transition hover:text-zinc-950 dark:hover:text-white">
							核心场景
						</a>
						<a href="#workflow" className="transition hover:text-zinc-950 dark:hover:text-white">
							工作方式
						</a>
						<a
							href="#capabilities"
							className="transition hover:text-zinc-950 dark:hover:text-white"
						>
							产品能力
						</a>
					</nav>

					<div className="flex items-center gap-2">
						<Link
							href="/login"
							className="hidden rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition hover:text-zinc-950 sm:inline-flex dark:text-zinc-300 dark:hover:text-white"
						>
							登录
						</Link>
						<Link
							href="/login"
							className="inline-flex h-10 items-center gap-2 rounded-xl bg-zinc-950 px-4 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
						>
							进入工作台
							<ArrowRight className="h-4 w-4" />
						</Link>
					</div>
				</div>
			</header>

			<main>
				<section className="mx-auto max-w-7xl px-5 pb-20 pt-20 md:px-8 md:pb-28 md:pt-28">
					<div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
						<div>
							<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm text-zinc-600 shadow-sm dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300">
								<Sparkles className="h-4 w-4" />
								AI 旅游研究与目的地情报工作台
							</div>
							<h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl md:text-6xl">
								把分散的旅游信息，
								<br />
								变成可行动的目的地洞察
							</h1>
							<p className="mt-7 max-w-2xl text-base leading-8 text-zinc-600 md:text-lg dark:text-zinc-300">
								面向旅游内容、目的地运营与研究团队。TripInsight
								将站内知识与开放网络实时信息结合，通过 AI Agent
								完成目的地研究、游客反馈洞察、内容选题和持续情报监控。
							</p>
							<div className="mt-8 flex flex-wrap gap-3">
								<Link
									href="/login"
									className="inline-flex h-12 items-center gap-2 rounded-xl bg-zinc-950 px-5 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
								>
									开始研究
									<ArrowRight className="h-4 w-4" />
								</Link>
								<a
									href="#scenarios"
									className="inline-flex h-12 items-center rounded-xl border border-black/10 bg-white px-5 text-sm font-medium shadow-sm transition hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-900 dark:hover:bg-zinc-800"
								>
									查看核心场景
								</a>
							</div>
						</div>

						<div className="rounded-3xl border border-black/10 bg-white p-4 shadow-[0_30px_80px_-45px_rgba(0,0,0,0.35)] dark:border-white/10 dark:bg-zinc-900">
							<div className="rounded-2xl border border-black/5 bg-[#fafafa] p-5 dark:border-white/10 dark:bg-zinc-950">
								<div className="flex items-center justify-between border-b border-black/5 pb-4 dark:border-white/10">
									<div>
										<p className="text-sm font-medium">东京秋季目的地研究</p>
										<p className="mt-1 text-xs text-zinc-500">Research Brief · 实时研究中</p>
									</div>
									<span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
										12 个来源
									</span>
								</div>

								<div className="space-y-3 py-5">
									{[
										["Google Maps", "分析热门区域与近期游客评论"],
										["Web Research", "核验活动、交通与开放信息"],
										["Knowledge Base", "对照历史攻略和内部目的地资料"],
									].map(([source, detail]) => (
										<div
											key={source}
											className="flex items-center gap-3 rounded-xl border border-black/5 bg-white p-3 dark:border-white/10 dark:bg-zinc-900"
										>
											<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
												<SearchCheck className="h-4 w-4" />
											</span>
											<div>
												<p className="text-xs font-medium">{source}</p>
												<p className="mt-0.5 text-xs text-zinc-500">{detail}</p>
											</div>
										</div>
									))}
								</div>

								<div className="rounded-xl bg-zinc-950 p-4 text-white dark:bg-white dark:text-zinc-950">
									<p className="text-xs font-medium opacity-60">发现</p>
									<p className="mt-2 text-sm leading-6">
										涩谷与银座仍是高热区域，但近期评论中“排队时间”和“夜间体验”成为增长最快的两个关注点。
									</p>
									<div className="mt-3 flex items-center gap-2 text-xs opacity-60">
										<Quote className="h-3.5 w-3.5" />
										每条结论保留可核验来源
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					id="scenarios"
					className="border-y border-black/5 bg-white py-20 dark:border-white/10 dark:bg-zinc-900/40"
				>
					<div className="mx-auto max-w-7xl px-5 md:px-8">
						<div className="max-w-2xl">
							<p className="text-sm font-medium text-zinc-500">核心业务场景</p>
							<h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
								不是旅游聊天机器人，而是研究工作台
							</h2>
							<p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-300">
								围绕旅游平台真实的信息研究与内容运营工作，把 Research、Knowledge、Insight 和
								Automation 放在同一个工作区。
							</p>
						</div>

						<div className="mt-10 grid gap-4 md:grid-cols-3">
							{scenarios.map((scenario) => {
								const Icon = scenario.icon;
								return (
									<article
										key={scenario.title}
										className="rounded-2xl border border-black/10 bg-[#fafafa] p-6 dark:border-white/10 dark:bg-zinc-950"
									>
										<span className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white dark:border-white/10 dark:bg-zinc-900">
											<Icon className="h-5 w-5" />
										</span>
										<h3 className="mt-5 text-lg font-semibold">{scenario.title}</h3>
										<p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
											{scenario.description}
										</p>
										<p className="mt-5 border-t border-black/5 pt-4 text-xs leading-5 text-zinc-500 dark:border-white/10">
											{scenario.example}
										</p>
									</article>
								);
							})}
						</div>
					</div>
				</section>

				<section id="workflow" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
					<div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
						<div>
							<p className="text-sm font-medium text-zinc-500">Research Workflow</p>
							<h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
								从问题到可核验的 Destination Brief
							</h2>
							<p className="mt-5 leading-7 text-zinc-600 dark:text-zinc-300">
								让 Agent
								负责理解问题、检索和分析；让知识库、数据源与引用系统负责提供可以被验证的证据。
							</p>
						</div>
						<div className="grid gap-3 sm:grid-cols-2">
							{researchSteps.map((step, index) => {
								const Icon = step.icon;
								return (
									<div
										key={step.label}
										className="rounded-2xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-zinc-900"
									>
										<div className="flex items-center justify-between">
											<span className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800">
												<Icon className="h-4 w-4" />
											</span>
											<span className="text-xs font-medium text-zinc-400">0{index + 1}</span>
										</div>
										<h3 className="mt-4 font-semibold">{step.label}</h3>
										<p className="mt-1.5 text-sm text-zinc-500">{step.description}</p>
									</div>
								);
							})}
						</div>
					</div>
				</section>

				<section
					id="capabilities"
					className="border-y border-black/5 bg-zinc-950 py-20 text-white dark:border-white/10 dark:bg-black"
				>
					<div className="mx-auto max-w-7xl px-5 md:px-8">
						<div className="max-w-2xl">
							<p className="text-sm font-medium text-zinc-400">产品能力</p>
							<h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
								研究质量优先于功能堆叠
							</h2>
						</div>
						<div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
							{capabilities.map((capability) => {
								const Icon = capability.icon;
								return (
									<div key={capability.title} className="bg-zinc-950 p-6 dark:bg-black">
										<Icon className="h-5 w-5 text-zinc-300" />
										<h3 className="mt-5 font-semibold">{capability.title}</h3>
										<p className="mt-3 text-sm leading-6 text-zinc-400">{capability.description}</p>
									</div>
								);
							})}
						</div>
					</div>
				</section>

				<section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
					<div className="rounded-3xl border border-black/10 bg-white px-6 py-12 text-center shadow-sm md:px-10 dark:border-white/10 dark:bg-zinc-900">
						<p className="text-sm font-medium text-zinc-500">TripInsight</p>
						<h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
							让旅游团队把时间花在判断上，而不是反复搜资料
						</h2>
						<p className="mx-auto mt-5 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-300">
							Research · Knowledge · Insight · Automation
						</p>
						<Link
							href="/login"
							className="mt-7 inline-flex h-12 items-center gap-2 rounded-xl bg-zinc-950 px-5 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
						>
							进入 TripInsight
							<ArrowRight className="h-4 w-4" />
						</Link>
					</div>
				</section>
			</main>

			<footer className="border-t border-black/5 py-7 dark:border-white/10">
				<div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between md:px-8">
					<span>TripInsight · AI 旅游研究与目的地情报工作台</span>
					<span>Built on open-source SurfSense capabilities.</span>
				</div>
			</footer>
		</div>
	);
}
