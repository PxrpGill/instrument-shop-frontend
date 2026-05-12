import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type GridModeType = "vertical" | "horizontal";

export type GridModesProps = {
	onChangeMode: (value: GridModeType) => void;
} & PropsWithClassName;
