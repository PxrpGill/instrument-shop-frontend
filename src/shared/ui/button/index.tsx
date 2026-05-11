import Link from "next/link";
import type { ButtonComponentProps } from "@/shared/types/button.types";

import css from "./index.module.css";

export default function Button({
	children,
	className,
	size = "m",
	theme = "dark",
	href,
	target = "_self",
	onClick,
	variant = "default",
	type = "button",
	leftIcon,
	rightIcon,
}: ButtonComponentProps) {
	if (href)
		return (
			<Link
				href={href}
				target={target}
				className={`${css.root} ${className} ${css[size]} ${css[theme]} ${css[variant]}`.trim()}
			>
				{leftIcon}
				{children}
				{rightIcon}
			</Link>
		);

	return (
		<button
			onClick={onClick}
			type={type}
			className={`${css.root} ${className} ${css[size]} ${css[theme]} ${css[variant]}`.trim()}
		>
			{leftIcon}
			{children}
			{rightIcon}
		</button>
	);
}
