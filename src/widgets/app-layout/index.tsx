import type { PropsWithChildren } from "react";
import CookiesPanel from "./ui/cookies-panel";
import Footer from "./ui/footer";
import Header from "./ui/header";

export default function AppLayout({ children }: PropsWithChildren) {
	return (
		<>
			<Header />
			{children}
			<CookiesPanel />
			<Footer />
		</>
	);
}
