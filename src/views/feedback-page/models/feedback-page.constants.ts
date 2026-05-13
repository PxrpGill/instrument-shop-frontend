import { APP_ROUTES } from "@/shared/config/app-routes";
import type { FormSettingsType } from "@/shared/types/form-settings.types";
import type { FeedbackSectionProps } from "@/widgets/feedback-section/types/feedback-section.types";
import type { NewsCtaSectionProps } from "@/widgets/news-cta-section/types/news-cta-section.types";

export const FEEDBACK_SECTION_DATA: Omit<FeedbackSectionProps, "formInputs"> = {
	title: "Возникли вопросы?",
	description:
		"Мы&nbsp;здесь, чтобы помочь.<br /><br /> Заполните форму ниже, и&nbsp;наша служба поддержки разберется в&nbsp;вашей ситуации максимально быстро.",
};

export const FEEDBACK_FORM_SETTINGS: FormSettingsType["formInputs"] = [
	{
		layout: "grid",
		inputs: [
			{
				registrationId: "fullName",
				inputName: "input",
				inputProps: {
					label: "Как к вам обращаться?",
					placeholder: "Например: Иван Иванов",
				},
			},
			{
				registrationId: "email",
				inputName: "input",
				inputProps: {
					type: "email",
					label: "Email для обратной связи",
					placeholder: "example@gmail.com",
				},
			},
			{
				registrationId: "phone",
				inputName: "input",
				inputProps: {
					type: "tel",
					label: "Номер телефона",
					placeholder: "+7 (999) 999-99-99",
				},
			},
		],
	},
	{
		layout: "linear",
		inputs: [
			{
				registrationId: "message",
				inputName: "textarea",
				inputProps: {
					label: "Опишите ваш вопрос или проблему",
					placeholder: "Напишите, чем мы можем вам помочь",
				},
			},
		],
	},
	{
		layout: "linear",
		inputs: [
			{
				registrationId: "agreement",
				inputName: "checkbox",
				inputProps: {
					label:
						"Нажимая кнопку &laquo;Отправить&raquo;, вы&nbsp;соглашаетесь с&nbsp;<a href='/user-agreement' target='_blank'>обработкой персональных данных</a> и&nbsp;условиями <a href='/privacy-policy' target='_blank'>политики конфиденциальности</a>.",
				},
			},
		],
	},
];

export const NEWS_CTA_SECTION_DATA: NewsCtaSectionProps = {
	title: "Жизнь нашего магазина",
	description:
		"Мы&nbsp;постоянно обновляем ассортимент и&nbsp;делимся внутренними новостями: от&nbsp;графиков работы в&nbsp;праздники до&nbsp;фотоотчетов с&nbsp;испытаний нового оборудования.",
	button: {
		title: "Смотреть новости",
		href: APP_ROUTES.news,
	},
	poster: {
		webp: {
			src: "/mock/hero/hero.webp",
		},
	},
};
