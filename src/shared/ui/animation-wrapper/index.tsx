"use client";

import type {
	ComponentPropsWithoutRef,
	ElementType,
	PropsWithChildren,
} from "react";

import { useIntersectionObserver } from "@/shared/hooks/use-intersection-observer";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import css from "./index.module.css";

type AnimationWrapperProps<T extends ElementType> = {
	as?: T;
} & PropsWithChildren &
	Omit<ComponentPropsWithoutRef<T>, "as" | "children"> &
	PropsWithClassName;

export function AnimationWrapper<T extends ElementType = "div">({
	as,
	children,
	className = "",
	...rest
}: AnimationWrapperProps<T>) {
	const Component = as ?? "div";
	const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });

	return (
		<Component
			ref={ref as never}
			className={`${css.wrapper} ${isIntersecting && css.visible} ${className}`.trim()}
			{...rest}
		>
			{children}
		</Component>
	);
}
