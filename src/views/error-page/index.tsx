import type { ErrorPageProps } from "./types/error-page.types";

export default function ErrorPage({ status }: ErrorPageProps) {
	return <main>{status}</main>;
}
