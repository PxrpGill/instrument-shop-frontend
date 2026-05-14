/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

"use client";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ProductCard from "@/entities/product/ui/product-card";
import ProductControls from "@/features/product-controls";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import { useProductListSwiper } from "../../hooks/use-product-list-swiper";
import type { ShowcaseProductListProps } from "../../types/showcase-section.types";
import css from "./index.module.css";

export default function ProductList({
	title,
	products,
	className,
}: ShowcaseProductListProps) {
	const swiperSettings = useProductListSwiper();

	if (!products?.length) return null;

	return (
		<AnimationWrapper className={`${css.root} ${className}`}>
			{title && (
				<h4
					className={`${css.title} container`.trim()}
					dangerouslySetInnerHTML={{ __html: title }}
				/>
			)}
			<Swiper
				className={`${css.slider}`.trim()}
				slidesPerView={swiperSettings.slidesPerView}
				spaceBetween={24}
				modules={[Pagination]}
				pagination={{ clickable: true }}
			>
				{products.map((product) => (
					<SwiperSlide
						className={css.swiperSlide}
						key={`${product.sku}-${product.title}`}
					>
						<ProductCard
							{...product}
							className={css.product}
							productControls={<ProductControls />}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</AnimationWrapper>
	);
}
