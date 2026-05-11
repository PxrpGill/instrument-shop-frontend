import "@/shared/styles/reset.css";
import "@/shared/styles/global.css";
import "@/shared/styles/colors.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import { GENERAL_META } from "@/shared/config/general-meta.constants";
import GoogleSans from "@/shared/config/local-font";
import AppLayout from "@/widgets/app-layout";

export const metadata: Metadata = {
	title: GENERAL_META.title,
	description: GENERAL_META.description,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="ru">
			<head>
				<meta
					name="viewport"
					content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
					key="viewport"
				/>
			</head>
			<body className={GoogleSans.className}>
				<AppLayout>{children}</AppLayout>
			</body>
		</html>
	);
}
