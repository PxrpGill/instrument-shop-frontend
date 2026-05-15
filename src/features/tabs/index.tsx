/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import Button from "@/shared/ui/button";
import css from "./index.module.css";
import type { TabsProps } from "./types/tabs.types";

export default function Tabs({ className, tabs }: TabsProps) {
	if (!tabs?.length) return null;

	return (
		<div className={`${css.root} ${className}`.trim()}>
			{tabs.map((tab, index) => (
				<Button className={css.tab} key={`${index}-${tab.slug}`}>
					{tab.title}
				</Button>
			))}
		</div>
	);
}
