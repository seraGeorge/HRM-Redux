import {
  CSSObjectWithLabel,
  ControlProps,
  DropdownIndicatorProps,
  StylesConfig,
} from "react-select";
import { SelectOptionProps } from "../../core/interfaces/interface";

const selectStyles: StylesConfig<SelectOptionProps> = {
  control: (base: CSSObjectWithLabel, state: ControlProps<SelectOptionProps>) => ({
    ...base,
    fontSize:"14px",
    border: state.isFocused
      ? "1px solid  var(--dark-gray-color)"
      : "1px solid  var(--light-gray-color)",
    boxShadow: "none",
    "&:hover": {
      borderColor: "none",
    },
  }),
  placeholder: (base: CSSObjectWithLabel) => ({
    ...base,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }),
  dropdownIndicator: (
    base: CSSObjectWithLabel,
    state: DropdownIndicatorProps<SelectOptionProps>
  ) => ({
    ...base,
    color: state.isFocused
      ? "var(--dark-gray-color)"
      : "var(--light-gray-color)", // Set the color of the arrow
      "&:hover, &:active, &:focus": {
        color: "var(--dark-gray-color)",
    },
  }),
};
export default selectStyles;
