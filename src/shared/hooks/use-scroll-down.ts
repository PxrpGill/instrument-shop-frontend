import { useCallback, useEffect, useRef, useState } from "react";

export function useScrollDown() {
	const [isScrollDown, toggleScrollDown] = useState<boolean>(false);
	const currentScrollPositionRef = useRef<number>(0);

	const handleScroll = useCallback(() => {
		const currentRef = currentScrollPositionRef.current;

		if (window.scrollY > currentRef) {
			toggleScrollDown(true);
		} else if (window.scrollY < currentRef) {
			toggleScrollDown(false);
		}

		currentScrollPositionRef.current = window.scrollY;
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll]);

	return isScrollDown;
}
