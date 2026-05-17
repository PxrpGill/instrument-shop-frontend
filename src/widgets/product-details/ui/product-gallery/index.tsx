"use client";

import { useState } from "react";
import type { PictureFormatType } from "@/shared/ui/picture";
import Picture from "@/shared/ui/picture";
import type { ProductGalleryProps } from "../../types/product-details.types";
import css from "./index.module.css";

type IndexedImage = { id: number; image: PictureFormatType };

export default function ProductGallery({
	gallery,
	className,
}: ProductGalleryProps) {
	const [images, setImages] = useState<IndexedImage[]>(() =>
		(gallery ?? []).map((image, i) => ({ id: i, image })),
	);

	if (!images.length) return null;

	const [main, ...rest] = images;
	const thumbnails = rest.slice(0, 3);

	const handleThumbnailClick = (thumbnailIndex: number) => {
		setImages((prev) => {
			const realIndex = thumbnailIndex + 1;
			const clicked = prev[realIndex];
			const oldMain = prev[0];
			const remaining = prev.filter((_, i) => i !== 0 && i !== realIndex);
			return [
				clicked,
				...remaining.slice(0, 2),
				oldMain,
				...remaining.slice(2),
			];
		});
	};

	return (
		<div className={`${css.root} ${className}`.trim()}>
			<div className={css.minVersions}>
				{thumbnails.map(({ id, image }, index) => (
					<button
						type="button"
						className={css.smallImageWrapper}
						key={id}
						onClick={() => handleThumbnailClick(index)}
					>
						<Picture poster={image} alt="изображение товара" />
					</button>
				))}
			</div>
			<div className={css.mainImage} key={main.id}>
				<Picture poster={main.image} alt="изображение товара" />
			</div>
		</div>
	);
}
