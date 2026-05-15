/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: markup widget renders trusted CMS HTML */

import css from "./index.module.css";

interface MarkupContentProps {
	content: string;
	className?: string;
}

export default function MarkupContent({ content, className }: MarkupContentProps) {
	return (
		<div
			className={`${css.root} ${className ?? ""}`.trim()}
			dangerouslySetInnerHTML={{ __html: content }}
		/>
	);
}
