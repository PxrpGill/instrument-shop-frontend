/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import type { NewsSectionHeaderProps } from "../../types/news-section.types";

import css from "./index.module.css";

export default function SectionHeader({
	title,
	description,
	className,
}: NewsSectionHeaderProps) {
	return (
		<div className={`${css.root} ${className} container`.trim()}>
			{title && (
				<h1 dangerouslySetInnerHTML={{ __html: title }} className={css.title} />
			)}
			{description && (
				<p
					dangerouslySetInnerHTML={{ __html: description }}
					className={css.description}
				/>
			)}
		</div>
	);
}
