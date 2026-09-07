import type { Metadata } from "next";
import { AuthRedirect } from "@/components/homepage/auth-redirect";
import { TripInsightHome } from "@/components/homepage/tripinsight-home";

export const metadata: Metadata = {
	title: "TripInsight — AI 旅游研究与目的地情报工作台",
	description:
		"面向旅游内容、目的地运营与研究团队，结合站内知识与开放网络实时信息，完成目的地研究、游客反馈洞察与持续情报监控。",
};

export default function HomePage() {
	return (
		<>
			<AuthRedirect />
			<TripInsightHome />
		</>
	);
}
