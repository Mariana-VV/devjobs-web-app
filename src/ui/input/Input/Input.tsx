import type { FC } from "react";
import "./Input.scss";
import type { InputProps } from "../types/InputProps";

export const Input: FC<InputProps> = ({ text }) => {
  return (
    <label>
      <input placeholder={text} className="input-box" />
    </label>
  );
};
