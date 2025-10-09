import type { FC } from "react";
import "./Input.scss";
import type { InputProps } from "../types/InputProps";
import Search from "../../../assets/images/search.svg?react";

export const Input: FC<InputProps> = ({ text }) => {
  return (
    <label className="input--label">
      <Search className="icon" />
      <input placeholder={text} className="input-box" />
    </label>
  );
};
