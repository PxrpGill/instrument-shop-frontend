"use client";

import { useState } from "react";
import { useAppLayoutContext } from "@/widgets/app-layout/models/app-layout-context";
import css from "./index.module.css";
import UserMode from "./user-mode";

export default function HeaderContent() {
	const { isHeaderOpened, headerContentModes } = useAppLayoutContext();
	const [isChangeMode, toggleChangeMode] = useState<boolean>(false);

	return (
		<div className={`${css.root} ${isHeaderOpened && css.visible}`.trim()}>
			<UserMode />
		</div>
	);
}
