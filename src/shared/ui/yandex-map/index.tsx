/** biome-ignore-all lint/suspicious/noShadowRestrictedNames: <explanation> */

"use client";

import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import css from "./index.module.css";

const DEFAULT_CENTER: [number, number] = [47.250999, 39.763243];

interface YandexMapProps extends PropsWithClassName {
	pin?: [number, number];
}

export default function YandexMap({
	className,
	pin = DEFAULT_CENTER,
}: YandexMapProps) {
	return (
		<div className={`${css.root} ${className}`.trim()}>
			<YMaps
				query={{ apikey: process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY ?? "" }}
			>
				<Map
					style={{ width: "100%", height: "100%" }}
					defaultState={{ center: pin, zoom: 16 }}
				>
					<Placemark geometry={pin} />
				</Map>
			</YMaps>
		</div>
	);
}
