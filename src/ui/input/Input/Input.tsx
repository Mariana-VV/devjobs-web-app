import type { FC } from "react";
import type { Props } from "../../button/types/Props";
import "./Input.scss";

export const Input: FC<Props> = ({ text }) => {
  return (
    <div className="input-block">
      <input placeholder={text} />
    </div>
  );
};
