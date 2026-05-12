/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import type { ShowcaseProductListProps } from "../../types/showcase-section.types";
import css from "./index.module.css";

export default function ProductList({
	title,
	products,
	className,
}: ShowcaseProductListProps) {
	if (!products?.length) return null;

	return (
		<AnimationWrapper className={`${css.root} ${className}`}>
			{title && <h4 dangerouslySetInnerHTML={{ __html: title }} />}
		</AnimationWrapper>
	);
}
