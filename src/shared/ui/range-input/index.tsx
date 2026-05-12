"use client";

import css from "./index.module.css";

type BaseProps = {
	min: number;
	max: number;
	step?: number;
	className?: string;
};

type SingleProps = BaseProps & {
	variant?: "single";
	value: number;
	onChange: (value: number) => void;
};

type RangeProps = BaseProps & {
	variant: "range";
	value: [number, number];
	onChange: (value: [number, number]) => void;
};

export type RangeInputProps = SingleProps | RangeProps;

export default function RangeInput(props: RangeInputProps) {
	const { min, max, step = 1, className = "" } = props;
	const span = max - min;

	if (props.variant === "range") {
		const { value, onChange } = props;
		const [lower, upper] = value;

		const lowerPct = ((lower - min) / span) * 100;
		const upperPct = ((upper - min) / span) * 100;

		return (
			<div className={`${css.root} ${className}`.trim()}>
				<div className={css.track}>
					<div
						className={css.fill}
						style={{ left: `${lowerPct}%`, width: `${upperPct - lowerPct}%` }}
					/>
				</div>
				<input
					type="range"
					className={css.thumb}
					style={{ zIndex: lower >= upper - step ? 5 : 4 }}
					min={min}
					max={max}
					step={step}
					value={lower}
					onChange={(e) => {
						const next = Math.min(Number(e.target.value), upper - step);
						onChange([next, upper]);
					}}
				/>
				<input
					type="range"
					className={css.thumb}
					style={{ zIndex: lower >= upper - step ? 4 : 5 }}
					min={min}
					max={max}
					step={step}
					value={upper}
					onChange={(e) => {
						const next = Math.max(Number(e.target.value), lower + step);
						onChange([lower, next]);
					}}
				/>
			</div>
		);
	}

	const { value, onChange } = props as SingleProps;
	const pct = ((value - min) / span) * 100;

	return (
		<div className={`${css.root} ${className}`.trim()}>
			<div className={css.track}>
				<div className={css.fill} style={{ left: 0, width: `${pct}%` }} />
			</div>
			<input
				type="range"
				className={css.thumb}
				min={min}
				max={max}
				step={step}
				value={value}
				onChange={(e) => onChange(Number(e.target.value))}
			/>
		</div>
	);
}
