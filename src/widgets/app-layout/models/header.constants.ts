import { APP_ROUTES } from "@/shared/config/app-routes";
import type { SiteLinkProps } from "@/shared/types/button.types";

export const HEADER_NAVIGATION_DATA: Array<SiteLinkProps> = [
	{
		title: "Каталог",
		href: APP_ROUTES.catalog,
	},
	{
		title: "О нас",
		href: APP_ROUTES.about,
	},
	{
		title: "Новости",
		href: APP_ROUTES.news,
	},
	{
		title: "Покупателям",
		href: APP_ROUTES.buyers,
	},
	{
		title: "Поддержка",
		href: APP_ROUTES.feedback,
	},
];
