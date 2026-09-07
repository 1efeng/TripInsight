"use client";

import type React from "react";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import enMessages from "../messages/en.json";
import zhMessages from "../messages/zh.json";

type Locale = "en" | "es" | "pt" | "hi" | "zh" | "ko";

const loadMessages = async (locale: Locale): Promise<typeof enMessages> => {
	switch (locale) {
		case "es":
			return (await import("../messages/es.json")).default;
		case "hi":
			return (await import("../messages/hi.json")).default;
		case "pt":
			return (await import("../messages/pt.json")).default;
		case "zh":
			return zhMessages;
		case "ko":
			return (await import("../messages/ko.json")).default;
		default:
			return enMessages;
	}
};

interface LocaleContextType {
	locale: Locale;
	messages: typeof enMessages;
	setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);
const LOCALE_STORAGE_KEY = "tripinsight-locale";
const SUPPORTED_LOCALES: readonly Locale[] = ["en", "es", "pt", "hi", "zh", "ko"];
const htmlLang = (locale: Locale) => (locale === "zh" ? "zh-CN" : locale);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
	const [locale, setLocaleState] = useState<Locale>("zh");
	const [messages, setMessages] = useState<typeof enMessages>(zhMessages);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		if (typeof window === "undefined") return;

		const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
		if (!stored || !SUPPORTED_LOCALES.includes(stored) || stored === "zh") return;

		void loadMessages(stored).then((storedMessages) => {
			setMessages(storedMessages);
			setLocaleState(stored);
		});
	}, []);

	const setLocale = useCallback(async (newLocale: Locale) => {
		const newMessages = await loadMessages(newLocale);
		setMessages(newMessages);
		setLocaleState(newLocale);
		if (typeof window !== "undefined") {
			localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
			document.documentElement.lang = htmlLang(newLocale);
		}
	}, []);

	useEffect(() => {
		if (typeof window !== "undefined" && mounted) {
			document.documentElement.lang = htmlLang(locale);
		}
	}, [locale, mounted]);

	const contextValue = useMemo(
		() => ({ locale, messages, setLocale }),
		[locale, messages, setLocale]
	);

	return <LocaleContext.Provider value={contextValue}>{children}</LocaleContext.Provider>;
}

export function useLocaleContext() {
	const context = useContext(LocaleContext);
	if (context === undefined) {
		throw new Error("useLocaleContext must be used within a LocaleProvider");
	}
	return context;
}
