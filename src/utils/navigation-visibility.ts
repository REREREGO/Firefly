import settings from "@/config/authorSettings.json";
export function navigationVisible(key: string): boolean {
	const flags = settings.navigationVisibility as Record<string, boolean>;
	return flags?.[key] !== false;
}
