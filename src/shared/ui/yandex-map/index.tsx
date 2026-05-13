/** biome-ignore-all lint/suspicious/noShadowRestrictedNames: <explanation> */

"use client";

import { Map, YMaps } from "@pbe/react-yandex-maps";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import css from "./index.module.css";

export default function YandexMap({ className }: PropsWithClassName) {
	return (
		<div className={`${css.root} ${className}`.trim()}>
			<YMaps
				query={{ apikey: process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY ?? "" }}
			>
				<Map
					style={{ width: "100%", height: "100%" }}
					defaultState={{ center: [55.755864, 37.617698], zoom: 10 }}
				></Map>
			</YMaps>
		</div>
	);
}
