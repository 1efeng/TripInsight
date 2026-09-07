import type { Metadata, Viewport } from "next";
import "./globals.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import { Roboto } from "next/font/google";
import Script from "next/script";
import { AnnouncementToastProvider } from "@/components/announcements/AnnouncementToastProvider";
import { DesktopUpdateToast } from "@/components/desktop/desktop-update-toast";
import { AuthCutoverPurge } from "@/components/providers/AuthCutoverPurge";
import { GlobalLoadingProvider } from "@/components/providers/GlobalLoadingProvider";
import { I18nProvider } from "@/components/providers/I18nProvider";
import { PostHogProvider } from "@/components/providers/PostHogProvider";
import { ZeroProvider } from "@/components/providers/ZeroProvider";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { LocaleProvider } from "@/contexts/LocaleContext";
import { PlatformProvider } from "@/contexts/platform-context";
import { BUILD_TIME_AUTH_TYPE } from "@/lib/env-config";
import { ReactQueryClientProvider } from "@/lib/query-client/query-client.provider";
import { getRuntimeAuthInitScript, resolveRuntimeAuthUiMode } from "@/lib/runtime-auth-config";
import { cn } from "@/lib/utils";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	display: "swap",
	variable: "--font-roboto",
});

/**
 * Viewport configuration for mobile keyboard handling.
 * - interactiveWidget: 'resizes-content' tells mobile browsers (especially Chrome Android)
 *   to resize the CSS layout viewport when the virtual keyboard opens, so sticky elements
 *   (like the chat input bar) stay visible above the keyboard.
 * - viewportFit: 'cover' enables env(safe-area-inset-*) for notched/home-indicator devices.
 */
export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	viewportFit: "cover",
	interactiveWidget: "resizes-content",
};

export const metadata: Metadata = {
	title: {
		default: "TripInsight - AI 旅游研究与目的地情报工作台",
		template: "%s | TripInsight",
	},
	description:
		"面向旅游内容、目的地运营与研究团队，连接内部知识与开放网络实时信息，通过 AI Agent 完成目的地研究、游客反馈洞察与持续情报监控。",
	keywords: [
		"TripInsight",
		"AI 旅游研究",
		"目的地情报",
		"目的地研究",
		"游客洞察",
		"旅游内容研究",
		"Research Agent",
		"Destination Intelligence",
	],
	openGraph: {
		title: "TripInsight - AI 旅游研究与目的地情报工作台",
		description:
			"连接内部知识与开放网络实时信息，用 AI Agent 完成目的地研究、游客洞察和持续情报监控。",
		siteName: "TripInsight",
		type: "website",
		locale: "zh_CN",
	},
	twitter: {
		card: "summary_large_image",
		title: "TripInsight - AI 旅游研究与目的地情报工作台",
		description: "AI Travel Research & Destination Intelligence Workspace",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="zh-CN"
			data-surfsense-auth-type={resolveRuntimeAuthUiMode(BUILD_TIME_AUTH_TYPE)}
			suppressHydrationWarning
		>
			<head>
				<Script id="surfsense-runtime-auth-init" strategy="beforeInteractive">
					{getRuntimeAuthInitScript(BUILD_TIME_AUTH_TYPE)}
				</Script>
				<link rel="preconnect" href="https://api.github.com" />
			</head>
			<body className={cn(roboto.className, "bg-main-panel antialiased h-full w-full ")}>
				<PostHogProvider>
					<LocaleProvider>
						<I18nProvider>
							<ThemeProvider
								attribute="class"
								enableSystem
								disableTransitionOnChange
								defaultTheme="system"
							>
								<PlatformProvider>
									<RootProvider>
										<ReactQueryClientProvider>
											<AuthCutoverPurge />
											<ZeroProvider>
												<GlobalLoadingProvider>{children}</GlobalLoadingProvider>
											</ZeroProvider>
										</ReactQueryClientProvider>
										<DesktopUpdateToast />
										<Toaster />
										<AnnouncementToastProvider />
									</RootProvider>
								</PlatformProvider>
							</ThemeProvider>
						</I18nProvider>
					</LocaleProvider>
				</PostHogProvider>
			</body>
		</html>
	);
}
