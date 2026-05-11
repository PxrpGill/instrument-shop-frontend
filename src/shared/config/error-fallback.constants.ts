import { APP_ROUTES } from "./app-routes";

export type ErrorFallbackDataType = {
	title: string;
	description: string;
	button?: {
		title: string;
		href: string;
	};
};

export const ERROR_FALLBACK_404: ErrorFallbackDataType = {
	title: "Похоже, вы попали на несуществующую страницу!",
	description: "Давайте вернемся на главную страницу.",
	button: {
		title: "На главную",
		href: APP_ROUTES.base,
	},
};

export const ERROR_FALLBACK_500: ErrorFallbackDataType = {
	title: "Ой! У нас что-то сломалось.",
	description: "Попробуйте зайти позже. Мы уже работаем над этой проблемой.",
};
