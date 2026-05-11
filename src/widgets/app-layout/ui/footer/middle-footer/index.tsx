import Link from "next/link";
import type { MiddleFooterProps } from "@/widgets/app-layout/types/footer.types";
import css from "./index.module.css";

export default function MiddleFooter({ links, className }: MiddleFooterProps) {
	if (!links?.length) return null;

	return (
		<nav className={`${css.root} ${className}`.trim()}>
			<ul className={css.list}>
				{links.map((link) => (
					<li key={`${link.href}-${link.title}`}>
						<Link
							target={link.target}
							href={link.href ?? "#"}
							className={css.link}
						>
							{link.title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
