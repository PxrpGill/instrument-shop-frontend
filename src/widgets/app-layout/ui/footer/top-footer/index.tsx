import Link from "next/link";
import Logo from "@/shared/ui/logo";
import type { TopFooterProps } from "@/widgets/app-layout/types/footer.types";
import css from "./index.module.css";

export default function TopFooter({ className, telephone }: TopFooterProps) {
	return (
		<div className={`${css.root} ${className}`}>
			<Logo />
			{telephone && (
				<div className={css.feedback}>
					<p className={css.feedbackText}>Свяжитесь с нами!</p>
					<Link href={`tel:${telephone}`} className={css.link}>
						{telephone}
					</Link>
				</div>
			)}
		</div>
	);
}
