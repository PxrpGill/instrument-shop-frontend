"use client";

import { type ComponentPropsWithoutRef, type ReactNode, useId } from "react";

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
	...rest
}: InputProps) {
	const generatedId = useId();
	const inputId = id ?? generatedId;

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
					disabled={disabled}
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
