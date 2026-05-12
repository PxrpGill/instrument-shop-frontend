"use client";

import { MagnifyingGlassIcon } from "@phosphor-icons/react";

import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import Input from "@/shared/ui/input";
import css from "./index.module.css";

export default function SearchFilter({ className }: PropsWithClassName) {
	return (
		<div className={`${css.root} ${className}`.trim()}>
			<p className={css.title}>Поиск</p>
			<Input leftIcon={<MagnifyingGlassIcon />} />
		</div>
	);
}
