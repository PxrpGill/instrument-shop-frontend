import type { RegisterOptions } from "react-hook-form";
import type { CheckboxProps } from "../ui/checkbox";
import type { InputProps } from "../ui/input";
import type { MultiSelectProps } from "../ui/multi-select";
import type { TextareaProps } from "../ui/textarea";

export type FormInputsLayoutType = "grid" | "linear";

export type FormInputProps = {
	registrationId: string;
	inputName: "input" | "textarea" | "multi-select" | "checkbox";
	inputProps: InputProps | TextareaProps | MultiSelectProps | CheckboxProps;
	rules?: RegisterOptions;
};

export type FormInputsType = {
	layout: FormInputsLayoutType;
	inputs: Array<FormInputProps>;
};

export type FormSettingsType = {
	formInputs: Array<FormInputsType>;
};
