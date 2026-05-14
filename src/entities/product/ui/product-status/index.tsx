import Link from "next/link";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { ProductStatusType } from "../../types/product-card.types";
import css from "./index.module.css";

export default function ProductStatus({
	title,
	slugStatus,
	className,
}: ProductStatusType & PropsWithClassName) {
	return (
		<div className={`${css.root} ${className} ${css[slugStatus]}`.trim()}>
			<div className={css.statusWrap}>
				<div className={css.circle} />
				{title}
			</div>
			<p className={css.legend}>
				Наличие уточняйте по телефону:{" "}
				<Link href="tel:+7 (938) 111-99-77">+7 (938) 111-99-77</Link>
			</p>
		</div>
	);
}
