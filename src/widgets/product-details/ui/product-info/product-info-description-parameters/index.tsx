/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import type { ProductInfoDescriptionParametersProps } from "@/widgets/product-details/types/product-details.types";
import css from "./index.module.css";

export default function ProductInfoDescriptionParameters({
	className,
	descriptionParameters,
}: ProductInfoDescriptionParametersProps) {
	if (!descriptionParameters?.length) return null;

	return (
		<div className={`${css.root} ${className}`.trim()}>
			<h4 className={css.title}>Параметры товара</h4>
			<ul className={css.wrap}>
				{descriptionParameters.map((parameter, index) => (
					<li key={index} className={css.paragraph}>
						{parameter.title && (
							<h6
								className={css.parameterTitle}
								dangerouslySetInnerHTML={{ __html: parameter.title }}
							/>
						)}
						{parameter.parameters && (
							<div
								className={css.parameterContent}
								dangerouslySetInnerHTML={{ __html: parameter.parameters }}
							/>
						)}
					</li>
				))}
			</ul>
		</div>
	);
}
