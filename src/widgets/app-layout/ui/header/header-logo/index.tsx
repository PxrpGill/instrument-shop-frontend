import css from "./index.module.css";

export default function HeaderLogo() {
	return (
		<div className={css.root}>
			<p className={css.logo}>Инструмент</p>
			<div className={css.verticalDivider} />
			<address className={css.address}>Ростов&#8209;на&#8209;Дону</address>
		</div>
	);
}
