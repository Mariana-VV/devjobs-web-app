import type { FC } from "react";
import type { BaseButtonProps } from "../types/BaseButtonProps";

export const BaseButton: FC<BaseButtonProps> = ({ text, ...props }) => {
  // const { className } = props;

  return (
    <button {...props} className={`button ${props.className}`}>
      {text}
    </button>
  );
};
