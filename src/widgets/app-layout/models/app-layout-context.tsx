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
import type { HeaderContentModesType } from "../types/header.types";

type AppLayoutContextType = {
	isFooterVisible: boolean;
	isHeaderOpened: boolean;
	headerContentModes: HeaderContentModesType;

	toggleHeaderContentMode: Dispatch<SetStateAction<HeaderContentModesType>>;
	footerRef: (node?: Element | null | undefined) => void;
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
	const [headerContentModes, toggleHeaderContentMode] =
		useState<HeaderContentModesType>(undefined);

	return (
		<AppLayoutContext.Provider
			value={{
				isFooterVisible,
				isHeaderOpened,
				headerContentModes,
				toggleHeaderContentMode,
				toggleHeaderOpen,
				footerRef,
			}}
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
