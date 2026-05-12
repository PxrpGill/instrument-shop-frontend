/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/security/noDangerouslySetInnerHtmlWithChildren: <explanation> */

"use client";

import { ArrowUpRightIcon } from "@phosphor-icons/react";

import Button from "@/shared/ui/button";
import type { ShowcaseSectionHeaderProps } from "../../types/showcase-section.types";
import css from "./index.module.css";

export default function SectionHeader({
	title,
	className,
	button,
}: ShowcaseSectionHeaderProps) {
	return (
		<div className={`${css.root} ${className} container`.trim()}>
			<h2
				className={css.title}
				dangerouslySetInnerHTML={{ __html: title ?? "" }}
			/>
			{button && (
				<Button
					href={button.href}
					target={button.target}
					className={css.button}
					rightIcon={<ArrowUpRightIcon className={css.icon} weight="bold" />}
				>
					{button.title}
				</Button>
			)}
		</div>
	);
}
