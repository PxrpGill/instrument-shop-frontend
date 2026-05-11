/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import {
	ERROR_FALLBACK_500,
	type ErrorFallbackDataType,
} from "@/shared/config/error-fallback.constants";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import { AnimationWrapper } from "../animation-wrapper";
import Button from "../button";
import css from "./index.module.css";

export type ErrorFallbackProps = {
	data?: ErrorFallbackDataType;
} & PropsWithClassName;

export default function ErrorFallback({ data, className }: ErrorFallbackProps) {
	const resultData = data ?? ERROR_FALLBACK_500;

	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} ${className} container`.trim()}
		>
			<h2
				className={css.title}
				dangerouslySetInnerHTML={{ __html: resultData.title }}
			/>
			<p
				className={css.description}
				dangerouslySetInnerHTML={{ __html: resultData.description }}
			/>
			{resultData.button && (
				<Button href={resultData.button.href} className={css.button}>
					{resultData.button.title}
				</Button>
			)}
		</AnimationWrapper>
	);
}
