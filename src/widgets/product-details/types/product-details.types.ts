import type { ProductCardProps } from "@/entities/product/types/product-card.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type ProductDetailsProps = PropsWithClassName & ProductCardProps;

export type ProductGalleryProps = PropsWithClassName & {
	gallery?: ProductCardProps["gallery"];
};

export type ProductInfoProps = PropsWithClassName &
	Omit<ProductCardProps, "className" | "poster" | "cardMode" | "gallery">;
