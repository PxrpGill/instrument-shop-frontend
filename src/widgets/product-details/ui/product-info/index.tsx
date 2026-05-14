/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import type { ProductInfoProps } from "../../types/product-details.types";
import DetailsProductControls from "./details-product-controls";
import css from "./index.module.css";
import ProductInfoDescriptionParameters from "./product-info-description-parameters";
import ProductInfoHeader from "./product-info-header";
import ProductTechicalSpecifications from "./product-techical-specifications";

export default function ProductInfo({
	title,
	description,
	sku,
	descriptionParameters,
	techicalSpecification,
	id,
	price,
	status,
}: ProductInfoProps) {
	return (
		<div className={`${css.root}`}>
			<ProductInfoHeader title={title} description={description} sku={sku} />
			<DetailsProductControls id={id} price={price} status={status} />
			<ProductInfoDescriptionParameters
				descriptionParameters={descriptionParameters}
			/>
			<ProductTechicalSpecifications
				techicalSpecification={techicalSpecification}
			/>
		</div>
	);
}
