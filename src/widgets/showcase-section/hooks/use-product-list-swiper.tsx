import { MEDIA_QUERIES } from "@/shared/config/use-media-query.constants";
import { useMediaQuery } from "@/shared/hooks/use-media-query";

export function useProductListSwiper() {
	const isMobile = useMediaQuery(MEDIA_QUERIES.mobile);

	return isMobile
		? {
				slidesPerView: 1.1,
				spaceBetween: 5,
			}
		: {
				slidesPerView: 4,
				spaceBetweeen: 24,
			};
}
