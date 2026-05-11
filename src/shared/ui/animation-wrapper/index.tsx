"use client";

import {
	type ComponentPropsWithoutRef,
	type ElementType,
	type ReactNode,
	useRef,
} from "react";

import { useIntersectionAnimation } from "@/shared/hooks/use-intersection-animation";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import css from "./index.module.css";

type AnimationWrapperProps<T extends ElementType> = {
	as?: T;
	children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children"> &
	PropsWithClassName;

export function AnimationWrapper<T extends ElementType = "div">({
	as,
	children,
	className = "",
	...rest
}: AnimationWrapperProps<T>) {
	const Component = as ?? "div";
	const ref = useRef<HTMLElement>(null);

	useIntersectionAnimation(ref, css.visible);

	return (
		<Component
			ref={ref as never}
			className={`${css.wrapper} ${className}`.trim()}
			{...rest}
		>
			{children}
		</Component>
	);
}
