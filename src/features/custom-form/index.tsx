/** biome-ignore-all lint/complexity/noUselessFragments: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import { Fragment } from "react";

import Button from "@/shared/ui/button";
import Checkbox, { type CheckboxProps } from "@/shared/ui/checkbox";
import Input, { type InputProps } from "@/shared/ui/input";
import MultiSelect, { type MultiSelectProps } from "@/shared/ui/multi-select";
import Textarea, { type TextareaProps } from "@/shared/ui/textarea";

import css from "./index.module.css";
import type { FeedbackFormProps } from "./types/custom-form.types";

export default function CustomForm({
	formInputs,
	className,
	submitButtonText,
	resetButtonText,
}: FeedbackFormProps) {
	return (
		<form className={`${css.root} ${className}`}>
			{formInputs.map((inputsGroup, index) => {
				return (
					<div
						key={`${index}-${inputsGroup.layout}`}
						className={`${css.inputsGroup} ${css[inputsGroup.layout]}`}
					>
						{inputsGroup.inputs.map((inputProps, inputIndex) => {
							switch (inputProps.inputName) {
								case "input":
									return (
										<Input
											key={`${index}-${inputsGroup.layout}-${inputIndex}`}
											{...(inputProps.inputProps as InputProps)}
										/>
									);

								case "textarea":
									return (
										<Textarea
											key={`${index}-${inputsGroup.layout}-${inputIndex}`}
											{...(inputProps.inputProps as TextareaProps)}
										/>
									);

								case "multi-select":
									return (
										<MultiSelect
											key={`${index}-${inputsGroup.layout}-${inputIndex}`}
											{...(inputProps.inputProps as MultiSelectProps)}
										/>
									);

								case "checkbox":
									return (
										<Checkbox
											key={`${index}-${inputsGroup.layout}-${inputIndex}`}
											{...(inputProps.inputProps as CheckboxProps)}
										/>
									);

								default:
									return (
										<Fragment
											key={`${index}-${inputsGroup.layout}-${inputIndex}`}
										/>
									);
							}
						})}
					</div>
				);
			})}
			<div className={css.buttons}>
				{submitButtonText && (
					<Button type="submit" className={css.submitButton}>
						{submitButtonText}
					</Button>
				)}
				{resetButtonText && (
					<Button type="reset" className={css.resetButton}>
						{resetButtonText}
					</Button>
				)}
			</div>
		</form>
	);
}
