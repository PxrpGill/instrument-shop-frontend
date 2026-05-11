import type { PropsWithChildren, ReactNode } from "react";
import type { PropsWithClassName } from "./props-with-classname";

export type CustomLinkProps = {
	href?: string;
	target?: "_self" | "_blank";
} & PropsWithChildren &
	PropsWithClassName;

export type CustomButtonProps = {
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
} & PropsWithChildren &
	PropsWithClassName;

export type ButtonComponentVariantsType = "default" | "blank";

export type ButtonComponentSizeType = "s" | "m" | "l";

export type ButtonComponentThemeType = "light" | "dark";

export type ButtonComponentProps = {
	theme?: ButtonComponentThemeType;
	size?: ButtonComponentSizeType;
	variant?: ButtonComponentVariantsType;
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
} & PropsWithClassName &
	PropsWithChildren &
	Omit<CustomButtonProps, "children" | "className"> &
	Omit<CustomLinkProps, "children" | "className">;
