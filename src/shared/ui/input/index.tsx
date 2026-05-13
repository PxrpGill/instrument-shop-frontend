"use client";

import { type ChangeEvent, type ComponentPropsWithoutRef, type ReactNode, useId } from "react";

import css from "./index.module.css";

export type InputSize = "s" | "m" | "l";

export type InputProps = Omit<ComponentPropsWithoutRef<"input">, "size"> & {
	label?: string;
	hint?: string;
	error?: string;
	size?: InputSize;
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
	className?: string;
};

function applyPhoneMask(value: string): string {
	const digits = value.replace(/\D/g, "");
	let cleaned = digits.startsWith("7") || digits.startsWith("8") ? digits.slice(1) : digits;
	cleaned = cleaned.slice(0, 10);

	if (cleaned.length === 0) return digits.length > 0 ? "+7 (" : "";

	let result = `+7 (${cleaned.slice(0, 3)}`;
	if (cleaned.length <= 3) return result;
	result += `) ${cleaned.slice(3, 6)}`;
	if (cleaned.length <= 6) return result;
	result += `-${cleaned.slice(6, 8)}`;
	if (cleaned.length <= 8) return result;
	return `${result}-${cleaned.slice(8, 10)}`;
}

export default function Input({
	label,
	hint,
	error,
	size = "m",
	leftIcon,
	rightIcon,
	className = "",
	id,
	disabled,
	type,
	onChange,
	...rest
}: InputProps) {
	const generatedId = useId();
	const inputId = id ?? generatedId;

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		if (type === "tel") {
			e.target.value = applyPhoneMask(e.target.value);
		} else if (type === "email") {
			e.target.value = e.target.value.replace(/[^\x00-\x7F]/g, "");
		}
		onChange?.(e);
	}

	return (
		<div
			className={`${css.root} ${css[size]} ${error ? css.hasError : ""} ${disabled ? css.disabled : ""} ${className}`.trim()}
		>
			{label && (
				<label htmlFor={inputId} className={css.label}>
					{label}
				</label>
			)}

			<div className={css.inputWrapper}>
				{leftIcon && (
					<span className={`${css.icon} ${css.iconLeft}`}>{leftIcon}</span>
				)}

				<input
					{...rest}
					id={inputId}
					type={type}
					disabled={disabled}
					onChange={handleChange}
					className={`${css.input} ${leftIcon ? css.hasLeftIcon : ""} ${rightIcon ? css.hasRightIcon : ""}`.trim()}
				/>

				{rightIcon && (
					<span className={`${css.icon} ${css.iconRight}`}>{rightIcon}</span>
				)}

				<span className={css.focusBar} aria-hidden />
			</div>

			{(error || hint) && (
				<span className={`${css.message} ${error ? css.errorMessage : ""}`}>
					{error ?? hint}
				</span>
			)}
		</div>
	);
}
