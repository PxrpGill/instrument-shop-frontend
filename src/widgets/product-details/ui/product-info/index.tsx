/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import type { ProductInfoProps } from "../../types/product-details.types";
import css from "./index.module.css";

export default function ProductInfo({ title, description }: ProductInfoProps) {
	return (
		<div className={`${css.root}`}>
			<div className={css.headerInfo}>
				{title && (
					<h4
						dangerouslySetInnerHTML={{ __html: title }}
						className={css.title}
					/>
				)}
				{description && <p dangerouslySetInnerHTML={{ __html: description }} />}
			</div>
		</div>
	);
}
