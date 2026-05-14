import type { PropsWithClassName } from "@/shared/types/props-with-classname";

import css from "./index.module.css";

type SpecRowProps = PropsWithClassName & {
	label: string;
	value: string | number;
};

export default function SpecRow({ label, value, className }: SpecRowProps) {
	return (
		<div className={`${css.root} ${className ?? ""}`.trim()}>
			<span className={css.label}>{label}</span>
			<span className={css.dots} aria-hidden="true" />
			<span className={css.value}>{value}</span>
		</div>
	);
}
