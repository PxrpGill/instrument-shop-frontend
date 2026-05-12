/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import css from "./index.module.css";
import type { ShowcaseSectionProps } from "./types/showcase-section.types";
import ProductList from "./ui/product-list";
import SectionHeader from "./ui/section-header";

export default function ShowcaseSection({
	title,
	button,
	showcases,
}: ShowcaseSectionProps) {
	if (!showcases?.length) return null;

	return (
		<section className={`${css.root}`.trim()}>
			<SectionHeader title={title} button={button} className={css.header} />

			<ul className={css.list}>
				{showcases.map((showcase, index) => (
					<li key={index}>
						<ProductList {...showcase} />
					</li>
				))}
			</ul>
		</section>
	);
}
