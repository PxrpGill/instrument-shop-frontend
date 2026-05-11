import type { PropsWithChildren } from "react";
import { AppLayoutProvider } from "./models/app-layout-context";
import CookiesPanel from "./ui/cookies-panel";
import Footer from "./ui/footer";
import Header from "./ui/header";

export default function AppLayout({ children }: PropsWithChildren) {
	return (
		<AppLayoutProvider>
			<Header />
			{children}
			<CookiesPanel />
			<Footer />
		</AppLayoutProvider>
	);
}
