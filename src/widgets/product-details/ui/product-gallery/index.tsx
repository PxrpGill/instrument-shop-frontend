/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import Picture from "@/shared/ui/picture";
import type { ProductGalleryProps } from "../../types/product-details.types";
import css from "./index.module.css";

export default function ProductGallery({
	gallery,
	className,
}: ProductGalleryProps) {
	if (!gallery?.length) return null;

	const [firstImage, ...othersImages] = gallery;

	return (
		<div className={`${css.root} ${className}`.trim()}>
			<div className={css.minVersions}>
				{othersImages.map((image, index) => (
					<div className={css.smallImageWrapper} key={index}>
						<Picture poster={image} />
					</div>
				))}
			</div>
			<div className={css.mainImage}>
				<Picture poster={firstImage} />
			</div>
		</div>
	);
}
