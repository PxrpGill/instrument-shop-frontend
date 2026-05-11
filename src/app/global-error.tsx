"use client";

import ErrorPage from "@/views/error-page";

export default function GlobalError() {
	return (
		<html lang="ru">
			<body>
				<ErrorPage status={500} />
			</body>
		</html>
	);
}
