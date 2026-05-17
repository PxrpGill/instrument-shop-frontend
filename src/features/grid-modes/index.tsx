"use client";

import { AlignRightSimpleIcon, TextColumnsIcon } from "@phosphor-icons/react";

import Button from "@/shared/ui/button";
import css from "./index.module.css";
import type { GridModesProps } from "./types/grid-modes.types";

export default function GridModes({ onChangeMode, className }: GridModesProps) {
	return (
		<div className={`${css.root} ${className}`}>
			<Button
				onClick={() => onChangeMode("horizontal")}
				className={css.button}
				ariaLabel="Сделать сетку горизонтальной"
			>
				<AlignRightSimpleIcon className={css.icon} />
			</Button>
			<Button
				onClick={() => onChangeMode("vertical")}
				className={css.button}
				ariaLabel="Сделать сетку вертикальной"
			>
				<TextColumnsIcon className={css.icon} />
			</Button>
		</div>
	);
}
