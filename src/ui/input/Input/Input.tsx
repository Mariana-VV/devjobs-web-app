import type { ElementType, FC } from "react";
import "./Input.scss";
import type { InputProps } from "../types/BaseInputProps";

type Props = InputProps & {
  Icon: ElementType;
};

export const Input: FC<Props> = ({ placeholder, Icon, ...props }) => {
  
  return (
    <label className="input">
      <Icon className="input__icon" />
      <input placeholder={placeholder} className="input__field" {...props} />
    </label>
  );
};
