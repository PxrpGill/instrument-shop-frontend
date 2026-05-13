import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import Button from "@/shared/ui/button";
import { HEADER_NAVIGATION_DATA } from "@/widgets/app-layout/models/header.constants";

import css from "./index.module.css";

export default function HeaderMainNavigation({
	className,
}: PropsWithClassName) {
	return (
		<nav className={`${css.root} ${className}`.trim()}>
			<ul className={css.list}>
				{HEADER_NAVIGATION_DATA.map((link) => (
					<li key={`${link.href}-${link.title}`}>
						<Button href={link.href} variant="blank" theme="light">
							{link.title}
						</Button>
					</li>
				))}
			</ul>
		</nav>
	);
}
