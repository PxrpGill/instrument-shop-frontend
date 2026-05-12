"use client";

import { CaretDownIcon, CheckIcon, XIcon } from "@phosphor-icons/react";
import {
	type ComponentPropsWithoutRef,
	useEffect,
	useId,
	useRef,
	useState,
} from "react";

import css from "./index.module.css";

export type MultiSelectOption = {
	value: string;
	label: string;
};

export type MultiSelectProps = Omit<
	ComponentPropsWithoutRef<"select">,
	"value" | "onChange" | "multiple" | "size"
> & {
	value: string[];
	onChange: (values: string[]) => void;
	options: MultiSelectOption[];
	placeholder?: string;
};

export default function MultiSelect({
	value,
	onChange,
	options,
	placeholder = "Выберите...",
	disabled,
	className = "",
	id,
	name,
	...rest
}: MultiSelectProps) {
	const [isOpen, setIsOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const generatedId = useId();
	const selectId = id ?? generatedId;

	useEffect(() => {
		if (!isOpen) return;

		function handleOutsideClick(e: MouseEvent) {
			if (!containerRef.current?.contains(e.target as Node)) {
				setIsOpen(false);
			}
		}

		document.addEventListener("mousedown", handleOutsideClick);
		return () => document.removeEventListener("mousedown", handleOutsideClick);
	}, [isOpen]);

	function toggleOption(optionValue: string) {
		if (value.includes(optionValue)) {
			onChange(value.filter((v) => v !== optionValue));
		} else {
			onChange([...value, optionValue]);
		}
	}

	function removeChip(optionValue: string, e: React.MouseEvent) {
		e.stopPropagation();
		onChange(value.filter((v) => v !== optionValue));
	}

	const selectedOptions = value
		.map((v) => options.find((o) => o.value === v))
		.filter(Boolean) as MultiSelectOption[];

	return (
		<div
			ref={containerRef}
			className={`${css.root} ${className} ${isOpen ? css.open : ""} ${disabled ? css.disabled : ""}`.trim()}
		>
			<select
				{...rest}
				id={selectId}
				name={name}
				multiple
				disabled={disabled}
				value={value}
				onChange={() => {}}
				className={css.nativeSelect}
				tabIndex={-1}
				aria-hidden
			>
				{options.map((opt) => (
					<option key={opt.value} value={opt.value}>
						{opt.label}
					</option>
				))}
			</select>

			<button
				type="button"
				className={css.trigger}
				onClick={() => !disabled && setIsOpen((prev) => !prev)}
				aria-haspopup="listbox"
				aria-expanded={isOpen}
				aria-controls={`${selectId}-listbox`}
				disabled={disabled}
			>
				<span className={css.selectedArea}>
					{selectedOptions.length === 0 ? (
						<span className={css.placeholder}>{placeholder}</span>
					) : (
						selectedOptions.map((opt) => (
							<span key={opt.value} className={css.chip}>
								{opt.label}
								<button
									type="button"
									className={css.chipRemove}
									onClick={(e) => removeChip(opt.value, e)}
									aria-label={`Убрать ${opt.label}`}
								>
									<XIcon weight="bold" />
								</button>
							</span>
						))
					)}
				</span>
				<CaretDownIcon
					className={`${css.caret} ${isOpen ? css.caretOpen : ""}`}
					weight="bold"
				/>
			</button>

			{isOpen && (
				<ul id={`${selectId}-listbox`} className={css.dropdown}>
					{options.map((opt) => {
						const isSelected = value.includes(opt.value);
						return (
							<li key={opt.value}>
								<button
									type="button"
									aria-pressed={isSelected}
									className={`${css.option} ${isSelected ? css.optionSelected : ""}`}
									onClick={() => toggleOption(opt.value)}
								>
									<span className={css.checkbox}>
										{isSelected && (
											<CheckIcon weight="bold" className={css.checkIcon} />
										)}
									</span>
									{opt.label}
								</button>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
}
