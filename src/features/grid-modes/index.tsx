"use client";

import { AlignRightSimpleIcon, TextColumnsIcon } from "@phosphor-icons/react";

import Button from "@/shared/ui/button";
import css from "./index.module.css";
import type { GridModesProps } from "./types/grid-modes.types";

export default function GridModes({ onChangeMode }: GridModesProps) {
	return (
		<div className={`${css.root}`}>
			<Button onClick={() => onChangeMode("horizontal")} className={css.button}>
				<AlignRightSimpleIcon className={css.icon} />
			</Button>
			<Button onClick={() => onChangeMode("vertical")} className={css.button}>
				<TextColumnsIcon className={css.icon} />
			</Button>
		</div>
	);
}
