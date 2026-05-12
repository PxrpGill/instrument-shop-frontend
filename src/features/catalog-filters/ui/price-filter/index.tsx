"use client";

import { useState } from "react";

import RangeInput from "@/shared/ui/range-input";

import type { PriceFilterProps } from "../../types/catalog-filters.types";
import css from "./index.module.css";

export default function PriceFilter({
	className,
	startRange,
	endRange,
}: PriceFilterProps) {
	const [range, setRange] = useState<[number, number]>([startRange, endRange]);

	return (
		<div className={`${css.root} ${className}`}>
			<div className={css.titleBlock}>
				<p className={css.title}>Цена</p>
				<p className={css.values}>
					{range[0].toLocaleString("ru-RU")} — {range[1].toLocaleString("ru-RU")} ₽
				</p>
			</div>
			<RangeInput
				variant="range"
				min={startRange}
				max={endRange}
				step={100}
				value={range}
				onChange={setRange}
			/>
		</div>
	);
}
