/** biome-ignore-all lint/performance/noImgElement: <explanation> */

import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import css from "./index.module.css";

export type ReviewAuthorProps = {
	fullName: string;
	icon?: string;
} & PropsWithClassName;

export default function ReviewAuthor({
	fullName,
	icon,
	className,
}: ReviewAuthorProps) {
	return (
		<div className={`${css.root} ${className}`}>
			<div className={css.imageWrapper}>
				{icon && (
					<img className={css.icon} src={icon} alt="Изображение автора" />
				)}
			</div>
			<p className={css.fullName}>{fullName}</p>
		</div>
	);
}
