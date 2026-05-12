import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import css from "./index.module.css";

export default function SearchFilter({ className }: PropsWithClassName) {
	return (
		<div className={`${css.root} ${className}`.trim()}>
			<p className={css.title}>Поиск</p>
		</div>
	);
}
