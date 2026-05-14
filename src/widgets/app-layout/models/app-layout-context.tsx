"use client";

import {
	createContext,
	type Dispatch,
	type PropsWithChildren,
	type SetStateAction,
	useContext,
	useState,
} from "react";
import { useIntersectionObserver } from "@/shared/hooks/use-intersection-observer";

type AppLayoutContextType = {
	footerRef: (node?: Element | null | undefined) => void;
	isFooterVisible: boolean;
	isHeaderOpened: boolean;
	toggleHeaderOpen: Dispatch<SetStateAction<boolean>>;
};

export const AppLayoutContext = createContext<AppLayoutContextType | undefined>(
	undefined,
);

export function AppLayoutProvider({ children }: PropsWithChildren) {
	const { ref: footerRef, isIntersecting: isFooterVisible } =
		useIntersectionObserver({
			threshold: 0.1,
		});

	const [isHeaderOpened, toggleHeaderOpen] = useState<boolean>(false);

	return (
		<AppLayoutContext.Provider
			value={{ footerRef, isFooterVisible, isHeaderOpened, toggleHeaderOpen }}
		>
			{children}
		</AppLayoutContext.Provider>
	);
}

export function useAppLayoutContext() {
	const context = useContext(AppLayoutContext);

	if (!context)
		throw new Error(
			"Оберните рабочую область AppLayoutProvider перед использованием useAppLayoutContext",
		);

	return context;
}
