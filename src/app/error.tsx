"use client";

import ErrorPage from "@/views/error-page";

export default function CustomError() {
	return <ErrorPage status={500} />;
}
