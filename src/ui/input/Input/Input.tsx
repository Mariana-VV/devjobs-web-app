import type { ElementType, FC } from "react";
import "./Input.scss";
import type { InputProps } from "../types/BaseInputProps";

type Props = InputProps & {
  Icon: ElementType;
};

export const Input: FC<Props> = ({ text, Icon }) => {
  return (
    <label className="input">
      <Icon className="icon" />
      <input placeholder={text} className="input--field" />
    </label>
  );
};
