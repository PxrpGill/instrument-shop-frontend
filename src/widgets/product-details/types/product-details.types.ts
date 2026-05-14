import type { ProductCardProps } from "@/entities/product/types/product-card.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type ProductDetailsProps = PropsWithClassName & ProductCardProps;

export type ProductGalleryProps = PropsWithClassName & {
	gallery?: ProductCardProps["gallery"];
};

export type ProductInfoHeaderProps = {
	title?: ProductCardProps["title"];
	description?: ProductCardProps["description"];
	sku?: ProductCardProps["sku"];
} & PropsWithClassName;

export type ProductInfoDescriptionParametersProps = {
	descriptionParameters?: ProductCardProps["descriptionParameters"];
} & PropsWithClassName;

export type ProductTechicalSpecificationsProps = {
	techicalSpecification?: ProductCardProps["techicalSpecifications"];
} & PropsWithClassName;

export type DetailsProductControlsProps = {
	id: ProductCardProps["id"];
	price?: ProductCardProps["price"];
	status?: ProductCardProps["status"];
} & PropsWithClassName;

export type ProductInfoProps = PropsWithClassName &
	ProductInfoHeaderProps &
	ProductTechicalSpecificationsProps &
	DetailsProductControlsProps &
	ProductInfoDescriptionParametersProps & {
		id: ProductCardProps["id"];
		category: ProductCardProps["category"];
		price?: ProductCardProps["price"];
	};
