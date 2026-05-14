import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import css from "./index.module.css";

export type PictureFormatDataType = {
	src: string;
	mobile?: string;
};

export type PictureFormatType = {
	original?: PictureFormatDataType;
	webp?: PictureFormatDataType;
	avif?: PictureFormatDataType;
};

export type PosterImageType = {
	poster: PictureFormatType;
};

export type PictureProps = {
	loading?: "eager" | "lazy";
	alt?: string;
	fetchPriority?: "high" | "low" | "auto";
} & PropsWithClassName &
	PosterImageType;

export default function Picture({
	className,
	loading,
	poster,
	alt,
	fetchPriority,
}: PictureProps) {
	return (
		<picture className={`${css.root} ${className}`}>
			{poster.avif && (
				<>
					{poster.avif.mobile && (
						<source
							srcSet={poster.avif.mobile}
							type="image/avif"
							media="(max-width: 767px)"
						/>
					)}
					{poster.avif.src && (
						<source srcSet={poster.avif.src} type="image/avif" />
					)}
				</>
			)}
			{poster.webp && (
				<>
					{poster.webp.mobile && (
						<source
							type="image/webp"
							srcSet={poster.webp.mobile}
							media="(max-width: 767px)"
						/>
					)}
					{poster.webp.src && (
						<source type="image/webp" srcSet={poster.webp.src} />
					)}
				</>
			)}
			{poster.original && (
				<>
					{poster.original.mobile && (
						<source
							srcSet={poster.original.mobile}
							media="(max-width: 767px)"
						/>
					)}
					{poster.original.src && <source srcSet={poster.original.src} />}
				</>
			)}
			<img
				className={css.img}
				src={
					poster?.avif?.src ||
					poster?.webp?.src ||
					poster?.original?.src ||
					poster?.original?.mobile ||
					undefined
				}
				alt={alt}
				fetchPriority={fetchPriority}
				loading={loading ?? "lazy"}
			/>
		</picture>
	);
}
