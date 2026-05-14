/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import SpecRow from "@/shared/ui/spec-row";
import type { ProductTechicalSpecificationsProps } from "@/widgets/product-details/types/product-details.types";
import css from "./index.module.css";

export default function ProductTechicalSpecifications({
	techicalSpecification,
	className,
}: ProductTechicalSpecificationsProps) {
	if (!techicalSpecification?.length) return null;

	return (
		<div className={`${css.root} ${className}`.trim()}>
			<h4 className={css.title}>Технические характеристики</h4>
			<ul className={css.list}>
				{techicalSpecification.map((specification, index) => (
					<li key={index} className={css.paragraph}>
						<h6
							className={css.specificationTitle}
							dangerouslySetInnerHTML={{ __html: specification.title }}
						/>
						<ul className={css.specifications}>
							{specification.specifications.map((spec, specIndex) => (
								<li key={`${index}-${specIndex}`} className={css.specParagraph}>
									<SpecRow value={spec.value} label={spec.label} />
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	);
}
