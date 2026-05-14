import type { ReactNode } from "react";
import type { ProductCategoryProps } from "@/entities/product-categories/types/product-categories.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { PictureFormatType } from "@/shared/ui/picture";

export type ProductCardMode = "vertical" | "horizontal";

export type ProductDescriptionParametersType = {
	title?: string;
	parameters: string;
};

export type ProductTechnicalSpecificationType = {
	label: string;
	value: string;
};

export type ProductTechnicalSpecificationsType = {
	title: string;
	specifications: Array<ProductTechnicalSpecificationType>;
};

export type ProductStatusType = {
	slugStatus: "outOfStock" | "inStock";
	title: string;
};

export type ProductCardProps = {
	id: number;
	category: Array<Omit<ProductCategoryProps, "className" | "poster">>;
	title?: string;
	description?: string;
	poster?: PictureFormatType;
	status?: ProductStatusType;
	price?: number;
	sku?: string;
	cardMode?: ProductCardMode;
	gallery?: Array<PictureFormatType>;
	productControls?: ReactNode;
	descriptionParameters?: Array<ProductDescriptionParametersType>;
	techicalSpecifications?: Array<ProductTechnicalSpecificationsType>;
} & PropsWithClassName;
