import { APP_ROUTES } from "@/shared/config/app-routes";
import type { SiteLinkProps } from "@/shared/types/button.types";

export const FOOTER_LINKS: Array<SiteLinkProps> = [
	{
		title: "Главная",
		href: APP_ROUTES.base,
	},
	{
		title: "Каталог",
		href: APP_ROUTES.catalog,
	},
	{
		title: "Новости",
		href: APP_ROUTES.news,
	},
	{
		title: "О нас",
		href: APP_ROUTES.about,
	},
	{
		title: "Обратная связь",
		href: APP_ROUTES.feedback,
	},
	{
		title: "Покупателям",
		href: APP_ROUTES.buyers,
	},
];
