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
	type = "button",
}: ButtonComponentProps) {
	if (href)
		return (
			<Link
				href={href}
				target={target}
				className={`${css.root} ${className} ${size} ${theme}`.trim()}
			>
				{children}
			</Link>
		);

	return (
		<button
			onClick={onClick}
			type={type}
			className={`${css.root} ${className} ${size} ${theme}`.trim()}
		>
			{children}
		</button>
	);
}
