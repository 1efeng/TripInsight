"use client";

import { usePathname } from "next/navigation";
import { FooterNew } from "@/components/homepage/footer-new";
import { GlobalAnnouncement } from "@/components/homepage/global-announcement";
import { Navbar } from "@/components/homepage/navbar";

export default function HomePageLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const isTripInsightLanding = pathname === "/";
	const isAuthPage = pathname === "/login" || pathname === "/register";
	const isFreeModelChat = /^\/free\/[^/]+$/.test(pathname);

	if (isFreeModelChat) {
		return <>{children}</>;
	}

	// TripInsight owns the root marketing experience. Keep the upstream SurfSense
	// shell available for legacy secondary routes until they are productized.
	if (isTripInsightLanding) {
		return <main className="min-h-screen overflow-x-hidden">{children}</main>;
	}

	return (
		<main className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 text-gray-900 dark:from-black dark:to-gray-900 dark:text-white overflow-x-hidden">
			<GlobalAnnouncement />
			<Navbar />
			{children}
			{!isAuthPage && <FooterNew />}
		</main>
	);
}
