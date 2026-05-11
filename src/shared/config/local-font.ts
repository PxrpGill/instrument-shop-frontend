import localFont from "next/font/local";

const GoogleSans = localFont({
	src: [
		{
			path: "../../public/fonts/GoogleSans-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/fonts/GoogleSans-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../public/fonts/GoogleSans-SemiBold.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../public/fonts/GoogleSans-Bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
	display: "swap",
	variable: "--google-sans",
});

export default GoogleSans;
