import {
	ERROR_FALLBACK_404,
	ERROR_FALLBACK_500,
} from "@/shared/config/error-fallback.constants";
import ErrorFallback from "@/shared/ui/error-fallback";
import css from "./index.module.css";
import type { ErrorPageProps } from "./types/error-page.types";

export default function ErrorPage({ status }: ErrorPageProps) {
	return (
		<main className={css.root}>
			<ErrorFallback
				data={status === 404 ? ERROR_FALLBACK_404 : ERROR_FALLBACK_500}
			/>
		</main>
	);
}
