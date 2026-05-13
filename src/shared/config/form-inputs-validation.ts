import type { RegisterOptions } from "react-hook-form";

export const FULL_NAME_VALIDATION: RegisterOptions = {
	required: "Введите имя",
	pattern: {
		value: /^[^\d]+$/,
		message: "Имя не должно содержать цифры",
	},
	validate: (value: string) => {
		if (value !== value.trim()) return "Имя не должно начинаться или заканчиваться пробелом";
		if (/\s{2,}/.test(value)) return "Имя не должно содержать несколько пробелов подряд";
		return true;
	},
};

export const PHONE_VALIDATION: RegisterOptions = {
	required: "Введите номер телефона",
	pattern: {
		value: /^(\+7|8)[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
		message: "Введите корректный номер телефона в формате +7 (XXX) XXX-XX-XX",
	},
};

export const EMAIL_VALIDATION: RegisterOptions = {
	required: "Введите email",
	pattern: {
		value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
		message: "Введите корректный адрес электронной почты",
	},
};
